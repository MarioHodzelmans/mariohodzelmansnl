const featuredResources = [
  {
    name: "ChatGPT",
    url: "https://chatgpt.com",
    category: "AI Assistant",
    rating: "Essential",
    tags: ["Research", "Writing", "Images"],
    reason: "My central workspace for strategy, analysis, content, research and connected AI workflows.",
  },
  {
    name: "Claude",
    url: "https://claude.ai",
    category: "AI Assistant",
    rating: "Essential",
    tags: ["Documents", "Coding", "Projects"],
    reason: "Especially strong for long documents, careful reasoning, structured writing and software work.",
  },
  {
    name: "Google Gemini",
    url: "https://gemini.google.com",
    category: "AI Assistant",
    rating: "Daily use",
    tags: ["Drive", "Workspace", "Research"],
    reason: "Useful when knowledge already lives inside Google Drive, Gmail and the wider Google ecosystem.",
  },
  {
    name: "OpenAI Codex",
    url: "https://openai.com/codex",
    category: "AI Coding",
    rating: "Core tool",
    tags: ["GitHub", "Agents", "Development"],
    reason: "Turns ideas and architectural decisions into concrete repository changes and production code.",
  },
  {
    name: "Vercel",
    url: "https://vercel.com",
    category: "Development",
    rating: "Core platform",
    tags: ["Next.js", "Deployments", "Performance"],
    reason: "The production platform behind my web projects, previews, deployments and runtime monitoring.",
  },
  {
    name: "Google Veo",
    url: "https://deepmind.google/models/veo",
    category: "AI Video",
    rating: "High potential",
    tags: ["Video", "Storytelling", "Creative"],
    reason: "A key platform for exploring cinematic AI video, visual storytelling and future content formats.",
  },
] as const;

function domain(url: string) {
  return new URL(url).hostname;
}

function favicon(url: string) {
  return `https://www.google.com/s2/favicons?domain=${domain(url)}&sz=128`;
}

export default function FeaturedResources() {
  return (
    <section className="featured-resources" aria-labelledby="featured-resources-title">
      <div className="featured-resources__header">
        <p>/ Featured tools</p>
        <h2 id="featured-resources-title">The platforms at the centre of my workflow.</h2>
      </div>

      <div className="featured-resources__grid">
        {featuredResources.map((resource, index) => (
          <a
            className="featured-resource"
            href={resource.url}
            key={resource.name}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="featured-resource__top">
              <span className="featured-resource__number">{String(index + 1).padStart(2, "0")}</span>
              <img src={favicon(resource.url)} alt="" width="64" height="64" loading="lazy" />
            </div>

            <div className="featured-resource__body">
              <p className="featured-resource__category">{resource.category}</p>
              <h3>{resource.name}</h3>
              <p className="featured-resource__reason">{resource.reason}</p>
            </div>

            <div className="featured-resource__footer">
              <div className="featured-resource__tags">
                {resource.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
              <span className="featured-resource__rating">{resource.rating}</span>
            </div>
          </a>
        ))}
      </div>

      <style>{`
        .featured-resources {
          max-width: 104rem;
          margin: 0 auto clamp(7rem, 12vw, 12rem);
        }

        .featured-resources__header {
          display: grid;
          grid-template-columns: minmax(12rem, .45fr) minmax(0, 1.55fr);
          gap: clamp(2rem, 6vw, 8rem);
          align-items: start;
          margin-bottom: clamp(3rem, 6vw, 5.5rem);
          padding-top: 1.5rem;
          border-top: 1px solid var(--t-muted-extra);
        }

        .featured-resources__header p {
          margin: 0;
          color: var(--t-medium);
          font-size: clamp(1rem, 1vw, 1.15rem);
          letter-spacing: .1em;
          text-transform: uppercase;
        }

        .featured-resources__header h2 {
          max-width: 17ch;
          margin: 0;
          color: var(--t-bright);
          font-size: clamp(3rem, 6vw, 6.8rem);
          font-weight: 500;
          line-height: .96;
          letter-spacing: -.055em;
        }

        .featured-resources__grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1.25rem;
        }

        .featured-resource {
          min-height: 31rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 3rem;
          padding: clamp(1.6rem, 2.5vw, 2.5rem);
          color: var(--t-bright);
          text-decoration: none;
          background: rgba(var(--base-rgb), .6);
          border: 1px solid var(--t-muted-extra);
          border-radius: clamp(1.4rem, 2vw, 2.2rem);
          transition: transform 260ms ease, border-color 260ms ease, box-shadow 260ms ease;
        }

        .featured-resource:hover {
          transform: translateY(-.45rem);
          border-color: var(--t-medium);
          box-shadow: 0 1.8rem 4rem rgba(0, 0, 0, .1);
        }

        .featured-resource__top,
        .featured-resource__footer {
          display: flex;
          justify-content: space-between;
          gap: 1.5rem;
          align-items: center;
        }

        .featured-resource__number,
        .featured-resource__category,
        .featured-resource__rating {
          color: var(--t-medium);
          font-size: .95rem;
          letter-spacing: .09em;
          text-transform: uppercase;
        }

        .featured-resource__top img {
          width: 3.25rem;
          height: 3.25rem;
          padding: .55rem;
          object-fit: contain;
          background: #fff;
          border-radius: 1rem;
        }

        .featured-resource__category {
          margin: 0 0 1rem;
        }

        .featured-resource h3 {
          margin: 0;
          color: var(--t-bright);
          font-size: clamp(2.6rem, 3.5vw, 4.4rem);
          font-weight: 500;
          line-height: .95;
          letter-spacing: -.05em;
        }

        .featured-resource__reason {
          margin: 1.75rem 0 0;
          color: var(--t-medium);
          font-size: clamp(1.1rem, 1.2vw, 1.3rem);
          line-height: 1.55;
        }

        .featured-resource__tags {
          display: flex;
          flex-wrap: wrap;
          gap: .5rem;
        }

        .featured-resource__tags span {
          padding: .45rem .65rem;
          color: var(--t-medium);
          border: 1px solid var(--t-muted-extra);
          border-radius: 999px;
          font-size: .85rem;
        }

        .featured-resource__rating {
          flex: 0 0 auto;
          color: var(--t-bright);
          text-align: right;
        }

        @media (max-width: 1050px) {
          .featured-resources__grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 700px) {
          .featured-resources__header {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .featured-resources__grid {
            grid-template-columns: 1fr;
          }

          .featured-resource {
            min-height: 27rem;
          }
        }
      `}</style>
    </section>
  );
}
