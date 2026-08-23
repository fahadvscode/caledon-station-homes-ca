import Image from "next/image";
import { AnswerFirstSummary } from "@/components/AnswerFirstSummary";
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
  ASSIGNMENT_ANSWER,
  ASSIGNMENT_IMAGE,
  COPY,
  LINKS,
  PAGE_META,
} from "@/lib/content";
import { metadataByKey } from "@/lib/seo";
import { breadcrumbSchema, imageObjectSchema, webPageSchema } from "@/lib/schema";

export const dynamic = "force-static";
export const metadata = metadataByKey.assignment();

export default function AssignmentPage() {
  const meta = PAGE_META.assignment;
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
          { name: "Assignment & Resale", path: meta.path },
        ])}
      />
      <JsonLd
        data={imageObjectSchema({
          url: ASSIGNMENT_IMAGE.src,
          caption: ASSIGNMENT_IMAGE.caption,
          description: ASSIGNMENT_IMAGE.alt,
          width: ASSIGNMENT_IMAGE.width,
          height: ASSIGNMENT_IMAGE.height,
        })}
      />
      <PageHeader h1={meta.h1} />
      <AnswerFirstSummary heading="Caledon Station Homes assignment policy">
        <p>{ASSIGNMENT_ANSWER}</p>
      </AnswerFirstSummary>
      <Section labelledBy="timeline-image">
        <figure>
          <Image
            src={ASSIGNMENT_IMAGE.src}
            alt={ASSIGNMENT_IMAGE.alt}
            width={ASSIGNMENT_IMAGE.width}
            height={ASSIGNMENT_IMAGE.height}
            sizes="(min-width: 1200px) 1200px, 100vw"
            unoptimized
            className="h-auto w-full rounded-sm border border-border"
          />
          <figcaption className="mt-3 text-sm text-text-muted">
            {ASSIGNMENT_IMAGE.caption}
          </figcaption>
        </figure>
      </Section>
      <Section alt labelledBy="how">
        <SectionHeading id="how">How assignment generally works in Ontario pre-construction</SectionHeading>
        <div className="mt-8">
          <Prose>
            {COPY.assignment.howItWorks.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </Prose>
        </div>
      </Section>
      <Section labelledBy="look-for">
        <SectionHeading id="look-for">What to look for in an APS assignment clause</SectionHeading>
        <div className="mt-8">
          <Prose>
            {COPY.assignment.whatToLookFor.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </Prose>
        </div>
      </Section>
      <Section alt labelledBy="hst">
        <SectionHeading id="hst">HST implications of assignment sales (high level)</SectionHeading>
        <div className="mt-8">
          <Prose>
            {COPY.assignment.hst.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
            <p>
              Closing-cost headings that sit beside HST are listed in the{" "}
              <TextLink href={LINKS.faq.href}>{LINKS.faq.text}</TextLink>.
            </p>
          </Prose>
        </div>
      </Section>
      <Section labelledBy="status">
        <SectionHeading id="status">Current unknown status of this project&apos;s terms</SectionHeading>
        <div className="mt-8">
          <Prose>
            {COPY.assignment.unknownStatus.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
            <p>
              Return to the{" "}
              <TextLink href={LINKS.investmentCase.href}>{LINKS.investmentCase.text}</TextLink> for
              how assignment optionality (if it exists) would enter an ROI model.
            </p>
          </Prose>
        </div>
        <SpecsDisclaimer className="mt-6" />
      </Section>
      <CtaBlock
        heading="Get the assignment clause when it is published"
        body="Caledon Station Homes has not released project-specific assignment terms. Register to be notified when they are."
        href="/register"
        label="Register for investor updates"
        location="inline"
      />
      <PageFootForm formId="assignment-footer-register" />
    </>
  );
}
