import { proyectos } from "../data/proyectos";
import "../styles/proyectos.css";

const Proyectos = () => {
  const springBootIcon = (
    <svg
      className="tech-svg"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <mask id="springboot-mask">
          <rect width="64" height="64" fill="black" />
          <polygon
            fill="white"
            points="20,11.2 44,11.2 56,32 44,52.8 20,52.8 8,32"
          />
          <path
            d="M32 20v11"
            stroke="black"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M25.5 27.5a9 9 0 1 0 13 0"
            fill="none"
            stroke="black"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </mask>
      </defs>
      <rect width="64" height="64" fill="currentColor" mask="url(#springboot-mask)" />
    </svg>
  );

  const tailwindIcon = (
    <svg
      className="tech-svg"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 640"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="currentColor"
        d="M320 128C234.7 128 181.3 170.7 160 256C192 213.3 229.3 197.3 272 208C296.3 214.1 313.7 231.8 333 251.3C364.4 283.1 400.7 320 480 320C565.3 320 618.7 277.3 640 192C608 234.7 570.7 250.7 528 240C503.7 233.9 486.3 216.2 467 196.7C435.6 164.9 399.3 128 320 128zM160 320C74.7 320 21.3 362.7 0 448C32 405.3 69.3 389.3 112 400C136.3 406.1 153.7 423.8 173 443.3C204.4 475.1 240.7 512 320 512C405.3 512 458.7 469.3 480 384C448 426.7 410.7 442.7 368 432C343.7 425.9 326.3 408.2 307 388.7C275.6 356.9 239.3 320 160 320z"
      />
    </svg>
  );

  const iconMap = {
    react: <i className="fab fa-react"></i>,
    js: <i className="fab fa-js-square"></i>,
    css: <i className="fab fa-css3-alt"></i>,
    html: <i className="fab fa-html5"></i>,
    php: <i className="fab fa-php"></i>,
    java: <i className="fab fa-java"></i>,
    springboot: springBootIcon,
    tailwindcss: tailwindIcon,
  };

  return (
    <div className="proyectos swing-in-left-fwd">
      <h2 className="titulo">Proyectos Realizados</h2>

      <div className="tarjetas">
        {proyectos.map((proyecto, index) => (
          <div className="tarjeta" key={index}>
            <div className="enlace-proyecto">
              <a href={proyecto.enlace} target="_blank" rel="noreferrer">
                {proyecto.imagen ? (
                  <img
                    src={`${proyecto.imagen}`}
                    alt={proyecto.titulo}
                    className="imagen-tarjeta"
                  />
                ) : (
                  <div className="imagen-tarjeta imagen-tarjeta--placeholder">
                    <span>{proyecto.titulo}</span>
                  </div>
                )}
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
