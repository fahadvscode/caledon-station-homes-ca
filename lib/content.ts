/**
 * Single source of truth for every project fact, page copy block, and metadata
 * string on caledonstation.ca.
 *
 * How to bump freshness when the builder confirms a new detail:
 * 1. Update the relevant constant below (price, deposit, occupancy, assignment).
 * 2. Set LAST_UPDATED and LAST_UPDATED_ISO to the confirmation date.
 * 3. Remove the matching row from UNVERIFIED_GATES / TBA displays.
 * 4. Rebuild so sitemap lastmod, JSON-LD dateModified, footer, FAQ, and
 *    llms.txt all pick up the new date automatically.
 */

export const SITE_URL = "https://caledonstation.ca";
export const SITE_HOST = "caledonstation.ca";
export const CONTACT_EMAIL = "privacy@caledonstation.ca";

export const LAST_UPDATED = "August 23, 2026";
export const LAST_UPDATED_ISO = "2026-08-23";

export const PROJECT_NAME = "Caledon Station Homes";
export const PROJECT_NAME_SHORT = "Caledon Station";
export const BUILDER_LEAD = "Argo Development Corp";
export const BUILDER_PARTNERS = [
  "TACC Developments",
  "Paradise Developments",
  "Mosaik Homes",
  "Greenpark Group",
  "Fieldgate Homes",
] as const;
export const BUILDER_FULL =
  "Argo Development Corp in partnership with TACC Developments, Paradise Developments, Mosaik Homes, Greenpark Group, and Fieldgate Homes";
export const BUILDER_SHORT =
  "Argo Development Corp (with TACC, Paradise, Mosaik, Greenpark, Fieldgate)";
export const BUILDER_LEAD_CITY = "Burlington, Ontario";

export const CITY = "Caledon";
export const PROVINCE = "Ontario";
export const REGION = "Regional Municipality of Peel";
export const COUNTRY = "Canada";
export const HAMLET = "Macville";
export const INTERSECTION = "The Gore Road & King Street";
export const POSTAL_CODE = "L7E 0T7";
export const ADDRESS_LINE = "The Gore Road & King Street, Caledon, ON L7E 0T7";

export const GEO = {
  latitude: 43.8595283,
  longitude: -79.7816809,
} as const;

export const MAPS_EMBED_SRC = `https://maps.google.com/maps?q=${GEO.latitude},${GEO.longitude}&z=14&output=embed`;

export const SITE_NAME = "Caledon Station Homes — Investor Guide";
export const SITE_ORG_NAME = "Caledon Station Homes — Investor Guide";
export const WORDMARK_TAGLINE = "Investor Guide";

export const STATUS = "Pre-construction — Registration Open";
export const STATUS_BADGE = "Registration Open — Pricing Not Yet Announced";
export const HOME_TYPES = "Condominium, Freehold Townhome, Single-Family";
export const TOTAL_UNITS = "4,042 (planned)";
export const TOTAL_UNITS_NUMBER = 4042;
export const PARKLAND_ACRES = "75-plus-acre master-planned site";

export const TBA = "To be announced";
export const STARTING_PRICE_DISPLAY = TBA;
export const DEPOSIT_DISPLAY = TBA;
export const OCCUPANCY_DISPLAY = TBA;
export const SIZES_DISPLAY = TBA;
export const ASSIGNMENT_DISPLAY = "Not yet published by the builder";
export const FEES_DISPLAY = TBA;

export const HERO_EYEBROW = "PRE-CONSTRUCTION INVESTMENT · CALEDON, ONTARIO";
export const HERO_SUBHEAD =
  "Independent research on the 4,042-home master-planned community at The Gore Road & King Street, Caledon — built for buyers evaluating it as an investment.";

export const HERO_IMAGE = {
  src: "/images/caledon-station-homes-investment-hero.svg",
  alt: "Caledon Station Homes investment map of The Gore Road and King Street growth corridor in Caledon, Ontario",
  width: 1920,
  height: 1080,
  caption:
    "Cartographic context for Caledon Station Homes at The Gore Road and King Street, Caledon. This is an original site illustration, not a builder rendering. Official project imagery has not been released.",
} as const;

export const LOCATION_IMAGE = {
  src: "/images/caledon-growth-corridor.svg",
  alt: "Caledon growth corridor real estate map showing The Gore Road, King Street, Highway 410 and Mayfield Road",
  width: 1600,
  height: 900,
  caption:
    "Growth-corridor context for Caledon Station Homes: The Gore Road and King Street relative to Highway 410 and the Mayfield Road employment axis. Illustration only.",
} as const;

export const ROI_IMAGE = {
  src: "/images/caledon-station-homes-roi-framework.svg",
  alt: "Caledon Station Homes ROI framework diagram for rental yield and cap rate once pricing is released",
  width: 1600,
  height: 900,
  caption:
    "Generic rental-yield and cap-rate framework for Caledon Station Homes. No project-specific return figure is implied; pricing and fees remain unconfirmed.",
} as const;

export const ASSIGNMENT_IMAGE = {
  src: "/images/caledon-station-homes-assignment.svg",
  alt: "Caledon Station Homes assignment policy timeline from Agreement of Purchase and Sale through closing",
  width: 1600,
  height: 900,
  caption:
    "How an Ontario pre-construction assignment generally proceeds. Caledon Station Homes has not published project-specific assignment terms as of August 2026.",
} as const;

export const COMPARISON_IMAGE = {
  src: "/images/caledon-station-homes-vs-humber-station.svg",
  alt: "Caledon Station Homes vs Humber Station Caledon for investors — comparison of builder, unit mix and confirmation status",
  width: 1600,
  height: 900,
  caption:
    "Investor comparison frame for Caledon Station Homes versus nearby Caledon pre-construction. Confirmed facts only; no winner is declared.",
} as const;

export const BLOG_IMAGE = {
  src: "/images/pre-construction-investment-caledon.svg",
  alt: "Pre-construction investment Caledon — Peel Region market context for 2026",
  width: 1600,
  height: 900,
  caption:
    "Context illustration for pre-construction investment in Caledon and Peel Region in 2026. Not a project rendering.",
} as const;

export const NAV = [
  { href: "/", label: "Overview" },
  { href: "/investment-case", label: "Investment Case" },
  { href: "/assignment-resale", label: "Assignment" },
  { href: "/comparisons", label: "Comparisons" },
  { href: "/location", label: "Location" },
  { href: "/faq", label: "FAQ" },
  {
    href: "/blog/caledon-pre-construction-investment-guide",
    label: "Investor Guide",
  },
] as const;

export type FaqItem = { q: string; a: string };

export const FAQS: FaqItem[] = [
  {
    q: "Is Caledon Station Homes a good investment?",
    a: "A definitive yes or no is not possible today because Caledon Station Homes has not released pricing, deposit structure, or maintenance fees as of August 2026. Those figures determine yield and cash-on-cash return. What is known is scale and location: 4,042 planned homes at The Gore Road and King Street, Caledon, developed by Argo Development Corp and five partner builders. Treat that as context, not a return forecast.",
  },
  {
    q: "What is the assignment policy for Caledon Station Homes?",
    a: "Caledon Station Homes has not published an assignment policy as of August 2026. In Ontario pre-construction, the right to assign a contract before closing is set entirely by the Agreement of Purchase and Sale, including any fee, consent requirement, and timing window. Investors should wait for that document rather than rely on third-party rumours.",
  },
  {
    q: "How much does a unit at Caledon Station Homes cost?",
    a: "The starting price for Caledon Station Homes is to be announced. No public price list, price-per-square-foot figure, or collection-level range has been released by the builder as of August 2026. The project is a 4,042-home mix of condominiums, freehold townhomes, and single-family houses at The Gore Road and King Street, Caledon.",
  },
  {
    q: "What is the deposit structure?",
    a: "The deposit structure for Caledon Station Homes is to be announced. Dollar amounts, payment dates, and whether deposits are staged over months or years have not been published. Deposit timing drives carrying cost for an investor; until the schedule is released, cash-flow models for this project remain scenario work, not quotes.",
  },
  {
    q: "What is the projected rental yield?",
    a: "A rental yield for Caledon Station Homes cannot be calculated until purchase price, occupancy date, and maintenance or POTL fees are confirmed. Gross yield is annual rent divided by purchase price; net yield subtracts fees, taxes, insurance, vacancy, and carrying costs. Caledon has limited purpose-built rental stock relative to planned household growth, but that is market context, not a rent estimate for this project.",
  },
  {
    q: "When will Caledon Station Homes be built / occupy?",
    a: "Occupancy for Caledon Station Homes is unconfirmed as of August 2026. Public sources conflict between “to be announced” and a 2028 figure; this site does not pick one. Construction-timeline risk is material for investors because carrying costs run until keys, and financing is typically re-qualified at closing rather than at signing.",
  },
  {
    q: "Who is the builder and what is their track record?",
    a: "Caledon Station Homes is being developed by Argo Development Corp of Burlington, Ontario, in partnership with TACC Developments, Paradise Developments, Mosaik Homes, Greenpark Group, and Fieldgate Homes. Each of those firms has an established Greater Toronto Area building record. Track record is not a guarantee of on-time delivery, pricing, or resale performance on this specific site.",
  },
  {
    q: "What are the risks of buying pre-construction as an investor?",
    a: "Pre-construction investment risk includes construction delays, financing qualification at closing rather than at purchase, interest-rate exposure during the wait, and a different resale or rental market at occupancy than at signing. Assignment may be restricted. Pricing, fees, and occupancy for Caledon Station Homes are still unconfirmed, which adds information risk on top of those general risks.",
  },
  {
    q: "How does Caledon Station Homes compare to other Caledon pre-construction projects?",
    a: "Caledon Station Homes should be compared on builder group, unit mix, confirmation status of pricing, and proximity to transit and employment corridors — not on a declared winner. Nearby registering or selling communities include Humber Station by Solmar, SouthCal by Arista Homes with DECO and Opus, and Upper Caledon East by CountryWide Homes. See the comparison table on this site for confirmed versus unconfirmed fields.",
  },
  {
    q: "What closing costs should an investor budget for?",
    a: "Ontario pre-construction investors typically budget for land transfer tax, legal fees, title insurance, HST treatment that depends on use and assignment, and any development levies the agreement passes through. Exact amounts for Caledon Station Homes cannot be quoted until price and the Agreement of Purchase and Sale are released. Consult a lawyer and accountant; this is not tax advice.",
  },
  {
    q: "Can I assign my contract before closing?",
    a: "Assignment sales are common in Ontario pre-construction but are not automatic. Whether a Caledon Station Homes purchaser can sell the contract before closing depends on the assignment clause in that project's Agreement of Purchase and Sale, which has not been published as of August 2026. Assume nothing until that clause is in hand.",
  },
  {
    q: "What is driving growth in Caledon that could affect this project's value?",
    a: "The Town of Caledon's Future Caledon Official Plan implements the Region of Peel Official Plan approved by the Province on November 4, 2022, which requires Caledon to plan for 300,000 people and 125,000 jobs by 2051, up from about 81,000 people and 32,000 jobs in 2021. That growth framework is context for The Gore Road and King Street corridor. It is not a price forecast for Caledon Station Homes.",
  },
  {
    q: "Is there a cost to register for investor updates?",
    a: "No. Investor registration on this site is free and creates no purchase obligation. The form collects first name, last name, email, phone, and whether the registrant is a licensed real estate agent or broker, so the investment info team can send notice when pricing, deposit structure, and assignment policy are confirmed.",
  },
  {
    q: "What unit types are planned and how does that affect exit flexibility?",
    a: "Caledon Station Homes is planned to include condominiums, freehold townhomes, and single-family homes totalling 4,042 units. A three-product mix gives investors more than one exit channel — rental, assignment if permitted, or resale after closing — once prices exist. Collection-level sizes and bedroom counts have not been released.",
  },
  {
    q: "Where can I get official, confirmed pricing when it's released?",
    a: "Official Caledon Station Homes pricing will come from the development team at VIP or public release, not from third-party listing sites. Register on this independent investor guide to be notified when confirmed figures are published. This site is not the builder's official website and does not allocate units.",
  },
  {
    q: "What is a realistic cap rate for pre-construction in Caledon?",
    a: "No realistic cap rate can be stated for Caledon Station Homes until purchase price, net operating income, and fees are known. Cap rate is net operating income divided by price. Using a city-wide average in place of project numbers would be misleading. Apply the formula on this site's investment-case page once the builder publishes the missing inputs.",
  },
  {
    q: "Is pre-construction in Caledon a good investment right now?",
    a: "Whether pre-construction in Caledon is a good investment in 2026 depends on the specific project's price, deposit, fees, and the buyer's time horizon — not on the municipality's name. Caledon is planning for substantial population and job growth to 2051. That planning fact does not by itself make any one contract a sound purchase.",
  },
  {
    q: "How much rental income can I get from Caledon Station Homes?",
    a: "Rental income for Caledon Station Homes cannot be quoted because unit sizes, prices, and fees are unconfirmed as of August 2026. Any dollar rent figure attached to this project before those releases would be invented. Caledon rental demand is supported by a commuter relationship to Brampton and the GTA and by limited existing purpose-built rental stock, which is regional context only.",
  },
];

export const HOME_ANSWER =
  "Caledon Station Homes is a 4,042-home master-planned pre-construction community proposed at The Gore Road and King Street in Caledon, Ontario, developed by Argo Development Corp with TACC Developments, Paradise Developments, Mosaik Homes, Greenpark Group, and Fieldgate Homes. For investors, the key open questions are pricing, deposit structure, and assignment policy — none of which the builder has confirmed publicly as of August 2026.";

export const SOURCE_OF_TRUTH_SUMMARY =
  "Caledon Station Homes is a master-planned pre-construction community proposed at The Gore Road and King Street in Caledon, Ontario. It is being developed by Argo Development Corp in partnership with TACC Developments, Paradise Developments, Mosaik Homes, Greenpark Group, and Fieldgate Homes, and is planned to include roughly 4,042 condominium, freehold townhome, and single-family homes across a 75-plus-acre master-planned site.";

export const INVESTMENT_ANSWER =
  "Evaluating Caledon Station Homes as an investment currently means modeling scenarios, not quoting confirmed numbers — the builder has not released pricing, deposit structure, or maintenance fees as of August 2026. This page lays out the ROI framework investors should apply once real numbers are published, and the market and location factors that are already known.";

export const ASSIGNMENT_ANSWER =
  "Caledon Station Homes' builder has not published an assignment policy as of August 2026. Assignment sales — selling a pre-construction contract before closing — are common in Ontario pre-construction but are governed entirely by each project's Agreement of Purchase and Sale, so the specific terms for this project won't be known until that document is released.";

export const COMPARISON_ANSWER =
  "Caledon Station Homes is one of several pre-construction communities registering in Caledon and the surrounding Peel Region as of 2026. Investors comparing it to nearby projects should weigh builder track record, unit mix, confirmed vs. unconfirmed pricing, and proximity to transit and employment corridors — the comparison table below lays out what's currently known for each.";

export const LOCATION_ANSWER =
  "Caledon Station Homes is proposed at The Gore Road and King Street in the hamlet of Macville, Caledon, Ontario, postal code L7E 0T7. For investors, the relevant location facts are the site's position on the Highway 410 and Mayfield Road growth corridor, the commuter relationship toward Brampton and the broader GTA, and Caledon's official plan to accommodate 300,000 residents and 125,000 jobs by 2051.";

export const REGISTER_ANSWER =
  "Investor registration on this site is free and notifies you when Caledon Station Homes confirms pricing, deposit structure, and assignment policy. Registration is not a builder allocation, not a purchase, and not a guarantee of investor priority the development team has not confirmed.";

export const GUIDE_ANSWER =
  "Pre-construction investment in Caledon in 2026 is a project-by-project underwriting exercise, not a municipal slogan. Caledon Station Homes is the largest mixed condominium, townhome, and single-family proposal currently mapped for this research — 4,042 planned homes at The Gore Road and King Street — but its price, deposit, fees, and occupancy remain unconfirmed.";

export const QUICK_FACTS: { label: string; value: string }[] = [
  { label: "Builder", value: BUILDER_SHORT },
  { label: "Type", value: HOME_TYPES },
  { label: "Address", value: ADDRESS_LINE },
  { label: "Total Units", value: TOTAL_UNITS },
  { label: "Starting Price", value: STARTING_PRICE_DISPLAY },
  { label: "Deposit", value: DEPOSIT_DISPLAY },
  { label: "Occupancy", value: OCCUPANCY_DISPLAY },
  { label: "Assignment Policy", value: ASSIGNMENT_DISPLAY },
  { label: "Status", value: STATUS },
];

export const UNVERIFIED_GATES: { item: string; status: string; whyItMatters: string }[] = [
  {
    item: "Price per square foot",
    status: "Unknown — to be announced",
    whyItMatters: "Drives every yield, cap-rate, and price-per-foot comparison.",
  },
  {
    item: "Deposit structure",
    status: "Unknown — to be announced",
    whyItMatters: "Drives cash-flow timing and carrying cost between signing and occupancy.",
  },
  {
    item: "Maintenance / POTL fees",
    status: "Unknown — to be announced",
    whyItMatters:
      "Drives net rental yield directly. Do not estimate a number for Caledon Station Homes until the builder publishes one.",
  },
  {
    item: "Occupancy date",
    status: "Unknown — sources conflict between TBD and 2028",
    whyItMatters: "Drives carrying-cost duration and the market snapshot at which an investor exits or rents.",
  },
  {
    item: "Unit sizes by plan",
    status: "Unknown — to be announced",
    whyItMatters: "Without square footage, rent comps and price-per-foot work cannot be completed.",
  },
  {
    item: "Assignment policy",
    status: "Not yet published by the builder",
    whyItMatters: "Determines whether a pre-closing exit is even available, and on what fee and consent terms.",
  },
  {
    item: "Third-party-listed incentives",
    status: "Not builder-confirmed",
    whyItMatters: "Listing-site incentives are not treated as fact on this site until the development team confirms them.",
  },
  {
    item: "VIP launch date",
    status: "Unknown — to be announced",
    whyItMatters: "Launch timing affects phase pricing and whether an early registration is operationally useful.",
  },
];

export const DEPOSIT_SCHEDULE: { milestone: string; amount: string; due: string }[] = [
  { milestone: "On signing", amount: TBA, due: TBA },
  { milestone: "Subsequent staged deposits", amount: TBA, due: TBA },
  { milestone: "Occupancy / closing", amount: TBA, due: TBA },
];

export const ROI_ROWS: { metric: string; formula: string; caledonStationStatus: string }[] = [
  {
    metric: "Gross rental yield",
    formula: "Annual rent ÷ purchase price",
    caledonStationStatus: "Cannot be calculated — price and rent are unconfirmed",
  },
  {
    metric: "Net rental yield",
    formula: "(Annual rent − fees − tax − vacancy − opex) ÷ purchase price",
    caledonStationStatus: "Cannot be calculated — maintenance/POTL fees unknown",
  },
  {
    metric: "Cap rate",
    formula: "Net operating income ÷ purchase price",
    caledonStationStatus: "Cannot be calculated — NOI inputs unconfirmed",
  },
  {
    metric: "Cash-on-cash return",
    formula: "Annual pre-tax cash flow ÷ cash invested (deposits + closing)",
    caledonStationStatus: "Cannot be calculated — deposit schedule unconfirmed",
  },
  {
    metric: "Assignment spread (if permitted)",
    formula: "Assignment price − original price − fees − HST if applicable",
    caledonStationStatus: "Assignment policy not published",
  },
];

export type Comparable = {
  community: string;
  builder: string;
  location: string;
  unitTypes: string;
  status: string;
  confirmed: string;
  unconfirmed: string;
  href?: string;
};

export const COMPARABLES: Comparable[] = [
  {
    community: "Caledon Station Homes",
    builder: "Argo Development Corp with TACC, Paradise, Mosaik, Greenpark, Fieldgate",
    location: "The Gore Road & King Street, Caledon (Macville)",
    unitTypes: "Condominium, freehold townhome, single-family",
    status: "Pre-construction — registration open",
    confirmed: "4,042 planned units; 75-plus-acre site; builder group; intersection",
    unconfirmed: "Price, deposit, occupancy, fees, assignment, unit sizes",
    href: "/",
  },
  {
    community: "Humber Station",
    builder: "Solmar Development Corp",
    location: "King Street & Humber Station Road, Caledon",
    unitTypes: "Low-rise mix: detached, semi-detached, and townhomes (per Solmar)",
    status: "Pre-construction — registration open on Solmar's site",
    confirmed: "Builder (Solmar); Caledon low-rise; location near Humber Station Road",
    unconfirmed: "Public price list, unit count, deposit, occupancy, assignment",
  },
  {
    community: "SouthCal",
    builder: "Arista Homes, DECO Homes, and Opus Homes",
    location: "Highway 410 & Hurontario Street, Caledon",
    unitTypes: "Freehold townhomes and detached homes (per southcalhomes.ca)",
    status: "Pre-construction — VIP / registered-buyer pricing referenced on the official site",
    confirmed: "Builder trio; Hwy 410 & Hurontario location; freehold towns and detached",
    unconfirmed: "A public starting price on the official homepage; assignment; occupancy year",
  },
  {
    community: "Upper Caledon East",
    builder: "CountryWide Homes (Aspen Ridge Homes and Regal Crest Homes also reported)",
    location: "Airport Road & Cranston Drive, Caledon East",
    unitTypes: "21' towns and 31'–49' singles (per CountryWide Homes)",
    status: "Listed as now open on CountryWide Homes' Caledon page",
    confirmed: "CountryWide listing; Airport Road & Cranston Drive; town and single mix",
    unconfirmed: "A starting price on the builder page used here; assignment; exact unit count",
  },
];

export const CASL_CONSENT =
  "I consent to receive electronic communications about Caledon Station Homes and similar pre-construction investment opportunities. I understand I can withdraw consent at any time using the unsubscribe link in any message.";

export const INDEPENDENCE_DISCLAIMER =
  "This is an independent, investor-focused information and registration website for Caledon Station Homes. It is not the official website of Argo Development Corp or its development partners and is not affiliated with or endorsed by them. It is also a separate resource from any other website referencing this project. All renderings, pricing, sizes, and specifications are for illustration only and are subject to change without notice. E.&O.E.";

export const SPECS_DISCLAIMER = `Prices, sizes, specifications, and availability are subject to change without notice. E.&O.E. Information current as of ${LAST_UPDATED}.`;

export type PageMeta = {
  path: string;
  title: string;
  description: string;
  h1: string;
  robots?: { index: boolean; follow: boolean };
};

export const PAGE_META: Record<string, PageMeta> = {
  home: {
    path: "/",
    title: "Caledon Station Homes — Investor Guide | Caledon, ON",
    description:
      "Independent investment research on Caledon Station Homes: 4,042 homes at The Gore Road & King St, Caledon. ROI, assignment policy, and market context.",
    h1: "Caledon Station Homes — An Investor's Guide",
  },
  investmentCase: {
    path: "/investment-case",
    title: "Caledon Station Homes ROI & Investment Case",
    description:
      "What drives returns at Caledon Station Homes, what pricing is still unconfirmed, and the rental-yield framework to apply once it's released.",
    h1: "The Investment Case for Caledon Station Homes",
  },
  assignment: {
    path: "/assignment-resale",
    title: "Caledon Station Homes Assignment Policy",
    description:
      "How assignment sales work for Ontario pre-construction, and the current status of Caledon Station Homes' specific assignment terms.",
    h1: "Assignment and Resale: What Investors Need to Know",
  },
  comparisons: {
    path: "/comparisons",
    title: "Caledon Station Homes vs. Other Caledon Pre-Con",
    description:
      "Compare Caledon Station Homes to other pre-construction investments registering in Caledon and Peel Region.",
    h1: "Caledon Station Homes vs. Other Caledon-Area Pre-Construction Investments",
  },
  location: {
    path: "/location",
    title: "Caledon Station Homes Location & Growth Drivers",
    description:
      "The Gore Road & King Street, Caledon — transit, employment corridors, and growth-plan context relevant to investors.",
    h1: "Caledon Station Homes Location & Growth Drivers",
  },
  faq: {
    path: "/faq",
    title: "Caledon Station Homes Investor FAQ",
    description:
      "15+ answered questions on Caledon Station Homes for investors: ROI, assignment, deposit structure, risk.",
    h1: "Caledon Station Homes Investor FAQ",
  },
  register: {
    path: "/register",
    title: "Register — Caledon Station Homes Investor Updates",
    description:
      "Get notified when Caledon Station Homes releases pricing, deposit structure, and assignment policy.",
    h1: "Register for Caledon Station Homes Investor Updates",
  },
  thankYou: {
    path: "/thank-you",
    title: "Registration Received | Caledon Station Homes Investors",
    description:
      "Your Caledon Station Homes investor registration has been received. You will be notified when pricing and assignment terms are confirmed.",
    h1: "Investor registration received",
  },
  guide: {
    path: "/blog/caledon-pre-construction-investment-guide",
    title: "Pre-Construction Investment Caledon Guide",
    description:
      "How to underwrite pre-construction investment in Caledon and Peel Region in 2026, with Caledon Station Homes as the worked example.",
    h1: "Pre-Construction Investment in Caledon: A 2026 Investor Guide",
  },
  privacy: {
    path: "/privacy",
    title: "Privacy Policy | Caledon Station Homes Investor Guide",
    description:
      "Privacy Policy for the independent Caledon Station Homes investor guide: PIPEDA, Supabase storage, cookies, and deletion requests.",
    h1: "Privacy Policy",
  },
  terms: {
    path: "/terms",
    title: "Terms of Use | Caledon Station Homes Investor Guide",
    description:
      "Terms of Use for the independent Caledon Station Homes investor-research website. Governing law: Ontario.",
    h1: "Terms of Use",
  },
};

export const SITEMAP_ROUTES: {
  path: string;
  changeFrequency: "weekly" | "monthly" | "yearly";
  priority: number;
}[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/investment-case", changeFrequency: "weekly", priority: 0.9 },
  { path: "/assignment-resale", changeFrequency: "weekly", priority: 0.9 },
  { path: "/comparisons", changeFrequency: "monthly", priority: 0.8 },
  { path: "/location", changeFrequency: "monthly", priority: 0.8 },
  { path: "/faq", changeFrequency: "weekly", priority: 0.8 },
  { path: "/register", changeFrequency: "monthly", priority: 0.8 },
  { path: "/thank-you", changeFrequency: "yearly", priority: 0.3 },
  {
    path: "/blog/caledon-pre-construction-investment-guide",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
];

export const LINKS = {
  investmentCase: { href: "/investment-case", text: "read the investment case" },
  assignment: { href: "/assignment-resale", text: "how assignment works here" },
  comparisons: { href: "/comparisons", text: "compare Caledon-area pre-construction investments" },
  location: { href: "/location", text: "Caledon growth corridor real estate context" },
  faq: { href: "/faq", text: "Caledon Station Homes investor FAQ" },
  register: { href: "/register", text: "register for investor updates" },
  home: { href: "/", text: "Caledon Station Homes investment overview" },
  guide: {
    href: "/blog/caledon-pre-construction-investment-guide",
    text: "pre-construction investment Caledon guide",
  },
} as const;

export const COPY = {
  home: {
    whyInvestorLens: [
      "Caledon Station Homes is one of the largest master-planned communities currently proposed for the Town of Caledon — roughly 4,042 homes spanning condominiums, freehold towns, and single family houses at the intersection of The Gore Road and King Street, in the hamlet of Macville. Scale like that matters to an investor differently than it matters to an end user: a multi-phase, multi-builder launch of this size typically means staged price increases across releases, which rewards buyers who register and act early in a phase rather than waiting for the whole community to sell out.",
      "The development consortium — Argo Development Corp of Burlington, alongside TACC Developments, Paradise Developments, Mosaik Homes, Greenpark Group, and Fieldgate Homes — brings established GTA building track records to a municipality, Caledon, that has seen accelerating growth pressure from its position along the Highway 410/Mayfield Road corridor and its connections toward Brampton and the broader GTA West growth plan.",
      "None of that is a promise of appreciation. It's context. The specific numbers that actually determine an investment's viability — price per square foot, deposit structure, closing costs, maintenance fees, and assignment terms — have not been released by the builder as of this writing. This site tracks those figures as they're confirmed and flags clearly, everywhere, when a number is still an open question rather than a fact.",
      "The sections that follow walk through what a rental-yield and appreciation case would actually require to pencil out, what's known about assignment and resale mechanics for projects of this type in Ontario generally, and how Caledon Station Homes compares to other pre-construction investment opportunities currently registering in the region.",
      "Caledon Station Homes investment analysis on this domain is written for a different search intent than buyer-facing floor-plan and VIP pages elsewhere. The questions this site exists to answer are whether the project can support rental yield, how assignment might work once an Agreement of Purchase and Sale exists, and how the 4,042-home mix compares with other Peel Region pre-construction investments. Those questions cannot be closed with a marketing adjective. They require a framework and an honest list of unknowns.",
      "Investors who register here are asking for notice when the missing inputs land — not for a guaranteed allocation, not for a preferred unit, and not for a promised cap rate. The investment info team uses the five-field form on this page for that notice. Until price, deposit, fees, and assignment language are public, every ROI conversation about Caledon Station Homes is a dress rehearsal for underwriting, not underwriting itself.",
      "Caledon Station Homes investor due diligence also has to separate what a master plan implies from what a contract contains. A 4,042-home program with five named building partners can still deliver a condominium fee an investor cannot live with, or an assignment blackout that traps capital until occupancy. The public facts — intersection, unit-count, builder list, pre-construction status — are enough to decide whether the file belongs on a watch list. They are not enough to size a cheque.",
      "This investor guide will be updated when the development team confirms a number that currently reads as to be announced. The last-updated stamp in the footer, the FAQ, the sitemap, and the machine-readable llms.txt file all move together from one constant. That is the operational promise of the site: not a yield, not a ranking, and not an impersonation of Argo Development Corp.",
    ],
  },
  investment: {
    drivers: [
      "What drives returns in a project like Caledon Station Homes is not a slogan about growth. It is a small set of mechanical factors: the price paid, the cash required before occupancy, the net rent the unit can support after fees, the ability to exit before closing if the Agreement of Purchase and Sale allows assignment, and the market the investor faces at occupancy. Only some of those factors are knowable today.",
      "Unit mix and density are knowable. Caledon Station Homes is planned for 4,042 homes across condominiums, freehold townhomes, and single-family houses on a 75-plus-acre master-planned site. For an investor, three product types mean three different buyer and renter pools at exit. A condominium and a freehold single do not compete for the same resale comparable, and they do not carry the same fee drag. Density at this scale also implies a multi-phase release. Later phases in GTA master plans have often priced above earlier ones; that pattern is historical market behaviour, not a forecast that this project will repeat it.",
      "Location growth trajectory is partly knowable. The Gore Road and King Street sit in Macville, Caledon, on the Highway 410 and Mayfield Road corridor with a commuter relationship toward Brampton and the rest of the Greater Toronto Area. The Town of Caledon's official plan, implementing the Region of Peel Official Plan approved 4 November 2022, requires the town to plan for 300,000 people and 125,000 jobs by 2051. That is a planning target, not a price path for any one contract.",
      "Builder track record is knowable at the firm level, not the site level. Argo Development Corp of Burlington is developing Caledon Station Homes with TACC Developments, Paradise Developments, Mosaik Homes, Greenpark Group, and Fieldgate Homes. Those names have delivered GTA product before. Delivery history is a risk-mitigant to underwrite, not a warranty of occupancy year or resale spread.",
      "Phase timing is not yet knowable. No VIP launch date has been confirmed. Investors who care about Caledon Station Homes ROI should treat registration as a monitoring step: the moment a price list exists, the framework on this page can be filled in. Until then, ranking this project as a “good investment” would be a claim this site will not make.",
    ],
    unknown: [
      "The table below is the investment case in negative space. Every row is a number a rental-yield or cash-on-cash model needs. Every row is still to be announced or otherwise unverified for Caledon Station Homes as of August 2026. Maintenance and POTL fees are flagged with particular force because they subtract directly from net yield; this site will not invent a monthly fee to make a sample calculation look complete.",
    ],
    yieldFramework: [
      "A generic rental-yield framework is usable the day a price list is published. Gross yield equals annual rent divided by purchase price. If a unit is later listed at $X and a conservative rent comp supports $Y per month, gross yield is (Y × 12) / X. That identity does not require optimism. It requires two confirmed inputs this project does not yet have.",
      "Net yield is the figure that actually matters to an investor. Start with annual rent, then subtract vacancy, property tax, insurance, maintenance or POTL fees, and any landlord operating costs the structure requires. Divide what remains by purchase price. Because Caledon Station Homes has not released maintenance or POTL fees, net yield cannot be estimated without fabricating the largest line item after tax. This page therefore stops at the formula.",
      "Cap rate is net operating income divided by purchase price. Cash-on-cash return divides annual pre-tax cash flow by cash invested, which for pre-construction is typically the deposit stack plus closing costs, not the full purchase price. Deposit structure for Caledon Station Homes is to be announced, so cash-on-cash is also blocked.",
      "None of these identities is unique to Caledon. They are written here so that, when the builder releases numbers, an investor can drop them into the same table without changing the method. That is the opposite of publishing a made-up Caledon Station Homes rental yield today.",
    ],
    rentalContext: [
      "Caledon rental market context should be sourced as regional, dated, and not as a rent roll for this project. Caledon is a lower-density Peel municipality with a commuter relationship to Brampton and the GTA. Purpose-built rental stock in Caledon has historically been thin relative to the household growth the official plan now contemplates. Those two facts support the idea that rental demand exists in the corridor. They do not produce a monthly rent for a condominium, townhome, or single that has no published size.",
      "Investors sometimes paste a CMHC city-average vacancy or a neighbouring municipality's townhome rent onto a pre-construction brochure. That shortcut is how fictional cap rates get attached to projects still in registration. This site will cite Caledon and Peel rental conditions as demand drivers and will refuse to output a project-specific rent or yield until price, size, and fees exist.",
      "The Highway 410 / Mayfield Road employment axis, Brampton's labour market, and Caledon's 2051 household forecast (90,000 households in the Future Caledon Official Plan table, versus 24,000 in 2021) are the demand-side facts that survive without a price list. Use them to decide whether to keep watching the file. Do not use them as a substitute for net operating income.",
    ],
    risks: [
      "Construction timeline risk is first. Occupancy for Caledon Station Homes is unconfirmed, and public sources conflict between TBD and 2028. An investor who models a 2028 rent start on a TBD occupancy is taking a date from a conflicted source and treating it as a coupon. Delays extend deposit lock-up and can change the rate environment the buyer faces at closing.",
      "Financing qualification at closing is second. Canadian pre-construction purchases typically require the buyer to satisfy the lender when the unit is complete, not only when the agreement is signed. Income, debt service, and underwriting rules can move in the years between those two events. A rate increase or a policy change can strand a purchaser who was comfortable at signing.",
      "Interest-rate exposure between purchase and closing is third. Even if the contract price is fixed, the carrying cost of deposits, the eventual mortgage rate, and the opportunity cost of capital are not. Investors who need assignment as a relief valve should note that Caledon Station Homes has not published assignment terms, so that relief valve is hypothetical.",
      "Market conditions at occupancy versus at purchase are fourth. The rental and resale markets that exist when keys are ready may be weaker or stronger than the market that existed at registration. Pre-construction does not lock in a tenant or a resale buyer. This site will not minimize that risk.",
      "Information risk is fifth and specific to this file. Price, fees, sizes, occupancy, and assignment are unconfirmed. Third-party listing sites have at times attached incentives to Caledon Station Homes that the builder has not confirmed. This research treats those incentives as unverified. Relying on them in a model would be an unforced error.",
    ],
  },
  assignment: {
    howItWorks: [
      "An assignment sale in Ontario pre-construction is the purchaser's sale of their interest in the Agreement of Purchase and Sale to a new purchaser before closing, rather than a sale of a finished home. The original buyer is selling a contract. The builder remains a party. Whether that transfer is allowed, how much it costs, who must consent, and when it may occur are not provincial defaults. They are whatever the specific agreement says.",
      "In general terms, a typical GTA assignment clause — where one exists — addresses builder consent, an assignment fee, a window during which assignment is prohibited, disclosure to the assignee, and whether the original purchaser remains liable if the assignee defaults. Those are the headings an investor should look for. They are not Caledon Station Homes terms, because Caledon Station Homes has not published them.",
      "Assignment is often discussed as an investor exit strategy. That description is only as good as the clause. A project can forbid assignment, allow it with a large fee, allow it only after a date, or allow it freely. Until the Agreement of Purchase and Sale for Caledon Station Homes is released, any statement that an investor “can assign” this contract is speculation.",
    ],
    whatToLookFor: [
      "When the Caledon Station Homes APS is released, investors should read the assignment clause for at least six items: whether assignment is permitted at all; whether the builder's consent is required and on what standard; the fee, in dollars or as a percentage; any blackout period after signing or before occupancy; whether the original buyer remains on the hook; and any marketing restrictions on advertising the assignment.",
      "Related clauses matter almost as much. Occupancy and closing mechanics, HST language, and restrictions on leasing before closing can all change the economics of an intended flip or a bridge rental. None of those Caledon Station Homes clauses is public as of August 2026.",
      "Third-party listing copy that advertises “free assignment” or “assignment available” for this project is not treated as confirmed here. Incentives listed off-site remain on the unverified list until the development team publishes matching language.",
    ],
    hst: [
      "HST implications of assignment sales in Ontario are fact-specific and this site is not tax advice. At a high level, new housing can involve HST, rebates, and different treatment depending on whether the purchaser is an end user or an investor, and depending on whether the transaction is a closing or an assignment of a contract. An assignment can create HST consequences for the assignor that a simple resale of a used home would not.",
      "Investors evaluating Caledon Station Homes as an assignment candidate should retain an accountant who works with Ontario new-construction files before they sign, not after they try to assign. The correct treatment depends on use, registration for HST, and the wording of the agreement — none of which this page can complete today.",
    ],
    unknownStatus: [
      "The current status is simple to state and easy to over-talk. Caledon Station Homes assignment policy: not yet published by the builder. Resale after closing, by contrast, is the ordinary sale of a completed home and would be governed by ordinary Ontario resale practice, not by an assignment clause. There is no historical resale or appreciation series for this project because it has not launched. This site will not invent one.",
    ],
  },
  comparisons: {
    intro: [
      "Caledon Station Homes vs. other Caledon-area pre-construction investments is a comparison of what is known, not a ranking. As of 2026, several communities in Caledon and Peel are in registration or early sales. The useful investor questions are who is building, what product is offered, whether pricing is public, and how the site sits relative to employment and transit corridors. Declaring a winner without prices would be theatre.",
      "The table on this page uses only publicly attributed facts. Where a figure appears only on a third-party listing site and not on the builder's own page, it is treated as unconfirmed. That standard is applied to Caledon Station Homes and to its neighbours equally.",
    ],
    humber: [
      "Humber Station is the comparison investors most often type: Caledon Station Homes vs Humber Station Caledon for investors. Solmar Development Corp lists Humber Station as a Caledon low-rise community and invites registration for floor plans and pricing. Solmar's public page describes detached, semi-detached, and townhome living near Humber Station Road and King Street. It does not, on the pages reviewed for this research, publish a starting price, a unit count, or an assignment policy. Occupancy years that appear on brokerage pages are not treated here as Solmar-confirmed.",
      "The two projects sit in the same municipal market and along related east-Caledon roads, but they are not the same product. Caledon Station Homes is a 4,042-home master plan with condominiums in the mix as well as freehold towns and singles. Humber Station, on Solmar's description, is a low-rise mix without a published condominium stack. That difference matters for exit liquidity and for fee drag. It does not tell an investor which contract will perform.",
    ],
    southcal: [
      "SouthCal, at Highway 410 and Hurontario Street, is being developed by Arista Homes, DECO Homes, and Opus Homes. The official SouthCal site describes freehold townhomes and detached homes and refers registered buyers to VIP pricing. That is a different confirmation state than Caledon Station Homes, which has not announced pricing at all. It is still not a licence to paste third-party dollar figures into a comparison as if they were audited. This table records SouthCal's builder, location, and product types as confirmed, and its public starting price as not confirmed on the official homepage used for this pass.",
    ],
    upper: [
      "Upper Caledon East is listed by CountryWide Homes at Airport Road and Cranston Drive in Caledon East, with 21-foot towns and 31- to 49-foot singles described as now open. Aspen Ridge Homes and Regal Crest Homes are also widely reported on the file. Caledon East is a different node from Macville. Investors comparing it to Caledon Station Homes are comparing a selling or recently opened freehold community against a still-unpriced 4,042-home mixed-tenure plan. Price-per-foot still cannot be lined up until Caledon Station Homes publishes sizes and prices.",
    ],
    method: [
      "Peel Region pre-construction investment screening, done honestly, is a checklist: builder, tenure, unit mix, confirmation of price, confirmation of deposit, confirmation of occupancy, assignment language, and location relative to jobs and transit. Caledon Station Homes currently scores high on scale and on named builders, and low on confirmation of the numbers that make a model. Neighbouring projects may score higher on confirmation and lower on scale. That is a trade-off to underwrite, not a reason to invent a Caledon Station Homes cap rate.",
    ],
  },
  location: {
    site: [
      "Caledon Station Homes is located at The Gore Road and King Street, Caledon, Ontario, L7E 0T7, in the hamlet of Macville. The intersection is the factual pin. Surrounding planning descriptions commonly bound the community toward Humber Station Road, The Gore Road, and King Street, along the CP Railway corridor. Those bounds matter to investors because they describe a greenfield edge community, not an infill condo in a finished downtown.",
      "Caledon growth corridor real estate, as a search phrase, is really about whether this edge of Peel will absorb the household growth the official plan assigns to the town. The site is relevant to that question because it is large — 4,042 planned homes on a 75-plus-acre master-planned site — and because it sits where Caledon's rural fabric meets the roads that already carry people toward Brampton and Highway 410.",
    ],
    corridors: [
      "Highway 410 and Mayfield Road are the named employment and commuting spine for south Caledon. Investors evaluating Caledon Station Homes should understand the site as connected to that spine rather than as a downtown walk-up. Driving access toward Brampton, the 410, and from there the 407, 401, and 403 is the practical regional story. This page does not invent a minute-count that has not been surveyed for this file.",
      "Named transit should be stated with its actual status. Planning materials for the Caledon Station area have described a transit-oriented layout and a proposed Caledon GO Station along the CP Railway corridor at the east limit of the community. That station is a planning proposal, not an operating service, as of August 2026. An investor who underwrites as if GO service were already running would be capitalizing an unbuilt amenity.",
    ],
    growthPlan: [
      "Caledon's official growth-plan context is documented. On November 4, 2022, the Province approved a new Region of Peel Official Plan that requires the Town of Caledon to plan for 300,000 people and 125,000 jobs. The Future Caledon Official Plan (Town of Caledon; consolidated text reviewed against the April 2026 consolidation published by the Town) states that the town is forecast to grow from approximately 80,000 residents in 2021 to 300,000 in 2051, with employment rising from approximately 32,000 jobs to 125,000. Table 4-1 in that plan lists minimum forecasts of 81,000 people, 24,000 households, and 32,000 jobs in 2021, versus 300,000 people, 90,000 households, and 125,000 jobs in 2051.",
      "The same official plan directs most of that growth into the Urban Area, including greenfield lands in south Caledon, rather than into the rural remainder of the town. Macville's position at The Gore Road and King Street is therefore not a trivia fact. It is a location inside the growth framework the Town is using to 2051. Frameworks can be amended, delayed, or serviced slowly. They still beat an unsourced claim that “Caledon is hot.”",
      "How Caledon's growth plan could affect home values is an investor question this site will only answer in the conditional. If servicing, schools, and employment lands arrive on the timetable the plan implies, a 4,042-home community at this intersection would sit inside a much larger household market than Caledon had in 2021. If they do not, the investor is holding a contract in a still-thin market. Neither branch is a guaranteed appreciation path. Historical resale data specific to Caledon Station Homes does not exist because the project has not launched.",
    ],
    employment: [
      "Employment nodes that matter to this file are Brampton's existing job base, the Mayfield Road corridor, and the 125,000-job 2051 target inside Caledon itself. A renter at Caledon Station Homes, if and when units exist, would be leasing in a municipality that is planning to add jobs, not only bedrooms. Job targets are not leases. They are why this location page exists alongside the yield formulas on the investment-case page.",
    ],
  },
  register: {
    value: [
      "Caledon Station Homes for investors is still a file in registration, not a priced offering. The useful action today is to be on the list that receives confirmed pricing, deposit structure, and assignment policy when the development team publishes them. That is the only value proposition this page can honestly make.",
      "Investor registration is not VIP allocation. It is not a hold on a unit. It is not a statement that the builder has created an investor-priority queue. Those claims would imply a program the development team has not confirmed. What registration on this independent site does is notify the investment info team that you want the numbers when they exist.",
      "The form has five fields: first name, last name, email, phone, and whether you are a licensed real estate agent or broker. There is no budget field, no home-type picker, and no timeline qualifier. A CASL consent box sits under the fields and is never pre-checked. You can withdraw consent later using the unsubscribe link in any message.",
    ],
  },
  blog: {
    sections: [
      {
        h2: "What pre-construction investment in Caledon actually is",
        paragraphs: [
          "Pre-construction investment Caledon coverage in 2026 is noisy. Listing pages use the word investment as an adjective. This guide uses it as a process: you are buying a contract, posting deposits over time, and taking construction, financing, and market risk until occupancy — or until an assignment, if the agreement allows one. Caledon Station Homes is the worked example because it is large enough to matter (4,042 planned homes) and incomplete enough to teach the method (price, deposit, fees, and occupancy all still to be announced).",
          "An end-user purchase can tolerate a missing fee schedule as a lifestyle inconvenience. An investor purchase cannot. Net yield moves with maintenance and POTL fees. Cash-on-cash moves with the deposit calendar. Exit optionality moves with the assignment clause. Those are the reasons this domain exists separately from buyer-intent pages that rank for floor plans and VIP registration.",
        ],
      },
      {
        h2: "The Peel Region screen before you look at any one site",
        paragraphs: [
          "Peel Region pre-construction investment still starts with municipality-level facts. Mississauga and Brampton are more built-out. Caledon is the Peel municipality whose official plan is absorbing a step-change in households: 24,000 in 2021 to a 90,000-household 2051 minimum forecast in the Future Caledon Official Plan, under the Peel plan the Province approved on 4 November 2022. That is the demand-side backdrop. It is shared by every Caledon file, which means it cannot be the reason you prefer one contract over another.",
          "Servicing, school capacity, and employment land delivery will not arrive uniformly. South Caledon along Highway 410 and Hurontario is a different operational market from Caledon East on Airport Road, which is a different market from Macville at The Gore Road and King Street. Investors who buy “Caledon” as a brand are blurring those nodes. This guide keeps them separate.",
        ],
      },
      {
        h2: "A 2026 outlook without fake yields",
        paragraphs: [
          "The 2026 outlook for Caledon pre-construction is that more master-planned communities are registering or selling while interest-rate and qualification rules remain a closing-day risk, not only a signing-day risk. That combination favours investors who can fund deposits without stretching, who can close if assignment is blocked, and who refuse to underwrite off listing-site incentives. It punishes investors who need a 2028 occupancy, a free assignment, and a 5% yield that no builder has published.",
          "For Caledon Station Homes specifically, the 2026 fact pattern is registration open, pricing not announced, occupancy unconfirmed with conflicting TBD/2028 mentions in secondary sources, and assignment unpublished. The correct 2026 posture is to watch the file, not to invent a cap rate so the year has a headline.",
        ],
      },
      {
        h2: "How to underwrite Caledon Station Homes when numbers appear",
        paragraphs: [
          "When a price list appears, start with price per square foot by collection — condominium, freehold townhome, single-family — not with a blended community average. Different tenures have different fee and renter profiles. Then fill gross yield, net yield, and cash-on-cash using the formulas on the investment-case page. If maintenance or POTL fees are still missing, stop. A net yield without fees is a marketing brochure.",
          "Next read the Agreement of Purchase and Sale for assignment, HST, occupancy, and levy pass-throughs. Then, and only then, compare the contract to Humber Station, SouthCal, and Upper Caledon East on the same checklist. Builder reputation is a tie-break after the numbers, not before. Argo Development Corp and its partners have GTA delivery records; Solmar, Arista/DECO/Opus, and CountryWide have theirs. Records are not substitutes for price.",
        ],
      },
      {
        h2: "Rental income, cap rate, and the Caledon stock problem",
        paragraphs: [
          "Pre-construction rental income Caledon conversations fail when they skip vacancy, fees, and the fact that much of Caledon's new supply is freehold product that a landlord must operate without a condo corporation's bulk services — or, conversely, condo product whose fees are unknown. Caledon's limited purpose-built rental stock is a genuine demand support. It is not a rent figure for a unit that has no size.",
          "A realistic cap rate for pre-construction in Caledon is the cap rate you calculate from that project's NOI and that project's price. There is no municipal cap rate that can be safely dropped onto Caledon Station Homes. Anyone publishing one before fees and price exist is filling empty cells.",
        ],
      },
      {
        h2: "Risks that do not go away if Caledon grows",
        paragraphs: [
          "Caledon's growth plan can be true and a given contract can still be a poor investment. Construction can run long. Lenders can decline at closing. Rates can reprice the debt. The occupancy-year resale market can be softer than the registration-year brochure market. Assignment can be forbidden. Those risks are why this guide's tone stays conditional even while it cites 300,000 people and 125,000 jobs as official-plan figures.",
          "Registering for investor updates on this site does not reduce those risks. It only shortens the time between a public confirmation and your ability to run the model. That is a modest, honest service, and it is the only one this independent resource can offer before the builder speaks.",
        ],
      },
      {
        h2: "Closing costs an investor should budget in Ontario, in general",
        paragraphs: [
          "What closing costs should investors budget for pre-construction in Caledon is a general Ontario question until a price exists. The usual stack is land transfer tax (municipal plus provincial in some GTA markets; confirm Caledon's applicability with a lawyer), legal fees and disbursements, title insurance, and any development levies the agreement passes through to the purchaser. HST treatment depends on use and on whether the event is a closing or an assignment. None of those line items can be quoted in dollars for Caledon Station Homes before the purchase price and the APS are public.",
          "Investors sometimes forget the carrying cost of deposits as a closing-adjacent cash need. If the deposit schedule is back-loaded, less cash leaves early; if it is front-loaded, opportunity cost rises. Caledon Station Homes has not published that schedule. Budget the category. Do not invent the percentages.",
        ],
      },
      {
        h2: "How this guide differs from buyer-intent coverage",
        paragraphs: [
          "Buyer-intent pages for Caledon Station Homes correctly rank for prices, floor plans, and VIP registration. This guide is written for a different keyword tier: Caledon Station Homes investment, ROI, rental yield, assignment policy, cap rate, and resale. The underlying public facts are the same. The sentences are not copied. The canonical tags on every URL here point at caledonstation.ca, never at another host.",
          "If you are an end user choosing a home to live in, the missing floor plans are the blocker. If you are an investor, the missing fee and assignment language are the blocker even after a pretty plan book exists. Keep those jobs separate and both research streams stay indexable.",
        ],
      },
    ],
  },
} as const;

export const FAQ_PREVIEW_INDICES = [0, 1, 4, 7, 10, 11] as const;

export const GROWTH_PLAN_SOURCE =
  "Town of Caledon, Future Caledon Official Plan (April 2026 consolidation), implementing the Region of Peel Official Plan approved by the Province on November 4, 2022. Table 4-1 minimum forecasts to 2051.";
