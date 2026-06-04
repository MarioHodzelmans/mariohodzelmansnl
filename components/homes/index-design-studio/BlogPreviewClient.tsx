"use client";

import PinnedSection from "@/components/animations/PinnedSection";
import CommonAnimatedText from "@/components/animations/CommonAnimatedText";
import { CommonCardBatchAnimated } from "@/components/animations/CommonScrollAnimated";
import TextScramble from "@/components/animations/TextScramble";
import type { BlogPostSummary } from "@/lib/blogModels";
import { formatBlogDate } from "@/lib/blogModels";
import Image from "next/image";
import Link from "next/link";

type BlogPreviewClientProps = {
  posts: BlogPostSummary[];
};

export default function BlogPreviewClient({ posts }: BlogPreviewClientProps) {
  return (
    <PinnedSection blurSection className="mxd-section padding-top-subtitle-mobile padding-bottom-preview">
      <PinnedSection.Inner>
        <div className="mxd-container grid-l-container">
          <div className="mxd-block">
            <div className="mxd-section-title pre-subtitle-s">
              <div className="mxd-section-title__title">
                <CommonAnimatedText as="h2" className="reveal-type" animation="revealType">
                  Latest
                  <br />
                  thinking
                </CommonAnimatedText>
              </div>
            </div>
          </div>
          <div className="mxd-block">
            <div className="mxd-blog-grid">
              <div className="container-fluid p-0">
                <div className="row g-0 mxd-blog-grid__gallery">
                  {posts.map((post) => (
                    <CommonCardBatchAnimated
                      key={post.slug}
                      className="col-12 col-lg-4 mxd-blog-item animate-card-3"
                      as="div"
                      columns={3}
                    >
                      <div className="mxd-blog-item__date">
                        <span className="meta-date">{formatBlogDate(post.publishedAt)}</span>
                      </div>
                      <Link
                        className="mxd-blog-item__media active-cursor-permanent"
                        data-cursor-text="Read Post"
                        href="/blog-standard"
                      >
                        <Image alt="" src={post.image} width={1200} height={800} />
                      </Link>
                      <div className="mxd-blog-item__caption">
                        <div className="mxd-blog-item__title">
                          <Link className="blog-name-m" href="/blog-standard">
                            {post.title}
                          </Link>
                        </div>
                        <div className="mxd-blog-item__tags">
                          {post.categories.map((tag) => (
                            <TextScramble key={tag} className="tag tag-s tag-medium mxd-scramble">
                              {tag}
                            </TextScramble>
                          ))}
                        </div>
                      </div>
                    </CommonCardBatchAnimated>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <PinnedSection.Trigger />
      </PinnedSection.Inner>
    </PinnedSection>
  );
}
