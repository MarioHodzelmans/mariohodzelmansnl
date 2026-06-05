"use client";

import BlurSection from "@/components/animations/BlurSection";
import TextScramble from "@/components/animations/TextScramble";
import { initCtaMarqueeToLeft, initCtaMarqueeToRight } from "@/lib/template/ctaMarqueeEffects";
import Image from "next/image";
import { useLayoutEffect, useRef } from "react";

const categories = [
  "AI Strategy", "Digital Transformation", "Business Automation", "Knowledge Systems",
  "E-Commerce Architecture", "AI Agent Design", "Innovation Management", "Workflow Optimization",
  "Business Intelligence", "Content Systems", "Digital Operations", "Systems Architecture",
  "Growth Strategy", "Process Automation", "AI Implementation", "Decision Support",
];

const images = Array.from({ length: 16 }, (_, index) => {
  const file = `mar_${String((index % 14) + 1).padStart(2, "0")}.webp`;
  if (file === "mar_08.webp" || file === "mar_09.webp") return `/img/cta/${file}?v=2`;
  return `/img/cta/${file}`;
});

function Items({ offset = 0 }: { offset?: number }) {
  return categories.map((category, index) => (
    <div className="marquee__item item-imageblock" key={`${offset}-${category}`}>
      <div className="marquee__tags"><TextScramble className="tag tag-s tag-medium mxd-scramble">{category}</TextScramble></div>
      <div className="marquee__image"><Image alt={category} src={images[(index + offset) % images.length]} width={1200} height={900} /></div>
    </div>
  ));
}

export default function MarqueeDivider() {
  const leftTrackRef = useRef<HTMLDivElement | null>(null);
  const rightTrackRef = useRef<HTMLDivElement | null>(null);
  useLayoutEffect(() => {
    const cleanLeft = initCtaMarqueeToLeft(leftTrackRef.current);
    const cleanRight = initCtaMarqueeToRight(rightTrackRef.current);
    return () => { cleanLeft(); cleanRight(); };
  }, []);
  return (
    <BlurSection className="mxd-section">
      <div className="mxd-container fullwidth-container">
        <div className="mxd-block">
          <div className="marquee marquee-left--gsap"><div className="marquee__toleft marquee__images" ref={leftTrackRef}><Items /></div></div>
          <div className="marquee marquee-right--gsap"><div className="marquee__toright marquee__images" ref={rightTrackRef}><Items offset={8} /></div></div>
        </div>
      </div>
    </BlurSection>
  );
}
