import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Zyvane Technologies",
  description: "Zyvane Technologies Terms of Service — our commitments to you and what we expect in return.",
};

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <section className="pt-32 pb-20 border-b border-border">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-[1px] bg-[#6366F1]" />
            <span className="text-[#6366F1] font-mono text-sm tracking-widest uppercase">Legal</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">
            Terms of Service
          </h1>
          <p className="text-muted-foreground text-lg">Last updated: June 24, 2026</p>
        </div>
      </section>

      <section className="py-16 flex-grow">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="prose prose-invert max-w-none space-y-10">

            <div>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                Please read these Terms of Service carefully before using our website or engaging our services. By accessing or using Zyvane Technologies services, you agree to be bound by these Terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing this website or engaging Zyvane Technologies for professional services, you confirm that you have read, understood, and agree to be bound by these Terms of Service and our Privacy Policy. If you disagree with any part of these terms, you may not access our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">2. Professional Services</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Zyvane Technologies provides software engineering, AI development, cloud infrastructure, and related professional services to clients under separate Master Services Agreements (MSAs) or Statements of Work (SOWs). The specific terms of any engagement are governed by those agreements, which supersede these general Terms where they conflict.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to decline any project engagement at our discretion. Acceptance of a discovery call or initial consultation does not constitute a commitment to undertake a project.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">3. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                All content on this website — including text, graphics, code, logos, and design — is the property of Zyvane Technologies and is protected by applicable copyright and intellectual property laws.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                For client engagements: all code, designs, and deliverables produced under a paid engagement are fully transferred to the client upon final payment, unless otherwise specified in the governing MSA. We retain no rights over your project's intellectual property after contract completion.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">4. Confidentiality</h2>
              <p className="text-muted-foreground leading-relaxed">
                Any information shared with us during discovery calls, proposals, or project engagements is treated as strictly confidential. We do not share, sell, or disclose client information to third parties. We are willing to sign Non-Disclosure Agreements (NDAs) prior to any technical discussion involving sensitive business information.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">5. Disclaimer of Warranties</h2>
              <p className="text-muted-foreground leading-relaxed">
                This website and its content are provided "as is" without warranty of any kind, express or implied. While we strive to ensure all information is accurate and up to date, we make no representations regarding the completeness, accuracy, or suitability of any information presented. Specific performance guarantees are established within individual project MSAs.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">6. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                To the maximum extent permitted by applicable law, Zyvane Technologies shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of this website. For professional services, liability is limited as defined in the applicable MSA.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">7. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms shall be governed by and construed in accordance with applicable laws. Any disputes arising under these Terms shall be resolved in the jurisdiction specified in the applicable services agreement.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">8. Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to this page with an updated date. We encourage you to review these Terms periodically.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">9. Contact & Legal Entity</h2>
              <p className="text-muted-foreground leading-relaxed">
                Zyvane Technologies is a registered MSME under the Government of India (UDYAM-DL-11-0164014).<br/>
                Registered Address: 168 C, Nangloi, Ashok Maholla Gali No 6, New Delhi 110041.<br/><br/>
                For any questions regarding these Terms of Service, please contact us at{" "}
                <a href="mailto:legal@zyvane.com" className="text-[#6366F1] hover:underline">
                  legal@zyvane.com
                </a>
                .
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
