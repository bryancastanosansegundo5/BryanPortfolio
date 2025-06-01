import bryan from "../assets/images/foto.jpg";
import Toastify from "toastify-js";
import cv from "../assets/Curriculum Vitae - Bryan Castano San Segundo.pdf";
// import {  } from "../";
import "../styles/home.css";

const Home = () => {
  const handleDownload = () => {
    Toastify({
      text: "Ha descargado el CV de Bryan Castaño",
      duration: 3000,
      newWindow: true,
      close: true,
      gravity: "top",
      position: "left",
      stopOnFocus: true,
    }).showToast();
  };

  return (
    <div className="home swing-in-left-fwd">
      <div className="foto">
        <img src={bryan} alt="Foto de Bryan" />
      </div>

      <div className="boton">
        <a
          href="https://www.linkedin.com/in/bryan-castaño-san-segundo/"
          target="_blank"
          rel="noreferrer"
          className="social-button"
        >
          <i className="fab fa-linkedin"></i> LinkedIn
        </a>

        <a
          href="https://github.com/bryancastanosansegundo5"
          target="_blank"
          rel="noreferrer"
          className="social-button"
        >
          <i className="fab fa-github"></i> GitHub
        </a>
        <a
          href={cv}
          download
          className="cv-button"
          onClick={handleDownload}
          id="documentoPdf"
        >
          <i className="fas fa-file-download"></i> Descargar CV
        </a>
        <a href="mailto:bryan.sanse@gmail.com" className="social-button">
          <i className="fas fa-envelope"></i> bryan.sanse@gmail.com
        </a>
      </div>

      <div className="texto">
  <p>
    <h2>
    👋 ¡Hola! Soy Bryan Castaño
    </h2>
    <br />
    🎓 Técnico Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)
    <br />
    🎓 Técnico Superior en Desarrollo de Aplicaciones Web (DAW)
    <br /><br />
    👨‍💻 Desarrollador Full Stack con formación en DAM + DAW y experiencia práctica en proyectos reales.
    <br />
    🚀 Manejo tecnologías como Java, Spring Boot, React, JavaScript, PHP y SQL.
    <br />
    🔎 Busco mi primera oportunidad profesional para aportar y seguir creciendo.
    <br />
    ✅ Perfil resolutivo, proactivo y con ganas de aprender en equipo.
    <br /><br />
      <h4>
    🚀 Sobre mí
    </h4>
    <br />
    Soy un desarrollador entusiasta, con formación sólida y una mentalidad orientada a la mejora continua.
    Me apasiona transformar ideas en soluciones reales, funcionales y escalables, tanto en frontend como en backend.
    <br /><br />
      <h4>
    💡 Tecnologías que domino
    </h4>
    <br />
    Lenguajes: JavaScript (Vanilla), Java, PHP
    <br />
    Frontend: HTML5, CSS3, React
    <br />
    Backend: Java, Spring, Spring Boot, PHP
    <br />
    Base de datos: MySQL
    <br />
    Herramientas: Git, Vercel, APIs REST
    <br /><br />
      <h4>
    🔧 Fortalezas profesionales
    </h4>
    <br />
    ✅ Aprendizaje constante y autónomo
    <br />
    ✅ Trabajo en equipo y buena comunicación
    <br />
    ✅ Enfoque práctico y resolutivo
    <br /><br />
      <h4>
    🎯 ¿Qué busco?
    </h4>
    <br />
    Un entorno donde seguir creciendo como desarrollador, aportar mi experiencia técnica y aprender de grandes profesionales.
    Estoy listo para asumir retos y contribuir al éxito del equipo.
    <br /><br />
    👉 Visita mi portfolio: 
    <u><b>
    <a href="https://bryancas.com/" target="_blank" rel="noopener noreferrer">https://bryancas.com/</a>
    </b>
    </u>
    <br />
    📬 ¡Estoy abierto a nuevas oportunidades!
  </p>
</div>

    </div>
  );
};

export default Home;
