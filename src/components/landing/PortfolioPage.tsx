"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { AsciiOverlay } from "./AsciiOverlay";

const OpenOrbitLogo = () => (
  <svg className="h-5 w-auto text-green-500" viewBox="0 0 152 139" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.6384 123.308C6.42372 114.967 11.4958 107.65 16.4741 100.286C16.8059 100.468 17.1347 100.649 17.4604 100.831C16.5492 102.756 15.4598 104.626 14.7553 106.617C13.3934 110.496 11.8434 114.366 11.1108 118.377C10.4345 122.115 12.8672 124.407 16.7089 124.538C21.8562 124.717 26.2239 122.331 30.5821 120.058C46.3246 111.858 60.2542 101.019 74.0053 89.9352C88.583 78.1847 101.602 64.828 113.944 50.7669C121.627 42.0128 129.273 33.2305 135.134 23.105C136.487 20.7661 137.492 18.1549 138.234 15.5531C139.408 11.4672 137.294 8.84661 133.133 9.61683C129.564 10.2837 126.164 11.8711 122.689 13.064C121.956 13.3082 121.242 13.6276 120.509 13.9094C120.365 13.6651 120.218 13.4241 120.068 13.1861C122.623 11.176 125.065 8.9969 127.751 7.19347C132.307 4.1314 137.125 1.55775 142.573 0.411824C145.41 -0.189319 148.237 -0.489891 150.332 2.12132C152.398 4.69497 152.098 7.64432 150.867 10.3401C148.237 16.0603 145.476 21.743 142.47 27.2848C140.366 31.1828 137.68 34.7709 135.444 38.6032C134.946 39.4391 134.984 40.7917 135.219 41.8155C136.966 49.5646 139.605 57.201 140.488 65.0347C142.705 84.7691 138.525 103.17 124.483 117.794C109.708 133.17 91.1097 138.496 70.0415 135.04C63.6544 133.997 57.6149 132.006 52.1013 128.568C51.7914 128.371 51.5282 128.108 50.9458 127.657C52.0917 127.028 52.9936 126.502 53.9235 126.032C59.268 123.299 64.6031 120.528 70.0039 117.907C70.8775 117.484 72.1268 117.466 73.113 117.682C90.8467 121.608 109.003 113.408 117.335 97.4494C121.918 88.6765 123.243 79.1991 122.313 69.4399C121.937 65.448 120.932 61.5124 120.106 56.9474C118.95 57.7552 118.443 58.037 118.02 58.4127C106.223 69.1394 94.5383 79.9787 82.6187 90.5645C64.3684 106.786 44.9344 121.439 23.5187 133.274C19.151 135.688 14.154 137.022 9.3824 138.656C8.11437 139.097 6.58337 138.975 5.19323 138.844C1.71787 138.515 -0.404879 136.336 0.0647638 132.898C0.496835 129.704 1.7085 126.614 2.6384 123.308Z" />
    <path d="M30.7708 38.1159C38.9614 26.1776 50.1952 18.9357 63.8524 15.1316C82.0182 10.0688 99.0758 13.3094 115.438 21.9132C115.682 22.0353 115.842 22.3359 116.208 22.7398C112.602 24.4963 109.117 26.1212 105.698 27.8871C103.002 29.2772 100.419 30.8928 97.7231 32.2829C97.075 32.6117 96.0887 32.6305 95.3655 32.4144C86.6301 29.8784 77.7914 29.0424 69.0185 31.8227C54.1026 36.5473 44.3998 46.4662 40.6427 61.7859C38.3602 71.0754 38.6232 80.4213 41.3284 89.6076C42.1549 92.4066 43.47 95.1305 44.9259 97.676C45.7713 99.1507 45.5364 99.7518 44.1932 100.353C40.1449 102.175 36.0685 103.96 32.0483 105.857C30.7051 106.487 29.9162 106.054 29.0521 105.031C25.99 101.405 24.5058 97.0091 23.3035 92.5851C19.0392 76.9084 19.6873 61.4572 26.1214 46.4286C27.3424 43.5825 29.127 40.9713 30.7708 38.1159Z" />
  </svg>
);

const navLinks = [
  { href: "#intro", label: "Intro" },
  { href: "#stats", label: "Stats" },
  { href: "#work", label: "Work" },
  { href: "#toolkit", label: "Toolkit" },
];

const dotSections = [
  { id: "intro", label: "Intro" },
  { id: "stats", label: "By the numbers" },
  { id: "athleon", label: "Athleon" },
  { id: "mentiq", label: "MentIQ" },
  { id: "axton", label: "Axton Protocol" },
  { id: "ai", label: "AI Automation" },
  { id: "predictx", label: "PredictX" },
  { id: "toolkit", label: "Toolkit" },
  { id: "contact", label: "Contact" },
];

const projects = [
  {
    id: "athleon",
    num: "01",
    eyebrow: "Sports Performance",
    title: "Athleon",
    desc: "A biomechanics tracking platform for professional sports franchises. We built the real-time data ingestion pipeline, athlete dashboard and mobile capture tools that turn sensor and video inputs into actionable injury-risk signals.",
    desc2: "The product integrates wearable APIs and high-speed camera feeds, normalizes noisy signal data, and surfaces trends coaches can act on within seconds.",
    tags: ["React", "Node.js", "Python", "TimescaleDB"],
    outcome: "Injury-risk signals delivered in real time.",
    video: "https://openorbit-videos.s3.ap-south-1.amazonaws.com/videos/athleon.mp4",
    images: [],
    gallery: [
      { type: "video", src: "https://openorbit-videos.s3.ap-south-1.amazonaws.com/videos/athleon-demo.mp4" },
    ],
    domain: "Sports & Biomechanics",
    engagement: "End-to-end product build",
  },
  {
    id: "mentiq",
    num: "02",
    eyebrow: "SaaS Analytics",
    title: "MentIQ",
    desc: "A predictive retention platform for enterprise SaaS. We designed the data model, built the analytics pipeline and shipped a clean analytics UI that helps customer success teams spot churn before renewal conversations begin.",
    desc2: "The system consumes product-usage events, computes risk scores, and presents clear cohort views and alerts instead of endless spreadsheets.",
    tags: ["Next.js", "PostgreSQL", "dbt", "Looker"],
    outcome: "Churn-risk accounts surfaced weeks earlier.",
    video: "https://openorbit-videos.s3.ap-south-1.amazonaws.com/videos/mentiq-demo.mp4",
    images: [],
    gallery: [
      { type: "video", src: "https://openorbit-videos.s3.ap-south-1.amazonaws.com/videos/mentiq-sdk.mp4" },
    ],
    domain: "Enterprise SaaS",
    engagement: "Data platform & UI",
  },
  {
    id: "axton",
    num: "03",
    eyebrow: "OTC Trading",
    title: "Axton Protocol",
    desc: "A zero-slippage decentralized exchange infrastructure for institutional OTC desks. We architected the smart-contract layer, order-matching engine and trader dashboard with security and auditability first.",
    desc2: "Every trade route is traceable on-chain, every contract is covered by automated tests, and the UI gives traders real-time settlement status without wallet confusion.",
    tags: ["Solidity", "Rust", "React", "Ethers.js"],
    outcome: "Settlement transparency without slippage.",
    images: [
      "/images/axton-1.png",
      "/images/axton-2.png",
    ],
    gallery: [],
    domain: "DeFi & OTC",
    engagement: "Protocol engineering",
  },
  {
    id: "ai",
    num: "04",
    eyebrow: "AI Automation",
    title: "Custom AI Solutions",
    desc: "An autonomous workflow orchestration layer for a finance operations team. We connected document parsers, LLM reasoning steps and approval rules into a single system that handles repetitive data work end to end.",
    desc2: "Human reviewers stay in control through exception queues, while routine items are processed, validated and logged automatically.",
    tags: ["Python", "OpenAI API", "LangChain", "AWS Lambda"],
    outcome: "Manual processing replaced by auditable agents.",
    images: [],
    gallery: [],
    domain: "AI Operations",
    engagement: "Agentic workflow system",
  },
  {
    id: "predictx",
    num: "05",
    eyebrow: "Predictive Analytics",
    title: "PredictX",
    desc: "A predictive analytics platform that transforms raw operational data into actionable forecasts. We built the data pipeline, ML model serving layer, and interactive dashboard that lets business teams explore what-if scenarios in real time.",
    desc2: "The system ingests streaming data from multiple sources, trains and deploys models automatically, and surfaces predictions through a clean, collaborative interface.",
    tags: ["Python", "TensorFlow", "React", "Apache Kafka"],
    outcome: "Forecast accuracy improved by 35%.",
    video: "/videos/optimized/predictx.mp4",
    images: [],
    gallery: [],
    domain: "Predictive Analytics",
    engagement: "ML platform & dashboard",
  },
];

const toolkit = [
  { title: "Front-end", desc: "React, Next.js, TypeScript, Tailwind CSS, Framer Motion" },
  { title: "Mobile", desc: "React Native, Flutter, Expo, SwiftUI" },
  { title: "Back-end", desc: "Node.js, Python, Go, Java, PostgreSQL, MongoDB" },
  { title: "Data & AI", desc: "dbt, BigQuery, Snowflake, LangChain, OpenAI, vector stores" },
  { title: "Cloud & DevOps", desc: "AWS, GCP, Docker, Kubernetes, GitHub Actions, Terraform" },
  { title: "Web3", desc: "Solidity, Rust, Ethers.js, Hardhat, subgraphs" },
];

export function PortfolioPage() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!link) return;
      const href = link.getAttribute("href") || "";
      if (!href.startsWith("#")) return;
      e.preventDefault();
      const id = href.slice(1);
      const el = document.getElementById(id);
      if (el) {
        const main = document.getElementById("main-scroll");
        if (main) {
          main.scrollTo({ top: el.offsetTop, behavior: "smooth" });
        } else {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
      setMobileOpen(false);
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <>
      {/* Progress bar */}
      <div className="progress-top" id="progress-top" />

      {/* Mobile header */}
      <header
        className="fixed top-0 left-0 right-0 h-16 flex items-center justify-between px-6 z-50 lg:hidden"
        style={{
          background: "rgba(255, 255, 255, 0.82)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(15, 23, 42, 0.08)",
        }}
      >
        <a href="/" className="flex items-center gap-2 text-slate-900 font-semibold tracking-wide text-[15px]">
          <OpenOrbitLogo />
          OpenOrbit
        </a>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 -mr-2 text-slate-600"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      {/* Desktop navbar */}
      <nav
        className="desktop-nav fixed top-0 left-0 right-0 h-[72px] flex items-center justify-between px-8 z-50"
        style={{
          background: "rgba(244, 253, 247, 0.72)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(15, 23, 42, 0.06)",
        }}
        aria-label="Primary navigation"
      >
        <a href="/" className="flex items-center gap-2.5 text-slate-900 font-semibold tracking-tight text-[16px]">
          <svg className="h-6 w-auto text-green-500" viewBox="0 0 152 139" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.6384 123.308C6.42372 114.967 11.4958 107.65 16.4741 100.286C16.8059 100.468 17.1347 100.649 17.4604 100.831C16.5492 102.756 15.4598 104.626 14.7553 106.617C13.3934 110.496 11.8434 114.366 11.1108 118.377C10.4345 122.115 12.8672 124.407 16.7089 124.538C21.8562 124.717 26.2239 122.331 30.5821 120.058C46.3246 111.858 60.2542 101.019 74.0053 89.9352C88.583 78.1847 101.602 64.828 113.944 50.7669C121.627 42.0128 129.273 33.2305 135.134 23.105C136.487 20.7661 137.492 18.1549 138.234 15.5531C139.408 11.4672 137.294 8.84661 133.133 9.61683C129.564 10.2837 126.164 11.8711 122.689 13.064C121.956 13.3082 121.242 13.6276 120.509 13.9094C120.365 13.6651 120.218 13.4241 120.068 13.1861C122.623 11.176 125.065 8.9969 127.751 7.19347C132.307 4.1314 137.125 1.55775 142.573 0.411824C145.41 -0.189319 148.237 -0.489891 150.332 2.12132C152.398 4.69497 152.098 7.64432 150.867 10.3401C148.237 16.0603 145.476 21.743 142.47 27.2848C140.366 31.1828 137.68 34.7709 135.444 38.6032C134.946 39.4391 134.984 40.7917 135.219 41.8155C136.966 49.5646 139.605 57.201 140.488 65.0347C142.705 84.7691 138.525 103.17 124.483 117.794C109.708 133.17 91.1097 138.496 70.0415 135.04C63.6544 133.997 57.6149 132.006 52.1013 128.568C51.7914 128.371 51.5282 128.108 50.9458 127.657C52.0917 127.028 52.9936 126.502 53.9235 126.032C59.268 123.299 64.6031 120.528 70.0039 117.907C70.8775 117.484 72.1268 117.466 73.113 117.682C90.8467 121.608 109.003 113.408 117.335 97.4494C121.918 88.6765 123.243 79.1991 122.313 69.4399C121.937 65.448 120.932 61.5124 120.106 56.9474C118.95 57.7552 118.443 58.037 118.02 58.4127C106.223 69.1394 94.5383 79.9787 82.6187 90.5645C64.3684 106.786 44.9344 121.439 23.5187 133.274C19.151 135.688 14.154 137.022 9.3824 138.656C8.11437 139.097 6.58337 138.975 5.19323 138.844C1.71787 138.515 -0.404879 136.336 0.0647638 132.898C0.496835 129.704 1.7085 126.614 2.6384 123.308Z" />
            <path d="M30.7708 38.1159C38.9614 26.1776 50.1952 18.9357 63.8524 15.1316C82.0182 10.0688 99.0758 13.3094 115.438 21.9132C115.682 22.0353 115.842 22.3359 116.208 22.7398C112.602 24.4963 109.117 26.1212 105.698 27.8871C103.002 29.2772 100.419 30.8928 97.7231 32.2829C97.075 32.6117 96.0887 32.6305 95.3655 32.4144C86.6301 29.8784 77.7914 29.0424 69.0185 31.8227C54.1026 36.5473 44.3998 46.4662 40.6427 61.7859C38.3602 71.0754 38.6232 80.4213 41.3284 89.6076C42.1549 92.4066 43.47 95.1305 44.9259 97.676C45.7713 99.1507 45.5364 99.7518 44.1932 100.353C40.1449 102.175 36.0685 103.96 32.0483 105.857C30.7051 106.487 29.9162 106.054 29.0521 105.031C25.99 101.405 24.5058 97.0091 23.3035 92.5851C19.0392 76.9084 19.6873 61.4572 26.1214 46.4286C27.3424 43.5825 29.127 40.9713 30.7708 38.1159Z" />
          </svg>
          OpenOrbit
        </a>
        <div className="flex items-center gap-10">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link text-[13px] font-medium tracking-wide text-slate-900 no-underline relative">
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="inline-flex items-center gap-1.5 px-[18px] py-2.5 rounded-full bg-green-500 text-white text-[13px] font-semibold no-underline transition-all duration-200 hover:bg-green-600 hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(34,197,94,0.25)]"
        >
          Start a project
        </a>
      </nav>

      {/* Dot island */}
      <PortfolioDotIsland />

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden"
          style={{ background: "rgba(15, 23, 42, 0.25)" }}
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Main scroll container */}
      <main className="snap-scroll" id="main-scroll">
        <AsciiOverlay />
        <div className="relative z-10">
        {/* Intro */}
        <section id="intro" className="snap-section min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-20 py-32 border-b border-slate-900/5">
          <div className="max-w-4xl">
            <p className="eyebrow mb-6">Selected Work</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-8">Systems we have shipped.</h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed mb-10">
              A founder-led studio building production-grade software across sports, finance, AI and automation. Each project below is a complete case study in architecture, velocity and scale.
            </p>
            <a
              href="#stats"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-500 text-white text-sm font-semibold hover:bg-green-600 transition-all hover:scale-[1.03] hover:shadow-lg hover:shadow-green-500/25"
            >
              Start scrolling
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
            </a>
          </div>
        </section>

        {/* Stats */}
        <section id="stats" className="snap-section px-6 md:px-12 lg:px-20 py-24 border-b border-slate-900/5">
          <p className="eyebrow mb-12">By the numbers</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {[
              { num: "6", label: "Years in software development" },
              { num: "100+", label: "Clients served" },
              { num: "1000+", label: "Systems built" },
              { num: "48h", label: "Project roadmap delivery" },
            ].map((s) => (
              <div key={s.label}>
                <div className="stat-num">{s.num}</div>
                <p className="text-sm text-slate-500 mt-3 uppercase tracking-wider">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Project sections */}
        {projects.map((p, idx) => (
          <ProjectSection key={p.id} project={p} index={idx} />
        ))}

        {/* Toolkit */}
        <section id="toolkit" className="snap-section px-6 md:px-12 lg:px-20 py-24 border-b border-slate-900/5">
          <p className="eyebrow mb-6">Toolkit</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-16 max-w-2xl">The stack under the hood.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
            {toolkit.map((t) => (
              <div key={t.title} className="glass-panel p-6 rounded-2xl hover:bg-green-50/60 transition-colors">
                <h3 className="font-semibold text-slate-900 mb-2">{t.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="snap-section px-6 md:px-12 lg:px-20 py-32">
          <div className="max-w-2xl">
            <p className="eyebrow mb-6">Start a project</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">Ready to build your next system?</h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Get a free technical consultation and a complete project roadmap within 48 hours.
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
              className="space-y-5 mb-8"
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
          </div>
      </main>

      <footer className="px-6 md:px-12 lg:px-20 py-8 border-t border-slate-900/5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-sm text-slate-500">
        <span>© 2026 OpenOrbit. All rights reserved.</span>
        <a href="/" className="hover:text-green-600 transition-colors">Back to home</a>
      </footer>
    </>
  );
}

/* ── Dot island for portfolio ───────────────────────────── */
function PortfolioDotIsland() {
  const islandRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const main = document.getElementById("main-scroll");
    const scrollEl = main || document.documentElement;
    const dots = islandRef.current?.querySelectorAll(".dot-link");
    const bar = document.getElementById("progress-top");

    /* IntersectionObserver for active section */
    const sectionEls = dotSections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean) as HTMLElement[];

    const obs = new IntersectionObserver(
      (entries) => {
        let currentId = dotSections[0]?.id || "";
        for (const entry of entries) {
          if (entry.isIntersecting) {
            currentId = entry.target.id;
          }
        }
        dots?.forEach((dot) => {
          dot.classList.toggle("active", dot.getAttribute("data-section") === currentId);
        });
      },
      { threshold: 0, rootMargin: `-${window.innerHeight * 0.3}px 0px -${window.innerHeight * 0.3}px 0px` }
    );

    sectionEls.forEach((el) => obs.observe(el));

    /* Progress bar and footer hide via scroll */
    function onScroll() {
      const scrolled = scrollEl.scrollTop || window.scrollY;
      if (bar) {
        const max = scrollEl.scrollHeight - scrollEl.clientHeight;
        const pct = max > 0 ? (scrolled / max) * 100 : 0;
        bar.style.width = pct + "%";
      }

      const footer = document.querySelector("footer");
      if (footer && islandRef.current) {
        const fr = footer.getBoundingClientRect();
        islandRef.current.classList.toggle("hide", window.innerHeight > fr.top + 40);
      }
    }

    scrollEl.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      obs.disconnect();
      scrollEl.removeEventListener("scroll", onScroll);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <nav ref={islandRef} className="dot-island" aria-label="Portfolio sections">
      {dotSections.map((sec) => (
        <a
          key={sec.id}
          href={`#${sec.id}`}
          className={`dot-link ${sec.id === "intro" ? "active" : ""}`}
          data-section={sec.id}
        >
          <span className="dot-label">{sec.label}</span>
        </a>
      ))}
    </nav>
  );
}

/* ── Project section ────────────────────────────────────── */
function ProjectSection({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const isEven = index % 2 === 0;

  const carouselItems: { type: "video" | "image"; src: string; label?: string }[] = [
    ...(project.video ? [{ type: "video" as const, src: project.video, label: "Main video" }] : []),
    ...project.images.map((src) => ({ type: "image" as const, src, label: "Screenshot" })),
    ...project.gallery.map((g) => ({ type: g.type as "video" | "image", src: g.src, label: g.type === "video" ? "Gallery video" : "Gallery image" })),
  ];

  const hasMedia = carouselItems.length > 0;
  const [activeIdx, setActiveIdx] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const active = carouselItems[activeIdx];

  return (
    <section
      id={project.id}
      className="snap-section project-section px-6 md:px-12 lg:px-20 py-24 border-b border-slate-900/5"
    >
      <div className="max-w-6xl mx-auto">
        <div className={`flex flex-col lg:flex-row gap-16 items-start ${isEven ? "" : ""}`}>
          <div className={`lg:w-1/2 ${isEven ? "lg:sticky lg:top-28" : "order-1 lg:order-2 lg:sticky lg:top-28"}`}>
            <div className="project-num">{project.num}</div>
            <p className="eyebrow mt-4 mb-3">{project.eyebrow}</p>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">{project.title}</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-5">{project.desc}</p>
            <p className="text-slate-600 leading-relaxed mb-8">{project.desc2}</p>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-full text-xs text-green-700"
                  style={{
                    background: "rgba(34, 197, 94, 0.08)",
                    border: "1px solid rgba(34, 197, 94, 0.15)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="border-t pt-6" style={{ borderColor: "rgba(15, 23, 42, 0.1)" }}>
              <p className="text-[11px] text-slate-500 uppercase tracking-wider mb-2">Outcome</p>
              <p className="text-lg font-semibold text-slate-900">{project.outcome}</p>
            </div>
          </div>

          {/* Carousel */}
          <div className={`lg:w-1/2 w-full ${isEven ? "" : "order-2 lg:order-1"}`}>
            {hasMedia ? (
              <>
                {/* Main display */}
                <div
                  className="video-wrap aspect-[4/3] relative group cursor-pointer"
                  onClick={() => setLightboxOpen(true)}
                >
                  {active.type === "video" ? (
                    <video
                      key={active.src}
                      src={active.src}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  ) : (
                    <img
                      key={active.src}
                      src={active.src}
                      alt={`${project.title} ${activeIdx}`}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  )}

                  {/* Hover overlay */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center bg-black/20 backdrop-blur-[2px]"
                  >
                    <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/90 text-slate-800 text-sm font-medium shadow-lg">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                      View fullscreen
                    </div>
                  </div>

                  {/* Arrow overlays */}
                  <button
                    onClick={(e) => { e.stopPropagation(); setActiveIdx((i) => (i - 1 + carouselItems.length) % carouselItems.length); }}
                    className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm shadow flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
                    aria-label="Previous"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); setActiveIdx((i) => (i + 1) % carouselItems.length); }}
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm shadow flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
                    aria-label="Next"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
                  </button>

                  {/* Counter badge */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm text-white text-[11px] font-medium">
                    {activeIdx + 1} / {carouselItems.length}
                  </div>
                </div>

                {/* Thumbnails strip */}
                <div className="mt-4 flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
                  {carouselItems.map((item, i) => (
                    <button
                      key={i}
                      onMouseEnter={() => setActiveIdx(i)}
                      onClick={() => setActiveIdx(i)}
                      className={`flex-shrink-0 w-20 h-14 rounded-xl overflow-hidden border-2 transition-all duration-200 cursor-pointer ${
                        i === activeIdx
                          ? "border-green-500 shadow-[0_0_12px_rgba(34,197,94,0.3)] scale-105"
                          : "border-slate-200/60 hover:border-slate-300 hover:scale-[1.04] opacity-70 hover:opacity-100"
                      }`}
                      style={{ background: "rgba(15, 23, 42, 0.04)" }}
                      aria-label={`View ${item.label} ${i + 1}`}
                    >
                      {item.type === "video" ? (
                        <video src={item.src} muted playsInline className="w-full h-full object-cover pointer-events-none" />
                      ) : (
                        <img src={item.src} alt="" className="w-full h-full object-cover pointer-events-none" loading="lazy" />
                      )}
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <div className="video-wrap aspect-[4/3] rounded-2xl flex items-center justify-center" style={{ background: "rgba(15, 23, 42, 0.04)" }}>
                <div className="text-center">
                  <svg className="mx-auto mb-3 text-slate-400" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>
                  <p className="text-sm text-slate-500">Media preview coming soon</p>
                </div>
              </div>
            )}

            {/* Domain & engagement cards */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="glass-panel p-5 rounded-2xl" style={{ background: "rgba(34, 197, 94, 0.04)", borderColor: "rgba(34, 197, 94, 0.12)" }}>
                <p className="text-[11px] text-green-700 uppercase tracking-wider mb-1">Domain</p>
                <p className="font-semibold text-slate-900">{project.domain}</p>
              </div>
              <div className="glass-panel p-5 rounded-2xl" style={{ background: "rgba(34, 197, 94, 0.04)", borderColor: "rgba(34, 197, 94, 0.12)" }}>
                <p className="text-[11px] text-green-700 uppercase tracking-wider mb-1">Engagement</p>
                <p className="font-semibold text-slate-900">{project.engagement}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox overlay */}
      {lightboxOpen && hasMedia && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-6"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            aria-label="Close"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); setActiveIdx((i) => (i - 1 + carouselItems.length) % carouselItems.length); }}
            className="absolute left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            aria-label="Previous"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
          </button>

          <div
            className="max-w-5xl max-h-[85vh] w-full rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {active.type === "video" ? (
              <video key={active.src} src={active.src} autoPlay muted loop playsInline className="w-full h-full object-contain max-h-[85vh]" controls />
            ) : (
              <img key={active.src} src={active.src} alt={`${project.title} ${activeIdx}`} className="w-full h-full object-contain max-h-[85vh]" />
            )}
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); setActiveIdx((i) => (i + 1) % carouselItems.length); }}
            className="absolute right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            aria-label="Next"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm">
            {activeIdx + 1} / {carouselItems.length}
          </div>
        </div>
      )}
    </section>
  );
}
