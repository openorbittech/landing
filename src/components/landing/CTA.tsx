"use client";

import { useEffect, useRef } from "react";

export function CTA() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((r) => r.classList.add("visible"));
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
      id="contact"
      ref={ref}
      className="snap-section px-6 md:px-12 lg:px-20 py-32"
    >
      <div className="max-w-2xl">
        <p className="eyebrow mb-6 reveal">Start a project</p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 reveal stagger-1">
          Ready to build something amazing?
        </h2>
        <p className="text-lg text-slate-600 mb-10 leading-relaxed reveal stagger-2">
          Get a free technical consultation and a complete project roadmap within 48 hours. NDA-protected discussions.
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.target as HTMLFormElement;
            const data = new FormData(form);
            fetch("https://formspree.io/f/movjdgag", {
              method: "POST",
              body: data,
              headers: { Accept: "application/json" },
            }).then(() => {
              form.innerHTML = '<p class="text-green-600 font-semibold text-lg">Thanks! We\'ll be in touch within 48 hours.</p>';
            }).catch(() => {
              form.innerHTML = '<p class="text-red-500 font-semibold text-lg">Something went wrong. Please email us at hello@openorbit.tech</p>';
            });
          }}
          className="space-y-5 mb-8 reveal stagger-3"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              className="w-full px-5 py-3.5 rounded-xl border text-sm bg-white/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-green-500/40 transition-all"
              style={{ borderColor: "rgba(15, 23, 42, 0.12)" }}
            />
            <input
              type="email"
              name="email"
              placeholder="you@company.com"
              required
              className="w-full px-5 py-3.5 rounded-xl border text-sm bg-white/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-green-500/40 transition-all"
              style={{ borderColor: "rgba(15, 23, 42, 0.12)" }}
            />
          </div>
          <textarea
            name="message"
            placeholder="Tell us about your project..."
            required
            rows={4}
            className="w-full px-5 py-3.5 rounded-xl border text-sm bg-white/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-green-500/40 transition-all resize-none"
            style={{ borderColor: "rgba(15, 23, 42, 0.12)" }}
          />
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-green-500 text-white font-semibold hover:bg-green-600 transition-all hover:scale-[1.03] hover:shadow-lg hover:shadow-green-500/25"
            >
              Send message
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
            <a
              href="https://calendly.com/openorbittech/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full border font-semibold text-slate-700 hover:bg-green-50 hover:text-green-700 hover:border-green-300 transition-all"
              style={{ borderColor: "rgba(15, 23, 42, 0.15)" }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              Schedule a call
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}
