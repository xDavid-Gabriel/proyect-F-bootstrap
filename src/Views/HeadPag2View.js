import { Link } from "react-router-dom";
import { obtenerLocal } from "../services/localServices";
import { useState,useEffect } from "react";
/* import axios from "axios"; */
import "../css/estilos.css";
import Card from "./CardView";
import imagenes from "../assets/imagenes";


export default function HeadPag2Service() {

  const [locales,setLocales]=useState([]);
  const [tablaLocal,setTablaLocal]=useState([]);
  const [busqueda,setBusqueda]=useState("");
 
  const peticionGet=async()=>{
    try {
      const localesobtenidos=await obtenerLocal();
     console.table(localesobtenidos); 
    setTablaLocal(localesobtenidos);
    setLocales(localesobtenidos);
      
    } catch (error) {
      console.log(error);
    }
  }

  const handleChange=e=>{
  setBusqueda(e.target.value);
  filtrar(e.target.value);
  }

  const filtrar=(terminoBusqueda)=>{
    var resultadosBusqueda=tablaLocal.filter((elemento)=>{
      if (elemento.ciudad.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
      || elemento.distrito.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
      ){
        return elemento;
      }
    });

    setLocales(resultadosBusqueda);
  }    

  useEffect(()=>{
    peticionGet();
  },[])
  
  return (
      <section className="pagina2 container-xl ">
        <div className="contenido__buscador col-11">
          <img src={imagenes.img2} />
  
          <div className="buscador">
            <h3 className="text-title">
              Alquila cocinas fantasma <span>Aqui!!!</span>
            </h3>
            
            <input
              type="search"
              value={busqueda}
              placeholder="Buscar por zonas o ciudad Ejemplo: Miraflores"
              onChange={handleChange}
            />
            
            <Link to="/Publicar" className="propietario">
              Soy propietario
            </Link>
            <Link to="/Pagina4" className="ingresar">
              Ingresar
            </Link>
          </div>
        </div>
  
        <div className="text__clientes col-10">
          <p className="text-body">
            Acercate a tus clientes, amplia tu negocio, escoge aqui tu proximo
            punto de reparto!!
          </p>
        </div>

        <div className="container d-flex  h-100  ">
                                   
            <div className="row">
                {locales.map(card =>(
                        <div className="col-md-3" key ={card.id}>
                            <Card 
                            price={card.precio} 
                            imageSource={card.imagen}
                            description={card.descripcion} 
                            pais={card.pais} 
                            ciudad={card.ciudad} 
                            distrito={card.distrito} 
                            />
                        </div>
                    ))
                }
            
            </div>
        
            </div>
      </section>
      
      


);
}