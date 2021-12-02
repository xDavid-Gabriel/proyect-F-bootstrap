import { Link } from "react-router-dom";

//Mis estilos css
import "../css/estilos.css";

//Aqui estan mis imagenes
import imagenes from "../assets/imagenes";

export default function Pagina3() {
  return (
    <section className="seccion-3 container grid">
      <form className="registro col-2-5 col-sm-8">
        <label>E-mail</label>
        <input type="text" placeholder="Ingrese e-mail" />

        <label>Contraseña</label>
        <input type="password" placeholder="Ingrese Contraseña" />
        <button className="ingreso">Ingresar</button>
        <a className="olvido" href="#">
          ¿Olvidaste tu contraseña?
        </a>

        <div className="segundo__registro">
          <p>Si no tienes una cuenta registrate</p>
          <Link to="/pagina4" className="registrar">
            Registrate
          </Link>
        </div>
      </form>

      <div className="cocinera col-7-12 col-sm-8">
        <img src={imagenes.img7_cocinera} alt="cocinera" />
        <div className="iniciar_sesion">
          <h3 className="text-title">Iniciar sesion</h3>
          <button className="google__cuenta">
            <img src={imagenes.img8_google} alt="" />
            Ingresa con Google
          </button>
        </div>
      </div>
    </section>
  );
}
