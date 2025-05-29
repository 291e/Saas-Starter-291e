"use client";

import { useState } from "react";
import { loadTossPayments } from "@tosspayments/payment-sdk";
import { PaymentMethod } from "@/types/payment";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useParams } from "next/navigation";
import { getDictionary } from "@/lib/i18n";
import { Locale } from "@/lib/i18n/config";

export function CheckoutButton() {
  const params = useParams();
  const locale = params.locale as Locale;
  const dict = getDictionary(locale);

  const paymentMethods: PaymentMethod[] = [
    { method: "카드", label: dict.payment.methods.card },
    { method: "가상계좌", label: dict.payment.methods.virtual },
    { method: "계좌이체", label: dict.payment.methods.transfer },
    { method: "휴대폰", label: dict.payment.methods.phone },
  ];

  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod | null>(
    paymentMethods[0]
  );
  const [amount, setAmount] = useState<string>("1000");
  const [isOpen, setIsOpen] = useState(false);
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
      setIsOpen(false);
    } catch (error) {
      console.error("결제 요청 실패:", error);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button>{dict.payment.checkout}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{dict.payment.title}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">{dict.payment.method}</label>
            <div className="flex flex-wrap gap-2">
              {paymentMethods.map((method) => (
                <button
                  key={method.method}
                  className={`px-4 py-2 rounded-md border text-sm transition-colors
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

          <div className="space-y-2">
            <label className="text-sm font-medium">{dict.payment.amount}</label>
            <input
              type="number"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              min="1000"
            />
          </div>

          <Button
            className="w-full"
            onClick={handlePayment}
            disabled={!paymentMethod}
          >
            {dict.payment.proceed}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
