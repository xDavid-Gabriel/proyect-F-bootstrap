//Aqui estan mis imagenes
import imagenes from "../assets/imagenes";

export default function Pagina6() {
  return (
    <section className="pagina-6 container  d-flex align-items-center">
        <div className="row  justify-content-center">
      <div className="position-relative col-12">
        <img className="w-100 publicar" src={imagenes.img21_publicar_fondo} alt="publicar" />
        <h3 className="text-center position-lg-absolute promocion my-4 display-5">
          <span className="fw-light">Miles de negocios buscan cocinas ocultas</span> , Alquila y
          gana!!
        </h3>
        <button className="position-absolute btn-publicar btn btn-secondary text-white">Publicar</button>
      </div>

      <form className="formulario-publicar my-4 col-12">
        
        <div className="contenido--form">
        <h3 className="display-6 py-4 text-center">PUBLICAR</h3>
          <label>Sube las mejores fotos</label>
          <input className="w-100" type="file" />
          <label>Titulo</label>
          <input className="w-100"
            type="text"
            placeholder="Ejem: Cocina amoblada, lista para usarse ..."
          />

          <label>Precio Soles (PEN)</label>
          <input className="w-100" type="text" placeholder="Ejem: 1200" />

          <div className="d-md-flex">
            <div className="area me-md-3">
              <label>Area m2</label>
              <input className="w-100" type="text" placeholder="Ejem: 6" />
            </div>

            <div className="amoblado">
              <label>Amoblado?</label>
              <select className="w-100 text-success" name="amoblado">
                <option selected disabled>
                  Seleccionar
                </option>
                <option>Amoblado</option>
                <option>Poco amoblado</option>
                <option>No amoblado</option>
              </select>
            </div>
          </div>

          <div className="textarea">
            <label>Descripción</label>
            <textarea className="w-100 text-success" cols="30" rows="10">
              Describe la cocina, brinda el mejor
            </textarea>
          </div>
          <input className="w-100" type="text" placeholder="Ubicacion" />
          <button className="my-3 btn btn-secondary w-100 text-white">PUBLICAR</button>
        </div>
      </form>
      </div>
    </section>
  );
}
