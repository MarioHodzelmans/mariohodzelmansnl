import { Metadata } from "next";
import InnerHeadlineArticle from "@/components/blogs/blog-creative/InnerHeadlineArticle";
import BlogGrid from "@/components/blogs/blog-creative/BlogGrid";
import CTA from "@/components/blogs/blog-creative/CTA";
export const metadata: Metadata = {
  title: "Blog Creative | Mario Hodzelmans | AI Systems Architect",
  description: "Mario Hodzelmans | AI Systems Architect",
};
export default function BlogCreativePage() {
  return (
    <>
      <>
        <InnerHeadlineArticle />
        <BlogGrid />
        <CTA />
      </>
    </>
  );
}
