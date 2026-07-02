"use client";

import { motion } from "framer-motion";
import { ArrowRight, Bot, GitBranch, PlugZap, RefreshCw, Workflow, Zap } from "lucide-react";
import Link from "next/link";
import { CTA } from "@/components/sections/cta";

const CAPABILITIES = [
  {
    icon: <Workflow className="h-6 w-6" />,
    title: "Business Process Automation",
    desc: "We map your manual workflows, identify bottlenecks, and replace them with intelligent automated systems. From invoice processing to employee onboarding — if it's repetitive, we automate it.",
    accent: "#F59E0B",
  },
  {
    icon: <PlugZap className="h-6 w-6" />,
    title: "System Integration & iPaaS",
    desc: "Salesforce, HubSpot, SAP, Workday, NetSuite, Slack — we build bi-directional integrations that keep your systems in sync in real time. No more CSV exports and manual data entry.",
    accent: "#34D399",
  },
  {
    icon: <Bot className="h-6 w-6" />,
    title: "AI-Powered Document Processing",
    desc: "Intelligent OCR and NLP pipelines that extract, validate, and route data from contracts, invoices, medical records, and compliance documents. 99%+ extraction accuracy on structured documents.",
    accent: "#6366F1",
  },
  {
    icon: <RefreshCw className="h-6 w-6" />,
    title: "Data Sync & ETL Pipelines",
    desc: "Real-time CDC pipelines with Debezium and Kafka that keep your operational and analytical systems synchronized without ever missing an event, even under data spikes.",
    accent: "#38BDF8",
  },
  {
    icon: <GitBranch className="h-6 w-6" />,
    title: "Custom Workflow Engines",
    desc: "When off-the-shelf tools like Zapier or Make can't handle your complexity, we build bespoke workflow orchestration engines with conditional logic, human-in-the-loop approval gates, and full audit trails.",
    accent: "#A78BFA",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "RPA & Browser Automation",
    desc: "Robotic Process Automation for legacy systems that don't have APIs. We automate the boring human-computer interactions so your team focuses on decisions, not data entry.",
    accent: "#F43F5E",
  },
];

const SAVINGS = [
  { before: "40 hrs/week", after: "< 2 hrs/week", task: "Manual data entry across systems" },
  { before: "48-72 hrs", after: "< 15 minutes", task: "Invoice processing & approval routing" },
  { before: "3-5 days", after: "< 4 hours", task: "New employee onboarding workflows" },
  { before: "Daily manual exports", after: "Real-time sync", task: "CRM ↔ ERP data synchronization" },
];

export default function WorkflowAutomationPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#F59E0B]/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Hero */}
      <section className="pt-32 pb-24 container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-[1px] bg-[#F59E0B]" />
            <span className="text-[#F59E0B] font-mono text-sm tracking-widest uppercase">Automation</span>
          </div>

          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-[#F59E0B]/30 bg-[#F59E0B]/5 text-sm font-semibold text-[#F59E0B] w-max">
            <Workflow className="h-4 w-4" />
            Workflow Automation
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[1.08] mb-8">
            Eliminate the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F59E0B] to-[#F43F5E]">
              human bottleneck.
            </span>
          </h1>

          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl font-medium mb-10">
            Your team is spending thousands of hours on repetitive operations. We build intelligent automation systems that connect every tool in your stack, eliminate manual data entry, and let your people focus on work that actually requires them.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 h-14 px-8 rounded-full bg-[#F59E0B] hover:bg-[#d97706] text-black font-bold text-base transition-all duration-200 shadow-[0_0_40px_rgba(245,158,11,0.35)] hover:shadow-[0_0_60px_rgba(245,158,11,0.55)] hover:-translate-y-0.5"
            >
              Map My Workflows
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

      {/* Before / After */}
      <section className="py-24 border-t border-border/50 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6">Before vs. After</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Real numbers from workflows we have automated for clients across industries.
            </p>
          </motion.div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {SAVINGS.map((row, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="grid grid-cols-3 gap-4 items-center p-6 rounded-2xl border border-border bg-background/50 hover:bg-white/[0.03] transition-colors"
              >
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Task</div>
                  <div className="font-medium text-sm">{row.task}</div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-red-400 uppercase tracking-widest mb-1">Before</div>
                  <div className="text-xl font-bold text-red-400">{row.before}</div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-[#34D399] uppercase tracking-widest mb-1">After</div>
                  <div className="text-xl font-bold text-[#34D399]">{row.after}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 bg-[#080808] border-t border-border/40 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6">What we automate</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From simple API integrations to complex multi-system orchestrations — we match the right tool to the right problem.
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
                className="group relative p-8 rounded-2xl border border-border bg-background overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `radial-gradient(ellipse at 0% 0%, ${cap.accent}12 0%, transparent 70%)` }}
                />
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

      <CTA />
    </div>
  );
}
