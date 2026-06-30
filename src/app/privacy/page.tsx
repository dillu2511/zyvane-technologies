import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Zyvane Technologies",
  description: "Zyvane Technologies Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="pt-32 pb-20 bg-background border-b border-border">
        <div className="container mx-auto px-6 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground mb-8">Last updated: June 24, 2026</p>
          
          <div className="prose prose-invert prose-brand max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-6">
              At Zyvane Technologies, we take your privacy seriously. This Privacy Policy describes how we collect, use, and share your personal information when you use our website or services.
            </p>
            <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">1. Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We collect information you provide directly to us when you fill out a form, request customer support, or otherwise communicate with us. The types of information we may collect include your name, email address, company name, and any other information you choose to provide.
            </p>
            <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">2. How We Use Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We use the information we collect to provide, maintain, and improve our services, as well as to communicate with you about products, services, offers, promotions, and events.
            </p>
            {/* Add more generic privacy policy text as needed */}
          </div>
        </div>
      </section>
    </div>
  );
}
