"use client";

import { useMemo, useState } from "react";

const resources = [
  { name: "ChatGPT", url: "https://chatgpt.com", category: "AI Assistants", description: "OpenAI's general-purpose AI workspace for research, writing, analysis, images, coding and connected workflows." },
  { name: "Claude", url: "https://claude.ai", category: "AI Assistants", description: "Anthropic's AI assistant for thoughtful writing, document analysis, coding, projects and long-context work." },
  { name: "Google Gemini", url: "https://gemini.google.com", category: "AI Assistants", description: "Google's multimodal AI assistant with close integration across Search, Workspace, Drive and the wider Google ecosystem." },
  { name: "Microsoft Copilot", url: "https://copilot.microsoft.com", category: "AI Assistants", description: "Microsoft's AI assistant for web research, productivity and workflows across Microsoft 365 and Windows." },
  { name: "Perplexity", url: "https://www.perplexity.ai", category: "AI Assistants", description: "An answer engine for fast, source-backed research, discovery and structured exploration of complex topics." },
  { name: "OpenAI Codex", url: "https://openai.com/codex", category: "AI Coding", description: "OpenAI's coding agent for working across repositories, implementing features, fixing bugs and automating software tasks." },
  { name: "Claude Code", url: "https://www.anthropic.com/claude-code", category: "AI Coding", description: "Anthropic's terminal-based coding agent for understanding codebases, editing files and running development workflows." },
  { name: "Cursor", url: "https://www.cursor.com", category: "AI Coding", description: "An AI-native code editor for building, refactoring and navigating software with repository-aware assistance." },
  { name: "GitHub Copilot", url: "https://github.com/features/copilot", category: "AI Coding", description: "GitHub's AI development assistant for code completion, chat, pull requests and repository workflows." },
  { name: "v0", url: "https://v0.dev", category: "AI Coding", description: "Vercel's generative product builder for creating React interfaces, prototypes and production-ready web experiences." },
  { name: "Lovable", url: "https://lovable.dev", category: "AI Coding", description: "A conversational app builder for rapidly turning product ideas into working full-stack web applications." },
  { name: "Bolt", url: "https://bolt.new", category: "AI Coding", description: "A browser-based AI development environment for generating, running and deploying full-stack applications." },
  { name: "Replit", url: "https://replit.com", category: "AI Coding", description: "A collaborative cloud development platform with AI-assisted coding, hosting and app deployment." },
  { name: "Figma Make", url: "https://www.figma.com/make", category: "AI Coding", description: "Figma's prompt-driven environment for translating design ideas into interactive product experiences." },
  { name: "Google Veo", url: "https://deepmind.google/models/veo", category: "AI Video", description: "Google DeepMind's generative video model for cinematic, prompt-driven video creation and visual storytelling." },
  { name: "Runway", url: "https://runwayml.com", category: "AI Video", description: "A creative AI platform for generating, editing and transforming video with advanced production tools." },
  { name: "Kling AI", url: "https://klingai.com", category: "AI Video", description: "An AI video generation platform focused on realistic motion, cinematic scenes and image-to-video workflows." },
  { name: "Luma Dream Machine", url: "https://lumalabs.ai/dream-machine", category: "AI Video", description: "Luma's generative video tool for creating dynamic scenes, camera movement and visual concepts from prompts." },
  { name: "Pika", url: "https://pika.art", category: "AI Video", description: "A playful AI video platform for generating, remixing and transforming short-form visual content." },
  { name: "HeyGen", url: "https://www.heygen.com", category: "AI Video", description: "An AI avatar and translation platform for presenter videos, localisation and scalable video communication." },
  { name: "Synthesia", url: "https://www.synthesia.io", category: "AI Video", description: "An enterprise AI video platform for training, explainers and multilingual presenter-led content." },
  { name: "Midjourney", url: "https://www.midjourney.com", category: "AI Images", description: "A leading generative image platform for high-quality concept art, photography, campaigns and visual exploration." },
  { name: "Adobe Firefly", url: "https://firefly.adobe.com", category: "AI Images", description: "Adobe's generative AI suite for image creation, editing and commercially oriented creative workflows." },
  { name: "Ideogram", url: "https://ideogram.ai", category: "AI Images", description: "A generative image tool particularly strong in typography, graphic design and prompt-based visual composition." },
  { name: "Leonardo AI", url: "https://leonardo.ai", category: "AI Images", description: "A creative AI platform for generating images, assets, illustrations and production-ready visual variations." },
  { name: "Magnific", url: "https://magnific.ai", category: "AI Images", description: "An AI upscaling and enhancement platform for adding detail, improving resolution and refining generated visuals." },
  { name: "Canva AI", url: "https://www.canva.com/ai-image-generator", category: "AI Images", description: "Canva's integrated AI toolkit for image generation, presentations, social content and fast visual production." },
  { name: "OpenAI Images", url: "https://chatgpt.com", category: "AI Images", description: "OpenAI's integrated image generation and editing tools for concepting, visual communication and iterative design." },
  { name: "ElevenLabs", url: "https://elevenlabs.io", category: "Voice & Audio", description: "A high-quality AI voice platform for speech generation, dubbing, voice design and multilingual audio." },
  { name: "Suno", url: "https://suno.com", category: "Voice & Audio", description: "A generative music platform for creating complete songs, compositions and audio ideas from natural-language prompts." },
  { name: "Udio", url: "https://www.udio.com", category: "Voice & Audio", description: "An AI music creation tool for generating, extending and experimenting with songs and musical concepts." },
  { name: "Adobe Podcast", url: "https://podcast.adobe.com", category: "Voice & Audio", description: "Adobe's browser-based audio suite for speech enhancement, recording and podcast production." },
  { name: "Plaud", url: "https://www.plaud.ai", category: "Voice & Audio", description: "An AI recording and transcription ecosystem for meetings, conversations, summaries and searchable notes." },
  { name: "NotebookLM", url: "https://notebooklm.google.com", category: "Knowledge", description: "Google's source-grounded research notebook for analysing documents, synthesising information and creating audio overviews." },
  { name: "Obsidian", url: "https://obsidian.md", category: "Knowledge", description: "A local-first knowledge management environment built around connected Markdown notes and personal knowledge graphs." },
  { name: "Notion AI", url: "https://www.notion.so/product/ai", category: "Knowledge", description: "AI embedded within Notion for drafting, summarising, searching and working across structured team knowledge." },
  { name: "Google Drive", url: "https://drive.google.com", category: "Knowledge", description: "Cloud document storage and collaboration that becomes especially powerful when connected with Gemini and automation." },
  { name: "ChatGPT Projects", url: "https://chatgpt.com", category: "Knowledge", description: "Persistent ChatGPT workspaces for organising files, instructions and conversations around long-running projects." },
  { name: "Claude Projects", url: "https://claude.ai", category: "Knowledge", description: "Dedicated Claude workspaces for project instructions, source documents and repeatable knowledge-based workflows." },
  { name: "Airtable", url: "https://www.airtable.com", category: "Knowledge", description: "A flexible cloud database for organising structured knowledge, workflows, content and operational systems." },
  { name: "n8n", url: "https://n8n.io", category: "Automation", description: "An open workflow automation platform for connecting APIs, AI agents, databases and business processes." },
  { name: "Make", url: "https://www.make.com", category: "Automation", description: "A visual automation platform for building multi-step integrations across cloud applications and data sources." },
  { name: "Zapier", url: "https://zapier.com", category: "Automation", description: "A widely supported automation platform for connecting apps, triggering workflows and orchestrating AI actions." },
  { name: "Apify", url: "https://apify.com", category: "Automation", description: "A platform for web scraping, browser automation and turning websites into structured data for AI agents and workflows." },
  { name: "MCP", url: "https://modelcontextprotocol.io", category: "Automation", description: "The Model Context Protocol standard for securely connecting AI assistants to tools, data and external systems." },
  { name: "Local MCP", url: "https://local-mcp.com", category: "Automation", description: "A platform for connecting local tools and services to AI assistants through Model Context Protocol workflows." },
  { name: "Obot AI", url: "https://obot.ai", category: "Automation", description: "An AI agent platform focused on connecting assistants, tools and enterprise systems through MCP-based infrastructure." },
  { name: "GitHub", url: "https://github.com", category: "Development", description: "The source of truth for code, version control, collaboration, issues, pull requests and software architecture." },
  { name: "Vercel", url: "https://vercel.com", category: "Development", description: "A cloud platform for deploying Next.js applications, previews, serverless functions and production web experiences." },
  { name: "Supabase", url: "https://supabase.com", category: "Development", description: "An open platform providing PostgreSQL, authentication, storage, APIs, vectors and edge functions." },
  { name: "Railway", url: "https://railway.com", category: "Development", description: "A developer platform for deploying databases, backends, workers and application infrastructure with minimal setup." },
  { name: "Payload CMS", url: "https://payloadcms.com", category: "Development", description: "A TypeScript-first headless CMS and application framework for structured content, APIs and custom admin experiences." },
  { name: "Medusa", url: "https://medusajs.com", category: "Development", description: "An open-source commerce platform for building modular, custom and AI-ready e-commerce backends." },
  { name: "Next.js", url: "https://nextjs.org", category: "Development", description: "The React framework used for modern full-stack web applications, server rendering and high-performance digital products." },
  { name: "Shopify", url: "https://www.shopify.com", category: "Development", description: "A mature commerce platform for storefronts, product management, checkout, payments and extensible e-commerce operations." },
  { name: "Google Cloud", url: "https://cloud.google.com", category: "Development", description: "Google's cloud infrastructure platform for AI, data, compute, APIs and scalable application services." },
  { name: "Dropbox", url: "https://www.dropbox.com", category: "Development", description: "Cloud storage and collaboration for files, assets and workflows that need to remain available across devices and tools." },
  { name: "Google Workspace", url: "https://workspace.google.com", category: "Development", description: "Google's productivity ecosystem for email, files, documents, collaboration and integrated Gemini workflows." },
  { name: "Figma", url: "https://www.figma.com", category: "Design", description: "A collaborative product design platform for interfaces, prototypes, design systems and developer handoff." },
  { name: "Framer", url: "https://www.framer.com", category: "Design", description: "A visual website builder for high-quality responsive sites, interactive prototypes and motion-rich digital experiences." },
  { name: "Godly", url: "https://godly.website", category: "Design", description: "Curated website inspiration with a strong focus on modern art direction, interaction and motion." },
  { name: "Awwwards", url: "https://www.awwwards.com", category: "Design", description: "A showcase and awards platform for exceptional websites, digital design, interaction and creative development." },
  { name: "Behance", url: "https://www.behance.net", category: "Design", description: "A global platform for detailed creative projects, visual identities, campaigns and digital experiences." },
  { name: "Dribbble", url: "https://dribbble.com", category: "Design", description: "A broad visual discovery platform for interface design, illustration, branding and digital product concepts." },
  { name: "Lapa Ninja", url: "https://www.lapa.ninja", category: "Design", description: "A curated collection of landing pages and interface patterns for inspiration and conversion-focused design research." },
  { name: "Mobbin", url: "https://mobbin.com", category: "Design", description: "A searchable library of real mobile and web product flows, screens and interaction patterns." },
  { name: "Refero", url: "https://refero.design", category: "Design", description: "A reference library of real-world web pages, product screens and visual interface patterns." },
  { name: "Haikei", url: "https://haikei.app", category: "Design", description: "A free generator for SVG backgrounds, blobs, waves and layered shapes for digital projects." },
  { name: "Fontjoy", url: "https://fontjoy.com", category: "Design", description: "An AI-assisted font pairing generator for discovering balanced and distinctive typography combinations." },
  { name: "Color Hunt", url: "https://colorhunt.co", category: "Design", description: "A free collection of curated colour palettes for websites, brands and digital interfaces." },
  { name: "Red Dot", url: "https://www.red-dot.org", category: "Design", description: "An international design award and archive showcasing recognised product, brand and communication design." },
] as const;

const categories = ["All", ...Array.from(new Set(resources.map((resource) => resource.category)))] as const;

function faviconUrl(url: string) {
  const hostname = new URL(url).hostname;
  return `https://www.google.com/s2/favicons?domain=${hostname}&sz=256`;
}

export default function ResourcesLibrary() {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>("All");
  const [query, setQuery] = useState("");

  const visibleResources = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return resources.filter((resource) => {
      const matchesCategory = activeCategory === "All" || resource.category === activeCategory;
      const matchesQuery = !normalizedQuery || resource.name.toLowerCase().includes(normalizedQuery) || resource.category.toLowerCase().includes(normalizedQuery) || resource.description.toLowerCase().includes(normalizedQuery);
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  function changeCategory(category: (typeof categories)[number]) {
    const scrollPosition = window.scrollY;
    setActiveCategory(category);
    requestAnimationFrame(() => {
      window.scrollTo({ top: scrollPosition, left: 0, behavior: "auto" });
      requestAnimationFrame(() => window.scrollTo({ top: scrollPosition, left: 0, behavior: "auto" }));
    });
  }

  return (
    <>
      <section className="resources-controls" aria-label="Filter resources">
        <div className="resources-filters" role="group" aria-label="Categories">
          {categories.map((category) => (
            <button key={category} type="button" className={activeCategory === category ? "is-active" : ""} aria-pressed={activeCategory === category} onMouseDown={(event) => event.preventDefault()} onClick={() => changeCategory(category)}>{category}</button>
          ))}
        </div>
        <label className="resources-search">
          <span>Search</span>
          <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder={`Search ${resources.length} resources`} />
        </label>
      </section>

      <section className="resources-grid" aria-label="Curated resources">
        {visibleResources.map((resource) => (
          <a className="resource-card" href={resource.url} key={`${resource.category}-${resource.name}`} target="_blank" rel="noopener noreferrer">
            <div className="resource-card__visual">
              <span className="resource-card__orb" aria-hidden="true" />
              <img src={faviconUrl(resource.url)} alt="" width="128" height="128" loading="lazy" />
              <span className="resource-card__domain">{new URL(resource.url).hostname.replace(/^www\./, "")}</span>
              <span className="resource-card__visit">Open site ↗</span>
            </div>
            <div className="resource-card__meta">
              <div><p className="resource-card__category">{resource.category}</p><h2>{resource.name}</h2></div>
              <p>{resource.description}</p>
            </div>
          </a>
        ))}
      </section>

      {visibleResources.length === 0 && <p className="resources-empty">No resources found.</p>}

      <style>{`
        .resources-controls{max-width:104rem;margin:0 auto clamp(4.5rem,8vw,7rem);display:flex;justify-content:space-between;align-items:flex-end;gap:clamp(3rem,6vw,7rem);flex-wrap:wrap}.resources-filters{display:flex;gap:1rem;flex-wrap:wrap;flex:1 1 54rem}.resources-filters button{border:1px solid var(--t-muted-extra);background:transparent;color:var(--t-bright);padding:1.05rem 1.45rem;border-radius:999px;font:inherit;font-size:clamp(1.15rem,1.15vw,1.3rem);font-weight:500;line-height:1;cursor:pointer;transition:background-color 180ms ease,color 180ms ease,border-color 180ms ease,transform 180ms ease}.resources-filters button:hover,.resources-filters button.is-active{background:var(--t-bright);color:var(--base);border-color:var(--t-bright);transform:translateY(-1px)}.resources-search{width:min(100%,27rem);min-width:min(100%,25rem);display:grid;gap:.85rem}.resources-search span{color:var(--t-medium);font-size:clamp(1rem,1vw,1.15rem);font-weight:500;letter-spacing:.09em;text-transform:uppercase}.resources-search input{width:100%;border:0;border-bottom:1px solid var(--t-muted-extra);background:transparent;color:var(--t-bright);padding:1rem 0 1.15rem;font:inherit;font-size:clamp(1.35rem,1.5vw,1.65rem);line-height:1.25;outline:none}.resources-search input::placeholder{color:var(--t-medium);opacity:1}.resources-search input:focus{border-bottom-color:var(--t-bright)}
        .resources-grid{max-width:104rem;margin:0 auto;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));column-gap:clamp(2rem,4vw,4.5rem);row-gap:clamp(5rem,9vw,9rem)}.resource-card{color:var(--t-bright);text-decoration:none;display:grid;gap:clamp(1.75rem,2.5vw,2.5rem)}.resource-card__visual{position:relative;aspect-ratio:16/10;overflow:hidden;display:grid;place-items:center;background:linear-gradient(145deg,rgba(var(--base-rgb),.35),rgba(var(--base-rgb),.85));border:1px solid var(--t-muted-extra);border-radius:clamp(1.25rem,2vw,2rem);box-shadow:0 1.2rem 3rem rgba(0,0,0,.07);isolation:isolate}.resource-card__orb{position:absolute;width:55%;aspect-ratio:1;border-radius:50%;background:radial-gradient(circle,rgba(255,255,255,.95) 0,rgba(255,255,255,.35) 45%,transparent 72%);filter:blur(2px);opacity:.75;transform:scale(.92);transition:transform 500ms cubic-bezier(.2,.7,0,1),opacity 300ms ease}.resource-card__visual img{position:relative;z-index:1;width:clamp(4.5rem,8vw,7.5rem);height:clamp(4.5rem,8vw,7.5rem);object-fit:contain;padding:1.15rem;background:#fff;border-radius:1.6rem;box-shadow:0 1rem 2.5rem rgba(0,0,0,.12);transition:transform 400ms cubic-bezier(.2,.7,0,1)}.resource-card__domain{position:absolute;left:1.35rem;bottom:1.35rem;color:var(--t-medium);font-size:.9rem;letter-spacing:.05em}.resource-card__visit{position:absolute;z-index:2;right:1.25rem;bottom:1.25rem;background:var(--t-bright);color:var(--base);padding:.85rem 1rem;border-radius:999px;font-size:.9rem;letter-spacing:.05em;text-transform:uppercase;opacity:0;transform:translateY(.5rem);transition:opacity 220ms ease,transform 220ms ease}.resource-card:hover .resource-card__orb{transform:scale(1.08);opacity:1}.resource-card:hover .resource-card__visual img{transform:scale(1.08) rotate(-2deg)}.resource-card:hover .resource-card__visit{opacity:1;transform:translateY(0)}.resource-card__meta{display:grid;grid-template-columns:minmax(0,.82fr) minmax(16rem,1.18fr);gap:clamp(2rem,4vw,4rem);align-items:start}.resource-card__category{margin:0 0 .75rem;color:var(--t-medium);font-size:1rem;letter-spacing:.1em;text-transform:uppercase}.resource-card h2{margin:0;color:var(--t-bright);font-size:clamp(2.8rem,4vw,4.8rem);font-weight:500;line-height:.94;letter-spacing:-.05em}.resource-card__meta>p{margin:0;color:var(--t-medium);font-size:clamp(1.15rem,1.3vw,1.4rem);line-height:1.6}.resources-empty{max-width:104rem;margin:5rem auto 0;color:var(--t-medium);font-size:1.35rem}@media(max-width:900px){.resources-grid{grid-template-columns:1fr;row-gap:clamp(4.5rem,10vw,7rem)}}@media(max-width:760px){.resources-controls{align-items:stretch}.resources-search{width:100%;min-width:100%}}@media(max-width:640px){.resource-card__meta{grid-template-columns:1fr;gap:1.25rem}.resource-card__visit{opacity:1;transform:none}.resource-card__domain{display:none}}
      `}</style>
    </>
  );
}