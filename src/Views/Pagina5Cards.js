import { useState, useEffect } from "react";
import {Card} from 'react-bootstrap'

import { getProductos } from "../services/CardService";
import avatar from "../assets/img/avatar64px.png"

import imagenes from "../assets/imagenes";




export default function Pagina5Cards({producto}) {

    const {titulo, descripcion, precio, imagen, area, categoria, pais, ciudad, distrito, amoblado } = producto

    return (

        <>

            {/* #######  CARD 1 #########*/}
            <div className="card1 card mb-3 shadow ">
                <div className="card-body">
                    <h4 className="card-title">{titulo}</h4>
                    <p className="card-text">S/{precio}</p>
                    <p className="card-text"><small className="text-muted">Listed in {distrito} {ciudad}</small></p>
                    <div className="d-grid gap-1 d-lg-flex justify-content-sm-start">
                        <div className="contenido__botones">
                            <button className="contactar">
                            <span className="btn-contactar px-1">Contactar</span><img src={imagenes.img15_mensaje} alt="mensaje" className="px-2" />
                            </button>
                            <button className="compartir">
                            <img src={imagenes.img16_guardar} alt="guardar" />
                            </button>
                            <button className="compartir">
                            <img src={imagenes.img17_compartir} alt="compartir" />
                            </button>
                            <button className="compartir">
                            <img src={imagenes.img18_tres_puntos} alt="puntos" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* #######  CARD DETAILS #########*/}
            <div className="card2 card mb-3 shadow">
                <div className="card-body">
                    <h4 className="card-title">Detalles</h4>
                    <p className="card-text">Area: {area}</p>
                    <p className="card-text">Implementado: Sí {/*{implementar ===true ? "Si" : "No"}*/}</p>
                    <p className="card-text"><small className="text-muted">{descripcion}</small></p>
                </div>
            </div>
            {/* #######  CARD MAPA #########*/}
            <div className="card3 card mb-3 shadow">
                <div className="card-body">
                    <h4 className="card-title">Publicado en:</h4>
                    <p className="card-text"><small className="text-muted">{distrito} {ciudad}</small></p>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d62427.46441322061!2d-77.0296179!3d-12.0630149!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2spe!4v1636331455604!5m2!1ses-419!2spe" width="100%" height="auto" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
                </div>
            </div>
            {/* #######  CARD CALIFICACIÓN #########*/}
            <div className="card4 card mb-3 shadow">
                <div className="row g-0">
                    <div className="col-md-3">
                        <img src={avatar} alt="avatar" className="avatar_p5 p-2"/>
                    </div>
                    <div className="col">
                        <div className="card-body">
                            <h5 className="card-title">Calificaciones del arrendador</h5>
                            
                            {/*<img src={flag} className="d-block" alt="flag" />
                            <img src={stars} className="d-block" alt="stars" />*/}
                            <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
