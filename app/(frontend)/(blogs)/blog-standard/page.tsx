import { Metadata } from "next";
import InnerHeadline from "@/components/blogs/blog-standard/InnerHeadline";
import Blog from "@/components/blogs/blog-standard/Blog";
import CTAWithMarquee from "@/components/blogs/blog-standard/CTAWithMarquee";
import { getBlogPosts } from "@/lib/blogs";
export const metadata: Metadata = {
  title: "Writing | Mario Hodzelmans",
  description:
    "Notes, observations and working ideas by Mario Hodzelmans on AI, automation, knowledge systems, e-commerce and digital transformation.",
  alternates: {
    canonical: "/blog-standard",
  },
  openGraph: {
    title: "Writing | Mario Hodzelmans",
    description:
      "Notes, observations and working ideas by Mario Hodzelmans on AI, automation, knowledge systems, e-commerce and digital transformation.",
    url: "/blog-standard",
  },
  twitter: {
    title: "Writing | Mario Hodzelmans",
    description:
      "Notes, observations and working ideas by Mario Hodzelmans on AI, automation, knowledge systems, e-commerce and digital transformation.",
  },
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
