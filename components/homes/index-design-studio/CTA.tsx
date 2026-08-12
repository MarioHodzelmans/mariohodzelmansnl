import Link from "next/link";
import { CommonScrollAnimated } from "@/components/animations/CommonScrollAnimated";
import CommonAnimatedText from "@/components/animations/CommonAnimatedText";
import CommonGravitySection from "@/components/animations/CommonGravitySection";
import CommonGravityPermanentObjects from "@/components/animations/CommonGravityPermanentObjects";
import TextScramble from "@/components/animations/TextScramble";
export default function CTA() {
  return (
    <>
      <div className="mxd-section">
        <div className="mxd-container fullwidth-container">
          {/* Block - CTA with Matter.js Objects Start */}
          <div className="mxd-block">
            <CommonGravitySection>
              <div className="mxd-promo mxd-gravity-section accent">
                <div className="mxd-promo__wrap">
                  <CommonGravityPermanentObjects />
                  <div className="mxd-promo__content">
                    <CommonScrollAnimated
                      className="mxd-promo__btngroup anim-uni-in-up"
                      as="div"
                      animation="inUp"
                    >
                      <Link
                        className="btn btn-line btn-line-permanent"
                        href={`/contact`}
                      >
                        <TextScramble className="btn-caption mxd-scramble">
                          Start a Conversation
                        </TextScramble>
                      </Link>
                    </CommonScrollAnimated>
                    <div className="mxd-promo__caption">
                      <Link
                        className="active-cursor-permanent"
                        data-cursor-text="Get in Touch"
                        href={`/contact`}
                      >
                        <CommonAnimatedText
                          as="h2"
                          className="permanent reveal-type"
                          animation="revealType"
                        >
                          Interested In The Same Questions?
                        </CommonAnimatedText>
                        <p className="t-large permanent">
                          I&apos;m always open to exchanging ideas about AI,
                          digital strategy, e-commerce and the systems behind
                          modern organizations.
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </CommonGravitySection>
          </div>
          {/* Block - CTA with Matter.js Objects End */}
        </div>
      </div>
    </>
  );
}
