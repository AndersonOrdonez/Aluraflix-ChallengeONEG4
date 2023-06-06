import React, { useState, useEffect} from "react"
import './Contenido.css';
import Lista from './Lista/Lista';
import { buscarCategoria } from '../../client-service/client-service';


const Contenido = () => {

    const [categorias, setCategorias] = useState([])

    useEffect(() => {

        buscarCategoria('/categoria', setCategorias)
        .catch(error => alert(error));
        
    }, [])


    return <div className='contenido__area'>
        <div className='contenido__container' >

            {
                categorias.map(data => {
                    return <Lista 
                        key={data.id} 
                        titulo ={data.titulo}
                        descripcion={data.descripcion}
                        color ={data.color}
                        url = {`/video?categoria=${data.titulo}`}
                    />
                })
            }
            
            
            
            
        </div>
        
    </div>
}

export default Contenido;