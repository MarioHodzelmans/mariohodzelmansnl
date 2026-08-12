import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin/", "/puck/", "/preview/"],
    },
    sitemap: "https://mariohodzelmans.nl/sitemap.xml",
    host: "https://mariohodzelmans.nl",
  };
}
