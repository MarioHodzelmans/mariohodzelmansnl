import { redirect } from "next/navigation";
import { getBlogPosts } from "@/lib/blogs";

export default async function BlogArticlePage() {
  const [post] = await getBlogPosts(1);
  redirect(post ? `/blog-article/${post.slug}` : "/blog-standard");
}
