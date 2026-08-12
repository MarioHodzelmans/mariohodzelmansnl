import configPromise from '@payload-config'
import { getPayload } from 'payload'

export type CaseSummary = {
  title: string
  slug: string
  excerpt: string
  featuredImage: string
  category: string
  services: string[]
  year: string
  featured: boolean
  sortOrder: number
  content?: unknown
  contentHTML?: string
  seo?: {
    title?: string
    description?: string
  }
}

const aiNativeWebsiteCase: CaseSummary = {
  title: 'Building My Website as an AI-Native Digital System',
  slug: 'ai-native-website',
  excerpt: 'A live case study in building, managing and continuously improving a modern website through AI, visual editing and professional web infrastructure.',
  featuredImage: '/img/works/showcase-sticky/pr04-01.webp',
  category: 'AI Development',
  services: ['AI', 'Web Development', 'Systems Design'],
  year: '2026',
  featured: true,
  sortOrder: 0,
  seo: {
    title: 'AI-Native Website Case Study | Mario Hodzelmans',
    description: 'A live case study showing how AI, Next.js, GitHub, Vercel, Puck, Payload CMS and Supabase work together in a modern website development workflow.',
  },
  contentHTML: `
    <div style="display:inline-flex;align-items:center;gap:8px;padding:8px 14px;margin:0 0 32px;border-radius:999px;background:#e8f7ed;color:#16763a;font-weight:700;font-size:14px;letter-spacing:.04em;text-transform:uppercase;"><span style="width:9px;height:9px;border-radius:50%;background:#22a447;display:inline-block;"></span>Live · Continuously evolving</div>
    <h2>Building a website differently</h2>
    <p>mariohodzelmans.nl is more than my personal website. It is also a live experiment in how websites and digital products can be built, managed and continuously improved with artificial intelligence.</p>
    <p>Instead of using AI only to generate text, images or pieces of code, I use AI as part of the development process itself. I define what I want to achieve. AI helps me analyse the existing system, develop solutions and implement changes.</p>
    <p>Behind that conversational layer is still a professional web development stack. The difference is how I interact with it.</p>

    <h2>From idea to production</h2>
    <p>The basic workflow is deliberately simple:</p>
    <p><strong>Idea → AI → Development → GitHub → Deployment → Live</strong></p>
    <p>I use AI systems such as ChatGPT and Claude to help translate ideas into technical implementations. GitHub is the source of truth for the application. Changes to the code are stored and versioned there, while Vercel connects the repository to the production environment and handles deployment.</p>
    <p>AI does not replace the infrastructure. It becomes an intelligent interface to it.</p>

    <h2>The system behind the website</h2>
    <p>The website is built with <strong>Next.js, React and TypeScript</strong>. Around this foundation are several specialised layers.</p>
    <p><strong>GitHub</strong> manages the source code and development history. <strong>Vercel</strong> handles deployment and hosting. <strong>Payload CMS</strong> provides structured content management. <strong>Puck</strong> adds a visual editing layer using React components. <strong>Supabase and PostgreSQL</strong> provide the underlying data infrastructure.</p>
    <p>The result is not one large platform doing everything. It is a collection of specialised technologies working together.</p>

    <h2>Three ways to interact with one system</h2>
    <h3>1. Natural language</h3>
    <p>ChatGPT and Claude allow me to work from intention. Instead of beginning with individual files or lines of code, I can begin with a problem or idea. AI can help analyse an existing implementation, investigate an issue, propose an improvement or help implement new functionality.</p>
    <h3>2. Visual editing</h3>
    <p>Puck provides a visual layer on top of React components. Content and components can increasingly be managed through interfaces that feel closer to a visual website builder while the underlying website remains a real React application.</p>
    <h3>3. Code</h3>
    <p>The technical foundation remains accessible through Next.js, TypeScript and GitHub. AI and visual editors do not replace the underlying application. They provide additional ways to interact with it.</p>
    <p><strong>Conversation when that is easiest. Visual editing when that is easiest. Code when that is necessary.</strong></p>

    <h2>Human-directed, AI-assisted</h2>
    <p>I do not consider this an autonomous AI website. I deliberately remain part of the process. AI can analyse, suggest and implement at remarkable speed, but someone still needs to decide what should exist, whether an implementation makes sense and whether it actually improves the experience.</p>
    <p>My role increasingly moves from manually executing every technical step toward directing the system.</p>

    <h2>Why this matters</h2>
    <p>The most interesting development is not that AI can generate websites. The bigger change is that natural language is becoming an interface to software.</p>
    <p>AI reduces the distance between intention and implementation. That does not make good architecture less important. It makes good judgement more important. When producing code becomes easier, knowing <strong>what to build, why to build it and how everything should work together</strong> becomes increasingly valuable.</p>

    <h2>A website that keeps evolving</h2>
    <p>This case study has deliberately been marked <strong>LIVE</strong>. There is no final version.</p>
    <p>I use mariohodzelmans.nl as a working environment to experiment with AI-assisted development, visual editing, automation, structured content and new ways of interacting with software. When the architecture changes or an important capability is added, the development log is updated.</p>

    <h2>Current architecture</h2>
    <p><strong>AI-assisted development → Next.js + React + TypeScript → Puck + Payload CMS → Supabase + PostgreSQL → GitHub → Vercel → mariohodzelmans.nl</strong></p>
    <p>The individual technologies will change. The principle behind the project is designed to last longer:</p>
    <p><strong>Human intent → AI assistance → structured systems → real-world output.</strong></p>
    <p>That is the experiment. And it is still running.</p>

    <h2>Development log</h2>
    <p><strong>August 2026 · Living case study published</strong><br />The website development workflow is now documented as an ongoing AI-native case rather than a time-sensitive blog post.</p>
    <p><strong>August 2026 · Puck visual editing added</strong><br />Puck was introduced as a visual editing layer alongside conversational AI and direct code development.</p>
  `,
}

export const fallbackCases: CaseSummary[] = [
  aiNativeWebsiteCase,
  {
    title: 'AI Transformation @ Dr. Rath',
    slug: 'ai-transformation-dr-rath',
    excerpt: 'Designing AI-first operating structures that improve clarity, speed and decision-making.',
    featuredImage: '/img/works/showcase-sticky/pr01-01.webp',
    category: 'AI Strategy',
    services: ['AI Strategy', 'Automation', 'Systems Design'],
    year: '2026',
    featured: true,
    sortOrder: 1,
  },
  {
    title: 'AI Knowledge Operating System',
    slug: 'ai-knowledge-operating-system',
    excerpt: 'Building a practical knowledge layer for reusable context, team memory and operational consistency.',
    featuredImage: '/img/works/showcase-sticky/pr02-01.webp',
    category: 'Knowledge Systems',
    services: ['Knowledge Systems', 'AI Agents', 'Operations'],
    year: '2026',
    featured: true,
    sortOrder: 2,
  },
  {
    title: 'International E-Commerce Ecosystem',
    slug: 'international-ecommerce-ecosystem',
    excerpt: 'Building scalable e-commerce workflows across markets, channels and internal operations.',
    featuredImage: '/img/works/showcase-sticky/pr03-01.webp',
    category: 'E-Commerce',
    services: ['E-Commerce', 'Automation', 'Growth'],
    year: '2026',
    featured: true,
    sortOrder: 3,
  },
  {
    title: 'Executive AI Agent Architecture',
    slug: 'executive-ai-agent-architecture',
    excerpt: 'Turning fragmented processes into smoother workflows that support real business growth.',
    featuredImage: '/img/works/showcase-sticky/pr04-01.webp',
    category: 'AI Agents',
    services: ['AI Agents', 'Automation', 'Strategy'],
    year: '2025',
    featured: false,
    sortOrder: 4,
  },
]

function imageUrl(image: unknown, fallback: string): string {
  if (image && typeof image === 'object' && 'url' in image && typeof image.url === 'string') return image.url
  return fallback
}

function caseSort(a: CaseSummary, b: CaseSummary): number {
  const sortA = a.sortOrder ?? 0
  const sortB = b.sortOrder ?? 0
  if (sortA !== sortB) return sortA - sortB
  const yearA = Number.parseInt(a.year || '0', 10) || 0
  const yearB = Number.parseInt(b.year || '0', 10) || 0
  if (yearA !== yearB) return yearB - yearA
  return a.title.localeCompare(b.title)
}

function ensureLivingCase(cases: CaseSummary[]): CaseSummary[] {
  const withoutDuplicate = cases.filter((item) => item.slug !== aiNativeWebsiteCase.slug)
  return [aiNativeWebsiteCase, ...withoutDuplicate].sort(caseSort)
}

export async function getCases(limit = 50): Promise<CaseSummary[]> {
  if (!process.env.DATABASE_URI && !process.env.DATABASE_URL) {
    return fallbackCases.slice().sort(caseSort).slice(0, limit)
  }

  try {
    const payload = await getPayload({ config: configPromise })
    const result = await payload.find({ collection: 'cases', depth: 1, limit, sort: 'sortOrder' })
    const docs = result.docs.map((doc, index) => ({
      title: doc.title,
      slug: doc.slug,
      excerpt: doc.excerpt || '',
      featuredImage: imageUrl(doc.featuredImage, fallbackCases[index % fallbackCases.length].featuredImage),
      category: doc.category || '',
      services: doc.services?.map((entry) => entry.service).filter(Boolean) || [],
      year: String(doc.year || ''),
      featured: Boolean(doc.featured),
      sortOrder: Number(doc.sortOrder || 0),
      content: doc.content,
      seo: doc.seo || undefined,
    })) as CaseSummary[]

    return ensureLivingCase(docs).slice(0, limit)
  } catch (error) {
    console.warn('Falling back to static cases:', error)
    return fallbackCases.slice().sort(caseSort).slice(0, limit)
  }
}

export async function getFeaturedCases(limit = 4): Promise<CaseSummary[]> {
  const cases = await getCases(50)
  return cases.filter((item) => item.featured).sort(caseSort).slice(0, limit)
}

export async function getCaseBySlug(slug: string): Promise<CaseSummary | null> {
  const cases = await getCases(50)
  return cases.find((item) => item.slug === slug) || null
}
