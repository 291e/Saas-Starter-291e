import React from "react";

export const TestimonialsSection = React.memo(function TestimonialsSection() {
  return (
    <section className="w-full py-16">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">고객 후기</h2>
        {/* 여러 후기 카드 등 */}
      </div>
    </section>
  );
});
