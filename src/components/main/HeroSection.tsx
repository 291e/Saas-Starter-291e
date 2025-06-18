"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Marquee } from "@/components/magicui/marquee";
import { ArrowRight, Sparkles, Zap, Users, TrendingUp } from "lucide-react";

export const HeroSection = React.memo(function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/20 py-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent" />

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-24 h-24 md:w-32 md:h-32 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-3/4 right-1/4 w-16 h-16 md:w-24 md:h-24 bg-blue-500/10 rounded-full blur-2xl animate-bounce" />
      <div className="absolute bottom-1/4 left-1/3 w-12 h-12 md:w-20 md:h-20 bg-purple-500/10 rounded-full blur-xl animate-ping" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 mb-6 md:mb-8 text-xs md:text-sm font-medium bg-primary/10 border border-primary/20 rounded-full backdrop-blur-sm"
        >
          <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-primary" />
          SaaS 개발의 새로운 시작
          <ArrowRight className="w-2 h-2 md:w-3 md:h-3" />
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight mb-4 md:mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent leading-tight"
        >
          빠르게 구축하는
          <br />
          <span className="text-primary">SaaS의 미래</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed px-4"
        >
          최신 기술 스택으로 구성된 완전한 SaaS 스타터 킷.
          <br className="hidden sm:block" />
          <span className="text-primary font-semibold">SaaS Start Kit</span>으로
          당신의 아이디어를 현실로 만드세요.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 md:mb-16 px-4"
        >
          <Button
            size="lg"
            className="w-full sm:w-auto text-base md:text-lg px-6 md:px-8 py-5 md:py-6 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-2xl hover:shadow-primary/25 transition-all duration-300 group"
          >
            무료로 시작하기
            <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16 max-w-2xl mx-auto px-4"
        >
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2 text-2xl md:text-3xl font-bold text-primary mb-1">
              <Users className="w-6 h-6 md:w-8 md:h-8" />
              10K+
            </div>
            <p className="text-xs md:text-sm text-muted-foreground">
              개발자들이 선택
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2 text-2xl md:text-3xl font-bold text-primary mb-1">
              <Sparkles className="w-6 h-6 md:w-8 md:h-8" />
              500+
            </div>
            <p className="text-xs md:text-sm text-muted-foreground">
              성공한 프로젝트
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2 text-2xl md:text-3xl font-bold text-primary mb-1">
              <TrendingUp className="w-6 h-6 md:w-8 md:h-8" />
              99%
            </div>
            <p className="text-xs md:text-sm text-muted-foreground">
              개발 시간 단축
            </p>
          </div>
        </motion.div>

        {/* Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="w-full max-w-4xl mx-auto px-4"
        >
          <Marquee
            repeat={3}
            pauseOnHover
            className="py-3 md:py-4 text-xs md:text-sm text-muted-foreground border border-border/40 rounded-2xl bg-card/50 backdrop-blur-sm"
          >
            <span className="mx-4 md:mx-8 flex items-center gap-2">
              <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-primary" />
              Next.js 15
            </span>
            <span className="mx-4 md:mx-8 flex items-center gap-2">
              <Zap className="w-3 h-3 md:w-4 md:h-4 text-primary" />
              TypeScript
            </span>
            <span className="mx-4 md:mx-8 flex items-center gap-2">
              <Users className="w-3 h-3 md:w-4 md:h-4 text-primary" />
              Prisma ORM
            </span>
            <span className="mx-4 md:mx-8 flex items-center gap-2">
              <TrendingUp className="w-3 h-3 md:w-4 md:h-4 text-primary" />
              shadcn/ui
            </span>
          </Marquee>
        </motion.div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
});
