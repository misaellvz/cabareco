import React from "react";
import "../styles/pages/SaboresClasicos.css";
import pizza from "../assets/pizza.jpg";

const SaboresClasicos = () => {
  return (
    <div id="SaboresClasicos" className="sabores-clasicos_container">
      <h2 className="sabores-clasicos-headline">Sabores clásicos</h2>
      <h3 className="sabores-clasicos-headlineSub">Tamaños & Precios</h3>
      <div className="sabores-clasicos-tamaños-precios">
        <div className="sabores-clasicos-tamaños-precios-black-background">
          <div className="sabores-clasicos-tamaños-precios-yellow">
            <h2 className="sabores-clasicos-tamaños-precios-yellow-h2">Normal</h2>
            <h3 className="sabores-clasicos-tamaños-precios-yellow-h3">8 porciones</h3>
            <h4 className="sabores-clasicos-tamaños-precios-yellow-h4">30.000 Gs.</h4>
          </div>
        </div>
        <div className="sabores-clasicos-tamaños-precios-black-background-two">
          <div className="sabores-clasicos-tamaños-precios-white">
            <h2 className="sabores-clasicos-tamaños-precios-white-h2">Grande</h2>
            <h3 className="sabores-clasicos-tamaños-precios-white-h3">12 porciones</h3>
            <h4 className="sabores-clasicos-tamaños-precios-white-h4">40.000 Gs.</h4>
          </div>
          <div className="sabores-clasicos-tamaños-precios-whiteTwo">
            <h2 className="sabores-clasicos-tamaños-precios-white-h2">Extra <br/>Grande</h2>
            <h3 className="sabores-clasicos-tamaños-precios-white-h3">16 porciones</h3>
            <h4 className="sabores-clasicos-tamaños-precios-white-h4">50.000 Gs.</h4>
          </div>
        </div>
        <div className="sabores-clasicos-tamaños-precios-yellow-background">
          <div className="sabores-clasicos-tamaños-precios-black">
          <h2 className="sabores-clasicos-tamaños-precios-black-h2">Borde Relleno Mediano</h2>
            <h3 className="sabores-clasicos-tamaños-precios-black-h3">8 porciones</h3>
            <h4 className="sabores-clasicos-tamaños-precios-black-h4">40.000 Gs.</h4>
          </div>
          <div className="sabores-clasicos-tamaños-precios-blackTwo">
            <h2 className="sabores-clasicos-tamaños-precios-black-h2">Borde Relleno Grande</h2>
            <h3 className="sabores-clasicos-tamaños-precios-black-h3">12 porciones</h3>
            <h4 className="sabores-clasicos-tamaños-precios-black-h4">55.000 Gs.</h4>
          </div>
        </div>
      </div>
      <div className="sabores-clasicos_container-cards">
        <div className="sabores-clasicos_container-yellowCard"></div>
        <div className="sabores-clasicos_container-cardOne">
          <div className="sabores-clasicos_container-cardOne-imgContainer">
            <img className="sabores-clasicos_container-cardOne-img" src={pizza} alt="pizza"/>
          </div>
          <p>⭐⭐⭐⭐⭐</p>
          <h3 className="sabores-clasicos_container-cardOne-h3">Jamón & Queso</h3>
          <p className="sabores-clasicos_container-cardOne-p">Masa y salsa de la casa, muzzarella, jamón y orégano.</p>
          <div className="sabores-clasicos_container-cardOne-ratingContainer">
            <div className="sabores-clasicos_container-cardOne-ratingPLus">¡Quiero!</div>
          </div>
        </div>
        <div className="sabores-clasicos_container-cardTwo">
        <div className="sabores-clasicos_container-cardOne-imgContainer">
            <img className="sabores-clasicos_container-cardOne-img" src={pizza} alt="pizza"/>
          </div>
          <h3 className="sabores-clasicos_container-cardOne-h3">Napolitana</h3>
          <p>⭐⭐⭐⭐⭐</p>
          <div className="sabores-clasicos_container-cardOne-ratingContainer">
            <h4>10/10</h4>
            <div className="sabores-clasicos_container-cardOne-ratingPLus">+</div>
          </div>
        </div>
        <div className="sabores-clasicos_container-cardThree">
        <div className="sabores-clasicos_container-cardOne-imgContainer">
            <img className="sabores-clasicos_container-cardOne-img" src={pizza} alt="pizza"/>
          </div>
          <h3 className="sabores-clasicos_container-cardOne-h3">Cebolla</h3>
          <p>⭐⭐⭐⭐⭐</p>
          <div className="sabores-clasicos_container-cardOne-ratingContainer">
            <h4>10/10</h4>
            <div className="sabores-clasicos_container-cardOne-ratingPLus">+</div>
          </div>
        </div>
        <div className="sabores-clasicos_container-cardFour">
        <div className="sabores-clasicos_container-cardOne-imgContainer">
            <img className="sabores-clasicos_container-cardOne-img" src={pizza} alt="pizza"/>
          </div>
          <h3 className="sabores-clasicos_container-cardOne-h3">Atún</h3>
          <p>⭐⭐⭐⭐⭐</p>
          <div className="sabores-clasicos_container-cardOne-ratingContainer">
            <h4>10/10</h4>
            <div className="sabores-clasicos_container-cardOne-ratingPLus">+</div>
          </div>
        </div>
      </div>
      <div className="sabores-clasicos_container-cards">
        <div className="sabores-clasicos_container-yellowCard"></div>
        <div className="sabores-clasicos_container-cardOne">
          <div className="sabores-clasicos_container-cardOne-imgContainer">
            <img className="sabores-clasicos_container-cardOne-img" src={pizza} alt="pizza"/>
          </div>
          <h3 className="sabores-clasicos_container-cardOne-h3">Choclo</h3>
          <p>⭐⭐⭐⭐⭐</p>
          <div className="sabores-clasicos_container-cardOne-ratingContainer">
            <h4>10/10</h4>
            <div className="sabores-clasicos_container-cardOne-ratingPLus">+</div>
          </div>
        </div>
        <div className="sabores-clasicos_container-cardTwo">
        <div className="sabores-clasicos_container-cardOne-imgContainer">
            <img className="sabores-clasicos_container-cardOne-img" src={pizza} alt="pizza"/>
          </div>
          <h3 className="sabores-clasicos_container-cardOne-h3">Palmito</h3>
          <p>⭐⭐⭐⭐⭐</p>
          <div className="sabores-clasicos_container-cardOne-ratingContainer">
            <h4>10/10</h4>
            <div className="sabores-clasicos_container-cardOne-ratingPLus">+</div>
          </div>
        </div>
        <div className="sabores-clasicos_container-cardThree">
        <div className="sabores-clasicos_container-cardOne-imgContainer">
            <img className="sabores-clasicos_container-cardOne-img" src={pizza} alt="pizza"/>
          </div>
          <h3 className="sabores-clasicos_container-cardOne-h3">Morrón</h3>
          <p>⭐⭐⭐⭐⭐</p>
          <div className="sabores-clasicos_container-cardOne-ratingContainer">
            <h4>10/10</h4>
            <div className="sabores-clasicos_container-cardOne-ratingPLus">+</div>
          </div>
        </div>
        <div className="sabores-clasicos_container-cardFour">
        <div className="sabores-clasicos_container-cardOne-imgContainer">
            <img className="sabores-clasicos_container-cardOne-img" src={pizza} alt="pizza"/>
          </div>
          <h3 className="sabores-clasicos_container-cardOne-h3">Muzzarella</h3>
          <p>⭐⭐⭐⭐⭐</p>
          <div className="sabores-clasicos_container-cardOne-ratingContainer">
            <h4>10/10</h4>
            <div className="sabores-clasicos_container-cardOne-ratingPLus">+</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SaboresClasicos;