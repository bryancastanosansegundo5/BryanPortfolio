import { proyectos } from "../data/proyectos";
import "../styles/proyectos.css";

const Proyectos = () => {
  const iconMap = {
    react: <i className="fab fa-react"></i>,
    js: <i className="fab fa-js-square"></i>,
    css: <i className="fab fa-css3-alt"></i>,
    html: <i className="fab fa-html5"></i>,
    php: <i className="fab fa-php"></i>,
    java: <i className="fab fa-java"></i>,
    springboot: <i className="fas fa-leaf"></i>,
  };

  return (
    <div className="proyectos swing-in-left-fwd">
      <h2 className="titulo">Proyectos Realizados</h2>

      <div className="tarjetas">
        {proyectos.map((proyecto, index) => (
          <div className="tarjeta" key={index}>
            <div className="enlace-proyecto">
              <a href={proyecto.enlace} target="_blank" rel="noreferrer">
                <img
                  src={`${proyecto.imagen}`}
                  alt={`Imagen ${index}`}
                  className="imagen-tarjeta"
                />
              </a>
            </div>
            <div className="contenido-tarjeta">
              <div className="descripcion-tarjeta">
                <h3>{proyecto.titulo}</h3>
                <p>{proyecto.descripcion}</p>
              </div>
              <div className="lenguajes-utilizados">
                <p>
                  Lenguajes utilizados:
                  <br />
                  {proyecto.iconos.map((icono, idx) => (
                    <span key={idx}>{iconMap[icono]}</span>
                  ))}
                </p>
              </div>
            </div>
            <div className="pie-tarjeta">
              {Array.isArray(proyecto.repositorio) ? (
                proyecto.repositorio.map((repo, i) => (
                  <div
                    style={{
                      width: "100%",
                      borderRight:
                        i < proyecto.repositorio.length - 1
                          ? "2px solid white"
                          : "none",
                    }}
                  >
                    <a
                      className="enlace-github"
                      key={i}
                      href={repo.url}
                      target="_blank"
                      rel="noreferrer"
                      style={{ display: "inline-block", marginRight: "10px" }}
                    >
                      {repo.nombre} <i className="fab fa-github"></i>
                    </a>
                  </div>
                ))
              ) : (
                <a
                  href={proyecto.repositorio}
                  target="_blank"
                  className="enlace-github"
                  rel="noreferrer"
                >
                  Code <i className="fab fa-github"></i>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Proyectos;
