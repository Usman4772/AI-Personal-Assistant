import Image from "next/image";

export function HeroMacbook() {
  return (
    <div className="relative mx-auto w-full max-w-[540px] xl:max-w-[580px]">
      <div
        className="pointer-events-none absolute -inset-8 -z-10 rounded-full bg-[radial-gradient(circle_at_50%_40%,_rgba(0,82,255,0.16),_transparent_65%)] blur-2xl"
        aria-hidden
      />

      <div className="relative w-full">
        <Image
          src="/images/macbook.png"
          alt="MacBook showing Usman's delivery console"
          width={1024}
          height={1024}
          priority
          sizes="(max-width: 1024px) 90vw, 540px"
          className="relative z-0 h-auto w-full"
        />

        <div
          className="hero-mac-screen absolute z-10 overflow-hidden rounded-[1.15%/2.35%] bg-[#f8fafc]"
          aria-hidden="true"
        >
          <div className="absolute left-1/2 top-0 z-20 h-[2.35%] w-[11.8%] -translate-x-1/2 rounded-b-[0.45rem] bg-black" />

          <div className="flex h-full flex-col pt-[2.6%]">
            <div className="flex items-center justify-between border-b border-slate-200/90 bg-white px-[2.8%] py-[1.6%]">
              <div className="flex items-center gap-1.5">
                <span className="inline-flex h-3.5 w-3.5 items-center justify-center rounded-md bg-ink text-[0.4rem] font-bold text-white sm:h-4 sm:w-4 sm:text-[0.5rem]">
                  U
                </span>
                <span className="text-[0.48rem] font-bold text-ink sm:text-[0.58rem]">
                  Usman.dev
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="hidden rounded-full bg-emerald-500/10 px-1.5 py-0.5 text-[0.45rem] font-semibold text-emerald-700 sm:inline sm:text-[0.55rem]">
                  Live
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-slate-300 sm:h-2 sm:w-2" />
              </div>
            </div>

            <div className="grid min-h-0 flex-1 grid-cols-[22%_1fr]">
              <aside className="border-r border-slate-200/90 bg-white px-[6%] py-[10%]">
                <p className="mb-[12%] text-[0.42rem] font-semibold uppercase tracking-[0.12em] text-slate-400 sm:text-[0.5rem]">
                  Delivery
                </p>
                <ul className="space-y-[8%]">
                  {["Overview", "Projects", "Skills", "Systems", "Contact"].map(
                    (item, i) => (
                      <li
                        key={item}
                        className={`rounded-[0.28rem] px-[10%] py-[8%] text-[0.48rem] sm:text-[0.58rem] ${
                          i === 0
                            ? "bg-primary-fixed/70 font-semibold text-primary"
                            : "text-slate-500"
                        }`}
                      >
                        {item}
                      </li>
                    ),
                  )}
                </ul>
              </aside>

              <div className="flex min-h-0 flex-col gap-[4%] bg-[#f1f5f9]/70 p-[3.5%] sm:p-[4%]">
                <div className="flex items-end justify-between gap-2">
                  <div>
                    <p className="text-[0.45rem] font-medium text-slate-400 sm:text-[0.55rem]">
                      System reliability
                    </p>
                    <p className="font-display text-[0.85rem] font-bold leading-none text-foreground sm:text-[1.05rem]">
                      99.9%{" "}
                      <span className="text-[0.55rem] font-semibold text-slate-400 sm:text-[0.65rem]">
                        uptime
                      </span>
                    </p>
                  </div>
                  <span className="rounded-full bg-primary-container px-1.5 py-0.5 text-[0.42rem] font-semibold text-white sm:text-[0.5rem]">
                    Production
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-[3%]">
                  {[
                    { label: "Projects", value: "15+" },
                    { label: "Workflows", value: "10+" },
                    { label: "Years", value: "1.5+" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-[0.35rem] border border-slate-200/90 bg-white px-[10%] py-[12%] shadow-[0_1px_2px_rgba(15,23,42,0.04)]"
                    >
                      <p className="font-display text-[0.65rem] font-bold text-foreground sm:text-[0.8rem]">
                        {stat.value}
                      </p>
                      <p className="text-[0.42rem] text-slate-500 sm:text-[0.5rem]">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="min-h-0 flex-1 rounded-[0.4rem] border border-slate-200/90 bg-white p-[3.5%] shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
                  <p className="text-[0.48rem] font-semibold text-slate-600 sm:text-[0.58rem]">
                    Active delivery
                  </p>
                  <div className="mt-[3%] space-y-[6%]">
                    {[
                      { name: "Next.js platforms", pct: 92 },
                      { name: "Payment systems", pct: 78 },
                      { name: "AI workflows", pct: 64 },
                    ].map((row) => (
                      <div key={row.name}>
                        <div className="mb-[2%] flex justify-between text-[0.42rem] text-slate-500 sm:text-[0.5rem]">
                          <span>{row.name}</span>
                          <span>{row.pct}%</span>
                        </div>
                        <div className="h-1 overflow-hidden rounded-full bg-slate-100 sm:h-1.5">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-primary to-secondary-container"
                            style={{ width: `${row.pct}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
