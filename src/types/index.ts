export interface NavigationItem {
  name: string;
  href: string;
}

export interface Capability {
  title: string;
  description: string;
  icon: string;
}

export interface ImpactMetric {
  value: number;
  suffix: string;
  label: string;
  description: string;
}

export interface Certification {
  name: string;
  fullName: string;
}

export interface ManufacturingFeature {
  title: string;
  description: string;
}
