import { useRef} from "react";
//Mis estilos css
import "../css/estilos.css";

//Aqui estan mis imagenes
import imagenes from "../assets/imagenes";
/* import subirImage from '../services/uploadService'; */


export default function FormPublicar({ value, actualizarInput, manejarSubmit,manejarImagen,categoria }) {
  const inputFile=useRef();

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

      <form 
       className="form--pagina6"
       onSubmit={(e) => {
        manejarSubmit(e);
      }}>
        <h3 className="text-title">PUBLICAR</h3>

        <div className="contenido--form">
        
          <label>Sube las mejores fotos</label>
          <div className="inputfile-box">
            <input 
            type="file" 
            className="inputfile"
            id="file"
            ref={inputFile}
                  onChange={(e) => {
                  manejarImagen(e);
                }}  />

          <label htmlFor="file" className="w-100">
              <span className="file-box">
            <img src={imagenes.ImgCamera} width="20px" className="img-icon"/>
              </span>
            </label>
         </div>
          <label>Titulo</label>
          <input
            name="titulo"
            type="text"
            value={value.titulo}
            placeholder="Ejem: Cocina amoblada, lista para usarse ..."
            onChange={(e) => {
              actualizarInput(e);
             }}
          />

          <label>Precio Soles (PEN)</label>
          <input 
          type="text" 
          name="precio"
          value={value.precio}
          onChange={(e) => {
            actualizarInput(e);
        }}
          placeholder="Ejem: 1200" 
          />

          <div className="area-amoblado">
            <div className="area">
              <label>Area m2</label>
              <input
               type="text"
               name="area"
               value={value.area}
               onChange={(e) => {
                actualizarInput(e);
                }}
               placeholder="Ejem: 6" />
            </div>

            <div className="amoblado">
              <label>Amoblado?</label>
              <select 
              value={value.categoria_id}
              className="selecionar--mueble" 
              name="amoblado"
              onChange={(e) => {
                actualizarInput(e);
              }}
              >
              {categoria.map((cat, i) => (
                            <option value={cat.id} key={i}>
                                {cat.nombre}
                            </option>
                ))}
              </select>
            </div>
          </div>

          <div className="textarea">
            <label>Descripción</label>

            <textarea cols="30" rows="10"
            name="descripcion"
            value={value.descripcion}
            onChange={(e) => {
              actualizarInput(e);
          }}
            >
              Describe la cocina, brinda el mejor detalle
            </textarea>
          </div>
         

        <div className="area-amoblado">
        <div className="ubicacion">
        <label>País</label>
          <input
              name="pais"
              type="text"
              value={value.pais}
              onChange={(e) => {
                actualizarInput(e);
              }}
              placeholder="Ejem:Perú"
            />
        </div> 

        <div className="ubicacion">
         <label>Ciudad</label>
          <input
            name="ciudad"
            type="text"
            value={value.ciudad}
            onChange={(e) => {
              actualizarInput(e);
             }}
             placeholder="Ejem: Lima"
          />
         </div>
         <div className="ubicacion">
         <label>Distrito</label>
          <input
            name="distrito"
            type="text"
            value={value.distrito}
            onChange={(e) => {
              actualizarInput(e);
             }}
             placeholder="Ejem: Los Olivos"
          />
         </div>

      </div>
          <button type="submit">PUBLICAR</button>
        </div>
      </form>
    </section>
  );
}


