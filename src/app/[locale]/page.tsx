import { HeroSection } from "@/components/main/HeroSection";
import { LogosSection } from "@/components/main/LogosSection";
import { ProblemSection } from "@/components/main/ProblemSection";
import { SolutionSection } from "@/components/main/SolutionSection";
import { HowItWorksSection } from "@/components/main/HowItWorksSection";

import { FeaturesSection } from "@/components/main/FeaturesSection";
import { PricingSection } from "@/components/main/PricingSection";
import { FAQSection } from "@/components/main/FAQSection";
import { CTASection } from "@/components/main/CTASection";

export default async function Home() {
  return (
    <main className="bg-background text-foreground min-h-screen flex flex-col">
      <HeroSection />
      <LogosSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <FeaturesSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}
