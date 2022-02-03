import React from "react";
import "../styles/pages/Delivery.css";
import delivery from "../assets/deliveryman.png";
import pizza from "../assets/pizza05.png";

const Delivery = () => {
  const whatsappText = "!Hola! Quiero una...";
  return (
    <div className="delivery-main-container">
      <div className="delivery-items-container">
        <img className="pizza" src={pizza} alt="delivery" />
        <div className="delivery-headlines">
          <h3 className="delivery-h3">Haz tu pedido, te lo llevamos a casa</h3>
          <a className="delivery-a" href={`https://wa.me/595961746430?text=${encodeURIComponent(whatsappText)}`} target="_blank" rel="noreferrer">
            <div className="delivery-background-yellow">
              <h2 className="delivery-background-yellow-h2">Haz tu pedido</h2>
            </div>
          </a>
        </div>
        <img className="delivery_guy" src={delivery} alt="delivery" />
      </div>
    </div>
  );
}

export default Delivery;