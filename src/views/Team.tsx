import TeamCard from "../components/TeamCard";
import { teamContent, teamMembers } from "../data";

function Team() {
  return (
    <section id="vart-team" className="sg-band sg-band--mist">
      <div className="sg-band__inner">
        <header className="sg-team__head">
          <p className="sg-eyebrow">{teamContent.eyebrow}</p>
          <h2 className="sg-section-head sg-section-head--ink sg-team__title">
            {teamContent.headline}
          </h2>
          <p className="sg-team__intro">{teamContent.intro}</p>
        </header>
        <div className="sg-team__grid">
          {teamMembers.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
