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
import { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n";

export const FooterSection = React.memo(function FooterSection({
  locale,
}: {
  locale: Locale;
}) {
  const dict = getDictionary(locale);

  const footerLinks = {
    product: [
      { label: dict.footer.links.features, href: "#features" },
      { label: dict.footer.links.pricing, href: "#pricing" },
      { label: dict.footer.links.apiDocs, href: "/api-docs" },
      { label: dict.footer.links.download, href: "/download" },
    ],
    company: [
      { label: dict.footer.links.about, href: "/about" },
      { label: dict.footer.links.careers, href: "/careers" },
      { label: dict.footer.links.press, href: "/press" },
      { label: dict.footer.links.partnerships, href: "/partnerships" },
    ],
    support: [
      { label: dict.footer.links.support, href: "/support" },
      { label: dict.footer.links.docs, href: "/docs" },
      { label: dict.footer.links.faq, href: "#faq" },
      { label: dict.footer.links.community, href: "/community" },
    ],
    legal: [
      { label: dict.footer.links.privacy, href: "/privacy" },
      { label: dict.footer.links.terms, href: "/terms" },
      { label: dict.footer.links.cookies, href: "/cookies" },
      { label: dict.footer.links.license, href: "/license" },
    ],
  };

  const socialLinks = [
    {
      icon: Twitter,
      href: "https://twitter.com/saasstarterkit",
      label: dict.footer.socialLinks.twitter,
    },
    {
      icon: Instagram,
      href: "https://instagram.com/saasstarterkit",
      label: dict.footer.socialLinks.instagram,
    },
    {
      icon: Youtube,
      href: "https://youtube.com/saasstarterkit",
      label: dict.footer.socialLinks.youtube,
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
                {dict.footer.brand}
              </span>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-muted-foreground mb-6 leading-relaxed"
            >
              {dict.footer.description
                .split("\n")
                .map((line: string, index: number) => (
                  <React.Fragment key={index}>
                    {line}
                    {index === 0 && <br />}
                  </React.Fragment>
                ))}
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
                <span>{dict.footer.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4" />
                <span>{dict.footer.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4" />
                <span>{dict.footer.address}</span>
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
                  {category === "product" && dict.footer.categories.product}
                  {category === "company" && dict.footer.categories.company}
                  {category === "support" && dict.footer.categories.support}
                  {category === "legal" && dict.footer.categories.legal}
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
              © {new Date().getFullYear()} {dict.footer.brand}.{" "}
              {dict.footer.copyright}
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
