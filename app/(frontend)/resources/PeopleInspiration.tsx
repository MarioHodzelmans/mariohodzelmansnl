const people = [
  {
    name: "Elon Musk",
    url: "https://x.com/elonmusk",
    platform: "X",
    description:
      "I follow Elon Musk for his first-principles approach to engineering, long-term thinking and ability to connect AI, robotics, energy, manufacturing and space into ambitious systems.",
    keywords: ["AI", "Robotics", "Space", "Manufacturing", "First Principles", "Energy"],
  },
  {
    name: "Peter Diamandis",
    url: "https://youtube.com/@peterdiamandis",
    platform: "YouTube",
    description:
      "Peter Diamandis helps me think beyond today's limitations and understand how exponential technologies, longevity, entrepreneurship and abundance may reshape society.",
    keywords: ["Exponential Technology", "Longevity", "Abundance", "Innovation", "Future Trends"],
  },
  {
    name: "Mr Eflow",
    url: "https://youtube.com/@mreflow",
    platform: "YouTube",
    description:
      "Mr Eflow shares practical ideas around AI automation, AI-first businesses and digital workflows, turning emerging technology into concepts that can be tested quickly.",
    keywords: ["AI Automation", "AI Business", "SaaS", "No-Code", "Workflows", "Agents"],
  },
  {
    name: "Andrei Jikh",
    url: "https://youtube.com/@andreijikh",
    platform: "YouTube",
    description:
      "Andrei Jikh makes investing, financial markets and digital assets accessible and helps me improve how I think about capital, risk and long-term wealth creation.",
    keywords: ["Investing", "Personal Finance", "Economics", "Digital Assets", "Wealth Building"],
  },
  {
    name: "Riley Brown",
    url: "https://youtube.com/@rileybrownai",
    platform: "YouTube",
    description:
      "Riley Brown is a strong source of practical inspiration for AI coding, autonomous agents and new workflows that turn natural-language ideas into working digital products.",
    keywords: ["AI Coding", "AI Agents", "Automation", "Prompting", "AI Workflows"],
  },
  {
    name: "Gary's Economics",
    url: "https://youtube.com/@garyseconomics",
    platform: "YouTube",
    description:
      "Gary's Economics gives me a broader perspective on inequality, markets, monetary systems and macroeconomic forces that influence technology, business and society.",
    keywords: ["Macroeconomics", "Markets", "Inequality", "Monetary Systems", "Economic Trends"],
  },
] as const;

function faviconUrl(url: string) {
  const hostname = new URL(url).hostname;
  return `https://www.google.com/s2/favicons?domain=${hostname}&sz=256`;
}

export default function PeopleInspiration() {
  return (
    <section className="people-inspiration" aria-labelledby="people-inspiration-title">
      <div className="people-inspiration__intro">
        <p className="people-inspiration__eyebrow">/ People & inspiration</p>
        <div>
          <h2 id="people-inspiration-title">The people shaping my thinking.</h2>
          <p>
            A personal selection of thinkers and creators I regularly follow for perspective on AI,
            technology, business, economics and the future. I do not necessarily agree with every
            viewpoint, but their work helps me challenge assumptions and recognise long-term shifts.
          </p>
        </div>
      </div>

      <div className="people-inspiration__grid">
        {people.map((person, index) => (
          <a
            className="person-card"
            href={person.url}
            key={person.name}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="person-card__topline">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <span>{person.platform} ↗</span>
            </div>

            <div className="person-card__identity">
              <img src={faviconUrl(person.url)} alt="" width="64" height="64" loading="lazy" />
              <h3>{person.name}</h3>
            </div>

            <p className="person-card__description">{person.description}</p>

            <div className="person-card__keywords" aria-label={`${person.name} topics`}>
              {person.keywords.map((keyword) => (
                <span key={keyword}>{keyword}</span>
              ))}
            </div>
          </a>
        ))}
      </div>

      <style>{`
        .people-inspiration {
          max-width: 104rem;
          margin: 0 auto clamp(7rem, 12vw, 12rem);
        }

        .people-inspiration__intro {
          display: grid;
          grid-template-columns: minmax(12rem, .35fr) minmax(0, 1fr);
          gap: clamp(2rem, 7vw, 8rem);
          margin-bottom: clamp(3rem, 6vw, 5rem);
          padding-top: 1.5rem;
          border-top: 1px solid var(--t-muted-extra);
        }

        .people-inspiration__eyebrow {
          margin: 0;
          color: var(--t-medium);
          font-size: clamp(.95rem, 1vw, 1.1rem);
          letter-spacing: .1em;
          text-transform: uppercase;
        }

        .people-inspiration__intro h2 {
          max-width: 12ch;
          margin: 0;
          color: var(--t-bright);
          font-size: clamp(3.1rem, 6vw, 6.2rem);
          font-weight: 500;
          line-height: .96;
          letter-spacing: -.055em;
        }

        .people-inspiration__intro div > p {
          max-width: 48rem;
          margin: 2rem 0 0;
          color: var(--t-medium);
          font-size: clamp(1.1rem, 1.4vw, 1.35rem);
          line-height: 1.65;
        }

        .people-inspiration__grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          border-top: 1px solid var(--t-muted-extra);
          border-left: 1px solid var(--t-muted-extra);
        }

        .person-card {
          min-height: 34rem;
          display: flex;
          flex-direction: column;
          padding: clamp(1.4rem, 2.5vw, 2.4rem);
          color: inherit;
          text-decoration: none;
          border-right: 1px solid var(--t-muted-extra);
          border-bottom: 1px solid var(--t-muted-extra);
          transition: background-color 240ms ease, transform 240ms ease;
        }

        .person-card:hover {
          background: var(--t-muted-extra);
          transform: translateY(-3px);
        }

        .person-card__topline {
          display: flex;
          justify-content: space-between;
          gap: 1rem;
          color: var(--t-medium);
          font-size: .92rem;
          letter-spacing: .08em;
          text-transform: uppercase;
        }

        .person-card__identity {
          margin-top: clamp(3rem, 6vw, 5rem);
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }

        .person-card__identity img {
          width: 3.5rem;
          height: 3.5rem;
          object-fit: contain;
          border-radius: 1rem;
          background: #fff;
          padding: .55rem;
        }

        .person-card h3 {
          margin: 0;
          color: var(--t-bright);
          font-size: clamp(1.8rem, 2.8vw, 2.7rem);
          font-weight: 500;
          letter-spacing: -.04em;
        }

        .person-card__description {
          margin: 2rem 0 0;
          color: var(--t-medium);
          font-size: 1.05rem;
          line-height: 1.65;
        }

        .person-card__keywords {
          margin-top: auto;
          padding-top: 2.5rem;
          display: flex;
          flex-wrap: wrap;
          gap: .55rem;
        }

        .person-card__keywords span {
          padding: .55rem .75rem;
          border: 1px solid var(--t-muted-extra);
          border-radius: 999px;
          color: var(--t-medium);
          font-size: .82rem;
          line-height: 1;
        }

        @media (max-width: 1020px) {
          .people-inspiration__grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 700px) {
          .people-inspiration__intro {
            grid-template-columns: 1fr;
          }

          .people-inspiration__grid {
            grid-template-columns: 1fr;
          }

          .person-card {
            min-height: 29rem;
          }
        }
      `}</style>
    </section>
  );
}
