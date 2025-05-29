"use client";

import { useState } from "react";
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
import WelcomeEmail from "@/emails/WelcomeEmail";
import { render } from "@react-email/render";
import { useAuth } from "@/features/auth/hooks/useAuth";

export function SendEmailForm() {
  const params = useParams();
  const locale = params.locale as Locale;
  const dict = getDictionary(locale);
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const emailHtml = render(
        WelcomeEmail({ userName: user?.name || "고객" })
      ).toString();

      const res = await fetch("/api/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          subject: "환영합니다!",
          html: emailHtml,
        }),
      });

      const data = await res.json();
      if (data.success) {
        alert(dict.email.success);
        setIsOpen(false);
      } else {
        alert(dict.email.error);
      }
    } catch (error) {
      console.error("이메일 전송 에러:", error);
      alert(dict.email.errorDetail);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">{dict.email.test}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{dict.email.title}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">{dict.email.address}</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? dict.email.sending : dict.email.send}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
