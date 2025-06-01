import { NavLink } from "react-router-dom";

const Navbar = () => (
  <ul className="nav-container">
    <li>
      <NavLink to="/">Home</NavLink>
    </li>
    <li>
      <NavLink to="/proyectos">Proyectos</NavLink>
    </li>
    <li>
      <NavLink to="/habilidades">Sobre mí</NavLink>
    </li>
    <li>
      <NavLink to="/contacto">Contacto</NavLink>
    </li>
    {/* <li>
      <NavLink to="/descargarCV">Descargar CV</NavLink>
    </li> */}
  </ul>
);

export default Navbar;
