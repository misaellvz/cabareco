import React from "react";
import "../styles/pages/Bebidas.css";

const Bebidas = () => {
  return (
    <section id="bebidas" className="bebidas_main-container">
      <h2 className="bebidas-h2">Bebidas</h2>

      <div className="bebidas-cards-container" >
        <div className="bebidas-container">
          <div className="bebidas-backgroundCard-black">
            <div className="bebidas-card-white">
              <h3 className="bebidas-card-h3">Gaseosa</h3>
              <p className="bebidas-card-p">500ml</p>
              <h4 className="bebidas-card-h4">6.000 Gs</h4>
              <div className="bebidas-card-span-container">
                <span className="bebidas-card-span">¡Quiero!</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bebidas-container">
          <div className="bebidas-backgroundCard-yellow">
            <div className="bebidas-card-black">
              <h3 className="bebidas-card-h3-black">Gaseosa</h3>
              <p className="bebidas-card-p-black">1.5 litros</p>
              <h4 className="bebidas-card-h4-black">12.000 Gs</h4>
              <div className="bebidas-card-span-black-container">
                <span className="bebidas-card-span-black">¡Quiero!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Bebidas;