import {
  Code2,
  Server,
  Database,
  Cloud,
  Layers,
  Trophy,
  Users,
  User,
  MapPin,
  Mail,
  CircleCheck,
  GraduationCap,
  Rocket,
  Briefcase,
  BookOpen,
  Cpu,
  Code,
} from "lucide-react";

// ---------- EDITA AQUÍ TU INFORMACIÓN ----------

export const NAV_LINKS = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Achievements",
  /*"Testimonials",*/
  "Contact",
];

export const TECH_ICONS = ["⚛️", "N", "TS", "◆", "🐍", "🐘", "…"];

export const HERO_STATS = [
  { value: "1+", label: "Años de experiencia" },
  { value: "5+", label: "Proyectos completados" },
  
];

export const ABOUT_META = [
  { icon: User, label: "Nombre", value: "Jossue Eugenio" },
  { icon: MapPin, label: "Ubicación", value: "Bucaramanga, Colombia" },
  { icon: Mail, label: "Email", value: "jossue.eugeio16@gmail.com" },
  { icon: CircleCheck, label: "Disponibilidad", value: "Disponible", accent: true },
];

// Los primeros 3 = fila superior del bento, los últimos 2 (big:true) = fila inferior
export const SERVICES_BENTO = [
  {
    icon: Code2,
    title: "Desarrollo Web",
    desc: "Construyo aplicaciones web rápidas y modernas, responsivas en cualquier dispositivo.",
  },
  {
    icon: Server,
    title: "Desarrollo Backend",
    desc: "Diseño APIs robustas y soluciones del lado del servidor escalables.",
  },
  {
    icon: Database,
    title: "Diseño de Bases de Datos",
    desc: "Creo esquemas de base de datos eficientes, seguros y optimizados.",
  },
  {
    icon: Cloud,
    title: "Análisis de Datos",
    desc: "Proceso y analizo flujos de información complejos para extraer patrones clave, generar métricas e impulsar la toma de decisiones estratégicas basadas en evidencia.",
    big: true,
  },
  {
    icon: Layers,
    title: "Desarrollo Móvil",
    desc: "Creo aplicaciones nativas para Android (Java) estructuradas bajo Clean Architecture, inyección de dependencias y sincronización con servicios remotos.",
    big: true,
  },
];

export const PROJECTS = [
  { title: "Gestión de Inventario de Libros", tag: "Laravel & Angular", tagColor: "#8B7CF6", desc: "Aplicación web full-stack con arquitectura desacoplada (API REST), interfaz SPA y auditoría automatizada de datos." },
  { title: "TaskSync Móvil", tag: "Android", tagColor: "#4ADE80", desc: "Aplicación nativa para la organización de tareas con inyección de dependencias y sincronización con APIs RESTful." },
  { title: "Módulo de Auditoría en PL/pgSQL", tag: "PostgreSQL", tagColor: "#336791", desc: "Diseño de base de datos relacional con disparadores (triggers) y funciones avanzadas para garantizar la integridad de los datos." },
  { title: "Análisis & Insights de Datos", tag: "Data Analysis", tagColor: "#F59E0B", desc: "Procesamiento y visualización de conjuntos de datos para la extracción de métricas clave y apoyo en decisiones estratégicas." },
];

export const MILESTONES = [
  { year: "2024", icon: GraduationCap, title: "Inicio en Ingeniería de Software", desc: "Ingresé al programa profesional en Ingeniería de Software y Sistemas de Información en las Unidades Tecnológicas de Santander (UTS)." },
  { year: "2025", icon: BookOpen, title: "Investigación y Formación Técnica", desc: "Vinculación a semillero de investigación académica y fortalecimiento continuo en bootcamps y plataformas de desarrollo." },
  { year: "2025", icon: Cpu, title: "Sistemas Embebidos y POO", desc: "MDesarrollo de proyectos en C++ con Arduino y profundización en arquitectura de software y patrones de diseño en Java." },
  { year: "2026", icon: Code, title: "Especialización Full-Stack & Bases de Datos", desc: "Construcción de aplicaciones desacopladas en Laravel y Angular, integradas con lógica avanzada y disparadores en PostgreSQL (PL/pgSQL)." },
  { year: "2026", icon: Rocket, title: "Portafolio y Presencia Profesional", desc: "Lanzamiento de proyectos destacados, estructuración de portafolio técnico y posicionamiento profesional." },
];

export const FAQS = [
  { q: "¿Con qué tecnologías trabajas?", a: "React, Next.js, Node.js, Agular, laravel, Python, TypeScript y bases de datos SQL/NoSQL." },
  { q: "¿Estás disponible para proyectos freelance?", a: "Sí, actualmente tengo disponibilidad para nuevos proyectos." },
  { q: "¿Cómo garantizas la entrega a tiempo?", a: "Divido el trabajo en sprints cortos con entregas y feedback constante." },
  { q: "¿Ofreces soporte después del lanzamiento?", a: "Sí, ofrezco soporte y mantenimiento posterior al lanzamiento." },
];

export const FOOTER_LINKS = ["Home", "About", "Skills", "Contact"];
export const FOOTER_SERVICES = ["Desarrollo Web", "Desarrollo Backend", "Diseño de Bases de Datos", "Cloud & DevOps"];
