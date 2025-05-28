import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import WelcomeEmail from "@/emails/WelcomeEmail";
import { render } from "@react-email/render";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { email, userName } = await req.json();

  try {
    const html = await render(WelcomeEmail({ userName }));

    const data = await resend.emails.send({
      from: "noreply@yourdomain.com",
      to: email,
      subject: "회원가입을 환영합니다!",
      html,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ success: false, error });
  }
}
