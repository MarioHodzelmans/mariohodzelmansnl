import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { getCaseBySlug, getCases } from '@/lib/cases'

type PageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const cases = await getCases(50)
  return cases.map((item) => ({ slug: item.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const item = await getCaseBySlug(slug)

  if (!item) {
    return {
      title: 'Case | Mario Hodzelmans',
    }
  }

  return {
    title: item.seo?.title || item.title,
    description: item.seo?.description || item.excerpt,
  }
}

export default async function CaseDetailPage({ params }: PageProps) {
  const { slug } = await params
  const item = await getCaseBySlug(slug)

  if (!item) notFound()

  return (
    <div className="mxd-page-content inner-page-content">
      <section className="mxd-section">
        <div className="mxd-container grid-l-container">
          <div className="mxd-block">
            <div className="inner-headline__breadcrumbs">
              <div className="breadcrumbs__nav">
                <span><Link href="/">Home</Link></span>
                <span><Link href="/cases">Cases</Link></span>
                <span className="current-item">{item.title}</span>
              </div>
            </div>
          </div>
          <div className="mxd-block">
            <h1 className="mb-4">{item.title}</h1>
            <div className="mb-4">
              {item.category ? <span className="tag tag-m meta-tag">{item.category}</span> : null}
              {item.year ? <span className="tag tag-m meta-tag">{item.year}</span> : null}
              {item.services.map((service) => (
                <span key={service} className="tag tag-m meta-tag">{service}</span>
              ))}
            </div>
            {item.featuredImage ? (
              <div className="mb-4">
                <Image alt={item.title} src={item.featuredImage} width={1600} height={1000} />
              </div>
            ) : null}
            <p className="t-medium mb-4">{item.excerpt}</p>
            {item.contentHTML ? (
              <div dangerouslySetInnerHTML={{ __html: String(item.contentHTML) }} />
            ) : null}
          </div>
        </div>
      </section>
    </div>
  )
}
