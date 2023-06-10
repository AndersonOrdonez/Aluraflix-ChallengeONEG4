import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './EditarCategoria.css'
import { buscarUsuario, buscarCategoriaEspecifica, modificarCategoria  } from '../../client-service/client-service';

const EditarCategoria = () => {

    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [color, setColor] = useState('#2A7AE4');

    const [codigoUsuario, setCodigoUsuario] = useState('');
    const [usuario, setUsuario] = useState([]);

    const [ categoriaEspecifica, setCategoriaEspecifica] = useState([]);

    //const id  = useParams();
    //let { userId } = useParams();
    //console.log(userId)

    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    

    useEffect(() => {
        buscarCategoriaEspecifica(`/categoria/${id}`,setCategoriaEspecifica)
        .catch(error => alert(error)) 
    }, [id])

    useEffect(() => {
        setTitulo(categoriaEspecifica.titulo);
        setDescripcion(categoriaEspecifica.descripcion);
        setColor(categoriaEspecifica.color);
    }, [categoriaEspecifica])
    

    useEffect(() => {
        buscarUsuario('/usuario', setUsuario)
        .catch(error => alert(error))     
    }, [])


    function limpiarInputs(){
        setTitulo('');
        setDescripcion('');
        setColor('#2A7AE4');
        setCodigoUsuario('');
    }

    return <>
    <div className="nuevo-video">
        <form 
            className="nuevo-video__formulario" 
            action=""
            onSubmit={(e) => {
                e.preventDefault();
    
                usuario.forEach( (user) => {
                    if(codigoUsuario === user.codigoUsuario){
                        modificarCategoria(id, titulo, descripcion, color);
                    } else {
                        alert('Código de usuario inválido')
                    }
                })
            }}
            
        >
            <h2>Editar Categoría</h2>
            <fieldset>
                <TextField 
                    id="outlined-basic" 
                    label="Título" 
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    value={titulo}
                    onChange={ (e) => setTitulo(e.target.value)}
                    required
                />

                <TextField
                    id="outlined-multiline-flexible"
                    label="Descripción de la Categoría"
                    multiline
                    maxRows={4}
                    fullWidth
                    margin="normal"
                    value={descripcion}
                    onChange={ (e) => setDescripcion(e.target.value)}
                    required
                />

                <div className='color__container'>
                    <label className='color__label' htmlFor="color" required >Color</label>
                    <input name='color__input' type='color'
                        value={color}
                        onChange={ (e) => setColor(e.target.value)}
                    ></input>
                    
                </div>

                <TextField 
                    id="outlined-basic" 
                    label="Código de usuario" 
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    value={codigoUsuario}
                    onChange={ (e) => setCodigoUsuario(e.target.value)}
                    required
                />
                
            </fieldset>
            <Stack spacing={2} direction="row" className='botones'>
                <Button variant="contained" type='submit'>Guardar</Button>
                <Button variant="outlined" onClick={limpiarInputs}>Limpiar</Button>
            </Stack>

        </form>

        
    </div>
    
    </>
}

export default EditarCategoria;