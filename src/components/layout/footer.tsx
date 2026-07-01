"use client";

import Link from "next/link";
import { ArrowRight, Terminal } from "lucide-react";
import { useEffect, useState } from "react";

const footerLinks = {
  services: [
    { name: "Custom Software", href: "/services/custom-software" },
    { name: "AI Engineering", href: "/services/ai-engineering" },
    { name: "Workflow Automation", href: "/services/workflow-automation" },
    { name: "Cloud & DevOps", href: "/services/devops" },
    { name: "Healthcare Tech", href: "/services/healthcare" },
    { name: "ERP & CRM", href: "/services/erp" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Security Architecture", href: "/security" },
  ]
};

export function Footer() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    // Dynamic UTC time for the tech aesthetic
    const updateTime = () => {
      const now = new Date();
      setTime(now.toISOString().replace("T", " ").substring(0, 19) + " UTC");
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-20 pb-10 relative overflow-hidden">
      {/* Abstract Background element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#6366F1]/50 to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-20">
          
          {/* Brand & Terminal Mock */}
          <div className="lg:col-span-3 pr-0 lg:pr-12">
            <Link href="/" className="flex items-center gap-3 mb-8 group w-fit">
              <div className="w-10 h-10 bg-[#6366F1] rounded-xl flex items-center justify-center transform group-hover:scale-105 transition-transform shadow-[0_0_20px_rgba(99,102,241,0.4)]">
                <span className="text-white font-black text-2xl leading-none">Z</span>
              </div>
              <span className="text-3xl font-black tracking-tighter text-white">ZYVANE</span>
            </Link>
            
            {/* Fake System Status Terminal */}
            <div className="bg-black border border-white/10 rounded-xl p-4 font-mono text-xs text-muted-foreground mb-8">
              <div className="flex items-center gap-2 mb-3 border-b border-white/5 pb-2">
                <Terminal className="w-4 h-4" />
                <span>system_status.sh</span>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-green-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  [OK] All Core Systems Operational
                </div>
                <div>Server Time: {time}</div>
                <div>Node Environment: Production</div>
                <div>Deployment Region: Global Edge</div>
              </div>
            </div>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-6">Capabilities</h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-muted-foreground hover:text-white transition-colors text-sm flex items-center group">
                    {link.name}
                    <ArrowRight className="h-3 w-3 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#6366F1]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-6">Organization</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-muted-foreground hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-6">Compliance</h4>
            <ul className="space-y-4">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-muted-foreground hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground font-mono">
            © {new Date().getFullYear()} ZYVANE TECHNOLOGIES. ALL RIGHTS RESERVED.
          </p>
          
          <div className="flex items-center gap-4">
            <span className="text-xs text-muted-foreground font-mono hidden md:inline-block mr-4">
              Ctrl+K for Command Menu
            </span>
            
            {/* X / Twitter */}
            <Link href="https://twitter.com/zyvanetech" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.258 5.63 5.906-5.63Zm-1.161 17.52h1.833L7.084 4.126H5.117Z"/></svg>
            </Link>
            {/* LinkedIn */}
            <Link href="https://linkedin.com/company/zyvane" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </Link>
            {/* GitHub */}
            <Link href="https://github.com/zyvane" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
