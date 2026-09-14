import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

const lastUpdated = new Date("2026-09-14T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: absoluteUrl("/"),
      lastModified: lastUpdated,
      changeFrequency: "monthly",
      priority: 1,
      images: [absoluteUrl("/gonzalo-pacheco.png")],
    },
    {
      url: absoluteUrl("/tfg"),
      lastModified: lastUpdated,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: absoluteUrl("/practicas"),
      lastModified: lastUpdated,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
