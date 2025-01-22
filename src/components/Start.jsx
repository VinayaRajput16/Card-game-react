/* eslint-disable no-unused-vars */
import React from 'react';
import styles from '../styles/start.module.css';
import { useNavigate } from "react-router-dom";

function Start() {
    const navigate = useNavigate();
  
    const handleClick = () => {
      navigate("/game");  // Replace with your desired route
    };
  return (
    <div className={styles.startPage}>
       <h1>Start Game</h1> 
       <button onClick={handleClick} className={styles.startButton}><svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#FBE6A3"><path d="m600-200-42-42 208-208H80v-60h686L558-718l42-42 280 280-280 280Z"/></svg></button>
    </div>
  )
}

export default Start;