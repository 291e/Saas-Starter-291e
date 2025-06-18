"use client";

import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Zap, Crown, CheckCircle, ArrowRight } from "lucide-react";
import { PRICING_PLANS } from "@/lib/constants";

export const PricingSection = React.memo(function PricingSection() {
  const plans = PRICING_PLANS;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Star":
        return <Star className="w-6 h-6 text-white" />;
      case "Zap":
        return <Zap className="w-6 h-6 text-white" />;
      case "Crown":
        return <Crown className="w-6 h-6 text-white" />;
      default:
        return <Star className="w-6 h-6 text-white" />;
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
            className="mb-4 px-4 py-2 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400"
          >
            <Zap className="w-4 h-4 mr-2" />
            요금제
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-blue-500">합리적인 가격</span>으로
            <br />
            시작하세요
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            프로젝트 규모에 맞는 요금제를 선택하세요. 모든 플랜은 14일 무료
            체험을 제공합니다.
          </p>
        </motion.div>

        {/* Pricing Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4, scale: 1.02 }}
            >
              <Card
                className={`h-full border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 group relative overflow-hidden ${
                  plan.highlight ? "ring-2 ring-primary" : ""
                }`}
              >
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
                />

                <CardContent className="p-6 relative h-full flex flex-col justify-between">
                  <div>
                    {/* Badge */}
                    {plan.badge && (
                      <Badge
                        variant="secondary"
                        className="absolute -top-3 right-6 bg-primary text-primary-foreground"
                      >
                        {plan.badge}
                      </Badge>
                    )}

                    {/* Icon */}
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${plan.gradient} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      {getIcon(plan.icon)}
                    </div>

                    {/* Plan Name & Description */}
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-muted-foreground mb-6">
                      {plan.description}
                    </p>

                    {/* Price */}
                    <div className="mb-6">
                      <span className="text-4xl font-bold">
                        {plan.price}
                        {plan.period && (
                          <span className="text-lg text-muted-foreground">
                            {plan.period}
                          </span>
                        )}
                      </span>
                    </div>

                    {/* Features */}
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center text-sm"
                        >
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* CTA Button */}
                  <Button
                    className={`w-full group/btn ${
                      plan.highlight
                        ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                        : "bg-secondary hover:bg-secondary/80 text-secondary-foreground border"
                    }`}
                    size="lg"
                  >
                    {plan.buttonText}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>

                {/* Bottom Accent */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${plan.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-full">
            <CheckCircle className="w-4 h-4 text-blue-500" />
            <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
              14일 무료 체험, 신용카드 불필요
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
});
