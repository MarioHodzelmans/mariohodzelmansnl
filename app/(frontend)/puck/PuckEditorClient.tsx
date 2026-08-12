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
        description: "A simple visual editor powered by Next.js, Payload CMS and Puck.",
        buttonLabel: "Contact us",
      },
      render: ({ eyebrow, title, description, buttonLabel }) => (
        <div style={{ padding: "96px 24px", textAlign: "center", background: "#f5f5f3" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <p style={{ fontSize: 13, letterSpacing: 2, fontWeight: 700 }}>{eyebrow}</p>
            <h1 style={{ fontSize: "clamp(42px, 7vw, 84px)", lineHeight: 1, margin: "20px 0" }}>{title}</h1>
            <p style={{ maxWidth: 650, margin: "0 auto 32px", fontSize: 20, lineHeight: 1.6 }}>{description}</p>
            <button type="button" style={{ border: 0, borderRadius: 999, padding: "16px 26px", background: "#111", color: "#fff", fontWeight: 700 }}>{buttonLabel}</button>
          </div>
        </div>
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
        <div style={{ padding: "72px 24px" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <h2 style={{ fontSize: 42, lineHeight: 1.1, marginBottom: 20 }}>{heading}</h2>
            <p style={{ fontSize: 19, lineHeight: 1.7 }}>{text}</p>
          </div>
        </div>
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
        <div style={{ padding: "72px 24px", textAlign: "center", background: "#111", color: "white" }}>
          <h2 style={{ fontSize: 44, marginBottom: 28 }}>{title}</h2>
          <button type="button" style={{ border: 0, borderRadius: 999, padding: "16px 26px", background: "white", color: "#111", fontWeight: 700 }}>{buttonLabel}</button>
        </div>
      ),
    },
  },
};

export const defaultPuckData: Data = {
  content: [
    {
      type: "Hero",
      props: {
        id: "hero-1",
        eyebrow: "PUCK + PAYLOAD",
        title: "Visual editing without WordPress",
        description: "Edit this page visually and publish it directly into Payload CMS.",
        buttonLabel: "Start editing",
      },
    },
    {
      type: "TextBlock",
      props: {
        id: "text-1",
        heading: "A modern managed website platform",
        text: "Puck handles visual composition while Payload stores the structured page data.",
      },
    },
  ],
  root: {},
};

type Props = {
  initialData: Data;
  documentId?: string;
};

export default function PuckEditorClient({ initialData, documentId }: Props) {
  return (
    <Puck
      config={config}
      data={initialData}
      onPublish={async (data) => {
        const endpoint = documentId ? `/api/puck-pages/${documentId}` : "/api/puck-pages";
        const response = await fetch(endpoint, {
          method: documentId ? "PATCH" : "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(
            documentId
              ? { puckData: data }
              : { title: "Homepage", slug: "home", puckData: data },
          ),
        });

        if (!response.ok) {
          const message = await response.text();
          alert(`Publish failed: ${message || response.statusText}`);
          return;
        }

        alert("Published to Payload CMS.");
      }}
    />
  );
}
