import visor from './assets/images/ZonasTrabajo.webp'
import soldaduras from './assets/images/SoldadurasAGT.webp'
import pesapp from './assets/images/PesApp.webp'
import bc from './assets/images/BCcomponentes.webp'

export const projects = [
  {
    name: 'Visor 3D de viaductos',
    type: 'Visualización interactiva',
    description: 'Una forma visual de explorar la estructura de dos viaductos y descubrir cada uno de sus elementos.',
    image: visor,
    stack: ['React', 'Three.js', 'Tailwind CSS'],
    live: 'https://zonas-de-trabajo.vercel.app/viaducto3d',
  },
  {
    name: 'AGT Soldaduras',
    type: 'Web corporativa',
    description: 'Presencia digital para una empresa industrial, con una experiencia fluida y animaciones que acompañan el contenido.',
    image: soldaduras,
    stack: ['React', 'Tailwind CSS', 'GSAP'],
    live: 'https://soldadurasagt.vercel.app/',
    repo: 'https://github.com/bryancastanosansegundo5/SoldadurasAGT',
  },
  {
    name: 'PesApp',
    type: 'Aplicación full stack',
    description: 'Organización de entrenamientos, ejercicios y sesiones en una interfaz pensada para usarla a diario.',
    image: pesapp,
    stack: ['React', 'Tailwind CSS', 'Java', 'Spring Boot', 'MySQL', 'WebSocket'],
    live: 'https://pesapp.bryancas.com/',
    repo: 'https://github.com/bryancastanosansegundo5/PesAppFrontEnd',
  },
  {
    name: 'BCcomponentes',
    type: 'Comercio electrónico',
    description: 'Tienda online con gestión de productos y un asistente de IA integrado en la experiencia de compra.',
    image: bc,
    stack: ['React', 'Java', 'Spring Boot', 'MySQL', 'Spring AI', 'GSAP', 'WebSocket'],
    live: 'https://b-ccomponentes-front.vercel.app/',
    repo: 'https://github.com/bryancastanosansegundo5/BCcomponentesFront',
  },
]

export const moreProjects = [
  ['Pelotas Saltarinas', 'Experimento de animación', 'https://pelotas-jade.vercel.app'],
  ['CRUD de Usuarios', 'Aplicación PHP', 'https://github.com/bryancastanosansegundo5/CrudPHP'],
  ['Países del Mundo', 'Datos de una API', 'https://paises-teal.vercel.app'],
  ['Colores Hexadecimales', 'Generador de color', 'https://hexa-color.vercel.app'],
  ['Países en JavaScript', 'Buscador', 'https://paises-js.vercel.app'],
  ['Números Primos', 'Herramienta JavaScript', 'https://numeros-primos-psi.vercel.app'],
  ['Mi Portfolio anterior', 'React', 'https://portfolio-beta-seven-28.vercel.app'],
]

export const experience = [
  {
    role: 'Software Developer y Nuevas Tecnologías',
    company: 'Grupo TecoZam',
    period: 'Sep 2025 — Actualidad',
    description: 'Personalización de ERP con VB.NET y SQL Server, integración de APIs REST y automatización de procesos. Desarrollo de soluciones con Node.js, Spring Boot, Astro y JavaScript.',
  },
  {
    role: 'Desarrollador Full Stack',
    company: 'Questión de Imagen Comunicación',
    period: 'May — Ago 2025',
    description: 'Desarrollo web a medida con WordPress, PHP y JavaScript. Gestión de hosting, dominios y DNS; participación en soluciones con Java, Spring Boot y React.',
  },
  {
    role: 'Desarrollador Web',
    company: 'Serbatic S.A.',
    period: 'Mar — Jun 2025',
    description: 'Desarrollo de una tienda online y una aplicación de evaluación de candidatos con React y Spring Boot.',
  },
  {
    role: 'Consultor Tecnológico',
    company: 'Serinza Solution SL',
    period: 'Dic 2023 — Sep 2024',
    description: 'Definición e implementación de soluciones digitales alineadas con objetivos de negocio, incluyendo proyectos con WordPress.',
  },
]

export const earlier = [
  ['Ejército de Tierra', 'Soldado profesional', '2021 — 2023'],
  ['Decathlon España', 'Técnico informático', '2018 — 2021'],
  ['Zener Plus SL', 'Técnico instalador de redes', '2017'],
  ['Serinza Solution SL', 'Desarrollador web', '2017'],
  ['Bits & Company', 'Soporte informático', '2014 — 2017'],
]

export const education = [
  {
    title: 'Inteligencia Artificial y Big Data',
    qualification: 'Curso de Especialización · En curso',
    current: true,
  },
  {
    title: 'Desarrollo de Aplicaciones Web',
    qualification: 'Técnico Superior',
    detail: 'IES Claudio Moyano',
  },
  {
    title: 'Desarrollo de Aplicaciones Multiplataforma',
    qualification: 'Técnico Superior',
    detail: 'IES Claudio Moyano',
  },
  {
    title: 'Sistemas Microinformáticos y Redes',
    qualification: 'Técnico',
    detail: 'IES Claudio Moyano',
  },
]

export const toolGroups = [
  ['Frontend', 'React', 'JavaScript', 'Astro', 'HTML', 'CSS', 'Tailwind CSS', 'GSAP'],
  ['Backend y datos', 'Java', 'Spring Boot', 'Node.js', 'PHP', 'SQL Server', 'MySQL', 'APIs REST'],
  ['Herramientas', 'Git', 'Vercel', 'WordPress', 'VB.NET', 'Crystal Reports'],
]
