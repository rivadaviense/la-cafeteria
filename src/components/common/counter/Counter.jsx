import { useState } from "react";
import "./counter.css";

const Counter = ({ stock, agregarAlCarrito, totalInCart }) => {
  const [contador, setContador] = useState(1);

  const sumar = () => {
    stock - totalInCart > contador
      ? setContador(contador + 1)
      : alert("Has alcanzado el stock máximo");
  };

  const restar = () => {
    contador > 1 && setContador(contador - 1);
  };

  return (
    <div className="counter-container">
      <h2 className="counter-value">Contador: {contador}</h2>
      <div className="counter-buttons">
        <button onClick={restar}>Restar</button>
        <button onClick={sumar}>Sumar</button>
      </div>
      <button
        className="counter-buttons agregar-button"
        onClick={() => agregarAlCarrito(contador)}
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default Counter;
