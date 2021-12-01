import { Carousel } from "react-bootstrap";

import { Link } from "react-router-dom";

//Aqui estan mis imagenes
import imagenes from "../assets/imagenes";

export default function Pagina5() {
  return (
    <section className="pagina5 d-flex align-items-center position-relative container">
      <div className="row">
        <div className=" position-relative  col-12 col-xxl-9">
          <div className="position-relative">
            <img
              className="img-fluid risas col-12"
              src={imagenes.img10_fondo_pagina_5}
            />
            <h3 className="mx-4 text-title display-5 col-7 col-sm-8 col-md-6 col-xl-5 fw-light">
              Alquila cocinas fantasma <span className="fw-bold">Aqui!!!</span>
            </h3>
          </div>

          <div className="buscador busca position-lg-absolute mx-lg-4">
            <input
              className="my-4"
              type="search"
              placeholder="Buscar por zonas Ejemplo: Miraflores"
            />

            <Link to="/pagina6" className="propietario btn btn-outline-info">
              Soy propietario
            </Link>
            <Link
              to="/pagina6"
              className="ingresar mx-2 btn btn-secondary text-white"
            >
              Ingresar
            </Link>
          </div>
        </div>

        <Carousel
          className="top-50 mt-4 position-xxl-absolute col-12 col-xxl-5 "
          style={{ maxHeight: "600px", overflow: "hidden" }}
        >
          <Carousel.Item>
            <img
              src={imagenes.img11_slider_1}
              alt="header1"
              className="w-100"
              style={{
                objectFit: "cover",
                height: "300px",
                objectPosition: "center",
              }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={imagenes.img12_slider_2}
              alt="header2"
              className="w-100"
              style={{
                objectFit: "cover",
                height: "300px",
                objectPosition: "center",
              }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={imagenes.img13_slider_3}
              alt="header3"
              className="w-100"
              style={{
                objectFit: "cover",
                height: "300px",
                objectPosition: "center",
              }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={imagenes.img14_slider_4}
              alt="header3"
              className="w-100"
              style={{
                objectFit: "cover",
                height: "300px",
                objectPosition: "center",
              }}
            />
          </Carousel.Item>
        </Carousel>

        <div className="mt-4  mt-xxl-0 col-xxl-3 ">
          <div className="row ">
            <div className="col-md-6 col-xxl-12">
              <div className="remodelada d-flex justify-content-center h-100 bg-white">
                <div className="p-2 col-12 col-sm-10 col-md-12">
                  <h4 className="fs-6">Cocina recien remodelada</h4>

                  <p className="precio">S/ 100</p>
                  <p>Listed in la Victoria. Lima</p>

                  <div className="contenido__botones">
                    <button className="btn btn-primary me-2 me-sm-3">
                      Contactar{" "}
                      <img src={imagenes.img15_mensaje} alt="mensaje" />
                    </button>
                    <button className="btn btn-warning me-1 me-sm-2">
                      <img src={imagenes.img16_guardar} alt="guardar" />
                    </button>
                    <button className="btn btn-warning me-1 me-sm-2">
                      <img src={imagenes.img17_compartir} alt="compartir" />
                    </button>
                    <button className="btn btn-warning me-1 me-sm-2">
                      <img src={imagenes.img18_tres_puntos} alt="puntos" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 mt-md-0 mt-xxl-4  col-md-6 col-xxl-12">
              <div className="d-flex justify-content-center bg-white h-100">
                <div className="p-2 col-12 col-sm-10 col-md-12">
                  <h4 className="fs-6">Details</h4>
                  <div className="d-flex justify-content-between">
                    <p>
                      <span>Area:</span>6m2
                    </p>
                    <p>
                      <span>Implentado:</span>Si
                    </p>
                  </div>
                  <p>
                    La cocina está implementada, recién remodelada, ubicada en
                    primer piso
                  </p>
                </div>
              </div>
            </div>

            <div className="mapa mt-4 col-md-6 col-xxl-12">
              <div className="d-flex justify-content-center h-100 bg-white">
                <div className="p-2 col-12 col-sm-10 col-md-12">
                  <h4 className="fs-6">Publicado en</h4>
                  <p>La Victoria. Lima</p>
                  <img
                    className="img-fluid"
                    src={imagenes.img19_mapa}
                    alt="Mapa"
                  />
                </div>
              </div>
            </div>

            <div className="calificacion mt-4  col-md-6 col-xxl-12">
              <div className="d-flex justify-content-center h-100 bg-white">
                <div className="p-2 col-12 col-sm-10 col-md-12">
                  <h4 className="fs-6">Calificaciones del arrendador</h4>
                  <img
                    className="img-fluid my-2 "
                    src={imagenes.img20_calificacion}
                    alt="calificacion"
                  />
                  <p>Calificacion de 10 personas Mienbro desde Octubre 2021</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
