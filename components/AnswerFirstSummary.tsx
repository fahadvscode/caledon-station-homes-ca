import type { ReactNode } from "react";

export function AnswerFirstSummary({
  heading,
  children,
}: {
  heading?: string;
  children: ReactNode;
}) {
  return (
    <section className="bg-surface-alt section-space" aria-labelledby="answer-first">
      <div className="mx-auto max-w-[1200px] px-5">
        <h2 id="answer-first" className="font-display text-[clamp(1.5rem,3vw,2.25rem)] font-semibold text-brand-deep">
          {heading ?? "Answer first"}
        </h2>
        <div className="mt-6 max-w-[72ch] text-lg text-text-primary">{children}</div>
      </div>
    </section>
  );
}
