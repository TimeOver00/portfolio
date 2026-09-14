export const profile = {
  name: 'Ahmed Zaned',
  role: "Développeur Full Stack C# / .NET & Angular — DevOps",
  tagline:
    "Conception d'API REST et d'applications web, de l'analyse du besoin jusqu'au déploiement en production.",
  location: 'Strasbourg, France',
  email: 'ahmedzaned123@gmail.com',
  phone: '+33 6 18 19 58 84',
  phoneHref: '+33618195884',
  linkedin: 'linkedin.com/in/ahmed-zaned',
  linkedinHref: 'https://linkedin.com/in/ahmed-zaned',
  about:
    "Développeur Full Stack confirmé, spécialisé en **C# / .NET** (ASP.NET Core, Web API, Entity Framework Core), **Angular** (TypeScript/JavaScript) et **PHP** (Lumen). Solide expérience dans la conception, le développement et l'optimisation d'applications web et d'API REST, complétée par des compétences **DevOps** (Docker, CI/CD, GitLab CI / GitHub Actions) acquises tout au long de mon parcours professionnel et académique.",
}

export const experience = [
  {
    when: '09/2023 — 08/2025',
    title: 'Développeur Full Stack — C# / .NET & Angular',
    org: 'TendersPage · Schiltigheim, France',
    bullets: [
      "Développement et maintenance d'applications web et d'API REST en **C# / ASP.NET Core**, avec **Entity Framework Core** pour l'accès aux données SQL, ainsi qu'en **PHP (Lumen)**.",
      'Analyse des besoins utilisateurs et traduction des spécifications fonctionnelles en solutions back-end (.NET) et front-end (**Angular**).',
      'Tests unitaires approfondis et débogage pour la fiabilité et la robustesse des applications.',
      'Mise en place de pipelines **CI/CD** (GitLab CI / GitHub Actions) pour automatiser builds, tests et mise en production.',
      'Coordination des déploiements en production, maintenance, sécurité et optimisation des performances (code & requêtes SQL).',
    ],
  },
]

export const education = [
  {
    when: '09/2023 — 08/2025',
    title: 'Master Science et Ingénierie du Logiciel (SIL)',
    org: 'Université de Strasbourg — UFR Maths et Informatique',
    bullets: [
      'Développement de solutions logicielles complexes pour des applications industrielles, embarquées et web.',
      "Gestion du cycle de vie de projet, de l'analyse des besoins à la livraison de code validé.",
      "Mise en œuvre de Docker et GitLab/GitHub Actions pour le déploiement et l'intégration continue.",
    ],
  },
  {
    when: '09/2020 — 06/2023',
    title: 'Licence en Mathématiques et Informatique',
    org: 'Université de Strasbourg — UFR Maths et Informatique',
    bullets: [
      'Maîtrise des structures de données classiques et modélisation orientée objet en projets collaboratifs.',
      "Gestion de bases de données relationnelles et interaction avec les systèmes d'exploitation.",
    ],
  },
]

export const projects = [
  {
    tag: 'Projet personnel',
    title: 'MyLoLTracker',
    description:
      "API Web ASP.NET Core exposant les données d'invocateurs League of Legends via l'API Riot Games, documentée avec Swagger.",
    stack: ['.NET 8', 'Web API', 'Swagger', 'Riot API'],
  },
  {
    tag: 'Projet personnel',
    title: 'Cloud Chat',
    description:
      'Messagerie temps réel en architecture microservices, conteneurisée avec des Dockerfiles dédiés par service et orchestrée via Docker Compose.',
    stack: ['Docker Compose', 'Microservices', 'API temps réel'],
  },
  {
    tag: 'Projet universitaire',
    title: 'Sudoku en Java',
    description:
      'Application Sudoku avec interface graphique, algorithmes de résolution et génération de grilles.',
    stack: ['Java', 'POO', 'Tests unitaires'],
  },
]

export const skills = [
  {
    label: 'Langages & frameworks',
    items: [
      'C# / .NET',
      'ASP.NET Core',
      'Web API',
      'Entity Framework Core',
      'Angular',
      'TypeScript',
      'JavaScript',
      'PHP (Lumen)',
      'SQL',
    ],
  },
  {
    label: 'DevOps & outils',
    items: ['Docker', 'CI/CD', 'GitLab CI', 'GitHub Actions', 'Git', 'Linux'],
  },
  {
    label: 'Soft skills',
    items: ['Travail en équipe', 'Gestion du temps', 'Résolution de problèmes', 'Adaptabilité'],
  },
]

export const languages = [
  { name: 'Français', level: 'C2' },
  { name: 'Anglais', level: 'C1' },
  { name: 'Arabe', level: 'natif' },
]

export const interests = ['Basket-ball', 'E-sport', 'Voyage']
