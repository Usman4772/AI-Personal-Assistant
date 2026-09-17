import { cn } from "@/lib/utils";

export function Container({ children, className = "", as: Tag = "div" }) {
  return (
    <Tag className={cn("mx-auto w-full max-w-[1180px] px-5 md:px-8", className)}>
      {children}
    </Tag>
  );
}
