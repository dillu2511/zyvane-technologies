"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is your typical engagement model?",
    answer: "We offer dedicated engineering teams for long-term strategic projects, as well as fixed-scope engagements for well-defined deliverables. We prioritize deep integration with your internal stakeholders to ensure alignment with business objectives."
  },
  {
    question: "Do you maintain the software after launch?",
    answer: "Yes. We provide comprehensive SLA-backed maintenance and support packages, including 24/7 monitoring, security patching, and continuous feature development to ensure your software evolves with your business."
  },
  {
    question: "How do you handle intellectual property (IP)?",
    answer: "You own 100% of the IP, including all source code, assets, and documentation. This is strictly enforced through our Master Services Agreement (MSA) from day one."
  },
  {
    question: "How long does a typical enterprise project take?",
    answer: "While timelines vary based on complexity, most MVPs or V1 releases take between 3 to 6 months. We utilize agile sprints to deliver functional software every two weeks, ensuring continuous visibility and value generation."
  },
  {
    question: "What is your approach to AI integration and data privacy?",
    answer: "We deploy AI models (including proprietary LLMs) within your secure cloud environment (VPC). Your data is never used to train public models. We enforce strict data governance and compliance with standards like GDPR, SOC2, and HIPAA."
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
            Clear answers to common questions about our process, security, and partnership model.
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
