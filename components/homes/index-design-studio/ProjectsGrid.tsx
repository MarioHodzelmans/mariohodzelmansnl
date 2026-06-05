import BlurSection from "@/components/animations/BlurSection";
import CommonAnimatedText from "@/components/animations/CommonAnimatedText";
import { CommonCardBatchAnimated } from "@/components/animations/CommonScrollAnimated";
import MxdImgAnim from "@/components/animations/MxdImgAnim";
import TextScramble from "@/components/animations/TextScramble";
import Image from "next/image";
import Link from "next/link";
import { getFeaturedCases } from "@/lib/cases";

export default async function ProjectsGrid() {
  const cases = await getFeaturedCases(4);

  if (!cases.length) {
    return null;
  }

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
                        Selected cases across AI, automation, e-commerce and intelligent business systems.
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
                    <Link className="mxd-project-item__media active-cursor-permanent" data-cursor-text="View Case" href={`/cases/${item.slug}`}>
                      <MxdImgAnim main={<Image alt={item.title} src={item.featuredImage} width={1280} height={853} />} absolutes={[]} />
                    </Link>
                    <div className="mxd-project-item__caption">
                      <div className="mxd-project-item__name">
                        <Link className="project-name-s" href={`/cases/${item.slug}`}>{item.title}</Link>
                      </div>
                      <p className="t-medium">{item.excerpt}</p>
                      <div className="mxd-project-item__tags">
                        {[item.category, ...item.services].filter(Boolean).slice(0, 3).map((tag) => <TextScramble key={tag} className="tag tag-s tag-medium mxd-scramble">{tag}</TextScramble>)}
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
