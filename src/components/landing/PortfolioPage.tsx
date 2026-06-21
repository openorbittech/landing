"use client";

import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Athleon",
    category: "SaaS Platform",
    description:
      "End-to-end sports management platform with team analytics, scheduling, and real-time performance tracking serving 50K+ users.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    tags: ["React", "Node.js", "PostgreSQL", "AWS"],
    stats: { users: "50K+", growth: "300%", uptime: "99.9%" },
    client: "Athleon Inc.",
    duration: "6 months",
    team: "8 engineers",
  },
  {
    title: "MentIQ",
    category: "AI Platform",
    description:
      "AI-powered mentorship matching and skill assessment platform connecting professionals with personalized growth paths and career intelligence.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    tags: ["Next.js", "Python", "OpenAI", "GCP"],
    stats: { users: "25K+", accuracy: "94%", matches: "100K+" },
    client: "MentIQ",
    duration: "4 months",
    team: "6 engineers",
  },
  {
    title: "Axton Protocol",
    category: "Web3 Infrastructure",
    description:
      "Decentralized identity and token gating infrastructure for enterprise-grade Web3 applications with multi-chain support.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&q=80",
    tags: ["Solidity", "React", "Ethereum", "IPFS"],
    stats: { chains: "5", volume: "$2M+", users: "10K+" },
    client: "Axton Labs",
    duration: "5 months",
    team: "5 engineers",
  },
  {
    title: "RetailPro",
    category: "E-commerce",
    description:
      "Enterprise e-commerce platform with AI-powered recommendations, omnichannel inventory management, and real-time analytics.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80",
    tags: ["Next.js", "Python", "Redis", "Docker"],
    stats: { users: "100K+", conversion: "+65%", gmv: "$10M+" },
    client: "RetailPro",
    duration: "8 months",
    team: "10 engineers",
  },
  {
    title: "HealthSync",
    category: "Healthcare App",
    description:
      "Telemedicine platform connecting patients with healthcare providers. Features video consultations, health tracking, and AI diagnostics.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80",
    tags: ["React Native", "GraphQL", "TensorFlow", "GCP"],
    stats: { patients: "25K+", consultations: "100K+", rating: "4.9/5" },
    client: "HealthSync",
    duration: "7 months",
    team: "8 engineers",
  },
  {
    title: "DataVault",
    category: "Data Analytics",
    description:
      "Big data analytics platform processing 10TB+ daily with real-time dashboards, predictive insights, and automated reporting.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    tags: ["Apache Spark", "Kafka", "Elasticsearch", "K8s"],
    stats: { data: "10TB+/day", latency: "<50ms", clients: "50+" },
    client: "DataVault",
    duration: "12 months",
    team: "12 engineers",
  },
];

/* ── Dot Navigation ───────────────────────────────────────── */

function DotNav({
  total,
  active,
  onDotClick,
}: {
  total: number;
  active: number;
  onDotClick: (i: number) => void;
}) {
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center gap-3">
      <div className="glass-panel-strong rounded-full px-1.5 py-3 flex flex-col items-center gap-2.5 shadow-sm border border-black/5">
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            onClick={() => onDotClick(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              active === i
                ? "bg-blue-500 scale-125 shadow-[0_0_8px_rgba(59,130,246,0.4)]"
                : "bg-gray-300 hover:bg-gray-500"
            }`}
            aria-label={`Go to section ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

/* ── Progress Bar ─────────────────────────────────────────── */

function ProgressBar() {
  const { scrollYProgress } = useScroll();
  const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-500 to-emerald-500 z-[60] origin-left"
      style={{ width }}
    />
  );
}

/* ── Project Section ──────────────────────────────────────── */

function ProjectSection({
  project,
  index,
  isEven,
}: {
  project: (typeof projects)[0];
  index: number;
  isEven: boolean;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center py-20 lg:py-0"
      id={`project-${index}`}
    >
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div
          className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
            !isEven ? "" : ""
          }`}
        >
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? -60 : 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`relative ${isEven ? "lg:order-1" : "lg:order-2"}`}
          >
            <div className="aspect-[16/10] rounded-3xl overflow-hidden relative glass-panel border border-black/5 shadow-xl group">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${project.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? 60 : -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className={`${isEven ? "lg:order-2" : "lg:order-1"}`}
          >
            <span className="inline-block px-3 py-1 rounded-full border border-blue-500/20 text-blue-600 font-mono text-[10px] tracking-[0.2em] mb-6 bg-blue-500/5">
              {project.category.toUpperCase()}
            </span>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-4">
              {project.title}
            </h2>

            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              {project.description}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {Object.entries(project.stats).map(([key, value]) => (
                <div
                  key={key}
                  className="text-center p-4 rounded-xl glass-panel border border-black/5"
                >
                  <div className="text-xl font-bold text-blue-600">{value}</div>
                  <div className="text-xs text-gray-500 capitalize">{key}</div>
                </div>
              ))}
            </div>

            {/* Details */}
            <div className="flex flex-wrap gap-6 mb-6 text-sm text-gray-600">
              <div>
                <span className="block text-gray-400 text-xs">Client</span>
                <span className="text-gray-900 font-medium">
                  {project.client}
                </span>
              </div>
              <div>
                <span className="block text-gray-400 text-xs">Duration</span>
                <span className="text-gray-900 font-medium">
                  {project.duration}
                </span>
              </div>
              <div>
                <span className="block text-gray-400 text-xs">Team</span>
                <span className="text-gray-900 font-medium">
                  {project.team}
                </span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-[11px] font-mono bg-gray-100 text-gray-600"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ── Portfolio Page ────────────────────────────────────────── */

export function PortfolioPage() {
  const [activeSection, setActiveSection] = useState(0);
  const totalSections = projects.length + 2; // intro + projects + cta

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("[id^='portfolio-section-'], [id^='project-']");
      let current = 0;
      sections.forEach((section, i) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight / 2) {
          current = i;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDotClick = (i: number) => {
    const allSections = [
      document.getElementById("portfolio-section-intro"),
      ...projects.map((_, idx) => document.getElementById(`project-${idx}`)),
      document.getElementById("portfolio-section-cta"),
    ];
    allSections[i]?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-gray-900 overflow-x-hidden">
      <ProgressBar />
      <Navbar />
      <DotNav total={totalSections} active={activeSection} onDotClick={handleDotClick} />

      {/* ── Hero Section ──────────────────────────────────── */}
      <section
        id="portfolio-section-intro"
        className="min-h-screen flex items-center pt-24 pb-16"
      >
        <div className="max-w-7xl mx-auto px-6 w-full">
          {/* Back Link */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <a
              href="/"
              className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </a>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl mb-20"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 text-gray-900">
              Our{" "}
              <span className="gradient-text">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
              Award-winning projects that transformed businesses and delighted
              users. Each project is a testament to our commitment to
              excellence.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { value: "150+", label: "Projects Completed" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "40+", label: "Industries Served" },
              { value: "12", label: "Years of Excellence" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center p-6 rounded-2xl glass-panel border border-black/5"
              >
                <div className="text-2xl md:text-3xl font-bold gradient-text">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Project Sections ──────────────────────────────── */}
      {projects.map((project, index) => (
        <ProjectSection
          key={project.title}
          project={project}
          index={index}
          isEven={index % 2 === 0}
        />
      ))}

      {/* ── CTA Section ───────────────────────────────────── */}
      <section
        id="portfolio-section-cta"
        className="min-h-[60vh] flex items-center py-20"
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="glass-panel-strong rounded-[2rem] p-12 md:p-20 border border-black/5 shadow-lg relative overflow-hidden"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gradient-to-br from-blue-400/15 via-emerald-400/10 to-transparent rounded-full blur-[80px] pointer-events-none"></div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-5 text-gray-900">
                Ready to Build Your{" "}
                <span className="gradient-text">Next Project</span>?
              </h2>
              <p className="text-gray-600 text-lg mb-8 max-w-xl mx-auto">
                Let&apos;s discuss how we can help bring your vision to life.
              </p>
              <a
                href="/#contact"
                className="moving-border-btn rounded-full px-10 py-4 text-[15px] font-semibold text-gray-900 transition-transform hover:scale-105 inline-block shadow-sm"
              >
                Start Your Project →
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
