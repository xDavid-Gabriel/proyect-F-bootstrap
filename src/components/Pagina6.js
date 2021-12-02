//Mis estilos css
import "../css/estilos.css";

//Aqui estan mis imagenes
import imagenes from "../assets/imagenes";

export default function Pagina6() {
  return (
    <section className="pagina6 container grid">
      <div className="fondo-publicar col-12">
        <img src={imagenes.img21_publicar_fondo} alt="publicar" />
        <h3 className="text-title">
          <span>Miles de negocios buscan cocinas ocultas</span> , Alquila y
          gana!!
        </h3>
        <button>Publicar</button>
      </div>

      <form className="form--pagina6">
        <h3 className="text-title">PUBLICAR</h3>
        <div className="contenido--form">
          <label>Sube las mejores fotos</label>
          <input type="file" />
          <label>Titulo</label>
          <input
            type="text"
            placeholder="Ejem: Cocina amoblada, lista para usarse ..."
          />

          <label>Precio Soles (PEN)</label>
          <input type="text" placeholder="Ejem: 1200" />

          <div className="area-amoblado">
            <div className="area">
              <label>Area m2</label>
              <input type="text" placeholder="Ejem: 6" />
            </div>

            <div className="amoblado">
              <label>Amoblado?</label>
              <select className="selecionar--mueble" name="amoblado">
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
            <textarea cols="30" rows="10">
              Describe la cocina, brinda el mejor
            </textarea>
          </div>
          <input type="text" placeholder="Ubicacion" />
          <button>PUBLICAR</button>
        </div>
      </form>
    </section>
  );
}
