import BlurSection from "@/components/animations/BlurSection";
import CommonAnimatedText from "@/components/animations/CommonAnimatedText";
import { CommonCardBatchAnimated } from "@/components/animations/CommonScrollAnimated";

const stack = [
  ["Strategic Thinking", "Claude Opus · ChatGPT · Gemini", "Used for strategy, research, decision support and systems thinking."],
  ["AI Development", "Codex · GitHub · Supabase · Vercel · Lovable", "Building AI-powered applications, workflows and digital products."],
  ["Automation", "n8n · Make · Zapier", "Connecting systems and eliminating repetitive work."],
  ["Knowledge Systems", "Obsidian · Airtable · Google Workspace · Dropbox", "Creating searchable, reusable and AI-ready knowledge ecosystems."],
  ["E-Commerce", "Shopify · WooCommerce · Sana Commerce · Google Merchant Center", "Managing international multi-market e-commerce environments."],
  ["Content & Media", "Midjourney · Runway · Suno · ElevenLabs", "Creating AI-assisted content, visuals, video and audio workflows."],
];

export default function Partners() {
  return (
    <BlurSection className="mxd-section padding-top-title padding-bottom-tag-m">
      <div className="mxd-container grid-l-container">
        <div className="mxd-block">
          <div className="container-fluid p-0">
            <div className="row g-0">
              <div className="col-12 col-xl-4 mxd-grid-item">
                <div className="mxd-section-title pre-grid-xl-mobile">
                  <div className="mxd-section-title__title">
                    <CommonAnimatedText as="h2" className="reveal-type" animation="revealType">AI Stack</CommonAnimatedText>
                    <p className="t-medium">The systems, platforms and models I use to design, automate and scale intelligent organizations.</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-xl-8">
                <div className="mxd-clients">
                  <div className="mxd-clients__row">
                    <div className="container-fluid p-0">
                      <div className="row g-0">
                        {stack.map(([title, tools, description]) => (
                          <CommonCardBatchAnimated key={title} className="col-12 col-lg-4 mxd-clients__item mxd-grid-item animate-card-3" as="div" columns={3}>
                            <div className="mxd-clients__logo"><h3>{title}</h3></div>
                            <div className="mxd-clients__descr"><p className="t-bold">{tools}</p><p className="t-medium">{description}</p></div>
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
