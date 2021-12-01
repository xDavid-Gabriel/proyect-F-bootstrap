import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//import NombreFunción from "ruta/Nombre_Archivo"
import Pagina1 from "./components/Pagina1";
import Pagina2 from "./components/Pagina2";
import Pagina3 from "./components/Pagina3";
import Pagina4 from "./components/Pagina4";
import Pagina5 from "./components/Pagina5";
import Pagina6 from "./components/Pagina6";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Pagina1 />} />
          <Route path="/pagina2" element={<Pagina2 />} />
          <Route path="/pagina3" element={<Pagina3 />} />
          <Route path="/pagina4" element={<Pagina4 />} />
          <Route path="/pagina5" element={<Pagina5 />} />
          <Route path="/pagina6" element={<Pagina6 />} />
        </Routes>
      </Router>
    </>
  );
}
