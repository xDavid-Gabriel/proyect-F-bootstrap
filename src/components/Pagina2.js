import { Link } from "react-router-dom";

//Aqui estan mis imagenes
import imagenes from "../assets/imagenes";

export default function Pagina2() {
  return (
    <section className="pagina2 d-flex align-items-center container">
      <div className="row justify-content-center">
        <div className="contenido__buscador position-relative col-12">
          <div className="position-relative">
            <img className="img-fluid risas col-12" src={imagenes.img2} />
            <h3 className="mx-4 text-title display-5 col-7 col-sm-8 col-md-6 col-xl-5 fw-light">
              Alquila cocinas fantasma <span className="fw-bold">Aqui!!!</span>
            </h3>
          </div>

          <div className="buscador position-lg-absolute mx-lg-4">
            <input
              className="my-4"
              type="search"
              placeholder="Buscar por zonas Ejemplo: Miraflores"
            />

            <Link to="/pagina3" className="propietario btn btn-outline-info">
              Soy propietario
            </Link>
            <Link
              to="/pagina3"
              className="ingresar mx-3 btn btn-secondary text-white"
            >
              Ingresar
            </Link>
          </div>
        </div>

        <div className="my-4 col-12">
          <p >
            Acercate a tus clientes, amplia tu negocio, escoge aqui tu proximo
            punto de reparto
          </p>
        </div>
        {/* Estas son las tarjetas d-flex flex-column align-items-center */}

        <div className=" col-12 col-sm-6 col-lg-3">
          <img
            className="card-img-top"
            src={imagenes.img3_card1}
            alt="cocina"
          />

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

        <div className=" col-12 col-sm-6 col-lg-3">
          <img
            className="card-img-top"
            src={imagenes.img4_card2}
            alt="cocina"
          />

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

        <div className=" col-12 col-sm-6 col-lg-3">
          <img
            className="card-img-top"
            src={imagenes.img5_card3}
            alt="cocina"
          />

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

        <div className=" col-12 col-sm-6 col-lg-3">
          <img
            className="card-img-top"
            src={imagenes.img6_card4}
            alt="cocina"
          />

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
      </div>
    </section>
  );
}
