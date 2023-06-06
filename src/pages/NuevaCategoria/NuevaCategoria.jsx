import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './NuevaCategoria.css'

const NuevaCategoria = () => {
    return <div className="nuevo-video">
        <form className="nuevo-video__formulario" action="">
            <h2>Nueva Categoría</h2>
            <fieldset>
                <TextField 
                    id="outlined-basic" 
                    label="Título" 
                    variant="outlined"
                    margin="normal"
                    fullWidth
                />

                <TextField
                    id="outlined-multiline-flexible"
                    label="Descripción de la Categoría"
                    multiline
                    maxRows={4}
                    fullWidth
                    margin="normal"
                />

                <div className='color__container'>
                    <label className='color__label' htmlFor="color">Color</label>
                    <input name='color__input' type='color'></input>
                </div>

                <TextField 
                    id="outlined-basic" 
                    label="Usuario" 
                    variant="outlined"
                    margin="normal"
                    fullWidth
                />
                
            </fieldset>
            <Stack spacing={2} direction="row" className='botones'>
                <Button variant="contained">Guardar</Button>
                <Button variant="outlined">Limpiar</Button>
            </Stack>

        </form>

        
        
    </div>
}

export default NuevaCategoria;