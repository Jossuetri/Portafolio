import {
  Code2,
  Server,
  Database,
  BarChart3,
  Smartphone,
  User,
  MapPin,
  Mail,
  CircleCheck,
  GraduationCap,
  FlaskConical,
  Cpu,
  Layers,
  Rocket,
} from "lucide-react";

// ---------- EDITA AQUÍ TU INFORMACIÓN ----------

export const PROFILE = {
  name: "Jossue Aleajandro Eugenio Triana",
  initials: "JA",
  role: "DESARROLLADOR FULL-STACK & ANALISTA DE DATOS",
  tagline:
    "Construyo aplicaciones web y móviles y convierto datos en decisiones, desde la base de datos hasta el dashboard.",
  email: "jossue.eugenio16@gmail.com",
  phone: "3153732167",
  location: "Bucaramanga, Santander, Colombia",
  available: true,
  cvUrl: "/cv_jossue4.pdf", // archivo en public/
  github: "https://github.com/Jossuetri",
  linkedin: "https://www.linkedin.com/in/jossue-eugenio",
};

// Cada elemento es un párrafo de la sección "Sobre mí"
export const ABOUT_TEXT = [
  "Soy estudiante de 4.º semestre de Tecnología en Desarrollo de Sistemas Informáticos en las Unidades Tecnológicas de Santander (UTS), con enfoque en desarrollo backend, full-stack y análisis de datos.",
  "He construido una aplicación web con API REST en Laravel, frontend en Angular y base de datos PostgreSQL con triggers de auditoría, además de una app Android en Java con arquitectura MVVM. En datos, he trabajado proyectos de ventas, banca, salud e inmobiliario: limpieza y exploración con Python (pandas), consultas en SQL/PostgreSQL y dashboards en Power BI para comunicar hallazgos.",
  "Me gusta entender el problema antes de programar y aprendo rápido por mi cuenta. Busco mi primera oportunidad como desarrollador junior, analista de datos o practicante.",
];

// El orden debe coincidir con el orden de las secciones en App.jsx
export const NAV_LINKS = [
  { label: "Inicio", id: "home" },
  { label: "Sobre mí", id: "about" },
  { label: "Proyectos", id: "projects" },
  { label: "Servicios", id: "skills" },
  { label: "Trayectoria", id: "achievements" },
  { label: "FAQ", id: "faq" },
  { label: "Contacto", id: "contact" },
];

export const TECH_STACK = [
  { name: "Laravel", short: "Lv" },
  { name: "Angular", short: "Ng" },
  { name: "Java (Android)", short: "Jv" },
  { name: "PostgreSQL", short: "PG" },
  { name: "Python (pandas)", short: "Py" },
  { name: "Power BI", short: "BI" },
];

export const HERO_STATS = [
  { value: "1+", label: "Año de experiencia" },
  { value: "7+", label: "Proyectos completados" },
];

export const ABOUT_META = [
  { icon: User, label: "Nombre", value: PROFILE.name },
  { icon: MapPin, label: "Ubicación", value: PROFILE.location },
  { icon: Mail, label: "Email", value: PROFILE.email },
  {
    icon: CircleCheck,
    label: "Disponibilidad",
    value: PROFILE.available ? "Disponible para prácticas" : "No disponible",
    accent: PROFILE.available,
  },
];

// Los primeros 3 = fila superior del bento, los últimos 2 (big:true) = fila inferior
export const SERVICES_BENTO = [
  {
    icon: Code2,
    title: "Desarrollo Web",
    desc: "Construyo aplicaciones web con Laravel y Angular, responsivas y fáciles de mantener.",
  },
  {
    icon: Server,
    title: "Desarrollo Backend",
    desc: "Diseño APIs REST organizadas y seguras, con lógica de negocio clara del lado del servidor.",
  },
  {
    icon: Database,
    title: "Diseño de Bases de Datos",
    desc: "Modelo bases de datos en PostgreSQL con integridad, triggers de auditoría y consultas optimizadas.",
  },
  {
    icon: BarChart3,
    title: "Análisis de Datos",
    desc: "Limpio y exploro datos con Python (pandas) y SQL, y comunico hallazgos en dashboards de Power BI para apoyar la toma de decisiones.",
    big: true,
  },
  {
    icon: Smartphone,
    title: "Desarrollo Móvil",
    desc: "Desarrollo apps Android nativas en Java con arquitectura MVVM, pensadas para ser estables, ordenadas y fáciles de escalar.",
    big: true,
  },
];

// image: ruta en public/ (ej. "/projects/inventario.png"); demo/repo: deja "" para ocultar el botón
export const PROJECTS = [
  {
    title: "Sistema de gestión de inventario",
    tag: "Laravel",
    tagColor: "#F87171",
    desc: "Aplicación web para controlar productos, entradas y salidas de stock, con API REST, frontend en Angular y PostgreSQL.",
    image: "", demo: "", repo: "",
  },
  {
    title: "App Android de gestión de tareas",
    tag: "Java",
    tagColor: "#4ADE80",
    desc: "App nativa para crear, organizar y dar seguimiento a tareas, construida con arquitectura MVVM.",
    image: "", demo: "", repo: "",
  },
  {
    title: "Análisis de sismos en Santander",
    tag: "Python",
    tagColor: "#60A5FA",
    desc: "Análisis de datos sísmicos y modelo de predicción para apoyar decisiones de construcción en el área de Santander.",
    image: "", demo: "", repo: "",
  },
  {
    title: "Control de gastos y ahorros",
    tag: "React",
    tagColor: "#0031d2",
    desc: "Seguimiento de mis gastos personales y metas de ahorro, con categorías y visualizaciones para entender en qué se va el dinero.",
    image: "", demo: "", repo: "",
  },
];

export const MILESTONES = [
  {
    year: "2024",
    icon: GraduationCap,
    title: "Inicio en Ingeniería de Software",
    desc: "Ingresé al programa profesional en Ingeniería de Software y Sistemas de Información en las Unidades Tecnológicas de Santander (UTS).",
  },
  {
    year: "2025",
    icon: FlaskConical,
    title: "Investigación y Formación Técnica",
    desc: "Vinculación a semillero de investigación académica y fortalecimiento continuo en bootcamps y plataformas de desarrollo.",
  },
  {
    year: "2025",
    icon: Cpu,
    title: "Sistemas Embebidos y POO",
    desc: "Desarrollo de proyectos en C++ con Arduino y profundización en arquitectura de software y patrones de diseño en Java.",
  },
  {
    year: "2026",
    icon: Layers,
    title: "Especialización Full-Stack & Bases de Datos",
    desc: "Construcción de aplicaciones desacopladas en Laravel y Angular, integradas con lógica avanzada y disparadores en PostgreSQL (PL/pgSQL).",
  },
  {
    year: "2026",
    icon: Rocket,
    title: "Portafolio y Presencia Profesional",
    desc: "Lanzamiento de proyectos destacados, estructuración de portafolio técnico y posicionamiento profesional.",
  },
];

// Deja el arreglo vacío si aún no tienes testimonios reales: la columna se oculta
export const TESTIMONIALS = [];

export const FAQS = [
  { q: "¿Con qué tecnologías trabajas?", a: "Laravel, Angular, Java (Android), PostgreSQL, Python con pandas, SQL y Power BI." },
  { q: "¿Estás disponible para prácticas o empleo?", a: "Sí, busco mi primera oportunidad como desarrollador junior, analista de datos o practicante." },
  { q: "¿Cómo abordas un proyecto nuevo?", a: "Primero entiendo el problema y los datos; luego divido el trabajo en entregas pequeñas para validar avances." },
  { q: "¿Puedo ver el código de tus proyectos?", a: "Sí, encuentras mis repositorios en GitHub (enlace en el pie de página)." },
];

export const FOOTER_LINKS = NAV_LINKS.filter((l) =>
  ["home", "about", "projects", "contact"].includes(l.id)
);
export const FOOTER_SERVICES = SERVICES_BENTO.map((s) => s.title);
