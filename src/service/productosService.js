import axios from "axios";

const URL = "https://61a6b90b8395690017be93ab.mockapi.io/cocinas";

const obtenerProductos = async () => {
  try {
    const { data } = await axios.get(URL);
    return data;
  } catch (error) {
    throw error;
  }
};

export { obtenerProductos };
