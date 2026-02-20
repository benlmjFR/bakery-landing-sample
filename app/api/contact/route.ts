import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

const schema = z.object({
  prenom: z.string().min(2),
  nom: z.string().min(2),
  email: z.string().email(),
  telephone: z.string().optional(),
  objet: z.string().optional(),
  message: z.string().min(10),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = schema.parse(body);

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"X Boulangerie Site" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO || "boulangerie@gmail.com",
      replyTo: data.email,
      subject: `[X] ${data.objet || "Nouveau message"} – ${data.prenom} ${data.nom}`,
      html: `
        <div style="font-family:sans-serif;max-width:580px;margin:0 auto;padding:2rem;border:1px solid #fcddd7;border-radius:12px;">
          <h2 style="color:#B84F40;font-family:Georgia,serif;margin-bottom:1.5rem;">Nouveau message depuis boulangerie.com</h2>
          <table style="width:100%;border-collapse:collapse;font-size:0.92rem;">
            <tr><td style="padding:0.5rem 0;color:#8A6560;width:120px;">Prénom</td><td style="color:#2B1714;font-weight:600;">${data.prenom}</td></tr>
            <tr><td style="padding:0.5rem 0;color:#8A6560;">Nom</td><td style="color:#2B1714;font-weight:600;">${data.nom}</td></tr>
            <tr><td style="padding:0.5rem 0;color:#8A6560;">Email</td><td><a href="mailto:${data.email}" style="color:#E07B65;">${data.email}</a></td></tr>
            ${data.telephone ? `<tr><td style="padding:0.5rem 0;color:#8A6560;">Téléphone</td><td style="color:#2B1714;">${data.telephone}</td></tr>` : ""}
            ${data.objet ? `<tr><td style="padding:0.5rem 0;color:#8A6560;">Objet</td><td style="color:#2B1714;">${data.objet}</td></tr>` : ""}
          </table>
          <div style="margin-top:1.5rem;padding:1.2rem;background:#FFF5F3;border-radius:8px;border-left:3px solid #E07B65;">
            <p style="color:#4A2822;line-height:1.7;white-space:pre-wrap;">${data.message}</p>
          </div>
          <p style="margin-top:1.5rem;font-size:0.78rem;color:#8A6560;">
            Message reçu via le formulaire de contact de boulangerie.com
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contact/route]", err);
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Données invalides", details: err.errors },
        { status: 400 },
      );
    }
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
