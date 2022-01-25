
import './App.css';
import Especialidades from "./components/Especialidades";
import NuestrosProductos from "./components/NuestrosProductos";
import SaboresClasicos from "./components/SaboresClasicos";
import Hero from './pages/Hero';

function App() {
  return (
    <div className="App_container">
      <div className='pages'>
        <Hero/>
        <NuestrosProductos/>
        <SaboresClasicos/>
        <Especialidades/>
      </div>
    </div>
  );
}

export default App;