import { Navbar } from "./components/layout/navbar/Navbar.jsx";
import ItemListContainer from "./components/common/itemListContainer/ItemListContainer";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting={"Bienvenidos a tu próxima tienda de café"} />
    </div>
  );
}

export default App;
