import React from "react";

export const BlogSection = React.memo(function BlogSection() {
  return (
    <section className="w-full py-16 bg-muted/50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">블로그</h2>
        {/* 최신 글 리스트 등 */}
      </div>
    </section>
  );
});
