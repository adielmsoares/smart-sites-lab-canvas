import nodemailer from 'nodemailer';
import { z } from 'zod';

const BRAND = {
  name: 'Smart Sites Lab',
  green: '#22c55e',
  dark: '#0f172a',
  inbox: 'smartsiteslab@gmail.com',
};

const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(150),
  phone: z.string().trim().max(30).optional().default(''),
  message: z.string().trim().min(10).max(5000),
  language: z.enum(['pt', 'en']).optional().default('pt'),
  // Honeypot: real users never fill this hidden field
  website: z.string().max(0).optional().default(''),
});

type ContactData = z.infer<typeof contactSchema>;

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const rateLimitStore = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const hits = (rateLimitStore.get(ip) ?? []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  hits.push(now);
  rateLimitStore.set(ip, hits);
  return hits.length > RATE_LIMIT_MAX;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

const MAX_BODY_BYTES = 50_000;

function json(status: number, body: Record<string, unknown>, headers: Record<string, string> = {}): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8', ...headers },
  });
}

async function readBody(req: Request): Promise<unknown> {
  const raw = await req.text();
  if (raw.length > MAX_BODY_BYTES) throw new Error('Payload too large');
  return raw ? JSON.parse(raw) : {};
}

function getClientIp(req: Request, context?: { ip?: string }): string {
  return (
    context?.ip ||
    req.headers.get('x-nf-client-connection-ip') ||
    req.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
    'unknown'
  );
}

function layout(title: string, content: string): string {
  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title}</title>
</head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#0f172a;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f1f5f9;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:600px;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(15,23,42,0.08);">
          <tr>
            <td style="background:${BRAND.dark};padding:28px 32px;">
              <span style="font-size:22px;font-weight:700;color:#ffffff;">Smart Sites <span style="color:${BRAND.green};">Lab</span></span>
            </td>
          </tr>
          <tr>
            <td style="height:4px;background:linear-gradient(90deg,${BRAND.green},#0ea5e9);"></td>
          </tr>
          ${content}
          <tr>
            <td style="background:#f8fafc;padding:20px 32px;border-top:1px solid #e2e8f0;font-size:12px;color:#64748b;text-align:center;">
              ${BRAND.name} &bull; Brasília - DF | Goiânia - GO<br />
              <a href="mailto:${BRAND.inbox}" style="color:${BRAND.green};text-decoration:none;">${BRAND.inbox}</a> &bull; +55 (61) 99112-7447
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function infoRow(label: string, value: string): string {
  return `<tr>
    <td style="padding:12px 0;border-bottom:1px solid #e2e8f0;width:130px;font-size:13px;font-weight:600;color:#64748b;text-transform:uppercase;letter-spacing:0.5px;vertical-align:top;">${label}</td>
    <td style="padding:12px 0;border-bottom:1px solid #e2e8f0;font-size:15px;color:#0f172a;">${value}</td>
  </tr>`;
}

function buildInternalEmail(data: ContactData, receivedAt: string): string {
  const name = escapeHtml(data.name);
  const email = escapeHtml(data.email);
  const phone = escapeHtml(data.phone);
  const message = escapeHtml(data.message).replace(/\n/g, '<br />');

  const content = `
    <tr>
      <td style="padding:32px 32px 8px;">
        <span style="display:inline-block;background:#dcfce7;color:#15803d;font-size:12px;font-weight:600;padding:6px 12px;border-radius:999px;">Novo contato pelo site</span>
        <h1 style="margin:16px 0 4px;font-size:22px;color:#0f172a;">Você recebeu uma nova mensagem</h1>
        <p style="margin:0;font-size:14px;color:#64748b;">Recebida em ${receivedAt}</p>
      </td>
    </tr>
    <tr>
      <td style="padding:16px 32px;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
          ${infoRow('Nome', name)}
          ${infoRow('E-mail', `<a href="mailto:${email}" style="color:${BRAND.green};text-decoration:none;">${email}</a>`)}
          ${phone ? infoRow('Telefone', phone) : ''}
          ${infoRow('Idioma', data.language === 'en' ? 'Inglês' : 'Português')}
        </table>
      </td>
    </tr>
    <tr>
      <td style="padding:8px 32px 24px;">
        <p style="margin:0 0 8px;font-size:13px;font-weight:600;color:#64748b;text-transform:uppercase;letter-spacing:0.5px;">Mensagem</p>
        <div style="background:#f8fafc;border-left:4px solid ${BRAND.green};border-radius:8px;padding:16px 20px;font-size:15px;line-height:1.6;color:#1e293b;">${message}</div>
      </td>
    </tr>
    <tr>
      <td style="padding:0 32px 32px;" align="center">
        <a href="mailto:${email}?subject=${encodeURIComponent('Re: Contato - Smart Sites Lab')}" style="display:inline-block;background:${BRAND.green};color:#ffffff;font-weight:600;font-size:15px;text-decoration:none;padding:14px 28px;border-radius:10px;">Responder ${name}</a>
      </td>
    </tr>`;

  return layout('Novo contato - Smart Sites Lab', content);
}

function buildAutoReplyEmail(data: ContactData): string {
  const isEn = data.language === 'en';
  const firstName = escapeHtml(data.name.split(' ')[0]);
  const message = escapeHtml(data.message).replace(/\n/g, '<br />');

  const content = `
    <tr>
      <td style="padding:32px;">
        <h1 style="margin:0 0 16px;font-size:22px;color:#0f172a;">${isEn ? `Hi, ${firstName}!` : `Olá, ${firstName}!`}</h1>
        <p style="margin:0 0 16px;font-size:15px;line-height:1.6;color:#334155;">
          ${isEn
      ? 'Thank you for contacting <strong>Smart Sites Lab</strong>. We have received your message and our team will get back to you within <strong>24 business hours</strong>.'
      : 'Obrigado por entrar em contato com a <strong>Smart Sites Lab</strong>. Recebemos sua mensagem e nossa equipe retornará em até <strong>24 horas úteis</strong>.'}
        </p>
        <p style="margin:24px 0 8px;font-size:13px;font-weight:600;color:#64748b;text-transform:uppercase;letter-spacing:0.5px;">
          ${isEn ? 'Your message' : 'Sua mensagem'}
        </p>
        <div style="background:#f8fafc;border-left:4px solid ${BRAND.green};border-radius:8px;padding:16px 20px;font-size:14px;line-height:1.6;color:#475569;">${message}</div>
        <p style="margin:24px 0 0;font-size:15px;line-height:1.6;color:#334155;">
          ${isEn ? 'Best regards,' : 'Atenciosamente,'}<br />
          <strong>${isEn ? 'Smart Sites Lab Team' : 'Equipe Smart Sites Lab'}</strong>
        </p>
      </td>
    </tr>`;

  return layout(isEn ? 'We received your message' : 'Recebemos sua mensagem', content);
}

export const config = { path: '/api/contact' };

export default async function handler(req: Request, context?: { ip?: string }): Promise<Response> {
  if (req.method !== 'POST') {
    return json(405, { ok: false, error: 'Method not allowed' }, { Allow: 'POST' });
  }

  const { GMAIL_USER, GMAIL_APP_PASSWORD, SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, MAIL_FROM } = process.env;
  const inbox = process.env.CONTACT_INBOX || BRAND.inbox;
  const useSmtp = Boolean(SMTP_HOST && SMTP_USER && SMTP_PASS);
  const useGmail = Boolean(GMAIL_USER && GMAIL_APP_PASSWORD);
  const sender = MAIL_FROM || GMAIL_USER || BRAND.inbox;
  if (!useSmtp && !useGmail) {
    console.error('[contact] Missing SMTP_* or GMAIL_* env vars');
    return json(500, { ok: false, error: 'Email service not configured' });
  }

  if (isRateLimited(getClientIp(req, context))) {
    return json(429, { ok: false, error: 'Too many requests' });
  }

  let body: unknown;
  try {
    body = await readBody(req);
  } catch {
    return json(400, { ok: false, error: 'Invalid request body' });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return json(400, {
      ok: false,
      error: 'Invalid data',
      fields: parsed.error.flatten().fieldErrors,
    });
  }

  const data = parsed.data;
  if (data.website) {
    // Silently accept bot submissions without sending anything
    return json(200, { ok: true });
  }

  const port = Number(SMTP_PORT) || 587;
  const transporter = useSmtp
    ? nodemailer.createTransport({
        host: SMTP_HOST,
        port,
        secure: port === 465,
        auth: { user: SMTP_USER, pass: SMTP_PASS },
      })
    : nodemailer.createTransport({
        service: 'gmail',
        auth: { user: GMAIL_USER, pass: GMAIL_APP_PASSWORD },
      });

  const receivedAt = new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });
  const safeName = data.name.replace(/[\r\n"]/g, ' ');

  try {
    await transporter.sendMail({
      from: `"Site Smart Sites Lab" <${sender}>`,
      to: inbox,
      replyTo: { name: safeName, address: data.email },
      subject: `Novo contato pelo site: ${safeName}`,
      text: `Nome: ${data.name}\nE-mail: ${data.email}\nTelefone: ${data.phone || '-'}\nRecebida em: ${receivedAt}\n\nMensagem:\n${data.message}`,
      html: buildInternalEmail(data, receivedAt),
    });
  } catch (err) {
    console.error('[contact] Failed to send internal email:', err);
    return json(502, { ok: false, error: 'Failed to send email' });
  }

  try {
    const isEn = data.language === 'en';
    await transporter.sendMail({
      from: `"Smart Sites Lab" <${sender}>`,
      to: { name: safeName, address: data.email },
      replyTo: inbox,
      subject: isEn ? 'We received your message - Smart Sites Lab' : 'Recebemos sua mensagem - Smart Sites Lab',
      text: isEn
        ? `Hi, ${data.name}!\n\nThank you for contacting Smart Sites Lab. We will get back to you within 24 business hours.\n\nSmart Sites Lab Team`
        : `Olá, ${data.name}!\n\nObrigado por entrar em contato com a Smart Sites Lab. Retornaremos em até 24 horas úteis.\n\nEquipe Smart Sites Lab`,
      html: buildAutoReplyEmail(data),
    });
  } catch (err) {
    // The lead was already delivered; a failed confirmation should not fail the request
    console.error('[contact] Failed to send auto-reply:', err);
  }

  return json(200, { ok: true });
}
