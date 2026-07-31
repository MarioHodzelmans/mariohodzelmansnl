const benchmarkResources = [
  {
    name: "Artificial Analysis",
    url: "https://artificialanalysis.ai/models",
    description: "Compare leading AI models across intelligence, speed, pricing, context windows and technical capabilities.",
  },
  {
    name: "LiveBench",
    url: "https://livebench.ai/",
    description: "A continuously updated benchmark designed to evaluate current language models with fresh, contamination-resistant tasks.",
  },
  {
    name: "BenchLM",
    url: "https://benchlm.ai/",
    description: "An accessible platform for comparing language model performance across benchmarks and practical evaluation categories.",
  },
  {
    name: "Benchmark AI",
    url: "https://www.benchmark.ai/",
    description: "A benchmarking resource for exploring AI model capabilities, performance comparisons and evaluation results.",
  },
] as const;

function faviconUrl(url: string) {
  const hostname = new URL(url).hostname;
  return `https://www.google.com/s2/favicons?domain=${hostname}&sz=256`;
}

export default function BenchmarkResources() {
  return (
    <section className="benchmark-resources" aria-labelledby="benchmark-resources-title">
      <div className="benchmark-resources__header">
        <p>/ AI benchmarks</p>
        <div>
          <h2 id="benchmark-resources-title">Compare models using independent evidence.</h2>
          <p>Useful platforms for evaluating model quality, speed, cost and real-world performance before choosing an AI system.</p>
        </div>
      </div>

      <div className="benchmark-resources__grid">
        {benchmarkResources.map((resource) => (
          <a href={resource.url} key={resource.name} target="_blank" rel="noopener noreferrer">
            <div className="benchmark-resources__icon">
              <img src={faviconUrl(resource.url)} alt="" width="96" height="96" loading="lazy" />
            </div>
            <div>
              <span>{new URL(resource.url).hostname.replace(/^www\./, "")}</span>
              <h3>{resource.name}</h3>
              <p>{resource.description}</p>
            </div>
            <strong>Open site ↗</strong>
          </a>
        ))}
      </div>

      <style>{`
        .benchmark-resources{max-width:104rem;margin:0 auto clamp(7rem,12vw,12rem)}
        .benchmark-resources__header{display:grid;grid-template-columns:minmax(12rem,.45fr) minmax(0,1.55fr);gap:clamp(2rem,6vw,8rem);align-items:start;margin-bottom:clamp(3rem,6vw,5.5rem);padding-top:1.5rem;border-top:1px solid var(--t-muted-extra)}
        .benchmark-resources__header>p{margin:0;color:var(--t-medium);font-size:clamp(1rem,1vw,1.15rem);letter-spacing:.1em;text-transform:uppercase}
        .benchmark-resources__header h2{max-width:18ch;margin:0;color:var(--t-bright);font-size:clamp(3rem,6vw,6.8rem);font-weight:500;line-height:.96;letter-spacing:-.055em}
        .benchmark-resources__header div>p{max-width:48rem;margin:2rem 0 0;color:var(--t-medium);font-size:clamp(1.15rem,1.35vw,1.45rem);line-height:1.6}
        .benchmark-resources__grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:1.25rem}
        .benchmark-resources__grid a{min-height:25rem;display:flex;flex-direction:column;justify-content:space-between;gap:2.5rem;padding:clamp(1.6rem,2.5vw,2.5rem);color:var(--t-bright);text-decoration:none;background:rgba(var(--base-rgb),.6);border:1px solid var(--t-muted-extra);border-radius:clamp(1.4rem,2vw,2.2rem);transition:transform 260ms ease,border-color 260ms ease,box-shadow 260ms ease}
        .benchmark-resources__grid a:hover{transform:translateY(-.45rem);border-color:var(--t-medium);box-shadow:0 1.8rem 4rem rgba(0,0,0,.1)}
        .benchmark-resources__icon img{width:3.5rem;height:3.5rem;padding:.65rem;object-fit:contain;background:#fff;border-radius:1rem}
        .benchmark-resources__grid span{color:var(--t-medium);font-size:.9rem;letter-spacing:.06em;text-transform:uppercase}
        .benchmark-resources__grid h3{margin:.9rem 0 0;color:var(--t-bright);font-size:clamp(2.5rem,3.5vw,4.2rem);font-weight:500;line-height:.95;letter-spacing:-.05em}
        .benchmark-resources__grid p{margin:1.5rem 0 0;color:var(--t-medium);font-size:clamp(1.08rem,1.2vw,1.3rem);line-height:1.55}
        .benchmark-resources__grid strong{color:var(--t-bright);font-size:.95rem;font-weight:500;letter-spacing:.08em;text-transform:uppercase}
        @media(max-width:760px){.benchmark-resources__header{grid-template-columns:1fr;gap:1.5rem}.benchmark-resources__grid{grid-template-columns:1fr}}
      `}</style>
    </section>
  );
}
