import { useState, useEffect } from "react";
import ItemList from "./ItemList.jsx";
import { useParams } from "react-router-dom";
import { db } from "../../../firebaseConfig.js";
import { collection, getDocs, query, where } from "firebase/firestore";
import Skeleton from "@mui/material/Skeleton";

export const ItemListContainer = () => {
  const { name } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const productsCollection = collection(db, "products");

    let docsRef = productsCollection;
    if (name) {
      docsRef = query(productsCollection, where("category", "==", name));
    }

    getDocs(docsRef).then((res) => {
      let arrayEntendible = res.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });

      setItems(arrayEntendible);
    });
  }, [name]);

  if (items.length === 0) {
    return (
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "center", // Centrar horizontalmente
            alignItems: "center", // Centrar verticalmente
            gap: "10px",
            flexWrap: "wrap",
            marginTop: "20px", // Espaciado superior
          }}
        >
          <Skeleton variant="rectangular" style={{ width: 200, height: 250 }} />
          <Skeleton variant="rectangular" style={{ width: 200, height: 250 }} />
          <Skeleton variant="rectangular" style={{ width: 200, height: 250 }} />
          <Skeleton variant="rectangular" style={{ width: 200, height: 250 }} />
        </div>
      </>
    );
  }

  // const agregarProductos = () => {
  //   const productsCollection = collection(db, "products");
  //   products.forEach((product) => {
  //     addDoc(productsCollection, product);
  //   });
  // };

  return (
    <div>
      <ItemList items={items} />
    </div>
  );
};
