"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Mic, Search } from "lucide-react";

export function OmniPrompt() {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-focus the prompt to simulate the OS waiting for intent
  useEffect(() => {
    const timer = setTimeout(() => {
      inputRef.current?.focus();
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="relative z-50 flex flex-col items-center justify-center w-full max-w-2xl mx-auto"
    >
      <motion.p 
        animate={{ opacity: value.length > 0 ? 0 : isFocused ? 0.8 : 0.5 }}
        className="absolute -top-12 text-sm uppercase tracking-[0.3em] text-white/60 font-light"
      >
        What is the focus?
      </motion.p>
      
      <div 
        className={`relative w-full flex items-center overflow-hidden rounded-2xl border transition-all duration-700 ease-out bg-black/50 backdrop-blur-2xl shadow-2xl ${
          isFocused 
            ? "border-white/40 shadow-white/10 scale-105" 
            : "border-white/10 shadow-black/50 scale-100"
        }`}
      >
        <div className="pl-6 text-white/40">
           {/* Mic icon acts as the AI hypervisor listener */}
          <Mic className={`w-5 h-5 transition-colors duration-500 ${isFocused ? "text-white/80 animate-pulse" : ""}`} />
        </div>
        
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="w-full bg-transparent border-none outline-none py-6 px-4 text-white text-xl font-light placeholder:text-transparent selection:bg-white/20"
          placeholder="Declare intent..."
          spellCheck={false}
        />
        
        {value.length > 0 && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="pr-6 cursor-pointer text-white/70 hover:text-white transition-colors"
          >
            <Search className="w-5 h-5" />
          </motion.div>
        )}
      </div>

      {/* The glowing aura behind the prompt */}
      <div 
        className={`absolute inset-0 -z-10 bg-gradient-to-r from-blue-500/0 via-white/5 to-purple-500/0 blur-3xl transition-opacity duration-1000 ${
          isFocused ? "opacity-100" : "opacity-0"
        }`} 
      />
    </motion.div>
  );
}
