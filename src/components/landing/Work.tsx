"use client";

import { useEffect, useRef } from "react";

const projects = [
  {
    name: "MentIQ",
    tag: "Predictive retention SaaS",
    desc: "Churn-risk accounts surfaced weeks earlier.",
    href: "/portfolio#mentiq",
    media: { type: "video", src: "/videos/optimized/mentiq-demo.mp4" },
  },
  {
    name: "Athleon",
    tag: "Sports performance platform",
    desc: "Injury-risk signals delivered in real time.",
    href: "/portfolio#athleon",
    media: { type: "video", src: "/videos/athleon.mp4" },
  },
  {
    name: "Axton Protocol",
    tag: "DeFi OTC infrastructure",
    desc: "Settlement transparency without slippage.",
    href: "/portfolio#axton",
    media: { type: "image", src: "/images/axton-1.png" },
  },
];

export function Work() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal, .reveal-scale").forEach((r) => r.classList.add("visible"));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="work"
      ref={ref}
      className="snap-section px-6 md:px-12 lg:px-20 py-24 border-b border-slate-900/5"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div>
            <p className="eyebrow mb-6 reveal">Portfolio</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight max-w-2xl reveal stagger-1">
              Dynamic solutions built for scale.
            </h2>
          </div>
          <a
            href="/portfolio"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-900/10 text-slate-900 text-sm font-semibold hover:bg-green-50 transition-all reveal stagger-2"
          >
            View full portfolio
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <a
              key={p.name}
              href={p.href}
              className={`group glass-panel rounded-2xl overflow-hidden reveal stagger-${i + 1} hover:bg-green-50/60 transition-all no-underline block`}
            >
              <div className="aspect-video overflow-hidden border-b border-slate-900/5" style={{ background: "rgba(15, 23, 42, 0.04)" }}>
                {p.media.type === "video" ? (
                  <video src={p.media.src} autoPlay muted loop playsInline className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500" />
                ) : (
                  <img src={p.media.src} alt={p.name} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500" loading="lazy" />
                )}
              </div>
              <div className="p-6">
                <p className="text-[11px] text-green-700 uppercase tracking-wider mb-2">{p.name}</p>
                <p className="font-semibold text-slate-900 mb-1">{p.tag}</p>
                <p className="text-sm text-slate-600">{p.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
