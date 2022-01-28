import React from "react";
import "../styles/pages/PapasFritas.css";
import papasFritas from "../assets/papas2.png";

const PapasFritas = () => {
  return (
    <section id="PapasFritas" className="papas-fritas">
      <aside className="papas-fritas-aside">
        <h1>Papas fritas</h1>
        <div className="papas-fritas-aside-hamburguerComplete">
          <div className="papas-fritas-aside-hamburguerComplete-circle">1</div>
          <p>Papas fritas con cheddar y bacon</p>
        </div>
        <div className="papas-fritas-aside-hamburguerMedium">
          <div className="papas-fritas-aside-hamburguerMedium-circle">1</div>
          <p>Papas fritas medianas</p>
        </div>
        <div className="papas-fritas-aside-hamburguerSmall">
          <div className="papas-fritas-aside-hamburguerSmall-circle">1</div>
          <p>Papas fritas pequeñas</p>
        </div>
      </aside>
      <div className="papas-fritas-middleLine"></div>
      <label className="papas-fritas-label">
        <div className="papas-fritas-blackCard"></div>
        <img className="papas" src={papasFritas} alt="Hamburguer"/>
      </label>
    </section>
  );
}

export default PapasFritas;