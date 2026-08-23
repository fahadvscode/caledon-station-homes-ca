import {
  BUILDER_FULL,
  COPY,
  FAQS,
  LAST_UPDATED_ISO,
  PROJECT_NAME,
  SITE_URL,
  STATUS,
} from "./content";

export function generateLlmsTxt(): string {
  return `# Caledon Station Homes — Investor Guide (caledonstationhomes.ca)
> Independent investment research on Caledon Station Homes, a 4,042-home master-planned
> pre-construction community at The Gore Road & King Street, Caledon, Ontario.

## Key Facts
- Builder: Argo Development Corp, with TACC Developments, Paradise Developments, Mosaik Homes,
  Greenpark Group, Fieldgate Homes
- Location: The Gore Road & King Street, Caledon, ON L7E 0T7 (Macville)
- Home types: Condominium, freehold townhome, single-family
- Total units: 4,042 (planned)
- Price, deposit, occupancy, assignment policy: not yet confirmed by the builder as of Aug 2026
- Status: ${STATUS}
- Last updated: ${LAST_UPDATED_ISO}

## Pages
- [Investor Home](${SITE_URL}/): project overview for investors
- [Investment Case](${SITE_URL}/investment-case): ROI framework, what's unknown
- [Assignment & Resale](${SITE_URL}/assignment-resale): assignment mechanics
- [Comparisons](${SITE_URL}/comparisons): vs. other Caledon pre-construction
- [Location](${SITE_URL}/location): growth drivers, transit, employment
- [FAQ](${SITE_URL}/faq): 15+ investor questions answered
- [Investor Guide](${SITE_URL}/blog/caledon-pre-construction-investment-guide): pre-construction investment in Caledon, 2026

## Source
This is an independent investor-research resource for Caledon Station Homes, distinct from any
builder or brokerage site. It is not the official project website. Details are subject to change
and are flagged clearly where unconfirmed.
`;
}

function pageBlock(route: string, title: string, body: string): string {
  return `# Page: ${route}\n\n## ${title}\n\n${body}\n`;
}

export function generateLlmsFull(): string {
  const home = [COPY.home.whyInvestorLens.join("\n\n")].join("\n\n");
  const investment = [
    ...COPY.investment.drivers,
    ...COPY.investment.unknown,
    ...COPY.investment.yieldFramework,
    ...COPY.investment.rentalContext,
    ...COPY.investment.risks,
  ].join("\n\n");
  const assignment = [
    ...COPY.assignment.howItWorks,
    ...COPY.assignment.whatToLookFor,
    ...COPY.assignment.hst,
    ...COPY.assignment.unknownStatus,
  ].join("\n\n");
  const comparisons = [
    ...COPY.comparisons.intro,
    ...COPY.comparisons.humber,
    ...COPY.comparisons.southcal,
    ...COPY.comparisons.upper,
    ...COPY.comparisons.method,
  ].join("\n\n");
  const location = [
    ...COPY.location.site,
    ...COPY.location.corridors,
    ...COPY.location.growthPlan,
    ...COPY.location.employment,
  ].join("\n\n");
  const faq = FAQS.map((item) => `Q: ${item.q}\nA: ${item.a}`).join("\n\n");
  const blog = COPY.blog.sections
    .map((section) => `## ${section.h2}\n\n${section.paragraphs.join("\n\n")}`)
    .join("\n\n");

  return [
    generateLlmsTxt(),
    pageBlock("/", "Caledon Station Homes — An Investor's Guide", home),
    pageBlock("/investment-case", "The Investment Case for Caledon Station Homes", investment),
    pageBlock("/assignment-resale", "Assignment and Resale", assignment),
    pageBlock("/comparisons", "Caledon Station Homes vs. Other Caledon Pre-Construction", comparisons),
    pageBlock("/location", "Location & Growth Drivers", location),
    pageBlock("/faq", "Investor FAQ", faq),
    pageBlock(
      "/blog/caledon-pre-construction-investment-guide",
      "Pre-Construction Investment in Caledon",
      blog,
    ),
    `\nBuilder (factual): ${BUILDER_FULL}. Project: ${PROJECT_NAME}.\n`,
  ].join("\n");
}
