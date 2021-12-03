import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Mis estilos css
import "./css/estilos.css";


//import NombreFunción from "ruta/Nombre_Archivo"
import Header from "./components/Header";
import Publicar from "./Views/UploadView";
import Pagina2 from "./components/Pagina2";
import Pagina3 from "./components/Pagina3";
import Pagina4 from "./components/Pagina4";
import Pagina5 from "./components/Pagina5";
import FormPublicar from "./components/FormPublicar";

export default function App() {
  return (
    <>
      <Router>
          <Routes>
              <Route path="/" element={<Header/>} />
              <Route path="/Publicar" element={<Publicar />} />
              <Route path="/pagina2" element={<Pagina2 />} />
              <Route path="/pagina3" element={<Pagina3 />} />
              <Route path="/pagina4" element={<Pagina4 />} />
              <Route path="/pagina5" element={<Pagina5 />} />
              <Route path="/FormPublicar " element={<FormPublicar />} />
          </Routes>
      </Router>

    </>
  );
}
