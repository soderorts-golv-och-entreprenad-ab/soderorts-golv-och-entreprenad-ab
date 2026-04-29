import type {
  AboutContent,
  ContactInfo,
  HeroContent,
  NavLink,
  Project,
  TeamMember,
} from "./types";

export const companyName = "Söderorts Golv och Entreprenad AB";
export const companyShortName = "Söderorts Golv";
export const brandMonogram = "SG";

export const navLinks: NavLink[] = [
  { label: "Hem", href: "#hem" },
  { label: "Om oss", href: "#om-oss" },
  { label: "Projekt", href: "#projekt" },
  { label: "Vårt team", href: "#vart-team" },
];

export const heroContent: HeroContent = {
  claim: "Vi bygger kvalitetsgolv sedan 2009.",
  lead: "Hantverk, tydlig kommunikation och långsiktiga relationer — från första besök till slutbesiktning.",
  cta: "Se våra projekt",
  ctaHref: "#projekt",
};

export const aboutContent: AboutContent = {
  quote:
    "”Vi är ett litet sammansvetsat team som brinner för att bygga golv i högsta kvalitet efter erat behov”",
  paragraphs: [
    "På Söderorts Golv och Entreprenad AB brinner vi för hantverket och för att skapa miljöer där människor trivs. För oss handlar golv inte bara om material – det handlar om känslan i ett rum, helheten i ett hem och detaljerna som gör skillnad.",
    "Vi är ett mindre, personligt företag som sätter stolthet i varje uppdrag vi tar oss an. Oavsett om det gäller en mindre golvläggning eller ett större projekt möter vi varje kund med samma engagemang, noggrannhet och respekt för både tid och budget.",
    "Med erfarenhet, yrkesskicklighet och ett öga för detaljer ser vi till att arbetet blir rätt från början. Vi tror på raka besked, tydlig kommunikation och långsiktiga relationer – många av våra kunder kommer till oss via rekommendationer, vilket vi ser som det finaste betyget vi kan få.",
  ],
};

export const teamMembers: TeamMember[] = [
  {
    name: "Anders Lindqvist",
    role: "Grundare & VD",
    bio: "25 års erfarenhet inom golvbranschen. Driver företaget med passion för hantverk och hållbara material.",
    email: "anders@soderortsgolv.se",
  },
  {
    name: "Maria Bergström",
    role: "Projektledare",
    bio: "Håller ihop alla trådar och ser till att varje projekt levereras i tid och med högsta kvalitet.",
    email: "maria@soderortsgolv.se",
  },
  {
    name: "Erik Johansson",
    role: "Golvläggare",
    bio: "Specialist på parkett och massivträgolv. Noggrann hantverkare med skarpt öga för detaljer.",
    email: "erik@soderortsgolv.se",
  },
  {
    name: "Sara Nyman",
    role: "Golvläggare",
    bio: "Expert på linoleum- och vinylgolv i kommersiella miljöer och offentliga rum.",
    email: "sara@soderortsgolv.se",
  },
];

export const projects: Project[] = [
  {
    slug: "ekparkett-sodermalm",
    title: "Ekparkett på Södermalm",
    description:
      "Helrenovering av 120 kvm bostad med massiv ekparkett, golvvärme och handslipad yta.",
    location: "Södermalm, Stockholm",
    year: 2025,
    client: "Privatperson",
    area: "120 kvm",
    scope: [
      "Rivning av befintligt golv",
      "Installation av golvvärme",
      "Massiv ekparkett, 21 mm",
      "Handslipning och oljebehandling",
    ],
    story: [
      "En klassisk sekelskiftslägenhet på Södermalm fick nytt liv när vi ersatte det slitna laminatgolvet med en massiv ekparkett i 21 mm tjocklek. Kunden ville behålla rummens varma karaktär men samtidigt få in ett mer modernt uttryck.",
      "Innan parketten lades installerade vi vattenburen golvvärme i hela bostaden. Slipningen utfördes för hand i tre steg och avslutades med en hårdvaxolja som lyfter ekens naturliga ådring utan att göra ytan blank.",
      "Hela projektet — från rivning till slutbesiktning — genomfördes på sex veckor.",
    ],
  },
  {
    slug: "kontor-slussen",
    title: "Kontorslokaler vid Slussen",
    description:
      "1 800 kvm linoleumgolv i öppet kontorslandskap för ett snabbväxande tech-bolag.",
    location: "Slussen, Stockholm",
    year: 2024,
    client: "Tech-bolag (NDA)",
    area: "1 800 kvm",
    scope: [
      "Avjämning av betongbjälklag",
      "Linoleum från Forbo, 2,5 mm",
      "Akustikmatta i mötesrum",
      "Trösklar i massiv ek",
    ],
    story: [
      "Ett snabbväxande tech-bolag flyttade in i tre våningsplan vid Slussen och behövde ett golv som tål hög belastning, är ljudabsorberande och åldras vackert. Vi valde linoleum från Forbo i två toner för att markera olika zoner.",
      "Arbetet utfördes i etapper kvällstid och under helger så att verksamheten kunde fortgå. Avjämningen av det 60-åriga betongbjälklaget var den största utmaningen — vi använde självflytande spackel i tre lager för att nå tillräcklig planhet.",
    ],
  },
  {
    slug: "skola-huddinge",
    title: "Skola i Huddinge",
    description:
      "Nytt vinylgolv i 15 klassrum och korridorer — hela projektet slutfört under sommarlovet.",
    location: "Huddinge",
    year: 2024,
    client: "Huddinge kommun",
    area: "950 kvm",
    scope: [
      "Demontering av plastmatta",
      "Spackling och primning",
      "Heterogent vinylgolv, slitstyrka 34",
      "Kantsvetsning och hålkäl",
    ],
    story: [
      "En grundskola i Huddinge behövde ersätta sina plastmattor från 80-talet. Hela projektet — 15 klassrum, två korridorer och ett personalrum — skulle vara klart innan höstterminen, vilket gav oss exakt åtta veckor.",
      "Vi delade in arbetet i fem zoner och arbetade parallellt med tre lag. Det nya vinylgolvet är heterogent, har slitstyrka 34 och kantsvetsade fogar för enkel städning.",
    ],
  },
  {
    slug: "restaurang-gamla-stan",
    title: "Restaurang i Gamla Stan",
    description:
      "Slipning och oljebehandling av äldre furugolv. Vi bevarade den ursprungliga karaktären.",
    location: "Gamla Stan, Stockholm",
    year: 2023,
    client: "Restaurangägare",
    area: "85 kvm",
    scope: [
      "Försiktig slipning, 3 steg",
      "Lagning av enstaka brädor",
      "Pigmenterad olja",
      "Underhållsråd och kit",
    ],
    story: [
      "Ett furugolv från sent 1800-tal i en restaurang i Gamla Stan hade slitits ner under decennier. Ägaren ville inte byta golvet — patinan och de breda brädorna var en del av rummets själ — utan att ge det nytt liv.",
      "Vi slipade ytan i tre steg med varsamma korn för att inte tappa virkets karaktär. Enstaka brädor lagades med återbrukad fura från samma period.",
    ],
  },
];

export const contactInfo: ContactInfo = {
  phone: "+46 8 123 45 67",
  email: "info@soderortsgolv.se",
  address: "Storgatan 12, 123 45 Stockholm",
  instagramHandle: "@soderortsgolv",
  instagramUrl: "https://instagram.com/soderortsgolv",
};
