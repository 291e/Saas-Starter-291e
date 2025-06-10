import React from "react";
import { Button } from "@/components/ui/button";

export const CTASection = React.memo(function CTASection() {
  return (
    <section className="w-full py-16">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">지금 바로 시작해보세요!</h2>
        <Button size="lg">회원가입</Button>
      </div>
    </section>
  );
});
