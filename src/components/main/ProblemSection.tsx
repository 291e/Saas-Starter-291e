"use client";

import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Clock,
  Code2,
  DollarSign,
  AlertTriangle,
  Zap,
  Users,
} from "lucide-react";

export const ProblemSection = React.memo(function ProblemSection() {
  const problems = [
    {
      icon: Clock,
      title: "개발 시간 부족",
      description:
        "기본 기능 구현에만 몇 달이 걸려 핵심 비즈니스 로직에 집중할 시간이 없어요.",
      gradient: "from-red-500 to-orange-500",
    },
    {
      icon: Code2,
      title: "복잡한 설정",
      description:
        "인증, 결제, 이메일 등 매번 반복되는 설정들을 처음부터 구현해야 해요.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: DollarSign,
      title: "높은 초기 비용",
      description:
        "프로젝트 시작 전에 이미 많은 개발 비용과 시간이 투자되어야 해요.",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: AlertTriangle,
      title: "보안 걱정",
      description:
        "사용자 데이터 보안과 인증 시스템을 안전하게 구현하기가 어려워요.",
      gradient: "from-yellow-500 to-amber-500",
    },
    {
      icon: Zap,
      title: "확장성 문제",
      description:
        "처음엔 간단했던 코드가 사용자가 늘어나면서 관리하기 어려워져요.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Users,
      title: "팀 협업 어려움",
      description:
        "프로젝트 구조가 명확하지 않아 팀원들과 효율적으로 작업하기 힘들어요.",
      gradient: "from-indigo-500 to-blue-500",
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
    <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
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
            variant="outline"
            className="mb-4 px-4 py-2 border-red-200 text-red-600 dark:border-red-800 dark:text-red-400"
          >
            <AlertTriangle className="w-4 h-4 mr-2" />
            문제점
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            SaaS 개발, <span className="text-red-500">이런 고민</span>
            <br />
            있으신가요?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            매번 반복되는 기본 기능 개발에 지쳐있다면, 이제 핵심 비즈니스에만
            집중할 때입니다.
          </p>
        </motion.div>

        {/* Problems Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {problems.map((problem) => (
            <motion.div
              key={problem.title}
              variants={itemVariants}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="h-full border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 group relative overflow-hidden">
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${problem.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
                />

                <CardContent className="p-6 relative">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${problem.gradient} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <problem.icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                    {problem.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {problem.description}
                  </p>
                </CardContent>

                {/* Bottom Accent */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${problem.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-full">
            <Clock className="w-4 h-4 text-red-500" />
            <span className="text-sm text-red-600 dark:text-red-400 font-medium">
              평균 6개월의 개발 시간을 절약할 수 있습니다
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
});
