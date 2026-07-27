import type { Metadata } from "next";
import ResourcesLibrary from "./ResourcesLibrary";

export const metadata: Metadata = {
  title: "Resources | Mario Hodzelmans",
  description:
    "A curated library of design inspiration, creative platforms, typography tools and visual resources selected by Mario Hodzelmans.",
};

export default function ResourcesPage() {
  return (
    <main className="resources-page">
      <section className="resources-hero">
        <div className="resources-hero__topline">
          <p className="resources-eyebrow">/ Curated library</p>
          <p className="resources-count">Selected tools & inspiration</p>
        </div>
        <h1>Resources for better digital work.</h1>
        <div className="resources-hero__footer">
          <p className="resources-intro">
            A growing visual library of websites, tools and platforms I use to
            explore design, typography, colour, motion and creative direction.
          </p>
          <p className="resources-note">
            Every resource opens in a new tab. Website previews are generated
            automatically and may take a moment to appear on first load.
          </p>
        </div>
      </section>

      <ResourcesLibrary />

      <style>{`
        .resources-page {
          min-height: 100vh;
          background: #f4f1eb;
          color: #111;
          padding: clamp(8rem, 14vw, 13rem) clamp(1.25rem, 4vw, 4rem) clamp(5rem, 10vw, 10rem);
        }

        .resources-hero {
          max-width: 104rem;
          margin: 0 auto clamp(4rem, 8vw, 7rem);
        }

        .resources-hero__topline {
          display: flex;
          justify-content: space-between;
          gap: 2rem;
          align-items: center;
          margin-bottom: clamp(2rem, 4vw, 4rem);
          padding-bottom: 1rem;
          border-bottom: 1px solid rgba(17, 17, 17, 0.2);
        }

        .resources-eyebrow,
        .resources-count {
          margin: 0;
          font-size: clamp(0.82rem, 0.8vw, 0.95rem);
          letter-spacing: 0.11em;
          text-transform: uppercase;
        }

        .resources-eyebrow {
          opacity: 0.72;
        }

        .resources-count {
          opacity: 0.42;
          text-align: right;
        }

        .resources-hero h1 {
          max-width: 11ch;
          margin: 0;
          color: #111;
          font-size: clamp(3.8rem, 10.5vw, 10rem);
          font-weight: 500;
          line-height: 0.88;
          letter-spacing: -0.07em;
        }

        .resources-hero__footer {
          margin-top: clamp(2.5rem, 6vw, 5rem);
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(16rem, 0.7fr);
          gap: clamp(2rem, 6vw, 7rem);
          align-items: end;
        }

        .resources-intro,
        .resources-note {
          margin: 0;
        }

        .resources-intro {
          max-width: 48rem;
          font-size: clamp(1.2rem, 1.9vw, 1.65rem);
          line-height: 1.5;
          letter-spacing: -0.025em;
          opacity: 0.78;
        }

        .resources-note {
          max-width: 31rem;
          justify-self: end;
          font-size: clamp(0.92rem, 1vw, 1.05rem);
          line-height: 1.55;
          opacity: 0.5;
        }

        @media (max-width: 760px) {
          .resources-hero__topline {
            align-items: flex-start;
          }

          .resources-hero__footer {
            grid-template-columns: 1fr;
          }

          .resources-note {
            justify-self: start;
          }
        }
      `}</style>
    </main>
  );
}
