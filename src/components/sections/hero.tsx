"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Terminal lines that type themselves out — real tech, real feel
const TERMINAL_LINES = [
  { prefix: "zyvane", cmd: "init --enterprise --ai-ready", color: "#6366F1" },
  { prefix: "system", cmd: "Scanning project requirements...", color: "#38BDF8" },
  { prefix: "arch", cmd: "Designing scalable microservice topology", color: "#34D399" },
  { prefix: "ai", cmd: "Training domain-specific model pipeline", color: "#F59E0B" },
  { prefix: "deploy", cmd: "Shipping to production. Zero downtime.", color: "#6366F1" },
  { prefix: "status", cmd: "✓ System live. Client value: delivered.", color: "#34D399" },
];

// Words that cycle in the headline
const CYCLING_WORDS = ["Intelligence.", "Systems.", "Products.", "Scale."];

function TerminalBlock() {
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const [typedChars, setTypedChars] = useState<Record<number, number>>({});

  useEffect(() => {
    let lineIdx = 0;
    const showNextLine = () => {
      if (lineIdx >= TERMINAL_LINES.length) {
        // restart
        setTimeout(() => {
          setVisibleLines([]);
          setTypedChars({});
          lineIdx = 0;
          showNextLine();
        }, 3000);
        return;
      }
      const currentLine = lineIdx;
      setVisibleLines((prev) => [...prev, currentLine]);
      setTypedChars((prev) => ({ ...prev, [currentLine]: 0 }));

      const line = TERMINAL_LINES[currentLine];
      const fullText = line.cmd;
      let charIdx = 0;
      const typeInterval = setInterval(() => {
        charIdx++;
        setTypedChars((prev) => ({ ...prev, [currentLine]: charIdx }));
        if (charIdx >= fullText.length) {
          clearInterval(typeInterval);
          lineIdx++;
          setTimeout(showNextLine, 400);
        }
      }, 35);
    };
    const timer = setTimeout(showNextLine, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full max-w-xl font-mono text-sm rounded-2xl overflow-hidden border border-white/10 bg-black/60 backdrop-blur-xl shadow-[0_0_80px_rgba(99,102,241,0.15)]">
      {/* Terminal header bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/5">
        <span className="w-3 h-3 rounded-full bg-red-500/80" />
        <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
        <span className="w-3 h-3 rounded-full bg-green-500/80" />
        <span className="ml-3 text-xs text-white/30 tracking-wider">zyvane — bash</span>
      </div>
      {/* Terminal body */}
      <div className="p-5 space-y-2 min-h-[200px]">
        {TERMINAL_LINES.map((line, i) => {
          if (!visibleLines.includes(i)) return null;
          const typed = typedChars[i] ?? 0;
          const displayText = line.cmd.slice(0, typed);
          const isTyping = typed < line.cmd.length;
          return (
            <div key={i} className="flex items-start gap-2">
              <span style={{ color: line.color }} className="shrink-0 font-bold">
                [{line.prefix}]
              </span>
              <span className="text-white/70">
                {displayText}
                {isTyping && (
                  <span className="inline-block w-[2px] h-[14px] bg-white/60 ml-[2px] animate-pulse align-middle" />
                )}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function CyclingWord() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((p) => (p + 1) % CYCLING_WORDS.length), 2200);
    return () => clearInterval(t);
  }, []);
  return (
    <span className="relative inline-block overflow-hidden" style={{ minWidth: "280px" }}>
      <AnimatePresence mode="wait">
        <motion.span
          key={CYCLING_WORDS[idx]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
          className="block text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] to-[#38BDF8]"
        >
          {CYCLING_WORDS[idx]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Dot-grid canvas that reacts subtly
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const COLS = Math.floor(canvas.width / 36);
    const ROWS = Math.floor(canvas.height / 36);
    let t = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      t += 0.012;
      for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
          const x = c * 36 + 18;
          const y = r * 36 + 18;
          const wave = Math.sin(t + c * 0.3 + r * 0.3) * 0.5 + 0.5;
          const opacity = wave * 0.18 + 0.04;
          ctx.beginPath();
          ctx.arc(x, y, 1.2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(99,102,241,${opacity})`;
          ctx.fill();
        }
      }
      animationId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Animated dot-grid canvas background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-100"
        aria-hidden="true"
      />

      {/* Soft ambient glows */}
      <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-[#6366F1]/10 blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-40 right-0 w-[500px] h-[500px] rounded-full bg-[#38BDF8]/8 blur-[140px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6 pt-28 pb-20">
        {/* Asymmetric two-column layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT — Headline + CTA */}
          <div>
            {/* Live status badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-[#6366F1]/30 bg-[#6366F1]/5 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#34D399] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#34D399]" />
              </span>
              <span className="text-xs font-semibold tracking-widest uppercase text-[#34D399]">
                Accepting Projects
              </span>
            </motion.div>

            {/* Main headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.08] text-foreground mb-6">
                Engineering
                <br />
                <CyclingWord />
              </h1>
            </motion.div>

            {/* Sub-copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-md mb-10"
            >
              We architect and ship enterprise software — AI pipelines, cloud systems, 
              and full-stack products — for companies that refuse to compromise on quality.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 h-13 px-7 rounded-full bg-[#6366F1] hover:bg-[#5253D4] text-white font-semibold text-sm transition-all duration-200 shadow-[0_0_30px_rgba(99,102,241,0.4)] hover:shadow-[0_0_50px_rgba(99,102,241,0.6)] hover:-translate-y-0.5"
              >
                Start a Project
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 h-13 px-7 rounded-full border border-border bg-background/60 hover:bg-muted text-foreground font-semibold text-sm transition-all duration-200 backdrop-blur-sm hover:-translate-y-0.5"
              >
                View Capabilities
              </Link>
            </motion.div>

            {/* Stack tags */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-2 mt-10"
            >
              {["Next.js", "Python", "AWS", "Kubernetes", "LLMs", "PostgreSQL"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono text-muted-foreground/70 border border-border/50 px-2.5 py-1 rounded-md bg-muted/20"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — Terminal Animation */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.33, 1, 0.68, 1] }}
            className="hidden lg:block"
          >
            <TerminalBlock />

            {/* Mini floating stats below terminal */}
            <div className="mt-5 grid grid-cols-3 gap-3">
              {[
                { label: "Response Time", value: "< 24h" },
                { label: "Tech Stack", value: "Modern" },
                { label: "Code Quality", value: "Tested" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-border/50 bg-muted/20 backdrop-blur-sm p-4 text-center"
                >
                  <div className="text-lg font-bold text-foreground">{item.value}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{item.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Scrolling bottom marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute bottom-8 left-0 right-0 border-t border-border/30 pt-5 px-6 hidden md:flex items-center justify-center gap-3 text-xs text-muted-foreground/50 font-mono"
        >
          <span>scroll to explore</span>
          <span className="flex gap-1">
            <motion.span
              animate={{ scaleX: [1, 0.4, 1] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
              className="block w-4 h-[1px] bg-current mt-2"
            />
          </span>
        </motion.div>

      </div>
    </section>
  );
}
