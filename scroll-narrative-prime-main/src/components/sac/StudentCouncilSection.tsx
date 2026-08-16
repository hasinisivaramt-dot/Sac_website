import { ArrowRight } from "lucide-react";
import councilImg from "@/assets/student-council.jpg";
import { Reveal } from "./Reveal";

export function StudentCouncilSection() {
  return (
    <section id="student-council" className="section-pad bg-background">
      <div className="section-shell">
        <Reveal className="flex flex-col items-start gap-5">
          <span className="eyebrow">Representation</span>
          <h2 className="text-3xl font-bold leading-tight text-navy md:text-4xl lg:text-[2.75rem]">
            Student Council
          </h2>
          <span className="gold-rule" />
          <p className="max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
            The Student Council is the backbone of SAC, working together to represent students,
            organize events, encourage participation, and bring new ideas to life.
          </p>
          <a href="#student-council" className="btn-base btn-burgundy group mt-2">
            Meet the Student Council
            <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>

        <Reveal delay={120} className="mt-12">
          <div className="relative overflow-hidden rounded-[2rem] border border-border shadow-[var(--shadow-card)]">
            <img
              src={councilImg}
              alt="KLH University Student Council members"
              width={1200}
              height={800}
              loading="lazy"
              className="h-[20rem] w-full object-cover md:h-[32rem]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
