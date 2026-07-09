"use client";

import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "System Audit", desc: "We analyze your legacy architecture and map the exact requirements for the Zyvane OS injection." },
  { num: "02", title: "Core Materialization (Phase 1)", desc: "We deploy the pre-architected Zyvane core modules, establishing your secure foundational infrastructure instantly." },
  { num: "03", title: "Business Logic Injection", desc: "Our elite engineers build the unique custom features and workflows specific to your business on top of the OS layer." },
  { num: "04", title: "Autonomous Evolution (Phase 2)", desc: "Your system enters the evolution phase. We continuously monitor, scale, and push AI/security updates to your instance." },
];

export function DevelopmentProcess() {
  return (
    <section className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Deployment <span className="text-brand-secondary">protocol.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We don&apos;t do &quot;sprints&quot; or endless discovery phases. We inject a production-ready infrastructure and evolve it autonomously.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-border -z-10" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex flex-col items-center text-center md:items-start md:text-left group"
              >
                <div className="w-16 h-16 rounded-2xl bg-popover border border-border flex items-center justify-center text-xl font-bold text-muted-foreground mb-6 group-hover:bg-brand-secondary group-hover:text-white group-hover:border-brand-secondary transition-all duration-300 shadow-sm relative z-10">
                  {step.num}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
