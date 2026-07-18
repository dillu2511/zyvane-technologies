"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="py-32 relative overflow-hidden bg-brand-primary text-white border-y border-border">
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-secondary/30 rounded-full blur-[120px] pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          <div className="mb-6 flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-sm font-medium text-white">
            <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
            System Online: Ready for Deployment
          </div>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1]">
            Ready to deploy your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-secondary to-brand-accent">
              autonomous infrastructure?
            </span>
          </h2>
          
          <p className="text-xl text-white/70 mb-12 max-w-2xl leading-relaxed">
            Stop losing time on technical debt and endless agency sprints. Inject Zyvane OS into your business today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button size="lg" className="h-14 px-8 text-base bg-white text-brand-primary hover:bg-white/90 rounded-full group w-full sm:w-auto">
              Initialize Deployment
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-base rounded-full border-white/20 hover:bg-white/10 text-white w-full sm:w-auto">
              <Mail className="mr-2 h-4 w-4" />
              contact@zyvanetechnologies.com
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
