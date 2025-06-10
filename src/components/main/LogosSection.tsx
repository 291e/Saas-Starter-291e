import React from "react";

export const LogosSection = React.memo(function LogosSection() {
  return (
    <section className="w-full py-10 flex flex-col items-center">
      {/* 파트너/브랜드 로고 나열 */}
      <div className="flex flex-wrap justify-center gap-6 opacity-70">
        {/* 예시: <img src="/logo1.svg" alt="Brand1" className="h-8" /> */}
      </div>
    </section>
  );
});
