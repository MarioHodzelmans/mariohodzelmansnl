import { Metadata } from "next";
import InnerHeadline from "@/components/projects/works-grid/InnerHeadline";
import ProjectsGridX3Showcase from "@/components/projects/works-grid/ProjectsGridX3Showcase";
import ParallaxDividerVideo from "@/components/projects/works-grid/ParallaxDividerVideo";
import TestimonialsSticky from "@/components/projects/works-grid/TestimonialsSticky";
import CTAWithMarquee from "@/components/projects/works-grid/CTAWithMarquee";
export const metadata: Metadata = {
  title: "Works Grid | Mario Hodzelmans | AI Systems Architect",
  description: "Mario Hodzelmans | AI Systems Architect",
};
export default function WorksGridPage() {
  return (
    <>
      <div className="mxd-page-content inner-page-content">
        <InnerHeadline />
        <ProjectsGridX3Showcase />
        <ParallaxDividerVideo />
        <TestimonialsSticky />
        <CTAWithMarquee />
      </div>
    </>
  );
}
