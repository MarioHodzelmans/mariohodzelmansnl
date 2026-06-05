import Footer3 from "@/components/footers/Footer3";
import { Metadata } from "next";
import Hero from "@/components/homes/index-web-studio/Hero";
import AboutMission from "@/components/homes/index-web-studio/AboutMission";
import SelectedWork from "@/components/homes/index-web-studio/SelectedWork";
import ServicesStackVideo from "@/components/homes/index-web-studio/ServicesStackVideo";
import Process from "@/components/homes/index-web-studio/Process";
import DividerCursor from "@/components/homes/index-web-studio/DividerCursor";
import ParallaxDividerImage from "@/components/homes/index-web-studio/ParallaxDividerImage";
export const metadata: Metadata = {
  title:
    "Index Web Studio | Mario Hodzelmans | AI Systems Architect",
  description: "Mario Hodzelmans | AI Systems Architect",
};
export default function IndexWebStudioPage() {
  return (
    <>
      <>
        <Hero />
        <AboutMission />
        <SelectedWork />
        <ServicesStackVideo />
        <Process />
        <DividerCursor />
        <ParallaxDividerImage />
      </>
      <Footer3 />
    </>
  );
}
