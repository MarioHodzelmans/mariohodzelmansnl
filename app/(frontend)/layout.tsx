import "@/styles/template.css";
import { JetBrains_Mono, Manrope } from "next/font/google";
import Header1 from "@/components/headers/Header1";
import TemplateRuntimeProvider from "@/components/common/TemplateRuntimeProvider";
import MenuRuntimeShell from "@/components/headers/MenuRuntimeShell";
import { Metadata } from "next";
import { cookies } from "next/headers";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mariohodzelmans.nl"),
  title: {
    default: "Mario Hodzelmans | AI Systems Architect",
    template: "%s | Mario Hodzelmans",
  },
  description:
    "AI systems architect for strategy, automation, knowledge systems, AI agents and e-commerce operations.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Mario Hodzelmans | AI Systems Architect",
    description:
      "Designing AI workflows, automation systems and knowledge infrastructure for organizations.",
    url: "https://mariohodzelmans.nl",
    siteName: "Mario Hodzelmans",
    images: [
      {
        url: "/img/generated/kunrader-ai-systems-hero.png",
        width: 1600,
        height: 900,
        alt: "Mario Hodzelmans AI systems architecture visual",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mario Hodzelmans | AI Systems Architect",
    description:
      "AI strategy, automation, knowledge systems and agent architecture.",
    images: ["/img/generated/kunrader-ai-systems-hero.png"],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const cookieTheme = cookieStore.get("template.theme")?.value;
  const initialTheme = cookieTheme === "dark" ? "dark" : "light";

  return (
    <html
      lang="en"
      className="no-touch"
      color-scheme={initialTheme}
      suppressHydrationWarning
    >
      <body
        className={`${manrope.variable} ${jetbrainsMono.variable}`}
        style={
          {
            "--_font-default": "var(--font-manrope)",
            "--_font-accent": "var(--font-jetbrains-mono)",
          } as React.CSSProperties
        }
      >
        <TemplateRuntimeProvider>
          <Header1 initialTheme={initialTheme} />
          <MenuRuntimeShell />
          {children}
        </TemplateRuntimeProvider>
      </body>
    </html>
  );
}
