"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, ShieldCheck, Zap, Code2, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PricingPage() {
  const [teamSize, setTeamSize] = useState<number>(3);
  
  // Fake but realistic US salary metrics for comparison
  const avgEngineerSalary = 140000;
  const overheadMultiplier = 1.3; // Benefits, taxes, software, recruitment
  const inHouseCost = Math.round(teamSize * avgEngineerSalary * overheadMultiplier);
  const zyvaneCost = Math.round(inHouseCost * 0.45); // Representing massive ROI and efficiency
  const savings = inHouseCost - zyvaneCost;

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
              Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] to-[#38BDF8]">Investment.</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              We don't do generic pricing tiers. We deploy elite engineering pods that cost less than hiring in-house, while delivering production systems 3x faster.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* ROI Calculator */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-7 bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden"
          >
            {/* Grid pattern overlay */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-5" />
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-2">Calculate your ROI</h3>
              <p className="text-muted-foreground mb-10 text-sm">Compare the true cost of an in-house engineering team versus a dedicated Zyvane Pod.</p>
              
              <div className="mb-12">
                <div className="flex justify-between items-center mb-6">
                  <label className="font-semibold text-foreground uppercase tracking-wider text-sm flex items-center gap-2">
                    <Users className="h-4 w-4 text-[#6366F1]" />
                    Required Team Size
                  </label>
                  <span className="text-3xl font-black text-[#6366F1]">{teamSize} Engineers</span>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="10" 
                  step="1" 
                  value={teamSize} 
                  onChange={(e) => setTeamSize(parseInt(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#6366F1]"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-3 font-mono">
                  <span>1</span>
                  <span>10</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="p-6 rounded-2xl bg-red-500/5 border border-red-500/20">
                  <div className="text-sm text-red-500/80 font-semibold mb-2 uppercase tracking-wide">In-House Cost / Year</div>
                  <div className="text-3xl font-bold text-foreground">
                    ${(inHouseCost / 1000).toFixed(0)}k
                  </div>
                  <div className="text-xs text-muted-foreground mt-2 font-mono">Includes salaries, benefits, taxes, and overhead.</div>
                </div>
                
                <div className="p-6 rounded-2xl bg-green-500/10 border border-green-500/30 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-green-500/20 rounded-full blur-xl -mr-10 -mt-10" />
                  <div className="text-sm text-green-500 font-semibold mb-2 uppercase tracking-wide relative z-10">Zyvane Pod / Year</div>
                  <div className="text-3xl font-bold text-foreground relative z-10">
                    ${(zyvaneCost / 1000).toFixed(0)}k
                  </div>
                  <div className="text-xs text-green-500/70 mt-2 font-mono relative z-10">Zero recruitment fees. Zero HR overhead.</div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Estimated Annual Savings</div>
                  <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
                    ${(savings / 1000).toFixed(0)}k
                  </div>
                </div>
                <Link href="/contact">
                  <Button className="rounded-full bg-white text-black hover:bg-gray-200 h-12 px-6 font-bold group">
                    Deploy a Pod <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Engagement Models */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-8 rounded-3xl border border-[#6366F1]/30 bg-[#6366F1]/5 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Code2 className="h-8 w-8 text-[#6366F1] mb-6" />
              <h3 className="text-xl font-bold mb-3">Dedicated Engineering Pods</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                A fully autonomous team of senior engineers, architects, and PMs integrated directly into your Slack/Teams. Best for long-term product development and scaling.
              </p>
              <ul className="space-y-3">
                {['Immediate spin-up (No hiring delays)', 'Senior-only talent guarantee', 'Full IP transfer & ownership'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm font-medium">
                    <Check className="h-4 w-4 text-[#6366F1] shrink-0 mt-0.5" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
              <ShieldCheck className="h-8 w-8 text-foreground mb-6" />
              <h3 className="text-xl font-bold mb-3">Fixed-Scope Architecture</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                For strictly defined milestones like MVP builds, Cloud Migrations, or AI Model training. Fixed budget, guaranteed delivery dates.
              </p>
              <Link href="/contact" className="text-sm font-bold text-[#6366F1] hover:text-white flex items-center transition-colors">
                Request a technical audit <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
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
            We don't charge for discovery calls. Let's talk architecture.
          </div>
        </motion.div>

      </section>
    </div>
  );
}
