import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../../src/App.css';
import Accidentes from './accidentes/TablaAccidentes';
import Home from './home';
import Patinetes from './patinetes/ListaPatinetes';
import BicicletasDisponibles from './bicicletas/GraficaBicicletaDisponibles';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/Accidentes' element={<Accidentes/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/Patinetes' element={<Patinetes/>}/>
          <Route path='/Disponibilidad' element={<BicicletasDisponibles/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
