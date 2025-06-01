import "../styles/habilidades.css";
import {
  habilidadesArrayFront,
  habilidadesArrayBack,
} from "../data/habilidades";

const Habilidades = () => {
  return (
    <div className="habilidades swing-in-left-fwd">
      <h2>Sobre mí</h2>

      <h3>Estudios realizados:</h3>
      <div className="estudios">
        <div className="tabla-titulos">
          <ul className="titulos">
            <li>Técnico Superior en Desarrollo de Aplicaciones Web</li>
            <li className="centro">IES Claudio Moyano</li>
            <li>Técnico Superior en Desarrollo de Aplicaciones Multiplataforma</li>
            <li className="centro">IES Claudio Moyano</li>
            <li>Técnico en Sistemas Microinformáticos y Redes</li>
            <li className="centro">IES Claudio Moyano</li>
          </ul>
        </div>
      </div>

      <br />
      <h3>Tecnologías que domino:</h3>

      <div className="cuadrado">
        <h4>Front End:</h4>
        <div className="logos">
          {habilidadesArrayFront.map((habilidad, index) => (
            <div className="logo" key={index}>
              <img
                src={habilidad.imagen}
                alt={habilidad.lenguaje}
                style={{
                  WebkitMaskImage: `url(${habilidad.imagen})`,
                  WebkitMaskSize: "contain",
                  WebkitMaskRepeat: "no-repeat",
                  WebkitMaskPosition: "center",
                  backgroundColor: "white",
                }}
              />
              <p>{habilidad.lenguaje}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="cuadrado">
        <h4>Back End:</h4>
        <div className="logos">
          {habilidadesArrayBack.map((habilidad, index) => (
            <div className="logo" key={index}>
              <img
                src={habilidad.imagen}
                alt={habilidad.lenguaje}
                style={{
                  WebkitMaskImage: `url(${habilidad.imagen})`,
                  WebkitMaskSize: "contain",
                  WebkitMaskRepeat: "no-repeat",
                  WebkitMaskPosition: "center",
                  backgroundColor: "white",
                }}
              />
              <p>{habilidad.lenguaje}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="cuadrado-grande">
  <h3>Experiencia:</h3>
  <div className="tabla-experiencia">
    <ul className="experiencia">
      <li className="encabezado">
        <span className="trabajo">Desarrollador Web</span>
        <span className="centro"> Serbatic S.A. (03/2025 – 06/2025)</span>
        <ul>
          <li>Desarrollo Full Stack de una tienda online con <strong>Java, Spring Boot y React</strong>.</li>
          <li>App de evaluación de candidatos con vectorización (<strong>React + Spring Boot</strong>).</li>
          <li>Formación intensiva en Spring y Spring Boot.</li>
        </ul>
      </li>

      <li className="encabezado">
        <span className="trabajo">Consultor Tecnológico</span>
        <span className="centro"> Serinza Solution SL (12/2023 – 09/2024)</span>
        <ul>
          <li>Consultoría tecnológica y definición de soluciones digitales alineadas con objetivos de negocio.</li>
          <li>Desarrollo e implementación de software como parte del equipo técnico.</li>
          <li>Uso de <strong>WordPress</strong> para soluciones digitales con <strong>CMS</strong>.</li>
        </ul>
      </li>

      <li className="encabezado">
        <span className="trabajo">Soldado Profesional – Servicio Militar</span>
        <span className="centro"> Ejército de Tierra (05/2021 – 05/2023)</span>
      </li>

      <li className="encabezado">
        <span className="trabajo">Técnico Informático</span>
        <span className="centro"> Decathlon España (04/2018 – 05/2021)</span>
        <ul>
          <li>Testing funcional manual de nuevas funcionalidades web.</li>
          <li>Soporte técnico y mantenimiento de equipos y sistemas informáticos.</li>
        </ul>
      </li>

      <li className="encabezado">
        <span className="trabajo">Técnico Instalador de Redes Informáticas</span>
        <span className="centro"> Zener Plus SL (06/2017 – 11/2017)</span>
        <ul>
          <li>Instalación de puntos de acceso 4G en viviendas.</li>
          <li>Despliegue de redes en centros educativos (Escuelas Conectadas, Galicia).</li>
        </ul>
      </li>

      <li className="encabezado">
        <span className="trabajo">Desarrollador Web</span>
        <span className="centro"> Serinza Solution SL (01/2017 – 06/2017)</span>
        <ul>
          <li>Digitalización e integración de sistemas para administraciones públicas.</li>
          <li>Mantenimiento de portales institucionales y plataformas <strong>eCommerce</strong>.</li>
          <li>Apps móviles <strong>Android</strong> enfocadas a gestión interna y servicios digitales.</li>
        </ul>
      </li>

      <li className="encabezado">
        <span className="trabajo">Soporte Informático</span>
        <span className="centro"> Bits & Company (01/2014 – 06/2017)</span>
        <ul>
          <li>Reparación, montaje y mantenimiento de equipos y servidores informáticos.</li>
        </ul>
      </li>
    </ul>
  </div>
</div>

    </div>
  );
};

export default Habilidades;
