// ─────────────────────────────────────────────────────────────
// Route API Next.js — envoi du formulaire de contact
//
// Option A (recommandée) : Resend  → npm install resend
// Option B              : Nodemailer (SMTP)
//
// Configurez vos variables dans .env.local :
//   RESEND_API_KEY=re_xxxxx
//   ou
//   SMTP_HOST=smtp.gmail.com
//   SMTP_PORT=587
//   SMTP_USER=saime@gmail.com
//   SMTP_PASS=votre_mot_de_passe_app
// ─────────────────────────────────────────────────────────────
import { NextRequest, NextResponse } from 'next/server'
import { CONTACT_EMAIL } from '@/lib/constants'

// ── Types ────────────────────────────────────────────────────
interface ContactPayload {
  name:    string
  email:   string
  subject: string
  message: string
}

// ── Validation ───────────────────────────────────────────────
function validate(data: unknown): ContactPayload | null {
  if (!data || typeof data !== 'object') return null
  const { name, email, subject, message } = data as Record<string, unknown>
  if (
    typeof name    !== 'string' || name.trim().length < 2 ||
    typeof email   !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    typeof subject !== 'string' || subject.trim().length < 2 ||
    typeof message !== 'string' || message.trim().length < 10
  ) return null
  return {
    name:    name.trim(),
    email:   email.trim().toLowerCase(),
    subject: subject.trim(),
    message: message.trim(),
  }
}

// ── HTML du mail ─────────────────────────────────────────────
function buildHtml(data: ContactPayload): string {
  return `
<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"><title>Contact SAIME</title></head>
<body style="font-family:'Georgia',serif;background:#f7f5f1;padding:40px 0;margin:0">
  <div style="max-width:560px;margin:0 auto;background:#fff;padding:48px">
    <p style="font-family:'Courier New',monospace;font-size:10px;letter-spacing:0.4em;color:#bbb;text-transform:uppercase;margin:0 0 32px">
      SAIME Boulangerie · Nouveau message
    </p>
    <h1 style="font-weight:300;font-size:28px;color:#1a1a1a;margin:0 0 32px;letter-spacing:0.06em">
      ${data.subject}
    </h1>
    <table style="width:100%;border-collapse:collapse;margin-bottom:32px">
      <tr>
        <td style="padding:12px 0;border-bottom:1px solid #eee;font-family:'Courier New',monospace;font-size:9px;letter-spacing:0.3em;color:#bbb;text-transform:uppercase;width:80px">
          De
        </td>
        <td style="padding:12px 0;border-bottom:1px solid #eee;font-size:15px;color:#1a1a1a">
          ${data.name}
        </td>
      </tr>
      <tr>
        <td style="padding:12px 0;border-bottom:1px solid #eee;font-family:'Courier New',monospace;font-size:9px;letter-spacing:0.3em;color:#bbb;text-transform:uppercase">
          Email
        </td>
        <td style="padding:12px 0;border-bottom:1px solid #eee;font-size:15px;color:#1a1a1a">
          <a href="mailto:${data.email}" style="color:#1a1a1a">${data.email}</a>
        </td>
      </tr>
    </table>
    <p style="font-size:16px;color:#555;line-height:1.75;white-space:pre-wrap">${data.message}</p>
    <div style="margin-top:48px;padding-top:24px;border-top:1px solid #eee">
      <p style="font-family:'Courier New',monospace;font-size:8px;letter-spacing:0.3em;color:#ccc;text-transform:uppercase;margin:0">
        SAIME Boulangerie · 195 Boulevard Voltaire · Paris 11e
      </p>
    </div>
  </div>
</body>
</html>`
}

// ── Handler principal ────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const data = validate(body)

    if (!data) {
      return NextResponse.json(
        { error: 'Données invalides' },
        { status: 400 }
      )
    }

    // ══════════════════════════════════════════════
    // OPTION A — Resend (recommandé, très simple)
    // npm install resend
    // ══════════════════════════════════════════════
    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import('resend')
      const resend = new Resend(process.env.RESEND_API_KEY)

      await resend.emails.send({
        from:    'SAIME Contact <onboarding@resend.dev>',  // → remplacer par contact@saime-boulangerie.fr
        to:      CONTACT_EMAIL,
        replyTo: data.email,
        subject: `[SAIME] ${data.subject} — ${data.name}`,
        html:    buildHtml(data),
      })

      return NextResponse.json({ ok: true })
    }

    // ══════════════════════════════════════════════
    // OPTION B — Nodemailer (SMTP)
    // npm install nodemailer @types/nodemailer
    // ══════════════════════════════════════════════
    if (process.env.SMTP_HOST) {
      const nodemailer = await import('nodemailer')

      const transporter = nodemailer.default.createTransport({
        host:   process.env.SMTP_HOST,
        port:   Number(process.env.SMTP_PORT) || 587,
        secure: process.env.SMTP_PORT === '465',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      })

      await transporter.sendMail({
        from:    `"SAIME Boulangerie" <${process.env.SMTP_USER}>`,
        to:      CONTACT_EMAIL,
        replyTo: data.email,
        subject: `[SAIME] ${data.subject} — ${data.name}`,
        html:    buildHtml(data),
      })

      return NextResponse.json({ ok: true })
    }

    // ══════════════════════════════════════════════
    // Aucun provider configuré — log console en dev
    // ══════════════════════════════════════════════
    if (process.env.NODE_ENV === 'development') {
      console.log('📬 Contact form (dev mode — aucun provider configuré):')
      console.table(data)
      return NextResponse.json({ ok: true })
    }

    return NextResponse.json(
      { error: 'Serveur email non configuré' },
      { status: 500 }
    )

  } catch (err) {
    console.error('[/api/contact]', err)
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    )
  }
}
