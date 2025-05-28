"use client";

import { useState } from "react";
import { loadTossPayments } from "@tosspayments/payment-sdk";
import { PaymentMethod } from "@/types/payment";
import { useAuth } from "@/features/auth/hooks/useAuth";

export default function PaymentCheckout() {
  const paymentMethods: PaymentMethod[] = [
    { method: "카드", label: "신용카드" },
    { method: "가상계좌", label: "가상계좌" },
    { method: "계좌이체", label: "실시간 계좌이체" },
    { method: "휴대폰", label: "휴대폰 결제" },
  ];

  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod | null>(
    paymentMethods[0]
  );
  const [amount, setAmount] = useState<string>("1000");
  const { user } = useAuth();

  const handlePayment = async () => {
    if (!paymentMethod) return;

    // 1. 서버에 결제 사전 생성 요청 (orderId 발급)
    const res = await fetch("/api/payment/prepare", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amount: Number(amount),
        method: paymentMethod.method,
      }),
    });

    const data = await res.json();
    if (!res.ok || !data.orderId) {
      alert(
        data.error || data.message || "결제 준비 실패: 주문번호가 없습니다."
      );
      return;
    }
    const { orderId } = data;

    // 2. Toss 결제창 호출 (orderId가 정상일 때만)
    const tossPayments = await loadTossPayments(
      "test_ck_DnyRpQWGrNbdwvRLRnqLrKwv1M9E"
    );
    try {
      await tossPayments.requestPayment(paymentMethod.method, {
        orderId,
        orderName: "테스트 결제",
        customerName: user?.name || "고객",
        amount: Number(amount),
        successUrl: `${window.location.origin}/success`,
        failUrl: `${window.location.origin}/fail`,
      });
    } catch (error) {
      console.error("결제 요청 실패:", error);
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-xl w-full mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-12 flex flex-col items-center text-center">
          <div className="mb-6 w-full">
            <label className="block text-base font-semibold text-grey-700 mb-3 text-left">
              결제 수단
            </label>
            <div className="flex flex-wrap gap-3 justify-center">
              {paymentMethods.map((method) => (
                <button
                  key={method.method}
                  className={`px-6 py-3 rounded-lg border font-semibold text-base transition-colors duration-150 w-36
                    ${
                      paymentMethod?.method === method.method
                        ? "bg-blue-100 border-blue-500 text-blue-700"
                        : "bg-white border-gray-300 text-gray-800 hover:bg-blue-50"
                    }
                  `}
                  onClick={() => setPaymentMethod(method)}
                  type="button"
                >
                  {method.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6 w-full">
            <label className="block text-base font-semibold text-grey-700 mb-3 text-left">
              결제 금액
            </label>
            <input
              type="number"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-base"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              min="1000"
            />
          </div>

          <button
            className="w-full bg-blue-500 text-white py-3 rounded-lg font-bold text-lg mt-4 hover:bg-blue-600 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
            onClick={handlePayment}
            disabled={!paymentMethod}
          >
            결제하기
          </button>
        </div>
      </div>
    </div>
  );
}
