import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
  variant?: "light" | "muted";
}

function Section({ id, title, children, variant = "light" }: SectionProps) {
  return (
    <section id={id} className={`section section--${variant}`}>
      <div className="section__inner">
        <h2 className="section__title">{title}</h2>
        {children}
      </div>
    </section>
  );
}

export default Section;
