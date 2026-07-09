"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What exactly is Zyvane OS?",
    answer: "It is a proprietary collection of pre-architected software modules (Auth, Payments, AI, Databases) that we inject into your business. Instead of paying an agency to build these from scratch over 6 months, we deploy them instantly and focus on your unique business logic."
  },
  {
    question: "How does the pricing work?",
    answer: "We operate on a two-phase model. Phase 1 is a fixed Build Fee for the initial setup and customization of your Zyvane OS instance. Phase 2 is the Evolution Retainer, a flat monthly subscription where we handle all server costs, security patches, scaling, and feature updates."
  },
  {
    question: "Do I own the code?",
    answer: "Yes. Once the Phase 1 build is paid in full, you own 100% of the IP, including the customized Zyvane OS modules. You are never locked into our ecosystem."
  },
  {
    question: "Why not just hire developers?",
    answer: "Hiring a senior architect, DevOps engineer, frontend developer, and QA costs over $500k/year. They will spend the first 3 months just arguing about tech stacks and building basic login screens. We skip that phase entirely."
  },
  {
    question: "What is your approach to AI and Data Privacy?",
    answer: "We deploy AI models (including proprietary LLMs) within your secure, isolated cloud environment. Your private data is never used to train public models. We enforce strict data governance and compliance with global standards."
  }
];

export function FAQ() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Frequently Asked <span className="text-brand-secondary">Questions.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Clear answers about our autonomous infrastructure model and pricing structure.
          </p>
        </div>

        <Accordion className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-border">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-brand-secondary transition-colors py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
