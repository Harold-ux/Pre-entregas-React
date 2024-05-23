import React from "react";


const Contador = ({ contador, aumentar, resetear }) => {
  return (
    <div>
      <p> Contador: {contador} </p>
      <button onClick={aumentar}>+</button>
      <button onClick={resetear}>Limpiar</button>
    </div>
  );
};

export default Contador;
