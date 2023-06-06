import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './NuevoVideo.css'
import { buscarCategoria, agregarVideo } from '../../client-service/client-service';
import { v4 as uuidv4 } from 'uuid';


const NuevoVideo = () => {


    const [categorias, setCategorias] = useState([])

    const [titulo, setTitulo] = useState('');
    const [URLVideo, setURLVideo] = useState('');
    const [categoria, setCategoria] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [codigoUsuario, setCodigoUsuario] = useState('');
    

    useEffect(() => {
        buscarCategoria('/categoria', setCategorias)
        .catch(error => alert(error));
        
    }, [])

    function limpiarInputs(){
        setTitulo('');
        setURLVideo('');
        setCategoria('');
        setDescripcion('');
        setCodigoUsuario('');
    }


    return <div className="nuevo-video">
        <form 
            className="nuevo-video__formulario" 
            action="" 
            onSubmit={(e) => {
                e.preventDefault();
                const id =  uuidv4();
                console.log(id)
                //console.log(titulo, URLVideo, categoria, descripcion)
                //(id, titulo, URLVideo, descripcion, categoria)
                agregarVideo(id, titulo, URLVideo, descripcion, categoria);
            }}>

            <h2>Nuevo video</h2>
            <fieldset>
                <TextField 
                    id="outlined-basic" 
                    label="Título" 
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    value={titulo}
                    onChange={ (e) => setTitulo(e.target.value)}
                />
                <TextField 
                    id="outlined-basic" 
                    label="Link del Vídeo" 
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    value={URLVideo}
                    onChange={ (e) => setURLVideo(e.target.value)}
                />

                <FormControl fullWidth margin="normal">
                    <InputLabel id="demo-simple-select-label">Categoría</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Categoría"
                        value={categoria}
                        onChange={ (e) => setCategoria(e.target.value)}
    
                    >
                        {
                            categorias.map((categoria) => {
                                return <MenuItem value={categoria.titulo}>{categoria.titulo}</MenuItem>
                            })
                        }

                    </Select>
                </FormControl>

                <TextField
                    id="outlined-multiline-flexible"
                    label="Descripción del vídeo"
                    multiline
                    maxRows={4}
                    fullWidth
                    margin="normal"
                    value={descripcion}
                    onChange={ (e) => setDescripcion(e.target.value)}
                />

                <TextField 
                    id="outlined-basic" 
                    label="Código de usuario" 
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    value={codigoUsuario}
                    onChange={ (e) => setCodigoUsuario(e.target.value)}
                />
                
            </fieldset>
            <Stack spacing={2} direction="row" className='botones'>
                <Button variant="contained" type='submit'>Guardar</Button>
                <Button variant="outlined" onClick={limpiarInputs}>Limpiar</Button>
            </Stack>

            <Link to='/agregarnuevacategoria' className='boton__nueva-categoria'>Nueva Categoría</Link>
        </form>

        
        
    </div>
}

export default NuevoVideo