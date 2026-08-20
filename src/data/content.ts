export interface LocalizedString {
  en: string;
  es: string;
}

export interface Project {
  id: string;
  title: LocalizedString;
  shortDescription: LocalizedString;
  tags: string[];
  link?: string;
  year: string;
}

export interface Experience {
  id: string;
  role: LocalizedString;
  company: string;
  location: LocalizedString;
  startDate: string;
  endDate?: string;
  description: LocalizedString;
}

export interface Certification {
  id: string;
  name: LocalizedString;
  issuer: string;
  date: string;
  link?: string;
}

export interface TechItem {
  name: string;
  category: "frontend" | "backend" | "devops" | "tools" | "languages";
}

export const projects: Project[] = [
  {
    id: "rankea",
    title: {
      en: "Rankea - Results Ranking Platform",
      es: "Rankea - Plataforma de Clasificación de Resultados",
    },
    shortDescription: {
      en: "Rankea is a multi-tenant SaaS created to help sports clubs and organizations rank their athletes' results in competitions, providing an easy-to-use interface for managing and visualizing performance data.",
      es: "Rankea es un SaaS multi-tenant creado para ayudar a clubes deportivos y organizaciones a clasificar los resultados de sus atletas en competiciones, proporcionando una interfaz fácil de usar para gestionar y visualizar los datos de rendimiento.",
    },
    tags: [
      "TypeScript",
      "React",
      "Next.js",
      "tRPC",
      "Tailwind CSS",
      "Drizzle ORM",
      "PostgreSQL",
    ],
    link: "https://www.rankea.cc/",
    year: "2026",
  },
  {
    id: "ciaf-portal",
    title: {
      en: "CIAF Portal",
      es: "CIAF Portal",
    },
    shortDescription: {
      en: "CIAF Portal was my Capstone Project developed for the CIAF Artistic Gymnastics Club, featuring internal modules for managing gymnasts, guardians, and payments. Currently only the frontend is deployed; the full finished software can be found in the repository.",
      es: "CIAF Portal fue mi proyecto de fin de carrera desarrollado para el Club de Gimnasia Artística CIAF, con módulos internos para gestionar gimnastas, tutores y pagos. Actualmente solo el frontend está desplegado; el software completo se puede encontrar en el repositorio.",
    },
    tags: [
      "TypeScript",
      "React",
      "Next.js",
      "tRPC",
      "Tailwind CSS",
      "Drizzle ORM",
      "PostgreSQL",
    ],
    link: "https://github.com/clikzz/ciaf-portal",
    year: "2026",
  },
  {
    id: "f1-team-detection",
    title: {
      en: "F1 Team Detection",
      es: "Detección de Equipos de F1",
    },
    shortDescription: {
      en: "University project mixing personal interests with computer vision to detect Formula 1 teams in images and videos.",
      es: "Proyecto universitario que mezcla intereses personales con visión por computadora para detectar equipos de Fórmula 1 en imágenes y videos.",
    },
    tags: ["YoloV8", "Ultralytics", "Python", "Roboflow", "Google Colab"],
    link: "https://github.com/clikzz/f1-team-detection",
    year: "2025",
  },
  {
    id: "petly",
    title: {
      en: "petly - Pet Care Platform",
      es: "petly - Plataforma de Cuidado de Mascotas",
    },
    shortDescription: {
      en: "petly is a university project created to help any pet owner track the different care needs, life stages, and even lost-pet situations that may affect their animal.",
      es: "petly es un proyecto universitario creado para ayudar a cualquier dueño de mascota a rastrear las diferentes necesidades de cuidado, etapas de vida e incluso situaciones de mascotas perdidas que puedan afectar a su animal.",
    },
    tags: [
      "TypeScript",
      "React",
      "Next.js",
      "API Routes",
      "Tailwind CSS",
      "Prisma ORM",
      "Supabase",
    ],
    link: "https://github.com/clikzz/petly",
    year: "2025",
  },
  {
    id: "bikefy",
    title: {
      en: "bikefy - Bike Workshop Platform",
      es: "bikefy - Plataforma para Talleres de Bicicleta",
    },
    shortDescription: {
      en: "bikefy is a university project created as internal software for bicycle workshops, allowing easy management of inventory, suppliers, services, tasks, and employees.",
      es: "bikefy es un proyecto universitario creado como un software interno para talleres de bicicleta, permitiendo una fácil gestión de inventario, proveedores, servicios, tareas y empleados.",
    },
    tags: [
      "JavaScript",
      "Node.js",
      "Express",
      "React",
      "Next.js",
      "Tailwind CSS",
      "PostgreSQL",
    ],
    link: "https://github.com/clikzz/bikefy",
    year: "2024",
  },
];

export const experiences: Experience[] = [
  {
    id: "ayudante-ubiobio",
    role: {
      en: "Teaching Assistant — Software Engineering & Development Methodology",
      es: "Alumno Ayudante — Ingeniería de Software y Metodología del Desarrollo",
    },
    company: "Universidad del Bío-Bío",
    location: { en: "Concepción, Chile", es: "Concepción, Chile" },
    startDate: "2025-03",
    endDate: "2026-01",
    description: {
      en: "Academic support in Software Engineering and Development Methodology courses. Code review and technical feedback on semester projects, with emphasis on development best practices.",
      es: "Apoyo académico en cátedras de Ingeniería de Software y Metodología del Desarrollo. Revisión de código y feedback técnico en proyectos semestrales con especial énfasis en buenas prácticas durante el desarrollo.",
    },
  },
  {
    id: "qa-factoring-security",
    role: {
      en: "QA Engineer (Internship)",
      es: "QA Engineer (Prácticas)",
    },
    company: "Factoring Security — Grupo Security",
    location: { en: "Santiago, Chile", es: "Santiago, Chile" },
    startDate: "2025-01",
    endDate: "2025-03",
    description: {
      en: "Executed quality assurance tests during the CORE system migration, ensuring data integrity. Detected, documented, and reported bugs for the development team. Validated critical business workflows to guarantee operational continuity.",
      es: "Ejecución de pruebas de calidad (QA) durante la migración del sistema CORE, asegurando la integridad de los datos. Detección, documentación y reporte de errores para el equipo de desarrollo. Validación de flujos críticos del negocio para garantizar la continuidad operativa.",
    },
  },
  {
    id: "embajador-ubiobio",
    role: {
      en: "Career Ambassador — Civil Informatics Engineering",
      es: "Embajador de Carrera — Ingeniería Civil en Informática",
    },
    company: "Universidad del Bío-Bío",
    location: { en: "Concepción, Chile", es: "Concepción, Chile" },
    startDate: "2024-03",
    endDate: "2025-01",
    description: {
      en: "Prepared and delivered informative talks about the career to high school students. Organized outreach and vocational guidance activities for prospective students.",
      es: "Preparación y presentación de charlas informativas sobre la carrera a estudiantes de enseñanza media. Organización de actividades de difusión y orientación vocacional para futuros estudiantes.",
    },
  },
  {
    id: "analista-munspp",
    role: {
      en: "Process Analyst (Internship)",
      es: "Analista de Procesos (Prácticas)",
    },
    company: "Municipalidad de San Pedro de la Paz",
    location: {
      en: "San Pedro de la Paz, Chile",
      es: "San Pedro de la Paz, Chile",
    },
    startDate: "2024-01",
    endDate: "2024-03",
    description: {
      en: "Gathered and modeled business processes (BPMN) for digitizing municipal procedures. Technical documentation of workflows in compliance with the Digital Transformation Law (N°21,180).",
      es: "Levantamiento y modelado de procesos (BPMN) para la digitalización de trámites. Documentación técnica de flujos de trabajo en cumplimiento con la Ley de Transformación Digital (N°21.180).",
    },
  },
];

export const certifications: Certification[] = [
  {
    id: "claude-code-in-action",
    name: {
      en: "Claude Code in Action",
      es: "Claude Code en Acción",
    },
    issuer: "Anthropic",
    date: "2025-05",
    link: "https://verify.skilljar.com/c/wmk6pgvt455p",
  },
  {
    id: "typescript-sin-fronteras",
    name: {
      en: "TypeScript Without Borders",
      es: "TypeScript sin fronteras",
    },
    issuer: "Udemy / Nicolás Schürmann",
    date: "2025-08",
    link: "https://www.udemy.com/certificate/UC-2b93c813-8b19-4816-ae4e-a2005411f63d/",
  },
  {
    id: "ultimate-javascript",
    name: {
      en: "Ultimate JavaScript",
      es: "Ultimate JavaScript",
    },
    issuer: "Udemy / Nicolás Schürmann",
    date: "2024-11",
    link: "https://www.udemy.com/certificate/UC-19aa39c2-ed4b-4134-a5e4-5685f5849ffe/",
  },
  {
    id: "contexto-scrum",
    name: {
      en: "Scrum Context",
      es: "Contexto de Scrum",
    },
    issuer: "Academia Ágil",
    date: "2024-05",
    link: "https://credsverse.com/credentials/e75ce0e8-3e28-43ae-af50-9705bece7294?preview=1",
  },
  {
    id: "fundamentos-dev-software",
    name: {
      en: "Professional Foundations of Software Development",
      es: "Fundamentos profesionales del desarrollo de software",
    },
    issuer: "Microsoft / LinkedIn",
    date: "2024-05",
    link: "https://www.linkedin.com/learning/certificates/98cd975270abc97f2d3156f9a8b79294c4d00c01f31ea90478f9d2d440c72503?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BqFXMHtTVRveGS7ixhM30xA%3D%3D",
  },
];

export const techStack: TechItem[] = [
  { name: "React", category: "frontend" },
  { name: "Astro", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "Express", category: "backend" },
  { name: "tRPC", category: "backend" },
  { name: "Drizzle ORM", category: "backend" },
  { name: "Prisma ORM", category: "backend" },
  { name: "PostgreSQL", category: "backend" },
  { name: "MongoDB", category: "backend" },
  { name: "Docker", category: "devops" },
  { name: "AWS", category: "devops" },
  { name: "Azure", category: "devops" },
  { name: "Vercel", category: "devops" },
  { name: "Netlify", category: "devops" },
  { name: "Cloudflare", category: "devops" },
  { name: "CI/CD", category: "devops" },
  { name: "Git", category: "tools" },
  { name: "GitHub Actions", category: "tools" },
  { name: "VS Code", category: "tools" },
  { name: "Zed", category: "tools" },
  { name: "Jest", category: "tools" },
  { name: "Cypress", category: "tools" },
  { name: "Playwright", category: "tools" },
  { name: "Selenium", category: "tools" },
  { name: "C", category: "languages" },
  { name: "C++", category: "languages" },
  { name: "Java", category: "languages" },
  { name: "JavaScript", category: "languages" },
  { name: "TypeScript", category: "languages" },
  { name: "Python", category: "languages" },
  { name: "Go", category: "languages" },
  { name: "SQL", category: "languages" },
];
