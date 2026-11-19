export type ProjectCategory = 'Todos' | 'Residencial' | 'Comercial' | 'Interiores';

export type ProjectTypology = Exclude<ProjectCategory, 'Todos'>;

export interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
}

export interface ArchitecturalProject {
  id: string;
  title: string;
  category: ProjectTypology;
  year: string;
  area: string;
  location: string;
  summary: string;
  concept: string;
  materials: string[];
  coverImage: string;
  coverAlt: string;
  gallery: GalleryImage[];
  featured?: boolean;
}

export interface StudioMetric {
  id: string;
  value: number;
  suffix: string;
  label: string;
  detail: string;
}

export interface CreativeProcessStep {
  number: string;
  title: string;
  description: string;
  deliverable: string;
}

export interface ContactInquiry {
  name: string;
  email: string;
  phone: string;
  typology: string;
  area: string;
  message: string;
}
