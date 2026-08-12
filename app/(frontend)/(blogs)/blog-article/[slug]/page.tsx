import { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogArticle from "@/components/blogs/blog-article/BlogArticle";
import MoreOnTopic from "@/components/blogs/blog-article/MoreOnTopic";
import CTAWithMarquee from "@/components/blogs/blog-article/CTAWithMarquee";
import { getBlogPostBySlug, getBlogPosts } from "@/lib/blogs";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Blog Article | Mario Hodzelmans",
      description:
        "Thoughts on AI strategy, automation and intelligent systems.",
    };
  }

  return {
    title: `${post.title} | Mario Hodzelmans`,
    description: post.excerpt,
    alternates: {
      canonical: `/blog-article/${post.slug}`,
    },
    openGraph: {
      type: "article",
      url: `/blog-article/${post.slug}`,
      title: post.title,
      description: post.excerpt,
      publishedTime: post.publishedAt,
      authors: ["https://mariohodzelmans.nl/about-me"],
      images: [{ url: post.image, alt: post.title }],
    },
  };
}

export default async function BlogArticleSlugPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = (await getBlogPosts(4))
    .filter((item) => item.slug !== post.slug)
    .slice(0, 3);
  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    image: new URL(post.image, "https://mariohodzelmans.nl").toString(),
    mainEntityOfPage: `https://mariohodzelmans.nl/blog-article/${post.slug}`,
    author: {
      "@type": "Person",
      "@id": "https://mariohodzelmans.nl/#person",
      name: "Mario Hodzelmans",
      url: "https://mariohodzelmans.nl/about-me",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleStructuredData).replace(
            /</g,
            "\\u003c",
          ),
        }}
      />
      <div className="mxd-page-content inner-page-content">
        <BlogArticle post={post} />
        <MoreOnTopic posts={relatedPosts} />
        <CTAWithMarquee />
      </div>
    </>
  );
}
