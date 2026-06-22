"use client";

import { useEffect, useRef } from "react";

interface DotIslandProps {
  sections: { id: string; label: string }[];
}

export function DotIsland({ sections }: DotIslandProps) {
  const islandRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const main = document.getElementById("main-scroll");
    const scrollEl = main || document.documentElement;
    const dots = islandRef.current?.querySelectorAll(".dot-link");
    const bar = document.getElementById("progress-top");

    let ticking = false;

    function update() {
      const scrolled = scrollEl.scrollTop;
      let currentId = sections[0]?.id || "";
      sections.forEach((sec) => {
        const el = document.getElementById(sec.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight / 2.5) {
            currentId = sec.id;
          }
        }
      });

      dots?.forEach((dot) => {
        dot.classList.toggle("active", dot.getAttribute("data-section") === currentId);
      });

      const footer = document.querySelector("footer");
      if (footer && islandRef.current) {
        const footerRect = footer.getBoundingClientRect();
        const viewBottom = window.innerHeight;
        islandRef.current.classList.toggle("hide", viewBottom > footerRect.top + 40);
      }

      if (bar) {
        const max = scrollEl.scrollHeight - scrollEl.clientHeight;
        const pct = max > 0 ? (scrolled / max) * 100 : 0;
        bar.style.width = pct + "%";
      }
    }

    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(() => {
          update();
          ticking = false;
        });
        ticking = true;
      }
    }

    scrollEl.addEventListener("scroll", onScroll, { passive: true });
    update();

    return () => scrollEl.removeEventListener("scroll", onScroll);
  }, [sections]);

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
