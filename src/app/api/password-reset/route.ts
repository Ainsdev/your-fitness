import { Resend } from "resend";
import * as React from "react";
import EmailTemplate from "@/components/emails/password-reset";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const body = await request.json();
  const { token } = body;
  try {
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["delivered@resend.dev"],
      subject: "Hello world",
      react: EmailTemplate({ token: token }) as React.ReactElement,
    });

    if (error) {
      return Response.json({ error });
    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error });
  }
}
