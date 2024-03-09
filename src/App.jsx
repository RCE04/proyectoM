import './App.css'
import { Routes, Route } from "react-router-dom"
import Inicio from "./inicio";
import Madera from './madera';


function App() {
  return (
    <div className="Aplicacion">
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path='/madera' element={<Madera />} />
      </Routes>
    </div>
  );
}

export default App;

