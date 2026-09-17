import { DrawUnderline } from "@/components/DrawUnderline";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
  underline = true,
}) {
  const alignClass =
    align === "center" ? "mx-auto text-center items-center" : "items-start text-left";

  return (
    <div className={cn("flex max-w-[760px] flex-col gap-4", alignClass, className)}>
      {eyebrow ? (
        <span className="inline-flex items-center gap-2.5 text-[13px] font-bold tracking-[0.1em] text-primary uppercase sm:text-sm">
          <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_0_4px_rgba(0,62,199,0.14)]" />
          {eyebrow}
        </span>
      ) : null}

      <div className={cn("flex flex-col", align === "center" ? "items-center" : "items-start")}>
        <h2 className="text-[34px] leading-[1.12] font-extrabold tracking-[-0.035em] text-on-surface sm:text-[42px] md:text-[48px] lg:text-[52px]">
          {title}
        </h2>
        {underline ? <DrawUnderline /> : null}
      </div>

      {description ? (
        <p className="max-w-2xl text-base leading-relaxed text-on-surface-variant sm:text-lg md:text-[18px]">
          {description}
        </p>
      ) : null}
    </div>
  );
}
