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
    <nav
      ref={islandRef}
      className="hidden lg:flex fixed right-3.5 lg:right-8 top-1/2 -translate-y-1/2 flex-col items-center gap-2.5 p-[7px] lg:p-2.5 lg:py-4 rounded-full bg-white/80 backdrop-blur-2xl border border-green-500/15 shadow-xl z-50 transition-all duration-300 ease-out animate-[islandFloat_6s_ease-in-out_infinite]"
      aria-label="Section navigation"
    >
      {sections.map((sec) => (
        <a
          key={sec.id}
          href={`#${sec.id}`}
          className={`dot-link relative w-6 h-6 lg:w-7 lg:h-7 grid place-items-center rounded-full cursor-pointer transition-colors duration-200 hover:bg-green-500/10 ${sec.id === sections[0]?.id ? "active" : ""
            }`}
          data-section={sec.id}
        >
          <span className="hidden lg:block absolute right-[calc(100%+14px)] top-1/2 -translate-y-1/2 translate-x-2 px-3 py-1.5 rounded-lg bg-slate-900/90 text-white text-[11px] font-medium tracking-wide whitespace-nowrap opacity-0 pointer-events-none transition-all duration-300 ease-out shadow-lg group-hover:opacity-100 group-hover:translate-x-0">
            {sec.label}
          </span>
        </a>
      ))}
    </nav>
  );
}
