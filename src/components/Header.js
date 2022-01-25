import React from "react";
import logo from "../assets/Cabareco-logo-removebg-preview.png";
import "../styles/components/Header.css";

const Header = () => {
  const whatsappText = "!Hola! Quiero una...";
  return (
    <header className="main_container-header">
      <ul className="main_container-ul">
        <li>
          <img className="logo" src={logo} alt="logo" />
        </li>
        <li className="main_container-li">
          <a href="#Especialidades">Especialidades</a>
        </li>
        <li className="main_container-li">
          <a href="#NuestrosProductos">Nuestros Productos</a>
        </li>
        <li className="main_container-li">
          <a href="#Precios">Precios</a>
        </li>
      </ul>
      <a href={`https://wa.me/595961746430?text=${encodeURIComponent(whatsappText)}`} target="_blank" rel="noreferrer">
        <button className="btn-header">Haz tu pedido</button>
      </a>
    </header>
  );
};

export default Header;
