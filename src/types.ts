export interface NavLink {
  label: string;
  href: string;
}

export interface HeroContent {
  claim: string;
  lead: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
}

export interface AboutContent {
  eyebrow: string;
  headline: string;
  paragraphs: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  email?: string;
  photo?: string;
}

export interface TeamContent {
  eyebrow: string;
  headline: string;
  intro: string;
}

export type ServiceKind = "floor" | "sand" | "build" | "consult";

export interface Service {
  kind: ServiceKind;
  title: string;
  body: string;
}

export interface ServicesContent {
  eyebrow: string;
  headline: string;
  intro: string;
  items: Service[];
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  location: string;
  year: number;
  photo?: string;
  story?: string[];
}

export interface Partner {
  name: string;
  logo: string;
}

export interface Certificate {
  name: string;
  logo: string;
}

export interface ContactInfo {
  eyebrow: string;
  heading: string;
  sub: string;
  phone: string;
  email: string;
  address: string;
  instagramHandle: string;
  instagramUrl: string;
}
