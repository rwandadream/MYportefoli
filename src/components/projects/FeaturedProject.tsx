import type { FeaturedProject } from '../../data'
import Reveal from '../motion/Reveal'
import TiltCard from '../motion/TiltCard'
import ProjectVisual from './ProjectVisual'

type FeaturedProjectProps = {
  project: FeaturedProject
  modules: { fr: string; en: string }[]
  isFrench: boolean
  viewLabel: string
  problemLabel: string
  solutionLabel: string
  featuresLabel: string
  techLabel: string
}

export default function FeaturedProject({
  project,
  modules,
  isFrench,
  viewLabel,
  problemLabel,
  solutionLabel,
  featuresLabel,
  techLabel,
}: FeaturedProjectProps) {
  const { caseStudy } = project

  return (
    <article className={`featured-project featured-${project.id}`} id={project.id}>
      <Reveal>
        <div className="featured-head">
          <span className="featured-number" style={{ color: project.accent }}>{project.number}</span>
          <h2 className="featured-title">{project.title}</h2>
          <p className="featured-category">{isFrench ? project.category.fr : project.category.en}</p>
        </div>
      </Reveal>

      <Reveal variant="scale" delay={80}>
        <div className="featured-tagline">{isFrench ? project.tagline.fr : project.tagline.en}</div>
      </Reveal>

      <Reveal variant="up" delay={120} className="featured-visual-wrap">
        <TiltCard className="featured-tilt">
          <ProjectVisual project={project} modules={modules} isFrench={isFrench} />
        </TiltCard>
      </Reveal>

      <div className="featured-layout">
        <Reveal variant="up" delay={60}>
          <div className="featured-block">
            <h3 className="featured-label">{problemLabel}</h3>
            <p>{isFrench ? caseStudy.problem.fr : caseStudy.problem.en}</p>
          </div>
        </Reveal>

        <Reveal variant="up" delay={120}>
          <div className="featured-block">
            <h3 className="featured-label">{solutionLabel}</h3>
            <p>{isFrench ? caseStudy.solution.fr : caseStudy.solution.en}</p>
          </div>
        </Reveal>
      </div>

      <Reveal variant="up" delay={100}>
        <div className="featured-block">
          <h3 className="featured-label">{featuresLabel}</h3>
          <ul className="featured-features">
            {caseStudy.features.map((f) => (
              <li key={f.fr}>{isFrench ? f.fr : f.en}</li>
            ))}
          </ul>
        </div>
      </Reveal>

      <Reveal variant="up" delay={80}>
        <div className="featured-footer">
          <div className="featured-tech">
            <h3 className="featured-label">{techLabel}</h3>
            <div className="tags">
              {project.technologies.map((t) => <span key={t}>{t}</span>)}
            </div>
          </div>
          <a
            className="featured-cta"
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            style={{ borderColor: project.accent, color: project.accent }}
          >
            {viewLabel} <span aria-hidden="true">&#8599;</span>
          </a>
        </div>
      </Reveal>

      {caseStudy.note && (
        <Reveal variant="fade" delay={60}>
          <p className="featured-note">{isFrench ? caseStudy.note.fr : caseStudy.note.en}</p>
        </Reveal>
      )}
    </article>
  )
}
