import { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.zyvane.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteUrl, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${siteUrl}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/portfolio`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteUrl}/pricing`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/careers`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${siteUrl}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${siteUrl}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    // Service sub-pages
    { url: `${siteUrl}/services/custom-software`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${siteUrl}/services/ai-engineering`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${siteUrl}/services/cloud-devops`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${siteUrl}/services/mobile-apps`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${siteUrl}/services/data-analytics`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${siteUrl}/services/cybersecurity`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
  ];

  return staticRoutes;
}
