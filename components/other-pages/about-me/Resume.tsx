"use client";

import PinnedSection from "@/components/animations/PinnedSection";
import CommonAnimatedText from "@/components/animations/CommonAnimatedText";
import { CommonScrollAnimated } from "@/components/animations/CommonScrollAnimated";
import TextScramble from "@/components/animations/TextScramble";

const experience = [
  { role: "Director Innovation & Digital Strategy", company: "Dr. Rath Health Programs B.V.", date: "2026 - now" },
  { role: "eCommerce Manager", company: "Dr. Rath Health Programs B.V.", date: "2015 - 2026" },
  { role: "Freelance E-commerce & Digital Consultant", company: "MEDIADUSTRY", date: "2012 - now" },
  { role: "Junior eCommerce Manager", company: "Wallsupply Group", date: "2014 - 2015" },
  { role: "Co-Founder", company: "Starterscene, blogs writing about IT startups", date: "2012 - 2015" },
];

const education = [
  { role: "Communication & Multimedia Design", company: "Zuyd University of Applied Sciences", date: "2006 - 2011" },
  { role: "HAVO - Economics, Society & Informatics", company: "Sintermeertencollege", date: "2000 - 2006" },
];

const toolbox = [
  "ChatGPT", "Claude", "Gemini", "Midjourney", "Codex", "Shopify", "Supabase", "Airtable",
  "Zapier", "Make", "n8n", "Payload CMS", "GitHub", "OBS", "Plaude AI",
];

function ResumeList({ items }: { items: { role: string; company: string; date: string }[] }) {
  return (
    <div className="mxd-resume">
      {items.map((item, index) => (
        <div className="mxd-resume__item" key={`${item.role}-${index}`}>
          <div className="container-fluid px-0 mxd-resume__inner">
            <div className="row g-0">
              <div className="col-12 col-xl-4 mxd-grid-item"><div className="mxd-resume__title"><CommonScrollAnimated className="anim-uni-in-up" as="p" animation="inUp">{item.role}</CommonScrollAnimated></div></div>
              <div className="col-12 col-xl-5 mxd-grid-item"><div className="mxd-resume__link"><CommonScrollAnimated className="anim-uni-in-up" as="p" animation="inUp">{item.company}</CommonScrollAnimated></div></div>
              <div className="col-12 col-xl-3 mxd-grid-item"><div className="mxd-resume__date"><CommonScrollAnimated className="anim-uni-in-up" as="p" animation="inUp">{item.date}</CommonScrollAnimated></div></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Resume() {
  return (
    <>
      <PinnedSection blurSection className="mxd-section padding-top-number padding-bottom-default">
        <PinnedSection.Inner>
          <div className="mxd-container grid-l-container">
            <div className="mxd-block">
              <div className="mxd-section-title">
                <div className="container-fluid p-0">
                  <div className="row g-0">
                    <div className="col-12 col-xl-4 mxd-grid-item">
                      <div className="mxd-section-title__data top-number">
                        <CommonScrollAnimated className="mxd-section-title__number anim-uni-in-up" as="div" animation="inUp">
                          <TextScramble className="title-number mxd-scramble">/01</TextScramble>
                        </CommonScrollAnimated>
                      </div>
                    </div>
                    <div className="col-12 col-xl-8 mxd-grid-item">
                      <div className="mxd-section-title__title pre-caption-extra">
                        <CommonAnimatedText as="h2" className="mxd-split-lines" animation="splitLines">
                          Digital work only works when it is connected.
                        </CommonAnimatedText>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mxd-section-info">
                <div className="container-fluid p-0">
                  <div className="row g-0 d-flex flex-column-reverse flex-xl-row">
                    <div className="col-12 col-xl-4 mxd-grid-item" />
                    <div className="col-12 col-xl-8 mxd-grid-item">
                      <div className="mxd-section-info__descr">
                        <CommonAnimatedText as="p" className="t-extra t-bold mxd-split-lines" animation="splitLines">
                          Digital work is no longer just about websites, campaigns, or tools. It is about connecting strategy, data, people, and AI into systems that reduce friction and create better decisions. My work sits between technology, communication, and execution.
                        </CommonAnimatedText>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mxd-block">
              <div className="mxd-section-subtitle padding-info-top">
                <div className="container-fluid p-0"><div className="row g-0"><div className="col-12 col-xl-4 mxd-grid-item" /><div className="col-12 col-xl-8 mxd-grid-item"><div className="mxd-section-subtitle__tagline"><CommonScrollAnimated className="anim-uni-in-up" as="p" animation="inUp"><span className="tag tag-m meta-tag">[01] Experience</span></CommonScrollAnimated></div></div></div></div>
              </div>
            </div>
            <div className="mxd-block"><ResumeList items={experience} /></div>

            <div className="mxd-block">
              <div className="mxd-section-subtitle padding-default">
                <div className="container-fluid p-0"><div className="row g-0"><div className="col-12 col-xl-4 mxd-grid-item" /><div className="col-12 col-xl-8 mxd-grid-item"><div className="mxd-section-subtitle__tagline"><CommonScrollAnimated className="anim-uni-in-up" as="p" animation="inUp"><span className="tag tag-m meta-tag">[02] Education</span></CommonScrollAnimated></div></div></div></div>
              </div>
            </div>
            <div className="mxd-block"><ResumeList items={education} /></div>

            <div className="mxd-block">
              <div className="mxd-section-subtitle padding-default">
                <div className="container-fluid p-0"><div className="row g-0"><div className="col-12 col-xl-4 mxd-grid-item" /><div className="col-12 col-xl-8 mxd-grid-item"><div className="mxd-section-subtitle__tagline"><CommonScrollAnimated className="anim-uni-in-up" as="p" animation="inUp"><span className="tag tag-m meta-tag">[03] Everyday toolbox</span></CommonScrollAnimated></div></div></div></div>
              </div>
            </div>
            <div className="mxd-block">
              <div className="mxd-resume">
                <div className="container-fluid px-0 mxd-resume__inner">
                  <div className="row g-0">
                    <div className="col-12 col-xl-4 mxd-grid-item"><div className="mxd-resume__title"><p>Current stack</p></div></div>
                    <div className="col-12 col-xl-8 mxd-grid-item">
                      <div className="mxd-resume__link">
                        <p>{toolbox.join(" · ")}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </PinnedSection.Inner>
      </PinnedSection>
    </>
  );
}
