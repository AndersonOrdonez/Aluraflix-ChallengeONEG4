import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Head from './componentes/Head/Head';
import Footer from './componentes/Footer/Footer';
import Home from './pages/Home/Home';
import Page404 from './pages/Page404/Page404';
import NuevoVideo from './pages/NuevoVideo/NuevoVideo';
import NuevaCategoria from './pages/NuevaCategoria/NuevaCategoria';
import EditarCategoria from './pages/EditarCategoria/EditarCategoria';

function App() {
  return (
    < Router>

      <Head/>
      
      <Routes>
        <Route path ='/' element= { <Home />}  />
        <Route path='/agregarnuevovideo' element={ <NuevoVideo />} />
        <Route path='/agregarnuevacategoria' element={ <NuevaCategoria />} />
        <Route path='/editarcategoria' element={ <EditarCategoria />} />

        <Route path='*' element={ <Page404 />} />
      </Routes>

      <Footer/>

    </ Router>
  );
}

export default App;
