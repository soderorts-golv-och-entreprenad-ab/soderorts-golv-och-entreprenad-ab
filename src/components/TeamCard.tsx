import type { CSSProperties } from "react";
import type { TeamMember } from "../types";

interface TeamCardProps {
  member: TeamMember;
}

function TeamCard({ member }: TeamCardProps) {
  const photoStyle: CSSProperties | undefined = member.photo
    ? { backgroundImage: `url(${member.photo})` }
    : undefined;

  return (
    <article className="sg-teammate">
      <div
        className="sg-teammate__photo"
        style={photoStyle}
        aria-hidden="true"
      />
      <div className="sg-teammate__body">
        <h3 className="sg-teammate__name">{member.name}</h3>
        <p className="sg-teammate__role">{member.role}</p>
        <p className="sg-teammate__bio">{member.bio}</p>
        {member.email && (
          <a className="sg-teammate__email" href={`mailto:${member.email}`}>
            <span>{member.email}</span>
          </a>
        )}
      </div>
    </article>
  );
}

export default TeamCard;
