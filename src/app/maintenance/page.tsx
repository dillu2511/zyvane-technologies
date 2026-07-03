"use client";

import { motion } from "framer-motion";
import { Settings, Wrench, ShieldAlert } from "lucide-react";

export default function MaintenancePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background relative overflow-hidden items-center justify-center p-6">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#34D399]/5 rounded-full blur-[140px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-xl text-center relative z-10"
      >
        <div className="flex justify-center mb-8 gap-4 text-[#34D399] opacity-80">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          >
            <Settings className="w-12 h-12" />
          </motion.div>
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          >
            <Wrench className="w-12 h-12" />
          </motion.div>
        </div>

        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-[#34D399]/30 bg-[#34D399]/10 text-sm font-semibold text-[#34D399] w-max mx-auto">
          <ShieldAlert className="h-4 w-4" />
          System Maintenance
        </div>

        <h1 className="text-4xl md:text-5xl font-black tracking-tighter leading-[1.1] mb-6">
          We are upgrading our <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34D399] to-[#059669]">
            infrastructure.
          </span>
        </h1>

        <p className="text-lg text-muted-foreground leading-relaxed mb-10 font-medium">
          Zyvane Technologies is currently undergoing scheduled maintenance to improve performance and deploy new features. We will be back online shortly.
        </p>

        <div className="p-6 rounded-2xl border border-border bg-background/50 backdrop-blur-sm max-w-sm mx-auto text-sm text-muted-foreground">
          If you are an administrator, you can bypass this screen using your secure access token.
        </div>
      </motion.div>
    </div>
  );
}
