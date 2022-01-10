import logo from "./assets/Cabareco-logo-removebg-preview.png";
import './App.css';
import Especialidades from "./components/Especialidades";
import NuestrosProductos from "./components/NuestrosProductos";
import Precios from "./components/Precios";
function App() {
  return (
    <div className="App_container">
      <div className='main_container'>
        <header className="main_container-header">
          <ul className="main_container-ul">
            <li><img src={logo} alt="logo" /></li>
            <li className="main_container-li"><a href={Especialidades}>Especialidades</a></li>
            <li className="main_container-li"><a href={NuestrosProductos}>Nuestros Productos</a></li>
            <li className="main_container-li"><a href={Precios}>Precios</a></li>
            <li>
              <a href='https://wa.me/595983737623'>
                <button className='btn-header'>Haz tu pedido</button>
              </a>
            </li>
          </ul>
        </header>
      </div>

    </div>
  );
}

export default App;
