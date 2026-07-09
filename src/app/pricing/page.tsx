"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, Zap, Server } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] bg-[#6366F1]/5 rounded-full blur-[120px] pointer-events-none" />
      
      <section className="container mx-auto px-6 py-32 relative z-10">
        <div className="max-w-4xl mb-20 text-center mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
              The Two-Phase <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] to-[#38BDF8]">Protocol.</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              We don&apos;t sell hourly labor. We sell autonomous infrastructure. 
              Deploying Zyvane OS is split into a one-time build fee and a flat evolution retainer.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch max-w-5xl mx-auto">
          
          {/* Phase 1 */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-8 rounded-full bg-[#6366F1]/20 text-[#6366F1] flex items-center justify-center font-bold font-mono text-sm">1</span>
                <h3 className="text-2xl font-bold uppercase tracking-widest text-[#6366F1]">Core Injection</h3>
              </div>
              <h4 className="text-4xl font-black mb-2 text-white">The Build Fee</h4>
              <p className="text-muted-foreground mb-8 text-sm leading-relaxed">
                We analyze your business, customize the Zyvane Core Modules, and engineer the unique logic required to run your enterprise. A one-time capital expenditure.
              </p>
              
              <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60 mb-8">
                Custom Quote
              </div>

              <ul className="space-y-4 mb-10">
                {['Database architecture & schema mapping', 'Custom business logic & workflows', 'UI/UX design & implementation', 'Full source code ownership transfer', 'Zero-downtime production deployment'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm font-medium text-white/80">
                    <Check className="h-5 w-5 text-[#6366F1] shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              
              <Link href="/contact">
                <Button className="w-full rounded-full bg-white text-black hover:bg-gray-200 h-14 font-bold group">
                  Request Build Audit <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Phase 2 */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-[#0a0a0a] border border-[#38BDF8]/30 rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#38BDF8]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-8 rounded-full bg-[#38BDF8]/20 text-[#38BDF8] flex items-center justify-center font-bold font-mono text-sm">2</span>
                <h3 className="text-2xl font-bold uppercase tracking-widest text-[#38BDF8]">Evolution</h3>
              </div>
              <h4 className="text-4xl font-black mb-2 text-white">The Retainer</h4>
              <p className="text-muted-foreground mb-8 text-sm leading-relaxed">
                Software that doesn&apos;t evolve is dead. This flat monthly subscription replaces your entire DevOps, QA, and maintenance departments.
              </p>
              
              <div className="flex items-baseline gap-2 mb-8">
                <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">
                  Flat Rate
                </div>
                <span className="text-muted-foreground">/ month</span>
              </div>

              <ul className="space-y-4 mb-10">
                {['All AWS/Cloud server costs included', '24/7 telemetry & automated self-healing', 'Weekly security patches & dependency updates', 'Dedicated engineering pod for new features', 'Unlimited minor bug fixes (SLA backed)'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm font-medium text-white/80">
                    <Server className="h-5 w-5 text-[#38BDF8] shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              
              <div className="w-full text-center text-sm font-mono text-muted-foreground py-4 border border-white/10 rounded-full bg-white/5">
                Activates post-deployment
              </div>
            </div>
          </motion.div>

        </div>
        
        {/* Trust Note */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-24 text-center border-t border-border/50 pt-12"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-muted/30 border border-border/50 text-sm font-medium">
            <Zap className="h-4 w-4 text-yellow-500" />
            No hidden hours. No sudden invoices. Pure autonomous infrastructure.
          </div>
        </motion.div>

      </section>
    </div>
  );
}
