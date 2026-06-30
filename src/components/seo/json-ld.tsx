import Script from "next/script";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Zyvane Technologies",
  alternateName: "Zyvane",
  url: "https://www.zyvane.com",
  logo: "https://www.zyvane.com/logo.png",
  description:
    "Zyvane Technologies engineers intelligence and delivers scale. We build custom AI software, enterprise web applications, and workflow automation for global enterprises.",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: "hello@zyvane.com",
    availableLanguage: "English",
  },
  sameAs: [
    "https://www.linkedin.com/company/zyvane",
    "https://twitter.com/zyvanetech",
    "https://github.com/zyvane",
  ],
  serviceType: [
    "Custom Software Development",
    "AI Engineering",
    "Cloud Architecture",
    "Mobile App Development",
    "Data Analytics",
    "Cybersecurity",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: "https://www.zyvane.com",
  name: "Zyvane Technologies",
  description: "Engineering Intelligence. Delivering Scale.",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://www.zyvane.com/search?q={search_term_string}",
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
        strategy="afterInteractive"
      />
      <Script
        id="schema-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        strategy="afterInteractive"
      />
    </>
  );
}
