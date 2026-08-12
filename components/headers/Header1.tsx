"use client";

import Link from "next/link";
import { useRef } from "react";
import ThemeSwitcher from "@/components/headers/ThemeSwitcher";
import TextScramble from "@/components/animations/TextScramble";
import { useLenis } from "@/components/common/LenisContext";
import { useHeaderScrollHidden } from "@/hooks/useHeaderScrollHidden";
import CommonLoadAnimation, {
  CommonLoadFade,
} from "@/components/animations/CommonLoadAnimation";
import { usePathname } from "next/navigation";

type Header1Props = {
  initialTheme: "light" | "dark";
};

export default function Header1({ initialTheme }: Header1Props) {
  const headerRef = useRef<HTMLElement>(null);
  const lenis = useLenis();
  useHeaderScrollHidden(headerRef, lenis);
  const pathname = usePathname();
  const isPermanent =
    pathname === "/index-branding-studio" ||
    pathname === "/index-digital-agency" ||
    pathname === "/index-web-studio" ||
    pathname === "/index-freelancer-portfolio" ||
    pathname === "/index-design-studio" ||
    pathname === "/works-default" ||
    pathname === "/services" ||
    pathname === "/team" ||
    pathname === "/blog-creative";
  return (
    <CommonLoadAnimation>
      <header
        id="header"
        ref={headerRef}
        className={`mxd-header ${isPermanent ? "mxd-header-permanent" : ""}`}
      >
        <CommonLoadFade index={0}>
          <div className="mxd-header__logo loading-fade">
            <Link className="mxd-logo" href={`/`}>
              <svg
                className="mxd-logo__image"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 332.2 336.4"
                aria-hidden="true"
                focusable="false"
              >
                <polygon
                  fill="currentColor"
                  points="241.9 0 166.1 110.9 90.3 0 0 0 0 336.4 88.5 336.4 88.5 124.3 166.1 232.8 243.7 124.3 243.7 336.4 332.2 336.4 332.2 0 241.9 0"
                />
              </svg>
              <div className="mxd-logo__text">
                <TextScramble className="mxd-scramble">Mario</TextScramble>
                <TextScramble className="mxd-scramble">Hodzelmans</TextScramble>
              </div>
            </Link>
          </div>
        </CommonLoadFade>
        <CommonLoadFade index={1}>
          <div className="mxd-header__controls loading-fade">
            <Link
              className="btn mxd-header__link slide-right"
              href="/contact"
              aria-label="Connect with Mario"
            >
              <span className="btn-caption">
                <TextScramble className="mxd-scramble">Connect</TextScramble>
              </span>
            </Link>
            <ThemeSwitcher
              isPermanent={isPermanent}
              initialTheme={initialTheme}
            />
          </div>
        </CommonLoadFade>
      </header>
    </CommonLoadAnimation>
  );
}
