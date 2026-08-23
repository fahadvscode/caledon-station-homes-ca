import { CONTACT_EMAIL, LAST_UPDATED, SITE_ORG_NAME, SITE_URL } from "./content";

export const PRIVACY_SECTIONS: { h2: string; paragraphs: string[] }[] = [
  {
    h2: "Who operates this website",
    paragraphs: [
      `${SITE_ORG_NAME} operates ${SITE_URL} as an independent investor-research and registration resource for Caledon Station Homes in Caledon, Ontario. This site is not the official website of Argo Development Corp or its development partners and is not affiliated with or endorsed by them. It is also a separate resource from any other website referencing this project.`,
    ],
  },
  {
    h2: "What is collected and why",
    paragraphs: [
      "When you submit the investor registration form, this site collects first name, last name, email address, telephone number, whether you are a licensed real estate agent or broker, and a record of CASL consent. Those fields are used to notify registrants when pricing, deposit structure, and assignment policy are confirmed, and to understand which campaigns led to a registration.",
      "The site may also store first-touch marketing parameters (utm_source, utm_medium, utm_campaign, utm_term, utm_content), the page path on which consent was given, and a timestamp of consent. Consent, timestamp and page path together are the proof-of-consent record under Canada's Anti-Spam Legislation. Registration rows are stored in the same Caledon Station Homes leads table used by the companion project site.",
    ],
  },
  {
    h2: "PIPEDA",
    paragraphs: [
      "This site is operated with the intent of complying with the Personal Information Protection and Electronic Documents Act (PIPEDA). Personal information is collected for identified purposes, limited to the registration fields described above, stored with a contractual processor, and retained only as long as needed for those purposes or as required by law. You may request access to, correction of, or deletion of your personal information using the contact route below.",
    ],
  },
  {
    h2: "Where data is stored",
    paragraphs: [
      "Registration records are stored with Supabase, a third-party processor that hosts a Postgres database. The operator does not sell personal information. Only the public anonymous key is used by this application to insert registration rows under a row-level security policy; a service-role credential is not exposed in browser code.",
    ],
  },
  {
    h2: "Retention and deletion",
    paragraphs: [
      `Registration records are retained for as long as they are needed to administer the Caledon Station Homes investor registration list, and for a reasonable period afterward to demonstrate CASL consent if a question arises, unless a shorter period is required by law. To request deletion of your personal information, email ${CONTACT_EMAIL} from the address you registered with, with the subject line “Privacy request”. The investment info team will process verified requests.`,
    ],
  },
  {
    h2: "Cookies and analytics",
    paragraphs: [
      "This site may use Google Analytics 4, Google Tag Manager, and the Meta (Facebook) Pixel to measure page views, form interactions, and completed registrations. These tools set cookies or similar identifiers and process device and usage data according to each vendor's own policy. Conversion events include a form_submit event in GA4 and a Lead event in the Meta Pixel after a successful registration.",
      "Analytics identifiers are configured as environment variables and remain inactive until those values are supplied. Scripts load after the page becomes interactive so they do not delay the hero image or the answer-first summary.",
    ],
  },
  {
    h2: "CASL and unsubscribe",
    paragraphs: [
      "Electronic messages about Caledon Station Homes and similar pre-construction investment opportunities are sent only where the visitor has checked the consent box on the registration form. That checkbox is never pre-checked. Consent, the time of consent, and the page on which it was given are stored as a proof record. Every electronic message will include a working unsubscribe mechanism. You may also withdraw consent by emailing the address below.",
    ],
  },
  {
    h2: "Contact for privacy requests",
    paragraphs: [
      `Privacy, access, correction and deletion requests: ${CONTACT_EMAIL}. This is a generic Privacy Requests alias for the investment info team, not a personal inbox.`,
    ],
  },
];

export const TERMS_SECTIONS: { h2: string; paragraphs: string[] }[] = [
  {
    h2: "Independent investor-research resource",
    paragraphs: [
      "This website is an independent, investor-focused information and registration resource for Caledon Station Homes, a pre-construction community in Caledon, Ontario being developed by Argo Development Corp and partners. It is not the official website of Argo Development Corp or its development partners and is not affiliated with, endorsed by, or operated by them. It is also a separate resource from any other website referencing this project. Nothing on this site should be read as a representation by the development team.",
    ],
  },
  {
    h2: "Information is provided as-is",
    paragraphs: [
      `Information on this site is provided as-is for general information only. It is subject to change without notice and is not an offer to sell, a solicitation to buy, or a representation that any home is available. Prices, sizes, specifications, incentives, deposits and availability are subject to change without notice. E.&O.E. Information current as of ${LAST_UPDATED}.`,
      "Certain details — including occupancy timing, incentive rumours on third-party listing sites, maintenance fees, and assignment terms — are unverified or not yet announced by the development team and are labelled as to be announced. They must be verified at release.",
    ],
  },
  {
    h2: "No legal, tax, financial or investment advice",
    paragraphs: [
      "Nothing on this site is legal, tax, financial or investment advice. Descriptions of deposits, HST, land transfer tax, development levies, assignment, rental yield and occupancy are general market context. Investors should review any agreement of purchase and sale with their own lawyer and obtain their own tax and lending advice before making a decision. This site does not guarantee appreciation, rental income, allocation, or returns.",
    ],
  },
  {
    h2: "Registration",
    paragraphs: [
      "Submitting the registration form requests to be added to a list to receive information when it is released. Registration is free and creates no obligation to purchase. Registration does not create investor priority with the builder unless the development team independently confirms such a program. The operator may refuse or remove a registration.",
    ],
  },
  {
    h2: "Intellectual property",
    paragraphs: [
      "The independent wordmark, original copy, and original compilation of this site are provided for the operation of this investor-research resource. Third-party names, including Argo Development Corp and its development partners, are used factually to identify the developers of the community and remain the property of their owners.",
    ],
  },
  {
    h2: "Limitation of liability",
    paragraphs: [
      "To the fullest extent permitted by law, the operator of this site is not liable for any loss arising from reliance on information on this site, including third-party-reported details that later prove incomplete or incorrect, or from the unavailability of the site or of any registration confirmation.",
    ],
  },
  {
    h2: "Governing law",
    paragraphs: [
      "These terms are governed by the laws of the Province of Ontario and the federal laws of Canada applicable therein. Any dispute will be brought in the courts of Ontario.",
    ],
  },
];
