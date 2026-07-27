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
          background: var(--base);
          color: var(--t-bright);
          padding: clamp(9rem, 15vw, 14rem) clamp(1.25rem, 4vw, 4rem) clamp(6rem, 12vw, 12rem);
          transition: background-color 320ms ease, color 320ms ease;
        }

        .resources-hero {
          max-width: 104rem;
          margin: 0 auto clamp(5rem, 10vw, 9rem);
        }

        .resources-hero__topline {
          display: flex;
          justify-content: space-between;
          gap: 2rem;
          align-items: center;
          margin-bottom: clamp(2.75rem, 5vw, 5rem);
          padding-bottom: 1.25rem;
          border-bottom: 1px solid var(--t-muted-extra);
        }

        .resources-eyebrow,
        .resources-count {
          margin: 0;
          color: var(--t-medium);
          font-size: clamp(0.95rem, 0.95vw, 1.1rem);
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .resources-count {
          text-align: right;
        }

        .resources-hero h1 {
          max-width: 11ch;
          margin: 0;
          color: var(--t-bright);
          font-size: clamp(4.4rem, 10.8vw, 10.5rem);
          font-weight: 500;
          line-height: 0.89;
          letter-spacing: -0.068em;
        }

        .resources-hero__footer {
          margin-top: clamp(3.5rem, 7vw, 6.5rem);
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(18rem, 0.7fr);
          gap: clamp(3rem, 7vw, 8rem);
          align-items: end;
        }

        .resources-intro,
        .resources-note {
          margin: 0;
        }

        .resources-intro {
          max-width: 50rem;
          color: var(--t-bright);
          font-size: clamp(1.4rem, 2.1vw, 1.9rem);
          line-height: 1.48;
          letter-spacing: -0.025em;
        }

        .resources-note {
          max-width: 33rem;
          justify-self: end;
          color: var(--t-medium);
          font-size: clamp(1.05rem, 1.15vw, 1.25rem);
          line-height: 1.6;
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
