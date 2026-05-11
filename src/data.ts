import apoteaLogo from "./assets/partners/apotea.png";
import karolinskaLogo from "./assets/partners/karolinska.png";
import branschvinnare from "./assets/certificates/branschvinnare-2025.webp";
import byggforetagen from "./assets/certificates/byggforetagen-medlem.png";
import ucSigill from "./assets/certificates/uc-sigill.png";
import ucTillvaxt from "./assets/certificates/uc-tillvaxtcertifikat.png";
import floorPhoto from "./assets/floor-pattern.png";
import portraitPhoto from "./assets/portrait-placeholder.png";

import type {
  AboutContent,
  Certificate,
  ContactInfo,
  HeroContent,
  NavLink,
  Partner,
  Project,
  ServicesContent,
  TeamContent,
  TeamMember,
} from "./types";

export const companyName = "Söderorts Golv och Entreprenad AB";
export const companyShortName = "Söderorts Golv";
export const companySubmark = "& entreprenad AB";
export const brandMonogram = "SG";

export const navLinks: NavLink[] = [
  { label: "Hem", href: "#hem" },
  { label: "Tjänster", href: "#tjanster" },
  { label: "Projekt", href: "#projekt" },
  { label: "Om oss", href: "#om-oss" },
  { label: "Vårt team", href: "#vart-team" },
];

export const heroContent: HeroContent = {
  claim: "Allt inom bygg och golv — kvalitet i varje steg",
  lead: "Hantverk, tydlig kommunikation och långsiktiga relationer — från första besök till slutbesiktning.",
  primaryCta: { label: "Se våra projekt", href: "#projekt" },
  secondaryCta: { label: "Kontakta oss", href: "#kontakt" },
};

export const aboutContent: AboutContent = {
  eyebrow: "Om oss",
  headline: "Vilka vi är",
  paragraphs: [
    "På Söderorts Golv och Entreprenad AB brinner vi för hantverket och för att skapa miljöer där människor trivs. För oss handlar golv inte bara om material – det handlar om känslan i ett rum, helheten i ett hem och detaljerna som gör skillnad.",
    "Vi är ett mindre, personligt företag som sätter stolthet i varje uppdrag vi tar oss an. Oavsett om det gäller en mindre golvläggning eller ett större projekt möter vi varje kund med samma engagemang, noggrannhet och respekt för både tid och budget.",
    "Med erfarenhet, yrkesskicklighet och ett öga för detaljer ser vi till att arbetet blir rätt från början. Vi tror på raka besked, tydlig kommunikation och långsiktiga relationer – många av våra kunder kommer till oss via rekommendationer, vilket vi ser som det finaste betyget vi kan få.",
  ],
};

export const servicesContent: ServicesContent = {
  eyebrow: "Tjänster",
  headline: "Vad vi gör",
  intro:
    "Från enskilda golvläggningar till helhetsentreprenader — vi tar hand om hela arbetet med samma omsorg för detaljer.",
  items: [
    {
      kind: "floor",
      title: "Golvläggning",
      body: "Parkett, massivträ, vinyl och linoleum. Rätt material för rummet, lagt med precision.",
    },
    {
      kind: "sand",
      title: "Slipning & ytbehandling",
      body: "Slipning, oljning och lackering av befintliga trägolv — vi återställer karaktären utan att förlora själen.",
    },
    {
      kind: "build",
      title: "Byggservice",
      body: "Snickeri, anpassningar och mindre ombyggnad i samband med golvarbetet — en entreprenör, ett ansvar.",
    },
    {
      kind: "consult",
      title: "Rådgivning & offert",
      body: "Platsbesök, materialval och tydlig offert utan kostnad. Du får svar inom ett dygn.",
    },
  ],
};

export const teamContent: TeamContent = {
  eyebrow: "Vårt team",
  headline: "Personerna bakom",
  intro:
    "Ett litet team med stort engagemang. Vi är hantverkare, projektledare och rådgivare som arbetat tillsammans i många år — och varje projekt går genom samma personer från första samtal till slutbesiktning.",
};

export const teamMembers: TeamMember[] = [
  { name: "Anders Lindqvist", role: "Grundare & VD", email: "anders@soderortsgolv.se", photo: portraitPhoto },
  { name: "Maria Bergström", role: "Projektledare", email: "maria@soderortsgolv.se", photo: portraitPhoto },
  { name: "Erik Johansson", role: "Golvläggare", email: "erik@soderortsgolv.se", photo: portraitPhoto },
  { name: "Sofia Nilsson", role: "Inköpsansvarig", email: "sofia@soderortsgolv.se", photo: portraitPhoto },
  { name: "Johan Andersson", role: "Golvläggare", email: "johan@soderortsgolv.se", photo: portraitPhoto },
  { name: "Linnea Karlsson", role: "Kundansvarig", email: "linnea@soderortsgolv.se", photo: portraitPhoto },
  { name: "Mikael Holm", role: "Lärling", email: "mikael@soderortsgolv.se", photo: portraitPhoto },
  { name: "Karin Sundqvist", role: "Ekonomi & administration", email: "karin@soderortsgolv.se", photo: portraitPhoto },
];

export const projects: Project[] = [
  {
    slug: "ekparkett-sodermalm",
    title: "Ekparkett på Södermalm",
    description:
      "Helrenovering av 120 kvm bostad med massiv ekparkett, golvvärme och handslipad yta.",
    location: "Södermalm, Stockholm",
    year: 2025,
    photo: floorPhoto,
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
    photo: floorPhoto,
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
    photo: floorPhoto,
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
    photo: floorPhoto,
    story: [
      "Ett furugolv från sent 1800-tal i en restaurang i Gamla Stan hade slitits ner under decennier. Ägaren ville inte byta golvet — patinan och de breda brädorna var en del av rummets själ — utan att ge det nytt liv.",
      "Vi slipade ytan i tre steg med varsamma korn för att inte tappa virkets karaktär. Enstaka brädor lagades med återbrukad fura från samma period.",
    ],
  },
  {
    slug: "villa-saltsjobaden",
    title: "Villa i Saltsjöbaden",
    description:
      "Vitoljad ekparkett genom hela bottenvåningen. 240 kvm av sömlös ljus golvyta.",
    location: "Saltsjöbaden",
    year: 2024,
    photo: floorPhoto,
    story: [
      "En villa från 70-talet fick en ljus och modern bottenvåning med vitoljad ek.",
    ],
  },
  {
    slug: "butik-ostermalm",
    title: "Butik på Östermalm",
    description:
      "Polerad betong i ny flaggskeppsbutik. Minimalistisk yta som tål hög kundbelastning.",
    location: "Östermalm",
    year: 2024,
    photo: floorPhoto,
    story: ["En polerad betongyta som lyfter butikens minimalistiska uttryck."],
  },
];

export const partners: Partner[] = [
  { name: "Apotea", logo: apoteaLogo },
  { name: "Karolinska Universitetssjukhuset", logo: karolinskaLogo },
  { name: "Apotea", logo: apoteaLogo },
  { name: "Karolinska Universitetssjukhuset", logo: karolinskaLogo },
  { name: "Apotea", logo: apoteaLogo },
  { name: "Karolinska Universitetssjukhuset", logo: karolinskaLogo },
  { name: "Apotea", logo: apoteaLogo },
  { name: "Karolinska Universitetssjukhuset", logo: karolinskaLogo },
  { name: "Apotea", logo: apoteaLogo },
  { name: "Karolinska Universitetssjukhuset", logo: karolinskaLogo },
];

export const certificates: Certificate[] = [
  { name: "Branschvinnare 2025", logo: branschvinnare },
  { name: "Byggföretagen Medlem", logo: byggforetagen },
  { name: "UC Sigill", logo: ucSigill },
  { name: "Nordiskt Tillväxtcertifikat", logo: ucTillvaxt },
];

export const contactInfo: ContactInfo = {
  eyebrow: "Kontakt",
  heading: "Redo att starta en konversation?",
  sub: "Kontakta oss via mail så svarar vi så fort vi kan.",
  phone: "+46 703 33 33 33",
  email: "info@soderortsgolv.se",
  address: "Kardemummagränd 1, 135 36 Tyresö",
  instagramHandle: "soderortsgolv",
  instagramUrl: "https://instagram.com/soderortsgolv",
};

export const orgNumber = "556123-4567";
