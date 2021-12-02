import axios from "axios"


const URL =  `${process.env.REACT_APP_API}`

const getProductos = async ( pagina=1, limite=1 ) => {
    try {
        const {data} = await axios.get(`${URL}producto?page=${pagina}&limit=${limite}`);
        return data
        
    } catch (error) {
        console.log(error)
    };
};

const obtenerProdBusqueda = async (busqueda = "") => {
    try {
        let { data } = await axios.get(`${URL}?search=${busqueda}`);
        return data;
    } catch (error) {
        throw error;
    }
};


const getData = async (pagina=1, limite=1) => {
    try {

        const {data} = await axios.get(`${URL}data?page=${pagina}&limit=${limite}`)
        return data
    
    } catch (error) {
        console.log(error)
    }
}

const getImagen = async () => {
    try {
        const {data} = await axios.get(`${URL}imagen`)
        return data
    } catch (error) {
        console.log(error)
    }
}


export {getProductos, getData, getImagen, obtenerProdBusqueda}