"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Terminal, Send, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    project: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [logs, setLogs] = useState<string[]>([
    "[system] Initiating secure connection...",
    "[system] Connection established. Waiting for input...",
  ]);

  // Live logging effect — highly unique developer aesthetic
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    
    // Only log occasionally to prevent spam, or log specific field focus
    if (value.length > 0 && value.length % 15 === 0) {
      setLogs(prev => [...prev, `[user] Compiling input buffer for ${id}...`]);
    }
  };

  const handleFocus = (id: string) => {
    setLogs(prev => [...prev, `[system] Focusing pointer on ${id}_stream`]);
  };

  useEffect(() => {
    // Auto-scroll logs
    const logContainer = document.getElementById("terminal-logs");
    if (logContainer) {
      logContainer.scrollTop = logContainer.scrollHeight;
    }
  }, [logs]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setLogs(prev => [
      ...prev, 
      "[system] Commencing data transmission payload...",
      "[network] Encrypting with AES-GCM...",
      "[network] Routing to Zyvane core servers...",
    ]);
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          projectDetails: formData.project,
        }),
      });

      if (!response.ok) throw new Error("API returned an error");

      setLogs(prev => [
        ...prev,
        "[server] 200 OK: Payload received and verified.",
        "[server] Email dispatched via Resend.",
        "[system] Connection terminated securely.",
      ]);
      setSubmitted(true);
    } catch (error) {
      setLogs(prev => [
        ...prev,
        "[error] 500: Transmission failed. Target host unreachable.",
        "[system] Connection aborted.",
      ]);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-[#6366F1]/5 rounded-full blur-[120px] pointer-events-none" />
      
      <section className="container mx-auto px-6 py-24 relative z-10">
        <div className="max-w-4xl mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
              Initialize <br /> <span className="text-[#6366F1]">Connection.</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed font-medium">
              Bypass the red tape. Speak directly with our lead engineers to architect your next high-performance system.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Side: The Interactive Terminal */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 h-[400px] lg:h-[600px] sticky top-32 rounded-2xl bg-black border border-white/10 overflow-hidden flex flex-col shadow-2xl"
          >
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/5">
              <div className="flex items-center gap-2">
                <Terminal className="h-4 w-4 text-muted-foreground" />
                <span className="text-xs font-mono text-muted-foreground">zyvane-comms-protocol.sh</span>
              </div>
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              </div>
            </div>
            
            {/* Terminal Body */}
            <div id="terminal-logs" className="flex-1 p-5 overflow-y-auto font-mono text-[11px] leading-relaxed tracking-wider">
              <AnimatePresence>
                {logs.map((log, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={`mb-2 ${
                      log.includes('[system]') ? 'text-[#38BDF8]' :
                      log.includes('[network]') ? 'text-[#F59E0B]' :
                      log.includes('[server]') ? 'text-[#34D399]' :
                      'text-muted-foreground'
                    }`}
                  >
                    <span className="opacity-50 select-none mr-3">
                      {new Date().toISOString().split('T')[1].substring(0,8)}
                    </span>
                    {log}
                  </motion.div>
                ))}
              </AnimatePresence>
              {/* Blinking Cursor */}
              <motion.div 
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="w-2 h-3.5 bg-white inline-block ml-1 align-middle mt-1"
              />
            </div>
          </motion.div>

          {/* Right Side: The Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-7 bg-muted/20 border border-border/50 rounded-3xl p-8 lg:p-10 backdrop-blur-sm"
          >
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center space-y-6 py-20"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-green-500 blur-xl opacity-20 rounded-full" />
                  <CheckCircle2 className="h-20 w-20 text-green-500 relative z-10" />
                </div>
                <div>
                  <h3 className="text-3xl font-black mb-3">Transmission Successful</h3>
                  <p className="text-muted-foreground text-lg max-w-md mx-auto">
                    Your parameters have been logged into our system. An engineer will be assigned to your case shortly.
                  </p>
                </div>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", company: "", project: "" });
                    setLogs(["[system] Re-initializing connection parameters..."]);
                  }}
                  className="rounded-full px-8 h-12"
                >
                  Initiate new transmission
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3 group">
                    <Label htmlFor="name" className="text-xs uppercase tracking-widest text-muted-foreground font-bold group-focus-within:text-foreground transition-colors">
                      Lead Identifier
                    </Label>
                    <Input 
                      id="name" 
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => handleFocus('name')}
                      required 
                      className="bg-transparent border-0 border-b-2 border-border/50 rounded-none px-0 focus-visible:ring-0 focus-visible:border-[#6366F1] transition-colors text-lg" 
                      placeholder="Jane Doe" 
                    />
                  </div>
                  <div className="space-y-3 group">
                    <Label htmlFor="email" className="text-xs uppercase tracking-widest text-muted-foreground font-bold group-focus-within:text-foreground transition-colors">
                      Comms Channel
                    </Label>
                    <Input 
                      id="email" 
                      type="email" 
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => handleFocus('email')}
                      required 
                      className="bg-transparent border-0 border-b-2 border-border/50 rounded-none px-0 focus-visible:ring-0 focus-visible:border-[#6366F1] transition-colors text-lg" 
                      placeholder="jane@company.com" 
                    />
                  </div>
                </div>

                <div className="space-y-3 group">
                  <Label htmlFor="company" className="text-xs uppercase tracking-widest text-muted-foreground font-bold group-focus-within:text-foreground transition-colors">
                    Organization Node (Optional)
                  </Label>
                  <Input 
                    id="company" 
                    value={formData.company}
                    onChange={handleChange}
                    onFocus={() => handleFocus('company')}
                    className="bg-transparent border-0 border-b-2 border-border/50 rounded-none px-0 focus-visible:ring-0 focus-visible:border-[#6366F1] transition-colors text-lg" 
                    placeholder="Acme Corp" 
                  />
                </div>

                <div className="space-y-3 group">
                  <Label htmlFor="project" className="text-xs uppercase tracking-widest text-muted-foreground font-bold group-focus-within:text-foreground transition-colors">
                    System Requirements
                  </Label>
                  <Textarea 
                    id="project" 
                    required 
                    value={formData.project}
                    onChange={handleChange}
                    onFocus={() => handleFocus('project')}
                    className="bg-transparent border-0 border-b-2 border-border/50 rounded-none px-0 focus-visible:ring-0 focus-visible:border-[#6366F1] transition-colors min-h-[150px] resize-none text-lg py-2" 
                    placeholder="Describe the architecture you need built, scaled, or rescued..." 
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full h-14 rounded-full bg-foreground text-background hover:bg-[#6366F1] hover:text-white transition-all duration-300 font-bold text-lg group overflow-hidden relative"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? "Transmitting..." : "Execute Payload"}
                    {!isSubmitting && <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />}
                  </span>
                  {/* Hover light effect */}
                  <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                </Button>
                
                <p className="text-xs text-center text-muted-foreground font-mono mt-4">
                  End-to-end encrypted. No automated bots. Real engineers read this.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
