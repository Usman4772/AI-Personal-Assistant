import Link from "next/link";
import { cn } from "@/lib/utils";

const variants = {
  primary:
    "bg-primary text-on-primary shadow-[0_0_20px_rgba(0,82,255,0.3)] hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(0,82,255,0.5)] border border-transparent",
  secondary:
    "border border-outline-variant/60 bg-surface-container-lowest text-on-surface hover:-translate-y-1 hover:border-primary hover:text-primary",
  glass: "glass-card text-on-surface hover:-translate-y-1 hover:bg-white/90",
  dark: "bg-ink text-white hover:bg-ink/90 shadow-lg border border-transparent",
  ghost: "bg-transparent text-on-surface hover:bg-surface-container border border-transparent",
  link: "bg-transparent text-primary hover:text-primary-container px-0 py-0 h-auto rounded-none shadow-none",
};

const sizes = {
  sm: "px-6 py-2.5 text-[13px] font-bold tracking-wide",
  md: "px-7 py-3.5 text-sm font-bold tracking-wide",
  lg: "px-8 py-4 text-base font-bold tracking-wide",
};

function classes(variant, size, className) {
  if (variant === "link") {
    return cn("inline-flex items-center gap-1.5 font-semibold transition-colors", variants[variant], className);
  }
  return cn(
    "inline-flex cursor-pointer items-center justify-center gap-2 rounded-full whitespace-nowrap transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 active:translate-y-px active:scale-[0.99]",
    variants[variant],
    sizes[size],
    className,
  );
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  href,
  type = "button",
  ...props
}) {
  const classNames = classes(variant, size, className);

  if (href) {
    if (href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("http") || href.startsWith("tel:")) {
      return (
        <a href={href} className={classNames} {...props}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classNames} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classNames} {...props}>
      {children}
    </button>
  );
}
