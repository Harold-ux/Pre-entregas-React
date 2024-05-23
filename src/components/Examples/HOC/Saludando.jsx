import React, { useState } from "react";


const conSaludo = (Componente) => {
  return (props) => {
    const [drSeleccionado, setDrSeleccionado] = useState(null);

    const doctorId = (e) => {
      const idSeleccionado = parseInt(e.target.value, 10);
      setDrSeleccionado(idSeleccionado);
    };

    const getSala = (doctorId) => {
      const salas = {
        1: "Sala 1",
        2: "Sala 2",
        3: "Sala 3",
        4: "Sala 4",
        5: "Sala 5",
        6: "Sala 6",
        7: "Sala 7",
        8: "Sala 8",
        9: "Sala 9",
        10: "Sala 10",
      };
      return salas[doctorId] || "Sala no asignada";
    };

    return (
        <div>
          <p>Seleccione Dr asignado</p>
          <Componente {...props} onChange={doctorId} />
          {drSeleccionado && <p>Favor dirigirse a {getSala(drSeleccionado)}</p>}
        </div>
      );
      
  };
};

export default conSaludo;
