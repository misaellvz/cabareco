import React from "react";
import "../styles/pages/Footer.css";
import logo from "../assets/Cabareco-logo-removebg-preview.png";
import instagram from "../assets/icons8-instagram-48.png";
import facebook from "../assets/icons8-facebook-48.png";
import whatsapp from "../assets/icons8-whatsapp-48.png";

const Footer = () => {
  return (
    <footer className="footer_main-container">
      <img className="footer-logo" src={logo} alt="logo"/>
      <div className="footer-container">
        <p className="footer-p">© Todos los derechos reservados</p>
        <span className="footer-span" >Seguinos en nuestras redes:</span>
        <div className="social-media-container">
          <a href="https://www.instagram.com/explore/locations/1013072809/pizzeria-cabareco?hl=en" >
            <img className="instagram" src={instagram} alt="instagram"/>
          </a>
          <a href="https://web.facebook.com/Pizzeria-Cabareco-382688645227128/?_rdc=1&_rdr" >
            <img className="instagram" src={facebook} alt="facebook"/>
          </a>
          <a href="https://wa.me/595983737623" >
            <img className="instagram" src={whatsapp} alt="whatsapp"/>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;