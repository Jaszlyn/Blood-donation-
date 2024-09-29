import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Register from './Components/Register';
import { Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
  
    <Routes>
      
        <Route path="home" element={ <Home/> } />
        <Route path="about" element={ <About/> } />
        <Route path="register" element={ <Register/> } />
      </Routes>
    </div>
  );
}

export default App;
