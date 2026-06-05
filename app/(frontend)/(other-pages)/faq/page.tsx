import { Metadata } from "next";
import InnerHeadline from "@/components/other-pages/faq/InnerHeadline";
import ParallaxDividerImage from "@/components/other-pages/faq/ParallaxDividerImage";
import BlogPreview from "@/components/other-pages/faq/BlogPreview";
import CTAWithMarquee from "@/components/other-pages/faq/CTAWithMarquee";
export const metadata: Metadata = {
  title: "Faq | Mario Hodzelmans | AI Systems Architect",
  description: "Mario Hodzelmans | AI Systems Architect",
};
export default function FaqPage() {
  return (
    <>
      <div className="mxd-page-content inner-page-content">
        <InnerHeadline />
        <ParallaxDividerImage />
        <BlogPreview />
        <CTAWithMarquee />
      </div>
    </>
  );
}
