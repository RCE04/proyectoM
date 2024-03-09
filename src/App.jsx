import './App.css'
import { Routes, Route } from "react-router-dom"
import Inicio from "./inicio";
import Madera from './madera';
import Nosotros from './nosotros';


function App() {
  return (
    <div className="Aplicacion">
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path='/madera' element={<Madera />} />
        <Route path='/nosotros' element={<Nosotros />} />
      </Routes>
    </div>
  );
}

export default App;

