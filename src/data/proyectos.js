import paisesReact from "../assets/images/paisesReact.png";
import coloresReact from "../assets/images/coloresReact.png";
import paisesJS from "../assets/images/paisesJS.png";
import numerosPrimos from "../assets/images/numerosPrimos.png";
import pelotas from "../assets/images/pelotas.png";
import crudUsuarios from "../assets/images/crudUsuarios.png";
import portfolioReact from "../assets/images/portfolioReact.png";
import BCcomponentes from "../assets/images/BCcomponentes.png";

export const proyectos = [
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
    iconos: ["springboot", "java", "js", "css", "html"],
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
    enlace: "https://crud-php-henna.vercel.app",
    repositorio: "https://github.com/bryancastanosansegundo5/CrudPHP",
    imagen: crudUsuarios,
    iconos: ["php", "css", "html"],
  },
  {
    titulo: "Países del Mundo",
    descripcion: "Países obtenidos de una API.",
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
    titulo: "Países en JavaScript",
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
