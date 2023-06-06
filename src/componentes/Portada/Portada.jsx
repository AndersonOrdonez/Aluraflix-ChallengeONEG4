import './Portada.css';
import React, { useEffect, useState } from 'react';
import { buscarUltimoVideo } from '../../client-service/client-service';

const Portada = () => {

    const [video, setVideo] = useState([]);

    useEffect(() => {
        buscarUltimoVideo('/video', setVideo)
        .catch(error => alert(error));
        
    }, [])

    const urlVideo = video.URLVideo;
    const tituloDelVideo = video.titulo;
    const colorBorder ='#2A7AE4';
    const descripcion = video.descripcion
    
    return <section className="portada">
        <div className='portada__container'>
            <div className='portada__ladoIzquierdo'>
                <div>
                    <h2 className='portada__titulo' style={{backgroundColor: colorBorder}} > Último Vídeo</h2>
                </div>

                <h3 className='portada__subtitulo'>{tituloDelVideo}</h3>
                <p className='portada__descripcion'>
                    {descripcion}
                </p>
            </div>
            <div className='portada__ladoDerecho'>
                <div className="portada__video" >
                    <div>
                        <iframe
                            className="portada__video--iframe" style={{borderColor: colorBorder}} src={urlVideo}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        
                        ></iframe>
                    </div>
                </div>
            </div>
            
            
            
        </div>
    
    </section>
}

export default Portada;