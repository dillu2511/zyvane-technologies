"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2, GitBranch, Layers, Lock, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";
import { CTA } from "@/components/sections/cta";

const FEATURES = [
  {
    icon: <Layers className="h-6 w-6" />,
    title: "Microservices Architecture",
    desc: "Decoupled systems that allow independent scaling and deployment. Each service owns its data, its API contract, and its deployment lifecycle — no big-bang releases, ever.",
    accent: "#34D399",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "High-Performance APIs",
    desc: "GraphQL and RESTful APIs engineered for sub-10ms response times under concurrent load. We load test before we ship — not after production starts screaming.",
    accent: "#6366F1",
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "Enterprise Security",
    desc: "End-to-end encryption, RBAC, audit logging, rate limiting, and compliance with SOC2 and GDPR. Security is designed into the architecture — not bolted on afterward.",
    accent: "#38BDF8",
  },
  {
    icon: <Code2 className="h-6 w-6" />,
    title: "Modern Stacks",
    desc: "Next.js, React, Node.js, Go, and Rust on the frontend and backend. Deployed on Kubernetes across AWS, GCP, or Azure — or on your existing on-premise infrastructure.",
    accent: "#F59E0B",
  },
  {
    icon: <GitBranch className="h-6 w-6" />,
    title: "Full IP Transfer",
    desc: "Everything we build is yours. Source code, documentation, CI/CD pipelines, infrastructure configs — transferred on delivery. No licensing, no lock-in.",
    accent: "#A78BFA",
  },
  {
    icon: <Lock className="h-6 w-6" />,
    title: "Built to be Maintained",
    desc: "We write code as if your future team will have to understand it without us. Extensive documentation, test coverage targets of 80%+, and clear module boundaries.",
    accent: "#F43F5E",
  },
];

const EXAMPLES = [
  {
    name: "Internal Operations Platform",
    desc: "Replace a sprawling spreadsheet-and-email workflow with a purpose-built internal tool that your team actually wants to use.",
    tags: ["Next.js", "PostgreSQL", "Node.js"],
  },
  {
    name: "Multi-Tenant SaaS Product",
    desc: "From zero to a production multi-tenant SaaS with org isolation, billing integration, role management, and a self-serve onboarding flow.",
    tags: ["React", "Go", "Stripe", "Redis"],
  },
  {
    name: "Data-Heavy Dashboard",
    desc: "Real-time analytics dashboards that query millions of rows with sub-second response times using query optimization, caching, and materialized views.",
    tags: ["Next.js", "Clickhouse", "dbt", "Recharts"],
  },
];

export default function CustomSoftwarePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background relative overflow-hidden">
      <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-[#34D399]/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Hero */}
      <section className="pt-32 pb-24 container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-[1px] bg-[#34D399]" />
            <span className="text-[#34D399] font-mono text-sm tracking-widest uppercase">Custom Modules</span>
          </div>

          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-[#34D399]/30 bg-[#34D399]/5 text-sm font-semibold text-[#34D399] w-max">
            <Code2 className="h-4 w-4" />
            Custom Core Injection
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[1.08] mb-8">
            Architected for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34D399] to-[#6366F1]">
              Complexity.
            </span>
          </h1>

          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl font-medium mb-10">
            Off-the-shelf software doesn&apos;t scale with unique business logic. We inject the pre-architected Zyvane OS core and engineer bespoke logic on top — owned entirely by you — powering operations for companies that cannot afford to compromise.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 h-14 px-8 rounded-full bg-[#34D399] hover:bg-[#10b981] text-black font-bold text-base transition-all duration-200 shadow-[0_0_40px_rgba(52,211,153,0.35)] hover:shadow-[0_0_60px_rgba(52,211,153,0.55)] hover:-translate-y-0.5"
            >
              Initialize Deployment
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-full border border-border bg-background/60 hover:bg-muted text-foreground font-semibold text-base transition-all duration-200 hover:-translate-y-0.5"
            >
              View Case Studies
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="py-24 border-t border-border/50 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6">OS Architecture Superiority</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our injection methodology ensures that your software is not just functional, but resilient, maintainable, and built for 10x growth from day one.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {FEATURES.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative p-8 rounded-2xl border border-border bg-background overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `radial-gradient(ellipse at 0% 0%, ${feature.accent}12 0%, transparent 70%)` }}
                />
                <div
                  className="absolute top-0 left-0 h-[2px] w-10 group-hover:w-full transition-all duration-500 opacity-70"
                  style={{ background: feature.accent }}
                />
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 relative z-10"
                  style={{ background: `${feature.accent}18`, color: feature.accent }}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 relative z-10 group-hover:text-white transition-colors">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm relative z-10">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Example Builds */}
      <section className="py-24 bg-[#080808] border-t border-border/40 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6">
              Typical Module Injections
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every project is unique, but these are the categories where we have the deepest track record.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
            {EXAMPLES.map((ex, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 rounded-2xl border border-border bg-background/40"
              >
                <h3 className="text-xl font-bold mb-3">{ex.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{ex.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {ex.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono text-muted-foreground border border-border px-2.5 py-1 rounded-md bg-muted/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
