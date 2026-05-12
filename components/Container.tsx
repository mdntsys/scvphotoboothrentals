import type { HTMLAttributes } from "react";

export default function Container({
  className = "",
  children,
  ...rest
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`mx-auto w-full max-w-7xl px-6 md:px-10 ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}
