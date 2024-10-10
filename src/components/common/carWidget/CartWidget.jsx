import { FiShoppingCart } from "react-icons/fi";
import "./cartwidget.css";
export const CartWidget = () => {
  return (
    <div className="cart-widget">
      <FiShoppingCart />
      <span className="cart-count">0</span>
    </div>
  );
};

export default CartWidget;
