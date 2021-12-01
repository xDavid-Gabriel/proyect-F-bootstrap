import { useState, useEffect } from "react";
import { obtenerProductos } from "../service/productosService";
import { Link } from "react-router-dom";

//Aqui estan mis imagenes
import imagenes from "../assets/imagenes";
import { height } from "dom-helpers";

export default function Pagina2() {
  const [productos, setProductos] = useState([]);

  const getProductos = async () => {
    try {
      const productosObtenidos = await obtenerProductos();
      // console.table(productosObtenidos);
      setProductos(productosObtenidos);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductos();
  }, []);

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
              className="ingresar mx-2 btn btn-secondary text-white"
            >
              Ingresar
            </Link>
          </div>
        </div>

        <div className="my-4 col-12">
          <p>
            Acercate a tus clientes, amplia tu negocio, escoge aqui tu proximo
            punto de reparto
          </p>
        </div>
        {/* Estas son las tarjetas d-flex flex-column align-items-center */}
        
        <div className="cartas">
        {productos.map(
          (
            { imagen, precio_mes, mantenimiento, descripcion, direccion },
            i
          ) => (
           
              <div className="col-12" key={i}>
                <img
                  className="card-img-top"
                  src={imagen}
                  alt="cocina"
                  style={{
                    height: "200px",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
                <p>
                  <span className="text-primary fw-bold">Precio mensual:</span> $/{precio_mes}
                  <br />
                  <span className="text-primary fw-bold">Mantenimiento:</span> $/{mantenimiento}
                  <br />
                  <span className="text-primary fw-bold">Descripcion:</span> {descripcion}
                  <br />
                  cocinar y hacer [...]
                  <br />
                  <span className="text-primary fw-bold">Direccion:</span> {direccion}
                </p>
              </div>
            
          )
        )}
        </div>

      </div>
    </section>
  );
}
