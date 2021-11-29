import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//import NombreFunción from "ruta/Nombre_Archivo"
import Pagina1 from "./components/Pagina1";
import Pagina2 from "./components/Pagina2";
import Pagina3 from "./components/Pagina3";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Pagina1 />} />
          <Route path="/pagina2" element={<Pagina2 />} />
          <Route path="/pagina3" element={<Pagina3 />} />
        </Routes>
      </Router>
    </>
  );
}
