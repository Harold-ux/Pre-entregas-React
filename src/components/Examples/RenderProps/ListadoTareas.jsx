import { v4 as uuidv4 } from "uuid";
import Contador from "../Contador";
import useContador from "../../../hooks/useContador";


const ListadoTareas = ({ tareas, añadirTarea, eliminarTarea }) => {
  const { contador, aumentar, resetear } = useContador();

  const clickAñadirTarea = () => {
    const nuevoId = uuidv4();
    añadirTarea({ id: nuevoId, nombre: "Tarea " + nuevoId });
    aumentar(); // Incrementar el contador al añadir una tarea
  };

  return (
    <div>
      <button onClick={clickAñadirTarea}>Agregar Tarea</button>
      {tareas.map((tarea) => (
        <div key={tarea.id}>
          <p>{tarea.nombre}</p>
          <button onClick={() => eliminarTarea(tarea.id)}>
            Eliminar tarea
          </button>
        </div>
      ))}
      <Contador className="tareas" contador={contador} aumentar={aumentar} resetear={resetear}/>
    </div>
  );
};

export default ListadoTareas;
