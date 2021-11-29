//Aqui estan mis imagenes
import { Link } from "react-router-dom";
import imagenes from "../assets/imagenes";

export default function Pagina1() {
  return (
    <section className="container">
      <div className="row hero py-5 py-md-0 position-relative align-items-center">
      {/* <div className="cuadrado"></div> */}
      <div className="col-12 col-md-6">
        <p>A beautiful house</p>
        <h1 className="display-4">Bienvenidos a Nuestra Pagina.</h1>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The
        </p>
      </div>
      <div className="hero__images col-12 col-md-6">
        <img className="img-fluid img-xl-fluid" src={imagenes.img1} alt="cocina" />
      </div>
      <Link to="/pagina2" className="inicio d-flex justify-content-center align-items-center bg-secondary border-0 rounded-circle">
      <i class="fas fa-angle-right"></i>
      </Link>
      </div>
    </section>
  );
}
