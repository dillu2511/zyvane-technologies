import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Zyvane Technologies",
  description: "Zyvane Technologies Terms of Service",
};

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="pt-32 pb-20 bg-background border-b border-border">
        <div className="container mx-auto px-6 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
            Terms of Service
          </h1>
          <p className="text-muted-foreground mb-8">Last updated: June 24, 2026</p>
          
          <div className="prose prose-invert prose-brand max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-6">
              Please read these Terms of Service carefully before using our website or engaging our services.
            </p>
            <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the service.
            </p>
            <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">2. Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Unless otherwise explicitly stated in a Master Services Agreement (MSA), all content on this website, including text, graphics, logos, and software, is the property of Zyvane Technologies and is protected by copyright and intellectual property laws. Client projects delivered under contract adhere to the IP ownership clauses defined within the respective MSA.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
