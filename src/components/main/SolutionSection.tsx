"use client";

import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle,
  Zap,
  Shield,
  Database,
  CreditCard,
  Mail,
  Users,
  BarChart3,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export const SolutionSection = React.memo(function SolutionSection() {
  const solutions = [
    {
      id: 1,
      icon: Zap,
      title: "즉시 시작 가능",
      description:
        "완전히 설정된 개발 환경으로 5분 안에 SaaS 개발을 시작하세요.",
      size: "large", // 2x2
      gradient: "from-blue-500 to-cyan-500",
      features: ["Next.js 15", "TypeScript", "ESLint 설정", "Prettier 설정"],
    },
    {
      id: 2,
      icon: Shield,
      title: "보안 내장",
      description: "업계 표준 보안이 미리 구현되어 있습니다.",
      size: "medium", // 1x2
      gradient: "from-green-500 to-emerald-500",
      features: ["JWT 인증", "CSRF 보호", "Rate Limiting"],
    },
    {
      id: 3,
      icon: Database,
      title: "데이터베이스 준비",
      description: "Prisma ORM으로 완벽하게 설정된 데이터베이스",
      size: "medium", // 1x2
      gradient: "from-purple-500 to-pink-500",
      features: ["PostgreSQL", "Migration", "Seeding"],
    },
    {
      id: 4,
      icon: CreditCard,
      title: "결제 통합",
      description: "Stripe 결제 시스템이 바로 사용 가능합니다.",
      size: "small", // 1x1
      gradient: "from-orange-500 to-red-500",
      features: ["구독 결제", "일회성 결제"],
    },
    {
      id: 5,
      icon: Mail,
      title: "이메일 자동화",
      description: "React Email과 Resend로 구성된 시스템",
      size: "small", // 1x1
      gradient: "from-indigo-500 to-blue-500",
      features: ["템플릿", "자동 발송"],
    },
    {
      id: 6,
      icon: Users,
      title: "사용자 관리",
      description: "완전한 사용자 관리 시스템",
      size: "medium", // 2x1
      gradient: "from-pink-500 to-rose-500",
      features: ["회원가입", "로그인", "프로필 관리", "권한 관리"],
    },
  ];

  const getSizeClasses = (size: string) => {
    switch (size) {
      case "large":
        return "md:col-span-2 md:row-span-2";
      case "medium":
        return "md:col-span-1 md:row-span-2";
      case "wide":
        return "md:col-span-2 md:row-span-1";
      default:
        return "md:col-span-1 md:row-span-1";
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge
            variant="secondary"
            className="mb-4 px-4 py-2 bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800 text-green-600 dark:text-green-400"
          >
            <CheckCircle className="w-4 h-4 mr-2" />
            솔루션
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-green-500">SaaS Start Kit</span>이
            <br />
            모든 것을 해결해드립니다
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            반복적인 개발 작업을 건너뛰고, 바로 비즈니스 로직에 집중하세요. 모든
            기본 기능이 이미 준비되어 있습니다.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr"
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4, scale: 1.02 }}
              className={`${getSizeClasses(solution.size)}`}
            >
              <Card className="h-full border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 group relative overflow-hidden">
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
                />

                <CardContent
                  className={`p-6 relative h-full flex flex-col ${solution.size === "large" ? "justify-center" : "justify-start"}`}
                >
                  <div className="flex-grow">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${solution.gradient} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <solution.icon className="w-6 h-6 text-white" />
                    </div>

                    <h3
                      className={`font-bold mb-3 group-hover:text-primary transition-colors duration-300 ${solution.size === "large" ? "text-2xl" : "text-lg"}`}
                    >
                      {solution.title}
                    </h3>

                    <p
                      className={`text-muted-foreground leading-relaxed mb-4 ${solution.size === "large" ? "text-lg" : "text-sm"}`}
                    >
                      {solution.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2">
                      {solution.features.map((feature, featureIndex) => (
                        <Badge
                          key={featureIndex}
                          variant="secondary"
                          className="text-xs bg-background/50 hover:bg-background/80 transition-colors"
                        >
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* CTA for large card */}
                  {solution.size === "large" && (
                    <div className="mt-6">
                      <Button
                        className="group/btn bg-primary hover:bg-primary/90 text-primary-foreground"
                        size="lg"
                      >
                        지금 시작하기
                        <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  )}
                </CardContent>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>

                {/* Bottom Accent */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${solution.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto"
        >
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 text-3xl font-bold text-green-500 mb-2">
              <BarChart3 className="w-8 h-8" />
              80%
            </div>
            <p className="text-sm text-muted-foreground">개발 시간 단축</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 text-3xl font-bold text-green-500 mb-2">
              <Zap className="w-8 h-8" />
              5분
            </div>
            <p className="text-sm text-muted-foreground">설정 완료 시간</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 text-3xl font-bold text-green-500 mb-2">
              <CheckCircle className="w-8 h-8" />
              100%
            </div>
            <p className="text-sm text-muted-foreground">프로덕션 준비</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
});
