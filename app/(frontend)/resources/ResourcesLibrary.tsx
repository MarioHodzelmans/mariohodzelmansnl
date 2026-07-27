"use client";

import { useMemo, useState } from "react";

const resources = [
  { name: "Godly", url: "https://godly.website", category: "Websites", description: "Curated website inspiration with a strong focus on modern art direction, interaction and motion." },
  { name: "Haikei", url: "https://haikei.app", category: "Tools", description: "A free generator for SVG backgrounds, blobs, waves and layered shapes for digital projects." },
  { name: "Fontjoy", url: "https://fontjoy.com", category: "Typography", description: "An AI-assisted font pairing generator for discovering balanced and distinctive typography combinations." },
  { name: "Color Hunt", url: "https://colorhunt.co", category: "Colour", description: "A free collection of curated colour palettes for websites, brands and digital interfaces." },
  { name: "Red Dot", url: "https://www.red-dot.org", category: "Awards", description: "An international design award and archive showcasing recognised product, brand and communication design." },
  { name: "Behance", url: "https://www.behance.net", category: "Creative", description: "A global platform for detailed creative projects, visual identities, campaigns and digital experiences." },
  { name: "Dribbble", url: "https://dribbble.com", category: "UI", description: "A broad visual discovery platform for interface design, illustration, branding and digital product concepts." },
] as const;

const categories = ["All", ...Array.from(new Set(resources.map((resource) => resource.category)))] as const;

function screenshotUrl(url: string) {
  return `https://image.thum.io/get/width/1400/crop/900/noanimate/${url}`;
}

export default function ResourcesLibrary() {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>("All");
  const [query, setQuery] = useState("");

  const visibleResources = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return resources.filter((resource) => {
      const matchesCategory = activeCategory === "All" || resource.category === activeCategory;
      const matchesQuery =
        !normalizedQuery ||
        resource.name.toLowerCase().includes(normalizedQuery) ||
        resource.category.toLowerCase().includes(normalizedQuery) ||
        resource.description.toLowerCase().includes(normalizedQuery);
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  function changeCategory(category: (typeof categories)[number]) {
    const scrollPosition = window.scrollY;
    setActiveCategory(category);

    requestAnimationFrame(() => {
      window.scrollTo({ top: scrollPosition, left: 0, behavior: "auto" });
      requestAnimationFrame(() => {
        window.scrollTo({ top: scrollPosition, left: 0, behavior: "auto" });
      });
    });
  }

  return (
    <>
      <section className="resources-controls" aria-label="Filter resources">
        <div className="resources-filters" role="group" aria-label="Categories">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={activeCategory === category ? "is-active" : ""}
              aria-pressed={activeCategory === category}
              onMouseDown={(event) => event.preventDefault()}
              onClick={() => changeCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <label className="resources-search">
          <span>Search</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search resources"
          />
        </label>
      </section>

      <section className="resources-grid" aria-label="Curated resources">
        {visibleResources.map((resource) => (
          <a className="resource-card" href={resource.url} key={resource.name} target="_blank" rel="noopener noreferrer">
            <div className="resource-card__preview">
              <img src={screenshotUrl(resource.url)} alt={`Website preview of ${resource.name}`} loading="lazy" />
              <span className="resource-card__visit">Open site ↗</span>
            </div>
            <div className="resource-card__meta">
              <div>
                <p className="resource-card__category">{resource.category}</p>
                <h2>{resource.name}</h2>
              </div>
              <p>{resource.description}</p>
            </div>
          </a>
        ))}
      </section>

      {visibleResources.length === 0 && <p className="resources-empty">No resources found.</p>}

      <style>{`
        .resources-controls {
          max-width: 104rem;
          margin: 0 auto clamp(4.5rem, 8vw, 7rem);
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: clamp(3rem, 6vw, 7rem);
          flex-wrap: wrap;
        }

        .resources-filters {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          flex: 1 1 48rem;
        }

        .resources-filters button {
          border: 1px solid var(--t-muted-extra);
          background: transparent;
          color: var(--t-bright);
          padding: 1.05rem 1.45rem;
          border-radius: 999px;
          font: inherit;
          font-size: clamp(1.15rem, 1.15vw, 1.3rem);
          font-weight: 500;
          line-height: 1;
          cursor: pointer;
          transition: background-color 180ms ease, color 180ms ease, border-color 180ms ease, transform 180ms ease;
        }

        .resources-filters button:hover,
        .resources-filters button.is-active {
          background: var(--t-bright);
          color: var(--base);
          border-color: var(--t-bright);
          transform: translateY(-1px);
        }

        .resources-search {
          width: min(100%, 27rem);
          min-width: min(100%, 25rem);
          display: grid;
          gap: .85rem;
        }

        .resources-search span {
          color: var(--t-medium);
          font-size: clamp(1rem, 1vw, 1.15rem);
          font-weight: 500;
          letter-spacing: .09em;
          text-transform: uppercase;
        }

        .resources-search input {
          width: 100%;
          border: 0;
          border-bottom: 1px solid var(--t-muted-extra);
          background: transparent;
          color: var(--t-bright);
          padding: 1rem 0 1.15rem;
          font: inherit;
          font-size: clamp(1.35rem, 1.5vw, 1.65rem);
          line-height: 1.25;
          outline: none;
        }

        .resources-search input::placeholder {
          color: var(--t-medium);
          opacity: 1;
        }

        .resources-search input:focus {
          border-bottom-color: var(--t-bright);
        }

        .resources-grid {
          max-width: 104rem;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          column-gap: clamp(2rem, 4vw, 4.5rem);
          row-gap: clamp(5rem, 9vw, 9rem);
        }

        .resource-card {
          color: var(--t-bright);
          text-decoration: none;
          display: grid;
          gap: clamp(1.75rem, 2.5vw, 2.5rem);
        }

        .resource-card__preview {
          position: relative;
          aspect-ratio: 16 / 10;
          overflow: hidden;
          background: rgba(var(--base-rgb), .72);
          border: 1px solid var(--t-muted-extra);
          border-radius: clamp(1.25rem, 2vw, 2rem);
          box-shadow: 0 1.2rem 3rem rgba(0, 0, 0, .08);
          isolation: isolate;
        }

        .resource-card__preview::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0, 0, 0, .2), transparent 38%);
          opacity: .35;
          pointer-events: none;
          transition: opacity 260ms ease;
        }

        .resource-card__preview img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          display: block;
          transform: scale(1.001);
          transition: transform 500ms cubic-bezier(.2, .7, 0, 1), filter 300ms ease;
        }

        .resource-card__visit {
          position: absolute;
          z-index: 1;
          right: 1.25rem;
          bottom: 1.25rem;
          background: var(--t-bright);
          color: var(--base);
          padding: .85rem 1rem;
          border-radius: 999px;
          font-size: .9rem;
          letter-spacing: .05em;
          text-transform: uppercase;
          opacity: 0;
          transform: translateY(.5rem);
          transition: opacity 220ms ease, transform 220ms ease;
        }

        .resource-card:hover .resource-card__preview img {
          transform: scale(1.035);
          filter: brightness(.9);
        }

        .resource-card:hover .resource-card__preview::after {
          opacity: .7;
        }

        .resource-card:hover .resource-card__visit {
          opacity: 1;
          transform: translateY(0);
        }

        .resource-card__meta {
          display: grid;
          grid-template-columns: minmax(0, .82fr) minmax(16rem, 1.18fr);
          gap: clamp(2rem, 4vw, 4rem);
          align-items: start;
        }

        .resource-card__category {
          margin: 0 0 .75rem;
          color: var(--t-medium);
          font-size: 1rem;
          letter-spacing: .1em;
          text-transform: uppercase;
        }

        .resource-card h2 {
          margin: 0;
          color: var(--t-bright);
          font-size: clamp(2.8rem, 4vw, 4.8rem);
          font-weight: 500;
          line-height: .94;
          letter-spacing: -.05em;
        }

        .resource-card__meta > p {
          margin: 0;
          color: var(--t-medium);
          font-size: clamp(1.15rem, 1.3vw, 1.4rem);
          line-height: 1.6;
        }

        .resources-empty {
          max-width: 104rem;
          margin: 5rem auto 0;
          color: var(--t-medium);
          font-size: 1.35rem;
        }

        @media (max-width: 900px) {
          .resources-grid {
            grid-template-columns: 1fr;
            row-gap: clamp(4.5rem, 10vw, 7rem);
          }
        }

        @media (max-width: 760px) {
          .resources-controls {
            align-items: stretch;
          }

          .resources-search {
            width: 100%;
            min-width: 100%;
          }
        }

        @media (max-width: 640px) {
          .resource-card__meta {
            grid-template-columns: 1fr;
            gap: 1.25rem;
          }

          .resource-card__visit {
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </>
  );
}
