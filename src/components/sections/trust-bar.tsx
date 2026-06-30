"use client";

import { motion } from "framer-motion";

// Real engineering value propositions — not logos, but commitments
const PRINCIPLES = [
  {
    number: "I",
    title: "No outsourcing.",
    sub: "Every line of code written by our engineers, in-house.",
    accent: "#6366F1",
  },
  {
    number: "II",
    title: "Full IP transfer.",
    sub: "You own everything we build — forever.",
    accent: "#38BDF8",
  },
  {
    number: "III",
    title: "Production or nothing.",
    sub: "We don't ship prototypes. We ship systems.",
    accent: "#34D399",
  },
  {
    number: "IV",
    title: "Async by default.",
    sub: "Real-time updates, no chasing.",
    accent: "#F59E0B",
  },
];

// Actual technologies — with two-row scrolling marquee
const TECH_ROW_1 = ["Next.js", "React", "TypeScript", "Node.js", "Python", "Go", "TensorFlow", "FastAPI"];
const TECH_ROW_2 = ["AWS", "Google Cloud", "Kubernetes", "Docker", "PostgreSQL", "Redis", "Terraform", "LangChain"];

function MarqueeRow({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  return (
    <div className="relative flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
      <div
        className={`flex gap-6 w-max items-center py-1 ${
          reverse ? "animate-[marquee_28s_linear_infinite_reverse]" : "animate-[marquee_22s_linear_infinite]"
        }`}
      >
        {[...items, ...items, ...items].map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className="text-xs font-mono font-semibold uppercase tracking-widest text-muted-foreground/30 whitespace-nowrap px-3 py-1.5 border border-border/30 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export function TrustBar() {
  return (
    <section className="py-20 border-y border-border/40 bg-background relative overflow-hidden">
      {/* Principles Grid */}
      <div className="container mx-auto px-6 mb-14">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/50 mb-8 text-center">
          How we operate
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {PRINCIPLES.map((p, i) => (
            <motion.div
              key={p.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group relative rounded-2xl border border-border/50 bg-muted/10 p-5 overflow-hidden hover:border-opacity-80 transition-colors"
            >
              {/* Accent glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none rounded-2xl"
                style={{ background: `radial-gradient(ellipse at 50% 100%, ${p.accent}12, transparent 70%)` }}
              />
              <span
                className="text-xs font-black font-mono opacity-30 group-hover:opacity-80 transition-opacity block mb-3"
                style={{ color: p.accent }}
              >
                {p.number}
              </span>
              <h3 className="text-sm font-bold text-foreground leading-tight mb-1">{p.title}</h3>
              <p className="text-xs text-muted-foreground leading-snug">{p.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Tech marquee — two rows, opposite directions */}
      <div className="space-y-3">
        <MarqueeRow items={TECH_ROW_1} />
        <MarqueeRow items={TECH_ROW_2} reverse />
      </div>
    </section>
  );
}
