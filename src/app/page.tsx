import { Hero } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { ServicesOverview } from "@/components/sections/services-overview";
import { Industries } from "@/components/sections/industries";
import { DevelopmentProcess } from "@/components/sections/development-process";
import { TechStack } from "@/components/sections/tech-stack";
import { PortfolioPreview } from "@/components/sections/portfolio-preview";
import { Advantages } from "@/components/sections/advantages";
import { FAQ } from "@/components/sections/faq";
import { CTA } from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesOverview />
      <Industries />
      <DevelopmentProcess />
      <TechStack />
      <PortfolioPreview />
      <Advantages />
      <FAQ />
      <CTA />
    </>
  );
}
