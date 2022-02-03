import React from "react";
import heroImg from "../assets/pizzas.jpg";
import commentImg from "../assets/pizza.jpg"
import commentImgTwo from "../assets/hamburguer-removebg-preview.png"
import "../styles/components/HeroContent.css";

const HeroContent = () => {
  const whatsappText = "!Hola! Quiero una...";
  return (
    <div className="hero_content">
      <section className="hero_section">
        <h1>Las mejores <br/> pizzas caseras</h1>
        <p>Hace tu pedido y disfruta de una <br/> riquisima pizza hecha con la mejor masa casera</p>
        <a href={`https://wa.me/595961746430?text=${encodeURIComponent(whatsappText)}`} target="_blank" rel="noreferrer" >
          <button className="hero_section-btn">Haz tu pedido</button>
        </a>
      </section>
      <aside className="hero_aside">
        <label className="hero_aside-commentLeft">
          <img className="hero_aside-commentLeft-img" src={commentImg} alt="comment-img"/>
          <div>
            <p>⭐⭐⭐⭐⭐</p>
            <p>Un sabor único</p>
          </div>
        </label>
        <img className="hero_aside-img" src={heroImg} alt="heroImage"/>
        <label className="hero_aside-commentRight">
          <img className="hero_aside-commentRight-img" src={commentImgTwo} alt="comment-img"/>
          <div>
            <p>Preferido por muchos</p>
          </div>
        </label>
      </aside>
    </div>
  );
}

export default HeroContent;