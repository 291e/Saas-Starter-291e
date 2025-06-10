"use client";

import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Menu, X, Sparkles, Moon, Sun } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { UserProfile } from "@/features/auth/components/user-profile";
import LanguageSwitcher from "../locale/LanguageSwitcher";
import { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n";

export const HeaderSection = React.memo(function HeaderSection({
  locale,
}: {
  locale: Locale;
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const { scrollY } = useScroll();
  const dict = getDictionary(locale);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 100);
  });

  const navItems = [
    { href: "#features", label: dict.header.features },
    { href: "#pricing", label: dict.header.pricing },
    { href: "#testimonials", label: dict.header.testimonials },
    { href: "#blog", label: dict.header.blog },
    { href: "#faq", label: dict.header.faq },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/70 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="hidden sm:block">
              <div className="text-xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                {dict.footer.brand}
              </div>
              <Badge variant="secondary" className="text-xs px-2 py-0 -mt-1">
                Beta
              </Badge>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.div
                key={item.href}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Link
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-9 h-9 rounded-full hidden sm:flex"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">{dict.header.themeToggle}</span>
            </Button>

            {/* Login Button */}
            <div className="flex items-center gap-4">
              <LanguageSwitcher currentLocale={locale} />
              <UserProfile />
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden w-9 h-9 rounded-full"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          height: isMobileMenuOpen ? "auto" : 0,
          opacity: isMobileMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="lg:hidden overflow-hidden bg-background/95 backdrop-blur-xl border-b border-border/50"
      >
        <div className="px-4 py-6 space-y-4">
          {navItems.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, x: -20 }}
              animate={{
                opacity: isMobileMenuOpen ? 1 : 0,
                x: isMobileMenuOpen ? 0 : -20,
              }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={item.href}
                className="block text-lg font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
          <div className="pt-4 space-y-3 border-t border-border/50">
            <Button variant="ghost" className="w-full justify-start">
              {dict.login}
            </Button>
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
              {dict.home.getStarted}
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.header>
  );
});
