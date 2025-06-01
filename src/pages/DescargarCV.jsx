import cv from "../../assets/Curriculum Vitae - Bryan Castano San Segundo.pdf";
import Toastify from "toastify-js";
import "../../styles/descargarcv.css";

const DescargarCV = () => {
  const handleDownload = () => {
    Toastify({
      text: "Ha descargado el CV de Bryan Castaño",
      duration: 3000,
      close: true,
      gravity: "top",
      position: "left",
      stopOnFocus: true,
    }).showToast();
  };

  return (
    <div className="descargarCV swing-in-left-fwd">
      <a
        href={cv}
        download
        className="cv-button"
        onClick={handleDownload}
        id="documentoPdf"
      >
        Descargar CV
      </a>

      {/* Si quieres mostrar el PDF visualmente: */}
      <object data={cv} type="application/pdf" width="100%" height="500px">
        No se pudo mostrar el CV.
      </object>
    </div>
  );
};

export default DescargarCV;
