import { NavigationItem, Capability, ImpactMetric, Certification, ManufacturingFeature } from '../types';

export const navigation: NavigationItem[] = [
  { name: 'About', href: '/about' },
  { name: 'Capabilities', href: '/capabilities' },
  { name: 'Infrastructure', href: '/infrastructure' },
  { name: 'Sustainability', href: '/sustainability' },
  { name: 'Contact', href: '/contact' },
];

export const capabilities: Capability[] = [
  {
    title: 'Agricultural Sourcing',
    description: 'Procuring premium quality food grains and products directly from farmers, traders, and open markets across agricultural hubs.',
    icon: 'Wheat',
  },
  {
    title: 'Institutional Delivery',
    description: 'Providing seamless, FSSAI-compliant supply chains for public welfare programs and government institutions through cooperative channels.',
    icon: 'Building2',
  },
  {
    title: 'Value-Added Processing',
    description: 'Utilizing holding company manufacturing facilities to process food products at scale under strict safety and quality standards.',
    icon: 'Leaf',
  },
  {
    title: 'Regulatory Compliance',
    description: 'Operating with full FSSAI, APEDA, MSME, and Importer-Exporter Code (IEC) clearances for domestic and international trade.',
    icon: 'ShieldCheck',
  },
];

export const impactMetrics: ImpactMetric[] = [
  {
    value: 40,
    suffix: '+ Yrs',
    label: 'Holding Group Legacy',
    description: 'Decades of food manufacturing heritage via Suruchi Foods since 1986',
  },
  {
    value: 600,
    suffix: '+ MT',
    label: 'Combined Daily Capacity',
    description: 'Processing capacity across general and fortified foods in Mathura',
  },
  {
    value: 15,
    suffix: '+ Yrs',
    label: 'Leadership Experience',
    description: 'Co-founders experienced in food processing and restructuring',
  },
  {
    value: 100,
    suffix: '%',
    label: 'NCCF Activated Partner',
    description: 'Fully active under the National Cooperative Consumers Federation',
  },
];

export const certifications: Certification[] = [
  { name: 'FSSAI (Central)', fullName: 'License No. 13324999000097' },
  { name: 'FSSAI (State)', fullName: 'License No. 13322010000113' },
  { name: 'APEDA', fullName: 'Registration No. 218173' },
  { name: 'IEC (Importer-Exporter Code)', fullName: 'Code DLIIECPAMEND00087824AM24' },
  { name: 'MSME / Udyam', fullName: 'Registration No. UDYAM-DL-08-0025271' },
];

export const manufacturingFeatures: ManufacturingFeature[] = [
  {
    title: 'Mathura Sourcing Facility',
    description: 'Over 600 MT daily combined processing capacity via holding company Suruchi Foods, specializing in ready-to-eat and nutritional grains.',
  },
  {
    title: 'Upcoming Rajasthan Facility',
    description: 'UV Foods is currently establishing its own dedicated food processing unit in Rajasthan to expand direct trading and value addition.',
  },
  {
    title: 'Approved Cooperative Vendor',
    description: 'Active supply alignment with NCCF (Ministry of Consumer Affairs) to process and deliver grains directly for public distribution.',
  },
  {
    title: 'Stringent Quality Controls',
    description: 'Independent laboratory testing, batch traceability, and full compliance with APEDA export and FSSAI standards.',
  },
];

// Expanded page content

export const aboutPageContent = {
  headline: 'Redefining Food Sourcing and Processing for a Better Tomorrow',
  intro: 'UV Foods Private Limited operates at the intersection of agriculture, modern value-added processing, and institutional supply chains — bringing quality food grains and products to millions.',
  sections: [
    {
      title: 'Our Background & Legacy',
      body: "Incorporated in August 2021 as a Delhi-based company, UV Foods Private Limited is co-managed by experienced entrepreneurs and forms part of the UV Group. Our holding company, Suruchi Foods Private Limited, is a premier food manufacturer with nearly four decades of expertise (since 1986) in India's ready-to-eat and nutritional food sector.",
    },
    {
      title: 'Our Partner & Sourcing Model',
      body: "We operate as an approved vendor to institutional and government bodies. Currently, our partnership is fully activated with NCCF (National Cooperative Consumers' Federation of India Ltd under the Ministry of Consumer Affairs, Food & Public Distribution). We source food grains and products directly from farmers, traders, and open markets, supplying them reliably through cooperative tenders.",
    },
    {
      title: 'Our Commitment to Quality',
      body: 'Every crop we source and shipment we deliver undergoes strict quality inspection. By leveraging our holding company’s massive infrastructure and establishing our new facility, we ensure that premium, safe, and nutritious grains reach the market with absolute regulatory compliance.',
    },
  ],
  stats: [
    { value: '600+ MT', label: 'Mathura Plant Capacity' },
    { value: 'NCCF', label: 'Activated Government Partner' },
    { value: '1986', label: 'Group Founding Year' },
  ],
};

export const sustainabilityPageContent = {
  headline: 'Committed to Quality. Driven by Innovation.',
  intro: 'We build transparent agricultural supply chains that empower farmers, provide value-added processing, and secure consistent delivery for public welfare programs.',
  pillars: [
    {
      title: 'Empowering local farmers',
      description: 'Sourcing directly from farms and local markets to support rural agricultural livelihoods and secure fair trading prices.',
    },
    {
      title: 'National Cooperative Supply',
      description: "Direct alignment with the National Cooperative Consumers' Federation (NCCF) to fulfill large-scale institutional requirements.",
    },
    {
      title: 'Nutritional Access',
      description: 'Ensuring public distribution and welfare programs receive food grains processed under strict FSSAI guidelines.',
    },
    {
      title: 'Rajasthan Expansion',
      description: 'Investing in our upcoming processing unit in Rajasthan to increase regional sourcing and add local value closer to cultivation zones.',
    },
    {
      title: 'Traceability and Safety',
      description: 'Maintained through FSSAI and APEDA certifications, tracing crops from farms directly to state delivery channels.',
    },
  ],
};

export const infrastructurePageContent = {
  headline: 'Scale and Capabilities: Bridging Mathura and Rajasthan',
  intro: 'By leveraging the established 600+ MT daily facility of our holding company, Suruchi Foods, and constructing our own unit in Rajasthan, we offer unmatched scale.',
  productionLines: [
    {
      category: 'Mathura Facility (Suruchi Foods)',
      capacity: '600+ MT / Day Combined',
      products: ['General Food Manufacturing', 'Proprietary Food Products', 'Fortified Grains & Nutritional Items'],
    },
    {
      category: 'Rajasthan Facility (UV Foods)',
      capacity: 'Under Progress',
      products: ['Dedicated Food Processing', 'Agricultural Sourcing Hub', 'Value-Added Grain Cleaning & Packing'],
    },
  ],
  qualityProcess: [
    { step: 'Farmer & Market Procurement', description: 'Sourcing high-quality grains directly from verified farming communities and traders.' },
    { step: 'Holding Facility Processing', description: 'Processing and cleaning at the Mathura unit with FSSAI state & central compliance.' },
    { step: 'APEDA & IEC Standard Checks', description: 'Verifying batch specifications for quality, moisture, and trade guidelines.' },
    { step: 'Cooperative Logistics', description: 'Direct shipment to NCCF terminals and institutional distribution hubs.' },
  ],
};
