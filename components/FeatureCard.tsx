import type { ReactNode } from "react";

type FeatureCardProps = {
  index: string;
  title: string;
  body: ReactNode;
};

export default function FeatureCard({ index, title, body }: FeatureCardProps) {
  return (
    <div className="group rounded-2xl border border-border bg-surface p-7 md:p-8 transition-colors hover:border-accent">
      <div className="flex items-baseline justify-between">
        <span className="font-heading text-xs uppercase tracking-[0.25em] text-muted">
          {index}
        </span>
        <span className="h-px w-10 bg-border group-hover:w-16 group-hover:bg-accent transition-all" />
      </div>
      <h3 className="mt-6 font-heading text-2xl md:text-3xl text-ink leading-tight -tracking-[0.01em]">
        {title}
      </h3>
      <p className="mt-4 text-sm md:text-base text-muted leading-relaxed">
        {body}
      </p>
    </div>
  );
}
