import { Link } from "react-router-dom";

//Aqui estan mis imagenes
import imagenes from "../assets/imagenes";

export default function Pagina3() {
  return (
    <section className="container">
      <div className="row align-items-center vh-100">
        <form className="mt-4 order-1 order-lg-0 col-12 col-lg-5">
          <label className="d-block">E-mail</label>
          <input
            className="w-100  mb-3"
            type="text"
            placeholder="Ingrese e-mail"
          />

          <label className="d-block">Contraseña</label>
          <input
            className="w-100 "
            type="password"
            placeholder="Ingrese Contraseña"
          />

          <div className="d-flex flex-column">
            <button className="my-4 align-self-end ingresar btn btn-secondary text-white">
              Ingresar
            </button>
            <a className=" align-self-end" href="#">
              ¿Olvidaste tu contraseña?
            </a>
          </div>
          <div className="my-5 position-absolute">
            <p>Si no tienes una cuenta registrate</p>
            <Link
              to="/pagina4"
              className="propietario mb-4 btn btn-outline-info"
            >
              Registrate
            </Link>
          </div>
        </form>

        <div className="position-relative col-12 col-lg-7">
          <img
            className="img-fluid img-xl-fluid"
            src={imagenes.img7_cocinera}
            alt="cocinera"
          />
          <div className="ms-4 position-absolute top-0">
            <h3 className="mt-5 mb-3 display-6">Iniciar sesion</h3>
            <button className="google__cuenta btn btn-outline-primary">
              <img className="me-2" src={imagenes.img8_google} alt="" />
              Ingresa con Google
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
