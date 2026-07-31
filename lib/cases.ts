import configPromise from "@payload-config";
import { getPayload } from "payload";

export type CaseSummary = {
  title: string;
  slug: string;
  excerpt: string;
  featuredImage: string;
  category: string;
  services: string[];
  year: string;
  featured: boolean;
  sortOrder: number;
  content?: unknown;
  contentHTML?: string;
  seo?: {
    title?: string;
    description?: string;
  };
};

export const fallbackCases: CaseSummary[] = [
  {
    title: "AI Transformation System",
    slug: "ai-transformation-dr-rath",
    excerpt:
      "A staged AI operating model that moves from scattered experiments to controlled implementation.",
    featuredImage: "/img/generated/kunrader-ai-transformation.png",
    category: "AI Strategy",
    services: ["AI Strategy", "Governance", "Adoption"],
    year: "2026",
    featured: true,
    sortOrder: 1,
  },
  {
    title: "Knowledge Operating System",
    slug: "ai-knowledge-operating-system",
    excerpt:
      "Reusable team memory, structured context and search-ready knowledge for AI-assisted work.",
    featuredImage: "/img/generated/kunrader-knowledge-agents.png",
    category: "Knowledge Systems",
    services: ["Knowledge Systems", "AI Agents", "Operations"],
    year: "2026",
    featured: true,
    sortOrder: 2,
  },
  {
    title: "Commerce Automation Ecosystem",
    slug: "international-ecommerce-ecosystem",
    excerpt:
      "A connected commerce workflow across catalog, content, orders, channels and reporting.",
    featuredImage: "/img/generated/kunrader-commerce-automation.png",
    category: "E-Commerce",
    services: ["E-Commerce", "Automation", "Channels"],
    year: "2026",
    featured: true,
    sortOrder: 3,
  },
  {
    title: "Executive AI Agent Architecture",
    slug: "executive-ai-agent-architecture",
    excerpt:
      "Agent workflows built around clear tasks, human control, strong context and measurable outcomes.",
    featuredImage: "/img/generated/kunrader-knowledge-agents.png",
    category: "AI Agents",
    services: ["AI Agents", "Automation", "Strategy"],
    year: "2025",
    featured: false,
    sortOrder: 4,
  },
];

function imageUrl(image: unknown, fallback: string): string {
  if (
    image &&
    typeof image === "object" &&
    "url" in image &&
    typeof image.url === "string"
  ) {
    return image.url;
  }
  return fallback;
}

function caseSort(a: CaseSummary, b: CaseSummary): number {
  const sortA = a.sortOrder ?? 0;
  const sortB = b.sortOrder ?? 0;
  if (sortA !== sortB) return sortA - sortB;
  const yearA = Number.parseInt(a.year || "0", 10) || 0;
  const yearB = Number.parseInt(b.year || "0", 10) || 0;
  if (yearA !== yearB) return yearB - yearA;
  return a.title.localeCompare(b.title);
}

export async function getCases(limit = 50): Promise<CaseSummary[]> {
  if (!process.env.DATABASE_URI && !process.env.DATABASE_URL) {
    return fallbackCases.slice().sort(caseSort).slice(0, limit);
  }

  try {
    const payload = await getPayload({ config: configPromise });
    const result = await payload.find({
      collection: "cases",
      depth: 1,
      limit,
      sort: "sortOrder",
    });

    const docs = result.docs.map((doc, index) => ({
      title: doc.title,
      slug: doc.slug,
      excerpt: doc.excerpt || "",
      featuredImage: imageUrl(
        doc.featuredImage,
        fallbackCases[index % fallbackCases.length].featuredImage,
      ),
      category: doc.category || "",
      services:
        doc.services?.map((entry) => entry.service).filter(Boolean) || [],
      year: String(doc.year || ""),
      featured: Boolean(doc.featured),
      sortOrder: Number(doc.sortOrder || 0),
      content: doc.content,
      seo: doc.seo || undefined,
    })) as CaseSummary[];

    return docs.sort(caseSort);
  } catch (error) {
    console.warn("Falling back to static cases:", error);
    return fallbackCases.slice().sort(caseSort).slice(0, limit);
  }
}

export async function getFeaturedCases(limit = 4): Promise<CaseSummary[]> {
  const cases = await getCases(50);
  return cases
    .filter((item) => item.featured)
    .sort(caseSort)
    .slice(0, limit);
}

export async function getCaseBySlug(slug: string): Promise<CaseSummary | null> {
  const cases = await getCases(50);
  return cases.find((item) => item.slug === slug) || null;
}
