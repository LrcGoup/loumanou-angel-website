export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { email } = await req.json();

  if (!email || !email.includes("@")) {
    return NextResponse.json(
      { success: false, message: "Adresse e-mail invalide." },
      { status: 400 }
    );
  }

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "lrcgroup.ride@gmail.com",
      subject: "Nouvelle inscription à la newsletter",
      html: `<p><strong>Email :</strong> ${email}</p><p>vient de s’inscrire à la newsletter.</p>`,
    });

    await resend.contacts.create({
      email,
      audienceId: process.env.RESEND_AUDIENCE_ID as string,
    })

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur envoi newsletter :", error);
    return NextResponse.json(
      { success: false, message: "Échec de l'envoi de l'email." },
      { status: 500 }
    );
  }
}
