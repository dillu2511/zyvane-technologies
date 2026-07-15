"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { AlertOctagon, RotateCcw } from "lucide-react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service if needed
    console.error("[Zyvane OS Error]:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center relative overflow-hidden font-mono">
      {/* Glitch Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(244,63,94,0.15)_0%,_transparent_70%)]" />
      
      <div className="absolute top-0 left-0 w-full h-1 bg-red-500/20 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-red-500/20 animate-pulse" />

      <div className="relative z-10 max-w-2xl w-full px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="bg-red-500/5 border border-red-500/20 rounded-2xl p-8 md:p-12 backdrop-blur-md relative overflow-hidden"
        >
          {/* Subtle grid pattern inside */}
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 pointer-events-none" />

          <div className="flex flex-col items-center text-center relative z-10">
            <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center mb-6 border border-red-500/20">
              <AlertOctagon className="w-10 h-10 text-red-500" />
            </div>

            <h1 className="text-3xl md:text-5xl font-black text-red-500 mb-4 tracking-tighter">
              CRITICAL EXCEPTION
            </h1>
            
            <p className="text-red-400/80 mb-8 max-w-md text-sm md:text-base leading-relaxed">
              A runtime failure has occurred in the OS kernel. The exact error has been logged to the system diagnostics layer.
            </p>

            <div className="w-full bg-black/40 rounded-lg border border-red-500/10 p-4 mb-8 text-left overflow-x-auto text-xs text-red-400/60 font-mono">
              <div>&gt; ERR_CODE: {error.digest || "UNKNOWN_FATAL"}</div>
              <div className="mt-2 truncate">&gt; MSG: {error.message || "An unexpected error occurred"}</div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button
                onClick={() => reset()}
                className="group flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full font-bold transition-all"
              >
                <RotateCcw className="w-4 h-4 group-hover:-rotate-180 transition-transform duration-500" />
                Reboot System
              </button>
              <Link
                href="/"
                className="flex items-center justify-center gap-2 border border-red-500/20 hover:bg-red-500/10 text-red-400 px-8 py-3 rounded-full font-bold transition-all"
              >
                Return to Safe Mode
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
