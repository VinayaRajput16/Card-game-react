/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GameBoard from "./components/GameBoard";
import StartPage  from "./components/Start"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/game" element={<GameBoard />} />
      </Routes>
    </Router>
  );
};

export default App;
