import { Metadata } from "next";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Pricing | Zyvane Technologies",
  description: "Transparent, enterprise-grade pricing models for engineering teams, custom software, and consulting.",
};

const plans = [
  {
    name: "Dedicated Team",
    price: "Custom",
    desc: "A fully managed, elite engineering pod integrated directly into your workflows.",
    features: [
      "Senior Frontend & Backend Engineers",
      "Dedicated Product Manager",
      "Lead Architect Oversight",
      "Agile Sprints & Daily Standups",
      "Complete IP Ownership",
      "24/7 Slack/Teams Channel",
    ],
    missing: [],
    cta: "Request Pricing",
    highlight: false
  },
  {
    name: "Project Based",
    price: "Fixed",
    desc: "End-to-end delivery of a defined scope, with strict milestones and guarantees.",
    features: [
      "Comprehensive Discovery Phase",
      "Fixed Budget Guarantee",
      "Milestone-based Delivery",
      "Full QA & Security Testing",
      "Complete IP Ownership",
      "30-Day Post-Launch Support",
    ],
    missing: ["Continuous Feature Iteration"],
    cta: "Scope Your Project",
    highlight: true
  },
  {
    name: "Enterprise SLA",
    price: "Retainer",
    desc: "Ongoing maintenance, optimization, and security patching for existing systems.",
    features: [
      "24/7 Uptime Monitoring",
      "Guaranteed Response Times",
      "Security Audits & Patching",
      "Cloud Cost Optimization",
      "Minor Feature Updates",
      "Monthly Architecture Reviews",
    ],
    missing: ["Major Feature Development", "Dedicated PM"],
    cta: "Discuss SLA",
    highlight: false
  }
];

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="pt-32 pb-20 bg-background border-b border-border overflow-hidden relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
              Transparent <span className="text-brand-secondary">Partnerships.</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We don't do hidden fees or bloated scopes. We offer clear engagement models designed to align with your enterprise objectives.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-popover/30 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div 
                key={index} 
                className={`relative flex flex-col h-full bg-background rounded-3xl border ${plan.highlight ? 'border-brand-secondary shadow-[0_0_40px_-15px_rgba(var(--brand-secondary-rgb),0.3)] scale-105 z-10' : 'border-border'} p-8`}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-secondary text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-3xl font-extrabold mb-4">{plan.price}</div>
                <p className="text-muted-foreground mb-8 min-h-[48px]">{plan.desc}</p>
                
                <div className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-brand-secondary shrink-0" />
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                  {plan.missing.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3 opacity-50">
                      <X className="h-5 w-5 text-muted-foreground shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  className={`w-full h-12 rounded-full ${plan.highlight ? 'bg-brand-secondary hover:bg-brand-secondary/90 text-white' : 'bg-muted hover:bg-muted/80 text-foreground'}`}
                >
                  {plan.cta}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
