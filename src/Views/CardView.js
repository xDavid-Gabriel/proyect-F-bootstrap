
/* import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router"; */
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'
/* import "../css/estilos.css"; */



function Card({price,imageSource,description,pais,ciudad,distrito}) {
    
    return (
        <Link className="card text-left" to="/pagina5">
        
            <img src={imageSource} alt="cocina" 
              style={{
              height: "200px",
              objectFit: "cover",
              objectPosition: "center",
            }}
            />
            <div className="card-body"> 
            <p className="card-text text-secondary">
            S/ {price} x mes
            <br />
            +S/ 600 Mantenimiento
            <br />
            {description}
            <br />
            {pais}-{ciudad}-{distrito}
           </p>
           </div>
 	    </Link>
           
           
 	      
                  
          

                                           
           )
}

Card.propTypes={
    imageSource:PropTypes.string
    }
    
export default Card
