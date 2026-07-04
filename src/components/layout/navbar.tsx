"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, Code, Cpu, Activity, Server, Zap, Database, ChevronDown } from "lucide-react";

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
];

const SERVICES = [
  { title: "AI Engineering", icon: Cpu, href: "/services/ai-engineering", desc: "LLMs, agents, production ML" },
  { title: "Custom Software", icon: Code, href: "/services/custom-software", desc: "Scalable enterprise apps" },
  { title: "Cloud & DevOps", icon: Server, href: "/services/devops", desc: "AWS, GCP, Kubernetes" },
  { title: "Workflow Automation", icon: Zap, href: "/services/workflow-automation", desc: "Eliminate manual ops" },
  { title: "Healthcare Tech", icon: Activity, href: "/services/healthcare", desc: "HIPAA-compliant systems" },
  { title: "ERP & CRM", icon: Database, href: "/services/erp", desc: "Business-critical platforms" },
];

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const [servicesOpen, setServicesOpen] = React.useState(false);
  const closeTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 30));

  const handleServicesEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };
  const handleServicesLeave = () => {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 120);
  };

  return (
    <>
      {/* Main Nav */}
      <motion.header
        initial={false}
        animate={scrolled ? "scrolled" : "top"}
        variants={{
          top: {
            backdropFilter: "blur(0px)",
            backgroundColor: "rgba(0,0,0,0)",
            borderColor: "rgba(255,255,255,0)",
          },
          scrolled: {
            backdropFilter: "blur(20px)",
            backgroundColor: "rgba(0,0,0,0.7)",
            borderColor: "rgba(255,255,255,0.08)",
          },
        }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 w-full z-50 border-b"
      >
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2.5">
              <img
                src="/logo.png"
                alt="Zyvane Technologies"
                width={36}
                height={36}
                className="rounded-lg"
              />
              <span className="font-bold text-lg tracking-tight text-foreground">Zyvane</span>
            </motion.div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1" role="navigation" aria-label="Main navigation">
            {/* Services Dropdown */}
            <div
              onMouseEnter={handleServicesEnter}
              onMouseLeave={handleServicesLeave}
              className="relative"
            >
              <button
                className="inline-flex items-center gap-1 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-white/5"
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                Services
                <motion.span animate={{ rotate: servicesOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <ChevronDown className="h-3.5 w-3.5" />
                </motion.span>
              </button>

              {/* Mega Menu */}
              <AnimatedDropdown open={servicesOpen} onMouseEnter={handleServicesEnter} onMouseLeave={handleServicesLeave} />
            </div>

            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-white/5"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-3">
            {/* Accepting projects indicator */}
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground/60 font-mono">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
              </span>
              <span>Open to work</span>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center h-9 px-5 rounded-full bg-[#6366F1] hover:bg-[#5253D4] text-white text-sm font-semibold transition-all duration-200 hover:shadow-[0_0_25px_rgba(99,102,241,0.5)] hover:-translate-y-px"
            >
              Let&apos;s Talk
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-foreground rounded-lg hover:bg-white/5 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Nav Sheet */}
      <motion.div
        initial={false}
        animate={isOpen ? { x: 0 } : { x: "100%" }}
        transition={{ type: "spring", stiffness: 380, damping: 40 }}
        className="fixed top-0 right-0 h-screen w-full max-w-sm z-[60] bg-background/95 backdrop-blur-2xl border-l border-border flex flex-col pt-20 px-6 pb-8 overflow-y-auto"
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-5 right-5 p-2 rounded-lg hover:bg-muted/50"
          aria-label="Close menu"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="space-y-1">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/50 mb-3 px-2">Services</p>
          {SERVICES.map((s) => {
            const Icon = s.icon;
            return (
              <Link
                key={s.href}
                href={s.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-muted/50 transition-colors group"
              >
                <Icon className="h-4 w-4 text-[#6366F1]" />
                <span className="text-sm font-medium text-foreground">{s.title}</span>
              </Link>
            );
          })}
        </div>

        <div className="mt-6 space-y-1 border-t border-border pt-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center px-3 py-2.5 rounded-xl hover:bg-muted/50 transition-colors text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="mt-auto pt-6">
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center w-full h-12 rounded-full bg-[#6366F1] text-white font-semibold text-sm hover:bg-[#5253D4] transition-colors"
          >
            Let&apos;s Talk
          </Link>
        </div>
      </motion.div>

      {/* Mobile backdrop */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[55] bg-black/50 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}

// Separated dropdown to manage its own hover
function AnimatedDropdown({
  open,
  onMouseEnter,
  onMouseLeave,
}: {
  open: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  return (
    <motion.div
      initial={false}
      animate={open ? { opacity: 1, y: 0, pointerEvents: "auto" as const } : { opacity: 0, y: -8, pointerEvents: "none" as const }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[480px] rounded-2xl border border-border bg-background/95 backdrop-blur-xl shadow-2xl overflow-hidden"
    >
      {/* Header */}
      <div className="p-4 border-b border-border/50 bg-muted/20">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/60">What We Build</p>
      </div>
      {/* Grid of services */}
      <div className="grid grid-cols-2 gap-1 p-3">
        {SERVICES.map((s) => {
          const Icon = s.icon;
          return (
            <Link
              key={s.href}
              href={s.href}
              className="flex items-start gap-3 p-3 rounded-xl hover:bg-muted/50 transition-colors group"
            >
              <div className="mt-0.5 w-7 h-7 rounded-lg bg-[#6366F1]/10 flex items-center justify-center shrink-0 group-hover:bg-[#6366F1]/20 transition-colors">
                <Icon className="h-3.5 w-3.5 text-[#6366F1]" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground group-hover:text-[#6366F1] transition-colors leading-tight">
                  {s.title}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5 leading-snug">{s.desc}</p>
              </div>
            </Link>
          );
        })}
      </div>
      {/* Footer */}
      <div className="px-4 py-3 border-t border-border/50 bg-muted/10 flex items-center justify-between">
        <span className="text-xs text-muted-foreground/60">All services built in-house, no outsourcing.</span>
        <Link href="/services" className="text-xs font-semibold text-[#6366F1] hover:underline">
          View all →
        </Link>
      </div>
    </motion.div>
  );
}
