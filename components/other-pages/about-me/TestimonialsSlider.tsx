"use client";

import BlurSection from "@/components/animations/BlurSection";
import CommonAnimatedText from "@/components/animations/CommonAnimatedText";
import { CommonScrollAnimated, CommonCardBatchAnimated } from "@/components/animations/CommonScrollAnimated";
import TextScramble from "@/components/animations/TextScramble";

const cards = [
  ["Complexity into clarity", "I look at messy systems, workflows, platforms, and data, then turn them into something people can understand and use."],
  ["Strategy with execution", "Ideas are only useful when they become working systems. I focus on practical implementation, not endless theory."],
  ["AI without the circus", "I use AI to improve workflows, decision-making, content, automation, and creative output. No hype, just useful leverage."],
  ["Human-centered technology", "Technology should make work easier, not louder. The best systems support people instead of replacing common sense."],
];

export default function TestimonialsSlider() {
  return (
    <BlurSection className="mxd-section padding-top-number-mobile padding-bottom-tag-m">
      <div className="mxd-container fullwidth-container">
        <div className="mxd-block">
          <div className="container-fluid p-0">
            <div className="row g-0">
              <div className="col-12 col-xl-4 mxd-grid-item">
                <div className="mxd-container no-padding-right-container">
                  <div className="mxd-section-title pre-grid-xl-mobile">
                    <div className="container-fluid p-0">
                      <div className="row g-0">
                        <div className="col-12"><div className="mxd-section-title__data top-number"><CommonScrollAnimated className="mxd-section-title__number anim-uni-in-up" as="div" animation="inUp"><TextScramble className="title-number mxd-scramble">/04</TextScramble></CommonScrollAnimated></div></div>
                        <div className="col-12"><div className="mxd-section-title__title"><CommonAnimatedText as="h2" className="mxd-split-lines" animation="splitLines">How I work</CommonAnimatedText></div></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-xl-8 mxd-grid-item padding-left-desktop">
                <div className="row g-4">
                  {cards.map(([title, text]) => (
                    <CommonCardBatchAnimated key={title} className="col-12 col-md-6" as="div" columns={2}>
                      <div className="bg-base-tint radius-m p-4 h-100">
                        <h3 className="mb-3">{title}</h3>
                        <p className="t-small">{text}</p>
                      </div>
                    </CommonCardBatchAnimated>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BlurSection>
  );
}
