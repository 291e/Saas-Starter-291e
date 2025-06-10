"use client";

import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  HelpCircle,
  MessageCircle,
  ArrowRight,
  Shield,
  Code2,
  CreditCard,
  Rocket,
  Users,
} from "lucide-react";
import { SendEmailForm } from "../email/send-email-form";

export const FAQSection = React.memo(function FAQSection() {
  const faqs = [
    {
      id: "tech-stack",
      question: "어떤 기술 스택이 포함되어 있나요?",
      answer:
        "Next.js 15, TypeScript, Tailwind CSS, Prisma ORM, NextAuth.js, Stripe, Resend, React Email, PostgreSQL 등 최신 기술 스택이 완전히 설정되어 있습니다. 모든 기술은 프로덕션 레디 상태로 구성되어 있어 바로 사용할 수 있습니다.",
      icon: Code2,
      category: "기술",
    },
    {
      id: "pricing",
      question: "가격 정책은 어떻게 되나요?",
      answer:
        "SaaS Start Kit은 일회성 구매 제품입니다. 구매 후 모든 소스 코드를 받으시고, 상업적 용도로 무제한 사용 가능합니다. 별도의 월 사용료나 로열티는 없습니다. 평생 업데이트도 포함되어 있습니다.",
      icon: CreditCard,
      category: "가격",
    },
    {
      id: "customization",
      question: "커스터마이징이 어려울까요?",
      answer:
        "전혀 어렵지 않습니다! 모든 컴포넌트는 모듈화되어 있어 쉽게 수정 가능하며, 상세한 문서와 예제 코드가 제공됩니다. 브랜딩, 색상, 레이아웃 등을 간단히 변경할 수 있는 설정 파일들이 포함되어 있습니다.",
      icon: Users,
      category: "개발",
    },
    {
      id: "deployment",
      question: "배포는 어떻게 하나요?",
      answer:
        "Vercel, Netlify, AWS 등 다양한 플랫폼에 배포 가능합니다. 특히 Vercel에는 원클릭 배포가 가능하도록 설정되어 있으며, 도메인 연결과 환경 변수 설정 가이드도 포함되어 있습니다.",
      icon: Rocket,
      category: "배포",
    },
    {
      id: "security",
      question: "보안은 어떻게 보장되나요?",
      answer:
        "업계 표준 보안 관행을 따릅니다. JWT 토큰 인증, CSRF 보호, Rate Limiting, 데이터 암호화, SQL Injection 방지 등이 기본으로 구현되어 있습니다. 정기적인 보안 업데이트도 제공됩니다.",
      icon: Shield,
      category: "보안",
    },
    {
      id: "support",
      question: "지원은 어떻게 받을 수 있나요?",
      answer:
        "Discord 커뮤니티, 이메일 지원, 그리고 상세한 문서를 통해 지원을 받을 수 있습니다. 또한 GitHub Issues를 통해 버그 리포트나 기능 요청도 가능합니다. 평균 24시간 내 응답을 목표로 합니다.",
      icon: MessageCircle,
      category: "지원",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section
      className="py-24 bg-gradient-to-b from-background to-muted/20"
      id="faq"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4 px-4 py-2">
            <HelpCircle className="w-4 h-4 mr-2" />
            FAQ
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            자주 묻는 질문
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            SaaS Start Kit에 대해 궁금한 점들을 모았습니다. 더 궁금한 사항이
            있으시면 언제든 문의해 주세요.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Card className="border-0 bg-card/50 backdrop-blur-sm shadow-lg">
            <CardContent className="p-8">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq) => (
                  <motion.div key={faq.id} variants={itemVariants}>
                    <AccordionItem
                      value={faq.id}
                      className="border border-border/50 rounded-xl px-6 data-[state=open]:bg-muted/30 transition-all duration-300"
                    >
                      <AccordionTrigger className="hover:no-underline py-6">
                        <div className="flex items-center gap-4 text-left">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <faq.icon className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <Badge variant="outline" className="mb-2 text-xs">
                              {faq.category}
                            </Badge>
                            <p className="font-semibold text-lg leading-tight">
                              {faq.question}
                            </p>
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pb-6 pt-2">
                        <div className="ml-14 text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card className="border-0 bg-gradient-to-r from-primary/5 to-secondary/5 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-2">
                    더 궁금한 점이 있으신가요?
                  </h3>
                  <p className="text-muted-foreground">
                    언제든 문의해 주세요. 24시간 내 답변드리겠습니다.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <SendEmailForm />
                  <Button size="lg" className="group">
                    지금 시작하기
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
});
