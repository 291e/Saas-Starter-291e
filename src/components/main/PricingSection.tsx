"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Sparkles, Zap, Crown, Star, ArrowRight } from "lucide-react";

export const PricingSection = React.memo(function PricingSection() {
  const plans = [
    {
      name: "스타터",
      description: "개인 개발자를 위한 무료 플랜",
      price: "무료",
      period: "",
      highlight: false,
      icon: Star,
      features: [
        "기본 UI 컴포넌트",
        "사용자 인증 (이메일/비밀번호)",
        "데이터베이스 설정",
        "기본 이메일 템플릿",
        "커뮤니티 지원",
      ],
      buttonText: "무료로 시작",
      gradient: "from-gray-500 to-slate-500",
    },
    {
      name: "프로",
      description: "성장하는 스타트업을 위한 완전한 솔루션",
      price: "49,000",
      period: "/월",
      highlight: true,
      icon: Zap,
      badge: "인기",
      features: [
        "모든 스타터 기능 포함",
        "소셜 로그인 (Google, GitHub 등)",
        "결제 시스템 (Stripe 통합)",
        "고급 이메일 자동화",
        "관리자 대시보드",
        "프리미엄 컴포넌트",
        "우선 기술 지원",
      ],
      buttonText: "프로 플랜 시작",
      gradient: "from-blue-500 to-indigo-500",
    },
    {
      name: "엔터프라이즈",
      description: "대규모 팀과 기업을 위한 맞춤형 솔루션",
      price: "상담",
      period: "",
      highlight: false,
      icon: Crown,
      features: [
        "모든 프로 기능 포함",
        "화이트라벨 솔루션",
        "맞춤형 개발 지원",
        "전용 서버 지원",
        "24/7 전담 지원",
        "온사이트 교육",
        "SLA 보장",
      ],
      buttonText: "영업팀 문의",
      gradient: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section
      className="py-24 bg-gradient-to-b from-muted/20 to-background"
      id="pricing"
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
            요금제
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            프로젝트 규모에 맞는
            <br />
            완벽한 플랜을 선택하세요
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            무료 체험부터 엔터프라이즈까지, SaaS Start Kit으로 당신의 개발
            여정을 가속화하세요.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`relative ${plan.highlight ? "md:-mt-4 md:mb-4" : ""}`}
            >
              <Card
                className={`h-full border-2 transition-all duration-300 group relative overflow-hidden ${
                  plan.highlight
                    ? "border-primary shadow-2xl shadow-primary/20 bg-card"
                    : "border-border hover:border-primary/50 bg-card/50"
                }`}
              >
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
                />

                {/* Popular Badge */}
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary px-4 py-1 font-bold">
                      {plan.badge}
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center relative">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${plan.gradient} p-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold mb-2">
                    {plan.name}
                  </CardTitle>
                  <CardDescription className="text-base mb-4">
                    {plan.description}
                  </CardDescription>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">
                      {plan.price === "상담" ? plan.price : `₩${plan.price}`}
                    </span>
                    {plan.period && (
                      <span className="text-muted-foreground text-lg">
                        {plan.period}
                      </span>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="relative">
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full ${
                      plan.highlight
                        ? "bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-primary/25"
                        : "bg-secondary hover:bg-secondary/80"
                    } transition-all duration-300 group/btn`}
                    size="lg"
                  >
                    {plan.buttonText}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>

                {/* Glow Effect */}
                {plan.highlight && (
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary/10 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                )}
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground">
            모든 플랜은 14일 무료 체험이 포함되어 있습니다.
            <br />
            궁금한 점이 있으시면{" "}
            <span className="text-primary hover:underline cursor-pointer">
              개발자 지원팀
            </span>
            에 문의해주세요.
          </p>
        </motion.div>
      </div>
    </section>
  );
});
