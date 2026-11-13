import type { MetadataRoute } from "next";
import { services, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, priority: 1 },
    ...services.map((s) => ({ url: `${site.url}/services/${s.slug}`, priority: 0.8 })),
  ];
}
