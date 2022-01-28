import React from "react";
import "../styles/pages/Agregados.css";

const Agregados = () => {
  return (
    <section id="agregados" className="agregados_main-container">
      <h2 className="agregados-h2">Agregados</h2>
      <div className="agregados-items-container">
      <div className="agregados-container">
        <h3 className="agregados-h3">Sabores Clásicos</h3>
        <div className="agregados-backgroundCard-black">
          <div className="agregados-card-white-one">
            <p className="agregados-card-p">8 Porciones</p>
            <h4 className="agregados-card-h4">2500 Gs</h4>
          </div>
          <div className="agregados-card-white-two">
            <p className="agregados-card-p">12 & 16 Porciones</p>
            <h4 className="agregados-card-h4">5000 Gs</h4>
          </div>
        </div>
      </div>
      <div className="agregados-container">
        <h3 className="agregados-h3">Sabores Premium</h3>
        <div className="agregados-backgroundCard-yellow">
          <div className="agregados-card-black-one">
            <p className="agregados-card-p-black">8 Porciones</p>
            <h4 className="agregados-card-h4-black">2500 Gs</h4>
          </div>
          <div className="agregados-card-black-two">
            <p className="agregados-card-p-black">12 & 16 Porciones</p>
            <h4 className="agregados-card-h4-black">5000 Gs</h4>
          </div>
        </div>
      </div>
      </div>

    </section>
  );
}

export default Agregados;