import { NextResponse } from "next/server";
import { AppConfig } from "@/config/app.config";
import { prisma } from "@/lib/prisma";

// 환경 변수에서 API 키 가져오기
const apiSecretKey = process.env.TOSS_PAYMENTS_SECRET_KEY;
if (!apiSecretKey) {
  throw new Error("Toss Payments API 키가 설정되지 않았습니다.");
}

const encryptedApiSecretKey =
  "Basic " + Buffer.from(apiSecretKey + ":").toString("base64");

interface PaymentConfirmRequest {
  paymentKey: string;
  orderId: string;
  amount: number;
}

interface PaymentError {
  code: string;
  message: string;
}

export async function POST(request: Request) {
  if (!AppConfig.payment.enabled) {
    return NextResponse.json(
      { error: true, message: "결제 기능이 비활성화되어 있습니다." },
      { status: 403 }
    );
  }

  try {
    const body = (await request.json()) as PaymentConfirmRequest;
    console.log("API 요청 데이터:", body);

    const { paymentKey, orderId, amount } = body;

    // 금액 유효성 검사
    const plan = Object.values(AppConfig.payment.plans).find(
      (p) => p.price === amount
    );
    if (!plan) {
      return NextResponse.json(
        { error: true, message: "유효하지 않은 결제 금액입니다." },
        { status: 400 }
      );
    }

    const response = await fetch(
      "https://api.tosspayments.com/v1/payments/confirm",
      {
        method: "POST",
        headers: {
          Authorization: encryptedApiSecretKey,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          orderId,
          amount,
          paymentKey,
        }),
      }
    );

    if (!response.ok) {
      const errorData = (await response.json()) as PaymentError;
      console.error("Toss Payments API Error:", errorData);
      // 실패 기록
      await prisma.payment.updateMany({
        where: { orderId },
        data: {
          status: "FAILED",
          failReason: errorData.message,
        },
      });
      return NextResponse.json(
        {
          error: true,
          message: errorData.message || "결제 처리 중 오류가 발생했습니다.",
          code: errorData.code,
        },
        { status: response.status }
      );
    }

    const result = await response.json();
    console.log("Toss Payments API Success Response:", result);

    // 성공 기록
    await prisma.payment.updateMany({
      where: { orderId },
      data: {
        status: "SUCCESS",
        paymentKey,
      },
    });

    return NextResponse.json({
      success: true,
      data: result,
      plan: plan.name,
    });
  } catch (error) {
    console.error("Server Error:", error);
    // 실패 기록
    const { orderId } = (await request.json()) as PaymentConfirmRequest;
    await prisma.payment.updateMany({
      where: { orderId },
      data: {
        status: "FAILED",
        failReason: String(error),
      },
    });
    return NextResponse.json(
      {
        error: true,
        message: "서버 오류가 발생했습니다.",
        code: "INTERNAL_SERVER_ERROR",
      },
      { status: 500 }
    );
  }
}
