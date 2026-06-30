"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Each capability is a horizontal "timeline row" — completely unique layout
const capabilities = [
  {
    number: "01",
    area: "AI & Machine Learning",
    desc: "End-to-end ML pipelines, LLM-powered applications, RAG document intelligence, and predictive analytics systems built for production — not experimentation.",
    stack: ["Python", "LangChain", "TensorFlow", "FastAPI", "Pinecone"],
    accent: "#6366F1",
  },
  {
    number: "02",
    area: "Enterprise Web Platforms",
    desc: "Multi-role SaaS applications with complex permission systems, real-time collaboration, deep third-party integrations, and PostgreSQL at scale.",
    stack: ["Next.js", "React", "PostgreSQL", "GraphQL", "tRPC"],
    accent: "#38BDF8",
  },
  {
    number: "03",
    area: "Cloud-Native Architecture",
    desc: "Domain-driven microservices on Kubernetes, event-driven systems with message queues, infrastructure-as-code, and zero-downtime CI/CD pipelines.",
    stack: ["Go", "Docker", "Kubernetes", "Terraform", "AWS"],
    accent: "#34D399",
  },
];

export function PortfolioPreview() {
  return (
    <section className="py-28 bg-background relative overflow-hidden border-t border-border/40">
      {/* Decorative vertical line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent hidden lg:block pointer-events-none" />

      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/60 mb-4">Core capabilities</p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-foreground">
              What we actually{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] to-[#34D399]">
                ship.
              </span>
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors group"
          >
            Explore all capabilities
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Horizontal timeline-style rows */}
        <div className="space-y-0">
          {capabilities.map((cap, i) => (
            <CapabilityRow key={cap.number} cap={cap} index={i} isLast={i === capabilities.length - 1} />
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-12 text-center md:hidden">
          <Link href="/portfolio" className="inline-flex items-center gap-2 text-sm font-semibold text-[#6366F1]">
            Explore all capabilities <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function CapabilityRow({
  cap,
  index,
  isLast,
}: {
  cap: (typeof capabilities)[0];
  index: number;
  isLast: boolean;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.12, ease: [0.33, 1, 0.68, 1] }}
      className={`group grid grid-cols-1 md:grid-cols-[80px_1fr_1fr] gap-6 md:gap-10 py-10 ${
        !isLast ? "border-b border-border/50" : ""
      } hover:bg-muted/20 transition-colors rounded-2xl px-4 -mx-4 cursor-default`}
    >
      {/* Number */}
      <div className="flex md:flex-col items-center md:items-start gap-3 md:gap-0">
        <span
          className="text-3xl font-black tracking-tighter tabular-nums opacity-20 group-hover:opacity-60 transition-opacity"
          style={{ color: cap.accent }}
        >
          {cap.number}
        </span>
        {/* Vertical accent bar (desktop only) */}
        <motion.div
          className="hidden md:block mt-3 w-px h-0 group-hover:h-12 transition-all duration-500 ease-in-out"
          style={{ background: cap.accent }}
        />
      </div>

      {/* Title + Tags */}
      <div>
        <h3
          className="text-2xl font-bold text-foreground mb-4 leading-tight group-hover:text-transparent group-hover:bg-clip-text transition-all"
          style={{
            backgroundImage: `linear-gradient(135deg, ${cap.accent}, #fff)`,
            WebkitBackgroundClip: "text",
          }}
        >
          {cap.area}
        </h3>
        <div className="flex flex-wrap gap-2">
          {cap.stack.map((tag, ti) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.12 + ti * 0.06 + 0.2 }}
              className="text-xs font-mono text-muted-foreground/70 border border-border/60 px-2.5 py-1 rounded-md bg-muted/20"
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Description */}
      <div className="flex items-start">
        <p className="text-sm text-muted-foreground leading-relaxed">{cap.desc}</p>
      </div>
    </motion.div>
  );
}
