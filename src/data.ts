import type { ContactInfo, NavLink, Project, TeamMember } from "./types";

export const companyName = "Söderorts Golv och Entreprenad AB";
export const companyShortName = "Söderorts Golv";
export const tagline = "Golv i världsklass — från idé till färdig yta.";

export const navLinks: NavLink[] = [
  { label: "Om oss", href: "#om-oss" },
  { label: "Team", href: "#team" },
  { label: "Projekt", href: "#projekt" },
  { label: "Kontakt", href: "#kontakt" },
];

export const aboutText =
  "Söderorts Golv och Entreprenad AB är ett familjeföretag med över 25 års erfarenhet av golvläggning i Stockholmsområdet. Vi arbetar med allt från massiv parkett och linoleum till slipning och oljebehandling av äldre trägolv. Vår styrka är personligt engagemang, gediget hantverk och kvalitetsmaterial — för golv som håller i generationer.";

export const teamMembers: TeamMember[] = [
  {
    name: "Anders Lindqvist",
    role: "Grundare & VD",
    bio: "25 års erfarenhet inom golvbranschen. Driver företaget med passion för hantverk och hållbara material.",
    initials: "AL",
  },
  {
    name: "Maria Bergström",
    role: "Projektledare",
    bio: "Håller ihop alla trådar och ser till att varje projekt levereras i tid och med högsta kvalitet.",
    initials: "MB",
  },
  {
    name: "Erik Johansson",
    role: "Golvläggare",
    bio: "Specialist på parkett och massivträgolv. Noggrann hantverkare med skarpt öga för detaljer.",
    initials: "EJ",
  },
  {
    name: "Sara Nyman",
    role: "Golvläggare",
    bio: "Expert på linoleum- och vinylgolv i kommersiella miljöer och offentliga rum.",
    initials: "SN",
  },
];

export const projects: Project[] = [
  {
    title: "Ekparkett på Södermalm",
    description:
      "Helrenovering av 120 kvm bostad med massiv ekparkett, golvvärme och handslipad yta.",
    location: "Stockholm",
    year: 2025,
  },
  {
    title: "Kontorslokaler vid Slussen",
    description:
      "1 800 kvm linoleumgolv i öppet kontorslandskap för ett snabbväxande tech-bolag.",
    location: "Stockholm",
    year: 2024,
  },
  {
    title: "Skola i Huddinge",
    description:
      "Nytt vinylgolv i 15 klassrum och korridorer — hela projektet slutfört under sommarlovet.",
    location: "Huddinge",
    year: 2024,
  },
  {
    title: "Restaurang i Gamla Stan",
    description:
      "Slipning och oljebehandling av äldre furugolv. Vi bevarade den ursprungliga karaktären.",
    location: "Stockholm",
    year: 2023,
  },
];

export const contactInfo: ContactInfo = {
  phone: "+46 8 123 45 67",
  email: "info@soderortsgolv.se",
  address: "Storgatan 12, 123 45 Stockholm",
  instagramHandle: "@soderortsgolv",
  instagramUrl: "https://instagram.com/soderortsgolv",
};
