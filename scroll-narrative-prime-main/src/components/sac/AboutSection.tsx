import { ArrowRight, Sparkles, Users, Trophy } from "lucide-react";
import { Reveal } from "./Reveal";

export function AboutSection() {
  return (
    <section id="about" className="section-pad relative overflow-hidden bg-background">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-10 h-[28rem] w-[28rem] rounded-full bg-gold/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-secondary/5 blur-3xl"
      />

      <div className="section-shell relative grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal className="order-1 flex flex-col items-start gap-5">
          <span className="eyebrow">About Us</span>
          <h2 className="text-3xl font-bold leading-tight text-navy md:text-4xl lg:text-[2.75rem]">
            Student Activity Center
          </h2>
          <span className="gold-rule" />
          <p className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            The Student Activity Center is the heart of student engagement at KLH University. We
            empower students to discover their interests, develop leadership skills, collaborate
            with peers, and create memorable experiences beyond the classroom.
          </p>
          <div className="mt-2 grid w-full gap-4 sm:grid-cols-3">
            {[
              { icon: Sparkles, label: "8 Active Clubs" },
              { icon: Users, label: "5000+ Members" },
              { icon: Trophy, label: "120+ Awards" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 shadow-[var(--shadow-soft)]"
              >
                <Icon size={18} className="shrink-0 text-gold" />
                <span className="min-w-0 truncate text-sm font-semibold text-navy">{label}</span>
              </div>
            ))}
          </div>
          <a href="#clubs" className="btn-base btn-burgundy group mt-4">
            Discover SAC
            <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>

        <Reveal delay={120} className="order-2">
          <div className="relative mx-auto grid aspect-square w-full max-w-md place-items-center rounded-[2.5rem] border border-gold/25 bg-[image:var(--gradient-navy)] p-10 shadow-[var(--shadow-card)]">
            <div
              aria-hidden
              className="absolute inset-6 rounded-[2rem] border border-gold/15"
            />
            <div className="relative text-center">
              <p className="font-display text-[5.5rem] font-extrabold leading-none tracking-tight text-transparent [background-image:var(--gradient-gold)] [background-clip:text] sm:text-[7rem]">
                SAC
              </p>
              <span className="mx-auto mt-4 block h-px w-40 bg-gold/50" />
              <p className="mt-4 text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-primary-foreground/80">
                Student Activity Center
              </p>
              <p className="mt-6 text-sm text-primary-foreground/55">KLH University</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
