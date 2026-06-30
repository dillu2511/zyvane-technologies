"use client";

import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Discovery", desc: "Deep dive into your business logic, technical constraints, and scaling requirements." },
  { num: "02", title: "Architecture", desc: "System design, database modeling, and technology selection for optimal performance." },
  { num: "03", title: "Development", desc: "Agile engineering with rigorous code reviews, automated testing, and CI/CD." },
  { num: "04", title: "Quality Assurance", desc: "Comprehensive security audits, load testing, and edge-case validation." },
  { num: "05", title: "Deployment", desc: "Zero-downtime deployment to production cloud environments." },
  { num: "06", title: "Scale & Support", desc: "24/7 monitoring, SLA-backed maintenance, and feature iterations." },
];

export function DevelopmentProcess() {
  return (
    <section className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Engineering <span className="text-brand-secondary">discipline.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We don't guess. We follow a battle-tested engineering methodology that guarantees enterprise-grade results on time and on budget.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-border -z-10" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
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
