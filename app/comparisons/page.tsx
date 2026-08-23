import Image from "next/image";
import { AnswerFirstSummary } from "@/components/AnswerFirstSummary";
import { ComparisonTable } from "@/components/ComparisonTable";
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
  COMPARISON_ANSWER,
  COMPARISON_IMAGE,
  COPY,
  LINKS,
  PAGE_META,
} from "@/lib/content";
import { metadataByKey } from "@/lib/seo";
import { breadcrumbSchema, imageObjectSchema, webPageSchema } from "@/lib/schema";

export const dynamic = "force-static";
export const metadata = metadataByKey.comparisons();

export default function ComparisonsPage() {
  const meta = PAGE_META.comparisons;
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
          { name: "Comparisons", path: meta.path },
        ])}
      />
      <JsonLd
        data={imageObjectSchema({
          url: COMPARISON_IMAGE.src,
          caption: COMPARISON_IMAGE.caption,
          description: COMPARISON_IMAGE.alt,
          width: COMPARISON_IMAGE.width,
          height: COMPARISON_IMAGE.height,
        })}
      />
      <PageHeader h1={meta.h1} />
      <AnswerFirstSummary heading="Caledon Station Homes vs Humber Station Caledon — the frame">
        <p>{COMPARISON_ANSWER}</p>
      </AnswerFirstSummary>
      <Section labelledBy="compare-image">
        <figure>
          <Image
            src={COMPARISON_IMAGE.src}
            alt={COMPARISON_IMAGE.alt}
            width={COMPARISON_IMAGE.width}
            height={COMPARISON_IMAGE.height}
            sizes="(min-width: 1200px) 1200px, 100vw"
            unoptimized
            className="h-auto w-full rounded-sm border border-border"
          />
          <figcaption className="mt-3 text-sm text-text-muted">{COMPARISON_IMAGE.caption}</figcaption>
        </figure>
      </Section>
      <Section alt labelledBy="intro">
        <SectionHeading id="intro">Peel Region pre-construction investment, compared honestly</SectionHeading>
        <div className="mt-8">
          <Prose>
            {COPY.comparisons.intro.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </Prose>
        </div>
      </Section>
      <Section labelledBy="table">
        <SectionHeading id="table">Confirmed versus unconfirmed, side by side</SectionHeading>
        <div className="mt-8">
          <ComparisonTable />
        </div>
        <SpecsDisclaimer className="mt-6" />
      </Section>
      <Section alt labelledBy="humber">
        <SectionHeading id="humber">Caledon Station Homes vs Humber Station Caledon for investors</SectionHeading>
        <div className="mt-8">
          <Prose>
            {COPY.comparisons.humber.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </Prose>
        </div>
      </Section>
      <Section labelledBy="southcal">
        <SectionHeading id="southcal">SouthCal at Highway 410 and Hurontario</SectionHeading>
        <div className="mt-8">
          <Prose>
            {COPY.comparisons.southcal.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </Prose>
        </div>
      </Section>
      <Section alt labelledBy="upper">
        <SectionHeading id="upper">Upper Caledon East at Airport Road</SectionHeading>
        <div className="mt-8">
          <Prose>
            {COPY.comparisons.upper.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </Prose>
        </div>
      </Section>
      <Section labelledBy="method">
        <SectionHeading id="method">How to use the table without declaring a winner</SectionHeading>
        <div className="mt-8">
          <Prose>
            {COPY.comparisons.method.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
            <p>
              Fill the yield formulas on the{" "}
              <TextLink href={LINKS.investmentCase.href}>{LINKS.investmentCase.text}</TextLink>{" "}
              page once Caledon Station Homes publishes a price list.
            </p>
          </Prose>
        </div>
      </Section>
      <CtaBlock
        heading="Watch this file against the rest of Peel"
        body="Register for investor updates when Caledon Station Homes confirms the fields that neighbouring projects may already have in market."
        href="/register"
        label="Register for investor updates"
        location="inline"
      />
      <PageFootForm formId="comparisons-footer-register" />
    </>
  );
}
