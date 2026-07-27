import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources | Mario Hodzelmans",
  description:
    "A curated library of design inspiration, creative platforms, typography tools and visual resources selected by Mario Hodzelmans.",
};

const resources = [
  {
    name: "Godly",
    url: "https://godly.website",
    category: "Website inspiration",
    description: "Curated website inspiration for designers, with a strong focus on modern art direction, interaction and motion.",
  },
  {
    name: "Haikei",
    url: "https://haikei.app",
    category: "Visual generator",
    description: "A free generator for SVG backgrounds, blobs, waves and layered shapes that are ready to use in digital projects.",
  },
  {
    name: "Fontjoy",
    url: "https://fontjoy.com",
    category: "Typography",
    description: "An AI-assisted font pairing generator for quickly discovering balanced and distinctive typography combinations.",
  },
  {
    name: "Color Hunt",
    url: "https://colorhunt.co",
    category: "Colour",
    description: "A free collection of curated colour palettes for websites, brands, interfaces and other creative projects.",
  },
  {
    name: "Red Dot",
    url: "https://www.red-dot.org",
    category: "Award-winning design",
    description: "An international design award and archive showcasing recognised work across product, brand and communication design.",
  },
  {
    name: "Behance",
    url: "https://www.behance.net",
    category: "Creative work",
    description: "A global platform for discovering detailed creative projects, visual identities, campaigns and digital experiences.",
  },
  {
    name: "Dribbble",
    url: "https://dribbble.com",
    category: "UI inspiration",
    description: "A broad visual discovery platform for interface design, illustration, branding, animation and digital product concepts.",
  },
] as const;

export default function ResourcesPage() {
  return (
    <main className="resources-page">
      <section className="resources-hero">
        <p className="resources-eyebrow">/ Curated library</p>
        <h1>Resources for better digital work.</h1>
        <p className="resources-intro">
          A growing selection of websites, tools and platforms I use to explore
          design, typography, colour, motion and creative direction.
        </p>
      </section>

      <section className="resources-grid" aria-label="Curated resources">
        {resources.map((resource, index) => (
          <a
            className="resource-card"
            href={resource.url}
            key={resource.name}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="resource-card__topline">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <span>{resource.category}</span>
            </div>
            <div>
              <h2>{resource.name}</h2>
              <p>{resource.description}</p>
            </div>
            <span className="resource-card__link">Visit website ↗</span>
          </a>
        ))}
      </section>

      <style>{`
        .resources-page {
          min-height: 100vh;
          background: #f4f1eb;
          color: #111;
          padding: clamp(8rem, 14vw, 13rem) clamp(1.25rem, 4vw, 4rem) clamp(4rem, 8vw, 8rem);
        }

        .resources-hero {
          max-width: 104rem;
          margin: 0 auto clamp(4rem, 9vw, 8rem);
        }

        .resources-eyebrow {
          margin: 0 0 1.5rem;
          font-size: 0.78rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          opacity: 0.58;
        }

        .resources-hero h1 {
          max-width: 12ch;
          margin: 0;
          font-size: clamp(3.4rem, 10vw, 9.5rem);
          font-weight: 500;
          line-height: 0.9;
          letter-spacing: -0.065em;
        }

        .resources-intro {
          max-width: 42rem;
          margin: clamp(2rem, 5vw, 4rem) 0 0 auto;
          font-size: clamp(1.05rem, 1.8vw, 1.45rem);
          line-height: 1.5;
          letter-spacing: -0.02em;
          opacity: 0.72;
        }

        .resources-grid {
          max-width: 104rem;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          border-top: 1px solid rgba(17, 17, 17, 0.22);
          border-left: 1px solid rgba(17, 17, 17, 0.22);
        }

        .resource-card {
          min-height: 27rem;
          padding: clamp(1.5rem, 3vw, 3rem);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 4rem;
          color: inherit;
          text-decoration: none;
          border-right: 1px solid rgba(17, 17, 17, 0.22);
          border-bottom: 1px solid rgba(17, 17, 17, 0.22);
          transition: background-color 220ms ease, color 220ms ease;
        }

        .resource-card:hover {
          background: #111;
          color: #f4f1eb;
        }

        .resource-card__topline {
          display: flex;
          justify-content: space-between;
          gap: 1rem;
          font-size: 0.72rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          opacity: 0.58;
        }

        .resource-card h2 {
          margin: 0 0 1.2rem;
          font-size: clamp(2.2rem, 4vw, 4.8rem);
          font-weight: 500;
          line-height: 0.95;
          letter-spacing: -0.055em;
        }

        .resource-card p {
          max-width: 36rem;
          margin: 0;
          font-size: 1rem;
          line-height: 1.6;
          opacity: 0.68;
        }

        .resource-card__link {
          font-size: 0.82rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        @media (max-width: 800px) {
          .resources-grid {
            grid-template-columns: 1fr;
          }

          .resource-card {
            min-height: 23rem;
          }
        }
      `}</style>
    </main>
  );
}
