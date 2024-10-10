import "./itemListContainer.css";

const ItemListContainer = ({ greeting }) => {
  return (
    <div>
      <h1 className="titulo-bienvenida"> {greeting} </h1>
    </div>
  );
};

export default ItemListContainer;
