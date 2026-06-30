"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const advantages = [
  {
    title: "Zero Technical Debt",
    desc: "We enforce strict code quality standards, comprehensive testing, and modern architectural patterns from day one."
  },
  {
    title: "Predictable Delivery",
    desc: "No missed deadlines. Our agile process provides full transparency with weekly deliverables and clear milestones."
  },
  {
    title: "Security by Design",
    desc: "Enterprise-grade encryption, role-based access control, and proactive vulnerability scanning built into every layer."
  },
  {
    title: "Elastic Scalability",
    desc: "Systems designed to handle 10x growth without architectural rewrites, utilizing cloud-native orchestration."
  },
  {
    title: "AI-Native Engineering",
    desc: "We don't just bolt on AI. We architect systems that leverage machine learning as a core capability."
  },
  {
    title: "Dedicated Elite Teams",
    desc: "No juniors. No hand-offs. You get direct access to senior architects and engineers committed to your success."
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
