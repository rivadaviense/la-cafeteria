import "./itemDetail.css";
import Counter from "../../common/counter/Counter";

const ItemDetail = ({ item, agregarAlCarrito, totalInCart }) => {
  return (
    <div className="tarjeta-detalle">
      <img src={item.imageUrl} alt={item.title} />
      <div className="info">
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <p className="precio">Precio: ${item.price}</p>

        <Counter
          stock={item.stock}
          agregarAlCarrito={agregarAlCarrito}
          totalInCart={totalInCart}
        />
      </div>
    </div>
  );
};

export default ItemDetail;
