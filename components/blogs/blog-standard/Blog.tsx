"use client";

import BlurSection from "@/components/animations/BlurSection";
import CommonLoadAnimation, { CommonLoadFade } from "@/components/animations/CommonLoadAnimation";
import TextScramble from "@/components/animations/TextScramble";
import type { BlogPostSummary } from "@/lib/blogModels";
import { formatBlogDate } from "@/lib/blogModels";
import Image from "next/image";
import Link from "next/link";

type BlogProps = {
  posts: BlogPostSummary[];
};

export default function Blog({ posts }: BlogProps) {
  const [featuredPost, ...regularPosts] = posts;
  const featured = featuredPost || posts[0];

  return (
    <CommonLoadAnimation>
      <BlurSection className="mxd-section padding-bottom-default">
        <div className="mxd-container grid-l-container">
          <CommonLoadFade index={0}>
            <div className="mxd-posts-area loading-fade">
              <div className="mxd-posts-container mxd-grid-item">
                {featured ? (
                  <article className="mxd-post post-featured">
                    <Link className="post-featured__container active-cursor-permanent" data-cursor-text="Read Post" href="/blog-article">
                      <div className="post-featured__thumb">
                        <Image alt={featured.title} src={featured.image} width={1400} height={900} />
                        <div className="post-featured__cover" />
                      </div>
                      <div className="post-featured__content">
                        <div className="post-featured__meta">
                          <div className="post-featured__data">
                            <TextScramble className="tag tag-s-mobile tag-permanent mxd-scramble">{formatBlogDate(featured.publishedAt)}</TextScramble>
                            <TextScramble className="tag tag-s-mobile tag-permanent mxd-scramble">{featured.readTime}</TextScramble>
                          </div>
                          <div className="post-featured__categories">
                            {featured.categories.map((category) => (
                              <TextScramble key={category} className="tag tag-s-mobile tag-permanent mxd-scramble">{category}</TextScramble>
                            ))}
                          </div>
                        </div>
                        <div className="post-featured__info">
                          <h2 className="post-featured__title permanent">{featured.title}</h2>
                          <div className="post-featured__excerpt"><p className="t-medium t-permanent">{featured.excerpt}</p></div>
                        </div>
                      </div>
                    </Link>
                  </article>
                ) : null}

                <div className="mxd-posts-list">
                  {regularPosts.map((post, index) => (
                    <article className="mxd-post post-simple" key={post.slug}>
                      <div className="post-simple__divider top" />
                      <Link
                        className="post-simple__container active-cursor-image active-cursor-permanent"
                        data-cursor-image={post.image}
                        data-cursor-text="Read Post"
                        href="/blog-article"
                      >
                        <div className="container-fluid px-0 post-simple__inner">
                          <div className="row gx-0">
                            <div className="col-12">
                              <div className="post-simple__meta">
                                {post.categories.map((category) => <span className="meta-tag comma-tag" key={category}>{category}</span>)}
                                <span className="meta-time">{post.readTime}</span>
                              </div>
                            </div>
                            <div className="col-12 col-xxl-7">
                              <div className="post-simple__title">
                                <h3>{post.title}</h3>
                                <div className="post-simple__data">
                                  <span className="meta-author comma-tag">Mario Hodzelmans</span>
                                  <span className="meta-date">{formatBlogDate(post.publishedAt)}</span>
                                </div>
                              </div>
                            </div>
                            <div className="col-12 col-xxl-5">
                              <div className="post-simple__excerpt"><p className="t-medium">{post.excerpt}</p></div>
                            </div>
                          </div>
                        </div>
                      </Link>
                      <div className="post-simple__divider bottom" />
                      {index === regularPosts.length - 1 ? null : null}
                    </article>
                  ))}
                </div>
              </div>

              <div className="mxd-sidebar mxd-grid-item">
                <div className="mxd-sidebar__widget">
                  <div className="widget__title"><p>/ Blog</p></div>
                  <ul className="widget__categories">
                    {Array.from(new Set(posts.flatMap((post) => post.categories))).slice(0, 8).map((category) => (
                      <li className="categories__item" key={category}>
                        <a href="#0" className="categories__link">{category}<span>{posts.filter((post) => post.categories.includes(category)).length.toString().padStart(2, "0")}</span></a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mxd-sidebar__widget">
                  <div className="widget__title"><p>/ Latest posts</p></div>
                  <ul className="widget__recent-posts">
                    {posts.slice(0, 3).map((post) => (
                      <li className="recent-post__item" key={post.slug}>
                        <div className="recent-post__thumb">
                          <Link href="/blog-article"><Image alt={post.title} src={post.image} width={300} height={300} /></Link>
                        </div>
                        <div className="recent-post__content">
                          <div className="recent-post__meta">
                            {post.categories.slice(0, 2).map((category) => (
                              <a href="#0" key={category}><TextScramble className="meta-tag tag-s comma-tag mxd-scramble">{category}</TextScramble></a>
                            ))}
                          </div>
                          <div className="recent-post__title"><Link href="/blog-article">{post.title}</Link></div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mxd-sidebar__widget bg-base-tint radius-m widget-about">
                  <div className="widget__title"><p>/ About</p></div>
                  <div className="widget__descr">
                    <p className="t-small">
                      Notes on AI strategy, automation, knowledge systems and intelligent digital operations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CommonLoadFade>
        </div>
      </BlurSection>
    </CommonLoadAnimation>
  );
}
