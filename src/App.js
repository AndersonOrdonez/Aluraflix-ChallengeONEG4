import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Head from './componentes/Head/Head';
import Footer from './componentes/Footer/Footer';
import Home from './pages/Home/Home';
import Page404 from './pages/Page404/Page404';
import NuevoVideo from './pages/NuevoVideo/NuevoVideo';

function App() {
  return (
    < Router>

      <Head/>
      
      <Routes>
        <Route path ='/' element= { <Home />}  />
        <Route path='/agregarnuevovideo' element={ <NuevoVideo />} />

        <Route path='*' element={ <Page404 />} />
      </Routes>

      <Footer/>

    </ Router>
  );
}

export default App;
