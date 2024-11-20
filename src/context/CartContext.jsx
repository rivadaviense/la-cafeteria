import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    let isInCart = cart.some((el) => el.id === product.id);

    if (isInCart) {
      let updatedCart = cart.map((elemento) => {
        if (elemento.id === product.id) {
          return {
            ...elemento,
            quantity: elemento.quantity + 1,
          };
        }
        return elemento;
      });
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: product.quantity }]);
    }
  };

  const removeById = (id) => {
    const filteredCart = cart.filter((elemento) => elemento.id !== id);
    setCart(filteredCart);
  };

  const resetCart = () => {
    setCart([]);
  };

  // Función para obtener la cantidad total de artículos en el carrito
  const getTotalQuantity = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  };

  // Función para obtener el monto total en función de la cantidad y precio de cada artículo
  const getTotalAmount = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const data = {
    cart,
    addToCart,
    removeById,
    resetCart,
    getTotalQuantity,
    getTotalAmount,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};
