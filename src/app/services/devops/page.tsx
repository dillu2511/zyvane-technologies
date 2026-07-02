"use client";

import { motion } from "framer-motion";
import { ArrowRight, Cloud, GitMerge, Lock, Server, Shield, Terminal } from "lucide-react";
import Link from "next/link";
import { CTA } from "@/components/sections/cta";

const CAPABILITIES = [
  {
    icon: <Cloud className="h-6 w-6" />,
    title: "Multi-Cloud Architecture",
    desc: "AWS, GCP, and Azure expertise. We design cloud-agnostic architectures using Terraform and Pulumi so you're never locked into one vendor — and can migrate at will.",
    accent: "#38BDF8",
  },
  {
    icon: <GitMerge className="h-6 w-6" />,
    title: "CI/CD Pipeline Engineering",
    desc: "GitHub Actions, ArgoCD, and Tekton pipelines with automated testing, security scanning, and blue/green deployment strategies. From PR to production in minutes, not hours.",
    accent: "#34D399",
  },
  {
    icon: <Terminal className="h-6 w-6" />,
    title: "Kubernetes Orchestration",
    desc: "Production-grade K8s cluster design with HPA, VPA, custom autoscalers, and multi-region failover. We have run clusters handling 50k+ RPS under sustained load.",
    accent: "#6366F1",
  },
  {
    icon: <Server className="h-6 w-6" />,
    title: "Infrastructure as Code",
    desc: "Every resource declared, versioned, and reproducible. We eliminate 'works on my machine' at the infrastructure level with Terraform modules, Helm charts, and GitOps.",
    accent: "#F59E0B",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Security & Compliance",
    desc: "SOC 2 readiness, CIS benchmarks, VPC isolation, IAM least-privilege, secrets management with Vault. We bake security in — it's not an afterthought.",
    accent: "#F43F5E",
  },
  {
    icon: <Lock className="h-6 w-6" />,
    title: "Observability Stack",
    desc: "Full-spectrum observability with Prometheus, Grafana, OpenTelemetry tracing, and Loki log aggregation. Know exactly what your system is doing at every layer, in real time.",
    accent: "#A78BFA",
  },
];

const TECH = [
  "Kubernetes", "Terraform", "ArgoCD", "Helm",
  "AWS EKS", "GCP GKE", "Azure AKS", "GitHub Actions",
  "Prometheus", "Grafana", "Vault", "Istio",
  "Pulumi", "Docker", "OpenTelemetry", "Loki",
];

export default function DevOpsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#38BDF8]/6 rounded-full blur-[140px] pointer-events-none" />

      {/* Hero */}
      <section className="pt-32 pb-24 container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-[1px] bg-[#38BDF8]" />
            <span className="text-[#38BDF8] font-mono text-sm tracking-widest uppercase">Infrastructure</span>
          </div>

          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-[#38BDF8]/30 bg-[#38BDF8]/5 text-sm font-semibold text-[#38BDF8] w-max">
            <Cloud className="h-4 w-4" />
            Cloud & DevOps
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[1.08] mb-8">
            Infrastructure that{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] to-[#34D399]">
              never sleeps.
            </span>
          </h1>

          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl font-medium mb-10">
            Zero-downtime deployments. Sub-second auto-scaling. We build and manage cloud infrastructure on AWS, GCP, and Azure that handles whatever you throw at it — and costs a fraction of what you're spending today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 h-14 px-8 rounded-full bg-[#38BDF8] hover:bg-[#0ea5e9] text-black font-bold text-base transition-all duration-200 shadow-[0_0_40px_rgba(56,189,248,0.35)] hover:shadow-[0_0_60px_rgba(56,189,248,0.55)] hover:-translate-y-0.5"
            >
              Audit My Infrastructure
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-full border border-border bg-background/60 hover:bg-muted text-foreground font-semibold text-base transition-all duration-200 hover:-translate-y-0.5"
            >
              See Our Work
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
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6">Full-stack DevOps</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From infrastructure provisioning to production monitoring — we own the entire operations layer so your engineers can focus on product.
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

      {/* Tech Stack */}
      <section className="py-20 bg-[#080808] border-t border-border/40 relative z-10">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-black tracking-tighter mb-12"
          >
            Tools we run in production
          </motion.h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {TECH.map((t, i) => (
              <motion.span
                key={t}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className="px-4 py-2 rounded-full border border-border bg-muted/20 text-sm font-mono text-muted-foreground hover:text-[#38BDF8] hover:border-[#38BDF8]/30 transition-colors"
              >
                {t}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            {[
              { value: "99.99%", label: "Uptime Achieved" },
              { value: "0", label: "Unplanned Downtime Events" },
              { value: "3x", label: "Average Cost Reduction" },
              { value: "<5min", label: "Mean Deploy Time" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] to-[#34D399] mb-2">
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
