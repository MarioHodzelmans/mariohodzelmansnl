"use client";

/* eslint-disable react-hooks/refs -- RefObjects passed to ref props; slotters only assign nodes */
import type { MutableRefObject } from "react";
import { useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AutoplayLoopVideo from "@/components/media/AutoplayLoopVideo";
import { useMxdMenuGsap, useMxdMenuGsapRefs } from "@/hooks/useMxdMenuGsap";
import TextScramble from "@/components/animations/TextScramble";

function normalizePath(path: string): string {
  if (!path) return "/";
  const normalized =
    path.endsWith("/") && path.length > 1 ? path.slice(0, -1) : path;
  return normalized || "/";
}

function pathMatches(pathname: string, href: string): boolean {
  return normalizePath(pathname) === normalizePath(href);
}

function makeSlotters<T>(
  arr: MutableRefObject<(T | null)[]>,
  length: number,
): ((element: T | null) => void)[] {
  return Array.from({ length }, (_, index) => (element: T | null) => {
    arr.current[index] = element;
  });
}

type NavProps = {
  navNode: HTMLElement | null;
  toggleNode: HTMLElement | null;
  hamburgerNode: HTMLElement | null;
  setNavNode: (element: HTMLElement | null) => void;
  registerMenuReset: (fn: (() => void) | null) => void;
};

const menuItems = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/cases" },
  { label: "About", href: "/about-me" },
  { label: "Writing", href: "/blog-standard" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
] as const;

export default function Nav({
  navNode,
  toggleNode,
  hamburgerNode,
  setNavNode,
  registerMenuReset,
}: NavProps) {
  const pathname = usePathname();
  const gsapRefs = useMxdMenuGsapRefs();

  const headerSlots = useMemo(
    () => makeSlotters(gsapRefs.headerSplitTargets, 3),
    [gsapRefs],
  );
  const mainSlots = useMemo(
    () => makeSlotters(gsapRefs.mainMenuLinkSpans, menuItems.length * 2),
    [gsapRefs],
  );
  const contactSlots = useMemo(
    () => makeSlotters(gsapRefs.contactAnchors, 5),
    [gsapRefs],
  );
  const contactRevealSlots = useMemo(
    () => makeSlotters(gsapRefs.contactRevealTargets, 5),
    [gsapRefs],
  );
  const footerSlots = useMemo(
    () => makeSlotters(gsapRefs.footerSplitTargets, 2),
    [gsapRefs],
  );
  const dividerSlots = useMemo(
    () => makeSlotters(gsapRefs.dividers, menuItems.length + 1),
    [gsapRefs],
  );
  const liSlots = useMemo(
    () => makeSlotters(gsapRefs.menuItemLis, menuItems.length),
    [gsapRefs],
  );
  const toggleSlots = useMemo(
    () => makeSlotters(gsapRefs.menuToggles, menuItems.length),
    [gsapRefs],
  );

  useMxdMenuGsap(
    navNode,
    toggleNode,
    hamburgerNode,
    registerMenuReset,
    gsapRefs,
  );

  return (
    <nav className="mxd-menu mxd-menu--gsap" ref={setNavNode}>
      <div ref={gsapRefs.backdrop} className="mxd-menu__backdrop" />
      <div ref={gsapRefs.overlay} className="mxd-menu__overlay">
        <div
          ref={gsapRefs.content}
          className="mxd-menu__content"
          data-lenis-prevent=""
        >
          <div className="mxd-menu__logo">
            <Link href="/" className="menu-logo">
              <svg
                className="menu-logo__image"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                viewBox="0 0 42.4 36"
                aria-hidden="true"
              >
                <path d="M25.8,13.8h2.8v5.5h-2.8v-5.5ZM13.8,16.6v2.8h2.8v-5.5h-2.8v2.8ZM32.2,0v2.8h-2.8V0h2.8ZM26.7,5.5h2.8v-2.8h-2.8v2.8ZM21.2,5.5h-5.5v2.8h11.1v-2.8h-5.5ZM12.8,2.8v2.8h2.8v-2.8h-2.8ZM10.1,0v2.8h2.8V0h-2.8ZM7.3,5.5v5.5h2.8V2.8h-2.8v2.8ZM4.5,13.8v2.8H0v2.8h2.8v2.8H0v2.8h2.8v11.1h2.8v-8.3h5.5v-2.8h-5.5v-8.3h1.9v-5.5h-2.9v2.8ZM35,5.5v-2.8h-2.8v8.3h2.8v-5.5ZM42.4,19.4v-2.8h-4.7v-5.5h-2.8v5.5h1.9v8.3h-5.5v2.8h5.5v8.3h2.8v-11.1h2.8v-2.8h-2.8v-2.8h2.8Z" />
              </svg>
              <div className="menu-logo__text">
                <span ref={headerSlots[0]}>Mario</span>
                <span ref={headerSlots[1]}>Hodzelmans</span>
              </div>
            </Link>
          </div>

          <div className="mxd-menu__media">
            <div ref={gsapRefs.mediaWrapper} className="menu-media__wrapper">
              <AutoplayLoopVideo
                poster="video/900x1280_menu.webp"
                sources={[
                  { type: "video/mp4", src: "video/900x1280_menu.mp4" },
                  { type: "video/webm", src: "video/900x1280_menu.webm" },
                ]}
              />
            </div>
          </div>

          <div className="mxd-menu__navigation">
            <div className="mxd-menu__inner">
              <div className="mxd-menu__shadow shadow-top" />
              <div className="mxd-menu__caption">
                <p ref={headerSlots[2]}>
                  A collection of selected work, experiments
                  <br />
                  and ideas across AI and digital systems.
                </p>
              </div>

              <div className="mxd-menu__left">
                <div className="main-menu">
                  <div className="main-menu__content">
                    <ul id="main-menu" className="main-menu__accordion">
                      {menuItems.map((item, index) => {
                        const active = pathMatches(pathname, item.href);
                        return (
                          <li
                            key={item.href}
                            ref={liSlots[index]}
                            className={`main-menu__item${active ? " main-menu__item--current" : ""}`}
                          >
                            {index === 0 && (
                              <div
                                ref={dividerSlots[0]}
                                className="main-menu__divider divider-top"
                              />
                            )}
                            <div
                              ref={toggleSlots[index]}
                              className="main-menu__toggle"
                            >
                              <Link
                                className="main-menu__link"
                                href={item.href}
                              >
                                <span
                                  ref={mainSlots[index * 2]}
                                  className="main-menu__number"
                                >
                                  / {String(index + 1).padStart(2, "0")}
                                </span>
                                <span
                                  ref={mainSlots[index * 2 + 1]}
                                  className="main-menu__caption"
                                >
                                  {item.label}
                                </span>
                              </Link>
                            </div>
                            <div
                              ref={dividerSlots[index + 1]}
                              className="main-menu__divider divider-bottom"
                            />
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mxd-menu__right">
                <div className="menu-contact">
                  <div className="menu-contact__item">
                    <ul className="menu-contact__list">
                      <li>
                        <a
                          ref={contactSlots[0]}
                          className="tag tag-m"
                          href="mailto:mariohodzelmans@gmail.com?subject=Message%20from%20your%20site"
                        >
                          <TextScramble
                            ref={contactRevealSlots[0]}
                            className="mxd-scramble"
                          >
                            mariohodzelmans@gmail.com
                          </TextScramble>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="menu-contact__item">
                    <ul className="menu-contact__list">
                      <li>
                        <a
                          ref={contactSlots[1]}
                          className="tag tag-m"
                          href="https://www.google.com/maps/search/?api=1&query=50.882419,5.924062"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span ref={contactRevealSlots[1]}>
                            50.882419° N,
                            <br />
                            5.924062° E
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="menu-contact__item">
                    <ul className="menu-contact__list">
                      {[
                        [
                          "LinkedIn",
                          "https://www.linkedin.com/in/mariohodzelmans/",
                        ],
                        ["X (Twitter)", "https://x.com/MarioHodzelmans"],
                        ["GitHub", "https://github.com/mariohodzelmans"],
                      ].map(([label, href], index) => (
                        <li key={href}>
                          <a
                            ref={contactSlots[index + 2]}
                            className="tag tag-m"
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <TextScramble
                              ref={contactRevealSlots[index + 2]}
                              className="mxd-scramble"
                            >
                              {label}
                            </TextScramble>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mxd-menu__shadow" />
              <div className="mxd-menu__data">
                <div className="menu-data__left">
                  <p ref={footerSlots[0]} className="menu-data__text">
                    Mario Hodzelmans
                  </p>
                </div>
                <div className="menu-data__right">
                  <p ref={footerSlots[1]} className="menu-data__text">
                    ©{new Date().getFullYear()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
