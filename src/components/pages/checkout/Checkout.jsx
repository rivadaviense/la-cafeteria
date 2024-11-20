import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebaseConfig";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";

import "./checkout.css";

const Checkout = () => {
  const { cart, getTotalAmount, resetCart } = useContext(CartContext);

  const [orderId, setOrderId] = useState(null);

  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  const funcionDelFormulario = (evento) => {
    evento.preventDefault();
    const total = getTotalAmount();
    const order = {
      buyer: userInfo,
      items: cart,
      total: total,
    };
    let refCollection = collection(db, "orders");
    addDoc(refCollection, order).then((res) => {
      setOrderId(res.id);
      resetCart();
    });

    let refCol = collection(db, "products");
    order.items.forEach((item) => {
      let refDoc = doc(refCol, item.id);
      updateDoc(refDoc, { stock: item.stock - item.quantity });
    });
  };

  const capturarInfo = (evento) => {
    const { name, value } = evento.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  if (orderId) {
    return (
      <h2 className="order-id">
        Gracias por tu compra tu ticket es: {orderId}
      </h2>
    );
  }

  return (
    <div className="checkout-container">
      <form onSubmit={funcionDelFormulario} className="checkout-form">
        <input
          type="text"
          placeholder="Nombre y Apellido"
          name="name"
          onChange={capturarInfo}
          className="checkout-input"
        />
        <input
          type="email"
          placeholder="juan@gmail.com"
          name="email"
          onChange={capturarInfo}
          className="checkout-input"
        />
        <input
          type="number"
          placeholder="Tel/Cel 11556784"
          name="phoneNumber"
          onChange={capturarInfo}
          className="checkout-input"
        />
        <button className="checkout-button">Comprar</button>
        <button type="button" className="cancel-button">
          Cancelar
        </button>
      </form>
    </div>
  );
};
export default Checkout;
