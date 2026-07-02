"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Command, ArrowRight, Terminal, Box, FileText, Phone, Building } from "lucide-react";
import { useRouter } from "next/navigation";

type CommandItem = {
  id: string;
  name: string;
  icon: React.ElementType;
  shortcut?: string;
  action: () => void;
  section: "Navigation" | "System Commands";
};

export function CommandMenu() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter();

  // Handle Cmd+K / Ctrl+K
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
      if (e.key === "Escape") {
        setOpen(false);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const commands: CommandItem[] = [
    { id: "home",      name: "Go to Home",                icon: Building,  shortcut: "G H", section: "Navigation", action: () => { router.push("/");                        setOpen(false); } },
    { id: "about",     name: "Go to About",               icon: FileText,  shortcut: "G A", section: "Navigation", action: () => { router.push("/about");                   setOpen(false); } },
    { id: "services",  name: "Go to Services",            icon: Box,       shortcut: "G S", section: "Navigation", action: () => { router.push("/services");                setOpen(false); } },
    { id: "portfolio", name: "Go to Portfolio",           icon: FileText,  shortcut: "G P", section: "Navigation", action: () => { router.push("/portfolio");               setOpen(false); } },
    { id: "pricing",   name: "Go to Pricing",             icon: Box,       shortcut: "G $", section: "Navigation", action: () => { router.push("/pricing");                 setOpen(false); } },
    { id: "blog",      name: "Go to Blog",                icon: FileText,  section: "Navigation",                  action: () => { router.push("/blog");                    setOpen(false); } },
    { id: "careers",   name: "Go to Careers",             icon: Building,  section: "Navigation",                  action: () => { router.push("/careers");                 setOpen(false); } },
    { id: "contact",   name: "Contact Engineering",       icon: Phone,     shortcut: "G C", section: "Navigation", action: () => { router.push("/contact");                 setOpen(false); } },
    { id: "ai",        name: "Service → AI Engineering",  icon: Terminal,  section: "Navigation",                  action: () => { router.push("/services/ai-engineering"); setOpen(false); } },
    { id: "software",  name: "Service → Custom Software", icon: Box,       section: "Navigation",                  action: () => { router.push("/services/custom-software");setOpen(false); } },
    { id: "devops",    name: "Service → Cloud & DevOps",  icon: Terminal,  section: "Navigation",                  action: () => { router.push("/services/devops");         setOpen(false); } },
    { id: "health",    name: "Service → Healthcare Tech", icon: Box,       section: "Navigation",                  action: () => { router.push("/services/healthcare");     setOpen(false); } },
    { id: "workflow",  name: "Service → Workflow Automation", icon: Terminal, section: "Navigation",               action: () => { router.push("/services/workflow-automation"); setOpen(false); } },
    { id: "erp",       name: "Service → ERP & CRM",       icon: Box,       section: "Navigation",                  action: () => { router.push("/services/erp");            setOpen(false); } },
    { id: "sys1",      name: "Deploy to Production",       icon: Terminal,  section: "System Commands",             action: () => { console.log("Deployment initiated...");  setOpen(false); } },
    { id: "sys2",      name: "Clear System Cache",         icon: Terminal,  section: "System Commands",             action: () => { console.log("Cache cleared.");           setOpen(false); } },
  ];


  const filteredCommands = commands.filter((cmd) =>
    cmd.name.toLowerCase().includes(query.toLowerCase())
  );

  // Keyboard navigation inside the menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!open) return;
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIndex((prev) => (prev + 1) % filteredCommands.length);
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIndex((prev) => (prev - 1 + filteredCommands.length) % filteredCommands.length);
      }
      if (e.key === "Enter") {
        e.preventDefault();
        if (filteredCommands[activeIndex]) {
          filteredCommands[activeIndex].action();
        }
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, filteredCommands, activeIndex]);

  // Reset active index on search
  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  return (
    <>
      {/* Floating Hint for Desktop */}
      <div className="fixed bottom-6 right-6 hidden md:flex items-center gap-2 bg-muted/30 border border-border/50 rounded-full px-4 py-2 backdrop-blur-md z-40 pointer-events-none opacity-50">
        <span className="text-xs text-muted-foreground font-mono">System Access:</span>
        <kbd className="font-mono text-xs font-bold text-foreground bg-background/50 border border-border px-1.5 py-0.5 rounded">⌘ K</kbd>
      </div>

      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh]">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            />
            
            {/* Menu */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.15 }}
              className="relative w-full max-w-2xl bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
            >
              <div className="flex items-center px-4 py-4 border-b border-white/10">
                <Search className="h-5 w-5 text-muted-foreground mr-3" />
                <input
                  type="text"
                  placeholder="Type a command or search..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="flex-1 bg-transparent border-none text-foreground placeholder:text-muted-foreground focus:outline-none text-lg"
                  autoFocus
                />
                <kbd className="hidden sm:inline-flex items-center gap-1 font-mono text-xs font-medium text-muted-foreground bg-white/5 px-2 py-1 rounded">
                  ESC
                </kbd>
              </div>

              <div className="max-h-[60vh] overflow-y-auto p-2">
                {filteredCommands.length === 0 ? (
                  <div className="py-14 text-center text-sm text-muted-foreground">
                    No commands found.
                  </div>
                ) : (
                  <div className="space-y-1">
                    {/* Just displaying as a flat list for simplicity, but tracking index for keyboard */}
                    {filteredCommands.map((cmd, index) => {
                      const isActive = index === activeIndex;
                      return (
                        <div
                          key={cmd.id}
                          className={`flex items-center justify-between px-3 py-3 rounded-xl cursor-pointer transition-colors ${
                            isActive ? "bg-[#6366F1]/15 text-foreground" : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                          }`}
                          onClick={cmd.action}
                          onMouseEnter={() => setActiveIndex(index)}
                        >
                          <div className="flex items-center gap-3">
                            <cmd.icon className={`h-4 w-4 ${isActive ? "text-[#6366F1]" : "opacity-60"}`} />
                            <span className="font-medium">{cmd.name}</span>
                          </div>
                          {cmd.shortcut && (
                            <div className="flex items-center gap-1 opacity-60">
                              {cmd.shortcut.split(" ").map((key) => (
                                <kbd key={key} className="font-mono text-[10px] bg-white/10 px-1.5 py-0.5 rounded border border-white/10">
                                  {key}
                                </kbd>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
              
              <div className="px-4 py-3 border-t border-white/10 bg-white/5 flex items-center gap-4 text-xs text-muted-foreground font-mono">
                <span className="flex items-center gap-1"><Command className="h-3 w-3" /> Navigation</span>
                <span className="flex items-center gap-1">↑↓ Select</span>
                <span className="flex items-center gap-1"><ArrowRight className="h-3 w-3" /> Execute</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
