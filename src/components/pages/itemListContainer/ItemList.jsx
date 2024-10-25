import { Card } from "../../common/card/Card";
import "./ItemList.css";

const ItemList = ({ items = [] }) => {
  return (
    <>
      <h2 className="titulo-card">Nuestros Productos</h2> {}
      <div className="item-list-container">
        {items.map(({ id, title, price, stock, imageUrl }) => (
          <Card
            key={id}
            title={title}
            price={price}
            stock={stock}
            image={imageUrl}
            id={id}
          />
        ))}
      </div>
    </>
  );
};

export default ItemList;
