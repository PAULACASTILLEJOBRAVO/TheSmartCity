import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../../src/App.css';
import Test from './accidentes/ListaAccidentes';
import Home from './home';

function App() {
  return (
    <div className="App">ç
      <BrowserRouter>
        <Routes>
          <Route path='/accidentes' element={<Test/>}/>
          <Route path='/home' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
