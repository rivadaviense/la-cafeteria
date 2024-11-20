import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import "./CartContainer.css";

const CartContainer = () => {
  const { cart, resetCart, removeById, getTotalAmount } =
    useContext(CartContext);

  let totalEnElCarrito = getTotalAmount();

  return (
    <div className="cart-container">
      <h1>Tu carrito</h1>
      {cart.map((product) => {
        return (
          <div key={product.id} className="cart-item">
            <img src={product.imageUrl} alt={product.title} />
            <div>
              <h2>{product.title}</h2>
              <h3>Cantidad: {product.quantity}</h3>
            </div>
            <button onClick={() => removeById(product.id)}>Eliminar</button>
          </div>
        );
      })}
      {cart.length > 0 && (
        <button onClick={resetCart} aria-label="Limpiar carrito">
          Limpiar carrito
        </button>
      )}
      <div className="cart-summary">
        <h2>El total a pagar es: {totalEnElCarrito} pesos</h2>
        <Link to="/checkout">Finalizar Compra</Link>
      </div>
    </div>
  );
};

export default CartContainer;
