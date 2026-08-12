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

const profileStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://mariohodzelmans.nl/#person",
      name: "Mario Hodzelmans",
      url: "https://mariohodzelmans.nl",
      jobTitle:
        "Director of Innovation & Digital Strategy and AI Systems Architect",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Voerendaal",
        addressRegion: "Limburg",
        addressCountry: "NL",
      },
      sameAs: [
        "https://www.linkedin.com/in/mariohodzelmans/",
        "https://x.com/MarioHodzelmans",
        "https://github.com/mariohodzelmans",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://mariohodzelmans.nl/#website",
      url: "https://mariohodzelmans.nl",
      name: "Mario Hodzelmans",
      inLanguage: "en",
      author: { "@id": "https://mariohodzelmans.nl/#person" },
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://mariohodzelmans.nl"),
  title: "Mario Hodzelmans | AI Systems Architect & Digital Strategist",
  description:
    "Selected work, experiments and writing by Mario Hodzelmans across AI, automation, e-commerce and the systems behind modern organizations.",
  authors: [
    { name: "Mario Hodzelmans", url: "https://mariohodzelmans.nl/about-me" },
  ],
  creator: "Mario Hodzelmans",
  openGraph: {
    type: "website",
    locale: "en_NL",
    siteName: "Mario Hodzelmans",
    title: "Mario Hodzelmans | AI Systems Architect & Digital Strategist",
    description:
      "Selected work, experiments and writing across AI, automation, e-commerce and intelligent digital systems.",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@MarioHodzelmans",
  },
  robots: {
    index: true,
    follow: true,
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(profileStructuredData).replace(
              /</g,
              "\\u003c",
            ),
          }}
        />
        <TemplateRuntimeProvider>
          <Header1 initialTheme={initialTheme} />
          <MenuRuntimeShell />
          {children}
        </TemplateRuntimeProvider>
      </body>
    </html>
  );
}
