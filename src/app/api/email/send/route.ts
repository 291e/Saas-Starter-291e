import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// 환경변수에서 키 읽기
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { email, subject, html } = await req.json();

    const data = await resend.emails.send({
      from: "onboarding@resend.dev", // Resend에 등록된 도메인
      to: email,
      subject,
      html,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ success: false, error });
  }
}
