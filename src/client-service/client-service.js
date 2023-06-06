import axios from "axios";

export const api = axios.create({
    baseURL: 'http://localhost:9000'
})

//GET
export const buscarUltimoVideo = async ( url, setData ) => {
    const respuesta = await api.get(url)
    const datos = respuesta.data;
    const datosInvertidos = datos.slice().reverse();
    setData(datosInvertidos[0]);
}

export const buscarCategoria = async ( url, setData ) => {
    const respuesta = await api.get(url)
    const datos = respuesta.data;
    setData(datos);
}

export const buscarVideos = async ( url, setData ) => {
    const respuesta = await api.get(url)
    const datos = respuesta.data;
    const datosInvertidos = datos.reverse().slice(0,6);
    setData(datosInvertidos);
}

//POST
export const agregarVideo = async ( id, titulo, URLVideo, descripcion, categoria ) => {
    api.post('/video', {
        id, 
        titulo, 
        URLVideo, 
        descripcion, 
        categoria
    })
    .catch(() => alert('Hay un error'));
}


/*export const listaVideos = async () => {
    return await axios.get('http://localhost:9000/video');
};

export const listaCategorias = () => {
    return axios.get('http://localhost:9000/categoria');
} */


//const listaVideos = () => fetch('http://localhost:9000/video').then((respuesta) => respuesta.json());

//export const clientServices = {
    //listaVideos,
//};