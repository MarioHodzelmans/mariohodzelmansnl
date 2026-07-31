import Footer3 from "@/components/footers/Footer3";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

const siteUrl = "https://mariohodzelmans.nl";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Mario Hodzelmans | AI Systems Architect in the Netherlands",
  description:
    "AI systems architect for strategy, automation, knowledge systems, AI agents and e-commerce operations. Based in Limburg, working with organizations across the Netherlands.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Mario Hodzelmans | AI Systems Architect",
    description:
      "Designing AI workflows, automation systems and knowledge infrastructure for organizations that want fewer manual processes and better decisions.",
    url: siteUrl,
    siteName: "Mario Hodzelmans",
    images: [
      {
        url: "/img/generated/kunrader-ai-systems-hero.png",
        width: 1600,
        height: 900,
        alt: "Dark premium AI systems architecture visual on Kunrader limestone",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mario Hodzelmans | AI Systems Architect",
    description:
      "AI strategy, automation, knowledge systems, AI agents and e-commerce architecture.",
    images: ["/img/generated/kunrader-ai-systems-hero.png"],
  },
};

const services = [
  {
    eyebrow: "01",
    title: "AI Strategy",
    text: "Translate AI ambition into a practical roadmap: priorities, governance, tooling, risks and implementation steps.",
  },
  {
    eyebrow: "02",
    title: "Automation Systems",
    text: "Connect teams, tools and data so repetitive work becomes a reliable system instead of scattered manual tasks.",
  },
  {
    eyebrow: "03",
    title: "Knowledge Systems",
    text: "Turn company knowledge into reusable context for search, agents, onboarding, decisions and daily execution.",
  },
  {
    eyebrow: "04",
    title: "AI Agents",
    text: "Design agent workflows with clear tasks, human control, useful context, evaluation and measurable outcomes.",
  },
];

const cases = [
  {
    title: "AI Transformation System",
    category: "Strategy / Governance / Adoption",
    text: "A practical model for moving from loose experiments to controlled AI adoption.",
    image: "/img/generated/kunrader-ai-transformation.png",
    href: "/cases/ai-transformation-dr-rath",
  },
  {
    title: "Knowledge Operating System",
    category: "Knowledge / Agents / Retrieval",
    text: "Reusable team memory and structured context for better AI-assisted work.",
    image: "/img/generated/kunrader-knowledge-agents.png",
    href: "/cases/ai-knowledge-operating-system",
  },
  {
    title: "Commerce Automation Ecosystem",
    category: "E-Commerce / Channels / Growth",
    text: "Connected workflows across catalog, content, orders, channels and reporting.",
    image: "/img/generated/kunrader-commerce-automation.png",
    href: "/cases/international-ecommerce-ecosystem",
  },
];

const stack = [
  "ChatGPT",
  "Claude",
  "Gemini",
  "Codex",
  "n8n",
  "Make",
  "Supabase",
  "Vercel",
  "Payload",
  "Shopify",
  "WooCommerce",
  "Obsidian",
];

const faqs = [
  {
    q: "What does an AI systems architect do?",
    a: "An AI systems architect designs how strategy, workflows, data, automation, knowledge and AI tools work together inside an organization.",
  },
  {
    q: "Who is this for?",
    a: "Leadership teams, e-commerce organizations and operational teams that want to use AI without creating disconnected experiments or unmanaged tool sprawl.",
  },
  {
    q: "Where are you based?",
    a: "Mario Hodzelmans is based in Voerendaal, Limburg, the Netherlands, and works with organizations remotely and on-site.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Mario Hodzelmans",
      url: siteUrl,
      jobTitle: "AI Systems Architect",
      email: "mailto:mariohodzelmans@gmail.com",
      sameAs: [
        "https://www.linkedin.com/in/mariohodzelmans/",
        "https://x.com/MarioHodzelmans",
        "https://github.com/mariohodzelmans",
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Voerendaal",
        addressRegion: "Limburg",
        addressCountry: "NL",
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#service`,
      name: "Mario Hodzelmans AI Systems Architecture",
      url: siteUrl,
      founder: { "@id": `${siteUrl}/#person` },
      areaServed: ["Netherlands", "Belgium", "Europe"],
      serviceType: [
        "AI Strategy",
        "Automation Systems",
        "Knowledge Systems",
        "AI Agent Architecture",
        "E-Commerce Architecture",
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      mainEntity: faqs.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a,
        },
      })),
    },
  ],
};

export default function IndexDesignStudioPage() {
  return (
    <>
      <main className="stage-two-site">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <section className="stage-hero">
          <div className="stage-hero__media" aria-hidden="true">
            <Image
              src="/img/generated/kunrader-ai-systems-hero.png"
              alt=""
              fill
              priority
              sizes="100vw"
            />
          </div>
          <div className="stage-hero__shade" />
          <div className="stage-shell stage-hero__content">
            <div className="stage-kicker">
              AI Systems Architect / Limburg, NL
            </div>
            <h1>
              AI Is Changing Everything. Let&apos;s Build What&apos;s Next.
            </h1>
            <p>
              Strategy. Systems. Execution. I help organizations turn complexity
              into scalable AI workflows, automation and digital growth.
            </p>
            <div className="stage-actions">
              <Link
                className="stage-button stage-button--primary"
                href="/contact"
              >
                Start a project
              </Link>
              <Link
                className="stage-button stage-button--ghost"
                href="/resources"
              >
                Explore resources
              </Link>
            </div>
          </div>
        </section>

        <section className="stage-band stage-intro">
          <div className="stage-shell stage-split">
            <div>
              <span className="stage-label">
                Strategy / Systems / Execution
              </span>
              <h2>From AI possibility to systems people can actually use.</h2>
            </div>
            <div className="stage-intro__copy">
              <p>
                AI only becomes useful when it is connected to real workflows,
                clean knowledge, clear ownership and measurable business value.
                That is where I work: between strategy, implementation and the
                operating reality of a team.
              </p>
              <p>
                The visual direction is premium, dark and material: Kunrader
                stone, contrast, precision and systems thinking. The content
                stays focused on what I do for organizations.
              </p>
            </div>
          </div>
        </section>

        <section className="stage-band stage-services" id="services">
          <div className="stage-shell">
            <div className="stage-section-head">
              <span className="stage-label">What I help with</span>
              <h2>AI systems that reduce friction and increase capability.</h2>
            </div>
            <div className="stage-service-grid">
              {services.map((service) => (
                <article className="stage-service-card" key={service.title}>
                  <span>{service.eyebrow}</span>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="stage-band stage-cases" id="cases">
          <div className="stage-shell">
            <div className="stage-section-head stage-section-head--row">
              <div>
                <span className="stage-label">Selected cases</span>
                <h2>Work shaped around strategy, automation and growth.</h2>
              </div>
              <Link className="stage-text-link" href="/cases">
                All cases
              </Link>
            </div>
            <div className="stage-case-grid">
              {cases.map((item) => (
                <Link
                  className="stage-case-card"
                  href={item.href}
                  key={item.title}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={1280}
                    height={960}
                  />
                  <div>
                    <span>{item.category}</span>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="stage-band stage-stack">
          <div className="stage-shell stage-split">
            <div>
              <span className="stage-label">Operating stack</span>
              <h2>
                A practical stack for strategy, automation and AI execution.
              </h2>
            </div>
            <div className="stage-stack__grid">
              {stack.map((tool) => (
                <span key={tool}>{tool}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="stage-band stage-resources">
          <div className="stage-shell stage-split">
            <div>
              <span className="stage-label">Resources</span>
              <h2>Tools, benchmarks and inspiration for intelligent work.</h2>
            </div>
            <div className="stage-intro__copy">
              <p>
                The Resources page is part of the site and stays in the menu. It
                collects the AI tools, development platforms, automation systems
                and references that inform how I build.
              </p>
              <Link
                className="stage-button stage-button--ghost"
                href="/resources"
              >
                Open resources
              </Link>
            </div>
          </div>
        </section>

        <section className="stage-band stage-faq">
          <div className="stage-shell">
            <div className="stage-section-head">
              <span className="stage-label">AI SEO</span>
              <h2>Clear for people. Structured for search and AI answers.</h2>
            </div>
            <div className="stage-faq__list">
              {faqs.map((item) => (
                <article key={item.q}>
                  <h3>{item.q}</h3>
                  <p>{item.a}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="stage-cta">
          <div className="stage-shell">
            <span className="stage-label">Next move</span>
            <h2>Start with an AI systems audit.</h2>
            <p>
              We map your workflows, data, tools, bottlenecks and AI
              opportunities. Then we turn the noise into a buildable roadmap.
            </p>
            <Link
              className="stage-button stage-button--primary"
              href="/contact"
            >
              Schedule the audit
            </Link>
          </div>
        </section>
      </main>
      <Footer3 />
    </>
  );
}
