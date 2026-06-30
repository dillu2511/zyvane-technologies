"use client";

import { motion } from "framer-motion";
import { Building2, Landmark, Stethoscope, ShoppingCart, GraduationCap, PlaneTakeoff } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const industries = [
  { name: "Healthcare", icon: <Stethoscope className="h-8 w-8" />, desc: "HIPAA compliant systems" },
  { name: "Finance", icon: <Landmark className="h-8 w-8" />, desc: "High-frequency & secure" },
  { name: "Enterprise", icon: <Building2 className="h-8 w-8" />, desc: "Scalable ERP solutions" },
  { name: "E-Commerce", icon: <ShoppingCart className="h-8 w-8" />, desc: "High-conversion platforms" },
  { name: "Education", icon: <GraduationCap className="h-8 w-8" />, desc: "LMS & Student Portals" },
  { name: "Logistics", icon: <PlaneTakeoff className="h-8 w-8" />, desc: "Global supply chain tech" },
];

export function Industries() {
  return (
    <section className="py-24 bg-muted/30 border-y border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-secondary to-brand-accent">every scale.</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              We engineer specialized software solutions that meet the strict regulatory and performance requirements of global industries.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="h-full bg-background border-border hover:border-brand-secondary/50 transition-colors group cursor-pointer">
                <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                  <div className="text-muted-foreground group-hover:text-brand-secondary transition-colors">
                    {industry.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{industry.name}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{industry.desc}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
