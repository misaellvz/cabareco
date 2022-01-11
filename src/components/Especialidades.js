import React from "react";
import "../styles/pages/Especialidades.css";
import hamburguer from "../assets/hambur.png";

const Especialidades = () => {
  return (
    <section id="Especialidades" className="especialidades_container">
      <aside className="especialidades_container-aside">
        <h1>Proba nuestras <br/>hamburguesas</h1>
        <div className="especialidades_container-aside-hamburguerComplete">
          <div className="especialidades_container-aside-hamburguerComplete-circle">1</div>
          <p>Completa</p>
        </div>
        <div className="especialidades_container-aside-hamburguerMedium">
          <div className="especialidades_container-aside-hamburguerMedium-circle">1</div>
          <p>Mediana</p>
        </div>
        <div className="especialidades_container-aside-hamburguerSmall">
          <div className="especialidades_container-aside-hamburguerSmall-circle">1</div>
          <p>Pequeña</p>
        </div>
      </aside>
      <div className="especialidades_container-middleLine"></div>
      <label className="especialidades_container-label">
        <div className="especialidades_container-yellowCard"></div>
        <img className="hambuguer" src={hamburguer} alt="Hamburguer"/>
      </label>
    </section>
  );
}

export default Especialidades;