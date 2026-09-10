"use client";

export function HeroMock() {
  return (
    <div className="relative hidden lg:block w-full max-w-[420px] shrink-0 my-4 mr-6 animate-float">
      {/* Main card with subtle hover scaling transition */}
      <div className="relative z-10 bg-white border border-slate-900/10 rounded-2xl shadow-[0_20px_50px_-15px_rgba(15,23,42,0.12)] overflow-hidden transition-all duration-300 hover:shadow-[0_25px_60px_-15px_rgba(15,23,42,0.18)] hover:-translate-y-1">
        {/* Browser Top Bar */}
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-slate-900/10 bg-slate-50/50">
          <i className="w-2.5 h-2.5 rounded-full bg-red-400/80 block" />
          <i className="w-2.5 h-2.5 rounded-full bg-amber-400/80 block" />
          <i className="w-2.5 h-2.5 rounded-full bg-emerald-400/80 block" />
          <span className="ml-3 flex-1 font-mono text-[11px] text-slate-500 bg-white border border-slate-900/10 rounded-md px-2.5 py-1">
            openorbit.tech/what-clients-say
          </span>
        </div>

        {/* Mock Content with tighter padding */}
        <div className="p-4 space-y-3.5">
          <div className="flex items-center justify-between">
            <h4 className="font-semibold text-slate-900 text-xs tracking-tight">What clients say</h4>
            <span className="font-mono text-[10px] font-semibold text-green-700 bg-green-100/80 px-2 py-0.5 rounded-full tracking-wider">
              ★ 4.9
            </span>
          </div>

          <div className="space-y-3">
            {/* Quote 1 */}
            <div className="bg-slate-50/70 border border-slate-900/5 rounded-xl p-3.5 transition-colors duration-200 hover:bg-slate-50">
              <div className="text-amber-500 text-[11px] tracking-widest mb-1.5">★★★★★</div>
              <p className="text-xs text-slate-700 leading-relaxed mb-2.5">
                "They shipped our MVP in six weeks and the quality was production-grade from day one."
              </p>
              <div className="flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-full bg-slate-900 text-white font-mono text-[10px] font-medium flex items-center justify-center">
                  JD
                </span>
                <div className="text-xs">
                  <b className="block font-semibold text-slate-900 leading-tight">James Doyle</b>
                  <span className="text-slate-500 text-[10px]">Founder, MentIQ</span>
                </div>
              </div>
            </div>

            {/* Quote 2 */}
            <div className="bg-slate-50/70 border border-slate-900/5 rounded-xl p-3.5 transition-colors duration-200 hover:bg-slate-50">
              <div className="text-amber-500 text-[11px] tracking-widest mb-1.5">★★★★★</div>
              <p className="text-xs text-slate-700 leading-relaxed mb-2.5">
                "Senior engineers who actually own the outcome. Zero hand-holding, real velocity."
              </p>
              <div className="flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-full bg-green-600 text-white font-mono text-[10px] font-medium flex items-center justify-center">
                  AK
                </span>
                <div className="text-xs">
                  <b className="block font-semibold text-slate-900 leading-tight">Amara Kade</b>
                  <span className="text-slate-500 text-[10px]">CTO, Athleon</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Single Floating Chip (Roadmap ready) positioned at bottom right */}
      <div className="absolute -bottom-4 -right-4 z-20 flex items-center gap-2.5 bg-white border border-slate-900/10 rounded-xl px-3.5 py-2.5 shadow-[0_14px_35px_-10px_rgba(15,23,42,0.18)] text-xs font-semibold animate-float">
        <span className="w-2 h-2 rounded-full bg-green-500 ring-4 ring-green-500/20 shrink-0" />
        <span className="text-slate-900">
          Roadmap ready
          <small className="block font-normal text-slate-500 text-[10px] leading-tight">in 48 hours</small>
        </span>
      </div>
    </div>
  );
}
