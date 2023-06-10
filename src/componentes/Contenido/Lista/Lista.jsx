
import React, { useState, useEffect} from "react";
import { buscarVideos } from "../../../client-service/client-service";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Lista.css';

import Card from "../Card/Card";

const Lista = ({titulo, descripcion,color,url}) => {

    const [ videos, setVideos] = useState([]);

    const tituloCategoria = titulo;
    const subtituloCategoria = descripcion;
    const colorCategoria = color;

    useEffect(() => {
        buscarVideos(url, setVideos)
    },[])


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,

        autoplay: false,
        autoplaySpeed: 2000,
        cssEase: "linear",

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <div className="categoria__encabezado">
                <h2 className="categoria__titulo" style={{backgroundColor: colorCategoria}} >{tituloCategoria}</h2>
                <h3 className="categoria__subtitulo">{subtituloCategoria}</h3>
            </div>
            
            <Slider {...settings}>
                {
                    videos.map((data) => { 
                        return < Card 
                            key={data.id} 
                            url= {data.URLVideo}
                            color= {colorCategoria}
                        />
                    })
                }
                
            </Slider>
            <div className="lista__separador"></div>
        </>
    );
}

export default Lista;