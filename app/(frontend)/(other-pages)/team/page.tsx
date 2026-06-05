import { Metadata } from "next";
import InnerHeadline from "@/components/other-pages/team/InnerHeadline";
import SplitAboutTeam from "@/components/other-pages/team/SplitAboutTeam";
import TeamList from "@/components/other-pages/team/TeamList";
import ParallaxDividerImage from "@/components/other-pages/team/ParallaxDividerImage";
import TestimonialsSlider from "@/components/other-pages/team/TestimonialsSlider";
import CTAWithMarquee from "@/components/other-pages/team/CTAWithMarquee";
export const metadata: Metadata = {
  title: "Team | Mario Hodzelmans | AI Systems Architect",
  description: "Mario Hodzelmans | AI Systems Architect",
};
export default function TeamPage() {
  return (
    <>
      <>
        <InnerHeadline />
        <SplitAboutTeam />
        <TeamList />
        <ParallaxDividerImage />
        <TestimonialsSlider />
        <CTAWithMarquee />
      </>
    </>
  );
}
