import paisesReact from "../assets/images/paisesReact.webp";
import coloresReact from "../assets/images/coloresReact.webp";
import paisesJS from "../assets/images/paisesJS.webp";
import numerosPrimos from "../assets/images/numerosPrimos.webp";
import pelotas from "../assets/images/pelotas.webp";
import crudUsuarios from "../assets/images/crudUsuarios.webp";
import portfolioReact from "../assets/images/portfolioReact.webp";
import BCcomponentes from "../assets/images/BCcomponentes.webp";
import PesApp from "../assets/images/PesApp.webp";
export const proyectos = [
  {
    titulo: "PesApp",
    descripcion:
      "Aplicación para gestionar entrenamientos, ejercicios y sesiones de forma clara, rápida y visual.",
    enlace: "https://pesapp.bryancas.com/",
    repositorio: [
      {
        nombre: "Backend",
        url: "https://github.com/bryancastanosansegundo5/PesAppBackEnd",
      },
      {
        nombre: "Frontend",
        url: "https://github.com/bryancastanosansegundo5/PesAppFrontEnd",
      },
    ],
    imagen: PesApp,
    iconos: ["springboot", "react", "tailwindcss"],
  },
  {
    titulo: "BCcomponentes",
    descripcion:
      "Tienda profesional con funcionalidades completas para gestionar una tienda real.",
    enlace: "https://b-ccomponentes-front.vercel.app/",
    repositorio: [
      {
        nombre: "Backend",
        url: "https://github.com/bryancastanosansegundo5/BCcomponentesBack",
      },
      {
        nombre: "Frontend",
        url: "https://github.com/bryancastanosansegundo5/BCcomponentesFront",
      },
    ],
    imagen: BCcomponentes,
    iconos: ["springboot", "react", "css"],
  },
  {
    titulo: "Pelotas Saltarinas",
    descripcion: "Pelotas que rebotan.",
    enlace: "https://pelotas-jade.vercel.app",
    repositorio: "https://github.com/bryancastanosansegundo5/Pelotas",
    imagen: pelotas,
    iconos: ["js", "css", "html"],
  },
  {
    titulo: "CRUD de Usuarios",
    descripcion: "CRUD desarrollado en PHP.",
    enlace: null,
    repositorio: "https://github.com/bryancastanosansegundo5/CrudPHP",
    imagen: crudUsuarios,
    iconos: ["php", "css", "html"],
  },
  {
    titulo: "Paí­ses del Mundo",
    descripcion: "Paí­ses obtenidos de una API.",
    enlace: "https://paises-teal.vercel.app",
    repositorio: "https://github.com/bryancastanosansegundo5/Paises",
    imagen: paisesReact,
    iconos: ["react", "js", "css", "html"],
  },
  {
    titulo: "Colores Hexadecimales",
    descripcion: "Colores generados al azar.",
    enlace: "https://hexa-color.vercel.app",
    repositorio: "https://github.com/bryancastanosansegundo5/HexaColor",
    imagen: coloresReact,
    iconos: ["react", "js", "css", "html"],
  },
  {
    titulo: "Paí­ses en JavaScript",
    descripcion: "Buscador de países con JavaScript.",
    enlace: "https://paises-js.vercel.app",
    repositorio: "https://github.com/bryancastanosansegundo5/PaisesJS",
    imagen: paisesJS,
    iconos: ["js", "css", "html"],
  },
  {
    titulo: "Números Primos",
    descripcion: "Indicador de números primos.",
    enlace: "https://numeros-primos-psi.vercel.app",
    repositorio: "https://github.com/bryancastanosansegundo5/NumerosPrimos",
    imagen: numerosPrimos,
    iconos: ["js", "css", "html"],
  },
  {
    titulo: "Mi Portfolio",
    descripcion: "Mi portfolio personal.",
    enlace: "https://portfolio-beta-seven-28.vercel.app",
    repositorio: "https://github.com/bryancastanosansegundo5/Portfolio",
    imagen: portfolioReact,
    iconos: ["react", "js", "css", "html"],
  },
];
