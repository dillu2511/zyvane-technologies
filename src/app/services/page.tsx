import { Metadata } from "next";
import { ServicesOverview } from "@/components/sections/services-overview";
import { DevelopmentProcess } from "@/components/sections/development-process";
import { CTA } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Services | Zyvane Technologies",
  description: "Explore our comprehensive suite of enterprise software engineering and AI services.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="pt-32 pb-10 bg-background overflow-hidden relative">
        <div className="absolute top-0 right-0 w-full h-[500px] bg-gradient-to-bl from-brand-secondary/10 to-transparent opacity-50 blur-[100px] pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
              The OS <span className="text-brand-secondary">Modules.</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              We do not build from scratch. We deploy autonomous modules and layer your unique business logic on top.
            </p>
          </div>
        </div>
      </section>

      {/* Reuse the Services Overview section from home page but without the top padding and title since we have a header */}
      <div className="-mt-16">
        <ServicesOverview />
      </div>
      
      <DevelopmentProcess />
      
      <CTA />
    </div>
  );
}
