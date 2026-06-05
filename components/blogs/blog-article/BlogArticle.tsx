"use client";

import BlurSection from "@/components/animations/BlurSection";
import Link from "next/link";
import Image from "next/image";
import CommonLoadAnimation, {
  CommonLoadFade,
  CommonLoadItem,
} from "@/components/animations/CommonLoadAnimation";
import CommonAnimatedText from "@/components/animations/CommonAnimatedText";
import TextScramble from "@/components/animations/TextScramble";
import SmoothAnchorLink from "@/components/common/SmoothAnchorLink";
import type { BlogPostSummary } from "@/lib/blogModels";
import { formatBlogDate } from "@/lib/blogModels";

type BlogArticleProps = {
  post: BlogPostSummary;
};

export default function BlogArticle({ post }: BlogArticleProps) {
  const articleDate = formatBlogDate(post.publishedAt);
  const primaryCategory = post.categories[0] || "AI Strategy";
  const secondaryCategory = post.categories[1] || "Automation";
  const tertiaryCategory = post.categories[2] || "Systems";

  return (
    <CommonLoadAnimation>
      <BlurSection className="mxd-section">
        <div className="mxd-container grid-l-container">
          <div className="mxd-block">
            <div className="inner-headline">
              <div className="container-fluid p-0">
                <div className="row g-0">
                  <div className="col-12 mxd-grid-item">
                    <CommonLoadFade index={0}>
                      <div className="inner-headline__breadcrumbs loading-fade">
                        <div className="breadcrumbs__nav">
                          <span>
                            <Link href={`/`}>
                              <TextScramble className="mxd-scramble">Home</TextScramble>
                            </Link>
                          </span>
                          <span>
                            <Link href={`/blog-standard`}>
                              <TextScramble className="mxd-scramble">Blog</TextScramble>
                            </Link>
                          </span>
                          <span className="current-item">{post.title}</span>
                        </div>
                      </div>
                    </CommonLoadFade>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mxd-article-area">
            <div className="mxd-article-container mxd-grid-item">
              <div className="mxd-article loading-wrap">
                <div className="mxd-article__headline">
                  <CommonLoadItem index={0}>
                    <div className="mxd-article__tags loading-item">
                      <a href="#0"><TextScramble className="tag tag-m meta-tag comma-tag mxd-scramble">{primaryCategory}</TextScramble></a>
                      <a href="#0"><TextScramble className="tag tag-m meta-tag comma-tag mxd-scramble">{secondaryCategory}</TextScramble></a>
                      <a href="#0"><TextScramble className="tag tag-m meta-tag mxd-scramble">{tertiaryCategory}</TextScramble></a>
                    </div>
                  </CommonLoadItem>
                  <div className="mxd-article__title">
                    <CommonAnimatedText as="h2" className="small loading-split" animation="splitLinesLoad">
                      {post.title}
                    </CommonAnimatedText>
                  </div>
                  <CommonLoadItem index={1}>
                    <div className="mxd-article__meta loading-item">
                      <div className="mxd-article__data">
                        <span className="tag tag-m meta-tag slash-tag">{articleDate}</span>
                        <span className="tag tag-m meta-tag">{post.readTime}</span>
                      </div>
                    </div>
                  </CommonLoadItem>
                </div>

                <CommonLoadItem index={2}>
                  <div className="mxd-article__thumb loading-item">
                    <Image alt={post.title} src={post.image} width={1920} height={1200} />
                  </div>
                </CommonLoadItem>

                <div className="mxd-article__content">
                  <div className="mxd-article__block">
                    <p className="mxd-article__excerpt">
                      {post.excerpt}
                      <span>
                        This post is part of Mario Hodzelmans&apos; writing on AI, strategy,
                        automation, e-commerce and intelligent workflows.
                      </span>
                    </p>
                    <p className="mxd-article__normal">
                      The aim is simple: turn complexity into something usable, measurable
                      and more resilient for the people who rely on it every day.
                    </p>
                  </div>

                  <div className="mxd-article__block block-table-of-contents">
                    <p className="table-of-contents__title">/ Table of contents:</p>
                    <ul className="table-of-contents__nav">
                      <li><SmoothAnchorLink targetId="chapter-01">Context</SmoothAnchorLink></li>
                      <li><SmoothAnchorLink targetId="chapter-02">Approach</SmoothAnchorLink></li>
                      <li><SmoothAnchorLink targetId="chapter-03">Practical use</SmoothAnchorLink></li>
                      <li><SmoothAnchorLink targetId="chapter-04">Friction points</SmoothAnchorLink></li>
                      <li><SmoothAnchorLink targetId="chapter-05">Why it matters</SmoothAnchorLink></li>
                      <li><SmoothAnchorLink targetId="chapter-06">Closing note</SmoothAnchorLink></li>
                    </ul>
                  </div>

                  <div id="chapter-01" className="mxd-article__block">
                    <h3>Context</h3>
                    <p className="mxd-article__normal">
                      Most digital work fails when strategy, systems and execution drift apart.
                      AI becomes useful when it is applied inside clear workflows with defined
                      ownership.
                    </p>
                  </div>
                  <div className="mxd-article__block block-quote">
                    <blockquote>
                      <p className="quote__text">
                        AI does not replace judgment.
                        <span>It extends what a good system can do.</span>
                      </p>
                      <p className="quote__cite">
                        <cite>/ Mario Hodzelmans</cite>
                      </p>
                    </blockquote>
                  </div>
                  <div className="mxd-article__block">
                    <p className="mxd-article__normal">
                      My focus is on practical leverage: using AI to support research,
                      decision-making, drafting, automation and content operations without
                      losing control of the process.
                    </p>
                  </div>
                  <div id="chapter-02" className="mxd-article__block">
                    <h3>Approach</h3>
                    <p className="mxd-article__normal">
                      Start with the workflow, identify friction, then decide whether AI,
                      automation or a better system design will remove it most effectively.
                    </p>
                  </div>
                  <div id="chapter-03" className="mxd-article__block">
                    <h3>Practical use</h3>
                    <p className="mxd-article__normal">
                      I use AI in research, content creation, e-commerce operations, knowledge
                      management and internal tooling. The goal is to make work more focused,
                      not more chaotic.
                    </p>
                  </div>
                  <div id="chapter-04" className="mxd-article__block">
                    <h3>Friction points</h3>
                    <p className="mxd-article__normal">
                      Common blockers are disconnected tools, unclear responsibilities,
                      inconsistent data, and too much manual work in places where systems
                      should carry the load.
                    </p>
                  </div>
                  <div id="chapter-05" className="mxd-article__block">
                    <h3>Why it matters</h3>
                    <p className="mxd-article__normal">
                      When systems are clearer, teams move faster, decisions improve, and AI
                      becomes an amplifier instead of a gimmick.
                    </p>
                  </div>
                  <div id="chapter-06" className="mxd-article__block">
                    <h3>Closing note</h3>
                    <p className="mxd-article__normal">
                      Intelligent work is not about more tools. It is about better structure,
                      better flow and better outcomes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BlurSection>
    </CommonLoadAnimation>
  );
}
