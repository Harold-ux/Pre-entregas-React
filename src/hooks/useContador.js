import { useEffect, useState } from "react";

const useContador = () => {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    const dataSave = localStorage.getItem("contador");
    if (dataSave !== null) {
      setContador(parseInt(dataSave, 10));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("contador", contador);
    console.log(contador);
  }, [contador]);

  const aumentar = () => {
    setContador((contador) => contador + 1);
  };

  const resetear = () => {
    localStorage.removeItem("contador");
    setContador(0);
  };

  return { contador, aumentar, resetear };
};
export default useContador;
