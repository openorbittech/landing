"use client";

import { useEffect, useRef } from "react";
import { Star, Quote } from "lucide-react";

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "OpenOrbit transformed our complex SaaS workflow into a high-performance web app in record time. Their senior engineering depth and autonomous execution are second to none.",
    author: "Alex Rivera",
    role: "Co-Founder & CTO",
    company: "Veloce AI",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
  },
  {
    id: 2,
    quote:
      "The velocity and clarity OpenOrbit brought to our mobile app launch surpassed every agency we've previously hired. Zero management overhead, exceptional code quality.",
    author: "Marcus Chen",
    role: "VP of Product",
    company: "Apex Mobility",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
  },
  {
    id: 3,
    quote:
      "They delivered a enterprise-grade data engine & dashboard well ahead of schedule. Truly founder-led mindset with deep technical capability.",
    author: "Sarah Jenkins",
    role: "Head of Engineering",
    company: "FinFlow Systems",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
  },
];

export function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((node) => {
              node.classList.add("visible");
            });
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
      id="testimonials"
      ref={ref}
      className="snap-section px-6 md:px-12 lg:px-20 py-16 md:py-24 border-b border-slate-900/5"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div>
            <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-green-600 font-semibold mb-6 reveal">Client Feedback</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight reveal stagger-1">
              What leaders say about us.
            </h2>
          </div>
          <div className="flex items-center gap-2 reveal stagger-2">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="currentColor" />
              ))}
            </div>
            <span className="text-sm font-semibold text-slate-700 ml-1">
              5.0 / 5.0 Rating
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={t.id}
              className={`p-8 rounded-2xl bg-white border border-slate-900/10 shadow-sm hover:shadow-md hover:border-green-500/30 transition-all flex flex-col justify-between reveal stagger-${
                idx + 1
              }`}
            >
              <div>
                <Quote className="text-green-500 mb-6 opacity-60" size={32} />
                <p className="text-slate-700 leading-relaxed mb-8 text-base">
                  "{t.quote}"
                </p>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                <img
                  src={t.avatar}
                  alt={t.author}
                  className="w-12 h-12 rounded-full object-cover border border-slate-200"
                />
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm">
                    {t.author}
                  </h4>
                  <p className="text-xs text-slate-500">
                    {t.role} · <span className="text-slate-700 font-medium">{t.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
