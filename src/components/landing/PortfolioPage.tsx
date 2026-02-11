"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowLeft, ArrowRight, ExternalLink, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "FinFlow",
    category: "Fintech Platform",
    description: "A comprehensive financial management platform serving 50K+ users with real-time analytics and automated reporting.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    tags: ["React", "Node.js", "PostgreSQL", "AWS"],
    color: "#4F6DFF",
    stats: { users: "50K+", growth: "300%", uptime: "99.9%" },
    client: "FinFlow Inc.",
    duration: "6 months",
    team: "8 developers",
  },
  {
    title: "HealthSync",
    category: "Healthcare App",
    description: "Telemedicine platform connecting patients with healthcare providers. Features video consultations and health tracking.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80",
    tags: ["React Native", "GraphQL", "TensorFlow", "GCP"],
    color: "#FF6B6B",
    stats: { users: "25K+", growth: "150%", consultations: "100K+" },
    client: "HealthSync",
    duration: "4 months",
    team: "6 developers",
  },
  {
    title: "RetailPro",
    category: "E-commerce Solution",
    description: "Enterprise e-commerce platform with AI-powered recommendations and omnichannel inventory management.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80",
    tags: ["Next.js", "Python", "Redis", "Docker"],
    color: "#00D9FF",
    stats: { users: "100K+", growth: "200%", conversion: "65%" },
    client: "RetailPro",
    duration: "8 months",
    team: "10 developers",
  },
  {
    title: "DataVault",
    category: "Data Analytics",
    description: "Big data analytics platform processing 10TB+ daily with real-time dashboards and predictive insights.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    tags: ["Apache Spark", "Kafka", "Elasticsearch", "Kubernetes"],
    color: "#9B59B6",
    stats: { users: "Enterprise", data: "10TB+", latency: "<50ms" },
    client: "DataVault",
    duration: "12 months",
    team: "12 developers",
  },
  {
    title: "SmartCity",
    category: "IoT Platform",
    description: "Smart city management and monitoring system with real-time traffic, energy, and environmental sensors.",
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=1200&q=80",
    tags: ["IoT", "React", "Node.js", "MQTT"],
    color: "#2ECC71",
    stats: { users: "100+", sensors: "10K+", cities: "5" },
    client: "SmartCity Solutions",
    duration: "10 months",
    team: "9 developers",
  },
  {
    title: "ArtChain",
    category: "Web3 dApp",
    description: "NFT marketplace for digital artists with smart contract automation and crypto payments.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&q=80",
    tags: ["Solidity", "React", "Ethereum", "Web3.js"],
    color: "#F39C12",
    stats: { users: "10K+", nfts: "50K+", volume: "$2M" },
    client: "ArtChain",
    duration: "5 months",
    team: "5 developers",
  },
  {
    title: "EduTech",
    category: "EdTech Platform",
    description: "Online learning platform with AI tutors, interactive courses, and progress tracking.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=1200&q=80",
    tags: ["React", "Python", "OpenAI", "AWS"],
    color: "#E74C3C",
    stats: { users: "75K+", courses: "500+", completion: "85%" },
    client: "EduTech Solutions",
    duration: "7 months",
    team: "7 developers",
  },
  {
    title: "LogiChain",
    category: "Supply Chain",
    description: "Blockchain-based supply chain tracking with transparency and real-time shipment monitoring.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80",
    tags: ["Blockchain", "IoT", "React", "Hyperledger"],
    color: "#8E44AD",
    stats: { users: "50+", shipments: "1M+", partners: "100+" },
    client: "LogiChain",
    duration: "9 months",
    team: "8 developers",
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const cardRef = useRef(null);
  const isEven = index % 2 === 0;

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [isEven ? -100 : 100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <motion.div
      ref={cardRef}
      style={{ x, opacity }}
      className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center py-20 ${index !== projects.length - 1 ? "border-b border-white/10" : ""
        }`}
    >
      {/* Image */}
      <div className={`relative ${isEven ? "lg:order-1" : "lg:order-2"}`}>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="relative aspect-[16/10] rounded-2xl overflow-hidden group"
        >
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div
            className="absolute inset-0 transition-opacity duration-300"
            style={{
              background: `linear-gradient(to top, ${project.color}60, transparent)`,
              opacity: 0.6,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

          {/* Hover Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileHover={{ opacity: 1, y: 0 }}
            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center"
              style={{ backgroundColor: project.color }}
            >
              <ExternalLink className="w-6 h-6 text-white" />
            </div>
          </motion.div>
        </motion.div>

        {/* Floating Badge */}
        <div
          className="absolute -top-4 -right-4 px-4 py-2 rounded-full text-sm font-medium"
          style={{
            backgroundColor: project.color,
            color: "white",
          }}
        >
          {project.category}
        </div>
      </div>

      {/* Content */}
      <div className={`${isEven ? "lg:order-2" : "lg:order-1"}`}>
        <motion.div
          initial={{ x: isEven ? 50 : -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 font-[family-name:var(--font-space-grotesk)]">
            {project.title}
          </h2>

          <p className="text-[#A7B0C8] text-lg mb-6 leading-relaxed">
            {project.description}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {Object.entries(project.stats).map(([key, value]) => (
              <div key={key} className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-2xl font-bold" style={{ color: project.color }}>
                  {value}
                </div>
                <div className="text-xs text-[#A7B0C8] capitalize">{key}</div>
              </div>
            ))}
          </div>

          {/* Project Details */}
          <div className="flex flex-wrap gap-6 mb-6 text-sm text-[#A7B0C8]">
            <div>
              <span className="block text-white/50">Client</span>
              <span className="text-white">{project.client}</span>
            </div>
            <div>
              <span className="block text-white/50">Duration</span>
              <span className="text-white">{project.duration}</span>
            </div>
            <div>
              <span className="block text-white/50">Team</span>
              <span className="text-white">{project.team}</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-sm"
                style={{
                  backgroundColor: `${project.color}20`,
                  color: project.color,
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <motion.button
            whileHover={{ x: 10 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-2 font-medium"
            style={{ color: project.color }}
          >
            View Case Study
            <ArrowUpRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
}

export function PortfolioPage() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 1],
    ["#070A12", "#0B0F1C"]
  );

  return (
    <motion.main
      style={{ backgroundColor }}
      className="min-h-screen bg-[#070A12] text-[#F4F6FF] overflow-x-hidden"
    >

      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10" />

        <div className="container mx-auto px-6 relative z-10">
          {/* Back Link */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <a
              href="/"
              className="inline-flex items-center gap-2 text-[#A7B0C8] hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </a>
          </motion.div>

          {/* Header */}
          <div className="max-w-4xl mb-20">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight font-[family-name:var(--font-space-grotesk)] mb-6">
                Our
                <span className="gradient-text"> Portfolio</span>
              </h1>
              <p className="text-xl text-[#A7B0C8] max-w-2xl leading-relaxed">
                high-impact projects that transformed businesses and delighted users. Each project is a testament to our commitment to excellence.
              </p>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {[
              { value: "150+", label: "Projects Completed" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "40+", label: "Industries Served" },
              { value: "12", label: "Years of Excellence" },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-6 rounded-2xl glass">
                <div className="text-3xl md:text-4xl font-bold gradient-text font-[family-name:var(--font-space-grotesk)]">
                  {stat.value}
                </div>
                <div className="text-sm text-[#A7B0C8]">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={containerRef} className="py-20 relative">
        <div className="absolute inset-0 grid-pattern opacity-5" />

        <div className="container mx-auto px-6 relative z-10">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight font-[family-name:var(--font-space-grotesk)] mb-6">
              Ready to Build Your <span className="gradient-text">Next Project</span>?
            </h2>
            <p className="text-xl text-[#A7B0C8] mb-8">
              Let&apos;s discuss how we can help bring your vision to life.
            </p>
            <motion.a
              href="/#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#4F6DFF] text-white font-medium text-lg hover:bg-[#3D5AD8] transition-colors"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </motion.main>
  );
}
