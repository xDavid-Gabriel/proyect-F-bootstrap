// import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

<<<<<<< HEAD
=======


>>>>>>> 893c12494c01fa30667c5578b49eed638b399c9d
//Mis estilos css
import "./css/estilos.css";


//import NombreFunción from "ruta/Nombre_Archivo"
import Header from "./components/Header";
<<<<<<< HEAD
import Publicar from "./Views/UploadView";
=======
>>>>>>> 893c12494c01fa30667c5578b49eed638b399c9d
import Pagina2 from "./components/Pagina2";
import Pagina3 from "./components/Pagina3";
import Pagina4 from "./components/Pagina4";
import Pagina5 from "./components/Pagina5";
import FormPublicar from "./components/FormPublicar";

export default function App() {
  return (
    <>
    
<Router>
<<<<<<< HEAD
   <Routes>
        <Route path="/" element={<Header/>} />
        <Route path="/Publicar" element={<Publicar />} />
=======
  <Routes>
        <Route path="/" element={<Header/>} />
>>>>>>> 893c12494c01fa30667c5578b49eed638b399c9d
        <Route path="/pagina2" element={<Pagina2 />} />
        <Route path="/pagina3" element={<Pagina3 />} />
        <Route path="/pagina4" element={<Pagina4 />} />
        <Route path="/pagina5" element={<Pagina5 />} />
<<<<<<< HEAD
        <Route path="/FormPublicar " element={<FormPublicar />} />
=======
        <Route path="/pagina6" element={<Pagina6 />} />
>>>>>>> 893c12494c01fa30667c5578b49eed638b399c9d
    </Routes>
</Router>

    
    </>
  );
}
