export interface NavLink {
  label: string;
  href: string;
}

export interface HeroContent {
  claim: string;
  lead: string;
  cta: string;
  ctaHref: string;
}

export interface AboutContent {
  quote: string;
  paragraphs: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  email?: string;
  photo?: string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  location: string;
  year: number;
  photo?: string;
  client?: string;
  area?: string;
  story?: string[];
  scope?: string[];
  gallery?: string[];
}

export interface ContactInfo {
  heading: string;
  sub: string;
  phone: string;
  email: string;
  address: string;
  instagramHandle: string;
  instagramUrl: string;
}
