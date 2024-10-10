import { CartWidget } from "../../common/carWidget/CartWidget";

import "./navbar.css";

export const Navbar = () => {
  return (
    <nav className="container-navbar">
      <img
        className="navbar-logo "
        src="https://res.cloudinary.com/dimxpkvzj/image/upload/v1728589148/_b5e22b84-1dc0-4119-ae13-1a98c3244775_z3w1pl.jpg"
        alt="Logo de la Cafetería"
      />

      <li>café</li>
      <li>cápsulas</li>
      <li>cafeteras</li>

      <CartWidget />
    </nav>
  );
};
export default Navbar;
