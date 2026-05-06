import { servicesContent } from "../data";
import type { ServiceKind } from "../types";

const iconProps = {
  viewBox: "0 0 48 48",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} as const;

function FloorIcon() {
  return (
    <svg {...iconProps}>
      <rect x="6" y="10" width="36" height="6" rx="1" />
      <rect x="6" y="20" width="36" height="6" rx="1" />
      <rect x="6" y="30" width="36" height="6" rx="1" />
      <line x1="18" y1="10" x2="18" y2="16" />
      <line x1="30" y1="20" x2="30" y2="26" />
      <line x1="22" y1="30" x2="22" y2="36" />
    </svg>
  );
}

function SandIcon() {
  return (
    <svg {...iconProps}>
      <rect x="8" y="14" width="24" height="14" rx="2" />
      <path d="M32 18h6a3 3 0 0 1 3 3v0a3 3 0 0 1-3 3h-6" />
      <line x1="8" y1="34" x2="32" y2="34" />
      <line x1="14" y1="34" x2="14" y2="38" />
      <line x1="20" y1="34" x2="20" y2="38" />
      <line x1="26" y1="34" x2="26" y2="38" />
    </svg>
  );
}

function BuildIcon() {
  return (
    <svg {...iconProps}>
      <path d="M9 27l18-18 12 12-18 18z" />
      <line x1="14" y1="22" x2="17" y2="25" />
      <line x1="19" y1="17" x2="22" y2="20" />
      <line x1="24" y1="12" x2="27" y2="15" />
      <path d="M30 36l4 4 6-6-4-4" />
    </svg>
  );
}

function ConsultIcon() {
  return (
    <svg {...iconProps}>
      <path d="M8 12h28a3 3 0 0 1 3 3v16a3 3 0 0 1-3 3H20l-8 6v-6h-4a3 3 0 0 1-3-3V15a3 3 0 0 1 3-3z" />
      <line x1="14" y1="20" x2="30" y2="20" />
      <line x1="14" y1="26" x2="26" y2="26" />
    </svg>
  );
}

const ICONS: Record<ServiceKind, () => React.JSX.Element> = {
  floor: FloorIcon,
  sand: SandIcon,
  build: BuildIcon,
  consult: ConsultIcon,
};

function Services() {
  return (
    <section id="tjanster" className="sg-band sg-band--paper sg-services">
      <div className="sg-band__inner">
        <header className="sg-services__head">
          <p className="sg-eyebrow">{servicesContent.eyebrow}</p>
          <h2 className="sg-section-head sg-section-head--ink sg-services__title">
            {servicesContent.headline}
          </h2>
          <p className="sg-services__intro">{servicesContent.intro}</p>
        </header>

        <div className="sg-services__grid">
          {servicesContent.items.map((item) => {
            const Icon = ICONS[item.kind];
            return (
              <article key={item.kind} className="sg-services__card">
                <span className="sg-services__icon" aria-hidden="true">
                  <Icon />
                </span>
                <h3 className="sg-services__card-title">{item.title}</h3>
                <p className="sg-services__card-body">{item.body}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
