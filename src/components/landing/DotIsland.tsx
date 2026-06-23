"use client";

import { useEffect, useRef } from "react";

interface DotIslandProps {
  sections: { id: string; label: string }[];
}

export function DotIsland({ sections }: DotIslandProps) {
  const islandRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const main = document.getElementById("main-scroll");
    const bar = document.getElementById("progress-top");
    const dots = islandRef.current?.querySelectorAll(".dot-link");

    /* ── IntersectionObserver for active section ── */
    const sectionEls = sections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean) as HTMLElement[];

    const obs = new IntersectionObserver(
      (entries) => {
        let currentId = sections[0]?.id || "";
        for (const entry of entries) {
          if (entry.isIntersecting) {
            currentId = entry.target.id;
          }
        }
        dots?.forEach((dot) => {
          dot.classList.toggle("active", dot.getAttribute("data-section") === currentId);
        });
      },
      { threshold: 0, rootMargin: `-${window.innerHeight * 0.3}px 0px -${window.innerHeight * 0.3}px 0px` }
    );

    sectionEls.forEach((el) => obs.observe(el));

    /* ── Progress bar and footer hide via scroll ── */
    const scrollEl = main || document.documentElement;

    function onScroll() {
      const scrolled = scrollEl.scrollTop || window.scrollY;
      if (bar) {
        const max = scrollEl.scrollHeight - scrollEl.clientHeight;
        const pct = max > 0 ? (scrolled / max) * 100 : 0;
        bar.style.width = pct + "%";
      }

      const footer = document.querySelector("footer");
      if (footer && islandRef.current) {
        const fr = footer.getBoundingClientRect();
        islandRef.current.classList.toggle("hide", window.innerHeight > fr.top + 40);
      }
    }

    scrollEl.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      obs.disconnect();
      scrollEl.removeEventListener("scroll", onScroll);
      window.removeEventListener("scroll", onScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <nav ref={islandRef} className="dot-island" aria-label="Section navigation">
      {sections.map((sec) => (
        <a
          key={sec.id}
          href={`#${sec.id}`}
          className={`dot-link ${sec.id === sections[0]?.id ? "active" : ""}`}
          data-section={sec.id}
        >
          <span className="dot-label">{sec.label}</span>
        </a>
      ))}
    </nav>
  );
}
