"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Code2,
  Smartphone,
  Cloud,
  Database,
  Bot,
  Palette,
  ArrowUpRight,
  Globe,
  Cpu,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Custom web apps with React, Next.js, Node.js. Scalable, fast, SEO-friendly.",
    features: [
      "React & Next.js",
      "Node.js Backend",
      "API Development",
      "Performance",
    ],
    color: "#4F6DFF",
    size: "large",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native & cross-platform apps for iOS & Android.",
    features: ["React Native", "iOS & Android", "Flutter"],
    color: "#FF6B6B",
    size: "small",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure & DevOps.",
    features: ["AWS & Azure", "Kubernetes", "Serverless"],
    color: "#00D9FF",
    size: "medium",
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "Transform data into actionable insights.",
    features: ["Data Pipelines", "Big Data", "Analytics"],
    color: "#9B59B6",
    size: "small",
  },
  {
    icon: Bot,
    title: "AI & Automation",
    description: "Leverage AI for competitive advantage.",
    features: ["Machine Learning", "Process Automation", "Chatbots"],
    color: "#F39C12",
    size: "large",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful interfaces that users love.",
    features: ["User Research", "Wireframing", "Design Systems"],
    color: "#E74C3C",
    size: "small",
  },
  {
    icon: Globe,
    title: "Web3 & Blockchain",
    description: "Decentralized apps and smart contracts.",
    features: ["Smart Contracts", "dApps", "DeFi"],
    color: "#8E44AD",
    size: "medium",
  },
  {
    icon: Cpu,
    title: "IoT Solutions",
    description: "Connected devices and embedded systems.",
    features: ["Hardware", "Firmware", "Cloud"],
    color: "#2ECC71",
    size: "small",
  },
];

export function Services() {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { once: true, margin: "-100px" });


  return (
    <section
      ref={containerRef}
      id="services"
      aria-label="Our Services - Software Development Solutions"
      itemScope
      itemType="https://schema.org/ItemList"
      className="relative py-32 overflow-hidden bg-[#070A12]"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-[#4F6DFF]/10 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-[#FF6B6B]/10 rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-4xl mb-20" ref={headerRef}>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-px flex-1 bg-gradient-to-r from-[#4F6DFF] to-transparent" />
            <span className="text-sm font-medium text-[#4F6DFF] uppercase tracking-widest">
              What We Do
            </span>
          </motion.div>

          <motion.h2
            initial={{ y: 100, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight font-[family-name:var(--font-space-grotesk)] mb-6"
          >
            <span className="block">End-to-End</span>
            <span className="gradient-text">Solutions</span>
          </motion.h2>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-[#A7B0C8] max-w-2xl leading-relaxed font-[family-name:var(--font-dm-sans)]"
          >
            From concept to deployment, we deliver complete digital solutions
            that drive business growth.
          </motion.p>
        </div>

        {/* Bento Grid Layout */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[minmax(200px,auto)]"
        >
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center"
        >
          <motion.p
            className="text-[#A7B0C8] mb-6 text-lg font-[family-name:var(--font-dm-sans)]"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Need something custom? We adapt to your unique requirements.
          </motion.p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary inline-flex items-center gap-2 text-lg"
          >
            Discuss Your Project
            <ArrowUpRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const spanClass =
    service.size === "large"
      ? "md:col-span-2 md:row-span-2"
      : service.size === "medium"
        ? "md:col-span-2"
        : "";

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: 50,
        scale: 0.9,
      }}
      animate={
        isInView
          ? {
            opacity: 1,
            y: 0,
            scale: 1,
          }
          : {}
      }
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative group ${spanClass}`}
    >
      <motion.div
        animate={{
          y: isHovered ? -5 : 0,
        }}
        transition={{ duration: 0.4 }}
        className="relative h-full p-6 rounded-2xl overflow-hidden cursor-pointer"
        style={{
          background: `linear-gradient(135deg, ${service.color}08 0%, #0B0F1C 100%)`,
          border: `1px solid ${service.color}20`,
          boxShadow: isHovered ? `0 30px 60px ${service.color}20` : "none",
        }}
      >
        {/* Animated Background */}
        <motion.div
          animate={{
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1.5 : 1,
          }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 50% 0%, ${service.color}20, transparent 70%)`,
          }}
        />

        {/* Icon */}
        <motion.div
          animate={{
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.3 }}
          className="relative z-10 w-14 h-14 rounded-xl flex items-center justify-center mb-4"
          style={{ backgroundColor: `${service.color}20` }}
        >
          <service.icon className="w-7 h-7" style={{ color: service.color }} />
        </motion.div>

        {/* Content */}
        <div className="relative z-10">
          <motion.h3
            className="text-xl md:text-2xl font-bold text-white mb-2 font-[family-name:var(--font-space-grotesk)]"
            animate={{ y: isHovered ? -5 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {service.title}
          </motion.h3>

          <motion.p
            animate={{ y: isHovered ? -3 : 0, opacity: isHovered ? 1 : 0.7 }}
            transition={{ duration: 0.3 }}
            className="text-[#A7B0C8] mb-4 leading-relaxed font-[family-name:var(--font-dm-sans)]"
          >
            {service.description}
          </motion.p>

          {/* Features */}
          <div className="flex flex-wrap gap-2">
            {service.features.map((feature, i) => (
              <motion.span
                key={feature}
                initial={{ scale: 0, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ delay: 0.2 + i * 0.05 }}
                whileHover={{ scale: 1.1, backgroundColor: service.color }}
                className="px-3 py-1 rounded-full text-xs font-medium transition-colors"
                style={{
                  backgroundColor: `${service.color}20`,
                  color: service.color,
                }}
              >
                {feature}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Arrow indicator */}
        <motion.div
          animate={{
            x: isHovered ? 0 : -20,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-4 right-4"
        >
          <ArrowUpRight className="w-6 h-6" style={{ color: service.color }} />
        </motion.div>

        {/* Large number */}
        <motion.div
          animate={{
            opacity: isHovered ? 0.2 : 0.05,
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-2 right-6 text-7xl font-bold font-[family-name:var(--font-space-grotesk)] pointer-events-none"
          style={{ color: service.color }}
        >
          {String(index + 1).padStart(2, "0")}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
