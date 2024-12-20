import { CartWidget } from "../../common/carWidget/CartWidget";
import "./navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="container-navbar">
      <Link to="/">
        <img
          className="navbar-logo "
          src="https://res.cloudinary.com/dimxpkvzj/image/upload/v1728589148/_b5e22b84-1dc0-4119-ae13-1a98c3244775_z3w1pl.jpg"
          alt="Logo de la Cafetería"
        />
      </Link>
      <ul>
        <Link to="/category/Grano" className="nav-link">
          Café en Granos
        </Link>
        <Link to="/category/cápsula" className="nav-link">
          Cápsulas
        </Link>
        <Link to="/" className="nav-link">
          Todos
        </Link>
      </ul>

      <CartWidget />
    </nav>
  );
};
export default Navbar;
