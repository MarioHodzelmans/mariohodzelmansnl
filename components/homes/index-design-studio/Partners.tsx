import BlurSection from "@/components/animations/BlurSection";
import CommonAnimatedText from "@/components/animations/CommonAnimatedText";
import { CommonCardBatchAnimated } from "@/components/animations/CommonScrollAnimated";

const stack = [
  [
    "Strategy & Research",
    "Claude Opus · ChatGPT · Gemini",
    "Framing opportunities, testing assumptions and supporting better decisions.",
  ],
  [
    "AI-Native Development",
    "Codex · GitHub · Supabase · Vercel · Lovable",
    "Turning ideas into maintainable prototypes and production systems.",
  ],
  [
    "Workflow Automation",
    "n8n · Make · Zapier",
    "Connecting people, data and tools around repeatable workflows.",
  ],
  [
    "Knowledge Architecture",
    "Obsidian · Airtable · Google Workspace · Dropbox",
    "Structuring reusable context, team memory and AI-ready knowledge.",
  ],
  [
    "Commerce Operations",
    "Shopify · WooCommerce · Sana Commerce · Google Merchant Center",
    "Designing connected workflows across markets, channels and teams.",
  ],
  [
    "Creative Experimentation",
    "Midjourney · Runway · Suno · ElevenLabs",
    "Exploring new ways to create and communicate with generative media.",
  ],
];

export default function Partners() {
  return (
    <BlurSection className="mxd-section ai-stack-section padding-top-title padding-bottom-tag-m">
      <div className="mxd-container grid-l-container">
        <div className="mxd-block">
          <div className="container-fluid p-0">
            <div className="row g-0">
              <div className="col-12 col-xl-4 mxd-grid-item">
                <div className="mxd-section-title pre-grid-xl-mobile">
                  <div className="mxd-section-title__title">
                    <CommonAnimatedText
                      as="h2"
                      className="reveal-type"
                      animation="revealType"
                    >
                      How I work
                    </CommonAnimatedText>
                    <p className="t-medium">
                      The disciplines, tools and systems I combine to move from
                      strategic questions to working digital systems.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-xl-8">
                <div className="mxd-clients ai-stack-grid">
                  <div className="mxd-clients__row">
                    <div className="container-fluid p-0">
                      <div className="row g-0">
                        {stack.map(([title, tools, description]) => (
                          <CommonCardBatchAnimated
                            key={title}
                            className="col-12 col-lg-4 mxd-clients__item mxd-grid-item animate-card-3"
                            as="div"
                            columns={3}
                          >
                            <div className="mxd-clients__logo ai-stack-card__title">
                              <h3>{title}</h3>
                            </div>
                            <div className="mxd-clients__descr ai-stack-card__content">
                              <p className="t-bold ai-stack-card__tools">
                                {tools}
                              </p>
                              <p className="t-medium">{description}</p>
                            </div>
                          </CommonCardBatchAnimated>
                        ))}
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
  );
}
