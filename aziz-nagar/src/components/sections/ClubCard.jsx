import { Link } from "react-router-dom";
import { BookOpen, Camera, Clapperboard, Mic, Music, Palette, Shirt, Sparkles, Code, Bot, Video, Headphones, Theater, MessageSquare, Rocket, TrendingUp, Target, Briefcase, Users, Globe } from "lucide-react";
const iconMap = {
  camera: Camera,
  clapperboard: Clapperboard,
  sparkles: Sparkles,
  music: Music,
  mic: Mic,
  "book-open": BookOpen,
  palette: Palette,
  shirt: Shirt,
  code: Code,
  bot: Bot,
  video: Video,
  headphones: Headphones,
  drama: Theater,
  "message-square": MessageSquare,
  rocket: Rocket,
  "trending-up": TrendingUp,
  target: Target,
  briefcase: Briefcase,
  users: Users,
  globe: Globe
};
export function ClubCard({
  id,
  name,
  image,
  icon
}) {
  const Icon = iconMap[icon] || Sparkles;
  return <Link to={id ? `/clubs/${id}` : "#"} aria-label={`View ${name} club`} className="club-card group relative block w-[8.5rem] shrink-0 snap-start overflow-hidden rounded-2xl border border-transparent bg-navy-deep shadow-[var(--shadow-card)] outline-none focus-visible:ring-2 focus-visible:ring-[#C99A3D] sm:w-auto">
      {/* Background image with zoom container */}
      <div className="relative aspect-[9/16] w-full overflow-hidden">
        <img src={image} alt={name} width={600} height={1066} loading="lazy" decoding="async" className="club-card-img h-full w-full object-cover" />
        {/* Main dark gradient overlay */}
        <div className="club-card-veil absolute inset-0 bg-[linear-gradient(180deg,transparent_20%,oklch(0.17_0.03_262/0.7)_62%,oklch(0.17_0.03_262/0.96)_100%)]" />
        {/* Hover accent: subtle top gold shimmer */}
        <div className="club-card-shimmer absolute inset-x-0 top-0 h-0.5 bg-[image:var(--gradient-gold)] opacity-0 scale-x-0 origin-left" />
      </div>

      {/* Bottom content: icon + rule + title */}
      <div className="absolute inset-x-0 bottom-0 flex flex-col items-center px-2.5 pb-4">
        <span className="club-card-icon text-gold">
          <Icon size={20} />
        </span>
        <span className="club-card-rule mt-2 block h-px w-6 bg-[image:var(--gradient-gold)] opacity-0" />
        <h3 className="club-card-title mt-2 text-center font-display text-[0.82rem] font-bold leading-tight text-primary-foreground/90">
          {name}
        </h3>
      </div>
    </Link>;
}