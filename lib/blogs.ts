import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { fallbackBlogPosts, type BlogPostSummary } from './blogModels'

function imageUrl(image: unknown, fallback: string): string {
  if (image && typeof image === 'object' && 'url' in image && typeof image.url === 'string') {
    return image.url
  }
  return fallback
}

export async function getBlogPosts(limit = 10): Promise<BlogPostSummary[]> {
  if (!process.env.DATABASE_URI && !process.env.DATABASE_URL) {
    return fallbackBlogPosts.slice(0, limit)
  }

  try {
    const payload = await getPayload({ config: configPromise })
    const result = await payload.find({
      collection: 'blogs',
      depth: 1,
      limit,
      sort: '-publishedAt',
      where: {
        status: {
          equals: 'published',
        },
      },
    })

    if (!result.docs.length) {
      return fallbackBlogPosts.slice(0, limit)
    }

    return result.docs.map((doc, index) => ({
      title: doc.title,
      slug: doc.slug,
      excerpt: doc.excerpt,
      publishedAt: doc.publishedAt,
      readTime: doc.readTime || '5 min read',
      categories: doc.categories?.map((category) => category.label).filter(Boolean) || [],
      image: imageUrl(doc.image, fallbackBlogPosts[index % fallbackBlogPosts.length].image),
      featured: doc.featured || index === 0,
    }))
  } catch (error) {
    console.warn('Falling back to static blog posts:', error)
    return fallbackBlogPosts.slice(0, limit)
  }
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPostSummary | null> {
  const posts = await getBlogPosts(50)
  return posts.find((post) => post.slug === slug) || null
}
