"use client";

import { useState } from "react";

const premiumBrandPrompt = `Using this single product photo as the only reference, create a complete premium brand identity.

Develop:

- logo direction
- typography
- color palette
- visual language
- photography style
- graphic elements
- icon style

Then create a cohesive marketing campaign including:

- landing page
- hero banner
- Instagram post
- Instagram Story
- Facebook ad
- LinkedIn banner
- email header
- product feature section
- lifestyle imagery
- product gallery
- testimonials
- call-to-action sections

Everything must look like it belongs to one premium brand.

Keep all typography, lighting, colors, composition and visual style perfectly consistent with the original product image.

Ultra realistic, premium, modern, clean, high-end commercial design.`;

export default function PromptResources() {
  const [copied, setCopied] = useState(false);

  async function copyPrompt() {
    await navigator.clipboard.writeText(premiumBrandPrompt);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <section className="prompt-resources" aria-labelledby="prompt-resources-title">
      <div className="prompt-resources__header">
        <p>/ Creative prompts</p>
        <div>
          <h2 id="prompt-resources-title">Turn one product image into a complete premium brand.</h2>
          <p>
            A reusable master prompt for building a consistent brand identity and multi-channel marketing campaign from a single product photo.
          </p>
        </div>
      </div>

      <article className="prompt-card">
        <div className="prompt-card__topline">
          <div>
            <span>Brand identity</span>
            <h3>Single-image premium brand campaign</h3>
          </div>
          <button type="button" onClick={copyPrompt} aria-live="polite">
            {copied ? "Copied" : "Copy prompt"}
          </button>
        </div>
        <pre>{premiumBrandPrompt}</pre>
      </article>

      <style>{`
        .prompt-resources{max-width:104rem;margin:0 auto clamp(7rem,12vw,12rem)}
        .prompt-resources__header{display:grid;grid-template-columns:minmax(12rem,.45fr) minmax(0,1.55fr);gap:clamp(2rem,6vw,8rem);align-items:start;margin-bottom:clamp(3rem,6vw,5.5rem);padding-top:1.5rem;border-top:1px solid var(--t-muted-extra)}
        .prompt-resources__header>p{margin:0;color:var(--t-medium);font-size:clamp(1rem,1vw,1.15rem);letter-spacing:.1em;text-transform:uppercase}
        .prompt-resources__header h2{max-width:16ch;margin:0;color:var(--t-bright);font-size:clamp(3rem,6vw,6.8rem);font-weight:500;line-height:.96;letter-spacing:-.055em}
        .prompt-resources__header div>p{max-width:48rem;margin:2rem 0 0;color:var(--t-medium);font-size:clamp(1.15rem,1.35vw,1.45rem);line-height:1.6}
        .prompt-card{padding:clamp(1.6rem,3vw,3rem);background:rgba(var(--base-rgb),.6);border:1px solid var(--t-muted-extra);border-radius:clamp(1.4rem,2vw,2.2rem)}
        .prompt-card__topline{display:flex;justify-content:space-between;gap:2rem;align-items:flex-start;padding-bottom:2rem;border-bottom:1px solid var(--t-muted-extra)}
        .prompt-card span{color:var(--t-medium);font-size:.9rem;letter-spacing:.08em;text-transform:uppercase}
        .prompt-card h3{margin:.7rem 0 0;color:var(--t-bright);font-size:clamp(2rem,3vw,3.7rem);font-weight:500;line-height:1;letter-spacing:-.045em}
        .prompt-card button{flex:0 0 auto;padding:.9rem 1.15rem;color:var(--base);background:var(--t-bright);border:0;border-radius:999px;font:inherit;font-size:.9rem;font-weight:600;letter-spacing:.06em;text-transform:uppercase;cursor:pointer;transition:transform 180ms ease,opacity 180ms ease}
        .prompt-card button:hover{transform:translateY(-2px);opacity:.88}
        .prompt-card pre{margin:0;padding-top:2rem;white-space:pre-wrap;overflow-wrap:anywhere;color:var(--t-bright);font-family:inherit;font-size:clamp(1.05rem,1.25vw,1.3rem);line-height:1.7}
        @media(max-width:760px){.prompt-resources__header{grid-template-columns:1fr;gap:1.5rem}.prompt-card__topline{flex-direction:column}.prompt-card button{width:100%}}
      `}</style>
    </section>
  );
}
