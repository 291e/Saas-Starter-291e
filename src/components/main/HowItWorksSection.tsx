"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Download,
  Code2,
  Rocket,
  CheckCircle,
  ArrowRight,
  Settings,
  Globe,
  Play,
} from "lucide-react";

export const HowItWorksSection = React.memo(function HowItWorksSection() {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const steps = [
    {
      id: 1,
      icon: Download,
      title: "다운로드 & 설치",
      description: "GitHub에서 프로젝트를 클론하고 의존성을 설치합니다.",
      details: [
        "git clone 명령어로 저장소 복제",
        "npm install 또는 yarn install 실행",
        "환경 변수 설정 (.env 파일)",
        "데이터베이스 연결 확인",
      ],
      gradient: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50 dark:bg-blue-950/20",
    },
    {
      id: 2,
      icon: Settings,
      title: "커스터마이징",
      description: "브랜딩, 기능, 설정을 프로젝트에 맞게 수정합니다.",
      details: [
        "로고 및 브랜딩 변경",
        "필요한 기능 활성화/비활성화",
        "결제 설정 (Stripe 키 등)",
        "이메일 템플릿 커스터마이징",
      ],
      gradient: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50 dark:bg-purple-950/20",
    },
    {
      id: 3,
      icon: Rocket,
      title: "배포 & 런칭",
      description: "프로덕션 환경에 배포하고 SaaS를 런칭합니다.",
      details: [
        "Vercel 또는 다른 플랫폼에 배포",
        "도메인 연결 및 SSL 설정",
        "데이터베이스 마이그레이션",
        "모니터링 및 분석 설정",
      ],
      gradient: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50 dark:bg-green-950/20",
    },
  ];

  // 자동 진행 로직
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        setProgress((prev) => {
          if (prev >= 100) {
            // 다음 스텝으로 이동
            setIsAnimating(true);
            setTimeout(() => {
              setCurrentStep((step) => (step + 1) % steps.length);
              setProgress(0);
              setIsAnimating(false);
            }, 500);
            return 100;
          }
          return prev + 0.8; // 더 부드러운 진행을 위해 0.8%씩 증가
        });
      }
    }, 50); // 더 부드러운 애니메이션을 위해 50ms로 감소

    return () => clearInterval(interval);
  }, [isAnimating, steps.length]);

  // 수동 스텝 변경
  const goToStep = (stepIndex: number) => {
    if (stepIndex !== currentStep && !isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentStep(stepIndex);
        setProgress(0);
        setIsAnimating(false);
      }, 300);
    }
  };

  const currentStepData = steps[currentStep];

  return (
    <section className="py-24 bg-gradient-to-b from-muted/20 to-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
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
            className="mb-4 px-4 py-2 border-primary/20 text-primary"
          >
            <Code2 className="w-4 h-4 mr-2" />
            이용 방법
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-primary">3단계</span>로 완성하는
            <br />
            나만의 SaaS
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            복잡한 설정 없이 간단한 3단계만 따라하면 완전한 SaaS 애플리케이션이
            완성됩니다.
          </p>
        </motion.div>

        {/* Main Content Container */}
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Side - Steps Navigation */}
          <div className="lg:w-1/3 space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                onClick={() => goToStep(index)}
                className={`cursor-pointer p-4 rounded-xl transition-all duration-300 ${
                  index === currentStep
                    ? `${currentStepData.bgColor} border-2 border-primary/20`
                    : "hover:bg-muted/50 border-2 border-transparent"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center gap-4">
                  {/* Step Number/Icon */}
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      index === currentStep
                        ? `bg-gradient-to-br ${step.gradient} text-white shadow-lg`
                        : index < currentStep
                          ? "bg-green-500 text-white"
                          : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {index < currentStep ? (
                      <CheckCircle className="w-6 h-6" />
                    ) : index === currentStep ? (
                      <step.icon className="w-6 h-6" />
                    ) : (
                      <span className="font-bold">{step.id}</span>
                    )}
                  </div>

                  {/* Step Info */}
                  <div className="flex-1">
                    <h3
                      className={`font-bold transition-colors duration-300 ${
                        index === currentStep
                          ? "text-foreground"
                          : "text-muted-foreground"
                      }`}
                    >
                      {step.title}
                    </h3>
                    {index === currentStep && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="mt-2"
                      >
                        {/* Progress Bar */}
                        <div className="w-full bg-muted rounded-full h-3">
                          <motion.div
                            className={`h-full bg-gradient-to-r ${step.gradient} rounded-full shadow-sm`}
                            style={{ width: `${progress}%` }}
                            transition={{
                              width: { duration: 0.1, ease: "linear" },
                            }}
                          />
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Side - Current Step Details */}
          <div className="lg:w-2/3">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 50, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -50, scale: 0.95 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <Card className="border-0 bg-card/50 backdrop-blur-sm shadow-2xl overflow-hidden">
                  {/* Card Header with Gradient */}
                  <div
                    className={`h-2 bg-gradient-to-r ${currentStepData.gradient}`}
                  />

                  <CardContent className="p-8">
                    {/* Icon and Badge */}
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${currentStepData.gradient} p-4 shadow-lg`}
                      >
                        <currentStepData.icon className="w-8 h-8 text-white" />
                      </div>
                      <Badge
                        variant="secondary"
                        className="text-sm font-bold px-3 py-1"
                      >
                        STEP {currentStepData.id}
                      </Badge>
                    </div>

                    {/* Title and Description */}
                    <h3 className="text-3xl font-bold mb-4">
                      {currentStepData.title}
                    </h3>
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                      {currentStepData.description}
                    </p>

                    {/* Details List */}
                    <div className="space-y-4 mb-8">
                      {currentStepData.details.map((detail, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="flex items-center gap-3"
                        >
                          <div
                            className={`w-6 h-6 rounded-full bg-gradient-to-br ${currentStepData.gradient} flex items-center justify-center flex-shrink-0`}
                          >
                            <CheckCircle className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-muted-foreground">
                            {detail}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-4">
                      <Button
                        size="lg"
                        className={`bg-gradient-to-r ${currentStepData.gradient} hover:opacity-90 text-white shadow-lg group`}
                      >
                        <Play className="w-4 h-4 mr-2" />
                        지금 시작하기
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>

                      {currentStep < steps.length - 1 && (
                        <Button
                          variant="outline"
                          size="lg"
                          onClick={() => goToStep(currentStep + 1)}
                          className="group"
                        >
                          다음 단계
                          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom Summary */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-4 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl border border-primary/20">
            <Globe className="w-8 h-8 text-primary" />
            <div className="text-left">
              <p className="font-semibold text-lg">전체 설정 시간: 평균 30분</p>
              <p className="text-sm text-muted-foreground">
                단계별 진행으로 쉽고 빠르게 완성하세요
              </p>
            </div>
            <Button size="lg" className="group">
              전체 과정 보기
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
});
