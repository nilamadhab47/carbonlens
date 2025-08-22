export const siteConfig = {
  name: "CarbonLens",
  description: "Automated carbon reports your auditors won't argue with",
  tagline: "Turn activity data into BRSR/CSRD-ready disclosures using NASA-grade Earth intelligence + LLMs",
  url: "https://carbonlens.com",
  ogImage: "https://carbonlens.com/og.jpg",
  links: {
    twitter: "https://twitter.com/carbonlens",
    github: "https://github.com/carbonlens",
  },
}

export const navigation = [
  { name: "Features", href: "#features" },
  { name: "How it works", href: "#how-it-works" },
  { name: "Pricing", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
]

export const features = [
  {
    icon: "FileText",
    title: "BRSR-ready tables",
    description: "Generate compliant BRSR Annexure tables with proper formatting and required disclosures.",
  },
  {
    icon: "Zap",
    title: "CEA grid factors",
    description: "Integrated Central Electricity Authority emission factors for accurate Scope 2 calculations.",
  },
  {
    icon: "Truck",
    title: "WRI/Shakti transport factors",
    description: "Comprehensive transport emission factors from WRI India and Shakti Foundation databases.",
  },
  {
    icon: "Network",
    title: "Supply-chain Scope 3 (lite)",
    description: "Streamlined Scope 3 calculations for key upstream and downstream activities.",
  },
  {
    icon: "Download",
    title: "One-click PDF",
    description: "Export professional reports ready for audit submission and stakeholder review.",
  },
  {
    icon: "Map",
    title: "Leaflet/Maps overlays",
    description: "Visualize facility locations and emission hotspots with interactive mapping.",
  },
]

export const metrics = [
  {
    value: 80,
    suffix: "%",
    prefix: "↓ ",
    label: "reporting time",
    description: "Target reduction vs traditional approaches",
  },
  {
    value: 30,
    suffix: "%",
    prefix: "↑ ",
    label: "cost savings",
    description: "Projected savings vs external consultants",
  },
  {
    value: 5,
    suffix: " min",
    prefix: "≤ ",
    label: "to first draft",
    description: "Planned time from data upload to draft",
  },
]

export const comparison = {
  headers: ["Feature", "CarbonLens", "Consultants", "DIY Excel"],
  rows: [
    ["Time to report", "< 1 week", "2-3 months", "3-6 months"],
    ["Cost per report", "₹50K-1L", "₹5L-15L", "Internal cost"],
    ["Audit readiness", "High", "High", "Variable"],
    ["Data accuracy", "NASA-grade", "Consultant-dependent", "Manual errors"],
    ["Regulatory updates", "Automatic", "Manual", "Manual"],
    ["Scalability", "Unlimited", "Resource-bound", "Time-intensive"],
  ],
}

export const useCases = [
  {
    title: "Textiles exporter",
    inputs: ["Production volumes", "Energy consumption", "Transport data"],
    outputs: ["BRSR Core tables", "Scope 1,2,3 calculations", "Methodology appendix"],
    description: "Export-oriented textile manufacturer with complex supply chain footprint.",
  },
  {
    title: "Steel & cement",
    inputs: ["Process emissions", "Fuel consumption", "Raw materials"],
    outputs: ["Industry-specific factors", "Process emission calculations", "Compliance mapping"],
    description: "Heavy industry with significant process emissions and regulatory requirements.",
  },
  {
    title: "Food & agri",
    inputs: ["Agricultural data", "Cold chain logistics", "Packaging materials"],
    outputs: ["Land use calculations", "Supply chain emissions", "Seasonal reporting"],
    description: "Food processing company with agricultural supply chain dependencies.",
  },
]

export const testimonials = [
  // Testimonials will be added as we get real pilot customers
]

export const pricing = {
  title: "Founder Pilot Program",
  price: "₹2,50,000",
  period: "for 6 months",
  description: "Early access with founder support and custom factor development",
  features: [
    "Up to 12 quarterly reports",
    "Custom emission factors",
    "1:1 onboarding session",
    "Direct founder support",
    "API access (beta)",
    "Priority feature requests",
  ],
  cta: "Join Pilot Program",
}

export const faqs = [
  {
    question: "How secure is our data with CarbonLens?",
    answer: "All data is encrypted in transit and at rest. We follow SOC 2 Type II standards and maintain strict data residency in India. Your data never leaves our secure infrastructure.",
  },
  {
    question: "What emission factor sources do you use?",
    answer: "We integrate CEA grid factors, WRI India transport factors, Shakti Foundation databases, and IEA country-specific factors. All sources are regularly updated and auditable.",
  },
  {
    question: "What's the difference between BRSR and CSRD support?",
    answer: "BRSR support is production-ready with full Annexure mapping. CSRD support is in development for 2024, focusing on ESRS E1 climate disclosures.",
  },
  {
    question: "Which Scope 3 categories are covered?",
    answer: "Currently covers Categories 1, 3, 4, 6, 7, and 9. Full 15-category coverage planned for Q2 2024 based on pilot feedback.",
  },
  {
    question: "Can I customize emission factors for my industry?",
    answer: "Yes, pilot participants get custom factor development. We work with your team to create industry-specific calculations and methodologies.",
  },
  {
    question: "What data formats do you accept?",
    answer: "Excel, CSV, and API integrations. We also support direct connections to ERP systems like SAP and Oracle for automated data flows.",
  },
  {
    question: "How does the NASA Harvest integration work?",
    answer: "We use NASA's Galileo platform for satellite-based land use and deforestation monitoring, providing third-party verified land-use change data.",
  },
  {
    question: "What support is included in the pilot program?",
    answer: "Direct access to founders, weekly check-ins, custom methodology development, and priority support for urgent reporting deadlines.",
  },
]

export const trustLogos = [
  { name: "NASA Harvest", logo: "/logos/nasa-harvest.svg" },
  { name: "Open Data India", logo: "/logos/open-data-india.svg" },
  { name: "GHG Protocol", logo: "/logos/ghg-protocol.svg" },
]
