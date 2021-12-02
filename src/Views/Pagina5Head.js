import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/authContext";

//Mis estilos css
import "../css/estilos.css";

//Aqui estan mis imagenes
import imagenes from "../assets/imagenes";


export default function Pagina5Head() {

    // const valorContexto = useContext(AuthContext);
    //valor contexto tiene atributos signIn y user, es mejor desestructurar
    const {signIn} = useContext(AuthContext);

    return (

        <div className="head_p5 mb-3">
            {/* <div className="imagen_p5">
                <img  src={imagenes.img10_fondo_pagina_5} alt="cocinar" />
            </div> */}
            {/* nombre clase anterior en css buscador__2 */}
            <div className="buscador__p5 col">
                <h3>
                    Alquila cocinas fantasma <span>Aqui!!!</span>
                </h3>
                <input
                    className="mb-5 col-8"
                    type="search"
                    placeholder="Buscar por zonas Ejemplo: Miraflores"
                />
                <div>
                    <button className="propietario__2" onClick={signIn}>Soy propietario</button>
                    <Link to="/pagina6" className="ingresar__2">
                        Ingresar
                    </Link>
                </div>
            </div>
        </div>
    )
}

