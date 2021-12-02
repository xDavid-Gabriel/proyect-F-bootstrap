import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { crearLocal, subirImagen } from "../services/localServices";
import { obtenerCategoria} from "../services/categoriaService";
import FormPublicar from "../components/FormPublicar";
import Subir from "../components/Subir";
import Swal from "sweetalert2";

let imagen; 


export default function UploadView() {
    const [value,setValue]=useState({
        titulo: "",
        descripcion: "",
        precio: "",
        area:"",
        categoria_id: "1",
        descripcion: "",
        pais:"",
        ciudad:"",
        distrito:""
        
    });

    const [categoria, setCategoria] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const actualizarInput = (e) => {
        console.log(e.target.name, e.target.value);
        setValue({
            ...value, //cogiendo el estado de value, spreadoperator
            [e.target.name]: e.target.value,
        });
    };

    const manejarSubmit = async (e) => {
        e.preventDefault();
       
        try {
           
            setLoading(true);
            
            const urlImagenSubida = await subirImagen(imagen);
           
            await crearLocal({ ...value, imagen: urlImagenSubida });
            //después de que haya terminado de crear el producto
            setLoading(false);
            await Swal.fire({
                icon: "success",
                title: "Felicidades!",
                text: "Tu anuncio ya está en circulación!",
                // showConfirmButton: false, //es para que no me muestre un boton de cierre
                // timer: 2000, //ms
            });
            //antes de dirigime a navigate
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    const manejarImagen = (e) => {
        e.preventDefault();
        console.log(e.target.files);
        imagen = e.target.files[0]; //como para utilizar
    };

    useEffect(() => {
        const getCategorias = async () => {
            try {
                const catObtenidas = await obtenerCategoria();
                setCategoria(catObtenidas);
            } catch (error) {
                console.error(error);
            }
        };
        getCategorias();
    }, []);

    return (
        <>
            {loading === true ? (
                <Subir />
            ) : (
                <FormPublicar
                    value={value}
                    actualizarInput={actualizarInput}
                    manejarSubmit={manejarSubmit}
                    manejarImagen={manejarImagen}
                    categoria={categoria}
                />
            )}
        </>
    );
}

