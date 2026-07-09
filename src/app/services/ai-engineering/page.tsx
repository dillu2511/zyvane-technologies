"use client";

import { motion } from "framer-motion";
import { ArrowRight, BrainCircuit, Code2, Database, GitBranch, Layers, Zap } from "lucide-react";
import Link from "next/link";
import { CTA } from "@/components/sections/cta";

const CAPABILITIES = [
  {
    icon: <BrainCircuit className="h-6 w-6" />,
    title: "LLM Fine-Tuning & RAG",
    desc: "We take foundation models (GPT-4, Llama 3, Mistral) and fine-tune them on your proprietary data. RAG pipelines with vector databases (Pinecone, Weaviate, pgvector) for accurate, hallucination-resistant retrieval.",
    accent: "#6366F1",
  },
  {
    icon: <Layers className="h-6 w-6" />,
    title: "Autonomous Agent Systems",
    desc: "Multi-agent architectures using LangGraph, CrewAI, and custom orchestration. We build agents that take actions — not just answer questions — integrated into your business workflows.",
    accent: "#38BDF8",
  },
  {
    icon: <Database className="h-6 w-6" />,
    title: "ML Data Pipelines",
    desc: "End-to-end MLOps infrastructure: data ingestion, feature engineering, model training at scale, and automated retraining triggers. Built on Airflow, dbt, and Spark.",
    accent: "#34D399",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Real-Time Inference APIs",
    desc: "Production-grade inference endpoints optimized for latency. Model quantization, TensorRT acceleration, and auto-scaling inference clusters on AWS SageMaker or GCP Vertex AI.",
    accent: "#F59E0B",
  },
  {
    icon: <Code2 className="h-6 w-6" />,
    title: "AI-Integrated Platforms",
    desc: "We don't just build models — we embed intelligence into your products. Chat interfaces, document understanding systems, code generation tools, and recommendation engines.",
    accent: "#A78BFA",
  },
  {
    icon: <GitBranch className="h-6 w-6" />,
    title: "Model Evaluation & Safety",
    desc: "Rigorous evaluation frameworks, bias detection, and guardrails. We ensure your AI system behaves predictably in production and meets enterprise compliance standards.",
    accent: "#F43F5E",
  },
];

const PROCESS = [
  { step: "01", title: "Data Audit", desc: "We assess your existing data assets, identify gaps, and design a collection strategy. Bad data kills models — we fix this first." },
  { step: "02", title: "Architecture Design", desc: "We design the full AI system: model selection, infrastructure, APIs, monitoring. No black boxes — you own every component." },
  { step: "03", title: "Prototype in 2 Weeks", desc: "A working proof-of-concept against your real data, evaluated on metrics that matter to your business — not benchmark scores." },
  { step: "04", title: "Production Hardening", desc: "Latency optimization, load testing, fallback logic, PII redaction, rate limiting. We ship AI that is safe, fast, and reliable." },
  { step: "05", title: "Monitoring & Iteration", desc: "Drift detection, A/B testing, automated retraining pipelines. Your AI system gets smarter over time, not stale." },
];

export default function AIEngineeringPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background relative overflow-hidden">
      {/* Hero background glows */}
      <div className="absolute top-0 left-1/4 w-[700px] h-[700px] bg-[#6366F1]/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#38BDF8]/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Hero */}
      <section className="pt-32 pb-24 container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-[1px] bg-[#6366F1]" />
            <span className="text-[#6366F1] font-mono text-sm tracking-widest uppercase">Core Expertise</span>
          </div>

          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-[#6366F1]/30 bg-[#6366F1]/5 text-sm font-semibold text-[#6366F1] w-max">
            <BrainCircuit className="h-4 w-4" />
            AI Engineering
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[1.08] mb-8">
            AI that works in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] to-[#38BDF8]">
              production.
            </span>
          </h1>

          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl font-medium mb-10">
            We don't build demos. We architect, train, and deploy production-grade AI systems — LLM-powered agents, RAG pipelines, real-time inference APIs — that generate measurable business value from day one.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 h-14 px-8 rounded-full bg-[#6366F1] hover:bg-[#5253D4] text-white font-bold text-base transition-all duration-200 shadow-[0_0_40px_rgba(99,102,241,0.4)] hover:shadow-[0_0_60px_rgba(99,102,241,0.6)] hover:-translate-y-0.5"
            >
              Initialize Deployment
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-full border border-border bg-background/60 hover:bg-muted text-foreground font-semibold text-base transition-all duration-200 hover:-translate-y-0.5"
            >
              See Case Studies
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-24 border-t border-border/50 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6">
              What we build
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From model training to production deployment — every layer of the AI stack, handled by engineers who have shipped real systems.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {CAPABILITIES.map((cap, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative p-8 rounded-2xl border border-border bg-background overflow-hidden hover:border-opacity-60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Accent glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `radial-gradient(ellipse at 0% 0%, ${cap.accent}12 0%, transparent 70%)` }}
                />
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-0 h-[2px] w-10 group-hover:w-full transition-all duration-500 opacity-70"
                  style={{ background: cap.accent }}
                />

                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 relative z-10"
                  style={{ background: `${cap.accent}18`, color: cap.accent }}
                >
                  {cap.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 relative z-10 group-hover:text-white transition-colors">{cap.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm relative z-10">{cap.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
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
              How we ship AI
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A disciplined process that turns raw business requirements into production-ready AI systems — with zero hand-waving.
            </p>
          </motion.div>

          <div className="space-y-0">
            {PROCESS.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group flex items-start gap-8 py-10 border-b border-border/40 hover:bg-white/[0.02] transition-colors px-4 rounded-xl"
              >
                <span className="text-[#6366F1] font-mono text-2xl font-bold shrink-0 opacity-50 group-hover:opacity-100 transition-opacity">
                  {item.step}
                </span>
                <div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-white transition-colors">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed max-w-2xl">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-20 border-t border-border/40 relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            {[
              { value: "<14ms", label: "Median Inference Latency" },
              { value: "99.9%", label: "Uptime SLA" },
              { value: "2 Wks", label: "To Working Prototype" },
              { value: "Full", label: "IP Ownership Transfer" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] to-[#38BDF8] mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-widest font-medium">
                  {stat.label}
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
