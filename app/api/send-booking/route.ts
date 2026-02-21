import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
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
        } = body;

        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_SERVER_HOST,
            port: Number(process.env.EMAIL_SERVER_PORT),
            secure: true, // true for 465, false for other ports
            auth: {
                user: process.env.EMAIL_SERVER_USER,
                pass: process.env.EMAIL_SERVER_PASSWORD,
            },
        });

        const mailOptions = {
            from: `"${name}" <${process.env.EMAIL_FROM_ADDRESS}>`,
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
Passengers: ${passengers}

Additional Notes:
${message || 'None provided'}
      `,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 20px auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
          <h2 style="color: #d97706; margin-bottom: 24px; text-align: center;">New Booking Request</h2>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; border-bottom: 1px solid #f1f5f9;">Full Name:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; border-bottom: 1px solid #f1f5f9;">Email:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; border-bottom: 1px solid #f1f5f9;">Phone:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; border-bottom: 1px solid #f1f5f9;">Service:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9;">${service_type}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; border-bottom: 1px solid #f1f5f9;">Pickup:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9;">${pickup_location}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; border-bottom: 1px solid #f1f5f9;">Drop-off:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9;">${dropoff_location}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; border-bottom: 1px solid #f1f5f9;">Date & Time:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9;">${pickup_date} at ${pickup_time}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; border-bottom: 1px solid #f1f5f9;">Passengers:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9;">${passengers}</td>
            </tr>
          </table>

          <div style="margin-top: 24px;">
            <p style="font-weight: bold; margin-bottom: 8px;">Additional Notes:</p>
            <div style="padding: 12px; background-color: #f8fafc; border-radius: 4px; border: 1px solid #e2e8f0;">
              ${message || 'None provided'}
            </div>
          </div>
          
          <div style="margin-top: 24px; text-align: center; font-size: 12px; color: #64748b;">
            This request was submitted via bahraintransportgroup.com
          </div>
        </div>
      `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
        console.error('Email error:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to send email' },
            { status: 500 }
        );
    }
}
