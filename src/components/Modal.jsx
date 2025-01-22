/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import "../styles/modal.css";
import { useNavigate } from "react-router-dom";

const Modal = ({ children }) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate("/");  // Replace with your desired route
  };
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {children}
        <button className="close-button" onClick={handleClick}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
