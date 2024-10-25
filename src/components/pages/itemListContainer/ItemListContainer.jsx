import { useState } from "react";
import { useEffect } from "react";
import { products } from "../../../product.js";
import ItemList from "./ItemList.jsx";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const { name } = useParams();

  const [items, setItems] = useState([]);

  useEffect(() => {
    const unafraccion = products.filter(
      (producto) => producto.category === name
    );

    const getProducts = new Promise((resolve) => {
      resolve(name ? unafraccion : products);
    });

    getProducts.then((res) => {
      setItems(res);
    });
  }, [name]);

  return <ItemList items={items} />;
};
