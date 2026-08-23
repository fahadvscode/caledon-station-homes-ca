import { AnswerFirstSummary } from "@/components/AnswerFirstSummary";
import { LeadForm } from "@/components/LeadForm";
import { JsonLd } from "@/components/JsonLd";
import {
  PageHeader,
  Prose,
  Section,
  SectionHeading,
  TextLink,
} from "@/components/LayoutBits";
import { COPY, LINKS, PAGE_META, REGISTER_ANSWER } from "@/lib/content";
import { metadataByKey } from "@/lib/seo";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";

export const dynamic = "force-static";
export const metadata = metadataByKey.register();

export default function RegisterPage() {
  const meta = PAGE_META.register;
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
          { name: "Register", path: meta.path },
        ])}
      />
      <PageHeader h1={meta.h1} lede="Caledon Station Homes for investors — notification when the numbers exist, not a promised allocation." />
      <Section labelledBy="register-form">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading id="register-form">Five fields. Early notice. No obligation.</SectionHeading>
            <div className="mt-8">
              <Prose>
                {COPY.register.value.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                ))}
                <p>
                  Background reading:{" "}
                  <TextLink href={LINKS.investmentCase.href}>{LINKS.investmentCase.text}</TextLink>{" "}
                  and{" "}
                  <TextLink href={LINKS.home.href}>{LINKS.home.text}</TextLink>.
                </p>
              </Prose>
            </div>
          </div>
          <LeadForm id="register-page" />
        </div>
      </Section>
      <AnswerFirstSummary heading="What registration is, and is not">
        <p>{REGISTER_ANSWER}</p>
      </AnswerFirstSummary>
    </>
  );
}
