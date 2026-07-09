"use client";

import { motion } from "framer-motion";
import { ArrowRight, Activity, Database, Server, Cpu, Zap } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

const CASE_STUDIES = [
  {
    id: "01",
    client: "Global Logistics Provider",
    title: "AI-Driven Route Optimization Engine",
    metric: "32%",
    metricLabel: "Reduction in fuel costs",
    tags: ["Python", "TensorFlow", "Kubernetes", "PostgreSQL"],
    problem: "The client was manually routing a fleet of 5,000+ vehicles using legacy on-premise software. It took 6 hours to compute daily routes and could not adjust to real-time traffic or weather.",
    solution: "We replaced the legacy system with a cloud-native microservices architecture. We trained a custom Graph Neural Network (GNN) on 5 years of historical traffic data. The system now ingests real-time weather and traffic APIs, recomputing 5,000 routes in under 4 minutes.",
    icon: <Activity className="w-6 h-6 text-[#6366F1]" />,
    gradient: "from-[#6366F1]/20 to-transparent"
  },
  {
    id: "02",
    client: "Healthcare SaaS Startup",
    title: "HIPAA-Compliant Patient Data Lake",
    metric: "Zero",
    metricLabel: "Downtime during migration",
    tags: ["AWS", "Snowflake", "dbt", "Next.js", "Go"],
    problem: "A rapidly growing startup was hitting database locks and timeouts as patient records crossed 10 million. Queries for analytical dashboards were taking up to 45 seconds.",
    solution: "We designed a decoupling strategy using CDC (Change Data Capture) with Debezium and Kafka. OLTP traffic remained on Postgres, while analytics were routed to a newly built Snowflake data warehouse. Dashboards were rewritten in Next.js, dropping load times from 45s to 200ms.",
    icon: <Database className="w-6 h-6 text-[#38BDF8]" />,
    gradient: "from-[#38BDF8]/20 to-transparent"
  },
  {
    id: "03",
    client: "Fintech Enterprise",
    title: "Real-time Fraud Detection System",
    metric: "12ms",
    metricLabel: "Average inference time",
    tags: ["Rust", "Redis", "Kafka", "PyTorch"],
    problem: "Fraud detection was happening post-transaction via an overnight batch process, resulting in millions of dollars in unrecoverable chargebacks.",
    solution: "We architected an event-driven streaming pipeline. Every transaction is pushed to Kafka and processed by a Rust-based microservice that queries a Redis feature store and runs inference via a quantized PyTorch model. We catch fraud before the payment gateway accepts it.",
    icon: <Cpu className="w-6 h-6 text-[#34D399]" />,
    gradient: "from-[#34D399]/20 to-transparent"
  },
  {
    id: "04",
    client: "TypeMastery.in",
    title: "Real-time Keystroke Analytics Engine",
    metric: "< 5ms",
    metricLabel: "Keystroke Latency",
    tags: ["Next.js", "WebSockets", "Node.js", "Redis", "ClickHouse"],
    problem: "The platform required a low-latency infrastructure capable of handling thousands of concurrent typing tests, processing keystroke telemetry, and calculating WPM and accuracy metrics without visual lag.",
    solution: "We engineered an edge-optimized architecture. React handles local state for 0ms input lag, while keystroke telemetry is batched and streamed via WebSockets to a Node.js microservice. Aggregated analytics are persisted in ClickHouse for real-time leaderboards and historical tracking.",
    icon: <Zap className="w-6 h-6 text-[#A78BFA]" />,
    gradient: "from-[#A78BFA]/20 to-transparent",
    link: "https://typemastery.in/"
  }
];

export default function PortfolioPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#6366F1]/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Header */}
      <section className="pt-32 pb-20 container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-[1px] bg-[#6366F1]" />
            <span className="text-[#6366F1] font-mono text-sm tracking-widest uppercase">Case Studies</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[1.1] mb-8">
            Deployments in <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">Production.</span>
          </h1>
          
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl font-medium">
            We don&apos;t build standard websites. We inject Zyvane OS into enterprises that cannot afford failure. Here is how our modules scale under pressure.
          </p>
        </motion.div>
      </section>

      {/* Case Studies */}
      <section className="pb-32 relative z-10">
        <div className="container mx-auto px-6 space-y-32">
          {CASE_STUDIES.map((study) => (
            <motion.div 
              key={study.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              {/* Massive background number */}
              <div className="absolute -top-20 -left-10 text-[200px] font-black text-white/[0.02] select-none pointer-events-none tracking-tighter leading-none z-0">
                {study.id}
              </div>

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                
                {/* Left Side: Meta & Metric */}
                <div className="lg:col-span-4 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                        {study.icon}
                      </div>
                      <span className="text-sm font-mono text-muted-foreground uppercase tracking-wider">{study.client}</span>
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
                      {study.title}
                    </h2>
                    
                    <div className="flex flex-wrap gap-2 mb-12">
                      {study.tags.map(tag => (
                        <Badge key={tag} variant="outline" className="bg-white/5 border-white/10 text-xs text-muted-foreground font-mono rounded-md py-1">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Highlight Metric */}
                  <div className={`p-8 rounded-3xl bg-gradient-to-br ${study.gradient} border border-white/10 backdrop-blur-sm relative overflow-hidden`}>
                    <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/5 rounded-full blur-2xl" />
                    <div className="text-5xl font-black text-white mb-2 tracking-tighter">{study.metric}</div>
                    <div className="text-sm font-medium text-white/70 uppercase tracking-widest">{study.metricLabel}</div>
                  </div>
                </div>

                {/* Right Side: Architecture Post-Mortem */}
                <div className="lg:col-span-8 bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative">
                  {/* Grid pattern */}
                  <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10 rounded-3xl" />
                  
                  <div className="relative z-10">
                    <div className="mb-12">
                      <h3 className="text-sm font-bold uppercase tracking-widest text-red-400 mb-4 flex items-center gap-2">
                        <Server className="w-4 h-4" /> The Problem
                      </h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {study.problem}
                      </p>
                    </div>

                    <div className="relative pl-6 border-l border-[#6366F1]/30">
                      <div className="absolute top-0 -left-[5px] w-2 h-2 rounded-full bg-[#6366F1]" />
                      <h3 className="text-sm font-bold uppercase tracking-widest text-[#6366F1] mb-4 flex items-center gap-2">
                        <Database className="w-4 h-4" /> Zyvane OS Injection
                      </h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {study.solution}
                      </p>
                    </div>

                    {study.link && (
                      <div className="mt-8 pt-8 border-t border-white/10">
                        <a 
                          href={study.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium transition-colors group"
                        >
                          Initialize Live Connection <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                      </div>
                    )}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-[#0a0a0a] border-t border-border/40 relative z-10 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-black mb-6">Ready for your own OS deployment?</h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Bring us your most complex technical debt or scaling challenge. We will prepare your Zyvane OS injection plan within 48 hours.
          </p>
          <Link href="/contact">
            <button className="bg-white text-black font-bold text-lg px-10 py-5 rounded-full hover:scale-105 transition-transform flex items-center gap-3 mx-auto">
              Initiate Deployment <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </section>
      
    </div>
  );
}
