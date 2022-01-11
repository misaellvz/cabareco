
import './App.css';
import Especialidades from "./components/Especialidades";
import NuestrosProductos from "./components/NuestrosProductos";
import Precios from "./components/Precios";
import Hero from './pages/Hero';

function App() {
  return (
    <div className="App_container">
      <div className='pages'>
        <Hero/>
        <Especialidades/>
        <NuestrosProductos/>
        <Precios/>
      </div>
    </div>
  );
}

export default App;