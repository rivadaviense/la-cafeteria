import { useState } from "react";

const Counter = () => {
  const [contador, setContador] = useState(0);

  const sumar = () => {
    setContador(contador + 1);
  };

  const restar = () => {
    setContador(contador - 1);
  };

  return (
    <div
      style={{
        margin: "50px",
      }}
    >
      <button onClick={sumar}>Sumar</button>
      <h2>Contador: {contador}</h2>
      <button onClick={restar}>Restar</button>
    </div>
  );
};

export default Counter;
