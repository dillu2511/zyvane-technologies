"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Link from "next/link";

const MANIFESTO_LINES = [
  "We do not outsource.",
  "We do not use cheap templates.",
  "We do not inflate hours.",
  "We write systems that scale.",
  "We are engineers first."
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background relative overflow-hidden">
      
      {/* Huge Background Typography */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full overflow-hidden pointer-events-none select-none flex items-center justify-center opacity-[0.02] mix-blend-overlay">
        <span className="text-[15rem] md:text-[25rem] font-black tracking-tighter leading-none whitespace-nowrap">
          ZYVANE
        </span>
      </div>

      {/* Intro Section */}
      <section className="min-h-[85vh] flex flex-col justify-center container mx-auto px-6 relative z-10 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-[1px] bg-[#6366F1]" />
            <span className="text-[#6366F1] font-mono text-sm tracking-widest uppercase">The Manifesto</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[1.1] mb-8">
            Software is an <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">asset, not a liability.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl font-medium">
            Most agencies sell you hours. We sell you outcomes. Zyvane Technologies was built to bridge the gap between business vision and raw engineering execution.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute bottom-12 left-6 md:left-auto"
        >
          <div className="flex items-center gap-4 text-muted-foreground text-sm font-mono uppercase tracking-widest">
            <span className="w-1 h-12 bg-white/10 relative overflow-hidden">
              <span className="absolute top-0 left-0 w-full h-full bg-[#6366F1] animate-[slideDown_2s_ease-in-out_infinite]" />
            </span>
            Scroll to read
          </div>
        </motion.div>
      </section>

      {/* The Core Tenets */}
      <section className="py-32 bg-black relative z-10 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            {MANIFESTO_LINES.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group border-b border-white/10 py-8 md:py-12 flex items-center hover:bg-white/[0.02] transition-colors"
              >
                <span className="text-[#6366F1] font-mono text-lg md:text-2xl mr-6 md:mr-12 opacity-50 group-hover:opacity-100 transition-opacity">
                  0{i + 1}
                </span>
                <h2 className="text-3xl md:text-6xl font-black tracking-tight text-white/70 group-hover:text-white transition-colors">
                  {line}
                </h2>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Philosophy */}
      <section className="py-32 relative z-10 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-5xl mx-auto">
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#6366F1]" />
                Zero Compromise on Quality
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                We refuse to cut corners. Whether we are building a fintech dashboard handling millions of rows or a real-time AI processing pipeline, we architect for scale from day zero. 
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Technical debt is the enemy of progress. We write clean, testable, and documented code that your future in-house team will thank you for.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#38BDF8]" />
                Transparent Partnerships
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                We do not disappear into a black box for 6 months and emerge with something you didn't ask for. We build in the open.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                You get direct access to the engineers writing your code via Slack, weekly sprint demos, and raw honesty if an idea won't work. We are your technical co-founders on demand.
              </p>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-[#0a0a0a] border-t border-border/40 relative z-10 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black mb-8">Ready to build properly?</h2>
          <Link href="/contact">
            <button className="bg-white text-black font-bold text-lg px-10 py-5 rounded-full hover:scale-105 transition-transform">
              Initiate Project
            </button>
          </Link>
        </div>
      </section>
      
    </div>
  );
}
