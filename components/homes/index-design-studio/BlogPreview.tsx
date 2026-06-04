import BlogPreviewClient from "@/components/homes/index-design-studio/BlogPreviewClient";
import { getBlogPosts } from "@/lib/blogs";

export default async function BlogPreview() {
  const posts = await getBlogPosts(5);

  return <BlogPreviewClient posts={posts} />;
}
