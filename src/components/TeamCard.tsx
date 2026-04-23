import type { TeamMember } from "../types";

interface TeamCardProps {
  member: TeamMember;
}

function TeamCard({ member }: TeamCardProps) {
  return (
    <article className="team-card">
      <div className="team-card__avatar" aria-hidden="true">
        {member.initials}
      </div>
      <h3 className="team-card__name">{member.name}</h3>
      <p className="team-card__role">{member.role}</p>
      <p className="team-card__bio">{member.bio}</p>
    </article>
  );
}

export default TeamCard;
