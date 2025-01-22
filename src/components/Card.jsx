/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import "../styles/card.css";

const Card = ({ card, isFlipped, onClick }) => {
  return (
    <div
      className={`card ${isFlipped ? "flipped" : ""}`}
      onClick={onClick}
    >
      {isFlipped ? (
        <img src={card.src} alt="card" className="card-img" />
      ) : (
        <div className="card-back"></div>
      )}
    </div>
  );
};

export default Card;
