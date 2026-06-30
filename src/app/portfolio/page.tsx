import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Portfolio | Zyvane Technologies",
  description: "Our capabilities and the types of enterprise challenges we are built to solve.",
};

// Real portfolio content: showcase capabilities and types of work
// rather than fake case studies with invented metrics.
const capabilities = [
  {
    area: "AI & Machine Learning Systems",
    desc: "End-to-end ML pipelines — from data ingestion and model training to deployment and monitoring. We build RAG-based document intelligence, predictive analytics, and LLM-powered internal tools.",
    tags: ["Python", "TensorFlow", "LangChain", "FastAPI", "Pinecone"],
  },
  {
    area: "Enterprise Web Applications",
    desc: "Complex multi-role SaaS platforms with real-time collaboration, granular permission systems, and integrations with third-party enterprise services (ERP, CRM, payment providers).",
    tags: ["Next.js", "React", "Node.js", "PostgreSQL", "GraphQL"],
  },
  {
    area: "Cloud-Native Microservices",
    desc: "Breaking apart monoliths into independently deployable services using domain-driven design, event sourcing, and message queues — deployed on Kubernetes with zero-downtime rollouts.",
    tags: ["Go", "Docker", "Kubernetes", "Kafka", "AWS"],
  },
  {
    area: "Mobile Applications",
    desc: "Cross-platform and native mobile applications with offline-first architecture, push notifications, biometric authentication, and deep backend integrations.",
    tags: ["React Native", "Flutter", "Swift", "Kotlin"],
  },
  {
    area: "Data Pipelines & Analytics",
    desc: "Scalable ETL pipelines, real-time streaming data architectures, and business intelligence dashboards that give stakeholders actionable visibility into operations.",
    tags: ["Apache Spark", "dbt", "Airflow", "BigQuery", "Metabase"],
  },
  {
    area: "Security-First Development",
    desc: "HIPAA, SOC2, and GDPR-aligned development practices. Automated security scanning, penetration testing, RBAC, end-to-end encryption, and compliance documentation.",
    tags: ["OWASP", "Auth0", "Vault", "AWS KMS"],
  },
];

export default function PortfolioPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="pt-32 pb-20 bg-background overflow-hidden relative border-b border-border">
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-br from-brand-secondary/10 to-transparent opacity-50 blur-[100px] pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
              What we <span className="text-brand-secondary">build.</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We are a focused engineering team. Instead of showcasing invented case studies, we show you exactly what kind of problems we are built to solve — and the tools we use to solve them.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-popover/30 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((cap, index) => (
              <div
                key={index}
                className="flex flex-col h-full bg-background rounded-3xl border border-border hover:border-brand-secondary/50 transition-colors p-8"
              >
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {cap.area}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8 flex-grow">
                  {cap.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {cap.tags.map(tag => (
                    <Badge key={tag} variant="outline" className="text-xs bg-popover">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Honest note */}
      <section className="py-20 bg-background border-b border-border">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to start a real conversation?</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            We believe in earning trust through technical depth and honest communication — not polished marketing claims. Tell us about your challenge and we'll give you an honest assessment.
          </p>
          <Link href="/contact">
            <span className="inline-flex items-center gap-2 bg-brand-secondary hover:bg-brand-secondary/90 text-white font-semibold rounded-full px-8 py-4 transition-colors">
              Discuss Your Project <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
