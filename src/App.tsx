import { useState, useEffect, useCallback } from 'react'
import { projects, skillGroups, workflow } from './data'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import ProjectsSection from './components/Projects'
import Skills from './components/Skills'
import WorkflowSection from './components/Workflow'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [language, setLanguage] = useState<'en' | 'fr'>('en')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const isFrench = language === 'fr'

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => prev === 'fr' ? 'en' : 'fr')
  }, [])

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen((prev) => !prev)
  }, [])

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false)
  }, [])

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  useEffect(() => {
    if (!mobileMenuOpen) return
    const handleResize = () => {
      if (window.innerWidth > 700) closeMobileMenu()
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [mobileMenuOpen, closeMobileMenu])

  const text = isFrench ? {
    navWork: 'Projets', navJourney: 'Parcours', navContact: 'Contact', availability: 'Ouvert aux \u00e9changes',
    eyebrow: 'D\u00e9veloppeur d\u2019applications / En formation',
    heroTitle: <>Construire des choses utiles<br /><em>en apprenant.</em></>,
    heroCopy: 'Je suis Hamadoun Oumarou Sidibe, d\u00e9veloppeur d\u2019applications en formation Full-Stack. Je con\u00e7ois, d\u00e9ploie et am\u00e9liore continuellement des applications web et mobiles.',
    view: 'Voir mes projets', talk: 'Parlons-en',
    about: '01 / \u00c0 propos',
    aboutTitle: <>Encore en apprentissage.<br /><em>D\u00e9j\u00e0 dans la pratique.</em></>,
    aboutCopy: 'J\u2019\u00e9tudie l\u2019informatique et je suis actuellement une formation orient\u00e9e Full-Stack. J\u2019apprends surtout en construisant : des applications web, des prototypes mobiles et des projets pratiques qui doivent fonctionner au-del\u00e0 de mon ordinateur.',
    aboutCopy2: 'Mon objectif est de cr\u00e9er des applications utiles, de comprendre comment elles sont con\u00e7ues et d\u2019am\u00e9liorer mes choix techniques un par un.',
    journeyLink: 'Voir mon parcours technique',
    work: '02 / Projets s\u00e9lectionn\u00e9s', workNote: 'Des produits que j\u2019ai con\u00e7us et construits.',
    viewProject: 'Voir le projet',
    problemLabel: 'Probl\u00e8me',
    solutionLabel: 'Solution',
    featuresLabel: 'Fonctionnalit\u00e9s',
    techLabel: 'Technologies',
    otherNote: 'Autres projets',
    contact: '05 / Me contacter',
    contactTitle: <>Construisons et<br /><em>apprenons ensemble.</em></>,
    contactCopy: 'Je suis ouvert aux opportunit\u00e9s, collaborations et environnements o\u00f9 je peux continuer \u00e0 apprendre tout en contribuant \u00e0 des projets utiles.',
    start: 'D\u00e9marrer une conversation',
  } : {
    navWork: 'Work', navJourney: 'Journey', navContact: 'Contact', availability: 'Open to conversations',
    eyebrow: 'Application developer / In training',
    heroTitle: <>Building useful things<br /><em>while learning.</em></>,
    heroCopy: 'I am Hamadoun Oumarou Sidibe, an application developer in full-stack training. I build, deploy and continuously improve web and mobile applications.',
    view: 'View my projects', talk: "Let's talk",
    about: '01 / About',
    aboutTitle: <>Still learning.<br /><em>Already building.</em></>,
    aboutCopy: 'I am studying computer science and currently training in full-stack development. I learn mostly by making: web applications, mobile prototypes and practical projects that have to work beyond my laptop.',
    aboutCopy2: 'My focus is on creating useful applications, understanding how they are put together and improving one technical decision at a time.',
    journeyLink: 'See my technical journey',
    work: '02 / Selected work', workNote: 'Products I designed and built.',
    viewProject: 'View project',
    problemLabel: 'Problem',
    solutionLabel: 'Solution',
    featuresLabel: 'Features',
    techLabel: 'Technologies',
    otherNote: 'Other projects',
    contact: "05 / Let's connect",
    contactTitle: <>Let's build and<br /><em>learn together.</em></>,
    contactCopy: 'I am open to opportunities, collaborations and environments where I can keep learning while contributing to useful work.',
    start: 'Start a conversation',
  }

  const localizedProjects = isFrench
    ? projects.map((project) => project.name === 'ColiReceipt'
      ? { ...project, label: 'Projet / Application', description: 'Une application de gestion de colis con\u00e7ue pour g\u00e9rer les envois, clients, paiements, trajets et utilisateurs.' }
      : { ...project, label: 'Prototype \u00e9tudi\u00e9 / Concept', description: 'Un concept de covoiturage et de moto-partage pour la mobilit\u00e9 scolaire, explor\u00e9 dans le cadre d\u2019un projet acad\u00e9mique.' })
    : projects

  return (
    <main className={mobileMenuOpen ? 'mobile-menu-open' : ''} id="main-content">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Nav
        text={text}
        language={language}
        onToggleLanguage={toggleLanguage}
        mobileMenuOpen={mobileMenuOpen}
        onToggleMobileMenu={toggleMobileMenu}
        onCloseMobileMenu={closeMobileMenu}
      />
      <Hero
        eyebrow={text.eyebrow}
        heroTitle={text.heroTitle}
        heroCopy={text.heroCopy}
        view={text.view}
        talk={text.talk}
      />
      <About
        about={text.about}
        aboutTitle={text.aboutTitle}
        aboutCopy={text.aboutCopy}
        aboutCopy2={text.aboutCopy2}
        journeyLink={text.journeyLink}
      />
      <ProjectsSection
        work={text.work}
        workNote={text.workNote}
        viewLabel={text.viewProject}
        problemLabel={text.problemLabel}
        solutionLabel={text.solutionLabel}
        featuresLabel={text.featuresLabel}
        techLabel={text.techLabel}
        otherNote={text.otherNote}
        projects={localizedProjects}
        isFrench={isFrench}
      />
      <Skills skillGroups={skillGroups} />
      <WorkflowSection workflow={workflow} />
      <Contact
        contact={text.contact}
        contactTitle={text.contactTitle}
        contactCopy={text.contactCopy}
        start={text.start}
      />
      <Footer />
    </main>
  )
}

export default App
