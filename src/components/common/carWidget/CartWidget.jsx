import { FiShoppingCart } from "react-icons/fi";
import "./cartwidget.css";
import { Link } from "react-router-dom";

export const CartWidget = () => {
  return (
    <Link to={"/cart"} className="cart-cart">
      <FiShoppingCart />
      <span className="cart-count">0</span>
    </Link>
  );
};

export default CartWidget;
