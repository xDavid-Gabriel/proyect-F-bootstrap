import { Link } from "react-router-dom";

//Aqui estan mis imagenes
import imagenes from "../assets/imagenes";

export default function Header() {
  return (
    <section className="hero container grid">
      <div className="cuadrado"></div>
      <div className="hero__container col-1-6 col-md-5 col-sm-8">
        <p>A beautiful house</p>
        <h1 className="text-headline">Bienvenidos a Nuestra Pagina.</h1>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The{" "}
        </p>
      </div>
      <div className="hero__images col-7-12 col-md-5 col-sm-8">
        <img src={imagenes.img1} alt="cocina" />
      </div>
      <Link to="/pagina2" className="boton-hero">
        🡪
      </Link>
    </section>
  );
}
