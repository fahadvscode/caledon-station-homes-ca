import Link from "next/link";
import { PROJECT_NAME, WORDMARK_TAGLINE } from "@/lib/content";

export function Wordmark({
  inverted = false,
  compact = false,
}: {
  inverted?: boolean;
  compact?: boolean;
}) {
  return (
    <span className="inline-flex flex-col">
      <span
        className={`font-display font-semibold leading-none ${
          compact ? "text-[15px] md:text-lg" : "text-lg md:text-xl"
        } ${inverted ? "text-surface" : "text-brand-deep"}`}
      >
        {PROJECT_NAME}
        <span className={inverted ? "text-surface/80" : "text-text-muted"}>
          {" "}
          — {WORDMARK_TAGLINE}
        </span>
      </span>
      <span
        className="mt-1.5 block h-px w-20 bg-brand-accent"
        aria-hidden="true"
      />
    </span>
  );
}

export function WordmarkLink({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link href="/" aria-label={`${PROJECT_NAME} — ${WORDMARK_TAGLINE} home`}>
      <Wordmark inverted={inverted} compact />
    </Link>
  );
}
