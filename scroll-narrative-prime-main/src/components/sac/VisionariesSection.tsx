import { useEffect, useRef, useState } from "react";
import { visionaries } from "@/lib/sac-data";
import { cn } from "@/lib/utils";

const clamp = (v: number, min = 0, max = 1) => Math.min(max, Math.max(min, v));
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
// eased 0..1 ramp between two progress stops
const ramp = (t: number, from: number, to: number) => {
  const x = clamp((t - from) / (to - from));
  return 1 - Math.pow(1 - x, 3);
};

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return reduced;
}

function SectionIntro() {
  return (
    <div className="section-shell relative z-10 pb-4 pt-20 md:pt-28">
      <span className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
        Our Visionaries
      </span>
      <h2 className="mt-4 max-w-3xl font-display text-3xl font-extrabold leading-tight text-secondary md:text-5xl">
        Guiding. Inspiring. Leading.
      </h2>
      <span className="mt-6 block h-px w-24 bg-[image:var(--gradient-gold)]" />
      <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
        Meet the leaders who guide our students, inspire meaningful participation, and help shape
        the future of student life at KLH.
      </p>
    </div>
  );
}

function Portrait({ name, image }: { name: string; image: string }) {
  return (
    <div className="relative w-[min(78vw,22rem)] shrink-0 md:w-[26rem] lg:w-[30rem]">
      <div className="rounded-2xl p-[2px] [background-image:var(--gradient-gold)] shadow-[var(--shadow-lift)]">
        {/* Replace src in src/lib/sac-data.ts (src/assets/vis-1…4.jpg) with the final portraits */}
        <img
          src={image}
          alt={name}
          width={900}
          height={1100}
          loading="lazy"
          decoding="async"
          className="aspect-[4/5] w-full rounded-[calc(1rem-1px)] bg-muted object-cover"
        />
      </div>
    </div>
  );
}

function Copy({
  index,
  name,
  role,
  align,
}: {
  index: number;
  name: string;
  role: string;
  align: "left" | "right";
}) {
  return (
    <div className={cn("max-w-md", align === "right" && "md:text-right")}>
      <span className="font-display text-sm font-bold tracking-[0.3em] text-gold/70">
        {String(index + 1).padStart(2, "0")}
      </span>
      <h3 className="mt-3 font-display text-3xl font-extrabold leading-tight text-secondary md:text-5xl">
        {name}
      </h3>
      <p className="mt-3 text-lg font-semibold text-gold md:text-xl">{role}</p>
      <span
        className={cn(
          "mt-5 block h-px w-28 bg-[image:var(--gradient-gold)]",
          align === "right" && "md:ml-auto",
        )}
      />
    </div>
  );
}

function StaticVisionaries() {
  return (
    <div className="section-shell space-y-20 py-20">
      {visionaries.map((v, i) => (
        <div
          key={v.name}
          className={cn(
            "flex flex-col items-center gap-8 md:flex-row md:items-center md:gap-14",
            i % 2 === 1 && "md:flex-row-reverse",
          )}
        >
          <Portrait name={v.name} image={v.image} />
          <Copy index={i} name={v.name} role={v.role} align={i % 2 === 1 ? "right" : "left"} />
        </div>
      ))}
    </div>
  );
}

export function VisionariesSection() {
  const reduced = usePrefersReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0); // 0 .. visionaries.length

  useEffect(() => {
    if (reduced) return;
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const el = trackRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const total = el.offsetHeight - window.innerHeight;
        const p = clamp(-rect.top / Math.max(total, 1)) * visionaries.length;
        setProgress(p);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [reduced]);

  const activeIndex = Math.min(visionaries.length - 1, Math.floor(progress));

  return (
    <section id="visionaries" className="relative bg-ivory [overflow:clip]">
      {/* soft decorative background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.5] [background:radial-gradient(60rem_40rem_at_85%_-10%,oklch(0.86_0.07_84/0.35),transparent_60%),radial-gradient(50rem_35rem_at_-10%_60%,oklch(0.33_0.13_15/0.07),transparent_60%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:linear-gradient(oklch(0.33_0.13_15)_1px,transparent_1px),linear-gradient(90deg,oklch(0.33_0.13_15)_1px,transparent_1px)] [background-size:88px_88px]"
      />

      <SectionIntro />

      {reduced ? (
        <StaticVisionaries />
      ) : (
        <div
          ref={trackRef}
          className="relative"
          style={{ height: `${(visionaries.length + 0.35) * 100}vh` }}
        >
          <div className="sticky top-0 flex h-screen items-center overflow-hidden">
            <div className="section-shell relative w-full lg:px-24">
              {visionaries.map((v, i) => {
                const t = progress - i;
                const enter = ramp(t, 0, 0.35);
                const exit = i === visionaries.length - 1 ? 0 : ramp(t, 0.82, 1);
                const visible = t > -0.25 && t < 1.15;

                const imgStyle = {
                  opacity: enter * (1 - exit),
                  transform: `translate3d(0, ${lerp(-110, 0, enter)}px, 0) scale(${lerp(
                    0.95,
                    1,
                    enter,
                  ) * lerp(1, 0.96, exit)})`,
                  filter: exit > 0 ? `blur(${(exit * 4).toFixed(2)}px)` : undefined,
                };
                const textEnter = ramp(t, 0.08, 0.5);
                const fromLeft = i % 2 === 0;
                const textStyle = {
                  opacity: textEnter * (1 - exit),
                  transform: `translate3d(${lerp(fromLeft ? -80 : 80, 0, textEnter)}px, 0, 0)`,
                };

                return (
                  <div
                    key={v.name}
                    aria-hidden={!visible}
                    className={cn(
                      "absolute inset-x-0 top-1/2 flex -translate-y-1/2 flex-col items-center gap-8 md:flex-row md:justify-between md:gap-14",
                      !fromLeft && "md:flex-row-reverse",
                      !visible && "pointer-events-none invisible",
                    )}
                  >
                    <div style={textStyle} className="w-full will-change-transform md:w-auto">
                      <Copy
                        index={i}
                        name={v.name}
                        role={v.role}
                        align={fromLeft ? "left" : "right"}
                      />
                    </div>
                    <div style={imgStyle} className="will-change-transform">
                      <Portrait name={v.name} image={v.image} />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* desktop vertical indicator */}
            <div className="absolute left-4 top-1/2 hidden -translate-y-1/2 flex-col items-center gap-3 lg:flex">
              {visionaries.map((v, i) => (
                <div key={v.name} className="flex flex-col items-center gap-3">
                  <div className="flex items-center gap-2">
                    <span
                      className={cn(
                        "font-display text-xs font-bold transition-colors duration-300",
                        i === activeIndex ? "text-secondary" : "text-muted-foreground/50",
                      )}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={cn(
                        "h-2.5 w-2.5 rounded-full border transition-all duration-300",
                        i === activeIndex
                          ? "scale-125 border-secondary bg-secondary"
                          : "border-gold/60 bg-transparent",
                      )}
                    />
                  </div>
                  {i < visionaries.length - 1 && <span className="h-10 w-px bg-gold/35" />}
                </div>
              ))}
            </div>

            {/* mobile progress indicator */}
            <div className="absolute inset-x-0 bottom-6 flex justify-center gap-2 lg:hidden">
              {visionaries.map((v, i) => (
                <span
                  key={v.name}
                  className={cn(
                    "h-1 rounded-full transition-all duration-300",
                    i === activeIndex ? "w-8 bg-secondary" : "w-4 bg-gold/40",
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
