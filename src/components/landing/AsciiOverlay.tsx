"use client";

import { useEffect, useMemo, useState } from "react";

/* ── Seeded random ───────────────────────────────── */
function sd(seed: number) {
  const x = Math.sin(seed * 9301 + 49297) * 49297;
  return x - Math.floor(x);
}

interface Cell {
  id: number;
  x: number;
  y: number;
  char: string;
  cls: string;
  dur: number;
  delay: number;
}

export function AsciiOverlay() {
  const [h, setH] = useState(0);

  useEffect(() => {
    const main = document.getElementById("main-scroll");
    if (!main) return;
    const update = () => setH(main.scrollHeight);
    update();
    window.addEventListener("resize", update);
    const ro = new ResizeObserver(update);
    ro.observe(main);
    return () => {
      window.removeEventListener("resize", update);
      ro.disconnect();
    };
  }, []);

  const cells = useMemo(() => {
    const list: Cell[] = [];
    const density = 0.008;
    const total = Math.floor(100 * 100 * density);
    let id = 0;

    for (let i = 0; i < total; i++) {
      const s = i * 7919;
      // bias toward center (where content cards are)
      let x = sd(s) * 100;
      let y = sd(s + 1) * 100;
      const cx = 50, cy = 50;
      const dist = Math.abs(x - cx) / 50 + Math.abs(y - cy) / 50;
      if (dist > 1.2 && sd(s + 2) > 0.4) continue;

      // add jitter toward center
      x += (cx - x) * sd(s + 3) * 0.15;
      y += (cy - y) * sd(s + 4) * 0.15;

      const typeSeed = sd(s + 5);
      let char: string, cls: string;
      if (typeSeed < 0.4) {
        // fire - chars float up
        const set = ".,:;*#%@&";
        char = set[Math.floor(sd(s + 6) * set.length)];
        cls = "fc";
      } else if (typeSeed < 0.7) {
        // flow - chars sweep sideways
        const set = "~-=+";
        char = set[Math.floor(sd(s + 7) * set.length)];
        cls = "fw";
      } else {
        // morph - chars that breathe
        const set = "+#@%&*O0";
        char = set[Math.floor(sd(s + 8) * set.length)];
        cls = "mp";
      }

      list.push({
        id: id++,
        x: Math.max(2, Math.min(98, x)),
        y: Math.max(2, Math.min(98, y)),
        char,
        cls,
        dur: 3 + sd(s + 9) * 5,
        delay: sd(s + 10) * 6,
      });
    }
    return list;
  }, []);

  if (!h) return null;

  return (
    <svg
      className="absolute top-0 left-0 w-full pointer-events-none z-0"
      style={{ height: h, minHeight: "100vh" }}
    >
      <defs>
        <style>{`
          text { font-family:"IBM Plex Mono","Courier New",monospace; fill:#22c55e; }
          .fc { animation:fk var(--d) ease-out var(--dd) infinite; }
          @keyframes fk {
            0%,100% { transform:translateY(0); opacity:0; }
            15% { opacity:0.35; }
            85% { transform:translateY(-4px); opacity:0.1; }
          }
          .fw { animation:fwv var(--d) linear var(--dd) infinite; }
          @keyframes fwv {
            0% { transform:translate(-3px,0); opacity:0; }
            20% { opacity:0.3; }
            80% { opacity:0.3; }
            100% { transform:translate(3px,0); opacity:0; }
          }
          .mp { animation:mpv var(--d) ease-in-out var(--dd) infinite; }
          @keyframes mpv {
            0%,100% { transform:scale(0.4) rotate(0deg); opacity:0.08; }
            50% { transform:scale(1.1) rotate(180deg); opacity:0.35; }
          }
        `}</style>
      </defs>
      {cells.map((c) => (
        <text
          key={c.id}
          x={`${c.x}%`}
          y={`${c.y}%`}
          textAnchor="middle"
          dominantBaseline="central"
          fontSize="4.5"
          className={c.cls}
          style={{ "--d": `${c.dur}s`, "--dd": `${c.delay}s` } as React.CSSProperties}
        >
          {c.char}
        </text>
      ))}
    </svg>
  );
}
