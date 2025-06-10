"use client";

import React from "react";
import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { Sparkles, Star } from "lucide-react";
import { Marquee } from "@/components/magicui/marquee";

export const FeaturesSection = React.memo(function FeaturesSection() {
  const techStack = [
    { name: "Next.js 15", icon: "⚡" },
    { name: "TypeScript", icon: "🔷" },
    { name: "Tailwind CSS", icon: "🎨" },
    { name: "Prisma ORM", icon: "🗄️" },
    { name: "NextAuth.js", icon: "🔐" },
    { name: "Stripe", icon: "💳" },
    { name: "Resend", icon: "📧" },
    { name: "React Email", icon: "✉️" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "Vercel", icon: "▲" },
    { name: "shadcn/ui", icon: "🎯" },
    { name: "Framer Motion", icon: "🎬" },
  ];

  return (
    <section
      className="py-24 bg-gradient-to-b from-background to-muted/20"
      id="features"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4 px-4 py-2">
            <Sparkles className="w-4 h-4 mr-2" />
            핵심 기능
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            개발에 필요한 모든 것이
            <br />
            이미 준비되어 있습니다
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            프로덕션 레디 SaaS 애플리케이션을 위한 완전한 기능 세트. 더 이상
            기초부터 시작할 필요가 없습니다.
          </p>
        </motion.div>

        {/* Tech Stack Marquee */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="relative overflow-hidden bg-muted/20 rounded-2xl py-2 space-y-4">
            {/* 첫 번째 줄 - 왼쪽으로 흐름 */}
            <Marquee className="py-2" reverse={false}>
              {techStack.slice(0, 6).map((tech, index) => (
                <div
                  key={index}
                  className="mx-4 flex items-center gap-3 px-6 py-3 bg-card/50 backdrop-blur-sm rounded-full border border-border/50 hover:bg-card/80 transition-all duration-300"
                >
                  <span className="text-2xl">{tech.icon}</span>
                  <span className="font-medium text-sm whitespace-nowrap">
                    {tech.name}
                  </span>
                </div>
              ))}
            </Marquee>

            {/* 두 번째 줄 - 오른쪽으로 흐름 (reverse) */}
            <Marquee className="py-2" reverse={true}>
              {techStack.slice(6, 12).map((tech, index) => (
                <div
                  key={index}
                  className="mx-4 flex items-center gap-3 px-6 py-3 bg-card/50 backdrop-blur-sm rounded-full border border-border/50 hover:bg-card/80 transition-all duration-300"
                >
                  <span className="text-2xl">{tech.icon}</span>
                  <span className="font-medium text-sm whitespace-nowrap">
                    {tech.name}
                  </span>
                </div>
              ))}
            </Marquee>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
            <span>5.0/5 평점 · 10,000+ 만족한 개발자</span>
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
          </div>
          <p className="text-lg text-muted-foreground">
            지금 바로 시작해서 당신의 SaaS 아이디어를 빠르게 현실로
            만들어보세요.
          </p>
        </motion.div>
      </div>
    </section>
  );
});
