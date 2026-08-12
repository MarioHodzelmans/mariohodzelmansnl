import type { MetadataRoute } from "next";
import { getBlogPosts } from "@/lib/blogs";
import { getCases } from "@/lib/cases";

const baseUrl = "https://mariohodzelmans.nl";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [posts, cases] = await Promise.all([getBlogPosts(100), getCases(100)]);

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/cases`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/about-me`, changeFrequency: "monthly", priority: 0.8 },
    {
      url: `${baseUrl}/blog-standard`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    { url: `${baseUrl}/resources`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/contact`, changeFrequency: "yearly", priority: 0.5 },
  ];

  const caseRoutes: MetadataRoute.Sitemap = cases.map((item) => ({
    url: `${baseUrl}/cases/${item.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const articleRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blog-article/${post.slug}`,
    lastModified: post.publishedAt,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...caseRoutes, ...articleRoutes];
}
