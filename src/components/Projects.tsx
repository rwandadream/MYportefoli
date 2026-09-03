import type { Project } from '../data'
import { featuredProjects } from '../data'
import Reveal from './motion/Reveal'
import FeaturedProject from './projects/FeaturedProject'

type ProjectsProps = {
  work: string
  workNote: string
  projects: Project[]
  isFrench: boolean
  viewLabel: string
  problemLabel: string
  solutionLabel: string
  featuresLabel: string
  techLabel: string
  otherNote: string
}

export default function Projects({
  work, workNote, projects, isFrench, viewLabel,
  problemLabel, solutionLabel, featuresLabel, techLabel, otherNote,
}: ProjectsProps) {
  const sarahModules = [
    { fr: 'Planification', en: 'Scheduling' },
    { fr: 'Examens', en: 'Exams' },
    { fr: 'Facturation', en: 'Billing' },
    { fr: 'V\u00e9hicules', en: 'Vehicles' },
  ]
  const apressModules = [
    { fr: 'Clients', en: 'Clients' },
    { fr: 'Services', en: 'Services' },
    { fr: 'Factures', en: 'Invoices' },
    { fr: 'Paiements', en: 'Payments' },
    { fr: 'Recouvrement', en: 'Recovery' },
    { fr: 'Rapports', en: 'Reports' },
  ]

  return (
    <section className="work section-rule" id="work">
      <Reveal>
        <div className="section-heading">
          <p className="section-index">{work}</p>
          <p className="section-note">{workNote}</p>
        </div>
      </Reveal>

      <div className="featured-projects">
        {featuredProjects.map((fp) => (
          <FeaturedProject
            key={fp.id}
            project={fp}
            modules={fp.id === 'sarah-auto' ? sarahModules : apressModules}
            isFrench={isFrench}
            viewLabel={viewLabel}
            problemLabel={problemLabel}
            solutionLabel={solutionLabel}
            featuresLabel={featuresLabel}
            techLabel={techLabel}
          />
        ))}
      </div>

      <div className="other-projects">
        <Reveal><h3 className="other-projects-title">{otherNote}</h3></Reveal>
        {projects.map((project) => (
          <Reveal key={project.name} variant="up" as="article" className="project-card-wrap">
            <div className="project-card">
              <div className="project-card-top">
                <span className="project-number">{project.number}</span>
                <span className="project-card-arrow" aria-hidden="true">&#8599;</span>
              </div>
              <h3>{project.name}</h3>
              <p className="project-label">{project.label}</p>
              <p className="project-description">{project.description}</p>
              <div className="tags">
                {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
