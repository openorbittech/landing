import { animate, stagger } from "animejs";

const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
const $$ = (s, root = document) => [...root.querySelectorAll(s)];

/* Demo videos load when they come near the viewport and only play while visible. */
function videos() {
  const io = new IntersectionObserver(
    (entries) => {
      for (const { target: v, isIntersecting } of entries) {
        if (!v.src && isIntersecting) v.src = v.dataset.src;
        if (reduced) continue;
        if (isIntersecting) v.play().catch(() => {});
        else v.pause();
      }
    },
    { rootMargin: "200px 0px", threshold: 0.15 },
  );
  $$("video[data-src]").forEach((v) => io.observe(v));
}

/* Index: mark the case study currently in view. */
function index() {
  const links = new Map($$("#pf-index a").map((a) => [a.getAttribute("href").slice(1), a]));
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) links.get(e.target.id)?.classList.toggle("on", e.isIntersecting);
    },
    { rootMargin: "-45% 0px -45% 0px" },
  );
  $$(".case").forEach((c) => io.observe(c));
}

function intro() {
  if (reduced) return;
  animate(".pf-hero h1, .pf-hero > p, .pf-index li", {
    opacity: [0, 1],
    translateY: [24, 0],
    duration: 800,
    delay: stagger(60),
    ease: "outExpo",
  });
}

videos();
index();
intro();
