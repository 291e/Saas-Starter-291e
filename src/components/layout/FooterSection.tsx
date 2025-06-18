"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Sparkles,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export const FooterSection = React.memo(function FooterSection() {
  const footerLinks = {
    product: [
      { label: "기능", href: "#features" },
      { label: "요금제", href: "#pricing" },
      { label: "API 문서", href: "/api-docs" },
      { label: "다운로드", href: "/download" },
    ],
    company: [
      { label: "회사 소개", href: "/about" },
      { label: "채용", href: "/careers" },
      { label: "보도자료", href: "/press" },
      { label: "파트너십", href: "/partnerships" },
    ],
    support: [
      { label: "개발자 지원", href: "/support" },
      { label: "문서", href: "/docs" },
      { label: "FAQ", href: "#faq" },
      { label: "커뮤니티", href: "/community" },
    ],
    legal: [
      { label: "개인정보처리방침", href: "/privacy" },
      { label: "이용약관", href: "/terms" },
      { label: "쿠키 정책", href: "/cookies" },
      { label: "라이선스", href: "/license" },
    ],
  };

  const socialLinks = [
    {
      icon: Twitter,
      href: "https://twitter.com/saasstarterkit",
      label: "Twitter",
    },
    {
      icon: Instagram,
      href: "https://instagram.com/saasstarterkit",
      label: "Instagram",
    },
    {
      icon: Youtube,
      href: "https://youtube.com/saasstarterkit",
      label: "YouTube",
    },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/70 rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                SaaS Start Kit
              </span>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-muted-foreground mb-6 leading-relaxed"
            >
              빠르게 구축하는 SaaS의 미래.
              <br />
              당신의 아이디어를 현실로 만들고, 새로운 비즈니스를 시작하세요.
            </motion.p>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-3 text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4" />
                <span>hello@saasstarterkit.dev</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4" />
                <span>1588-0000</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4" />
                <span>서울시 강남구 개발로 123</span>
              </div>
            </motion.div>
          </div>

          {/* Links */}
          <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([category, links], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="font-semibold mb-4 capitalize">
                  {category === "product" && "제품"}
                  {category === "company" && "회사"}
                  {category === "support" && "지원"}
                  {category === "legal" && "법적 고지"}
                </h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-muted-foreground hover:text-primary transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <div className="flex items-center gap-6">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} SaaS Start Kit. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                className="w-10 h-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center group"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
});
