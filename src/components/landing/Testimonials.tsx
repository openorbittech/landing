"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonialsRow1 = [
  {
    quote:
      "OpenOrbit transformed our outdated systems into a modern, scalable platform. Revenue increased by 40% within 6 months.",
    author: "Sarah Chen",
    role: "CTO, FinFlow",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    color: "#4F6DFF",
  },
  {
    quote:
      "Working with OpenOrbit was a game-changer. They delivered a robust telemedicine platform in record time.",
    author: "Dr. Michael Torres",
    role: "Founder, HealthSync",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
    color: "#FF6B6B",
  },
  {
    quote:
      "The team's deep understanding of AI helped us build a recommendation engine that increased conversion by 65%.",
    author: "Emily Watson",
    role: "VP Engineering, RetailPro",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    color: "#00D9FF",
  },
  {
    quote:
      "OpenOrbit's data engineering expertise saved us millions in infrastructure costs.",
    author: "David Kim",
    role: "Head of Data, DataVault",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    color: "#F39C12",
  },
  {
    quote:
      "Exceptional service and attention to detail. Our app launch was a huge success.",
    author: "Lisa Park",
    role: "CEO, TechStart",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    color: "#9B59B6",
  },
  {
    quote:
      "The best development team we've ever worked with. Truly world-class.",
    author: "James Wilson",
    role: "CTO, Enterprise Corp",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
    color: "#2ECC71",
  },
];

const testimonialsRow2 = [
  {
    quote:
      "They exceeded all expectations. Our platform handles 10x more users now.",
    author: "Maria Rodriguez",
    role: "Product Lead, ScaleUp",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    color: "#E74C3C",
  },
  {
    quote: "From concept to launch in 3 months. Incredible speed and quality.",
    author: "Alex Thompson",
    role: "Founder, RapidApp",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    color: "#3498DB",
  },
  {
    quote: "The attention to UX detail made all the difference for our users.",
    author: "Sophie Chen",
    role: "Design Director, Creative Labs",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    color: "#1ABC9C",
  },
  {
    quote: "Our mobile app conversion rates tripled after the redesign.",
    author: "Marcus Johnson",
    role: "VP Product, ShopNow",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
    color: "#F1C40F",
  },
  {
    quote: "Professional, responsive, and incredibly talented developers.",
    author: "Nina Patel",
    role: "CEO, InnovateTech",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    color: "#E91E63",
  },
  {
    quote: "Best investment we made for our digital transformation.",
    author: "Robert Brown",
    role: "CTO, FutureCorp",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    color: "#9C27B0",
  },
];

const testimonialsRow3 = [
  {
    quote: "They delivered exactly what we needed, on time and on budget.",
    author: "Jennifer Lee",
    role: "Project Manager, BuildIt",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    color: "#FF9800",
  },
  {
    quote: "The architecture they designed scaled seamlessly with our growth.",
    author: "Kevin Zhang",
    role: "Engineering Lead, GrowthLabs",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
    color: "#795548",
  },
  {
    quote: "Outstanding communication and project management throughout.",
    author: "Anna White",
    role: "COO, Startup Inc",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    color: "#607D8B",
  },
  {
    quote: "Their AI solutions gave us a competitive edge in the market.",
    author: "Daniel Kim",
    role: "Data Scientist, AI Labs",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    color: "#00BCD4",
  },
  {
    quote: "The security implementations were top-notch and thorough.",
    author: "Rachel Green",
    role: "Security Lead, SafeCorp",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    color: "#8BC34A",
  },
  {
    quote: "Highly recommend for any complex software project.",
    author: "Michael Davis",
    role: "Director, TechOps",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
    color: "#FF5722",
  },
];

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonialsRow1)[0];
}) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="flex-shrink-0 w-[400px] p-6 rounded-2xl mx-3"
      style={{
        background: `linear-gradient(135deg, ${testimonial.color}10 0%, #0B0F1C 100%)`,
        border: `1px solid ${testimonial.color}30`,
      }}
    >
      {/* Quote Icon */}
      <div className="flex items-center gap-2 mb-4">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center"
          style={{ backgroundColor: testimonial.color }}
        >
          <Quote className="w-5 h-5 text-white" />
        </div>
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="w-4 h-4 fill-current"
              style={{ color: testimonial.color }}
            />
          ))}
        </div>
      </div>

      {/* Quote Text */}
      <p className="text-white/90 mb-6 text-sm leading-relaxed font-[family-name:var(--font-dm-sans)]">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div
          className="w-12 h-12 rounded-full bg-cover bg-center border-2"
          style={{
            backgroundImage: `url(${testimonial.image})`,
            borderColor: `${testimonial.color}50`,
          }}
        />
        <div>
          <div className="text-white font-medium font-[family-name:var(--font-dm-sans)]">
            {testimonial.author}
          </div>
          <div className="text-[#A7B0C8] text-sm font-[family-name:var(--font-dm-sans)]">
            {testimonial.role}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function MarqueeRow({
  items,
  direction,
  duration,
}: {
  items: typeof testimonialsRow1;
  direction: "left" | "right";
  duration: number;
}) {
  // Create 8 copies to ensure seamless loop
  const duplicatedItems = [
    ...items,
    ...items,
    ...items,
    ...items,
    ...items,
    ...items,
    ...items,
    ...items,
  ];

  return (
    <div className="relative overflow-hidden py-4">
      {/* Gradient fades */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#070A12] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#070A12] to-transparent z-10 pointer-events-none" />

      <div
        className="flex"
        style={{
          animationName: direction === "left" ? "marqueeLeft" : "marqueeRight",
          animationDuration: `${duration}s`,
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
          willChange: "transform",
        }}
      >
        {duplicatedItems.map((testimonial, index) => (
          <TestimonialCard
            key={`${testimonial.author}-${index}`}
            testimonial={testimonial}
          />
        ))}
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-label="Client Testimonials and Reviews"
      itemScope
      itemType="https://schema.org/Review"
      className="relative py-32 overflow-hidden bg-[#070A12]"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-10" />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#070A12] via-transparent to-[#070A12] pointer-events-none z-20" />

      <div className="container mx-auto px-6 relative z-10 mb-16">
        {/* Section Header */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px flex-1 bg-gradient-to-r from-[#4F6DFF] to-transparent" />
            <span className="text-sm font-medium text-[#4F6DFF] uppercase tracking-widest font-[family-name:var(--font-dm-sans)]">
              Testimonials
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight font-[family-name:var(--font-space-grotesk)] mb-6">
            <span className="block">Client</span>
            <span className="gradient-text">Love</span>
          </h2>

          <p className="text-xl text-[#A7B0C8] max-w-2xl font-[family-name:var(--font-dm-sans)]">
            Don&apos;t just take our word for it. Here&apos;s what our clients
            have to say about working with us.
          </p>
        </motion.div>

        {/* Trust Stats */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-8 mt-12"
        >
          {[
            { value: "150+", label: "Happy Clients" },
            { value: "98%", label: "Satisfaction Rate" },
            { value: "4.9/5", label: "Average Rating" },
          ].map((stat) => (
            <div key={stat.label} className="flex items-center gap-3">
              <div className="text-3xl font-bold text-white font-[family-name:var(--font-space-grotesk)]">
                {stat.value}
              </div>
              <div className="text-sm text-[#A7B0C8] font-[family-name:var(--font-dm-sans)]">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Infinite Scroll Marquee Rows */}
      <div className="relative space-y-4">
        <MarqueeRow items={testimonialsRow1} direction="left" duration={35} />
        <MarqueeRow items={testimonialsRow2} direction="right" duration={40} />
        <MarqueeRow items={testimonialsRow3} direction="left" duration={45} />
      </div>
    </section>
  );
}
