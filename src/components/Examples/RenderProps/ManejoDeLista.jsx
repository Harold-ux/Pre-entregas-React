import { useState } from "react";

const ManejoDeLista = ({ render }) => {
  const [tareas, setTareas] = useState([]);
  const [count, setCount] = useState(0);

  const añadirTarea = (nuevaTarea) => {
    setTareas([...tareas, nuevaTarea]);
    setCount(count + 1);
  };

  const eliminarTarea = (idTarea) => {
    const tareasFiltradas = tareas.filter((tarea) => tarea.id !== idTarea);
    setTareas(tareasFiltradas);
  };

  return render(tareas, añadirTarea, eliminarTarea, count);
};
export default ManejoDeLista;
