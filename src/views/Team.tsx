import Section from "../components/Section";
import TeamCard from "../components/TeamCard";
import { teamMembers } from "../data";

function Team() {
  return (
    <Section id="team" title="Vårt team" variant="muted">
      <div className="grid grid--team">
        {teamMembers.map((member) => (
          <TeamCard key={member.name} member={member} />
        ))}
      </div>
    </Section>
  );
}

export default Team;
