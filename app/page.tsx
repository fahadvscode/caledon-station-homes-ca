import { Hero } from "@/components/Hero";
import { AnswerFirstSummary } from "@/components/AnswerFirstSummary";
import { QuickFacts } from "@/components/QuickFacts";
import { FaqAccordion } from "@/components/FaqAccordion";
import { JsonLd } from "@/components/JsonLd";
import { SpecsDisclaimer } from "@/components/Disclaimer";
import {
  CtaBlock,
  PageFootForm,
  Prose,
  Section,
  SectionHeading,
  TextLink,
} from "@/components/LayoutBits";
import {
  COPY,
  FAQS,
  FAQ_PREVIEW_INDICES,
  HOME_ANSWER,
  LINKS,
  PAGE_META,
} from "@/lib/content";
import { metadataByKey } from "@/lib/seo";
import {
  breadcrumbSchema,
  heroImageSchema,
  residenceSchema,
  webPageSchema,
} from "@/lib/schema";

export const dynamic = "force-static";
export const metadata = metadataByKey.home();

export default function HomePage() {
  const previewFaqs = FAQ_PREVIEW_INDICES.map((index) => FAQS[index]);
  const meta = PAGE_META.home;

  return (
    <>
      <JsonLd data={residenceSchema()} />
      <JsonLd data={heroImageSchema()} />
      <JsonLd
        data={webPageSchema({
          path: "/",
          name: meta.title,
          description: meta.description,
        })}
      />
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }])} />
      <Hero />
      <AnswerFirstSummary heading="Caledon Station Homes investment, in one paragraph">
        <p>{HOME_ANSWER}</p>
      </AnswerFirstSummary>
      <Section labelledBy="quick-facts">
        <SectionHeading id="quick-facts">Caledon Station Homes at a glance</SectionHeading>
        <div className="mt-8">
          <QuickFacts />
        </div>
        <SpecsDisclaimer className="mt-4" />
      </Section>
      <Section alt labelledBy="investor-lens">
        <SectionHeading id="investor-lens">Why an investor lens matters here</SectionHeading>
        <div className="mt-8">
          <Prose>
            {COPY.home.whyInvestorLens.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
            <p>
              Continue with{" "}
              <TextLink href={LINKS.investmentCase.href}>{LINKS.investmentCase.text}</TextLink>,{" "}
              <TextLink href={LINKS.assignment.href}>{LINKS.assignment.text}</TextLink>,{" "}
              <TextLink href={LINKS.comparisons.href}>{LINKS.comparisons.text}</TextLink>, and the{" "}
              <TextLink href={LINKS.guide.href}>{LINKS.guide.text}</TextLink>. Location context
              lives in the{" "}
              <TextLink href={LINKS.location.href}>{LINKS.location.text}</TextLink>.
            </p>
          </Prose>
        </div>
      </Section>
      <Section labelledBy="home-faq">
        <SectionHeading id="home-faq">Investor questions, answered first</SectionHeading>
        <p className="mt-4 max-w-[62ch] text-text-muted">
          Each answer is written to stand alone. The full set is on the{" "}
          <TextLink href={LINKS.faq.href}>{LINKS.faq.text}</TextLink>.
        </p>
        <div className="mt-8">
          <FaqAccordion items={previewFaqs} />
        </div>
      </Section>
      <Section alt labelledBy="investor-guide">
        <SectionHeading id="investor-guide">Pre-construction investment guide</SectionHeading>
        <div className="mt-8">
          <Prose>
            <p>
              The full 2026 guide walks through how to underwrite pre-construction in Caledon
              without inventing a yield: Peel Region screening, closing-cost categories, assignment
              risk, and how to drop Caledon Station Homes numbers into the model once the builder
              publishes them.
            </p>
            <p>
              Read the{" "}
              <TextLink href={LINKS.guide.href}>{LINKS.guide.text}</TextLink>.
            </p>
          </Prose>
        </div>
      </Section>
      <CtaBlock
        heading="Get the numbers when they exist"
        body="Register for investor updates when Caledon Station Homes confirms pricing, deposit structure, and assignment policy."
        href="/register"
        label="Register for investor updates"
        location="inline"
      />
      <PageFootForm formId="home-footer-register" />
    </>
  );
}
