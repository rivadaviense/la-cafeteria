import "./itemDetail.css";

const ItemDetail = ({ item }) => {
  return (
    <div className="tarjeta-detalle">
      <img src={item.imageUrl} alt={item.title} />
      <div className="info">
        <h2>{item.title} </h2> {""}
        <description> {item.description} </description>
        <precio> Precio: $ {item.price} </precio>
      </div>
    </div>
  );
};

export default ItemDetail;
