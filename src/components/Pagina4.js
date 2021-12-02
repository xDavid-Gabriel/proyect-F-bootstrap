import { Link } from "react-router-dom";

//Mis estilos css
import "../css/estilos.css";

//Aqui estan mis imagenes
import imagenes from "../assets/imagenes";

export default function Pagina4() {
  return (
    <section className="pagina4 container grid">
      <div className="foto__registro col-6 col-md-10">
        <img src={imagenes.img9_registro} alt="" />
        <div className="bienvenida">
          <h3 className="text-title">Bienvenidos</h3>
          <p>Para darte un mejor servicio regístrate</p>
        </div>
      </div>

      <form className="formulario__registro col-7-12 col-md-10">
        <div className="titulo">
          <h3 className="text-title">Registro</h3>
          <p>Ven se parte de nosotros</p>
        </div>

        <div className="contenido_registro">
          <label>Nombres y Apellidos</label>
          <input type="text" placeholder="Ingrese su nombre y apellido" />

          <label>E-mail</label>
          <input type="text" placeholder="Ingrese e-mail" />

          <label>Pais</label>
          <select name="pais">
            <option selected disabled>
              Seleccione su pais
            </option>
            <option>Peru</option>
            <option>Chile</option>
            <option>Colombia</option>
          </select>

          <label>Contraseña</label>
          <input type="password" placeholder="Ingrese Contraseña" />

          <label>Repita contraseña</label>
          <input type="password" placeholder="Ingrese Contraseña" />

          <Link to="/pagina5" className="crear__cuenta">
            Crear cuenta
          </Link>
        </div>
      </form>
    </section>
  );
}
