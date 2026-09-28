export type ProjectCategory = 'all' | 'ai-products' | 'websites' | 'creative';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  categoryLabel: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  year: string;
  metrics: string;
  highlight: string;
  features: string[];
  challenge: string;
  solution: string;
  liveDemoNote?: string;
}

export interface Service {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  idealFor: string;
  turnaround: string;
}

export interface InquiryFormData {
  name: string;
  email: string;
  serviceType: string;
  timeline: string;
  budgetRange: string;
  ideaDescription: string;
}
