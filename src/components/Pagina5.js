import { useState, useEffect } from "react";
import {AuthContextProvider} from "../context/authContext"
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import { getProductos } from "../services/CardService";

import Pagina5Head from "../Views/Pagina5Head"
import Pagina5Cards from "../Views/Pagina5Cards"
import Pagina5Carousel from "../Views/Pagina5Carousel";
import Pagina5Navegacion from "../Views/Pagina5Navegacion";

//Mis estilos css
import "../css/estilos.css";

//Aqui estan mis imagenes
import imagenes from "../assets/imagenes";


export default function Pagina5() {


  const [productos, setProductos] = useState([]);

  const {busqueda} = useParams()

  const obtProductos = async () => {
      try {
          const productosObtenidos = await getProductos();
          setProductos(productosObtenidos)
      } catch (error) {
          console.log(error)
      };
  };

  useEffect(() => {
      obtProductos();
  },[])
  

  return (

    // HEADER CARDS
    <AuthContextProvider>
      <Pagina5Navegacion />
      <section className="contenedor_p5 container-xl bg-light">
        
        <div className="pagina5_body col-lg-9">
          <Pagina5Head />
          <Pagina5Carousel />
          
        </div>
        <div className="pagina5_cards col-lg-3">
            {productos.map((prod, i) => (
                <Pagina5Cards key={i} producto={prod} />
            ))}
            {/* <Pagina5Cards /> */}
        </div>
        
      </section>
    </AuthContextProvider>
  );
}
