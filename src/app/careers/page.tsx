import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Brain, Code2, GitMerge, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers | Zyvane Technologies",
  description: "Join the Zyvane Technologies engineering team. We hire exceptional engineers who care about craft, scale, and honesty.",
};

const VALUES = [
  {
    icon: <Code2 className="h-6 w-6" />,
    title: "Engineering First",
    desc: "We are engineers solving hard problems — not consultants generating deliverables. You will architect, build, and own real production systems.",
    accent: "#6366F1",
  },
  {
    icon: <GitMerge className="h-6 w-6" />,
    title: "Radical Transparency",
    desc: "No politics. No bullshit. If something is broken, we say it. If a technical decision is wrong, we change it. Honesty is non-negotiable.",
    accent: "#38BDF8",
  },
  {
    icon: <Brain className="h-6 w-6" />,
    title: "Continuous Learning",
    desc: "We work at the edge of what's possible — AI, distributed systems, cloud-native architecture. You will learn more in a year here than in three elsewhere.",
    accent: "#34D399",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Speed with Quality",
    desc: "We move fast, but we don't cut corners. We ship production code with tests, documentation, and architecture that your future self won't curse.",
    accent: "#F59E0B",
  },
];

const WHAT_WE_LOOK_FOR = [
  "You have shipped production systems, not just side projects",
  "You understand why a system is slow before you try to fix it",
  "You write code for the next engineer, not just the next deadline",
  "You're comfortable saying \"I don't know\" and uncomfortable saying \"it's good enough\"",
  "You care about the business problem, not just the technical solution",
];

export default function CareersPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#6366F1]/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Hero */}
      <section className="pt-32 pb-24 border-b border-border relative z-10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-[1px] bg-[#6366F1]" />
              <span className="text-[#6366F1] font-mono text-sm tracking-widest uppercase">Careers</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[1.08] mb-8">
              Build the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] to-[#38BDF8]">
                future.
              </span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl font-medium">
              We are a small team of engineers who care deeply about clean code, scalable architecture, and honest communication. We work on genuinely hard problems for clients who are building something meaningful. If that resonates with you, we would love to talk.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl font-black tracking-tighter mb-6">What we stand for</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Culture at Zyvane is not a slide deck. These are the operating principles we live by in every PR, every client call, and every architecture decision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {VALUES.map((v, i) => (
              <div
                key={i}
                className="group relative p-8 rounded-2xl border border-border bg-background overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `radial-gradient(ellipse at 0% 0%, ${v.accent}10 0%, transparent 70%)` }}
                />
                <div
                  className="absolute top-0 left-0 h-[2px] w-10 group-hover:w-full transition-all duration-500 opacity-60"
                  style={{ background: v.accent }}
                />
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 relative z-10"
                  style={{ background: `${v.accent}18`, color: v.accent }}
                >
                  {v.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 relative z-10">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed relative z-10">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we look for */}
      <section className="py-24 bg-[#080808] border-t border-border/40 relative z-10">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-black tracking-tighter mb-6">
                What we look for
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-10">
                We don&apos;t post roles to fill seats. When we hire, it is because we need the right person for a specific type of work. Here is what &quot;right&quot; means to us:
              </p>
              <ul className="space-y-4">
                {WHAT_WE_LOOK_FOR.map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#6366F1] mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Open Roles / Honest State */}
            <div className="p-10 rounded-3xl border border-border bg-background/50">
              <div className="w-14 h-14 rounded-2xl bg-[#6366F1]/10 flex items-center justify-center mb-8">
                <Code2 className="h-7 w-7 text-[#6366F1]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">No open roles right now</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We are not hiring at this moment. When we do open a role, it will be listed here — we don&apos;t run ghost listings.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-10">
                If you are an exceptional engineer and want to be on our radar for future opportunities, send us your details. The best candidates come from inbound talent, not job boards.
              </p>
              <Link href="/contact">
                <span className="inline-flex items-center gap-2 bg-[#6366F1] hover:bg-[#5253D4] text-white font-bold rounded-full px-8 py-4 transition-colors">
                  Express Interest <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
