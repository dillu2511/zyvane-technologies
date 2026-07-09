"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

// Each service is a "bento tile" with a unique size — not a boring equal grid
const BENTO_ITEMS = [
  {
    id: "ai",
    title: "AI Engineering",
    desc: "We build production-grade AI — RAG pipelines, fine-tuned LLMs, autonomous agents — not demos, real systems.",
    href: "/services/ai-engineering",
    accent: "#6366F1",
    size: "col-span-2 row-span-2", // Large tile
    badge: "Core Expertise",
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none" aria-hidden>
        <circle cx="20" cy="20" r="8" stroke="#6366F1" strokeWidth="1.5" />
        <circle cx="20" cy="5"  r="3" fill="#6366F1" opacity="0.7" />
        <circle cx="20" cy="35" r="3" fill="#6366F1" opacity="0.7" />
        <circle cx="5"  cy="20" r="3" fill="#6366F1" opacity="0.7" />
        <circle cx="35" cy="20" r="3" fill="#6366F1" opacity="0.7" />
        <line x1="20" y1="12" x2="20" y2="8"  stroke="#6366F1" strokeWidth="1.2" />
        <line x1="20" y1="28" x2="20" y2="32" stroke="#6366F1" strokeWidth="1.2" />
        <line x1="12" y1="20" x2="8"  y2="20" stroke="#6366F1" strokeWidth="1.2" />
        <line x1="28" y1="20" x2="32" y2="20" stroke="#6366F1" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    desc: "AWS, GCP, Azure. Zero-downtime deploys. IaC with Terraform.",
    href: "/services/devops",
    accent: "#38BDF8",
    size: "col-span-1 row-span-1",
    badge: null,
    icon: (
      <svg viewBox="0 0 40 28" className="w-8 h-6" fill="none" aria-hidden>
        <path d="M32 20H10a8 8 0 1 1 .93-15.96A10 10 0 0 1 32 12v0a6 6 0 0 1 0 8z" stroke="#38BDF8" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    id: "healthcare",
    title: "Healthcare Tech",
    desc: "HIPAA-compliant. EMR-integrated. Built for patient safety.",
    href: "/services/healthcare",
    accent: "#F43F5E",
    size: "col-span-1 row-span-1",
    badge: null,
    icon: (
      <svg viewBox="0 0 40 40" className="w-7 h-7" fill="none" aria-hidden>
        <path d="M20 8v24M8 20h24" stroke="#F43F5E" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "software",
    title: "Custom Enterprise Software",
    desc: "Bespoke platforms engineered for complex business logic — owned entirely by you.",
    href: "/services/custom-software",
    accent: "#34D399",
    size: "col-span-1 row-span-2",
    badge: null,
    icon: (
      <svg viewBox="0 0 40 40" className="w-7 h-7" fill="none" aria-hidden>
        <polyline points="8,14 16,20 8,26" stroke="#34D399" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="18" y1="26" x2="32" y2="26" stroke="#34D399" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "automation",
    title: "Workflow Automation",
    desc: "Eliminate repetitive ops with intelligent automation that connects every system.",
    href: "/services/workflow-automation",
    accent: "#F59E0B",
    size: "col-span-1 row-span-1",
    badge: null,
    icon: (
      <svg viewBox="0 0 40 40" className="w-7 h-7" fill="none" aria-hidden>
        <path d="M8 12h6l4 16 4-22 4 12h6" stroke="#F59E0B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "erp",
    title: "ERP & CRM",
    desc: "Mission-critical business systems. Better than SAP. Yours.",
    href: "/services/erp",
    accent: "#A78BFA",
    size: "col-span-1 row-span-1",
    badge: null,
    icon: (
      <svg viewBox="0 0 40 40" className="w-7 h-7" fill="none" aria-hidden>
        <rect x="6" y="6" width="12" height="12" rx="2" stroke="#A78BFA" strokeWidth="1.5" />
        <rect x="22" y="6" width="12" height="12" rx="2" stroke="#A78BFA" strokeWidth="1.5" />
        <rect x="6" y="22" width="12" height="12" rx="2" stroke="#A78BFA" strokeWidth="1.5" />
        <rect x="22" y="22" width="12" height="12" rx="2" stroke="#A78BFA" strokeWidth="1.5" />
      </svg>
    ),
  },
];

export function ServicesOverview() {
  return (
    <section className="py-28 bg-background relative overflow-hidden">
      {/* Section label */}
      <div className="container mx-auto px-6 mb-14">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/60 mb-4">Zyvane Core Architecture</p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-foreground max-w-md">
              The Engine that{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] to-[#38BDF8]">
                powers it all.
              </span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-xs text-sm leading-relaxed md:text-right">
            Instead of building from scratch, we inject these autonomous modules directly into your business infrastructure.
          </p>
        </div>
      </div>

      {/* Bento Grid */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] gap-3">
          {BENTO_ITEMS.map((item, i) => (
            <motion.div
              key={item.id}
              className={item.size}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
            >
              <BentoTile item={item} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BentoTile({ item }: { item: typeof BENTO_ITEMS[0] }) {
  return (
    <Link
      href={item.href}
      className="group relative h-full flex flex-col justify-between p-6 rounded-2xl border border-border bg-background overflow-hidden transition-all duration-300 hover:border-opacity-50 hover:-translate-y-0.5 hover:shadow-xl"
      style={{
        // @ts-expect-error custom CSS var
        "--accent": item.accent,
      }}
    >
      {/* Glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 0% 0%, ${item.accent}15 0%, transparent 60%)`,
        }}
      />

      {/* Accent top-left corner line */}
      <div
        className="absolute top-0 left-0 w-12 h-[2px] opacity-60 group-hover:w-full transition-all duration-500"
        style={{ background: item.accent }}
      />

      {/* Icon + Badge */}
      <div className="flex items-start justify-between">
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center"
          style={{ background: `${item.accent}15` }}
        >
          {item.icon}
        </div>
        {item.badge && (
          <span
            className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-full"
            style={{ background: `${item.accent}20`, color: item.accent }}
          >
            {item.badge}
          </span>
        )}
      </div>

      {/* Content */}
      <div>
        <h3 className="font-bold text-foreground text-base leading-tight mb-2 group-hover:text-white transition-colors">
          {item.title}
        </h3>
        <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
      </div>

      {/* Arrow */}
      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
        <ArrowUpRight className="h-4 w-4" style={{ color: item.accent }} />
      </div>
    </Link>
  );
}
