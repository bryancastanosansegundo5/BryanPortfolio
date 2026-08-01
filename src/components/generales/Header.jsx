import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <header>
        <h1 className="nombre">
          <Link to="/" className="nombre__link">
            Bryan Castaño San Segundo
          </Link>
        </h1>
        <Navbar />
      </header>
    </div>
  );
};

export default Header;
