import NavBar from "./components/NavBar/NavBar";
import SeleccionDr from "./components/Examples/HOC/SeleccionDr";
import conSaludo from "./components/Examples/HOC/Saludando";
import "./App.css";

const SalaAsignada = conSaludo(SeleccionDr);

function App() {
  return (
    <div>
      <NavBar />
      <SalaAsignada />
    </div>
  );
}

export default App;
