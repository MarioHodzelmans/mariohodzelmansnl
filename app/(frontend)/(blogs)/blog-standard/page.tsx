import { Metadata } from "next";
import InnerHeadline from "@/components/blogs/blog-standard/InnerHeadline";
import Blog from "@/components/blogs/blog-standard/Blog";
import CTAWithMarquee from "@/components/blogs/blog-standard/CTAWithMarquee";
import { getBlogPosts } from "@/lib/blogs";
export const metadata: Metadata = {
  title: "Blog | Mario Hodzelmans",
  description: "AI strategy, automation and intelligent systems thinking by Mario Hodzelmans.",
};
export default async function BlogStandardPage() {
  const posts = await getBlogPosts(12);

  return (
    <>
      <div className="mxd-page-content inner-page-content">
        <InnerHeadline />
        <Blog posts={posts} />
        <CTAWithMarquee />
      </div>
    </>
  );
}
