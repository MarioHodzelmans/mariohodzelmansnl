import BlurSection from "@/components/animations/BlurSection";
import CommonAnimatedText from "@/components/animations/CommonAnimatedText";
import { CommonScrollAnimated } from "@/components/animations/CommonScrollAnimated";
import TextScramble from "@/components/animations/TextScramble";
export default function SectionTitle() {
  return (
    <>
      <BlurSection className="mxd-section bg-color-base padding-top-title padding-bottom-tag-m">
        <div className="mxd-container grid-l-container">
          {/* Block - Section Title & Text Block Start */}
          <div className="mxd-block">
            <div className="container-fluid p-0">
              <div className="row g-0">
                <div className="col-12 col-xl-6 mxd-grid-item">
                  {/* section title */}
                  <div className="mxd-section-title">
                    <div className="mxd-section-title__title pre-caption">
                      <CommonAnimatedText
                        as="h2"
                        className="mxd-split-lines"
                        animation="splitLines"
                      >
                        Location & contact
                      </CommonAnimatedText>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-xl-6 mxd-grid-item">
                  {/* paragraph */}
                  <div className="mxd-section-title__paragraph">
                    <CommonAnimatedText
                      as="p"
                      className="t-bold t-large mxd-split-lines"
                      animation="splitLines"
                    >
                      Building smarter digital systems from the Netherlands.
                      <span>Reach out directly or connect through socials.</span>
                    </CommonAnimatedText>
                  </div>
                  {/* contact data */}
                  <div className="mxd-section-title__datalist">
                    <div className="container-fluid p-0">
                      <div className="row g-0">
                        {/* contact data item */}
                        <div className="col-12 col-md-6 col-xl-5 datalist__item">
                          <div className="datalist__title">
                            <CommonScrollAnimated
                              className="t-bold t-large anim-uni-in-up"
                              as="p"
                              animation="inUp"
                            >
                              The Netherlands
                            </CommonScrollAnimated>
                          </div>
                          <ul>
                            <CommonScrollAnimated
                              className="anim-uni-in-up"
                              as="li"
                              animation="inUp"
                            >
                              <a
                                className="tag tag-s-mobile"
                                href="https://www.google.com/maps/search/?api=1&query=50.882419,5.924062"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                50.882419° N,
                                <br />
                                5.924062° E
                              </a>
                            </CommonScrollAnimated>
                          </ul>
                          <ul>
                            <CommonScrollAnimated
                              className="anim-uni-in-up"
                              as="li"
                              animation="inUp"
                            >
                              <a
                                href="mailto:mariohodzelmans@gmail.com?subject=Message%20from%20your%20site"
                                className="tag tag-s-mobile"
                              >
                                <TextScramble className="mxd-scramble">
                                  mariohodzelmans@gmail.com
                                </TextScramble>
                              </a>
                            </CommonScrollAnimated>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Block - Section Title & Text Block End */}
        </div>
      </BlurSection>
    </>
  );
}
