"use client";

import { OmniPrompt } from "@/components/pure-os/omni-prompt";
import { SemanticNode } from "@/components/pure-os/semantic-node";
import { Database, FileText, Image as ImageIcon, MessageSquare, Briefcase, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function PureOSPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="relative w-full h-screen flex flex-col items-center justify-center bg-[#050505] overflow-hidden">
      {/* Deep Background Gradient simulating the Void/Semantic Space */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/[0.03] via-[#050505] to-[#050505] -z-20" />
      
      {/* Subtle pure CSS grid pattern to imply structure within the void */}
      <div 
        className="absolute inset-0 opacity-[0.03] -z-10"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(circle at center, black, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black, transparent 80%)'
        }}
      />

      {/* The Central Intent Shell */}
      <OmniPrompt />

      {/* Floating Semantic Nodes (The Data Layer) */}
      <SemanticNode 
        id="node-1" 
        label="Q3 Financial Audit" 
        icon={<FileText className="w-4 h-4" />} 
        initialX="15vw" 
        initialY="20vh" 
        delay={0.5} 
      />
      <SemanticNode 
        id="node-2" 
        label="Client: Zyvane Tech" 
        icon={<Briefcase className="w-4 h-4" />} 
        initialX="70vw" 
        initialY="15vh" 
        delay={1.2} 
      />
      <SemanticNode 
        id="node-3" 
        label="Brand Assets" 
        icon={<ImageIcon className="w-4 h-4" />} 
        initialX="80vw" 
        initialY="65vh" 
        delay={0.8} 
      />
      <SemanticNode 
        id="node-4" 
        label="Team Comms (Live)" 
        icon={<MessageSquare className="w-4 h-4" />} 
        initialX="10vw" 
        initialY="75vh" 
        delay={1.5} 
      />
      <SemanticNode 
        id="node-5" 
        label="AI Hypervisor State" 
        icon={<Zap className="w-4 h-4" />} 
        initialX="45vw" 
        initialY="85vh" 
        delay={2.0} 
      />
      <SemanticNode 
        id="node-6" 
        label="Global Data Graph" 
        icon={<Database className="w-4 h-4" />} 
        initialX="85vw" 
        initialY="40vh" 
        delay={0.3} 
      />

      {/* Connective Tissue Simulation (CSS-based glowing lines in the background) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20 -z-10">
        <motion.path 
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ duration: 3, delay: 2, ease: "easeInOut" }}
          d="M 20vw 25vh Q 45vw 50vh 75vw 20vh" 
          stroke="white" 
          strokeWidth="1" 
          fill="none" 
        />
        <motion.path 
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.3 }}
          transition={{ duration: 4, delay: 2.5, ease: "easeInOut" }}
          d="M 15vw 80vh Q 50vw 50vh 85vw 70vh" 
          stroke="white" 
          strokeWidth="0.5" 
          fill="none" 
        />
      </svg>
    </main>
  );
}
