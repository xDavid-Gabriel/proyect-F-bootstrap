<<<<<<< HEAD
import React from 'react'
import HeadPag2Service from '../Views/HeadPag2View'

export default function Pagina2() {
  return (
    <div>
      <HeadPag2Service/>
      {/* <Cards/> */}
      
    </div>
  )
}

            
      
   

=======
import { Link } from "react-router-dom";

//Mis estilos css
import "../css/estilos.css";

//Aqui estan mis imagenes
import imagenes from "../assets/imagenes";

export default function Pagina2() {
  return (
    <section className="pagina2 container grid">
      <div className="contenido__buscador col-11">
        <img src={imagenes.img2} />

        <div className="buscador">
          <h3 className="text-title">
            Alquila cocinas fantasma <span>Aqui!!!</span>
          </h3>
          <input
            type="search"
            placeholder="Buscar por zonas Ejemplo: Miraflores"
          />
          <Link to="/pagina3" className="propietario">
            Soy propietario
          </Link>
          <Link to="/pagina3" className="ingresar">
            Ingresar
          </Link>
        </div>
      </div>

      <div className="text__clientes col-10">
        <p className="text-body">
          Acercate a tus clientes, amplia tu negocio, escoge aqui tu proximo
          punto de reparto
        </p>
      </div>
      {/* Estas son las tarjetas */}
      <div className="tarjetas col-3 col-md-2-5 col-sm-4 col-xs-6">
        <img src={imagenes.img3_card1} alt="cocina" />
        <p>
          S/ 1,000 x mes
          <br />
          +S/ 600 Mantenimiento
          <br />
          Cocinas modernas lista para
          <br />
          cocinar y hacer [...]
          <br />
          Los olivos Lima
        </p>
      </div>

      <div className="tarjetas col-3 col-md-6-9 col-sm-4 col-xs-6">
        <img src={imagenes.img4_card2} alt="cocina" />
        <p>
          S/ 1,000 x mes
          <br />
          +S/ 600 Mantenimiento
          <br />
          Cocinas modernas lista para
          <br />
          cocinar y hacer [...]
          <br />
          Los olivos Lima
        </p>
      </div>

      <div className="tarjetas col-3 col-md-2-5 col-sm-4 col-xs-6">
        <img src={imagenes.img5_card3} alt="cocina" />
        <p>
          S/ 1,000 x mes
          <br />
          +S/ 600 Mantenimiento
          <br />
          Cocinas modernas lista para
          <br />
          cocinar y hacer [...]
          <br />
          Los olivos Lima
        </p>
      </div>

      <div className="tarjetas col-3 col-md-6-9 col-sm-4 col-xs-6">
        <img src={imagenes.img6_card4} alt="cocina" />
        <p>
          S/ 1,000 x mes
          <br />
          +S/ 600 Mantenimiento
          <br />
          Cocinas modernas lista para
          <br />
          cocinar y hacer [...]
          <br />
          Los olivos Lima
        </p>
      </div>
    </section>
  );
}
>>>>>>> 893c12494c01fa30667c5578b49eed638b399c9d
