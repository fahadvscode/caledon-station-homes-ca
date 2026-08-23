import Image from "next/image";
import { AnswerFirstSummary } from "@/components/AnswerFirstSummary";
import { LocationMap } from "@/components/LocationMap";
import { JsonLd } from "@/components/JsonLd";
import { SpecsDisclaimer } from "@/components/Disclaimer";
import {
  CtaBlock,
  PageFootForm,
  PageHeader,
  Prose,
  Section,
  SectionHeading,
  TextLink,
} from "@/components/LayoutBits";
import {
  COPY,
  GROWTH_PLAN_SOURCE,
  LINKS,
  LOCATION_ANSWER,
  LOCATION_IMAGE,
  PAGE_META,
} from "@/lib/content";
import { metadataByKey } from "@/lib/seo";
import { breadcrumbSchema, imageObjectSchema, webPageSchema } from "@/lib/schema";

export const dynamic = "force-static";
export const metadata = metadataByKey.location();

export default function LocationPage() {
  const meta = PAGE_META.location;
  return (
    <>
      <JsonLd
        data={webPageSchema({
          path: meta.path,
          name: meta.title,
          description: meta.description,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Location", path: meta.path },
        ])}
      />
      <JsonLd
        data={imageObjectSchema({
          url: LOCATION_IMAGE.src,
          caption: LOCATION_IMAGE.caption,
          description: LOCATION_IMAGE.alt,
          width: LOCATION_IMAGE.width,
          height: LOCATION_IMAGE.height,
        })}
      />
      <PageHeader h1={meta.h1} />
      <AnswerFirstSummary heading="Where Caledon Station Homes sits in the growth corridor">
        <p>{LOCATION_ANSWER}</p>
      </AnswerFirstSummary>
      <Section labelledBy="corridor-image">
        <figure>
          <Image
            src={LOCATION_IMAGE.src}
            alt={LOCATION_IMAGE.alt}
            width={LOCATION_IMAGE.width}
            height={LOCATION_IMAGE.height}
            sizes="(min-width: 1200px) 1200px, 100vw"
            unoptimized
            className="h-auto w-full rounded-sm border border-border"
          />
          <figcaption className="mt-3 text-sm text-text-muted">{LOCATION_IMAGE.caption}</figcaption>
        </figure>
      </Section>
      <Section alt labelledBy="site">
        <SectionHeading id="site">The Gore Road &amp; King Street, Macville</SectionHeading>
        <div className="mt-8">
          <Prose>
            {COPY.location.site.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </Prose>
        </div>
        <div className="mt-10">
          <LocationMap />
        </div>
      </Section>
      <Section labelledBy="corridors">
        <SectionHeading id="corridors">Highway 410, Mayfield Road, and named transit</SectionHeading>
        <div className="mt-8">
          <Prose>
            {COPY.location.corridors.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </Prose>
        </div>
      </Section>
      <Section alt labelledBy="plan">
        <SectionHeading id="plan">Caledon&apos;s official growth-plan context</SectionHeading>
        <div className="mt-8">
          <Prose>
            {COPY.location.growthPlan.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
            <p className="text-sm text-text-muted">{GROWTH_PLAN_SOURCE}</p>
          </Prose>
        </div>
      </Section>
      <Section labelledBy="jobs">
        <SectionHeading id="jobs">Employment nodes relevant to investors</SectionHeading>
        <div className="mt-8">
          <Prose>
            {COPY.location.employment.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
            <p>
              Those demand facts still have to survive a price and fee check on the{" "}
              <TextLink href={LINKS.investmentCase.href}>{LINKS.investmentCase.text}</TextLink>.
            </p>
          </Prose>
        </div>
        <SpecsDisclaimer className="mt-6" />
      </Section>
      <CtaBlock
        heading="Location is knowable. Price is not — yet."
        body="Register for investor updates when Caledon Station Homes publishes the numbers that turn this corridor into a model."
        href="/register"
        label="Register for investor updates"
        location="inline"
      />
      <PageFootForm formId="location-footer-register" />
    </>
  );
}
