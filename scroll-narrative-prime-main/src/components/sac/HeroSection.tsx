import { ArrowRight } from "lucide-react";
import heroCampus from "@/assets/hero-campus.jpg";

const particles = [
  { left: "8%", top: "30%", delay: "0s", size: 6 },
  { left: "18%", top: "68%", delay: "1.4s", size: 4 },
  { left: "31%", top: "22%", delay: "2.6s", size: 5 },
  { left: "47%", top: "78%", delay: "0.8s", size: 3 },
  { left: "62%", top: "36%", delay: "3.2s", size: 5 },
  { left: "74%", top: "62%", delay: "1.9s", size: 4 },
  { left: "88%", top: "28%", delay: "2.2s", size: 6 },
];

export function HeroSection() {
  return (
    <section id="home" className="relative isolate flex min-h-[88vh] items-center overflow-hidden">
      <img
        src={heroCampus}
        alt="KLH University campus at dusk with students on the lawn"
        width={1920}
        height={1080}
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,oklch(0.17_0.03_262/0.95)_0%,oklch(0.17_0.03_262/0.8)_45%,oklch(0.17_0.03_262/0.45)_100%)]" />

      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        {particles.map((p, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-gold/70 blur-[1px] motion-safe:animate-pulse"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              animationDelay: p.delay,
              animationDuration: "4.5s",
            }}
          />
        ))}
        <span className="absolute -left-24 bottom-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
      </div>

      <div className="section-shell w-full pb-24 pt-36 md:pb-32 md:pt-40">
        <div className="max-w-2xl">
          <p className="eyebrow motion-safe:animate-fade-in">KLH Student Activity Center</p>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] text-primary-foreground sm:text-5xl lg:text-6xl motion-safe:animate-fade-in">
            Empowering Student Life Beyond the Classroom
          </h1>
          <p className="mt-5 font-display text-lg font-semibold tracking-wide text-gold">
            Explore. Engage. Excel.
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-primary-foreground/75 md:text-lg">
            Discover clubs, events, competitions, leadership opportunities and experiences that
            help shape the future beyond academics.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#clubs" className="btn-base btn-gold group">
              Explore Activities
              <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#about" className="btn-base btn-outline-gold group">
              Join SAC
              <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
