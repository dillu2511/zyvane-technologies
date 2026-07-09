"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SemanticNodeProps {
  id: string;
  label: string;
  icon?: ReactNode;
  initialX: number | string;
  initialY: number | string;
  delay?: number;
}

export function SemanticNode({ id, label, icon, initialX, initialY, delay = 0 }: SemanticNodeProps) {
  // We use Framer Motion to simulate floating, dynamic nodes
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, x: initialX, y: initialY }}
      animate={{ 
        opacity: 1, 
        scale: 1, 
        x: [initialX, `calc(${initialX} + 20px)`, initialX],
        y: [initialY, `calc(${initialY} - 15px)`, initialY] 
      }}
      transition={{ 
        opacity: { delay, duration: 1 },
        scale: { delay, duration: 1, type: "spring" },
        x: { duration: 10 + delay * 2, repeat: Infinity, ease: "easeInOut" },
        y: { duration: 8 + delay * 1.5, repeat: Infinity, ease: "easeInOut" }
      }}
      className="absolute flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-black/40 backdrop-blur-xl shadow-lg shadow-white/5 cursor-pointer hover:border-white/30 hover:bg-white/5 transition-colors group z-10"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {icon && <span className="text-white/70 group-hover:text-white transition-colors">{icon}</span>}
      <span className="text-sm font-medium tracking-wider text-white/80 group-hover:text-white transition-colors">
        {label}
      </span>
      {/* Simulation of a glowing connection edge */}
      <div className="absolute inset-0 rounded-full border border-white/0 group-hover:border-white/20 transition-all duration-500 scale-110 pointer-events-none" />
    </motion.div>
  );
}
