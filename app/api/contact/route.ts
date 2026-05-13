import { Resend } from "resend";
import { siteConfig } from "@/lib/siteConfig";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Payload = {
  firstName?: string;
  lastName?: string;
  email?: string;
  eventDate?: string;
  eventType?: string;
  message?: string;
};

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return Response.json(
      { error: "Email service is not configured." },
      { status: 500 },
    );
  }

  let data: Payload;
  try {
    data = (await req.json()) as Payload;
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const firstName = data.firstName?.trim() ?? "";
  const lastName = data.lastName?.trim() ?? "";
  const email = data.email?.trim() ?? "";
  const message = data.message?.trim() ?? "";
  const eventDate = data.eventDate?.trim() ?? "";
  const eventType = data.eventType?.trim() ?? "";

  if (!firstName || !lastName || !email || !message) {
    return Response.json(
      { error: "Please fill in your name, email, and a short message." },
      { status: 400 },
    );
  }
  if (!EMAIL_RE.test(email)) {
    return Response.json(
      { error: "That email address doesn't look right." },
      { status: 400 },
    );
  }

  const fullName = `${firstName} ${lastName}`;
  const eventLabel = eventType || "your event";
  const eventDateLabel = eventDate || "TBD";

  const subject = `Thanks for your inquiry — ${eventLabel}${
    eventDate ? ` on ${eventDate}` : ""
  }`;

  const html = renderInquiryEmail({
    fullName,
    firstName,
    email,
    eventType: eventLabel,
    eventDate: eventDateLabel,
    message,
  });

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: `${siteConfig.name} <${siteConfig.email}>`,
    to: email,
    bcc: siteConfig.email,
    replyTo: email,
    subject,
    html,
  });

  if (error) {
    return Response.json(
      { error: "We couldn't send your inquiry. Please try again or call us." },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}

function renderInquiryEmail(props: {
  fullName: string;
  firstName: string;
  email: string;
  eventType: string;
  eventDate: string;
  message: string;
}) {
  const { firstName, fullName, email, eventType, eventDate, message } = props;
  const esc = (s: string) =>
    s
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");

  return `<!doctype html>
<html>
  <body style="margin:0;padding:0;background:#faf6f1;font-family:'Helvetica Neue',Arial,sans-serif;color:#1a1612;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background:#faf6f1;padding:32px 16px;">
      <tr>
        <td align="center">
          <table width="560" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border:1px solid #e6dccf;border-radius:20px;overflow:hidden;">
            <tr>
              <td style="padding:36px 36px 16px 36px;">
                <div style="font-size:11px;letter-spacing:0.25em;text-transform:uppercase;color:#8a7d6d;">${esc(siteConfig.name)}</div>
                <h1 style="margin:14px 0 0 0;font-size:26px;line-height:1.15;font-weight:500;letter-spacing:-0.01em;">Thanks, ${esc(firstName)} &mdash; we got it.</h1>
                <p style="margin:16px 0 0 0;font-size:15px;line-height:1.6;color:#5a5045;">
                  We received your inquiry and a member of our team will be in touch within 24 hours. Here's a copy of what you sent in case you want to reference it later.
                </p>
              </td>
            </tr>
            <tr>
              <td style="padding:8px 36px 8px 36px;">
                <table width="100%" cellpadding="0" cellspacing="0" style="border-top:1px solid #e6dccf;border-bottom:1px solid #e6dccf;margin-top:8px;">
                  ${row("Name", esc(fullName))}
                  ${row("Email", esc(email))}
                  ${row("Event type", esc(eventType))}
                  ${row("Event date", esc(eventDate))}
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:20px 36px 8px 36px;">
                <div style="font-size:11px;letter-spacing:0.25em;text-transform:uppercase;color:#8a7d6d;margin-bottom:8px;">Message</div>
                <div style="font-size:15px;line-height:1.6;color:#1a1612;white-space:pre-wrap;">${esc(message)}</div>
              </td>
            </tr>
            <tr>
              <td style="padding:24px 36px 36px 36px;">
                <div style="font-size:13px;color:#5a5045;line-height:1.6;">
                  Need to add something? Just reply to this email &mdash; it goes straight to our team.
                </div>
                <div style="margin-top:20px;font-size:12px;color:#8a7d6d;">
                  ${esc(siteConfig.name)} &middot; ${esc(siteConfig.serviceArea)} &middot; ${esc(siteConfig.phone)}
                </div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

function row(label: string, value: string) {
  return `<tr>
    <td style="padding:10px 0;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:#8a7d6d;width:120px;vertical-align:top;">${label}</td>
    <td style="padding:10px 0;font-size:15px;color:#1a1612;">${value}</td>
  </tr>`;
}
