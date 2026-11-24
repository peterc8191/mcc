import { useEffect } from "react";

// Elements that fade up as they scroll into view. Siblings matched together are staggered.
const REVEAL_SELECTOR = [
  ".section .eyebrow",
  ".section-heading",
  ".section-subtext",
  ".speciality-card",
  ".project-card",
  ".value-card",
  ".timeline > li",
  ".stats-bar__item",
  ".projects-filter",
  ".project-detail-main > *",
  ".project-detail-sidebar",
  ".project-gallery__thumb",
  ".cta-banner__inner > *",
  ".site-footer__grid > *",
].join(",");

const STAGGER_MS = 90;
const MAX_STAGGER_STEPS = 5;

export default function useScrollReveal(key) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    if (!("IntersectionObserver" in window)) return undefined;

    const elements = [...document.querySelectorAll(REVEAL_SELECTOR)];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          el.dataset.reveal = "visible";
          observer.unobserve(el);
          // Once revealed, hand styling back to the element (e.g. its own hover transitions)
          const done = (e) => {
            if (e.target !== el) return;
            el.removeEventListener("transitionend", done);
            delete el.dataset.reveal;
            el.style.removeProperty("--reveal-delay");
          };
          el.addEventListener("transitionend", done);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );

    elements.forEach((el) => {
      const siblings = [...el.parentElement.children].filter((child) => elements.includes(child));
      const step = Math.min(siblings.indexOf(el), MAX_STAGGER_STEPS);
      el.style.setProperty("--reveal-delay", `${step * STAGGER_MS}ms`);
      el.dataset.reveal = "hidden";
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
      elements.forEach((el) => {
        delete el.dataset.reveal;
      });
    };
  }, [key]);
}
