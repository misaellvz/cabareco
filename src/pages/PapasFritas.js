import React from "react";
import "../styles/pages/PapasFritas.css";
import papasFritas from "../assets/papas2.png";

const PapasFritas = () => {
  return (
    <section id="PapasFritas" className="papas-fritas">
      <aside className="papas-fritas-aside">
        <h1>Papas fritas</h1>
        <div className="papas-fritas-aside-Complete">
          <div className="papas-fritas-aside-Complete-circle">1</div>
          <p>Papas fritas con cheddar y bacon</p>
        </div>
        <div className="papas-fritas-aside-Medium">
          <div className="papas-fritas-aside-Medium-circle">1</div>
          <p>Papas fritas medianas</p>
        </div>
        <div className="papas-fritas-aside-Small">
          <div className="papas-fritas-aside-Small-circle">1</div>
          <p>Papas fritas pequeñas</p>
        </div>
      </aside>
      <div className="papas-fritas-middleLine"></div>
      <label className="papas-fritas-label">
        <div className="papas-fritas-blackCard"></div>
        <img className="papas" src={papasFritas} alt="papas"/>
      </label>
    </section>
  );
}

export default PapasFritas;