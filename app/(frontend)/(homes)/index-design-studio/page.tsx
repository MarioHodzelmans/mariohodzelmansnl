import Footer3 from "@/components/footers/Footer3";
import { Metadata } from "next";
import Hero from "@/components/homes/index-design-studio/Hero";
import ProjectsGrid from "@/components/homes/index-design-studio/ProjectsGrid";
import Partners from "@/components/homes/index-design-studio/Partners";
import MarqueeDivider from "@/components/homes/index-design-studio/MarqueeDivider";
import BlogPreview from "@/components/homes/index-design-studio/BlogPreview";
import CTA from "@/components/homes/index-design-studio/CTA";
export const metadata: Metadata = {
  title: "Mario Hodzelmans | AI Systems Architect & Digital Strategist",
  description:
    "Selected work, experiments and writing by Mario Hodzelmans across AI, automation, e-commerce and the systems behind modern organizations.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Mario Hodzelmans | AI Systems Architect & Digital Strategist",
    description:
      "Selected work, experiments and writing by Mario Hodzelmans across AI, automation, e-commerce and the systems behind modern organizations.",
    url: "/",
  },
  twitter: {
    title: "Mario Hodzelmans | AI Systems Architect & Digital Strategist",
    description:
      "Selected work, experiments and writing by Mario Hodzelmans across AI, automation, e-commerce and the systems behind modern organizations.",
  },
};
export default function IndexDesignStudioPage() {
  return (
    <>
      <>
        <Hero />
        <ProjectsGrid />
        <Partners />
        <MarqueeDivider />
        <BlogPreview />
        <CTA />
      </>
      <Footer3 />
    </>
  );
}
