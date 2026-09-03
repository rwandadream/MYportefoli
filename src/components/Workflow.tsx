type WorkflowProps = {
  workflow: [string, string, string][]
}

import Reveal from './motion/Reveal'

export default function Workflow({ workflow }: WorkflowProps) {
  return (
    <section className="process section-rule">
      <Reveal variant="fade">
        <div className="section-heading">
          <p className="section-index">04 / How I build</p>
          <p className="section-note">AI is part of the workflow, not the identity.</p>
        </div>
      </Reveal>
      <div className="workflow">
        {workflow.map(([number, title, copy], i) => (
          <Reveal key={number} delay={i * 70}>
            <div className="workflow-step">
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
