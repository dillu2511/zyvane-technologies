import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.zyvanetechnologies.com";
  const now = new Date().toISOString();

  const corePages = [
    { route: "", priority: 1.0, freq: "daily" },
    { route: "/about", priority: 0.9, freq: "monthly" },
    { route: "/services", priority: 0.9, freq: "weekly" },
    { route: "/portfolio", priority: 0.9, freq: "weekly" },
    { route: "/pricing", priority: 0.85, freq: "weekly" },
    { route: "/contact", priority: 0.95, freq: "monthly" },
    { route: "/blog", priority: 0.8, freq: "weekly" },
    { route: "/careers", priority: 0.7, freq: "monthly" },
    { route: "/privacy", priority: 0.3, freq: "yearly" },
    { route: "/terms", priority: 0.3, freq: "yearly" },
  ];

  const servicePages = [
    "/services/ai-engineering",
    "/services/custom-software",
    "/services/devops",
    "/services/healthcare",
    "/services/workflow-automation",
    "/services/erp",
  ];

  const coreEntries: MetadataRoute.Sitemap = corePages.map(({ route, priority, freq }) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: freq as MetadataRoute.Sitemap[number]["changeFrequency"],
    priority,
  }));

  const serviceEntries: MetadataRoute.Sitemap = servicePages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...coreEntries, ...serviceEntries];
}

