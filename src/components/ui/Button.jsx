import { ArrowRight } from 'lucide-react';

const variants = {
  primary: 'bg-gold text-burgundy-deep hover:bg-gold-light shadow-gold',
  outline: 'border border-gold/70 text-cream-soft hover:bg-gold/10',
  ghost: 'border border-burgundy/30 text-burgundy hover:bg-burgundy/5',
  dark: 'bg-burgundy text-cream-soft hover:bg-burgundy-dark',
};

export default function Button({
  children,
  variant = 'primary',
  icon = true,
  className = '',
  as = 'button',
  ...props
}) {
  const Comp = as;
  return (
    <Comp
      className={`group inline-flex items-center gap-2 rounded-sm px-6 py-3 font-utility text-sm uppercase tracking-widest transition-all duration-300 ${variants[variant]} ${className}`}
      {...props}
    >
      <span>{children}</span>
      {icon && (
        <ArrowRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
    </Comp>
  );
}
