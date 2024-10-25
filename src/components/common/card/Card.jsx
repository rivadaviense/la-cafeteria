import { Link } from "react-router-dom";
import "./card.css";

export const Card = ({ id, title, price, stock, image }) => {
  return (
    <div className="tarjeta">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <h3>Precio: $ {price}</h3>
      <h3>Stock: {stock}</h3>

      <Link to={`/itemdetail/${id}`}>
        <button>VER DETALLE</button>
      </Link>
    </div>
  );
};
