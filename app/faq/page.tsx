import { AnswerFirstSummary } from "@/components/AnswerFirstSummary";
import { FaqAccordion } from "@/components/FaqAccordion";
import { JsonLd } from "@/components/JsonLd";
import { LastUpdated } from "@/components/Disclaimer";
import {
  CtaBlock,
  PageFootForm,
  PageHeader,
  Section,
  SectionHeading,
  TextLink,
} from "@/components/LayoutBits";
import { FAQS, LINKS, PAGE_META } from "@/lib/content";
import { metadataByKey } from "@/lib/seo";
import { breadcrumbSchema, faqPageSchema, webPageSchema } from "@/lib/schema";

export const dynamic = "force-static";
export const metadata = metadataByKey.faq();

export default function FaqPage() {
  const meta = PAGE_META.faq;
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
          { name: "FAQ", path: meta.path },
        ])}
      />
      <JsonLd data={faqPageSchema()} />
      <PageHeader h1={meta.h1} />
      <AnswerFirstSummary heading="Investor questions about Caledon Station Homes">
        <p>
          Each answer below is a self-contained 40–80 word paragraph written for investors: ROI,
          assignment, deposit structure, and risk. Deeper yield math is on the{" "}
          <TextLink href={LINKS.investmentCase.href}>{LINKS.investmentCase.text}</TextLink> page;
          assignment mechanics are on{" "}
          <TextLink href={LINKS.assignment.href}>{LINKS.assignment.text}</TextLink>.
        </p>
      </AnswerFirstSummary>
      <Section labelledBy="faq-list">
        <SectionHeading id="faq-list">Fifteen-plus investor questions</SectionHeading>
        <LastUpdated className="mt-4" />
        <div className="mt-8">
          <FaqAccordion items={FAQS} />
        </div>
      </Section>
      <CtaBlock
        heading="Official pricing is not on this FAQ — yet"
        body="Register to be notified when Caledon Station Homes releases confirmed pricing, deposit structure, and assignment policy."
        href="/register"
        label="Register for investor updates"
        location="inline"
      />
      <PageFootForm formId="faq-footer-register" />
    </>
  );
}
