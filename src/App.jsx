import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer";
import { Navbar } from "./components/layout/navbar/Navbar";
import CartContainer from "./components/pages/cart/CartContainer";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer";
import Checkout from "./components/pages/checkout/Checkout";
import Error from "./components/pages/error/Error";
import { CartContextProvider } from "./context/CartContext";
import { Toaster } from "sonner";

function App() {
  return (
    <BrowserRouter>
      <Toaster duration={2000} richColors />
      <CartContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />

          <Route path="/category/:name" element={<ItemListContainer />} />

          <Route path="/cart" element={<CartContainer />} />

          <Route path="/ItemDetail/:id" element={<ItemDetailContainer />} />

          <Route path="/checkout" element={<Checkout />} />

          <Route path="*" element={<Error />} />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
