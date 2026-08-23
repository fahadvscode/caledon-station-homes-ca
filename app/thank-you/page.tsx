import { ThankYouEvents } from "@/components/ThankYouEvents";
import { JsonLd } from "@/components/JsonLd";
import { PageHeader, Prose, Section, TextLink } from "@/components/LayoutBits";
import { LINKS, PAGE_META } from "@/lib/content";
import { metadataByKey } from "@/lib/seo";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";

export const dynamic = "force-static";
export const metadata = metadataByKey.thankYou();

export default function ThankYouPage() {
  const meta = PAGE_META.thankYou;
  return (
    <>
      <ThankYouEvents />
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
          { name: "Thank you", path: meta.path },
        ])}
      />
      <PageHeader h1={meta.h1} />
      <Section labelledBy="thanks">
        <div id="thanks">
          <Prose>
            <p>
              The investment info team has your Caledon Station Homes investor registration. You
              will be notified when pricing, deposit structure, and assignment policy are
              confirmed. Registration is free and creates no purchase obligation.
            </p>
            <p>
              While you wait,{" "}
              <TextLink href={LINKS.investmentCase.href}>{LINKS.investmentCase.text}</TextLink> and{" "}
              <TextLink href={LINKS.assignment.href}>{LINKS.assignment.text}</TextLink> remain the
              two pages that explain what those future numbers will have to clear.
            </p>
          </Prose>
        </div>
      </Section>
    </>
  );
}
