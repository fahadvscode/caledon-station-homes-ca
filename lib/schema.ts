/**
 * JSON-LD builders. All blocks read from lib/content.ts.
 *
 * NO Offer/AggregateOffer until the development team publishes official pricing.
 * NO RealEstateAgent, operator Person, or brokerage Organization.
 */

import {
  ADDRESS_LINE,
  FAQS,
  GEO,
  HERO_IMAGE,
  HOME_ANSWER,
  LAST_UPDATED_ISO,
  PAGE_META,
  PROJECT_NAME,
  SITE_ORG_NAME,
  SITE_URL,
  STATUS,
} from "./content";
import { canonical } from "./seo";

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: PROJECT_NAME,
    url: `${SITE_URL}/`,
    inLanguage: "en-CA",
    publisher: { "@id": `${SITE_URL}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/?s={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function siteOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_ORG_NAME,
    url: `${SITE_URL}/`,
    description:
      "An independent investor-research resource for Caledon Station Homes, not affiliated with or endorsed by Argo Development Corp or its development partners.",
  };
}

export function residenceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Residence",
    name: PROJECT_NAME,
    description: HOME_ANSWER,
    url: SITE_URL,
    address: {
      "@type": "PostalAddress",
      streetAddress: "The Gore Road & King Street",
      addressLocality: "Caledon",
      addressRegion: "ON",
      postalCode: "L7E 0T7",
      addressCountry: "CA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: GEO.latitude,
      longitude: GEO.longitude,
    },
    additionalProperty: [
      { "@type": "PropertyValue", name: "Builder", value: "Argo Development Corp and partners" },
      { "@type": "PropertyValue", name: "Status", value: STATUS },
      {
        "@type": "PropertyValue",
        name: "Home types",
        value: "Condominium, freehold townhome, single-family",
      },
      { "@type": "PropertyValue", name: "Planned units", value: "4042" },
      { "@type": "PropertyValue", name: "Address", value: ADDRESS_LINE },
      {
        "@type": "PropertyValue",
        name: "Pricing status",
        value: `Not released as of ${LAST_UPDATED_ISO}`,
      },
    ],
  };
}

/*
 * Activate AggregateOffer only after official pricing is confirmed:
 *
 * {
 *   "@context": "https://schema.org",
 *   "@type": "AggregateOffer",
 *   "priceCurrency": "CAD",
 *   "lowPrice": "[CONFIRM BEFORE ACTIVATING]",
 *   "highPrice": "[CONFIRM BEFORE ACTIVATING]",
 *   "availability": "https://schema.org/PreOrder",
 *   "validFrom": "[CONFIRM BEFORE ACTIVATING]"
 * }
 */

export function faqPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE_URL}/faq#faqpage`,
    dateModified: LAST_UPDATED_ISO,
    mainEntity: FAQS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: canonical(item.path),
    })),
  };
}

export function articleSchema() {
  const meta = PAGE_META.guide;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${canonical(meta.path)}#article`,
    headline: meta.h1,
    description: meta.description,
    datePublished: LAST_UPDATED_ISO,
    dateModified: LAST_UPDATED_ISO,
    inLanguage: "en-CA",
    mainEntityOfPage: canonical(meta.path),
    author: { "@id": `${SITE_URL}/#organization` },
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

export function webPageSchema(opts: {
  path: string;
  name: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${canonical(opts.path)}#webpage`,
    url: canonical(opts.path),
    name: opts.name,
    description: opts.description,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    inLanguage: "en-CA",
    dateModified: LAST_UPDATED_ISO,
  };
}

export function imageObjectSchema(opts: {
  url: string;
  caption: string;
  description: string;
  width?: number;
  height?: number;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    contentUrl: opts.url.startsWith("http") ? opts.url : `${SITE_URL}${opts.url}`,
    caption: opts.caption,
    description: opts.description,
    ...(opts.width ? { width: opts.width } : {}),
    ...(opts.height ? { height: opts.height } : {}),
  };
}

export function heroImageSchema() {
  return imageObjectSchema({
    url: HERO_IMAGE.src,
    caption: HERO_IMAGE.caption,
    description: HERO_IMAGE.alt,
    width: HERO_IMAGE.width,
    height: HERO_IMAGE.height,
  });
}
