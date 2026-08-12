import { Metadata } from "next";
import InnerHeadline from "@/components/other-pages/contact/InnerHeadline";
import Socials from "@/components/other-pages/contact/Socials";
import ParallaxDividerImage from "@/components/other-pages/contact/ParallaxDividerImage";
import SectionTitle from "@/components/other-pages/contact/SectionTitle";
import CTAWithMarquee from "@/components/other-pages/contact/CTAWithMarquee";

export const metadata: Metadata = {
  title: "Contact | Mario Hodzelmans",
  description:
    "Connect with Mario Hodzelmans about AI, digital strategy, e-commerce, automation and intelligent systems.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact | Mario Hodzelmans",
    description:
      "Connect with Mario Hodzelmans about AI, digital strategy, e-commerce, automation and intelligent systems.",
    url: "/contact",
  },
  twitter: {
    title: "Contact | Mario Hodzelmans",
    description:
      "Connect with Mario Hodzelmans about AI, digital strategy, e-commerce, automation and intelligent systems.",
  },
};
export default function ContactPage() {
  return (
    <>
      <div className="mxd-page-content inner-page-content">
        <InnerHeadline />
        <Socials />
        <ParallaxDividerImage />
        <SectionTitle />
        <CTAWithMarquee />
      </div>
    </>
  );
}
