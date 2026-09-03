export type Project = { number: string; name: string; label: string; description: string; tags: string[]; featured?: boolean }

export const projects: Project[] = [
  { number: '03', name: 'ColiReceipt', label: 'Project / Application', description: 'A parcel management application designed to manage shipments, clients, payments, trips and users.', tags: ['React', 'TypeScript', 'Prisma', 'PostgreSQL', 'Neon', 'IndexedDB'] },
  { number: '04', name: 'Blasira', label: 'Academic project / Prototype', description: 'A carpooling and motorcycle-sharing concept for school mobility, explored through an academic project.', tags: ['Product thinking', 'Mobile concept', 'Research'] },
]

export const skillGroups = [
  { title: 'Comfortable / Used regularly', tone: 'warm', skills: ['JavaScript', 'HTML', 'CSS', 'React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Git', 'GitHub'] },
  { title: 'Familiar / Project experience', tone: 'cool', skills: ['Flutter', 'Prisma', 'PostgreSQL', 'Neon', 'Vercel', 'Supabase', 'Node.js'] },
  { title: 'Currently learning', tone: 'muted', skills: ['PHP', 'Laravel', 'Next.js', 'Docker', 'Testing', 'Security', 'Full-stack architecture'] },
]

export const workflow: [string, string, string][] = [
  ['01', 'Understand', 'Start with the problem and the people it should help.'], ['02', 'Explore', 'Research the tools and approaches that fit the project.'], ['03', 'Build', 'Turn the idea into a working first version.'], ['04', 'Use AI', 'Use AI to explore, explain, debug and move faster.'], ['05', 'Validate', 'Test the behavior, then fix what does not hold up.'], ['06', 'Deploy', 'Configure the services and make the project reachable.'], ['07', 'Improve', 'Keep learning from the next problem.'],
]

export type FeaturedFeature = { fr: string; en: string }

export type FeaturedProject = {
  number: string
  id: string
  title: string
  category: { fr: string; en: string }
  tagline: { fr: string; en: string }
  accent: string
  liveUrl: string
  technologies: string[]
  caseStudy: {
    problem: { fr: string; en: string }
    solution: { fr: string; en: string }
    features: FeaturedFeature[]
    note?: { fr: string; en: string }
  }
  screens: string[]
}

export const featuredProjects: FeaturedProject[] = [
  {
    number: '01',
    id: 'sarah-auto',
    title: 'SARAH AUTO',
    category: { fr: 'ERP / Auto-école', en: 'ERP / Driving school' },
    tagline: {
      fr: 'Une plateforme SaaS pensée pour digitaliser la gestion opérationnelle d\u2019une auto-\u00e9cole : \u00e9l\u00e8ves, moniteurs, v\u00e9hicules, planning, examens, facturation et comptabilit\u00e9.',
      en: 'A SaaS platform built to digitize the day-to-day operations of a driving school: students, instructors, vehicles, scheduling, exams, billing and accounting.',
    },
    accent: '#55a9e8',
    liveUrl: 'https://auto-ecole-one-liart.vercel.app/',
    technologies: ['Next.js', 'React', 'Vercel', 'PWA'],
    caseStudy: {
      problem: {
        fr: 'Une auto-\u00e9cole doit g\u00e9rer simultan\u00e9ment le dossier de chaque \u00e9l\u00e8ve, la disponibilit\u00e9 des moniteurs, la flotte de v\u00e9hicules, le planning des s\u00e9ances, les examens, la facturation et la comptabilit\u00e9 \u2014 souvent encore sur papier ou tableurs.\u2003Une plateforme doit r\u00e9unir tout cela dans un seul espace.',
        en: 'A driving school must manage each student\u2019s file, instructor availability, the vehicle fleet, lesson scheduling, exams, billing and accounting all at once \u2014 often still on paper or spreadsheets.\u2003The platform brings all of it into a single space.',
      },
      solution: {
        fr: 'Un ERP SaaS centralis\u00e9 et installable (PWA) qui couvre le cycle complet de l\u2019\u00e9l\u00e8ve et de l\u2019\u00e9tablissement, de l\u2019inscription \u00e0 l\u2019obtention du permis.',
        en: 'A centralized, installable SaaS ERP (PWA) that covers the full student and establishment cycle, from registration to the driving licence.',
      },
      features: [
        { fr: 'Gestion des \u00e9l\u00e8ves et de leur progression', en: 'Student management and progress tracking' },
        { fr: 'Planning des s\u00e9ances et des moniteurs', en: 'Scheduling of lessons and instructors' },
        { fr: 'Suivi des v\u00e9hicules et de la flotte', en: 'Vehicle and fleet tracking' },
        { fr: 'Gestion des examens et des r\u00e9sultats', en: 'Exam management and results' },
        { fr: 'Facturation et comptabilit\u00e9', en: 'Billing and accounting' },
        { fr: 'Installable comme application mobile (PWA)', en: 'Installable as a mobile app (PWA)' },
      ],
      note: {
        fr: 'Con\u00e7ue comme un produit, pas comme une d\u00e9mo : les donn\u00e9es, r\u00f4les et flux m\u00e9tier renvoient \u00e0 un usage quotidien r\u00e9el.',
        en: 'Designed as a product, not a demo: the data, roles and workflows point to real daily use.',
      },
    },
    screens: ['dashboard', 'eleves', 'planning'],
  },
  {
    number: '02',
    id: 'apress-mali',
    title: 'APRESS-MALI',
    category: { fr: 'ERP / CRM orient\u00e9 services', en: 'ERP / CRM built around services' },
    tagline: {
      fr: 'Apress Trace Connect : une plateforme ERP/CRM int\u00e9gr\u00e9e pour APRESS MALI SARL \u2014 gestion des clients, facturation et suivi des paiements.',
      en: 'Apress Trace Connect: an integrated ERP/CRM platform for APRESS MALI SARL \u2014 client management, invoicing and payment tracking.',
    },
    accent: '#a9d875',
    liveUrl: 'https://your-dream-app-creator.vercel.app/',
    technologies: ['React', 'TypeScript', 'Vite', 'Recharts', 'Radix UI', 'Lucide'],
    caseStudy: {
      problem: {
        fr: 'Une soci\u00e9t\u00e9 de services a besoin non seulement d\u2019un CRM clients, mais aussi de facturation, de suivi des paiements et de recouvrement \u2014 le tout reli\u00e9 \u00e0 une vue financi\u00e8re claire.',
        en: 'A services company needs more than a client CRM: it needs invoicing, payment tracking and recovery \u2014 all tied to a clear financial overview.',
      },
      solution: {
        fr: 'Un espace int\u00e9gr\u00e9 (dashboard, clients, services, factures, paiements, rapports) avec des indicateurs financiers et un module d\u2019administration.',
        en: 'An integrated workspace (dashboard, clients, services, invoices, payments, reports) with financial indicators and an administration module.',
      },
      features: [
        { fr: 'Tableau de bord et indicateurs financiers', en: 'Dashboard and financial indicators' },
        { fr: 'Gestion des clients et de la base clients', en: 'Client and customer base management' },
        { fr: 'Catalogue de services', en: 'Services catalogue' },
        { fr: 'Facturation et suivi des paiements', en: 'Invoicing and payment tracking' },
        { fr: 'Suivi du recouvrement et des cr\u00e9ances', en: 'Recovery and receivables tracking' },
        { fr: 'Administration : utilisateurs, journal, param\u00e8tres', en: 'Administration: users, audit log, settings' },
      ],
      note: {
        fr: 'Homog\u00e8ne et coh\u00e9rent \u00e0 l\u2019\u00e9chelle : m\u00eame logique, m\u00eame rigueur que le projet pr\u00e9c\u00e9dent, sur un m\u00e9tier diff\u00e9rent.',
        en: 'Consistent and coherent at scale: the same logic and rigour as the previous project, on a different line of business.',
      },
    },
    screens: ['dashboard', 'clients', 'factures', 'paiements', 'rapports'],
  },
]
