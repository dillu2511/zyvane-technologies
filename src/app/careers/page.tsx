import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Briefcase } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers | Zyvane Technologies",
  description: "Join the Zyvane Technologies engineering team.",
};

export default function CareersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="pt-32 pb-20 bg-background border-b border-border overflow-hidden relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
              Build the <span className="text-brand-secondary">future.</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              We are a team of engineers who care deeply about clean code, scalable architecture, and honest communication. If that resonates with you, we'd love to talk.
            </p>
          </div>
        </div>
      </section>

      {/* No fake job listings */}
      <section className="py-32 bg-popover/30 border-b border-border flex-grow">
        <div className="container mx-auto px-6 max-w-2xl text-center">
          <div className="w-16 h-16 bg-brand-secondary/10 text-brand-secondary rounded-2xl flex items-center justify-center mx-auto mb-8">
            <Briefcase className="h-8 w-8" />
          </div>
          <h2 className="text-3xl font-bold mb-6">No open roles right now</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10">
            We don't post roles to fill seats — we open positions when we have a real need for the right person. If you are an exceptional engineer and want to be considered for future opportunities, send us your details.
          </p>
          <Link href="/contact">
            <span className="inline-flex items-center gap-2 bg-brand-secondary hover:bg-brand-secondary/90 text-white font-semibold rounded-full px-8 py-4 transition-colors">
              Express Interest <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
