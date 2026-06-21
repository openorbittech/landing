"use client";

const services = [
  "WEB DEVELOPMENT",
  "MOBILE APPS",
  "CLOUD SOLUTIONS",
  "DATA ENGINEERING",
  "AI & AUTOMATION",
  "UI/UX DESIGN",
  "WEB3 & BLOCKCHAIN",
  "IOT SOLUTIONS",
];

export function Marquee() {
  return (
    <div className="w-full overflow-hidden border-y border-black/5 bg-black/[0.02] py-3 relative z-10 flex">
      <div className="flex w-max animate-marquee gap-16 pr-16 items-center">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center gap-16">
            {services.map((text, idx) => (
              <span
                key={`${i}-${idx}`}
                className="text-[11px] font-mono tracking-[0.2em] text-gray-500 whitespace-nowrap flex items-center gap-16"
              >
                {text}
                <span className="text-blue-500">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
