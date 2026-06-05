"use client";

import BlurSection from "@/components/animations/BlurSection";
import Link from "next/link";
import CommonLoadAnimation, {
  CommonLoadFade,
  CommonLoadItem,
} from "@/components/animations/CommonLoadAnimation";
import CommonAnimatedText from "@/components/animations/CommonAnimatedText";
import CommonHeroTyped from "@/components/animations/CommonHeroTyped";
import TextScramble from "@/components/animations/TextScramble";

export default function InnerHeadline() {
  return (
    <CommonLoadAnimation>
      <BlurSection className="mxd-section loading-wrap">
        <div className="mxd-container grid-l-container">
          <div className="mxd-block">
            <div className="inner-headline margin-bottom-subtitle">
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
                          <span className="current-item">About</span>
                        </div>
                      </div>
                    </CommonLoadFade>
                  </div>
                  <div className="col-12">
                    <div className="inner-headline__content has-large-title">
                      <div className="container-fluid p-0">
                        <div className="row g-0">
                          <div className="col-12 col-xl-9 mxd-grid-item">
                            <CommonLoadItem index={0}>
                              <div className="inner-headline__title no-sup pre-subtitle-large loading-item">
                                <CommonHeroTyped className="large animated-type">
                                  <b>AI Systems Architect</b>
                                  <b>Digital Strategist</b>
                                </CommonHeroTyped>
                              </div>
                            </CommonLoadItem>
                            <div className="inner-headline__subtitle">
                              <CommonAnimatedText
                                as="a"
                                className="active-cursor-accent loading-split"
                                animation="splitLinesLoad"
                                data-cursor-text="Contact"
                                href="mailto:mariohodzelmans@gmail.com"
                              >
                                👋 Hey, I&apos;m Mario Hodzelmans. I help organizations turn digital
                                complexity into clear systems, smarter workflows, and practical AI
                                solutions that actually work.
                              </CommonAnimatedText>
                            </div>
                          </div>
                          <div className="col-12 col-xl-3 mxd-grid-item">
                            <div className="inner-headline__tags align-end-desktop tags-large-subtitle">
                              <CommonLoadItem index={1}>
                                <TextScramble className="tag tag-m meta-tag mxd-scramble loading-item">AI Strategy</TextScramble>
                              </CommonLoadItem>
                              <CommonLoadItem index={2}>
                                <TextScramble className="tag tag-m meta-tag mxd-scramble loading-item">Intelligent Systems</TextScramble>
                              </CommonLoadItem>
                              <CommonLoadItem index={3}>
                                <TextScramble className="tag tag-m meta-tag mxd-scramble loading-item">E-commerce</TextScramble>
                              </CommonLoadItem>
                              <CommonLoadItem index={4}>
                                <TextScramble className="tag tag-m meta-tag mxd-scramble loading-item">Automation</TextScramble>
                              </CommonLoadItem>
                              <CommonLoadItem index={5}>
                                <TextScramble className="tag tag-m meta-tag mxd-scramble loading-item">Digital Transformation</TextScramble>
                              </CommonLoadItem>
                              <CommonLoadItem index={6}>
                                <TextScramble className="tag tag-m meta-tag mxd-scramble loading-item">Workflow Design</TextScramble>
                              </CommonLoadItem>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
