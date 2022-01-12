import React from "react";
import "../styles/pages/NuestrosProductos.css";
import pizza from "../assets/pizza.jpg";
import hamburguesa from "../assets/hamburguer2.jpg";
import margarita from "../assets/pizza-cabarecco3.jpg";

const NuestrosProductos = () => {
  return (
    <div id="NuestrosProductos" className="nuestros_productos">
      <h2 className="nuestros_productos-headline">Nuestros Productos más populares</h2>
      <div className="nuestros_productos-cardContainer">
        <div className="nuestros_productos-card">
          <img className="nuestros_productos-img" src={pizza} alt="pizza"/>
          <div className="nuestros_productos-itemsInsideCard">
            <p>⭐⭐⭐⭐⭐</p>
            <h2>Pepperoni</h2>
            <p className="nuestros_productos-card-p">Queso muzzarella, pepperoni oregano, salsa de tomate</p>
            <div className="nuestros_productos-price">
              <h2>30.000 Gs.</h2>
              <div className="nuestros_productos-heart">♡</div>
            </div>
          </div>
        </div>
        <div className="nuestros_productos-card">
          <img className="nuestros_productos-img" src={hamburguesa} alt="pizza"/>
          <div className="nuestros_productos-itemsInsideCard">
            <p>⭐⭐⭐⭐⭐</p>
            <h2>Hamburguesa</h2>
            <p className="nuestros_productos-card-p">Pan, lechuga, tomate, carne, cheddar, cebolla, bacon</p>
            <div className="nuestros_productos-price">
              <h2>30.000 Gs.</h2>
              <div className="nuestros_productos-heart">♡</div>
            </div>
          </div>
        </div>
        <div className="nuestros_productos-card">
          <img className="nuestros_productos-img" src={margarita} alt="pizza"/>
          <div className="nuestros_productos-itemsInsideCard">
            <p>⭐⭐⭐⭐⭐</p>
            <h2>Margarita clásica</h2>
            <p className="nuestros_productos-card-p">Queso muzzarella, oregano, salsa de tomate</p>
            <div className="nuestros_productos-price">
              <h2>30.000 Gs.</h2>
              <div className="nuestros_productos-heart">♡</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NuestrosProductos;