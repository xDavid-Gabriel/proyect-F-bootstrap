import { Link } from "react-router-dom";

//Mis estilos css
import "../css/estilos.css";

//Aqui estan mis imagenes
import imagenes from "../assets/imagenes";

export default function Pagina5() {
  /*Codigo del slider*/
  // const slider = document.querySelector("#slider");
  // let sliderSection = document.querySelectorAll(".slider__section");
  // let sliderSectionLast = sliderSection[sliderSection.length - 1];

  // slider.insertAdjacentElement("afterbegin", sliderSectionLast);

  // const Derecha = () => {
  //   let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
  //   slider.style.marginLeft = "-200%";
  //   slider.style.transition = "all 0.5s";
  //   setTimeout(() => {
  //     slider.style.transition = "none";
  //     slider.insertAdjacentElement("beforeend", sliderSectionFirst);
  //     slider.style.marginLeft = "-100%";
  //   }, 500);
  // };

  // const Izquierda = () => {
  //   let sliderSection = document.querySelectorAll(".slider__section");
  //   let sliderSectionLast = sliderSection[sliderSection.length - 1];
  //   slider.style.marginLeft = "0";
  //   slider.style.transition = "all 0.5s";
  //   setTimeout(() => {
  //     slider.style.transition = "none";
  //     slider.insertAdjacentElement("afterbegin", sliderSectionLast);
  //     slider.style.marginLeft = "-100%";
  //   }, 500);
  // };

  // setInterval(() => {
  //   Derecha();
  // }, 4000);
  /*-------------------------------*/

  return (
    <section className="pagina5 container grid">
      <div className="imagen_5 col-8">
        <img src={imagenes.img10_fondo_pagina_5} alt="cocinar" />

        <div className="buscador__2">
          <h3>
            Alquila cocinas fantasma <span>Aqui!!!</span>
          </h3>
          <input
            type="search"
            placeholder="Buscar por zonas Ejemplo: Miraflores"
          />
          <button className="propietario__2">Soy propietario</button>
          <Link to="/pagina6" className="ingresar__2">
            Ingresar
          </Link>
        </div>
      </div>

      <div className="informacion__cocinas col-9-12 col-md-2-5 col-sm-4 col-xs-6">
        <h4 className="text-body">Cocina recien remodelada</h4>
        <p className="precio">S/ 100</p>
        <p>Listed in la Victoria. Lima</p>
        <div className="contenido__botones">
          <button className="contactar">
            Contactar <img src={imagenes.img15_mensaje} alt="mensaje" />
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

      <div className="detalles col-9-12 col-md-6-9 col-sm-4 col-xs-6">
        <h4 className="text-body">Details</h4>
        <div className="medidas">
          <p>
            <span>Area:</span>6m2
          </p>
          <p>
            <span>Implentado:</span>Si
          </p>
        </div>
        <p>
          La cocina está implementada, recién remodelada, ubicada en primer piso
        </p>
      </div>

      <div className="mapa col-9-12 col-md-2-5 col-sm-4 col-xs-6">
        <h4 className="text-body">Publicado en</h4>
        <p>La Victoria. Lima</p>
        <img src={imagenes.img19_mapa} alt="Mapa" />
      </div>

      <div className="calificacion col-9-12 col-md-6-9 col-sm-4 col-xs-6">
        <h4 className="text-body">Calificaciones del arrendador</h4>
        <img src={imagenes.img20_calificacion} alt="calificacion" />
        <p>Calificacion de 10 personas Mienbro desde Octubre 2021</p>
      </div>

      <div className="todo--slider col-2-5 col-md-10">
        <div className="contenido__slider">
          <div className="slider" id="slider">
            <div className="slider__section">
              <img
                src={imagenes.img11_slider_1}
                alt="chef"
                className="slider__img"
              />
            </div>
            <div className="slider__section">
              <img
                src={imagenes.img12_slider_2}
                alt="cocina bonita"
                className="slider__img"
              />
            </div>
            <div className="slider__section">
              <img
                src={imagenes.img13_slider_3}
                alt="cocina linda"
                className="slider__img"
              />
            </div>
            <div className="slider__section">
              <img
                src={imagenes.img14_slider_4}
                alt="cocina grande"
                className="slider__img"
              />
            </div>
          </div>
          <div className="slider__btn slider__btn--right" /*onClick={Derecha}*/>
            🡲
          </div>
          <div
            className="slider__btn slider__btn--left" /*onClick={Izquierda}*/
          >
            🡰
          </div>
        </div>
      </div>
    </section>
  );
}
