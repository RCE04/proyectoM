import './App.css'
import { Routes, Route } from "react-router-dom"
import Inicio from "./inicio";
import Madera from './madera';
import Nosotros from './nosotros';
import Contactanos from './contactanos';


function App() {
  return (
    <div className="Aplicacion">
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path='/madera' element={<Madera />} />
        <Route path='/nosotros' element={<Nosotros />} />
        <Route path="/contactanos" element={<Contactanos />} />
      </Routes>
    </div>
  );
}

export default App;

