import { Metadata } from "next";
import BlogArticle from "@/components/blogs/blog-article/BlogArticle";
import MoreOnTopic from "@/components/blogs/blog-article/MoreOnTopic";
import CTAWithMarquee from "@/components/blogs/blog-article/CTAWithMarquee";
import { getBlogPosts } from "@/lib/blogs";
export const metadata: Metadata = {
  title: "Blog Article | Azurio - Digital Agency & Portfolio NextJs Template",
  description: "Azurio - Digital Agency & Portfolio NextJs Template",
};
export default async function BlogArticlePage() {
  const posts = await getBlogPosts(4);
  const post = posts[0];

  if (!post) {
    return null;
  }

  return (
    <>
      <div className="mxd-page-content inner-page-content">
        <BlogArticle post={post} />
        <MoreOnTopic posts={posts.slice(1)} />
        <CTAWithMarquee />
      </div>
    </>
  );
}
