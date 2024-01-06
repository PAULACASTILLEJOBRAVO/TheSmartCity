import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Accidentes from './accidentes/TablaAccidentes';
import Home from './home';
import Patinetes from './patinetes/ListaPatinetes';
import BicicletasDisponibles from './bicicletas/GraficaBicicletaDisponibles';
import NotFound from './NotFound';
import Login from './Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/Accidentes' element={<Accidentes/>}/>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/Patinetes' element={<Patinetes/>}/>
          <Route path='/Disponibilidad' element={<BicicletasDisponibles/>}/>
          <Route path="*" element={<NotFound />} />
          <Route path='/' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
