
import './App.css';
import PapasFritas from "./pages/PapasFritas";
import SaboresClasicos from "./pages/SaboresClasicos";
import Hero from './pages/Hero';
import SaboresPremium from './pages/SaboresPremium';
import Agregados from './pages/Agregados';
import Bebidas from './pages/Bebidas';
import Footer from "./pages/Footer";

function App() {
  return (
    <div className="App_container">
      <div className='pages'>
        <Hero/>
        <SaboresPremium/>
        <SaboresClasicos/>
        <Agregados/>
        <PapasFritas/>
        <Bebidas/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;