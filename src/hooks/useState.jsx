// Utilizaremos el useState para hacer un contador como ejemplo de aplicación del hook

import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Agregar {count} veces</p>
      <button onClick={() => setCount(count + 1)}>Clicka</button>
    </div>
  );
};

export default Counter;
