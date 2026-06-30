import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Zap, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "About | Zyvane Technologies",
  description: "Learn about Zyvane Technologies — our mission, our approach, and why we build software the way we do.",
};

const values = [
  {
    icon: <Target className="h-6 w-6" />,
    title: "Mission-First Engineering",
    desc: "We don't ship code for the sake of it. Every line we write is tied to a clear business outcome — speed, reliability, or growth."
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Performance Without Compromise",
    desc: "Enterprise software must be fast and scalable. We architect systems that handle real-world load from day one, not as an afterthought."
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "Transparency Always",
    desc: "We communicate openly about timelines, technical tradeoffs, and risks. You will never be surprised by what we build."
  }
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="pt-32 pb-20 bg-background border-b border-border overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-br from-brand-secondary/10 to-brand-accent/5 opacity-50 blur-[100px] pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
              We engineer <span className="text-brand-secondary">excellence.</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-10">
              Zyvane Technologies was founded on a simple premise: enterprise software doesn't have to be slow, bloated, or unreliable. We bring rigorous engineering standards and deep technical expertise to every engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We believe that software should be an asset, not a liability. Too many organizations are held back by poorly architected systems, unmaintainable codebases, and teams that don't communicate clearly.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our mission is to build digital products that are resilient, scalable, and beautifully designed — and to do it with complete transparency. We act as an extension of your team, not an outsourced vendor.
              </p>
              <a href="/contact">
                <Button className="bg-brand-secondary hover:bg-brand-secondary/90 text-white rounded-full px-8 h-12">
                  Work With Us <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
            
            <div className="lg:w-1/2 flex flex-col gap-6">
              {values.map((v, i) => (
                <div key={i} className="flex items-start gap-5 p-6 bg-popover rounded-2xl border border-border">
                  <div className="w-12 h-12 rounded-xl bg-brand-secondary/10 text-brand-secondary flex items-center justify-center shrink-0">
                    {v.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">{v.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What we are */}
      <section className="py-24 bg-popover/30 border-y border-border">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">What makes us different</h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-6">
            We are a focused engineering team — not a large agency with hundreds of generalist freelancers. Every project is handled by dedicated senior engineers who understand architecture, scalability, and business context.
          </p>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We do not take on more projects than we can deliver with excellence. Quality over volume, always.
          </p>
        </div>
      </section>
    </div>
  );
}
