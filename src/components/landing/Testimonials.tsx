"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "OpenOrbit transformed our outdated systems into a modern, scalable platform. Revenue increased by 40% within 6 months.",
    author: "Sarah Jenkins",
    role: "CTO, Athleon",
    initials: "SJ",
    color: "#3b82f6",
  },
  {
    quote:
      "Working with OpenOrbit was a game-changer. They delivered a robust AI platform in record time with zero compromises.",
    author: "David Chen",
    role: "Founder, MentIQ",
    initials: "DC",
    color: "#10b981",
  },
  {
    quote:
      "The team's deep understanding of Web3 helped us launch on mainnet 3 months ahead of schedule. Exceptional quality.",
    author: "Elena Rostova",
    role: "CPO, Axton Protocol",
    initials: "ER",
    color: "#8b5cf6",
  },
  {
    quote:
      "From concept to production in 4 months. The architecture they designed scaled seamlessly from 100 to 50,000 users.",
    author: "Marcus Vane",
    role: "VP Engineering, RetailPro",
    initials: "MV",
    color: "#f59e0b",
  },
  {
    quote:
      "Professional, responsive, and incredibly talented engineers. Our mobile app conversion rates tripled after their redesign.",
    author: "Lisa Park",
    role: "CEO, HealthSync",
    initials: "LP",
    color: "#ef4444",
  },
  {
    quote:
      "Best investment we made for our digital transformation. They exceeded all expectations, on time and on budget.",
    author: "James Wilson",
    role: "CTO, Enterprise Corp",
    initials: "JW",
    color: "#06b6d4",
  },
];

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0];
}) {
  return (
    <div className="flex-shrink-0 w-[380px] glass-panel rounded-2xl p-6 mx-3 border border-black/5 hover:-translate-y-1 transition-transform">
      {/* Quote */}
      <div className="flex items-center gap-2 mb-4">
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center"
          style={{ backgroundColor: `${testimonial.color}15` }}
        >
          <Quote className="w-4 h-4" style={{ color: testimonial.color }} />
        </div>
      </div>

      <p className="text-gray-700 text-sm leading-relaxed mb-6">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-semibold"
          style={{ backgroundColor: testimonial.color }}
        >
          {testimonial.initials}
        </div>
        <div>
          <div className="text-sm font-medium text-gray-900">
            {testimonial.author}
          </div>
          <div className="text-xs text-gray-500">{testimonial.role}</div>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  const duplicated = [...testimonials, ...testimonials, ...testimonials, ...testimonials];

  return (
    <section
      id="testimonials"
      aria-label="Client Testimonials"
      className="w-full py-32 overflow-hidden relative z-10"
    >
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel text-[11px] font-mono text-blue-600 mb-5 border border-blue-500/20">
          CLIENT TESTIMONIALS
        </div>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-5 text-gray-900">
          What our clients say.
        </h2>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-xl">
          Don&apos;t just take our word for it. Here&apos;s what our partners
          have to say about working with us.
        </p>
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden">
        {/* Gradient fades */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#FAFAFA] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#FAFAFA] to-transparent z-10 pointer-events-none" />

        <div
          className="flex"
          style={{
            animationName: "marquee",
            animationDuration: "45s",
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
            width: "max-content",
          }}
        >
          {duplicated.map((t, i) => (
            <TestimonialCard key={`${t.author}-${i}`} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
