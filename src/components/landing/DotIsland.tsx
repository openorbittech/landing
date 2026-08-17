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

    /* ── Active section detection & scroll updates ── */
    function onScroll() {
      const isDesktop = window.innerWidth >= 1024;
      let scrolled = 0;
      let max = 0;

      if (isDesktop && main) {
        scrolled = main.scrollTop;
        max = main.scrollHeight - main.clientHeight;
      } else {
        const doc = document.documentElement;
        scrolled = window.scrollY || doc.scrollTop || 0;
        max = doc.scrollHeight - window.innerHeight;
      }

      /* Active section calculation based on focal point (35% down screen) */
      let activeId = "";
      if (max > 0 && max - scrolled <= 60) {
        activeId = sections[sections.length - 1]?.id || "";
      } else {
        const targetY = window.innerHeight * 0.35;
        for (const sec of sections) {
          const el = document.getElementById(sec.id);
          if (!el) continue;
          const rect = el.getBoundingClientRect();
          if (rect.top <= targetY && rect.bottom > targetY) {
            activeId = sec.id;
            break;
          }
        }
      }

      if (activeId) {
        dots?.forEach((dot) => {
          dot.classList.toggle("active", dot.getAttribute("data-section") === activeId);
        });
      }

      if (bar) {
        let pct = max > 0 ? (scrolled / max) * 100 : 0;
        if (max > 0 && (max - scrolled <= 20 || pct >= 98)) {
          pct = 100;
        }
        pct = Math.max(0, Math.min(100, pct));
        bar.style.width = pct + "%";
      }

      const footer = document.querySelector("footer");
      if (footer && islandRef.current) {
        const fr = footer.getBoundingClientRect();
        const islandRect = islandRef.current.getBoundingClientRect();
        islandRef.current.classList.toggle("hide", fr.top < islandRect.bottom + 20);
      }
    }

    if (main) main.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    onScroll();

    return () => {
      if (main) main.removeEventListener("scroll", onScroll);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
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
