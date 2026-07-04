"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (e.g., initial hydration + data fetch)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
          {/* Subtle gradient background effect */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-secondary/20 rounded-full blur-[100px] opacity-50" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-brand-accent/20 rounded-full blur-[80px] opacity-50 translate-x-1/4 translate-y-1/4" />
          </div>
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative z-10 flex flex-col items-center gap-6"
          >
            <motion.div
              className="w-20 h-20 rounded-2xl overflow-hidden shadow-2xl shadow-brand-secondary/30"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <img src="/logo.png" alt="Zyvane Technologies" className="w-full h-full object-cover" />
            </motion.div>
            
            <div className="w-48 h-1 bg-muted rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-brand-secondary"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              />
            </div>
            
            <div className="text-sm font-medium text-muted-foreground tracking-widest uppercase text-center mt-2">
              Engineering Intelligence
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
