"use client";

import { Puck, type Config, type Data } from "@puckeditor/core";
import "@puckeditor/core/puck.css";

const config: Config = {
  components: {
    Hero: {
      fields: {
        eyebrow: { type: "text" },
        title: { type: "text" },
        description: { type: "textarea" },
        buttonLabel: { type: "text" },
      },
      defaultProps: {
        eyebrow: "B2B WEBSITE PLATFORM",
        title: "Build a better business website",
        description:
          "A simple visual editor powered by Next.js, Payload CMS and Puck.",
        buttonLabel: "Contact us",
      },
      render: ({ eyebrow, title, description, buttonLabel }) => (
        <section style={{ padding: "96px 24px", textAlign: "center", background: "#f5f5f3" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <p style={{ fontSize: 13, letterSpacing: 2, fontWeight: 700 }}>{eyebrow}</p>
            <h1 style={{ fontSize: "clamp(42px, 7vw, 84px)", lineHeight: 1, margin: "20px 0" }}>
              {title}
            </h1>
            <p style={{ maxWidth: 650, margin: "0 auto 32px", fontSize: 20, lineHeight: 1.6 }}>
              {description}
            </p>
            <button style={{ border: 0, borderRadius: 999, padding: "16px 26px", background: "#111", color: "#fff", fontWeight: 700 }}>
              {buttonLabel}
            </button>
          </div>
        </section>
      ),
    },
    TextBlock: {
      fields: {
        heading: { type: "text" },
        text: { type: "textarea" },
      },
      defaultProps: {
        heading: "A visual editor your customers can actually use",
        text: "Give customers control over content without giving them enough freedom to destroy the design system.",
      },
      render: ({ heading, text }) => (
        <section style={{ padding: "72px 24px" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <h2 style={{ fontSize: 42, lineHeight: 1.1, marginBottom: 20 }}>{heading}</h2>
            <p style={{ fontSize: 19, lineHeight: 1.7 }}>{text}</p>
          </div>
        </section>
      ),
    },
    CallToAction: {
      fields: {
        title: { type: "text" },
        buttonLabel: { type: "text" },
      },
      defaultProps: {
        title: "Ready to build something better?",
        buttonLabel: "Get started",
      },
      render: ({ title, buttonLabel }) => (
        <section style={{ padding: "72px 24px", textAlign: "center", background: "#111", color: "white" }}>
          <h2 style={{ fontSize: 44, marginBottom: 28 }}>{title}</h2>
          <button style={{ border: 0, borderRadius: 999, padding: "16px 26px", background: "white", color: "#111", fontWeight: 700 }}>
            {buttonLabel}
          </button>
        </section>
      ),
    },
  },
};

const initialData: Data = {
  content: [
    {
      type: "Hero",
      props: {
        id: "hero-1",
        eyebrow: "PUCK PROOF OF CONCEPT",
        title: "Visual editing without WordPress",
        description: "Drag, edit and rearrange these components. This editor is running inside the existing Next.js website.",
        buttonLabel: "Try the editor",
      },
    },
    {
      type: "TextBlock",
      props: {
        id: "text-1",
        heading: "Start small, then connect Payload",
        text: "This first version proves the editor experience. The next step is saving page data to Payload CMS and rendering published pages from that data.",
      },
    },
  ],
  root: {},
};

export default function PuckEditorPage() {
  return (
    <Puck
      config={config}
      data={initialData}
      onPublish={(data) => {
        console.log("Puck publish data", data);
        alert("Proof of concept: publish data is ready. Payload persistence is the next step.");
      }}
    />
  );
}
