import React from "react";
import "../styles/pages/Precios.css";

const Precios = () => {
  return (
    <div id="Precios" className="precios_container">
      <h2 className="precios_container-headline">Nuestras especialidades</h2>
      <div className="precios_container-cards">
        <div className="precios_container-yellowCard">0</div>
        <div className="precios_container-cardOne">1</div>
        <div className="precios_container-cardTwo">2</div>
        <div className="precios_container-cardThree">3</div>
        <div className="precios_container-cardFour">4</div>
      </div>
    </div>
  );
}

export default Precios;