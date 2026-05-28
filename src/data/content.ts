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
    title: 'Nutritional Manufacturing',
    description: 'Large-scale production systems for fortified and nutritional food solutions designed to meet institutional quality standards.',
    icon: 'Wheat',
  },
  {
    title: 'Institutional Supply',
    description: 'Reliable execution for public welfare, ICDS, mid-day meal schemes, and institutional distribution programs across 600+ districts.',
    icon: 'Building2',
  },
  {
    title: 'Food Fortification',
    description: 'Advanced vitamin-mineral premixes, fortified rice kernels, and quality-controlled nutritional enhancement at scale.',
    icon: 'FlaskConical',
  },
  {
    title: 'Sustainable Operations',
    description: 'Responsible sourcing, energy-efficient manufacturing, waste reduction, and long-term ecosystem thinking.',
    icon: 'Leaf',
  },
];

export const impactMetrics: ImpactMetric[] = [
  {
    value: 35,
    suffix: '+',
    label: 'Years of Legacy',
    description: 'Decades of trusted food manufacturing since 1986',
  },
  {
    value: 600,
    suffix: '+',
    label: 'Districts Served',
    description: 'Reaching communities across the length of India',
  },
  {
    value: 280,
    suffix: '+',
    label: 'MT Daily Production',
    description: 'Metric tonnes of nutritional food produced every day',
  },
  {
    value: 25,
    suffix: '+',
    label: 'Government Programs',
    description: 'Active partnerships with state and central programs',
  },
];

export const certifications: Certification[] = [
  { name: 'ISO 22000:2018', fullName: 'Food Safety Management System' },
  { name: 'FSSAI', fullName: 'Food Safety & Standards Authority of India' },
  { name: 'GMP', fullName: 'Good Manufacturing Practices' },
  { name: 'APEDA', fullName: 'Agricultural & Processed Food Products Export' },
  { name: 'MSME', fullName: 'Micro, Small & Medium Enterprises' },
];

export const manufacturingFeatures: ManufacturingFeature[] = [
  {
    title: 'Hygiene Standards',
    description: 'ISO-certified clean rooms and automated sanitization systems ensure food-grade purity at every stage.',
  },
  {
    title: 'Precision Engineering',
    description: 'Computer-controlled mixing, blending, and fortification processes for consistent nutritional profiles.',
  },
  {
    title: 'Scale & Capacity',
    description: '280+ MT daily production across general manufacturing, proprietary foods, and fortification lines.',
  },
  {
    title: 'Quality Systems',
    description: 'Multi-point laboratory testing, traceability protocols, and real-time quality monitoring.',
  },
];

// Expanded page content

export const aboutPageContent = {
  headline: 'Building Nutrition Infrastructure for a Growing India',
  intro: 'UV Foods Private Limited operates at the intersection of food science, institutional scale, and social impact — delivering nutrition solutions that reach millions across India.',
  sections: [
    {
      title: 'Our Mission',
      body: 'To fight hunger and malnutrition by delivering safe, high-quality nutritional food solutions to every corner of India through institutional partnerships and sustainable manufacturing.',
    },
    {
      title: 'Our Vision',
      body: "To be India's most trusted partner in nutritional food manufacturing — empowering communities, strengthening public welfare programs, and building food systems for the future.",
    },
    {
      title: 'Manufacturing Philosophy',
      body: 'We combine decades of food manufacturing heritage with modern food science. Every product is designed for institutional-grade quality, nutritional completeness, and supply chain reliability.',
    },
  ],
  stats: [
    { value: '25+', label: 'Government Partnerships' },
    { value: '30+', label: 'Nutritional Products' },
    { value: '3', label: 'Generations of Leadership' },
  ],
};

export const sustainabilityPageContent = {
  headline: 'Food Systems Built for the Future',
  intro: 'Our commitment extends beyond manufacturing. We build sustainable food ecosystems that benefit farmers, communities, and future generations.',
  pillars: [
    {
      title: 'Responsible Sourcing',
      description: 'Direct partnerships with farming communities ensure quality raw materials while supporting rural livelihoods and fair agricultural practices.',
    },
    {
      title: 'Community Nutrition',
      description: 'Delivering fortified meals to children and mothers through ICDS, mid-day meal schemes, and public distribution systems across India.',
    },
    {
      title: 'Food Accessibility',
      description: 'Designing nutrition solutions that reach underserved communities — making quality food available where it matters most.',
    },
    {
      title: 'Sustainable Production',
      description: 'Energy-efficient manufacturing, waste reduction initiatives, and responsible resource management across all operations.',
    },
    {
      title: 'Future-Focused Infrastructure',
      description: 'Investing in modern processing technology and quality systems that scale sustainably while maintaining nutritional integrity.',
    },
  ],
};

export const infrastructurePageContent = {
  headline: 'Precision at Every Stage',
  intro: 'Our manufacturing facility in Chhata, Mathura operates across multiple production lines — combining industrial scale with pharmaceutical-grade precision.',
  productionLines: [
    {
      category: 'General Manufacturing',
      capacity: '180 MT/day',
      products: ['Soya Flour', 'Semolina', 'Wheat Flour', 'Bengal Gram', 'Sorghum Flour'],
    },
    {
      category: 'Proprietary Foods',
      capacity: '80 MT/day',
      products: ['Dalia', 'Sattu', 'Murmura', 'Halwa Mix', 'Upma Mix'],
    },
    {
      category: 'Fortification',
      capacity: '20 MT/day',
      products: ['Fortified Rice Kernels', 'Vitamin Premix', 'Mineral Premix', 'Supplements'],
    },
  ],
  qualityProcess: [
    { step: 'Inbound Testing', description: 'Raw material quality verification at intake' },
    { step: 'Process Control', description: 'Real-time monitoring of production parameters' },
    { step: 'Lab Analysis', description: 'Multi-point nutritional and safety testing' },
    { step: 'Final Inspection', description: 'Packaging integrity and batch certification' },
  ],
};
