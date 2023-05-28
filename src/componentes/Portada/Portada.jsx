import './Portada.css'

const Portada = () => {

    const tituloCategoria = 'Front End';

    const URLVideo = "https://www.youtube.com/watch?v=q0UgClC8md4"
    const colorBorder ='#6BD1FF';


    return <section className="portada">
        <div className='portada__container'>
            <div className='portada__ladoIzquierdo'>
                <div>
                    <h2 className='portada__titulo' >Front End</h2>
                </div>
                <h3 className='portada__subtitulo'>Challenge React</h3>
                <p className='portada__descripcion'>
                    Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.
                </p>
            </div>
            <div className='portada__ladoDerecho'>
                <div className="portada__video" >
                    <div>
                        <iframe
                            className="portada__video--iframe" style={{borderColor: colorBorder}} src={URLVideo}
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen
                        ></iframe>
                    </div>
                </div>
            </div>
            
            
            
        </div>
    
    </section>
}

export default Portada;