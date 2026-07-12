import nodemailer from 'nodemailer';

function getTransporter() {
  return nodemailer.createTransport({
    host: process.env.EMAIL_SERVER_HOST,
    port: Number(process.env.EMAIL_SERVER_PORT),
    secure: true,
    auth: {
      user: process.env.EMAIL_SERVER_USER,
      pass: process.env.EMAIL_SERVER_PASSWORD,
    },
  });
}

function escapeHtml(value: unknown): string {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

const brand = {
  name: 'Bahrain Transport Group',
  color: '#d97706',
  whatsapp: 'https://wa.me/966569487569',
  site: 'https://bahraintransportgroup.com',
};

function wrap(body: string): string {
  return `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:20px auto;border:1px solid #e2e8f0;border-radius:8px;overflow:hidden;">
      <div style="background:${brand.color};padding:20px 24px;">
        <h1 style="color:#fff;margin:0;font-size:20px;">${brand.name}</h1>
      </div>
      <div style="padding:24px;">${body}</div>
      <div style="background:#f8fafc;padding:16px 24px;text-align:center;font-size:12px;color:#64748b;border-top:1px solid #e2e8f0;">
        © ${new Date().getFullYear()} ${brand.name} · <a href="${brand.site}" style="color:${brand.color};">bahraintransportgroup.com</a>
      </div>
    </div>`;
}

function row(label: string, value: string): string {
  return `
    <tr>
      <td style="padding:8px 0;font-weight:bold;border-bottom:1px solid #f1f5f9;width:40%;">${label}</td>
      <td style="padding:8px 0;border-bottom:1px solid #f1f5f9;">${escapeHtml(value)}</td>
    </tr>`;
}

interface BookingDetails {
  name: string;
  email: string;
  phone: string;
  service_type: string;
  pickup_location: string;
  dropoff_location: string;
  pickup_date: string;
  pickup_time: string;
  passengers: number | string;
  message?: string | null;
}

export async function sendCustomerConfirmation(booking: BookingDetails) {
  const serviceLabel = booking.service_type.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  const html = wrap(`
    <h2 style="color:#1e293b;margin-top:0;">Booking Request Received ✓</h2>
    <p style="color:#475569;">Hi <strong>${escapeHtml(booking.name)}</strong>, we've received your booking request and will send you a confirmed quote via WhatsApp shortly.</p>
    <table style="width:100%;border-collapse:collapse;margin:16px 0;">
      ${row('Service', serviceLabel)}
      ${row('Pickup', booking.pickup_location)}
      ${row('Drop-off', booking.dropoff_location)}
      ${row('Date', booking.pickup_date)}
      ${row('Time', booking.pickup_time)}
      ${row('Passengers', String(booking.passengers))}
      ${booking.message ? row('Notes', booking.message) : ''}
    </table>
    <p style="color:#475569;font-size:14px;">Questions? Message us on WhatsApp:</p>
    <a href="${brand.whatsapp}" style="display:inline-block;background:${brand.color};color:#fff;padding:12px 24px;border-radius:6px;text-decoration:none;font-weight:bold;">
      Chat on WhatsApp
    </a>
  `);

  await getTransporter().sendMail({
    from: `"${brand.name}" <${process.env.EMAIL_FROM_ADDRESS}>`,
    to: booking.email,
    subject: `Booking Request Received — ${serviceLabel}`,
    html,
    text: `Hi ${booking.name}, we received your booking request for ${serviceLabel} on ${booking.pickup_date} at ${booking.pickup_time}. We'll send your confirmed quote via WhatsApp shortly. Questions? WhatsApp: ${brand.whatsapp}`,
  });
}

const statusMessages: Record<string, { subject: string; heading: string; body: string }> = {
  confirmed: {
    subject: 'Your Booking is Confirmed ✓',
    heading: 'Your Booking is Confirmed!',
    body: 'Great news! Your ride has been confirmed. Your driver will be ready at the scheduled time. If you need to make any changes, please contact us on WhatsApp.',
  },
  completed: {
    subject: 'Thank You for Riding with BTG',
    heading: 'Hope You Enjoyed Your Ride!',
    body: 'Thank you for choosing Bahrain Transport Group. We hope you had a great experience. We\'d love to hear your feedback — a quick review helps other travelers find reliable transport.',
  },
  cancelled: {
    subject: 'Your Booking Has Been Cancelled',
    heading: 'Booking Cancelled',
    body: 'Your booking has been cancelled. If this was unexpected or you\'d like to rebook, please reach out to us on WhatsApp and we\'ll sort it out quickly.',
  },
};

interface StatusBooking extends BookingDetails {
  id: string;
}

export async function sendStatusUpdate(booking: StatusBooking, newStatus: string) {
  const msg = statusMessages[newStatus];
  if (!msg) return;

  const serviceLabel = booking.service_type.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  const reviewBlock = newStatus === 'completed' ? `
    <div style="background:#fffbeb;border:1px solid #fde68a;border-radius:6px;padding:16px;margin:16px 0;">
      <p style="margin:0 0 12px;font-weight:bold;color:#92400e;">Leave a Quick Review</p>
      <a href="${brand.whatsapp}?text=${encodeURIComponent(`Hi BTG! I just completed my ${serviceLabel} ride and would like to leave a review.`)}"
         style="display:inline-block;background:${brand.color};color:#fff;padding:10px 20px;border-radius:6px;text-decoration:none;font-weight:bold;font-size:14px;">
        Send Feedback on WhatsApp
      </a>
    </div>` : '';

  const html = wrap(`
    <h2 style="color:#1e293b;margin-top:0;">${msg.heading}</h2>
    <p style="color:#475569;">${msg.body}</p>
    <table style="width:100%;border-collapse:collapse;margin:16px 0;">
      ${row('Service', serviceLabel)}
      ${row('Pickup', booking.pickup_location)}
      ${row('Drop-off', booking.dropoff_location)}
      ${row('Date', booking.pickup_date)}
      ${row('Time', booking.pickup_time)}
    </table>
    ${reviewBlock}
    <a href="${brand.whatsapp}" style="display:inline-block;background:#1e293b;color:#fff;padding:12px 24px;border-radius:6px;text-decoration:none;font-weight:bold;font-size:14px;">
      Contact Us on WhatsApp
    </a>
  `);

  await getTransporter().sendMail({
    from: `"${brand.name}" <${process.env.EMAIL_FROM_ADDRESS}>`,
    to: booking.email,
    subject: msg.subject,
    html,
    text: `${msg.heading}\n\n${msg.body}\n\nService: ${serviceLabel}\nPickup: ${booking.pickup_location}\nDrop-off: ${booking.dropoff_location}\nDate: ${booking.pickup_date} at ${booking.pickup_time}\n\nWhatsApp: ${brand.whatsapp}`,
  });
}
