"use client";

import { motion } from "framer-motion";

/* ── Mini Visuals ─────────────────────────────────────────── */

const CodeVisual = () => (
  <div className="code-window">
    <div className="code-line">
      <span className="code-num">01</span>
      <span>
        <span className="code-keyword">const</span> deploy ={" "}
        <span className="code-func">async</span> () =&gt; {"{"}
      </span>
    </div>
    <div className="code-line">
      <span className="code-num">02</span>
      <span className="pl-4">
        await infra.<span className="code-func">provision</span>(
        <span className="code-string">'global'</span>);
      </span>
    </div>
    <div className="code-line">
      <span className="code-num">03</span>
      <span className="pl-4">
        <span className="code-keyword">return</span> app.
        <span className="code-func">scale</span>(
        <span className="code-string">'auto'</span>);
        <span className="cursor-blink"></span>
      </span>
    </div>
    <div className="code-line">
      <span className="code-num">04</span>
      <span>{"}"}</span>
    </div>
  </div>
);

const MobileVisual = () => (
  <div className="phone-frame">
    <div className="phone-notch"></div>
    <div className="phone-list">
      <div className="phone-row accent"></div>
      <div className="phone-row" style={{ width: "80%" }}></div>
      <div className="phone-row" style={{ width: "60%" }}></div>
      <div className="phone-row" style={{ width: "90%" }}></div>
    </div>
  </div>
);

const AIVisual = () => (
  <div className="ai-network">
    <svg>
      <line x1="15" y1="15" x2="50" y2="60" />
      <line x1="85" y1="15" x2="50" y2="60" />
    </svg>
    <div className="ai-node n1"></div>
    <div className="ai-node n2"></div>
    <div className="ai-node n3"></div>
  </div>
);

const DataVisual = () => (
  <div className="w-full max-w-[260px]">
    <div className="data-pipe mb-5"></div>
    <div className="flex items-end gap-1 h-16">
      {["40%", "70%", "50%", "90%", "60%", "80%", "45%"].map((h, i) => (
        <div
          key={i}
          className="bar"
          style={{ height: h, animationDelay: `${i * 0.15}s` }}
        ></div>
      ))}
    </div>
  </div>
);

const Web3Visual = () => (
  <div className="chain">
    {["A", "B", "C", "D"].map((b, i) => (
      <div key={i} className="flex items-center gap-1.5">
        <div
          className="block"
          style={{ animationDelay: `${i * 0.4}s` }}
        >
          {b}
        </div>
        {i < 3 && <div className="chain-link"></div>}
      </div>
    ))}
  </div>
);

/* ── Card Data ────────────────────────────────────────────── */

const cards = [
  {
    eyebrow: "01 / Engineering",
    title: "Web & Cloud Engineering",
    desc: "React, Next.js and Node backends designed for global scale, fast loading, and clean architecture.",
    span: "col-span-6 md:col-span-3 lg:col-span-2",
    visual: <CodeVisual />,
  },
  {
    eyebrow: "02 / Mobile",
    title: "Mobile Apps",
    desc: "Native-quality iOS and Android experiences in React Native and Flutter.",
    span: "col-span-6 md:col-span-3 lg:col-span-2",
    visual: <MobileVisual />,
  },
  {
    eyebrow: "03 / Intelligence",
    title: "AI & Automation",
    desc: "LLM agents, predictive models, and autonomous workflows that remove manual overhead.",
    span: "col-span-6 md:col-span-3 lg:col-span-2",
    visual: <AIVisual />,
  },
  {
    eyebrow: "04 / Data",
    title: "Data Pipelines",
    desc: "Real-time ingestion, warehousing, and analytics infrastructure your team can actually query.",
    span: "col-span-6 md:col-span-3 lg:col-span-3",
    visual: <DataVisual />,
  },
  {
    eyebrow: "05 / Decentralized",
    title: "Web3 & Blockchain",
    desc: "Smart contracts, dApps, and DeFi tooling built with security and auditability first.",
    span: "col-span-6 md:col-span-3 lg:col-span-3",
    visual: <Web3Visual />,
  },
];

/* ── Capability Card ──────────────────────────────────────── */

function CapabilityCard({
  eyebrow,
  title,
  desc,
  span,
  visual,
}: {
  eyebrow: string;
  title: string;
  desc: string;
  span: string;
  visual: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4 }}
      className={`glass-panel rounded-2xl border border-black/5 hover:border-blue-500/30 transition-all p-6 md:p-8 flex flex-col justify-between min-h-[260px] ${span}`}
    >
      <div>
        <p className="text-[10px] font-mono tracking-[0.18em] uppercase text-blue-600 mb-3">
          {eyebrow}
        </p>
        <h4 className="text-xl md:text-2xl font-semibold text-gray-900 tracking-tight mb-2">
          {title}
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed max-w-md">
          {desc}
        </p>
      </div>
      <div className="mt-8 flex items-end justify-end w-full">{visual}</div>
    </motion.div>
  );
}

/* ── Services Section ─────────────────────────────────────── */

export function Services() {
  return (
    <section
      id="services"
      aria-label="Our Services - Core Capabilities"
      className="w-full px-6 py-32 z-10 relative max-w-7xl mx-auto"
    >
      {/* Header */}
      <div className="max-w-2xl mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel text-[11px] font-mono text-blue-600 mb-5 border border-blue-500/20">
          CORE CAPABILITIES
        </div>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-5 text-gray-900">
          Everything your product needs to ship.
        </h2>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
          A senior-led team covering the full stack — from interface to
          infrastructure, prototype to production.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-6 gap-4">
        {cards.map((c, i) => (
          <CapabilityCard key={i} {...c} />
        ))}
      </div>
    </section>
  );
}
