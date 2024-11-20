import { useContext, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore";
import { toast } from "sonner";
import Skeleton from "@mui/material/Skeleton";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const { addToCart, getTotalQuantity } = useContext(CartContext);

  let totalInCart = getTotalQuantity(id);

  const [item, setItem] = useState(null);

  useEffect(() => {
    const productsColecction = collection(db, "products");
    const docRef = doc(productsColecction, id);
    getDoc(docRef).then((res) => {
      setItem({ ...res.data(), id: res.id });
    });
  }, [id]);

  const agregarAlCarrito = (cantidad) => {
    const objeto = { ...item, quantity: cantidad };
    addToCart(objeto);
    toast.success("Producto agregado al carrito", {
      style: {
        backgroundColor: "orange",
        color: "white",
        fontWeight: "bold",
      },
    });
  };

  if (!item) {
    return (
      <div className="tarjeta-detalle">
        <Skeleton variant="rectangular" width={300} height={300} />
        <div className="info">
          <Skeleton variant="text" width={200} height={30} />
          <Skeleton variant="text" width={250} height={20} />
          <Skeleton variant="text" width={100} height={20} />
        </div>
      </div>
    );
  }

  return (
    <ItemDetail
      item={item}
      agregarAlCarrito={agregarAlCarrito}
      totalInCart={totalInCart}
    />
  );
};

export default ItemDetailContainer;
