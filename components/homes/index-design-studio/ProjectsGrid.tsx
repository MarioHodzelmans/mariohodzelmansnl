import BlurSection from "@/components/animations/BlurSection";
import CommonAnimatedText from "@/components/animations/CommonAnimatedText";
import { CommonCardBatchAnimated } from "@/components/animations/CommonScrollAnimated";
import MxdImgAnim from "@/components/animations/MxdImgAnim";
import TextScramble from "@/components/animations/TextScramble";
import Image from "next/image";
import Link from "next/link";

const cases = [
  {
    title: "AI Transformation @ Dr. Rath",
    description: "Designing AI-driven workflows, digital strategy and operational systems for an international health organization.",
    tags: ["AI Strategy", "Digital Transformation", "Automation"],
    image: "/img/works/showcase-grid-x3/pr01-01.webp",
    width: 853,
    height: 1280,
  },
  {
    title: "AI Knowledge Operating System",
    description: "Building a second-brain style knowledge ecosystem powered by AI, structured data and automation.",
    tags: ["Knowledge Systems", "AI Agents", "Automation"],
    image: "/img/works/showcase-grid-x3/pr02-01.webp",
    width: 1280,
    height: 843,
  },
  {
    title: "International E-Commerce Ecosystem",
    description: "Managing and improving multi-market and multi-language e-commerce operations across Europe and the USA.",
    tags: ["E-Commerce", "Systems Architecture", "Growth"],
    image: "/img/works/showcase-grid-x3/pr03-01.webp",
    width: 1280,
    height: 1280,
  },
  {
    title: "Executive AI Agent Architecture",
    description: "Designing AI agents for memory, strategy, decision support and organizational intelligence.",
    tags: ["AI Agents", "Strategy", "Intelligent Systems"],
    image: "/img/works/showcase-grid-x3/pr04-01.webp",
    width: 1280,
    height: 843,
  },
];

export default function ProjectsGrid() {
  return (
    <BlurSection id="works" className="mxd-section bg-color-base padding-top-title">
      <div className="mxd-container grid-l-container">
        <div className="mxd-block">
          <div className="mxd-section-title pre-grid">
            <div className="container-fluid p-0">
              <div className="row g-0">
                <div className="col-12 col-xl-8 mxd-grid-item">
                  <div className="mxd-section-title__title pre-caption">
                    <CommonAnimatedText as="h2" className="reveal-type" animation="revealType">
                      Featured case<br />studies
                    </CommonAnimatedText>
                  </div>
                </div>
                <div className="col-12 col-xl-4 mxd-grid-item">
                  <div className="mxd-section-title__data top-controls">
                    <div className="mxd-section-title__caption pre-controls">
                      <CommonAnimatedText as="p" className="t-bold t-large mxd-split-lines" animation="splitLines">
                        Selected work across AI, automation, e-commerce and intelligent business systems.
                      </CommonAnimatedText>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mxd-block">
          <div className="mxd-projects-grid">
            <div className="container-fluid p-0">
              <div className="row g-0 mxd-projects-grid__gallery">
                {cases.map((item) => (
                  <CommonCardBatchAnimated key={item.title} className="col-12 col-md-6 mxd-project-item animate-card-3" as="div" columns={2}>
                    <Link className="mxd-project-item__media active-cursor-permanent" data-cursor-text="View Work" href="/works-grid-sticky">
                      <MxdImgAnim main={<Image alt={item.title} src={item.image} width={item.width} height={item.height} />} absolutes={[]} />
                    </Link>
                    <div className="mxd-project-item__caption">
                      <div className="mxd-project-item__name">
                        <Link className="project-name-s" href="/works-grid-sticky">{item.title}</Link>
                      </div>
                      <p className="t-medium">{item.description}</p>
                      <div className="mxd-project-item__tags">
                        {item.tags.map((tag) => <TextScramble key={tag} className="tag tag-s tag-medium mxd-scramble">{tag}</TextScramble>)}
                      </div>
                    </div>
                  </CommonCardBatchAnimated>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </BlurSection>
  );
}
