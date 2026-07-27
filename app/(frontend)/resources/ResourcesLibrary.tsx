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

  return (
    <>
      <section className="resources-controls" aria-label="Filter resources">
        <div className="resources-filters" role="group" aria-label="Categories">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={activeCategory === category ? "is-active" : ""}
              onClick={() => setActiveCategory(category)}
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
        .resources-controls { max-width: 104rem; margin: 0 auto 2.5rem; display: flex; justify-content: space-between; align-items: flex-end; gap: 2rem; flex-wrap: wrap; }
        .resources-filters { display: flex; gap: .65rem; flex-wrap: wrap; }
        .resources-filters button { border: 1px solid rgba(17,17,17,.2); background: transparent; color: #111; padding: .75rem 1rem; border-radius: 999px; font: inherit; font-size: .95rem; cursor: pointer; transition: background-color 180ms ease,color 180ms ease,border-color 180ms ease; }
        .resources-filters button:hover,.resources-filters button.is-active { background: #111; color: #f4f1eb; border-color: #111; }
        .resources-search { min-width: min(100%,20rem); display: grid; gap: .45rem; }
        .resources-search span { font-size: .78rem; letter-spacing: .1em; text-transform: uppercase; opacity: .58; }
        .resources-search input { width: 100%; border: 0; border-bottom: 1px solid rgba(17,17,17,.28); background: transparent; color: #111; padding: .7rem 0; font: inherit; font-size: 1.05rem; outline: none; }
        .resources-search input:focus { border-bottom-color: #111; }
        .resources-grid { max-width: 104rem; margin: 0 auto; display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: clamp(1.5rem,3vw,3rem); }
        .resource-card { color: #111; text-decoration: none; display: grid; gap: 1.3rem; }
        .resource-card__preview { position: relative; aspect-ratio: 16/10; overflow: hidden; background: #ddd8d0; border: 1px solid rgba(17,17,17,.16); }
        .resource-card__preview img { width: 100%; height: 100%; object-fit: cover; object-position: top center; display: block; transform: scale(1.001); transition: transform 500ms cubic-bezier(.2,.7,0,1),filter 300ms ease; }
        .resource-card__visit { position: absolute; right: 1rem; bottom: 1rem; background: #111; color: #f4f1eb; padding: .7rem .9rem; border-radius: 999px; font-size: .82rem; letter-spacing: .05em; text-transform: uppercase; opacity: 0; transform: translateY(.4rem); transition: opacity 220ms ease,transform 220ms ease; }
        .resource-card:hover .resource-card__preview img { transform: scale(1.035); filter: brightness(.88); }
        .resource-card:hover .resource-card__visit { opacity: 1; transform: translateY(0); }
        .resource-card__meta { display: grid; grid-template-columns: minmax(0,.8fr) minmax(14rem,1.2fr); gap: 2rem; align-items: start; }
        .resource-card__category { margin: 0 0 .45rem; font-size: .78rem; letter-spacing: .1em; text-transform: uppercase; opacity: .55; }
        .resource-card h2 { margin: 0; color: #111; font-size: clamp(2rem,3.2vw,4rem); font-weight: 500; line-height: .95; letter-spacing: -.05em; }
        .resource-card__meta > p { margin: 0; font-size: clamp(1rem,1.15vw,1.2rem); line-height: 1.55; opacity: .72; }
        .resources-empty { max-width: 104rem; margin: 4rem auto 0; font-size: 1.2rem; }
        @media (max-width: 900px) { .resources-grid { grid-template-columns: 1fr; } }
        @media (max-width: 640px) { .resources-controls { align-items: stretch; } .resources-search { width: 100%; } .resource-card__meta { grid-template-columns: 1fr; gap: 1rem; } }
      `}</style>
    </>
  );
}
