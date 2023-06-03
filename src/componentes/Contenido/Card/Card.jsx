import './Card.css'

const Card = ({url,color}) => {

    const URLVideo = url;
    const colorBorder = color;

    return <>
        <div className="box" >
            <div>
                <iframe
                    className="box__video" style={{borderColor: colorBorder}} src={URLVideo}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    
                ></iframe>
            </div>
        </div>
    
    </>
}

export default Card;