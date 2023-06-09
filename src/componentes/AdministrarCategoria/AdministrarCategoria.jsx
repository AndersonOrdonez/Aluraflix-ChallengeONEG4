import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { borrarCategoria, buscarCategoria, buscarUsuario } from '../../client-service/client-service';
import './AdministrarCategoria.css'

const AdministrarCategoria = () => {


    const [categorias, setCategorias] = useState([])
    const [usuario, setUsuario] = useState([])
    const [ swtch, setSwtch] = useState(false);


    useEffect(() => {
        buscarCategoria('/categoria', setCategorias)
        .catch(error => alert(error));
        buscarUsuario('/usuario', setUsuario)
        .catch(error => alert(error))     
    }, [swtch])

    useEffect(() => {
        buscarUsuario('/usuario', setUsuario)
        .catch(error => alert(error))     
    }, [])



    function activarEliminar(id) {
        const validacionUsuario = prompt('Ingrese código de usuario');
        usuario.forEach( (user) => {
            if(validacionUsuario === user.codigoUsuario){
                borrarCategoria(id)
                setSwtch((swtch) => !swtch)
            } else {
                alert('Código de usuario inválido')
            }
        })
        
    }

    function actualizarCategorias(){
        setSwtch((swtch) => !swtch)
    }

    return <>
    <h2 className='titulo__tabla'>Administar categorías</h2>
    <button className='button__actualizar-tabla' onClick={actualizarCategorias}>Actualizar</button>
    <table className='tabla'>
        <tbody>
        <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th >Editar</th>
            <th >Eliminar</th>
        </tr>
        {
            categorias.map((data) => {

                return <tr key={data.id}>
                    <td>{data.titulo}</td>
                    <td>{data.descripcion}</td>
                    <td className='select' ><Link to={`/editarcategoria?id=${data.id}`}>Editar</Link></td>
                    <td className='select' id={data.id} onClick={(e) => activarEliminar(e.target.id)} >Eliminar</td>
                </tr>
            })
        }
        </tbody>
    </table>

    </>
}

export default AdministrarCategoria;