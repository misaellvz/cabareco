import React from "react";
import "../styles/pages/SaboresPremium.css";
import pizza from "../assets/pizza.jpg";
import margarita from "../assets/pizza-cabarecco3.jpg";

const SaboresPremium = () => {
  return (
    <div id="SaboresPremium" className="sabores-premium">
      <h2 className="sabores-premium-headline">Sabores Premium</h2>
      <h3 className="sabores-premium-headlineSub">Tamaños & Precios</h3>
      <div className="sabores-premium-tamaños-precios">
        <div className="sabores-premium-tamaños-precios-black-background">
          <div className="sabores-premium-tamaños-precios-yellow">
            <h2 className="sabores-premium-tamaños-precios-yellow-h2">Normal</h2>
            <h3 className="sabores-premium-tamaños-precios-yellow-h3">8 porciones</h3>
            <h4 className="sabores-premium-tamaños-precios-yellow-h4">35.000 Gs.</h4>
          </div>
        </div>
        <div className="sabores-premium-tamaños-precios-black-background-two">
          <div className="sabores-premium-tamaños-precios-white">
            <h2 className="sabores-premium-tamaños-precios-white-h2">Grande</h2>
            <h3 className="sabores-premium-tamaños-precios-white-h3">12 porciones</h3>
            <h4 className="sabores-premium-tamaños-precios-white-h4">45.000 Gs.</h4>
          </div>
          <div className="sabores-premium-tamaños-precios-whiteTwo">
            <h2 className="sabores-premium-tamaños-precios-white-h2">Extra <br/>Grande</h2>
            <h3 className="sabores-premium-tamaños-precios-white-h3">16 porciones</h3>
            <h4 className="sabores-premium-tamaños-precios-white-h4">55.000 Gs.</h4>
          </div>
        </div>
        <div className="sabores-premium-tamaños-precios-yellow-background">
          <div className="sabores-premium-tamaños-precios-black">
          <h2 className="sabores-premium-tamaños-precios-black-h2">Borde Relleno Mediano</h2>
            <h3 className="sabores-premium-tamaños-precios-black-h3">8 porciones</h3>
            <h4 className="sabores-premium-tamaños-precios-black-h4">45.000 Gs.</h4>
          </div>
          <div className="sabores-premium-tamaños-precios-blackTwo">
            <h2 className="sabores-premium-tamaños-precios-black-h2">Borde Relleno Grande</h2>
            <h3 className="sabores-premium-tamaños-precios-black-h3">12 porciones</h3>
            <h4 className="sabores-premium-tamaños-precios-black-h4">65.000 Gs.</h4>
          </div>
        </div>
      </div>

      <div className="sabores-premium-cardContainer">
        <div className="sabores-premium-card">
          <img className="sabores-premium-img" src={pizza} alt="pizza"/>
          <div className="sabores-premium-itemsInsideCard">
            <p>⭐⭐⭐⭐⭐</p>
            <h2>Pepperoni</h2>
            <p className="sabores-premium-card-p">Queso muzzarella, pepperoni, oregano, masa y salsa de la casa</p>
            <div className="sabores-premium-price">
              <h2>Haz tu pedido</h2>
              <div className="sabores-premium-want">¡Quiero!</div>
            </div>
          </div>
        </div>
        <div className="sabores-premium-card">
          <img className="sabores-premium-img" src={pizza} alt="pizza"/>
          <div className="sabores-premium-itemsInsideCard">
            <p>⭐⭐⭐⭐⭐</p>
            <h2>4 Quesos</h2>
            <p className="sabores-premium-card-p">Masa y salsa de la casa, muzzarella roquefort, parmesano, catupiry y orégano.</p>
            <div className="sabores-premium-price">
              <h2>Haz tu pedido</h2>
              <div className="sabores-premium-want">¡Quiero!</div>
            </div>
          </div>
        </div>
        <div className="sabores-premium-card">
          <img className="sabores-premium-img" src={margarita} alt="pizza"/>
          <div className="sabores-premium-itemsInsideCard">
            <p>⭐⭐⭐⭐⭐</p>
            <h2>Catupiry</h2>
            <p className="sabores-premium-card-p">Masa y salsa de la casa, muzzarella, catupiry y orégano.</p>
            <div className="sabores-premium-price">
              <h2>Haz tu pedido</h2>
              <div className="sabores-premium-want">¡Quiero!</div>
            </div>
          </div>
        </div>
      </div>
      <div className="sabores-premium-cardContainer">
        <div className="sabores-premium-card">
          <img className="sabores-premium-img" src={pizza} alt="pizza"/>
          <div className="sabores-premium-itemsInsideCard">
            <p>⭐⭐⭐⭐⭐</p>
            <h2>Panceta con cheddar</h2>
            <p className="sabores-premium-card-p">Masa y salsa de la casa, muzzarella, panceta, queso cheddar y orégano.</p>
            <div className="sabores-premium-price">
              <h2>Haz tu pedido</h2>
              <div className="sabores-premium-want">¡Quiero!</div>
            </div>
          </div>
        </div>
        <div className="sabores-premium-card">
          <img className="sabores-premium-img" src={pizza} alt="pizza"/>
          <div className="sabores-premium-itemsInsideCard">
            <p>⭐⭐⭐⭐⭐</p>
            <h2>Mexicana</h2>
            <p className="sabores-premium-card-p">Masay salsa de la casa, muzzarella, chorizos picantes, salsa picante, aceitunas y orégano.</p>
            <div className="sabores-premium-price">
              <h2>Haz tu pedido</h2>
              <div className="sabores-premium-want">¡Quiero!</div>
            </div>
          </div>
        </div>
        <div className="sabores-premium-card">
          <img className="sabores-premium-img" src={margarita} alt="pizza"/>
          <div className="sabores-premium-itemsInsideCard">
            <p>⭐⭐⭐⭐⭐</p>
            <h2>Vegetariana</h2>
            <p className="sabores-premium-card-p">Masa y salsa de la casa, muzzarella, morrón, cebolla, tomate, aceituna y orégano.</p>
            <div className="sabores-premium-price">
              <h2>Haz tu pedido</h2>
              <div className="sabores-premium-want">¡Quiero!</div>
            </div>
          </div>
        </div>
      </div>
      <div className="sabores-premium-cardContainer">
        <div className="sabores-premium-card">
          <img className="sabores-premium-img" src={pizza} alt="pizza"/>
          <div className="sabores-premium-itemsInsideCard">
            <p>⭐⭐⭐⭐⭐</p>
            <h2>Pollo con Catupiry</h2>
            <p className="sabores-premium-card-p">Masa y salsa de la casa, muzzarella, pollo, catupiry y orégano.</p>
            <div className="sabores-premium-price">
              <h2>Haz tu pedido</h2>
              <div className="sabores-premium-want">¡Quiero!</div>
            </div>
          </div>
        </div>
        <div className="sabores-premium-card">
          <img className="sabores-premium-img" src={pizza} alt="pizza"/>
          <div className="sabores-premium-itemsInsideCard">
            <p>⭐⭐⭐⭐⭐</p>
            <h2>Panceta con cebolla</h2>
            <p className="sabores-premium-card-p">Masa y salsa de la casa, muzzarella, cebolla, panceta y arégano.</p>
            <div className="sabores-premium-price">
              <h2>Haz tu pedido</h2>
              <div className="sabores-premium-want">¡Quiero!</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SaboresPremium;