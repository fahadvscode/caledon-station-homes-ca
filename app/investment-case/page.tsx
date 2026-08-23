import Image from "next/image";
import { AnswerFirstSummary } from "@/components/AnswerFirstSummary";
import { RoiTable } from "@/components/RoiTable";
import { DepositScheduleTable } from "@/components/DepositScheduleTable";
import { UnknownsTable } from "@/components/UnknownsTable";
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
  INVESTMENT_ANSWER,
  LINKS,
  PAGE_META,
  ROI_IMAGE,
} from "@/lib/content";
import { metadataByKey } from "@/lib/seo";
import { breadcrumbSchema, imageObjectSchema, webPageSchema } from "@/lib/schema";

export const dynamic = "force-static";
export const metadata = metadataByKey.investmentCase();

export default function InvestmentCasePage() {
  const meta = PAGE_META.investmentCase;
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
          { name: "Investment Case", path: meta.path },
        ])}
      />
      <JsonLd
        data={imageObjectSchema({
          url: ROI_IMAGE.src,
          caption: ROI_IMAGE.caption,
          description: ROI_IMAGE.alt,
          width: ROI_IMAGE.width,
          height: ROI_IMAGE.height,
        })}
      />
      <PageHeader h1={meta.h1} />
      <AnswerFirstSummary heading="Caledon Station Homes ROI, stated plainly">
        <p>{INVESTMENT_ANSWER}</p>
      </AnswerFirstSummary>
      <Section labelledBy="framework-image">
        <figure>
          <Image
            src={ROI_IMAGE.src}
            alt={ROI_IMAGE.alt}
            width={ROI_IMAGE.width}
            height={ROI_IMAGE.height}
            sizes="(min-width: 1200px) 1200px, 100vw"
            unoptimized
            className="h-auto w-full rounded-sm border border-border"
          />
          <figcaption className="mt-3 text-sm text-text-muted">{ROI_IMAGE.caption}</figcaption>
        </figure>
      </Section>
      <Section alt labelledBy="drivers">
        <SectionHeading id="drivers">What drives returns in a project like this</SectionHeading>
        <div className="mt-8">
          <Prose>
            {COPY.investment.drivers.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </Prose>
        </div>
      </Section>
      <Section labelledBy="unknowns">
        <SectionHeading id="unknowns">What we don&apos;t know yet, and why it matters</SectionHeading>
        <div className="mt-8">
          <Prose>
            {COPY.investment.unknown.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </Prose>
        </div>
        <div className="mt-8">
          <UnknownsTable />
        </div>
        <div className="mt-10">
          <h3 className="font-display text-xl font-semibold text-brand-deep">
            Deposit schedule (to be announced)
          </h3>
          <div className="mt-4">
            <DepositScheduleTable />
          </div>
        </div>
        <SpecsDisclaimer className="mt-6" />
      </Section>
      <Section alt labelledBy="yield">
        <SectionHeading id="yield">A generic rental-yield framework</SectionHeading>
        <div className="mt-8">
          <Prose>
            {COPY.investment.yieldFramework.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </Prose>
        </div>
        <div className="mt-8">
          <RoiTable />
        </div>
        <p className="mt-6 max-w-[62ch] text-text-muted">
          Maintenance and POTL fees are unknown and drive net yield directly. This page will not
          estimate a number for Caledon Station Homes.
        </p>
      </Section>
      <Section labelledBy="rental">
        <SectionHeading id="rental">Caledon rental market context</SectionHeading>
        <div className="mt-8">
          <Prose>
            {COPY.investment.rentalContext.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
            <p>
              Growth-corridor facts that do not depend on a price list are on the{" "}
              <TextLink href={LINKS.location.href}>{LINKS.location.text}</TextLink> page.
            </p>
          </Prose>
        </div>
      </Section>
      <Section alt labelledBy="risks">
        <SectionHeading id="risks">Risk factors specific to pre-construction investing</SectionHeading>
        <div className="mt-8">
          <Prose>
            {COPY.investment.risks.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
            <p>
              Assignment is a separate risk and option set —{" "}
              <TextLink href={LINKS.assignment.href}>{LINKS.assignment.text}</TextLink>.
            </p>
          </Prose>
        </div>
      </Section>
      <CtaBlock
        heading="Be notified when the missing inputs are published"
        body="Pricing, deposit structure, and maintenance fees are the three numbers that turn this framework into a model."
        href="/register"
        label="Register for investor updates"
        location="inline"
      />
      <PageFootForm formId="investment-footer-register" />
    </>
  );
}
