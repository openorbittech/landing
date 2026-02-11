"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ArrowUpRight, ExternalLink, Eye } from "lucide-react";

interface ProjectCardStats { text: string; icon?: React.ReactNode | string; color?: string; }

interface Projects { title: string; category: string; description: string; image: string; tags: string[]; color: string; size: string; stats: ProjectCardStats[]; }

const projects: Projects[] = [
  {
    title: "Athleon",
    category: "Sports Performance Platform",
    description:
      "A precision training platform for Olympic shooters enabling real-time shot tracking, live remote monitoring, and competitive duel sessions.",
    image: "/work/athleon.png",
    tags: ["Tauri", "Cross-Platform"],
    color: "#39adff",
    size: "large",
    stats: [
      { text: "Near-Zero Latency", color: "#4F6DFF" },
      { text: "Real-Time Sync", color: "#2ECC71" }
    ],
  },
  {
    title: "HealthSync",
    category: "Healthcare App",
    description:
      "Telemedicine platform connecting patients with providers.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    tags: ["React Native", "GraphQL", "TensorFlow"],
    color: "#FF6B6B",
    size: "tall",
    stats: [
      { text: "25K+ Users" },
      { text: "150% Growth" }
    ],
  },
  {
    title: "RetailPro",
    category: "E-commerce",
    description:
      "Enterprise e-commerce with AI-powered recommendations.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    tags: ["Next.js", "Python", "Redis"],
    color: "#00D9FF",
    size: "medium",
    stats: [
      { text: "100K+ Users" },
      { text: "200% Growth" }
    ],
  },
  {
    title: "DataVault",
    category: "Data Analytics",
    description:
      "Big data platform processing 10TB+ daily.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["Apache Spark", "Kafka", "Kubernetes"],
    color: "#9B59B6",
    size: "medium",
    stats: [
      { text: "Enterprise Clients" },
      { text: "10TB+ Daily Processing" }
    ],
  },
  {
    title: "SmartCity",
    category: "IoT Platform",
    description:
      "Smart city management and monitoring system.",
    image:
      "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&q=80",
    tags: ["IoT", "React", "Node.js"],
    color: "#2ECC71",
    size: "wide",
    stats: [
      { text: "100+ Deployments" },
      { text: "400% Growth" }
    ],
  },
  {
    title: "ArtChain",
    category: "Web3 dApp",
    description:
      "NFT marketplace for digital artists.",
    image:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80",
    tags: ["Solidity", "React", "Ethereum"],
    color: "#F39C12",
    size: "small",
    stats: [
      { text: "10K+ Users" },
      { text: "500% Growth" }
    ],
  },
  {
    title: "EduTech",
    category: "EdTech Platform",
    description:
      "Online learning platform with AI tutors.",
    image:
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80",
    tags: ["React", "Python", "OpenAI"],
    color: "#E74C3C",
    size: "medium",
    stats: [
      { text: "75K+ Users" },
      { text: "250% Growth" }
    ],
  },
  {
    title: "LogiChain",
    category: "Supply Chain",
    description:
      "Blockchain-based supply chain tracking.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    tags: ["Blockchain", "IoT", "React"],
    color: "#8E44AD",
    size: "medium",
    stats: [
      { text: "50+ Clients" },
      { text: "180% Growth" }
    ],
  },
];



export function Work() {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const x = useTransform(scrollYProgress, [0, 1], ["0%", isMobile ? "0%" : "-5%"]);
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 1],
    ["#070A12", "#0B0F1C", "#0F0B1C", "#070A12"],
  );

  return (
    <motion.section
      ref={containerRef}
      id="work"
      aria-label="Our Portfolio - Featured Software Projects"
      itemScope
      itemType="https://schema.org/CreativeWork"
      style={{ backgroundColor }}
      className="relative py-32 overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 grid-pattern opacity-10" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-20"
          ref={headerRef}
        >
          <div className="max-w-2xl">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="h-px w-16 bg-gradient-to-r from-[#4F6DFF] to-transparent" />
              <span className="text-sm font-medium text-[#4F6DFF] uppercase tracking-widest">
                Selected Work
              </span>
            </motion.div>

            <motion.h2
              initial={{ y: 100, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight font-[family-name:var(--font-space-grotesk)]"
            >
              <span className="block">Our</span>
              <span className="gradient-text">Portfolio</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ x: 50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-[#A7B0C8] max-w-md mt-6 md:mt-0 md:text-right font-[family-name:var(--font-dm-sans)]"
          >
            High impact projects that transformed businesses and delighted users.
          </motion.p>
        </div>

        {/* Masonry Gallery */}
        <motion.div
          style={{ x }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[200px]"
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </motion.div>

        {/* View All CTA */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <motion.a
            href="/portfolio"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors"
          >
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const getSpanClass = () => {
    switch (project.size) {
      case "large":
        return "md:col-span-2 md:row-span-2";
      case "wide":
        return "md:col-span-2";
      case "tall":
        return "md:row-span-2";
      default:
        return "";
    }
  };

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: 100,
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
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative group ${getSpanClass()} cursor-pointer`}
    >
      <motion.div
        animate={{
          y: isHovered ? -5 : 0,
        }}
        transition={{ duration: 0.4 }}
        className="relative h-full rounded-2xl overflow-hidden"
        style={{
          boxShadow: isHovered ? `0 30px 60px ${project.color}30` : "none",
        }}
      >
        {/* Image with parallax */}
        <motion.div
          style={{ scale: imageScale, y: imageY }}
          className="absolute inset-0"
        >
          <img
            src={project.image}
            alt={`${project.title} - ${project.category}`}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Gradient Overlay */}
        <motion.div
          animate={{
            opacity: isHovered ? 1 : 0,
            background: isHovered
              ? `linear-gradient(to top, black 0%, ${project.color}60 50%, transparent 100%)`
              : `linear-gradient(to top, ${project.color}80, transparent)`,
          }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 z-10"
        />

        {/* Dark Vignette Overlay - Upward Inner Shadow for Visibility */}
        {/* <motion.div
          animate={{
            opacity: isHovered ? 0.6 : 1,
            background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 30%, transparent 60%)",
          }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 z-10"
        /> */}

        <motion.div
          animate={{
            opacity: isHovered ? 0.6 : 0.18,
          }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 bg-black z-10"
        />

        {/* Content */}
        <div className="absolute inset-0 p-6 flex flex-col justify-end z-20">
          {project.stats && project.stats.length > 0 && (
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: isHovered ? 0 : -50, opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="absolute top-4 left-4 flex flex-wrap gap-2 z-30"
            >
              {project.stats.map((stat, i) => (
                <span
                  key={i}
                  className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm flex items-center gap-1.5 ${!stat.color ? "bg-black/50 text-white" : ""}`}
                  style={stat.color ? {
                    backgroundColor: `${stat.color}24`,
                    color: stat.color
                  } : {}}
                >
                  {stat.icon && (
                    <span className="opacity-90" style={{ color: stat.color || "inherit" }}>
                      {typeof stat.icon === "string" ? stat.icon : stat.icon}
                    </span>
                  )}
                  {stat.text}
                </span>
              ))}
            </motion.div>
          )}

          {/* Category */}
          <motion.span
            animate={{ y: isHovered ? 0 : 30, opacity: isHovered ? 1 : 0.8 }}
            transition={{ duration: 0.3 }}
            className="text-sm font-medium mb-2"
            style={{ color: project.color, textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}
          >
            {project.category}
          </motion.span>

          {/* Title */}
          <motion.h3
            animate={{ y: isHovered ? 0 : 30 }}
            transition={{ duration: 0.3 }}
            className="text-2xl md:text-3xl font-bold text-white mb-2 font-[family-name:var(--font-space-grotesk)]"
            style={{ textShadow: "0 2px 10px rgba(0,0,0,0.5)" }}
          >
            {project.title}
          </motion.h3>

          {/* Description */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="text-white/80 text-sm mb-4 line-clamp-2 font-[family-name:var(--font-dm-sans)]"
          >
            {project.description}
          </motion.p>

          {/* Tags */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="flex flex-wrap gap-2"
          >
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 rounded text-xs bg-white/10 backdrop-blur-sm text-white/90"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Hover Icon */}
        <motion.div
          initial={{ scale: 0, y: -20 }}
          animate={{
            scale: isHovered ? 1 : 0,
            y: isHovered ? 0 : -20,
          }}
          transition={{ duration: 0.4, type: "spring" }}
          className="absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center z-30"
          style={{ backgroundColor: project.color }}
        >
          <ExternalLink className="w-5 h-5 text-white" />
        </motion.div>

        {/* View Count */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: isHovered ? 0 : 50, opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-4 right-4 flex items-center gap-1 text-xs text-white/60 font-[family-name:var(--font-dm-sans)]"
        >
          <Eye className="w-4 h-4" />
          <span>{3500 + index * 200}</span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
