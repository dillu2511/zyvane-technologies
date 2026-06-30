"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const SUGGESTIONS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function NotFound() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let id: number;
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);
    let t = 0;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      t += 0.008;
      const cols = Math.floor(canvas.width / 42);
      const rows = Math.floor(canvas.height / 42);
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * 42 + 21;
          const y = r * 42 + 21;
          const wave = Math.sin(t + c * 0.4 + r * 0.4) * 0.5 + 0.5;
          ctx.beginPath();
          ctx.arc(x, y, 1.2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(99,102,241,${wave * 0.14 + 0.03})`;
          ctx.fill();
        }
      }
      id = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-background flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" aria-hidden />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-[#6366F1]/8 blur-[120px] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 text-center max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span
            className="text-[120px] md:text-[180px] font-black leading-none tracking-tighter select-none"
            style={{
              background: "linear-gradient(135deg, rgba(99,102,241,0.2) 0%, rgba(56,189,248,0.1) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            404
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            This page doesn&apos;t exist.
          </h1>
          <p className="text-muted-foreground text-base mb-10 leading-relaxed">
            Even the best engineers 404 sometimes. The page you&apos;re looking for has been moved,
            deleted, or never existed. Let&apos;s get you back on track.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {SUGGESTIONS.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full border border-border bg-muted/20 hover:bg-muted/50 text-sm font-medium text-muted-foreground hover:text-foreground transition-all hover:-translate-y-px group"
            >
              {s.label}
              <ArrowRight className="h-3.5 w-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
            </Link>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#6366F1] hover:underline underline-offset-4 group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Zyvane
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
