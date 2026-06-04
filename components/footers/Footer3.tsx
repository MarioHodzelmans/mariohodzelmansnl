import BlurSection from "@/components/animations/BlurSection";
import CommonAnimatedText from "../animations/CommonAnimatedText";
import {
  CommonScrollAnimated,
  CommonScrollAnimatedLink,
} from "@/components/animations/CommonScrollAnimated";
import TextScramble from "@/components/animations/TextScramble";
import FooterBackToTop from "@/components/footers/FooterBackToTop";
export default function Footer3({ name = "MARIO" }: { name?: string }) {
  return (
    <BlurSection as="footer" className="mxd-footer">
      <div className="mxd-container grid-l-container">
        {/* Footer Block - Navigation v1 Start */}
        <div className="mxd-block">
          <div className="mxd-footer__footer-blocks mxd-grid-item">
            <div className="footer-blocks__nav-v01">
              <ul className="footer-nav-v01">
                <li className="footer-nav-v01__item">
                  <CommonScrollAnimatedLink
                    className="anim-uni-slide-down"
                    href={`/`}
                    animation="slideDownLine"
                  >
                    <TextScramble className="mxd-scramble mxd-slide-down">
                      / 01 Home
                    </TextScramble>
                  </CommonScrollAnimatedLink>
                </li>
                <li className="footer-nav-v01__item">
                  <CommonScrollAnimatedLink
                    className="anim-uni-slide-down"
                    href={`/works-grid-sticky`}
                    animation="slideDownLine"
                  >
                    <TextScramble className="mxd-scramble mxd-slide-down">
                      / 02 Work
                    </TextScramble>
                  </CommonScrollAnimatedLink>
                </li>
                <li className="footer-nav-v01__item">
                  <CommonScrollAnimatedLink
                    className="anim-uni-slide-down"
                    href={`/about-me`}
                    animation="slideDownLine"
                  >
                    <TextScramble className="mxd-scramble mxd-slide-down">
                      / 03 About
                    </TextScramble>
                  </CommonScrollAnimatedLink>
                </li>
                <li className="footer-nav-v01__item">
                  <CommonScrollAnimatedLink
                    className="anim-uni-slide-down"
                    href={`/blog-standard`}
                    animation="slideDownLine"
                  >
                    <TextScramble className="mxd-scramble mxd-slide-down">
                      / 04 Insights
                    </TextScramble>
                  </CommonScrollAnimatedLink>
                </li>
                <li className="footer-nav-v01__item">
                  <CommonScrollAnimatedLink
                    className="anim-uni-slide-down"
                    href={`/contact`}
                    animation="slideDownLine"
                  >
                    <TextScramble className="mxd-scramble mxd-slide-down">
                      / 05 Contact
                    </TextScramble>
                  </CommonScrollAnimatedLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Footer Block - Navigation v1 End */}
        {/* Footer Block - Info Columns Start */}
        <div className="mxd-block">
          <div className="mxd-footer__footer-blocks">
            <div className="footer-blocks__column mxd-grid-item justify-start">
              <div className="footer-blocks__data justify-start">
                <CommonScrollAnimated
                  className="footer-data anim-uni-slide-down"
                  as="p"
                  animation="slideDownLine"
                >
                  <span>Mario Hodzelmans<br />AI Systems Architect<br />Director of Innovation &amp; Digital Strategy</span>
                </CommonScrollAnimated>
                <p className="footer-data">
                  <CommonScrollAnimated
                    className="anim-uni-slide-down"
                    href="mailto:mariohodzelmans@gmail.com?subject=Message%20from%20your%20site"
                    as="a"
                    animation="slideDownLine"
                  >
                    <TextScramble className="mxd-scramble">
                      mariohodzelmans@gmail.com
                    </TextScramble>
                  </CommonScrollAnimated>
                </p>
                <CommonScrollAnimated
                  className="footer-data anim-uni-slide-down"
                  as="p"
                  animation="slideDownLine"
                >
                  <span>Voerendaal, Limburg<br />The Netherlands<br />50.882419° N, 5.924062° E</span>
                </CommonScrollAnimated>
              </div>
            </div>
            <div className="footer-blocks__column mxd-grid-item justify-end">
              <div className="footer-blocks__data justify-end">
                <CommonScrollAnimated
                  className="footer-data anim-uni-slide-down"
                  as="p"
                  animation="slideDownLine"
                >
                  <span className="mxd-slide-down">
                    AI Systems Architect
                  </span>
                </CommonScrollAnimated>
                <CommonScrollAnimated
                  className="footer-data anim-uni-slide-down"
                  as="p"
                  animation="slideDownLine"
                >
                  <span className="mxd-slide-down">
                    ©2026 Mario Hodzelmans. All rights reserved.
                  </span>
                </CommonScrollAnimated>
              </div>
            </div>
          </div>
        </div>
        {/* Footer Block - Info Columns End */}
        {/* Footer Block - Fullwidth Text Start */}
        <div className="mxd-block">
          <div className="mxd-footer__fw-mark mxd-grid-item">
            <div className="fw-mark__wrap">
              <div className="fw-mark__content">
                <CommonAnimatedText
                  as="span"
                  className="anim-uni-chars"
                  animation="animChars"
                >
                  {name}
                </CommonAnimatedText>
              </div>
            </div>
          </div>
        </div>
        {/* Footer Block - Fullwidth Text End */}
        {/* Footer Block - Links Start */}
        <div className="mxd-block">
          <div className="mxd-footer__footer-blocks bottom-blocks">
            <div className="footer-blocks__column mxd-grid-item justify-start">
              <div className="footer-blocks__socials">
                <CommonScrollAnimated
                  className="mxd-socials-line anim-uni-fade-in"
                  as="ul"
                  animation="fadeIn"
                >
                  <li>
                    <a
                      className="mxd-socials-line__link"
                      href="https://www.linkedin.com/in/mariohodzelmans/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <TextScramble className="mxd-scramble">
                        LinkedIn
                      </TextScramble>
                    </a>
                  </li>
                  <li>
                    <a
                      className="mxd-socials-line__link"
                      href="https://www.instagram.com/mariohodzelmans/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <TextScramble className="mxd-scramble">
                        Instagram
                      </TextScramble>
                    </a>
                  </li>
                  <li>
                    <a
                      className="mxd-socials-line__link"
                      href="https://www.facebook.com/mario.hodzelmans/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <TextScramble className="mxd-scramble">
                        Facebook
                      </TextScramble>
                    </a>
                  </li>
                  <li>
                    <a
                      className="mxd-socials-line__link"
                      href="https://x.com/MarioHodzelmans"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <TextScramble className="mxd-scramble">
                        X (Twitter)
                      </TextScramble>
                    </a>
                  </li>
                  <li>
                    <a
                      className="mxd-socials-line__link"
                      href="https://github.com/mariohodzelmans"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <TextScramble className="mxd-scramble">
                        GitHub
                      </TextScramble>
                    </a>
                  </li>
                  <li>
                    <a
                      className="mxd-socials-line__link"
                      href="https://www.youtube.com/@mariohodzelmans"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <TextScramble className="mxd-scramble">
                        YouTube
                      </TextScramble>
                    </a>
                  </li>
                </CommonScrollAnimated>
              </div>
            </div>
            <div className="footer-blocks__column mxd-grid-item justify-end">
              <CommonScrollAnimated
                className="footer-blocks__controls anim-uni-fade-in"
                as="div"
                animation="fadeIn"
              >
                <FooterBackToTop />
              </CommonScrollAnimated>
            </div>
          </div>
        </div>
        {/* Footer Block - Links End */}
      </div>
    </BlurSection>
  );
}
