import Image from "next/image";
import {
  HERO_EYEBROW,
  HERO_IMAGE,
  HERO_SUBHEAD,
  PAGE_META,
  STATUS_BADGE,
} from "@/lib/content";
import { CtaLink } from "./CtaLink";
import { LeadForm } from "./LeadForm";
import { MotionRise } from "./MotionRise";

export function Hero() {
  const meta = PAGE_META.home;
  return (
    <section className="relative overflow-hidden bg-brand-deep">
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src={HERO_IMAGE.src}
          alt={HERO_IMAGE.alt}
          width={HERO_IMAGE.width}
          height={HERO_IMAGE.height}
          priority
          sizes="100vw"
          unoptimized
          className="h-full w-full object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-brand-deep/72" />
      </div>
      <div className="relative z-10 mx-auto grid min-h-[36rem] w-full max-w-[1200px] items-center gap-10 px-5 pb-16 pt-28 md:pb-20 lg:grid-cols-2 lg:pt-32">
        <div>
          <p className="eyebrow !text-brand-accent">{HERO_EYEBROW}</p>
          <p className="badge-status mt-5">{STATUS_BADGE}</p>
          <h1 className="mt-6 max-w-[18ch] font-display font-semibold text-surface text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.12]">
            {meta.h1}
          </h1>
          <p className="mt-5 max-w-[42ch] text-lg text-surface/90">{HERO_SUBHEAD}</p>
          <div className="mt-8">
            <CtaLink href="/investment-case" location="hero" variant="ghost">
              Read the Investment Case →
            </CtaLink>
          </div>
          <p className="mt-6 max-w-[48ch] text-sm text-surface/75">{HERO_IMAGE.caption}</p>
        </div>
        <div className="min-h-[28rem]">
          <MotionRise>
            <LeadForm id="hero-register" compact />
          </MotionRise>
        </div>
      </div>
    </section>
  );
}
