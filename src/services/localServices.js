import axios from "axios";
import { storage } from "../config/Firebase";

 const URL="https://616b5ebb16c3fa001717168e.mockapi.io/local";  
/*  const URL = `${process.env.REACT_APP_API}local`;  */

const obtenerLocal = async()=>{
    try {
        const {data} =await axios.get(URL);
        return data;
        
    } catch (error) {
        throw error;
    }
};


//obtener un local por su ID
const obtenerLocalPorId = async (id) => {
    try {
        let { data } = await axios.get(`${URL}/${id}`);
        return data;
    } catch (error) {
        throw error;
    }
};

//nuevo registro de local
const crearLocal = async (nuevoLocal) => {
    try {
        const headers = {
            "Content-Type": "application/json",
        };
       
        const { data } = await axios.post(URL, nuevoLocal, { headers });
        return data;
    } catch (error) {
        throw error;
    }
};

const subirImagen = (imagen) => {
     console.log(imagen);
    return new Promise((resolve, reject) => {
        //1, necesita la referencia para indicar donde vamos a guardar el archivo
        let refStorage = storage.ref(`fotos/${imagen.name}`);
        let tareaSubir = refStorage.put(imagen);

        tareaSubir.on(
            "state_changed",
            () => {}, //ver el progreso
            (error) => {
                reject(error);
            }, 
            () => {
                //tareaSubir finalizada
                tareaSubir.snapshot.ref.getDownloadURL().then((urlImagen) => {
                    resolve(urlImagen);
                });
            }
        );
    });
};



export {obtenerLocal,obtenerLocalPorId ,crearLocal,subirImagen};