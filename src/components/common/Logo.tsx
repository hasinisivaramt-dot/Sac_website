import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function Logo({ className, size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: "h-9 px-3 py-1",
    md: "h-11 px-3.5 py-1.5",
    lg: "h-14 px-4 py-2",
  };

  return (
    <div
      className={cn(
        "relative flex shrink-0 items-center gap-2.5 rounded-xl bg-white shadow-md border border-amber-200/50 select-none",
        sizeClasses[size],
        className
      )}
    >
      {/* KLH Brand Mark */}
      <div className="flex items-center gap-1.5">
        <svg
          viewBox="0 0 100 100"
          className="h-6 w-6 shrink-0 text-[#8B1A2B]"
          fill="currentColor"
        >
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="8" />
          <circle cx="50" cy="50" r="20" fill="currentColor" />
          <path d="M50 5v15M50 80v15M5 50h15M80 50h15M18 18l11 11M71 71l11 11M18 82l11-11M71 29l11-11" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
        </svg>

        <div className="flex flex-col leading-none">
          <span className="font-display text-base font-black tracking-tight text-[#8B1A2B]">
            KL<span className="text-[#C89B3C]">H</span>
          </span>
          <span className="mt-0.5 text-[0.45rem] font-extrabold uppercase tracking-wider text-[#8B1A2B]/85">
            (Deemed to be University)
          </span>
        </div>
      </div>

      {/* Divider */}
      <span className="h-6 w-[1.5px] rounded-full bg-slate-300" />

      {/* SAC Brand Mark */}
      <div className="flex items-center gap-1.5">
        <div className="relative flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-indigo-600 p-[1.5px]">
          <div className="flex h-full w-full items-center justify-center rounded-full bg-white">
            <span className="font-display text-[0.55rem] font-black text-[#8B1A2B]">SAC</span>
          </div>
        </div>

        <div className="flex flex-col leading-tight">
          <span className="font-display text-[0.68rem] font-black uppercase tracking-wider text-slate-800">
            Student
          </span>
          <span className="font-display text-[0.6rem] font-bold uppercase tracking-widest text-[#C89B3C]">
            Activity Center
          </span>
        </div>
      </div>
    </div>
  );
}
