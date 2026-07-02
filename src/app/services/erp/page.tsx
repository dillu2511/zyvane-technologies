"use client";

import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Building2, Cog, Database, GitBranch, Users } from "lucide-react";
import Link from "next/link";
import { CTA } from "@/components/sections/cta";

const CAPABILITIES = [
  {
    icon: <Building2 className="h-6 w-6" />,
    title: "Custom ERP Systems",
    desc: "Bespoke ERP platforms that fit your business like a glove — not the other way around. Finance, inventory, procurement, HR, and operations modules built for your exact workflows.",
    accent: "#A78BFA",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "CRM Engineering",
    desc: "Sales pipeline management, customer lifecycle tracking, and support ticket systems that your sales team will actually use. We build CRMs that increase adoption, not resentment.",
    accent: "#6366F1",
  },
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: "Executive Dashboards & BI",
    desc: "Real-time operational dashboards and embedded analytics that give leadership the visibility to make data-driven decisions — not from last month's export, but from right now.",
    accent: "#38BDF8",
  },
  {
    icon: <Cog className="h-6 w-6" />,
    title: "Legacy ERP Migration",
    desc: "Migrating off SAP, Oracle, or Dynamics without downtime. We have designed parallel-run strategies, data migration tooling, and phased cutover plans for mission-critical ERP replacements.",
    accent: "#34D399",
  },
  {
    icon: <Database className="h-6 w-6" />,
    title: "Multi-Tenant SaaS ERP",
    desc: "Building a SaaS product in the ERP/CRM space? We architect multi-tenant data isolation, customizable modules per tenant, and billing integration from the ground up.",
    accent: "#F59E0B",
  },
  {
    icon: <GitBranch className="h-6 w-6" />,
    title: "Third-Party Integrations",
    desc: "QuickBooks, Xero, Stripe, Plaid, Salesforce, HubSpot — we connect your custom ERP/CRM to the financial and operational tools your business already depends on.",
    accent: "#F43F5E",
  },
];

const VS_SAP = [
  { feature: "Implementation Time", sap: "12–24 months", zyvane: "6–12 weeks" },
  { feature: "Total Cost of Ownership", sap: "$500k–$5M+", zyvane: "You define the budget" },
  { feature: "Customization", sap: "Expensive consultants", zyvane: "Built for you from scratch" },
  { feature: "User Adoption", sap: "Forced via mandate", zyvane: "Designed for the actual user" },
  { feature: "IP Ownership", sap: "Vendor-locked", zyvane: "100% yours" },
];

export default function ERPPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#A78BFA]/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Hero */}
      <section className="pt-32 pb-24 container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-[1px] bg-[#A78BFA]" />
            <span className="text-[#A78BFA] font-mono text-sm tracking-widest uppercase">Business Systems</span>
          </div>

          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-[#A78BFA]/30 bg-[#A78BFA]/5 text-sm font-semibold text-[#A78BFA] w-max">
            <Building2 className="h-4 w-4" />
            ERP & CRM Engineering
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[1.08] mb-8">
            Better than SAP.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A78BFA] to-[#6366F1]">
              And it&apos;s yours.
            </span>
          </h1>

          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl font-medium mb-10">
            SAP and Oracle tell you to fit your business around their software. We build the ERP around your business. Custom, owned, faster to deploy, and a fraction of the cost.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 h-14 px-8 rounded-full bg-[#A78BFA] hover:bg-[#9333ea] text-white font-bold text-base transition-all duration-200 shadow-[0_0_40px_rgba(167,139,250,0.35)] hover:shadow-[0_0_60px_rgba(167,139,250,0.55)] hover:-translate-y-0.5"
            >
              Start ERP Discovery
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-full border border-border bg-background/60 hover:bg-muted text-foreground font-semibold text-base transition-all duration-200 hover:-translate-y-0.5"
            >
              Compare Costs
            </Link>
          </div>
        </motion.div>
      </section>

      {/* vs SAP Comparison Table */}
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
              Zyvane vs. Legacy ERP
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The math is simple. Enterprise software doesn't have to cost enterprise prices.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto overflow-hidden rounded-2xl border border-border">
            <div className="grid grid-cols-3 bg-muted/30 py-4 px-6 text-xs font-bold uppercase tracking-widest text-muted-foreground">
              <div>Feature</div>
              <div className="text-center text-red-400">Legacy (SAP / Oracle)</div>
              <div className="text-center text-[#A78BFA]">Zyvane Custom</div>
            </div>
            {VS_SAP.map((row, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="grid grid-cols-3 py-5 px-6 border-t border-border items-center hover:bg-white/[0.02] transition-colors"
              >
                <div className="font-medium text-sm">{row.feature}</div>
                <div className="text-center text-sm text-muted-foreground">{row.sap}</div>
                <div className="text-center text-sm font-bold text-[#A78BFA]">{row.zyvane}</div>
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
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6">Full ERP/CRM capability</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every module of a modern business system — built to spec, with no licensing fees, ever.
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
