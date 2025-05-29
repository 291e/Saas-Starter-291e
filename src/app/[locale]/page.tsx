import { Button } from "@/components/ui/button";
import { getDictionary } from "@/lib/i18n";
import { Locale } from "@/lib/i18n/config";
import Link from "next/link";
import { CheckoutButton } from "@/components/payment/checkout-button";
import { SendEmailForm } from "@/components/email/send-email-form";

export default async function Home({ params }: { params: { locale: Locale } }) {
  const { locale } = await params;
  const dict = getDictionary(locale);

  return (
    <div className="flex h-full flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold text-center mb-8">
          {dict.home.title}
        </h1>
        <p className="text-center mb-8">{dict.home.description}</p>
        <div className="flex justify-center gap-4">
          <CheckoutButton />

          <Link href="/docs">
            <Button variant="outline">{dict.home.viewDocs}</Button>
          </Link>

          <SendEmailForm />
        </div>
      </div>
    </div>
  );
}
