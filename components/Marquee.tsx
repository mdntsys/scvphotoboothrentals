import type { ReactNode } from "react";

type MarqueeProps = {
  children: ReactNode;
  duration?: number;
  className?: string;
  pauseOnHover?: boolean;
};

export default function Marquee({
  children,
  duration = 40,
  className = "",
  pauseOnHover = true,
}: MarqueeProps) {
  return (
    <div
      className={`overflow-hidden ${pauseOnHover ? "marquee-pause" : ""} ${className}`}
    >
      <div
        className="marquee-track flex w-max"
        style={{ ["--marquee-duration" as string]: `${duration}s` }}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
