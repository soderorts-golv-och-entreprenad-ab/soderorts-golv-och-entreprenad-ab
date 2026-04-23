export interface NavLink {
  label: string;
  href: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  initials: string;
}

export interface Project {
  title: string;
  description: string;
  location: string;
  year: number;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
}
