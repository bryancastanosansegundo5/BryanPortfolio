import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/generales/Header";
import Footer from "./components/generales/Footer";
import Contacto from "./pages/Contacto";
import Home from "./pages/Home";
import Proyectos from "./pages/Proyectos";
import Habilidades from "./pages/Habilidades";
import "./styles/styles.css";
import ScrollTopButton from "./components/generales/ScrollTopButton";

// import DescargarCV from "./pages/DescargarCV"; // si lo añades después

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/proyectos" element={<Proyectos />} />
            <Route path="/habilidades" element={<Habilidades />} />
            <Route path="/contacto" element={<Contacto />} />
            {/* <Route path="/descargarCV" element={<DescargarCV />} /> */}
          </Routes>
        </main>
        <Footer />
        <ScrollTopButton />
      </div>
    </Router>
  );
};

export default App;
