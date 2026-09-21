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
    three: (
      <svg
        className="tech-svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 38 43"
        role="img"
        aria-label="Three.js"
      >
        <title>Three.js</title>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.7346 0.971817L36.0112 18.4767C38.3367 19.8206 38.3368 23.1799 36.0115 24.5239L5.73423 42.0292C3.40538 43.3751 0.5 41.6914 0.5 39.0057V3.99513C0.5 1.31072 3.40451 -0.375901 5.7346 0.971817ZM4.23226 3.56854C3.90991 3.38205 3.5 3.61216 3.5 3.99513V39.0057C3.5 39.3874 3.90902 39.6188 4.23264 39.4321L34.5099 21.9268C34.8369 21.7379 34.8371 21.2631 34.5101 21.0742L4.23226 3.56854Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.772 9.44228L3.81036 15.2013C3.61917 15.3116 3.5 15.5166 3.5 15.7409V27.259C3.5 27.483 3.61986 27.6894 3.81109 27.7999L13.772 33.5593C13.9636 33.6701 14.2 33.6701 14.3916 33.5593L24.352 27.801C24.5445 27.6897 24.6636 27.4839 24.6636 27.2599V15.7418C24.6636 15.5177 24.5437 15.3114 24.3525 15.2009L14.3916 9.44228C14.2002 9.33183 13.9634 9.33183 13.772 9.44228ZM12.2711 6.8447C13.3914 6.19744 14.7722 6.19744 15.8925 6.8447L25.8534 12.6033C26.9738 13.2508 27.6636 14.4483 27.6636 15.7418V27.2599C27.6636 28.5535 26.9748 29.7497 25.8539 30.398L15.8928 36.1567C14.7726 36.804 13.3914 36.8042 12.2711 36.1569L2.31024 30.3975C1.18988 29.7499 0.5 28.5524 0.5 27.259V15.7409C0.5 14.4478 1.18843 13.2509 2.31048 12.6032L12.2711 6.8447Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.5 14.9575C0.5 13.6056 1.9625 12.7612 3.13325 13.4378L14.7031 20.1277C15.2562 20.4459 15.5814 21.0321 15.5814 21.6482V35.4708C15.5814 36.0069 15.2953 36.5022 14.831 36.7701C14.3666 37.038 13.7946 37.0377 13.3306 36.7694L1.38379 29.8619L1.37869 29.8589C0.825347 29.5407 0.5 28.9544 0.5 28.3382V14.9575ZM3.5 17.1153L12.5814 22.3663V32.8708L3.5 27.6201V17.1153Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24.7545 13.5966C26.0542 12.8459 27.6596 13.7907 27.6633 15.2724L27.6633 15.2762L27.6633 28.2328C27.6633 28.9247 27.2945 29.5654 26.6943 29.9121L26.692 29.9134L15.4903 36.3896C14.1948 37.1379 12.5811 36.2001 12.5811 34.7103V21.7545C12.5811 21.0623 12.9502 20.4213 13.5509 20.0747L13.5523 20.0739L24.7545 13.5966ZM24.6633 17.1148L15.5811 22.3663V32.8718L24.6633 27.621V17.1148Z"
          fill="currentColor"
        />
      </svg>
    ),
    gsap: (
      <svg
        className="tech-svg gsap-svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 82 30"
        role="img"
        aria-label="GSAP"
      >
        <title>GSAP</title>
        <path
          fill="currentColor"
          d="M23.81 14.012v.013l-1.075 4.666c-.058.264-.322.457-.626.457H20.81a.218.218 0 0 0-.208.156c-1.198 4.064-2.82 6.857-4.962 8.534-1.822 1.428-4.068 2.094-7.069 2.094-2.696 0-4.514-.867-6.056-2.579-2.038-2.262-2.88-5.966-2.37-10.428C1.065 8.548 5.41.095 13.776.095c2.545-.022 4.543.763 5.933 2.33 1.47 1.658 2.216 4.154 2.22 7.422a.55.55 0 0 1-.549.536h-6.13a.42.42 0 0 1-.407-.41c-.05-2.26-.72-3.36-2.052-3.36-2.35 0-3.736 3.19-4.471 4.958-1.027 2.47-1.55 5.153-1.447 7.825.049 1.244.249 2.993 1.43 3.718 1.047.642 2.541.216 3.446-.495.904-.712 1.632-1.943 1.938-3.066.043-.156.046-.277.005-.331-.043-.056-.162-.069-.253-.069h-1.574a.572.572 0 0 1-.438-.202.42.42 0 0 1-.087-.362l1.076-4.674c.053-.239.27-.42.537-.452v-.012h10.33c.024 0 .049 0 .072.005.268.035.457.284.452.556h.002Z"
        />
        <path
          fill="currentColor"
          d="M41.595 8.65a.548.548 0 0 1-.548.53h-5.646c-.37 0-.679-.3-.679-.665 0-1.647-.57-2.449-1.736-2.449s-1.918.716-1.94 1.967c-.025 1.395.764 2.663 3.01 4.841 2.957 2.774 4.142 5.231 4.085 8.479C38.048 26.605 34.477 30 29.043 30c-2.775 0-4.895-.742-6.305-2.206-1.431-1.487-2.087-3.669-1.95-6.485a.548.548 0 0 1 .549-.53h5.84a.55.55 0 0 1 .422.208.48.48 0 0 1 .106.384c-.065 1.016.112 1.775.512 2.195.256.272.613.41 1.058.41 1.079 0 1.711-.762 1.735-2.09.02-1.148-.343-2.154-2.321-4.189-2.555-2.496-4.846-5.075-4.775-9.13.042-2.352.976-4.503 2.631-6.057C28.295.868 30.688 0 33.466 0c2.783.02 4.892.814 6.269 2.36 1.304 1.465 1.931 3.581 1.862 6.29h-.002Z"
        />
        <path
          fill="currentColor"
          d="m59.095 29.012.037-27.933a.525.525 0 0 0-.529-.533h-8.738c-.294 0-.423.253-.507.42L36.706 28.841v.005l-.005.007c-.14.343.126.71.497.71h6.108c.33 0 .549-.1.656-.308l1.213-2.915c.149-.389.177-.425.601-.425h5.836c.406 0 .414.008.408.405l-.131 2.71a.525.525 0 0 0 .528.533h6.171a.523.523 0 0 0 .403-.182.458.458 0 0 0 .104-.369Zm-10.81-9.326a1.67 1.67 0 0 1-.138-.005.147.147 0 0 1-.13-.184c.012-.04.029-.095.054-.162l4.376-10.828a2.99 2.99 0 0 1 .136-.313c.071-.146.157-.156.184-.048.023.09-.502 11.118-.502 11.118-.041.413-.06.43-.467.464l-3.509-.04h-.008l.003-.002Z"
        />
        <path
          fill="currentColor"
          d="M71.543.546h-4.639c-.245 0-.52.13-.584.422l-6.456 28.03a.423.423 0 0 0 .088.363.573.573 0 0 0 .437.202h5.798c.312 0 .525-.153.583-.418l.704-3.177c.05-.248-.036-.44-.258-.556a52.313 52.313 0 0 1-.312-.162l-1.005-.523-1-.522-.387-.201a.186.186 0 0 1-.103-.17.199.199 0 0 1 .2-.194l3.177.014c.95.005 1.901-.062 2.836-.234 6.58-1.215 10.95-6.485 11.076-13.656.108-6.12-3.308-9.221-10.15-9.221l-.005.003Zm-1.579 16.68h-.124c-.279 0-.328-.03-.336-.04-.005-.007 1.832-8.073 1.833-8.084.047-.233.045-.367-.099-.446-.184-.102-2.866-1.516-2.866-1.516a.189.189 0 0 1-.101-.172.197.197 0 0 1 .197-.192h4.241c1.32.04 2.056 1.221 2.021 3.238-.061 3.491-1.721 7.09-4.766 7.213Z"
        />
      </svg>
    ),
  };

  return (
    <div className="proyectos swing-in-left-fwd">
      <h2 className="titulo">Proyectos Realizados</h2>

      <div className="tarjetas">
        {proyectos.map((proyecto, index) => (
          <div className="tarjeta" key={index}>
            <div className="enlace-proyecto">
              {proyecto.enlace ? (
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
              ) : proyecto.imagen ? (
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
            {proyecto.repositorio ? (
              <div className="pie-tarjeta">
                {Array.isArray(proyecto.repositorio) ? (
                  proyecto.repositorio.map((repo, i) => (
                    <div
                      key={repo.url}
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
            ) : (
              <div
                className="pie-tarjeta pie-tarjeta--placeholder"
                aria-hidden="true"
              >
                <span className="enlace-github">
                  Code <i className="fab fa-github"></i>
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Proyectos;
