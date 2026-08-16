import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import achievementsImg from "@/assets/achievements.jpg";
import { achievementStats } from "@/lib/sac-data";
import { useReveal } from "@/hooks/use-reveal";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const { ref, visible } = useReveal<HTMLSpanElement>(0.4);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!visible) return;
    const duration = 1600;
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCurrent(Math.round(value * eased));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [visible, value]);

  return (
    <span ref={ref} className="font-display text-4xl font-extrabold text-gold md:text-5xl">
      {current.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}

export function AchievementsSection() {
  return (
    <section id="achievements" className="section-pad bg-background">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Excellence"
          title="Celebrating Student Achievements"
          subtitle="SAC has consistently empowered students to achieve excellence across various domains. Our students and clubs continue to represent KLH University on inter-college, state, and national platforms."
        />

        <Reveal className="mt-14">
          <div className="relative overflow-hidden rounded-[2rem] shadow-[var(--shadow-card)]">
            <img
              src={achievementsImg}
              alt="KLH students celebrating with a trophy"
              width={1200}
              height={800}
              loading="lazy"
              className="h-[22rem] w-full object-cover md:h-[30rem]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,oklch(0.17_0.03_262/0.75))]" />
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {achievementStats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 90}>
              <div className="rounded-2xl border border-border bg-card px-6 py-8 text-center shadow-[var(--shadow-soft)]">
                <Counter value={stat.value} suffix={stat.suffix} />
                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex justify-center">
          <a href="#achievements" className="btn-base btn-burgundy group">
            View All Achievements
            <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
