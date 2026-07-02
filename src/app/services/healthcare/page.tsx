"use client";

import { motion } from "framer-motion";
import { Activity, ArrowRight, FileText, Heart, Lock, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { CTA } from "@/components/sections/cta";

const CAPABILITIES = [
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "HIPAA-Compliant Architecture",
    desc: "Full HIPAA technical safeguard compliance: encryption at rest and in transit, audit logging, automatic logoff, and role-based access control (RBAC). We document every control for your BAA.",
    accent: "#F43F5E",
  },
  {
    icon: <Activity className="h-6 w-6" />,
    title: "EHR / EMR Integration",
    desc: "HL7 FHIR R4, Epic MyChart, Cerner APIs, and custom ADT feeds. We have integrated with the major EHR systems and can surface the clinical data your product needs without breaking compliance.",
    accent: "#34D399",
  },
  {
    icon: <FileText className="h-6 w-6" />,
    title: "Clinical Data Pipelines",
    desc: "OMOP CDM data warehouses, de-identification pipelines, and clinical NLP for extracting structured data from unstructured notes. We turn raw clinical data into actionable intelligence.",
    accent: "#6366F1",
  },
  {
    icon: <Heart className="h-6 w-6" />,
    title: "Telehealth Platforms",
    desc: "WebRTC-powered video consultations, asynchronous messaging, prescription workflows, and patient scheduling — built to FDA and CMS standards with clinical UX best practices.",
    accent: "#F59E0B",
  },
  {
    icon: <Lock className="h-6 w-6" />,
    title: "Patient Identity & Auth",
    desc: "SMART on FHIR authorization, patient-facing OTP flows, and enterprise SSO for clinical staff. Multi-factor authentication that meets HIPAA's access control requirements without destroying UX.",
    accent: "#38BDF8",
  },
  {
    icon: <Activity className="h-6 w-6" />,
    title: "AI Clinical Decision Support",
    desc: "Risk stratification models, drug interaction checkers, clinical trial matching engines, and diagnostic assistance tools — built with clinician oversight and explainability at the core.",
    accent: "#A78BFA",
  },
];

const COMPLIANCE = [
  { name: "HIPAA", desc: "Technical safeguards, BAA documentation, audit trail logging" },
  { name: "HL7 FHIR R4", desc: "Interoperability with EHR systems, CMS compliance" },
  { name: "SOC 2 Type II", desc: "Security, availability, and confidentiality controls" },
  { name: "GDPR", desc: "Data subject rights, cross-border transfer safeguards" },
];

export default function HealthcarePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#F43F5E]/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Hero */}
      <section className="pt-32 pb-24 container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-[1px] bg-[#F43F5E]" />
            <span className="text-[#F43F5E] font-mono text-sm tracking-widest uppercase">Healthcare Tech</span>
          </div>

          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-[#F43F5E]/30 bg-[#F43F5E]/5 text-sm font-semibold text-[#F43F5E] w-max">
            <Heart className="h-4 w-4" />
            Healthcare Software Engineering
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[1.08] mb-8">
            Compliance is a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F43F5E] to-[#F59E0B]">
              feature, not an afterthought.
            </span>
          </h1>

          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl font-medium mb-10">
            We build HIPAA-compliant healthcare software that healthcare professionals actually want to use. EHR integrations, telehealth platforms, clinical AI, and patient-facing apps — with zero compromise on security or performance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 h-14 px-8 rounded-full bg-[#F43F5E] hover:bg-[#e11d48] text-white font-bold text-base transition-all duration-200 shadow-[0_0_40px_rgba(244,63,94,0.35)] hover:shadow-[0_0_60px_rgba(244,63,94,0.55)] hover:-translate-y-0.5"
            >
              Discuss Your Healthcare Product
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

      {/* Capabilities */}
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
              Built for the clinical environment
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We understand the unique constraints of healthcare — regulatory, workflow, and patient safety. Our engineers have shipped products used by clinicians and patients in real medical settings.
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

      {/* Compliance Standards */}
      <section className="py-24 bg-[#080808] border-t border-border/40 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-12"
          >
            <h2 className="text-4xl font-black tracking-tighter mb-4">Compliance frameworks we know</h2>
            <p className="text-muted-foreground leading-relaxed">
              We don't learn compliance on your dime. Every standard below is one we have implemented, documented, and audited.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
            {COMPLIANCE.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-4 p-6 rounded-2xl border border-border bg-background/50"
              >
                <div className="w-2 h-2 rounded-full bg-[#F43F5E] mt-2 shrink-0" />
                <div>
                  <div className="font-bold text-lg mb-1">{c.name}</div>
                  <div className="text-muted-foreground text-sm">{c.desc}</div>
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
