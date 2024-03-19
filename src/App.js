import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Country from './Components/Country';
import Main from './Components/Main';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Main />} />
        <Route  path="/language" element={<Country />} />
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
