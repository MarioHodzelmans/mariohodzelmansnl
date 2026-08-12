import type { Metadata } from "next";
import FeaturedResources from "./FeaturedResources";
import ResourcesLibrary from "./ResourcesLibrary";
import BenchmarkResources from "./BenchmarkResources";
import PeopleInspiration from "./PeopleInspiration";
import PromptResources from "./PromptResources";

export const metadata: Metadata = {
  title: "Resources | Mario Hodzelmans",
  description:
    "A curated library of AI tools, development platforms, automation systems, creative prompts and design resources selected by Mario Hodzelmans.",
  alternates: {
    canonical: "/resources",
  },
  openGraph: {
    title: "Resources | Mario Hodzelmans",
    description:
      "A curated library of AI tools, development platforms, automation systems, creative prompts and design resources selected by Mario Hodzelmans.",
    url: "/resources",
  },
  twitter: {
    title: "Resources | Mario Hodzelmans",
    description:
      "A curated library of AI tools, development platforms, automation systems, creative prompts and design resources selected by Mario Hodzelmans.",
  },
};

const stats = [
  { value: "75+", label: "Tools, platforms and people" },
  { value: "12", label: "Curated categories" },
  { value: "Daily", label: "Used for work and inspiration" },
] as const;

export default function ResourcesPage() {
  return (
    <main className="resources-page">
      <section className="resources-hero">
        <div className="resources-hero__topline">
          <p className="resources-eyebrow">/ AI & digital library</p>
          <p className="resources-count">
            Selected tools, systems & inspiration
          </p>
        </div>

        <h1>Resources for intelligent digital work.</h1>

        <div className="resources-hero__footer">
          <p className="resources-intro">
            A growing collection of the AI platforms, development tools,
            automation systems, people and design resources that influence how I
            build intelligent digital products and long-term knowledge systems.
          </p>
          <p className="resources-note">
            Every resource opens in a new tab. Previews are generated
            automatically and may take a moment to appear on first load.
          </p>
        </div>

        <div className="resources-stats" aria-label="Library statistics">
          {stats.map((stat) => (
            <div className="resources-stat" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <FeaturedResources />
      <PeopleInspiration />
      <BenchmarkResources />
      <PromptResources />
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
          margin: 0 auto clamp(6rem, 11vw, 10rem);
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
          font-size: clamp(1rem, 1vw, 1.15rem);
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
          max-width: 54rem;
          color: var(--t-bright);
          font-size: clamp(1.45rem, 2.2vw, 2rem);
          line-height: 1.46;
          letter-spacing: -0.025em;
        }

        .resources-note {
          max-width: 34rem;
          justify-self: end;
          color: var(--t-medium);
          font-size: clamp(1.08rem, 1.2vw, 1.3rem);
          line-height: 1.6;
        }

        .resources-stats {
          margin-top: clamp(4rem, 8vw, 7rem);
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          border-top: 1px solid var(--t-muted-extra);
          border-bottom: 1px solid var(--t-muted-extra);
        }

        .resources-stat {
          min-height: 12rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 2rem;
          padding: clamp(1.5rem, 2.5vw, 2.5rem);
        }

        .resources-stat + .resources-stat {
          border-left: 1px solid var(--t-muted-extra);
        }

        .resources-stat strong {
          color: var(--t-bright);
          font-size: clamp(3.2rem, 5vw, 6rem);
          font-weight: 500;
          line-height: .9;
          letter-spacing: -.055em;
        }

        .resources-stat span {
          color: var(--t-medium);
          font-size: clamp(1rem, 1.1vw, 1.2rem);
          letter-spacing: .04em;
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

          .resources-stats {
            grid-template-columns: 1fr;
          }

          .resources-stat + .resources-stat {
            border-left: 0;
            border-top: 1px solid var(--t-muted-extra);
          }
        }
      `}</style>
    </main>
  );
}
