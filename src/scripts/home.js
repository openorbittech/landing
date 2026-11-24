import { animate, stagger } from "animejs";

const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
const $ = (s, root = document) => root.querySelector(s);
const $$ = (s, root = document) => [...root.querySelectorAll(s)];
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const TAU = Math.PI * 2;
const WHITE = "#f3f0e8";
const GREEN = "#19c98a";

function once(target, fn, threshold = 0.35) {
  if (!target) return;
  const io = new IntersectionObserver(
    ([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      fn();
    },
    { threshold },
  );
  io.observe(target);
}

/* ---------- The film: one particle field, seven shapes ---------- */

function film() {
  const section = $("#film");
  const pin = $("#film-pin");
  const canvas = $("#field");
  if (!section || !canvas) return;
  const ctx = canvas.getContext("2d");
  const caps = $$(".cap", section);
  const bars = $$(".hud-bar i", section);
  const hudN = $("#hud-n");
  const hudName = $("#hud-name");
  const hudHint = $("#hud-hint");
  const NAMES = ["Start", "Lead screening", "Receptionist", "Voice tutor", "Workflows", "Knowledge", "Yours"];
  const K = NAMES.length;

  let W = 0;
  let H = 0;
  let dpr = 1;
  let N = 0;
  let NW = 0; // white particles are [0, NW), green are [NW, N)
  let R = null;
  let F = [];
  let seed = null;
  let phase = null;

  const rng = (s) => () => ((s = (s * 16807) % 2147483647) / 2147483647);

  // Sample n points from a shape drawn on a 240x180 scratch canvas, fitted into box.
  function sample(draw, n, box, rand) {
    const c = document.createElement("canvas");
    c.width = 240;
    c.height = 180;
    const g = c.getContext("2d", { willReadFrequently: true });
    g.fillStyle = "#fff";
    g.strokeStyle = "#fff";
    draw(g);
    const data = g.getImageData(0, 0, 240, 180).data;
    const pts = [];
    for (let y = 0; y < 180; y += 2) for (let x = 0; x < 240; x += 2) if (data[(y * 240 + x) * 4 + 3] > 128) pts.push(x, y);
    const scale = Math.min(box.w / 240, box.h / 180);
    const ox = box.x + (box.w - 240 * scale) / 2;
    const oy = box.y + (box.h - 180 * scale) / 2;
    const out = new Float32Array(n * 2);
    const count = pts.length / 2 || 1;
    for (let i = 0; i < n; i++) {
      const k = Math.floor(rand() * count) * 2;
      out[i * 2] = ox + ((pts[k] || 120) + rand() * 2) * scale;
      out[i * 2 + 1] = oy + ((pts[k + 1] || 90) + rand() * 2) * scale;
    }
    return out;
  }

  const make = () => ({ x: new Float32Array(N), y: new Float32Array(N), a: new Float32Array(N).fill(0.85), s: new Float32Array(N).fill(1) });

  function build() {
    W = pin.clientWidth;
    H = pin.clientHeight;
    dpr = Math.min(2, devicePixelRatio || 1);
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    const mobile = W < 860;
    R = mobile ? { x: W * 0.08, y: H * 0.12, w: W * 0.84, h: H * 0.38 } : { x: W * 0.52, y: H * 0.17, w: W * 0.43, h: H * 0.62 };
    N = mobile ? 950 : 1900;
    NW = Math.floor(N * 0.86);
    const rand = rng(11);
    seed = Float32Array.from({ length: N }, rand);
    phase = Float32Array.from({ length: N }, () => rand() * TAU);
    const cx = R.x + R.w / 2;
    const cy = R.y + R.h / 2;
    const unit = Math.min(R.w, R.h);
    F = [];

    // 0 Start: the same orbit the film ends on (set below)
    F.push(null);

    // 1 Lead screening: a funnel. Many in, the qualified few out.
    {
      const f = make();
      const body = sample((g) => {
        g.beginPath();
        g.moveTo(8, 6);
        g.lineTo(232, 6);
        g.lineTo(138, 104);
        g.lineTo(102, 104);
        g.closePath();
        g.fill();
      }, NW, R, rand);
      for (let i = 0; i < NW; i++) {
        f.x[i] = body[i * 2];
        f.y[i] = body[i * 2 + 1];
        f.a[i] = 0.75;
      }
      const scale = Math.min(R.w / 240, R.h / 180);
      const top = R.y + (R.h - 180 * scale) / 2 + 112 * scale;
      const len = 64 * scale;
      for (let i = NW; i < N; i++) {
        f.x[i] = cx + (rand() - 0.5) * 26 * scale;
        f.y[i] = top;
        f.a[i] = 1;
        f.s[i] = 1.35;
      }
      f.dyn = (i, t, o) => {
        if (i < NW) o.y += Math.sin(t * 0.8 + phase[i]) * 2;
        else o.y += ((seed[i] + t * 0.16) % 1) * len;
      };
      F.push(f);
    }

    // 2 Receptionist: a live voice waveform
    {
      const f = make();
      const B = mobile ? 30 : 46;
      const bw = R.w / B;
      const env = Float32Array.from({ length: B }, (_, b) => 0.22 + 0.78 * Math.abs(Math.sin(b * 0.41) * Math.cos(b * 0.13 + 1)));
      const bar = new Uint16Array(N);
      const v = new Float32Array(N);
      for (let i = 0; i < NW; i++) {
        bar[i] = i % B;
        v[i] = rand() * 2 - 1;
        f.x[i] = R.x + (bar[i] + 0.5) * bw + (rand() - 0.5) * bw * 0.3;
        f.y[i] = cy;
        f.a[i] = 0.8;
      }
      for (let i = NW; i < N; i++) {
        v[i] = (i - NW) / (N - NW);
        f.x[i] = R.x + v[i] * R.w;
        f.y[i] = cy;
        f.a[i] = 1;
        f.s[i] = 1.3;
      }
      f.dyn = (i, t, o) => {
        if (i < NW) {
          const b = bar[i];
          const m = reduced ? 0.7 : 0.3 + 0.7 * Math.abs(Math.sin(t * 2.1 + b * 0.47) * Math.sin(t * 1.27 + b * 0.19));
          o.y += v[i] * env[b] * m * R.h * 0.44;
        } else {
          o.y += Math.sin(v[i] * 9 + t * 2.6) * R.h * 0.07;
        }
      };
      F.push(f);
    }

    // 3 Voice tutor: an open book that speaks
    {
      const f = make();
      const book = sample((g) => {
        g.beginPath();
        g.moveTo(18, 78);
        g.lineTo(116, 96);
        g.lineTo(116, 176);
        g.lineTo(18, 156);
        g.closePath();
        g.fill();
        g.beginPath();
        g.moveTo(222, 78);
        g.lineTo(124, 96);
        g.lineTo(124, 176);
        g.lineTo(222, 156);
        g.closePath();
        g.fill();
      }, NW, R, rand);
      for (let i = 0; i < NW; i++) {
        f.x[i] = book[i * 2];
        f.y[i] = book[i * 2 + 1];
        f.a[i] = 0.75;
      }
      const scale = Math.min(R.w / 240, R.h / 180);
      const ox = R.x + (R.w - 240 * scale) / 2;
      const oy = R.y + (R.h - 180 * scale) / 2;
      const arc = new Uint8Array(N);
      for (let i = NW; i < N; i++) {
        arc[i] = (i - NW) % 3;
        const r = (20 + arc[i] * 17) * scale;
        const ang = Math.PI * (1.18 + rand() * 0.64);
        f.x[i] = ox + 120 * scale + Math.cos(ang) * r;
        f.y[i] = oy + 74 * scale + Math.sin(ang) * r;
        f.s[i] = 1.3;
      }
      f.dyn = (i, t, o) => {
        if (i >= NW) o.a = reduced ? 1 : 0.25 + 0.75 * Math.max(0, Math.sin(t * 2.4 - arc[i] * 0.9));
      };
      F.push(f);
    }

    // 4 Workflows: four steps, work flowing through
    {
      const f = make();
      const rr = Math.min(R.w / 4 * 0.3, R.h * 0.2);
      const xs = [0, 1, 2, 3].map((k) => R.x + (R.w * (k + 0.5)) / 4);
      for (let i = 0; i < NW; i++) {
        const k = i % 4;
        if (rand() < 0.68) {
          const ang = rand() * TAU;
          const r = rr + (rand() - 0.5) * 5;
          f.x[i] = xs[k] + Math.cos(ang) * r;
          f.y[i] = cy + Math.sin(ang) * r;
        } else {
          const j = k % 3;
          f.x[i] = xs[j] + rr + rand() * (xs[j + 1] - xs[j] - 2 * rr);
          f.y[i] = cy + (rand() - 0.5) * 3;
        }
        f.a[i] = 0.75;
      }
      const span = xs[3] - xs[0];
      for (let i = NW; i < N; i++) {
        f.x[i] = xs[0];
        f.y[i] = cy + (rand() - 0.5) * 5;
        f.s[i] = 1.3;
        f.a[i] = 1;
      }
      f.dyn = (i, t, o) => {
        if (i < NW) return;
        const u = (seed[i] * 0.25 + Math.floor(seed[i] * 4) / 4 + t * 0.09) % 1;
        o.x += u * span;
      };
      F.push(f);
    }

    // 5 Knowledge: everything indexed, the few that matter lit
    {
      const f = make();
      const cols = Math.round(Math.sqrt((N * R.w) / R.h));
      const rows = Math.ceil(N / cols);
      const cell = Math.min(R.w / cols, R.h / rows);
      const ox = cx - (cols * cell) / 2;
      const oy = cy - (rows * cell) / 2;
      const order = Array.from({ length: N }, (_, i) => i).sort(() => rand() - 0.5);
      for (let i = 0; i < N; i++) {
        const p = order[i];
        f.x[i] = ox + ((p % cols) + 0.5) * cell;
        f.y[i] = oy + (Math.floor(p / cols) + 0.5) * cell;
        f.a[i] = i < NW ? 0.26 : 1;
        f.s[i] = i < NW ? 0.9 : 1.9;
      }
      f.dyn = (i, t, o) => {
        if (i >= NW && !reduced) o.a = 0.55 + 0.45 * Math.sin(t * 1.6 + phase[i]);
      };
      F.push(f);
    }

    // 6 Yours: in orbit
    {
      const f = make();
      const ring = new Uint8Array(N);
      const ang = new Float32Array(N);
      const rx = Math.min(R.w * 0.5, R.h * 0.72);
      const tilt = (-20 * Math.PI) / 180;
      const ct = Math.cos(tilt);
      const st = Math.sin(tilt);
      for (let i = 0; i < NW; i++) {
        ring[i] = i % 3;
        ang[i] = rand() * TAU;
        f.x[i] = cx;
        f.y[i] = cy;
        f.a[i] = 0.8;
      }
      for (let i = NW; i < N; i++) {
        const r = Math.sqrt(rand()) * unit * 0.085;
        const a = rand() * TAU;
        f.x[i] = cx + Math.cos(a) * r;
        f.y[i] = cy + Math.sin(a) * r;
        f.a[i] = 1;
        f.s[i] = 1.2;
      }
      const SP = [0.22, -0.15, 0.1];
      f.dyn = (i, t, o) => {
        if (i >= NW) return;
        const k = ring[i];
        const r = rx * [0.46, 0.72, 1][k] + (seed[i] - 0.5) * 6;
        const a = ang[i] + (reduced ? 0 : t * SP[k]);
        const ex = r * Math.cos(a);
        const ey = r * 0.4 * Math.sin(a);
        o.x = cx + ex * ct - ey * st;
        o.y = cy + ex * st + ey * ct;
        o.a = 0.35 + 0.55 * (Math.sin(a) + 1) / 2;
      };
      F.push(f);
    }
    F[0] = F[6];
  }

  let shown = 0;
  let target = 0;
  let chapter = -1;
  const A = { x: 0, y: 0, a: 0 };
  const B = { x: 0, y: 0, a: 0 };

  function setChapter(ch) {
    if (ch === chapter) return;
    chapter = ch;
    caps.forEach((c, i) => c.classList.toggle("on", i === ch));
    hudN.textContent = `0${ch + 1}`;
    hudName.textContent = NAMES[ch];
    hudHint.style.opacity = ch === 0 ? 1 : 0;
  }

  function draw(time) {
    const t = time / 1000;
    shown += (target - shown) * (reduced ? 1 : 0.14);
    const c = shown * (K - 1);
    const i0 = Math.min(K - 2, Math.floor(c));
    const local = c - i0;
    const u = clamp((local - 0.28) / 0.5);
    setChapter(local < 0.52 ? i0 : i0 + 1);
    bars.forEach((b, i) => b.style.setProperty("--p", clamp(c - i + 0.5)));

    const fa = F[i0];
    const fb = F[i0 + 1];
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, W, H);
    const size = W < 860 ? 1.25 : 1.6;

    for (let i = 0; i < N; i++) {
      if (i === 0) ctx.fillStyle = WHITE;
      else if (i === NW) ctx.fillStyle = GREEN;
      const ti = clamp(u * 1.4 - seed[i] * 0.4);
      const e = ti * ti * (3 - 2 * ti);
      let x;
      let y;
      let a;
      if (e < 1) {
        A.x = fa.x[i];
        A.y = fa.y[i];
        A.a = fa.a[i];
        if (fa.dyn) fa.dyn(i, t, A);
      }
      if (e > 0) {
        B.x = fb.x[i];
        B.y = fb.y[i];
        B.a = fb.a[i];
        if (fb.dyn) fb.dyn(i, t, B);
      }
      if (e <= 0) {
        x = A.x;
        y = A.y;
        a = A.a;
      } else if (e >= 1) {
        x = B.x;
        y = B.y;
        a = B.a;
      } else {
        x = A.x + (B.x - A.x) * e;
        y = A.y + (B.y - A.y) * e;
        a = A.a + (B.a - A.a) * e;
      }
      const s = (fa.s[i] + (fb.s[i] - fa.s[i]) * e) * size;
      ctx.globalAlpha = a;
      ctx.beginPath();
      ctx.arc(x, y, s, 0, TAU);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
  }

  function measure() {
    const total = section.offsetHeight - innerHeight;
    target = clamp(-section.getBoundingClientRect().top / total);
  }

  let visible = true;
  let raf = 0;
  const loop = (time) => {
    draw(time);
    raf = visible ? requestAnimationFrame(loop) : 0;
  };
  const start = () => {
    if (!raf) raf = requestAnimationFrame(loop);
  };

  build();
  measure();
  shown = target;
  start();

  addEventListener("scroll", measure, { passive: true });
  let resizeTimer;
  addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      build();
      measure();
      start();
    }, 120);
  });
  new IntersectionObserver(([e]) => {
    visible = e.isIntersecting;
    if (visible) start();
  }).observe(section);
}

/* ---------- Niches, clock, ledger ---------- */

function reveals() {
  if (reduced) return;

  const niches = $$("#niches li");
  niches.forEach((n) => (n.style.opacity = 0));
  once($("#niches"), () => animate(niches, { opacity: [0, 1], duration: 700, delay: stagger(70), ease: "outQuad" }), 0.15);

  const clock = $("#clock");
  once(clock, () => {
    const startAt = performance.now();
    const pad = (n) => String(n).padStart(2, "0");
    const tick = () => {
      const left = Math.max(0, 48 * 3600 - Math.floor((performance.now() - startAt) / 1000));
      const h = Math.floor(left / 3600);
      const m = Math.floor((left % 3600) / 60);
      clock.innerHTML = `<b>${pad(h)}</b>:${pad(m)}:${pad(left % 60)}`;
    };
    tick();
    setInterval(tick, 1000);
  });

  const steps = $$("#steps li");
  steps.forEach((s) => (s.style.opacity = 0));
  once($("#steps"), () => animate(steps, { opacity: [0, 1], translateY: [20, 0], duration: 800, delay: stagger(140), ease: "outExpo" }));

  once($("#ledger"), () => {
    $$("#ledger [data-count]").forEach((node, i) => {
      const state = { v: 0 };
      animate(state, {
        v: +node.dataset.count,
        duration: 1400,
        delay: i * 140,
        ease: "outExpo",
        onUpdate: () => (node.textContent = Math.round(state.v)),
      });
    });
  });
}

/* ---------- Work: preview follows the cursor ---------- */

function work() {
  const peek = $("#peek");
  const rows = $$("#work-list a");
  if (!peek || !rows.length || !matchMedia("(hover: hover) and (min-width: 861px)").matches) return;
  let x = 0;
  let y = 0;
  let tx = 0;
  let ty = 0;
  let raf = 0;
  const step = () => {
    x += (tx - x) * (reduced ? 1 : 0.16);
    y += (ty - y) * (reduced ? 1 : 0.16);
    peek.style.transform = `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px)`;
    raf = Math.abs(tx - x) + Math.abs(ty - y) > 0.3 ? requestAnimationFrame(step) : 0;
  };
  const aim = (e) => {
    const w = peek.offsetWidth;
    const h = peek.offsetHeight;
    // Park the preview at the right edge, just below the hovered row (or above it when there is no room).
    const row = e.currentTarget.getBoundingClientRect();
    tx = innerWidth - w - parseFloat(getComputedStyle(e.currentTarget).paddingRight || 0) - row.left;
    ty = row.bottom + 12 + h < innerHeight ? row.bottom + 12 : row.top - h - 12;
    if (!raf) raf = requestAnimationFrame(step);
  };
  rows.forEach((row) => {
    const { poster, video } = row.dataset;
    if (!poster) return;
    row.addEventListener("pointerenter", (e) => {
      const img = new Image();
      img.src = poster;
      img.alt = "";
      const kids = [img];
      if (video && !reduced) {
        const v = document.createElement("video");
        Object.assign(v, { src: video, muted: true, loop: true, playsInline: true, autoplay: true });
        v.style.opacity = 0;
        v.addEventListener("playing", () => (v.style.opacity = 1), { once: true });
        kids.push(v);
      }
      peek.replaceChildren(...kids);
      aim(e);
      x = tx;
      y = ty;
      peek.classList.add("on");
    });
    row.addEventListener("pointermove", aim);
    row.addEventListener("pointerleave", () => {
      peek.classList.toggle("on", false);
      peek.querySelector("video")?.pause();
    });
  });
}

/* ---------- Contact form ---------- */

function form() {
  const f = $("#request");
  if (!f) return;
  const state = $("#form-state");
  f.addEventListener("submit", async (e) => {
    e.preventDefault();
    const btn = $("button[type=submit]", f);
    btn.disabled = true;
    state.hidden = false;
    state.className = "form-state mono";
    state.textContent = "Sending…";
    try {
      const res = await fetch(f.action, { method: "POST", body: new FormData(f), headers: { Accept: "application/json" } });
      if (!res.ok) throw new Error(String(res.status));
      f.reset();
      state.textContent = "Received. We will reply within 48 hours.";
    } catch {
      state.classList.add("err");
      state.textContent = "That did not send. Please email contact@openorbit.tech instead.";
    } finally {
      btn.disabled = false;
    }
  });
}

film();
work();
reveals();
form();
