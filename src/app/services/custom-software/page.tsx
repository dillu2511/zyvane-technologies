import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, ShieldCheck, Zap, Layers } from "lucide-react";
import { CTA } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Custom Enterprise Software | Zyvane Technologies",
  description: "Scalable, secure, and performant web applications built for complex business logic and high traffic.",
};

const features = [
  { title: "Microservices Architecture", desc: "Decoupled systems that allow independent scaling and deployment of features without affecting the core monolith.", icon: <Layers className="h-6 w-6" /> },
  { title: "High-Performance APIs", desc: "GraphQL and RESTful APIs engineered for sub-millisecond response times under heavy concurrent loads.", icon: <Zap className="h-6 w-6" /> },
  { title: "Enterprise Security", desc: "End-to-end encryption, role-based access control (RBAC), and compliance with SOC2 and GDPR.", icon: <ShieldCheck className="h-6 w-6" /> },
  { title: "Modern Stacks", desc: "Built with Next.js, React, Node.js, and Go, deployed seamlessly on Kubernetes across AWS, GCP, or Azure.", icon: <Code className="h-6 w-6" /> },
];

export default function CustomSoftwareServicePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-20 bg-background border-b border-border overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-brand-secondary/10 to-brand-accent/10 opacity-50 blur-[100px] pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <div className="mb-6 flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-popover text-sm font-medium text-brand-secondary w-max">
              <Code className="h-4 w-4" /> Custom Enterprise Software
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
              Architected for <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-secondary to-brand-accent">Complexity.</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl">
              Off-the-shelf software doesn't scale with unique business logic. We engineer bespoke web and backend applications that power core operations for global enterprises.
            </p>
            <Button size="lg" className="h-14 px-8 text-base bg-brand-secondary hover:bg-brand-secondary/90 text-white rounded-full group">
              Discuss Your Project
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-popover/30 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Technical Superiority</h2>
            <p className="text-lg text-muted-foreground">
              Our engineering methodology ensures that your software is not just functional, but resilient, maintainable, and built for 10x growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-background border border-border rounded-2xl p-8 hover:border-brand-secondary/30 transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-brand-secondary/10 text-brand-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA />
    </div>
  );
}
