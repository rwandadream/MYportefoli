export type Project = { number: string; name: string; label: string; description: string; tags: string[]; featured?: boolean }

export const projects: Project[] = [
  { number: '01', name: 'ColiReceipt', label: 'Featured project / Deployed application', description: 'A parcel management application designed to manage shipments, clients, payments, trips and users.', tags: ['React', 'TypeScript', 'Prisma', 'PostgreSQL', 'Neon', 'IndexedDB'], featured: true },
  { number: '02', name: 'Blasira', label: 'Academic project / Prototype', description: 'A carpooling and motorcycle-sharing concept for school mobility, explored through an academic project.', tags: ['Product thinking', 'Mobile concept', 'Research'] },
]

export const skillGroups = [
  { title: 'Comfortable / Used regularly', tone: 'warm', skills: ['JavaScript', 'HTML', 'CSS', 'React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Git', 'GitHub'] },
  { title: 'Familiar / Project experience', tone: 'cool', skills: ['Flutter', 'Prisma', 'PostgreSQL', 'Neon', 'Vercel', 'Supabase', 'Node.js'] },
  { title: 'Currently learning', tone: 'muted', skills: ['PHP', 'Laravel', 'Next.js', 'Docker', 'Testing', 'Security', 'Full-stack architecture'] },
]

export const workflow = [
  ['01', 'Understand', 'Start with the problem and the people it should help.'], ['02', 'Explore', 'Research the tools and approaches that fit the project.'], ['03', 'Build', 'Turn the idea into a working first version.'], ['04', 'Use AI', 'Use AI to explore, explain, debug and move faster.'], ['05', 'Validate', 'Test the behavior, then fix what does not hold up.'], ['06', 'Deploy', 'Configure the services and make the project reachable.'], ['07', 'Improve', 'Keep learning from the next problem.'],
]
