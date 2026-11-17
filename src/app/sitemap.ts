import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";

const SITE_URL = "https://aziz-ui-portfolio.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectUrls = projects.map((project) => ({
    url: `${SITE_URL}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...projectUrls,
  ];
}
