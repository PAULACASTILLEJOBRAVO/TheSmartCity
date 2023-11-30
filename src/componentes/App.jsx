import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../../src/App.css';
// import Test from './test/test';
import Header from './header'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path='/test' element={<Test/>}/> */}
          <Route path='/' element={<Header/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
