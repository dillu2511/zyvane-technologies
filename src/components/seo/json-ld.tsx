import Script from "next/script";

const siteUrl = "https://www.zyvanetechnologies.com";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Zyvane Technologies",
  alternateName: "Zyvane",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description:
    "Zyvane Technologies engineers intelligence and delivers scale. We build custom AI software, enterprise web applications, and workflow automation for global enterprises.",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: "contact@zyvanetechnologies.com",
    availableLanguage: "English",
  },
  sameAs: [
    "https://www.linkedin.com/company/zyvane-technologies",
    "https://twitter.com/zyvanetech",
    "https://github.com/zyvane-technologies",
  ],
  serviceType: [
    "Custom Software Development",
    "AI Engineering",
    "Cloud Architecture & DevOps",
    "Healthcare Software Development",
    "ERP Solutions",
    "Workflow Automation",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: siteUrl,
  name: "Zyvane Technologies",
  description: "Engineering Intelligence. Delivering Scale.",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${siteUrl}/search?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export function JsonLd() {
  return (
    <>
      <Script
        id="schema-organization"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        strategy="beforeInteractive"
      />
      <Script
        id="schema-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        strategy="beforeInteractive"
      />
    </>
  );
}
