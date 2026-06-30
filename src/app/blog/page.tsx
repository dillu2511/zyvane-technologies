import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Rss } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog | Zyvane Technologies",
  description: "Engineering insights, technical deep dives, and perspectives from the Zyvane team.",
};

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="pt-32 pb-20 bg-background overflow-hidden relative border-b border-border">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-brand-accent/10 to-transparent opacity-50 blur-[100px] pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
              Engineering <span className="text-brand-secondary">Insights.</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Technical deep dives, architectural patterns, and honest perspectives from the Zyvane engineering team.
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon state — honest, no fake posts */}
      <section className="py-32 bg-popover/30 border-b border-border flex-grow">
        <div className="container mx-auto px-6 max-w-2xl text-center">
          <div className="w-16 h-16 bg-brand-secondary/10 text-brand-secondary rounded-2xl flex items-center justify-center mx-auto mb-8">
            <Rss className="h-8 w-8" />
          </div>
          <h2 className="text-3xl font-bold mb-6">Articles coming soon</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10">
            We are preparing our first set of technical articles covering topics like AI system design, cloud-native architecture, and engineering best practices. Real insights from real engineering work.
          </p>
          <p className="text-base text-muted-foreground mb-10">
            In the meantime, reach out directly — we love talking engineering.
          </p>
          <Link href="/contact">
            <span className="inline-flex items-center gap-2 bg-brand-secondary hover:bg-brand-secondary/90 text-white font-semibold rounded-full px-8 py-4 transition-colors">
              Get in Touch <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
