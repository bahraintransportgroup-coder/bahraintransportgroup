import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { supabaseAdmin } from '@/lib/supabase';
import { rateLimit } from '@/lib/rate-limit';
import { sendCustomerConfirmation } from '@/lib/email';

export const runtime = 'nodejs';

function escapeHtml(value: unknown): string {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export async function POST(req: Request) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0] ?? 'unknown';
  if (!rateLimit(`send-booking:${ip}`, 5, 60_000)) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
  }

  try {
    const body = await req.json();
    const {
      name,
      email,
      phone,
      pickup_location,
      dropoff_location,
      service_type,
      pickup_date,
      pickup_time,
      passengers,
      message,
      promo_code,
    } = body;

    if (!name || !email || !phone || !pickup_location || !dropoff_location || !service_type || !pickup_date || !pickup_time) {
      return NextResponse.json({ error: 'All required fields must be provided' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
    }

    const passengerCount = Math.max(1, Math.floor(Number(passengers) || 1));

    // Re-validate promo code server-side — never trust the client's earlier /api/promo/validate check
    let appliedPromo: { id: string; code: string; uses_count: number } | null = null;
    if (promo_code) {
      const code = String(promo_code).toUpperCase().trim();
      const { data: promo } = await supabaseAdmin
        .from('promo_codes')
        .select('id, code, is_active, expires_at, max_uses, uses_count')
        .eq('code', code)
        .single();

      if (
        promo &&
        promo.is_active &&
        (!promo.expires_at || new Date(promo.expires_at) >= new Date()) &&
        (promo.max_uses === null || promo.uses_count < promo.max_uses)
      ) {
        appliedPromo = promo;
      }
    }

    // Save to database first — if this fails, abort before sending email
    const insertData: Record<string, unknown> = {
      name, email, phone, pickup_location, dropoff_location,
      service_type, pickup_date, pickup_time,
      passengers: passengerCount, message, status: 'pending',
    };
    if (appliedPromo) insertData.promo_code = appliedPromo.code;

    const { error: dbError } = await supabaseAdmin.from('bookings').insert([insertData]);

    if (dbError) {
      console.error('DB insert error:', dbError);
      return NextResponse.json({ error: 'Failed to save booking' }, { status: 500 });
    }

    if (appliedPromo) {
      supabaseAdmin
        .from('promo_codes')
        .update({ uses_count: appliedPromo.uses_count + 1 })
        .eq('id', appliedPromo.id)
        .then(({ error }) => {
          if (error) console.error('Promo uses_count increment failed:', error);
        });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER_HOST,
      port: Number(process.env.EMAIL_SERVER_PORT),
      secure: true,
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"Bahrain Transport Group" <${process.env.EMAIL_FROM_ADDRESS}>`,
      to: process.env.EMAIL_TO_ADDRESS,
      replyTo: email,
      subject: `New Booking Request: ${service_type} from ${name}`,
      text: `
New Booking Request Received:

Name: ${name}
Email: ${email}
Phone: ${phone}
Service Type: ${service_type}
Pickup: ${pickup_location}
Drop-off: ${dropoff_location}
Date: ${pickup_date}
Time: ${pickup_time}
Passengers: ${passengerCount}

Additional Notes:
${message || 'None provided'}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 20px auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
          <h2 style="color: #d97706; margin-bottom: 24px; text-align: center;">New Booking Request</h2>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; border-bottom: 1px solid #f1f5f9;">Full Name:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9;">${escapeHtml(name)}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; border-bottom: 1px solid #f1f5f9;">Email:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9;">${escapeHtml(email)}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; border-bottom: 1px solid #f1f5f9;">Phone:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9;">${escapeHtml(phone)}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; border-bottom: 1px solid #f1f5f9;">Service:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9;">${escapeHtml(service_type)}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; border-bottom: 1px solid #f1f5f9;">Pickup:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9;">${escapeHtml(pickup_location)}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; border-bottom: 1px solid #f1f5f9;">Drop-off:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9;">${escapeHtml(dropoff_location)}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; border-bottom: 1px solid #f1f5f9;">Date &amp; Time:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9;">${escapeHtml(pickup_date)} at ${escapeHtml(pickup_time)}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; border-bottom: 1px solid #f1f5f9;">Passengers:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9;">${passengerCount}</td>
            </tr>
          </table>

          <div style="margin-top: 24px;">
            <p style="font-weight: bold; margin-bottom: 8px;">Additional Notes:</p>
            <div style="padding: 12px; background-color: #f8fafc; border-radius: 4px; border: 1px solid #e2e8f0;">
              ${escapeHtml(message) || 'None provided'}
            </div>
          </div>

          <div style="margin-top: 24px; text-align: center; font-size: 12px; color: #64748b;">
            This request was submitted via bahraintransportgroup.com
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    // Send confirmation to customer (non-blocking — don't fail the request if this fails)
    sendCustomerConfirmation({
      name, email, phone, service_type, pickup_location, dropoff_location,
      pickup_date, pickup_time, passengers: passengerCount, message,
    }).catch((err) => console.error('Customer confirmation email failed:', err));

    return NextResponse.json({ success: true, message: 'Booking submitted successfully' });
  } catch (error) {
    console.error('Booking error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to submit booking' },
      { status: 500 }
    );
  }
}
