import React from "react";
import "../styles/pages/PapasFritas.css";
import papasFritas from "../assets/papas2.png";

const PapasFritas = () => {
  const whatsappText = "!Hola! Quiero una...";
  return (
    <section id="PapasFritas" className="papas-fritas">
      <aside className="papas-fritas-aside">
        <h1>Papas fritas</h1>
        <a className="papas-a" href={`https://wa.me/595961746430?text=${encodeURIComponent(whatsappText)}`} target="_blank" rel="noreferrer">
          <div className="papas-fritas-aside-Complete">
            <div className="papas-fritas-aside-Complete-circle">1</div>
            <p>Papas fritas con cheddar y bacon</p>
          </div>
        </a>
        <a className="papas-a" href={`https://wa.me/595961746430?text=${encodeURIComponent(whatsappText)}`} target="_blank" rel="noreferrer">
          <div className="papas-fritas-aside-Medium">
            <div className="papas-fritas-aside-Medium-circle">2</div>
            <p>Papas fritas medianas</p>
          </div>
        </a>
        <a className="papas-a" href={`https://wa.me/595961746430?text=${encodeURIComponent(whatsappText)}`} target="_blank" rel="noreferrer">
          <div className="papas-fritas-aside-Small">
            <div className="papas-fritas-aside-Small-circle">3</div>
            <p>Papas fritas pequeñas</p>
          </div>
        </a>
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