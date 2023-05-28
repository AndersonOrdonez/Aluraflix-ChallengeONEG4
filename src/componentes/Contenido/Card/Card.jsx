import './Card.css'

const Card = () => {

    const URLVideo = "https://www.youtube.com/embed/dSA6PuKB-ik"
    const colorBorder ='#6BD1FF';

    return <>
        <div className="box" >
            <div>
                <iframe
                    className="box__video" style={{borderColor: colorBorder}} src={URLVideo}
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen
                ></iframe>
            </div>
        </div>
    
    </>
}

export default Card;