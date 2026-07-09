"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const advantages = [
  {
    title: "Self-Healing Codebase",
    desc: "Zyvane OS monitors itself. Built-in telemetry detects failing services and automatically restarts or routes traffic away before users notice."
  },
  {
    title: "Instant Materialization",
    desc: "Don't wait 6 months. Our core modules are pre-architected to deploy on Day 1, allowing us to focus entirely on your unique business logic."
  },
  {
    title: "Predictive Scaling",
    desc: "Built on containerized orchestration, your infrastructure automatically scales up during traffic spikes and scales down to save costs."
  },
  {
    title: "Zero Vendor Lock-in",
    desc: "You own the underlying IP. We build on open-source standards like Kubernetes, PostgreSQL, and Node.js so you can leave anytime."
  },
  {
    title: "AI-Native by Default",
    desc: "Every instance of Zyvane OS is wired for AI. Ready to ingest your private data securely and deploy intelligent agents instantly."
  },
  {
    title: "Continuous Evolution",
    desc: "Software decays. Zyvane OS evolves. Our engineers actively push security patches, performance upgrades, and new modules to your instance."
  }
];

export function Advantages() {
  return (
    <section className="py-24 bg-muted/30 border-y border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 sticky top-32">
              Why partner <br/> with <span className="text-brand-secondary">Zyvane.</span>
            </h2>
          </div>
          
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
              {advantages.map((adv, index) => (
                <motion.div
                  key={adv.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-10"
                >
                  <CheckCircle2 className="absolute left-0 top-1 h-6 w-6 text-brand-secondary" />
                  <h3 className="text-xl font-bold text-foreground mb-3">{adv.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {adv.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
