import { useEffect, useRef, useState } from "react";

const DURATION_MS = 1400;

// Counts the leading number in `value` (e.g. "180+") up from zero once it scrolls into view.
export default function CountUp({ value }) {
  const ref = useRef(null);
  const [, target = "", suffix = value] = value.match(/^(\d+)(.*)$/) ?? [];
  const end = Number(target);
  const [current, setCurrent] = useState(end);

  useEffect(() => {
    const el = ref.current;
    if (!el || !end) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    if (!("IntersectionObserver" in window)) return undefined;

    let frame;
    setCurrent(0);

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      const start = performance.now();
      const tick = (now) => {
        const t = Math.min((now - start) / DURATION_MS, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        setCurrent(Math.round(eased * end));
        if (t < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    });
    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [end]);

  if (!target) return value;

  return (
    <span ref={ref}>
      {current}
      {suffix}
    </span>
  );
}
