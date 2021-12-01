import { Link } from "react-router-dom";

//Aqui estan mis imagenes
import imagenes from "../assets/imagenes";

export default function Pagina4() {
  return (
    <section className="container ">
      <div className="row vh-100 align-items-center">
        <div className="position-relative col-12 col-lg-6">
          <img
            className="img-fluid img-xl-fluid"
            src={imagenes.img9_registro}
            alt=""
          />
          <div className="bienvenida position-absolute">
            <h3 className="display-4">Bienvenidos</h3>
            <p className="text-info">Para darte un mejor servicio regístrate</p>
          </div>
        </div>

        <form className="formulario__registro my-4 col-12 col-lg-6">
          <div className="titulo">
            <h3 className="display-4">Registro</h3>
            <p>Ven se parte de nosotros</p>
          </div>

          <div className="contenido_registro">
            <label className="d-block">Nombres y Apellidos</label>
            <input
              className="w-100"
              type="text"
              placeholder="Ingrese su nombre y apellido"
            />

            <label className="d-block">E-mail</label>
            <input className="w-100" type="text" placeholder="Ingrese e-mail" />

            <label className="d-block">Pais</label>
            <select className="w-100 text-success" name="pais">
              <option selected disabled>
                Seleccione su pais
              </option>
              <option>Peru</option>
              <option>Chile</option>
              <option>Colombia</option>
            </select>

            <label className="d-block">Contraseña</label>
            <input
              className="w-100"
              type="password"
              placeholder="Ingrese Contraseña"
            />

            <label className="d-block">Repita contraseña</label>
            <input
              className="w-100"
              type="password"
              placeholder="Ingrese Contraseña"
            />

            <Link to="/pagina5" className="btn btn-info text-white my-4">
              Crear cuenta
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}
