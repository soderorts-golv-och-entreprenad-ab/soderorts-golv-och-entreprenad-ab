import TeamCard from "../components/TeamCard";
import { teamMembers } from "../data";

function Team() {
  return (
    <section id="vart-team" className="sg-band sg-band--paper">
      <div className="sg-band__inner">
        <h2 className="sg-section-head sg-section-head--center sg-section-head--ink">
          Vårt team
        </h2>
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
