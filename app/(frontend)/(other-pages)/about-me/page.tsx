import { Metadata } from "next";
import InnerHeadline from "@/components/other-pages/about-me/InnerHeadline";
import DoubleMarqueeDivider from "@/components/other-pages/about-me/DoubleMarqueeDivider";
import StatisticsLines from "@/components/other-pages/about-me/StatisticsLines";
import ParallaxDividerImage from "@/components/other-pages/about-me/ParallaxDividerImage";
import Resume from "@/components/other-pages/about-me/Resume";
import ParallaxDividerImage2 from "@/components/other-pages/about-me/ParallaxDividerImage2";
import TestimonialsSlider from "@/components/other-pages/about-me/TestimonialsSlider";
import CTAWithMarquee from "@/components/other-pages/about-me/CTAWithMarquee";
export const metadata: Metadata = {
  title: "About Mario Hodzelmans | AI Systems Architect",
  description: "Mario Hodzelmans helps organizations transform complexity into intelligent systems.",
};
export default function AboutMePage() {
  return (
    <>
      <div className="mxd-page-content inner-page-content">
        <InnerHeadline />
        <DoubleMarqueeDivider />
        <StatisticsLines />
        <ParallaxDividerImage />
        <Resume />
        <ParallaxDividerImage2 />
        <TestimonialsSlider />
        <CTAWithMarquee />
      </div>
    </>
  );
}
