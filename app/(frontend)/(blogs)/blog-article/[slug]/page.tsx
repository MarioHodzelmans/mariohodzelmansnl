import { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogArticle from "@/components/blogs/blog-article/BlogArticle";
import MoreOnTopic from "@/components/blogs/blog-article/MoreOnTopic";
import CTAWithMarquee from "@/components/blogs/blog-article/CTAWithMarquee";
import { getBlogPostBySlug, getBlogPosts } from "@/lib/blogs";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Blog Article | Mario Hodzelmans",
      description: "Thoughts on AI strategy, automation and intelligent systems.",
    };
  }

  return {
    title: `${post.title} | Mario Hodzelmans`,
    description: post.excerpt,
  };
}

export default async function BlogArticleSlugPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = (await getBlogPosts(4)).filter((item) => item.slug !== post.slug).slice(0, 3);

  return (
    <>
      <div className="mxd-page-content inner-page-content">
        <BlogArticle post={post} />
        <MoreOnTopic posts={relatedPosts} />
        <CTAWithMarquee />
      </div>
    </>
  );
}
