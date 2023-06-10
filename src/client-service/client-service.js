import axios from "axios";

export const api = axios.create({
    baseURL: 'https://examplealuraflix.onrender.com'
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

export const buscarUsuario = async ( url, setData ) => {
    const respuesta = await api.get(url)
    const datos = respuesta.data;
    setData(datos);
}

export const buscarCategoriaEspecifica = async ( url, setData ) => {
    const respuesta = await api.get(url)
    const datos = respuesta.data;
    setData(datos);
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
    .then(() => alert('Agregado agregado =)'))
    .catch(() => alert('Hay un error'));
}

export const agregarCategoria = async ( id, titulo, descripcion, color ) => {
    api.post('/categoria', {
        id, 
        titulo, 
        descripcion, 
        color
    })
    .then(() => alert('Categoría agregada =)'))
    .catch(() => alert('Hay un error'));
}

//DELETE
export const borrarVideo = async ( id ) => {
    api.delete(`/video/${id}`)
    .then(() => alert('Video eliminado') )
    .catch(() => alert('Hay un error'));
}

export const borrarCategoria = async ( id ) => {
    api.delete(`/categoria/${id}`)
    .then(() => alert('Categoría eliminada'))
    .catch(() => alert('Hay un error'));
}

//PUT
export const modificarCategoria = async ( id, titulo, descripcion, color ) => {
    api.put(`/categoria/${id}`, {
        id, 
        titulo, 
        descripcion, 
        color
    })
    .then(() => alert('Categoría actualizada'))
    .catch(() => alert('Hay un error'));
}

/*export const listaVideos = async () => {
    return await axios.get('http://localhost:9000/video');
};

export const listaCategorias = () => {
    return axios.get('http://localhost:9000/categoria');
} */
