import logo from './Logo.png';
import './Head.css';

const Head = () => {
    
    return <div className='head'>
        <a className='logo__head'><img src={logo} /></a>
        <button className='nuevo-video__boton' >Nuevo vídeo</button>
    </div>
}

export default Head;