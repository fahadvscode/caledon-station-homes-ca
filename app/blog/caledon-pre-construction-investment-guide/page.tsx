import Image from "next/image";
import { AnswerFirstSummary } from "@/components/AnswerFirstSummary";
import { JsonLd } from "@/components/JsonLd";
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
  BLOG_IMAGE,
  COPY,
  GUIDE_ANSWER,
  LINKS,
  PAGE_META,
} from "@/lib/content";
import { metadataByKey } from "@/lib/seo";
import { articleSchema, breadcrumbSchema, imageObjectSchema, webPageSchema } from "@/lib/schema";

export const dynamic = "force-static";
export const metadata = metadataByKey.guide();

export default function GuidePage() {
  const meta = PAGE_META.guide;
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
          { name: "Investment guide", path: meta.path },
        ])}
      />
      <JsonLd data={articleSchema()} />
      <JsonLd
        data={imageObjectSchema({
          url: BLOG_IMAGE.src,
          caption: BLOG_IMAGE.caption,
          description: BLOG_IMAGE.alt,
          width: BLOG_IMAGE.width,
          height: BLOG_IMAGE.height,
        })}
      />
      <PageHeader h1={meta.h1} />
      <AnswerFirstSummary heading="Pre-construction investment Caledon, 2026">
        <p>{GUIDE_ANSWER}</p>
      </AnswerFirstSummary>
      <Section labelledBy="guide-image">
        <figure>
          <Image
            src={BLOG_IMAGE.src}
            alt={BLOG_IMAGE.alt}
            width={BLOG_IMAGE.width}
            height={BLOG_IMAGE.height}
            sizes="(min-width: 1200px) 1200px, 100vw"
            unoptimized
            className="h-auto w-full rounded-sm border border-border"
          />
          <figcaption className="mt-3 text-sm text-text-muted">{BLOG_IMAGE.caption}</figcaption>
        </figure>
      </Section>
      {COPY.blog.sections.map((section, index) => (
        <Section
          key={section.h2}
          alt={index % 2 === 0}
          labelledBy={`blog-${index}`}
        >
          <SectionHeading id={`blog-${index}`}>{section.h2}</SectionHeading>
          <div className="mt-8">
            <Prose>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </Prose>
          </div>
        </Section>
      ))}
      <Section labelledBy="next">
        <SectionHeading id="next">Where to go next on this site</SectionHeading>
        <div className="mt-8">
          <Prose>
            <p>
              Project-level ROI framing:{" "}
              <TextLink href={LINKS.investmentCase.href}>{LINKS.investmentCase.text}</TextLink>.
              Assignment:{" "}
              <TextLink href={LINKS.assignment.href}>{LINKS.assignment.text}</TextLink>. Neighbour
              files:{" "}
              <TextLink href={LINKS.comparisons.href}>{LINKS.comparisons.text}</TextLink>. Growth
              plan sources:{" "}
              <TextLink href={LINKS.location.href}>{LINKS.location.text}</TextLink>.
            </p>
          </Prose>
        </div>
      </Section>
      <CtaBlock
        heading="Use the guide when the price list lands"
        body="Register for investor updates so the Caledon Station Homes inputs reach you in the same week they become public."
        href="/register"
        label="Register for investor updates"
        location="inline"
      />
      <PageFootForm formId="blog-footer-register" />
    </>
  );
}
