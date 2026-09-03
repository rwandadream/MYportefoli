import type { FeaturedProject } from '../../data'

type ProjectVisualProps = {
  project: FeaturedProject
  modules: { fr: string; en: string }[]
  isFrench: boolean
}

/**
 * Représentation éditoriale stylisée des écrans du produit.
 * Aucun screenshot réel n'existe dans le repo : on construit une
 * composition abstraite à partir des VRAIS libellés de modules,
 * prête à être remplacée par de vrais screenshots si besoin.
 */
export default function ProjectVisual({ project, modules, isFrench }: ProjectVisualProps) {
  const accent = project.accent
  const screens = project.screens

  return (
    <div className={`featured-visual visual-${project.id}`}>
      <div className="visual-stage" aria-hidden="true">
        <div className="visual-screen visual-screen-back">
          <span className="vs-bar">
            <i /><i /><i />
            <em>app</em>
          </span>
          <div className="vs-body">
            <span className="vs-line w60" />
            <span className="vs-line w40" />
            <div className="vs-bars">
              <i style={{ height: '34%', background: accent }} />
              <i style={{ height: '58%', background: accent, opacity: .8 }} />
              <i style={{ height: '44%', background: accent, opacity: .6 }} />
              <i style={{ height: '72%', background: accent }} />
              <i style={{ height: '50%', background: accent, opacity: .7 }} />
            </div>
          </div>
        </div>

        <div className="visual-screen visual-screen-front">
          <span className="vs-bar">
            <i /><i /><i />
            <em>{screens[0]}</em>
          </span>
          <div className="vs-body">
            <strong className="vs-kpi" style={{ color: accent }}>kpi</strong>
            <div className="vs-grid">
              {screens.slice(1).map((name) => (
                <span key={name} className="vs-module">{name}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="visual-accent" />
      </div>

      <div className="visual-modules">
        {modules.map((m) => (
          <span key={m.fr} className="visual-module-tag">{isFrench ? m.fr : m.en}</span>
        ))}
      </div>
    </div>
  )
}
