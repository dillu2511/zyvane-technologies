"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MessageSquare } from "lucide-react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // TODO: wire up to a real form backend (e.g. Resend, Formspree, or your own API route)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <section className="pt-32 pb-20 bg-background border-b border-border overflow-hidden relative">
        <div className="absolute top-0 right-0 w-full h-[500px] bg-gradient-to-bl from-brand-secondary/10 to-transparent opacity-50 blur-[100px] pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mb-16">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
              Let's build <br /> <span className="text-brand-secondary">together.</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Have a project in mind or want to discuss your technical challenges? Fill out the form and we'll get back to you within one business day.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-popover border border-border rounded-3xl p-8 md:p-12 shadow-2xl">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                  <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-4">
                    <Mail className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold">Message Received</h3>
                  <p className="text-muted-foreground">
                    Thank you for reaching out. We will get back to you within one business day.
                  </p>
                  <Button 
                    variant="outline" 
                    className="mt-4"
                    onClick={() => setSubmitted(false)}
                  >
                    Send another message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" required className="bg-background border-border" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" required className="bg-background border-border" placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Work Email</Label>
                    <Input id="email" type="email" required className="bg-background border-border" placeholder="john@company.com" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company / Organization</Label>
                    <Input id="company" className="bg-background border-border" placeholder="Company Name" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Tell us about your project</Label>
                    <Textarea 
                      id="message" 
                      required 
                      className="bg-background border-border min-h-[150px]" 
                      placeholder="Describe your technical challenge, goals, and timeline..." 
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-brand-secondary hover:bg-brand-secondary/90 text-white h-12 text-base rounded-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    We respond within one business day. Your information is kept private.
                  </p>
                </form>
              )}
            </div>

            {/* Contact Info — honest, only what's real */}
            <div className="flex flex-col justify-center space-y-10">
              <div>
                <h3 className="text-2xl font-bold mb-8">Get in Touch</h3>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-secondary/10 rounded-xl flex items-center justify-center text-brand-secondary shrink-0">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground text-lg mb-1">Email</div>
                      <a href="mailto:hello@zyvane.com" className="text-muted-foreground hover:text-brand-secondary transition-colors">
                        hello@zyvane.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-secondary/10 rounded-xl flex items-center justify-center text-brand-secondary shrink-0">
                      <MessageSquare className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground text-lg mb-1">Response Time</div>
                      <p className="text-muted-foreground">
                        We typically respond within 1 business day. For urgent matters, mention it in your message.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-popover rounded-2xl border border-border">
                <h4 className="font-bold text-lg mb-3">Before you reach out</h4>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>✓ We work with startups, SMBs, and enterprises</li>
                  <li>✓ We take on both fixed-scope and long-term engagements</li>
                  <li>✓ We are fully remote and work across time zones</li>
                  <li>✓ Honest assessment — even if it's "you don't need us"</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
