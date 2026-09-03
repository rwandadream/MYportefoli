type SkillGroup = { title: string; tone: string; skills: string[] }

type SkillsProps = {
  skillGroups: SkillGroup[]
}

import Reveal from './motion/Reveal'

export default function Skills({ skillGroups }: SkillsProps) {
  return (
    <section className="journey section-rule" id="journey">
      <Reveal variant="fade">
        <div className="section-heading">
          <p className="section-index">03 / Technical journey</p>
          <p className="section-note">No percentages. Just an honest snapshot.</p>
        </div>
      </Reveal>
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div className={`skill-group ${group.tone}`} key={group.title}>
            <h3>{group.title}</h3>
            <div className="skill-list">
              {group.skills.map((skill) => <span key={skill}>{skill}</span>)}
            </div>
          </div>
        ))}
      </div>
      <Reveal variant="fade" delay={80}>
        <div className="learning-strip">
          <span>Currently deepening</span>
          <p>Full-stack architecture <i>&middot;</i> APIs <i>&middot;</i> Databases <i>&middot;</i> Authentication <i>&middot;</i> Testing <i>&middot;</i> Deployment</p>
        </div>
      </Reveal>
    </section>
  )
}
