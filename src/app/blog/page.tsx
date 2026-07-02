import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog | Zyvane Technologies",
  description: "Engineering insights, technical deep dives, and perspectives from the Zyvane team.",
};

const ARTICLES = [
  {
    slug: "#",
    tag: "AI Engineering",
    tagColor: "#6366F1",
    title: "Why RAG Fails in Production (and How to Fix It)",
    excerpt:
      "Retrieval-Augmented Generation sounds simple in demos. In production with messy, multi-domain enterprise data, it breaks in ways most tutorials don't prepare you for. Here are the 7 failure modes we have encountered — and the architectural patterns that actually work.",
    readTime: "12 min read",
    date: "June 28, 2026",
    featured: true,
  },
  {
    slug: "#",
    tag: "Cloud Architecture",
    tagColor: "#38BDF8",
    title: "The True Cost of an In-House Engineering Team in 2026",
    excerpt:
      "When clients ask us to justify our pricing, we run the math. The numbers are always the same: a senior engineer in the US fully loaded costs $180–220k per year. A team of 5 costs over $1M. Here is the complete breakdown that most hiring managers overlook.",
    readTime: "8 min read",
    date: "June 20, 2026",
    featured: false,
  },
  {
    slug: "#",
    tag: "Systems Design",
    tagColor: "#34D399",
    title: "Microservices vs. Modular Monolith: What We Learned Migrating a 10M User Platform",
    excerpt:
      "We were handed a Django monolith serving 10 million users with a 3-second average page load. The CTO wanted microservices. Here is what we actually built, why we didn't go full microservices, and the architectural decisions that cut page load to 280ms.",
    readTime: "15 min read",
    date: "June 12, 2026",
    featured: false,
  },
  {
    slug: "#",
    tag: "Healthcare Tech",
    tagColor: "#F43F5E",
    title: "Building a HIPAA-Compliant Data Pipeline in 2026: A Practical Guide",
    excerpt:
      "HIPAA compliance in your data infrastructure is not just about encryption. It is about audit trails, PHI de-identification, access control at the row level, and having documentation ready for auditors. This is the guide we wish existed when we started.",
    readTime: "18 min read",
    date: "June 5, 2026",
    featured: false,
  },
  {
    slug: "#",
    tag: "AI Engineering",
    tagColor: "#6366F1",
    title: "LLM Fine-Tuning vs. Prompt Engineering: When to Use Each",
    excerpt:
      "The instinct is to fine-tune. But 80% of the time, a well-engineered prompt with a strong system message and few-shot examples outperforms a fine-tuned model — at 1/100th the cost and complexity. Here is how to make the decision correctly.",
    readTime: "10 min read",
    date: "May 28, 2026",
    featured: false,
  },
  {
    slug: "#",
    tag: "DevOps",
    tagColor: "#F59E0B",
    title: "Zero-Downtime Database Migrations at Scale: Our Playbook",
    excerpt:
      "Altering a table with 500 million rows on a live production system is an art form. Lock-free migrations, background migrations, dual-write strategies, and the specific order of operations that keeps your application running while the schema changes under its feet.",
    readTime: "14 min read",
    date: "May 15, 2026",
    featured: false,
  },
];

export default function BlogPage() {
  const featured = ARTICLES.find((a) => a.featured)!;
  const rest = ARTICLES.filter((a) => !a.featured);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header */}
      <section className="pt-32 pb-20 overflow-hidden relative border-b border-border">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#6366F1]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-[1px] bg-[#6366F1]" />
              <span className="text-[#6366F1] font-mono text-sm tracking-widest uppercase">Engineering Blog</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8">
              Engineering{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] to-[#38BDF8]">
                Insights.
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Technical deep dives, architectural patterns, and honest perspectives from the Zyvane engineering team. No marketing fluff — only things we have learned shipping real systems.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground/60 mb-8">Featured</p>
          <Link href={featured.slug} className="group block">
            <div className="grid lg:grid-cols-12 gap-8 p-8 md:p-12 rounded-3xl border border-border bg-background/50 hover:border-[#6366F1]/30 hover:bg-[#6366F1]/[0.02] transition-all duration-300">
              <div className="lg:col-span-8">
                <div
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-6 px-3 py-1.5 rounded-full"
                  style={{ background: `${featured.tagColor}15`, color: featured.tagColor }}
                >
                  <Tag className="h-3 w-3" />
                  {featured.tag}
                </div>
                <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-6 group-hover:text-[#6366F1] transition-colors leading-tight">
                  {featured.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg mb-8">{featured.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4" />
                    {featured.readTime}
                  </span>
                  <span className="text-border">·</span>
                  <span>{featured.date}</span>
                </div>
              </div>
              <div className="lg:col-span-4 flex items-center justify-end">
                <div className="w-16 h-16 rounded-2xl border border-border flex items-center justify-center group-hover:border-[#6366F1]/50 group-hover:bg-[#6366F1]/5 transition-all duration-300">
                  <ArrowRight className="h-6 w-6 text-muted-foreground group-hover:text-[#6366F1] group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* All Articles */}
      <section className="py-16 flex-grow">
        <div className="container mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground/60 mb-8">All Articles</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((article, i) => (
              <Link
                key={i}
                href={article.slug}
                className="group flex flex-col p-7 rounded-2xl border border-border bg-background hover:border-opacity-60 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 overflow-hidden relative"
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `radial-gradient(ellipse at 0% 0%, ${article.tagColor}08 0%, transparent 70%)` }}
                />
                <div
                  className="absolute top-0 left-0 h-[2px] w-10 group-hover:w-full transition-all duration-500 opacity-60"
                  style={{ background: article.tagColor }}
                />

                <div
                  className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest mb-5 px-2.5 py-1 rounded-full w-max relative z-10"
                  style={{ background: `${article.tagColor}15`, color: article.tagColor }}
                >
                  <Tag className="h-3 w-3" />
                  {article.tag}
                </div>

                <h3 className="text-lg font-bold mb-4 leading-snug group-hover:text-white transition-colors relative z-10 flex-grow">
                  {article.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3 relative z-10">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between text-xs text-muted-foreground relative z-10">
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3 w-3" />
                    {article.readTime}
                  </span>
                  <span>{article.date}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
