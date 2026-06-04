"use client";

import PinnedSection from "@/components/animations/PinnedSection";
import CommonAnimatedText from "@/components/animations/CommonAnimatedText";
import { CommonCardBatchAnimated } from "@/components/animations/CommonScrollAnimated";
import TextScramble from "@/components/animations/TextScramble";
import Image from "next/image";
import Link from "next/link";

const posts = [
  ["02 February, 2026", "Why Most Companies Are Not Ready For AI", ["AI Strategy", "Transformation", "Systems"]],
  ["28 January, 2026", "Building an AI-First Organization", ["Innovation", "Automation", "Leadership"]],
  ["15 January, 2026", "The Future Of Knowledge Management", ["AI Agents", "Knowledge Systems", "Strategy"]],
  ["08 January, 2026", "Why Automation Projects Fail", ["Automation", "Business", "Operations"]],
  ["03 January, 2026", "Legacy Systems Are Killing Innovation", ["Digital Transformation", "E-Commerce", "Strategy"]],
];

export default function BlogPreview() {
  return (
    <PinnedSection blurSection className="mxd-section padding-top-subtitle-mobile padding-bottom-preview">
      <PinnedSection.Inner>
        <div className="mxd-container grid-l-container">
          <div className="mxd-block"><div className="mxd-section-title pre-subtitle-s"><div className="mxd-section-title__title">
            <CommonAnimatedText as="h2" className="reveal-type" animation="revealType">Latest<br />thinking</CommonAnimatedText>
          </div></div></div>
          <div className="mxd-block"><div className="mxd-blog-grid"><div className="container-fluid p-0"><div className="row g-0 mxd-blog-grid__gallery">
            {posts.map(([date, title, tags], index) => (
              <CommonCardBatchAnimated key={title as string} className="col-12 col-lg-4 mxd-blog-item animate-card-3" as="div" columns={3}>
                <div className="mxd-blog-item__date"><span className="meta-date">{date}</span></div>
                <Link className="mxd-blog-item__media active-cursor-permanent" data-cursor-text="Read Post" href="/blog-article">
                  <Image alt={title as string} src={`/img/blog/preview/grid-x3/pr-0${(index % 3) + 1}.webp`} width={1200} height={800} />
                </Link>
                <div className="mxd-blog-item__caption"><div className="mxd-blog-item__title"><Link className="blog-name-m" href="/blog-article">{title}</Link></div>
                  <div className="mxd-blog-item__tags">{(tags as string[]).map((tag) => <TextScramble key={tag} className="tag tag-s tag-medium mxd-scramble">{tag}</TextScramble>)}</div>
                </div>
              </CommonCardBatchAnimated>
            ))}
          </div></div></div></div>
        </div>
        <PinnedSection.Trigger />
      </PinnedSection.Inner>
    </PinnedSection>
  );
}
