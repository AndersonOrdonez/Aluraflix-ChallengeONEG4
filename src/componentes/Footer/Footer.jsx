import logo from './Logo.png';
import './Footer.css'

const Footer = () => {
    return < div className="pie">
        <a className='logo__pie'><img src={logo} /></a>
        <h5>Creado por Anderson Ordoñez | ONE G4 | 2023</h5>
    </ div>
}

export default Footer;