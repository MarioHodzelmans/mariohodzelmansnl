export type BlogPostSummary = {
  title: string
  slug: string
  excerpt: string
  publishedAt: string
  readTime: string
  categories: string[]
  image: string
  featured?: boolean
}

export const fallbackBlogPosts: BlogPostSummary[] = [
  {
    title: 'Why Most Companies Are Not Ready For AI',
    slug: 'why-most-companies-are-not-ready-for-ai',
    excerpt:
      'AI adoption rarely fails because of the model. It fails when systems, workflows and ownership are unclear.',
    publishedAt: '2026-02-02',
    readTime: '5 min read',
    categories: ['AI Strategy', 'Transformation', 'Systems'],
    image: '/img/blog/preview/grid-x3/pr-01.webp',
    featured: true,
  },
  {
    title: 'Building an AI-First Organization',
    slug: 'building-an-ai-first-organization',
    excerpt:
      'A practical look at how leadership, automation and knowledge systems need to evolve together.',
    publishedAt: '2026-01-28',
    readTime: '4 min read',
    categories: ['Innovation', 'Automation', 'Leadership'],
    image: '/img/blog/preview/grid-x3/pr-02.webp',
  },
  {
    title: 'The Future Of Knowledge Management',
    slug: 'the-future-of-knowledge-management',
    excerpt:
      'Knowledge is becoming operational infrastructure for AI agents, decision support and organizational learning.',
    publishedAt: '2026-01-15',
    readTime: '5 min read',
    categories: ['AI Agents', 'Knowledge Systems', 'Strategy'],
    image: '/img/blog/preview/grid-x3/pr-03.webp',
  },
  {
    title: 'Why Automation Projects Fail',
    slug: 'why-automation-projects-fail',
    excerpt:
      'Automation breaks down when processes are unclear, data is fragmented and ownership is missing.',
    publishedAt: '2026-01-08',
    readTime: '3 min read',
    categories: ['Automation', 'Business', 'Operations'],
    image: '/img/blog/preview/grid-x3/pr-01.webp',
  },
  {
    title: 'Legacy Systems Are Killing Innovation',
    slug: 'legacy-systems-are-killing-innovation',
    excerpt:
      'Digital transformation starts with understanding which systems create speed and which ones create drag.',
    publishedAt: '2026-01-03',
    readTime: '6 min read',
    categories: ['Digital Transformation', 'E-Commerce', 'Strategy'],
    image: '/img/blog/preview/grid-x3/pr-02.webp',
  },
]

export function formatBlogDate(value: string): string {
  return new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(new Date(value))
}
