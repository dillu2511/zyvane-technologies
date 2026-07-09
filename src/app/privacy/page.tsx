import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Zyvane Technologies",
  description: "Zyvane Technologies Privacy Policy — how we handle your data with transparency and care.",
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <section className="pt-32 pb-20 border-b border-border">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-[1px] bg-[#6366F1]" />
            <span className="text-[#6366F1] font-mono text-sm tracking-widest uppercase">Legal</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground text-lg">Last updated: June 24, 2026</p>
        </div>
      </section>

      <section className="py-16 flex-grow">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="space-y-10">

            <div>
              <p className="text-muted-foreground leading-relaxed text-lg">
                At Zyvane Technologies, your privacy is not a formality — it is a commitment. This Privacy Policy explains exactly what data we collect, why we collect it, how we use it, and what control you have over it. We have written this to be read by humans, not lawyers.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">1. Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">Information you provide:</strong> When you contact us via our website form, you provide your name, email address, company name, and a description of your project. This is the only information we actively collect from you.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">Automatically collected data:</strong> When you visit our website, we may collect standard technical information such as your IP address, browser type, referring URL, and pages visited. This data is aggregated and anonymized via our analytics provider (if enabled) and is never tied to individual users.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Cookies:</strong> We use only necessary cookies (for theme preference, session state). We do not use third-party advertising cookies or behavioral tracking cookies.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">2. How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">We use the information you provide solely to:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6366F1] mt-2 shrink-0" />
                  Respond to your project inquiry or support request
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6366F1] mt-2 shrink-0" />
                  Communicate with you about an active engagement
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6366F1] mt-2 shrink-0" />
                  Send occasional updates about our services, only if you have explicitly opted in
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                We do not sell your data. We do not share it with advertising networks. We do not use it to train AI models. Full stop.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">3. Data Sharing</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We share your personal information only with our email service provider (currently Resend) for the sole purpose of transmitting your inquiry to our team. Resend is SOC 2 compliant and does not have rights to use your data for any purpose other than transmission.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We may disclose information when required to do so by law, or in the good-faith belief that such action is necessary to comply with legal processes.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">4. Data Retention</h2>
              <p className="text-muted-foreground leading-relaxed">
                Inquiry data submitted through our contact form is retained for the duration of the business relationship and for up to 2 years thereafter for reference purposes. You may request deletion of your data at any time by emailing us at{" "}
                <a href="mailto:privacy@zyvane.com" className="text-[#6366F1] hover:underline">privacy@zyvane.com</a>.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">5. Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement industry-standard security practices to protect your information, including TLS encryption in transit and encrypted storage at rest. Our contact form data is transmitted via encrypted channels and is accessible only to the Zyvane team.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">6. Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Depending on your location, you may have the following rights regarding your personal data:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                {[
                  "The right to access the personal data we hold about you",
                  "The right to correct inaccurate data",
                  "The right to request deletion of your data",
                  "The right to object to or restrict processing of your data",
                  "The right to data portability",
                ].map((right, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#6366F1] mt-2 shrink-0" />
                    {right}
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                To exercise any of these rights, contact us at{" "}
                <a href="mailto:privacy@zyvane.com" className="text-[#6366F1] hover:underline">privacy@zyvane.com</a>.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">7. Changes to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. When we do, we will revise the "Last updated" date at the top of this page. We encourage you to review this policy periodically to stay informed about how we protect your information.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">8. Contact & Legal Entity</h2>
              <p className="text-muted-foreground leading-relaxed">
                Zyvane Technologies is a registered MSME under the Government of India (UDYAM-DL-11-0164014).<br/>
                Registered Address: 168 C, Nangloi, Ashok Maholla Gali No 6, New Delhi 110041.<br/><br/>
                For any privacy-related questions or requests, contact us at{" "}
                <a href="mailto:privacy@zyvane.com" className="text-[#6366F1] hover:underline">
                  privacy@zyvane.com
                </a>
                . We respond to all privacy inquiries within 72 hours.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
