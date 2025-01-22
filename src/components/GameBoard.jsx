/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Card from "./Card";
import "../styles/board.css";
import Modal from "./Modal"

const levelCards = {
  level1: [
    { src: "https://www.google.co.in/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fanime-character-fan-art&psig=AOvVaw0kMHpdkM0tRg_HK-anJyns&ust=1737452573591000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCID77s-BhIsDFQAAAAAdAAAAABAE" },
    { src: "https://img.freepik.com/free-photo/anime-like-illustration-girl-kimono_23-2151835180.jpg?ga=GA1.1.1533105814.1736964469&semt=ais_hybrid" },
    { src: "https://img.freepik.com/free-psd/anime-character-illustration_23-2151782243.jpg?ga=GA1.1.1533105814.1736964469&semt=ais_hybrid" },
    { src: "https://img.freepik.com/free-vector/anime-chibi-boy-standing-character_18591-82512.jpg?ga=GA1.1.1533105814.1736964469&semt=ais_hybrid" },
    { src: "https://img.freepik.com/free-vector/anime-chibi-boy-blond-character_18591-82517.jpg?ga=GA1.1.1533105814.1736964469&semt=ais_hybrid" },
    { src: "https://img.freepik.com/free-vector/hand-drawn-geisha-illustration_52683-144859.jpg?ga=GA1.1.1533105814.1736964469&semt=ais_hybrid" },
    { src: "https://img.freepik.com/free-photo/rendering-bee-anime-character_23-2150963578.jpg?ga=GA1.1.1533105814.1736964469&semt=ais_hybrid" },
    { src: "https://img.freepik.com/free-vector/girl-with-stars-anime-character_603843-484.jpg?ga=GA1.1.1533105814.1736964469&semt=ais_hybrid" },

  ],
  level2: [
    { src: "https://i.pinimg.com/474x/43/a2/d3/43a2d3c73edc817e5e518068a0bd0e05.jpg", matched: false },
    { src: "https://i.pinimg.com/736x/05/41/19/05411928b845fd3910cc9fdbebd207c3.jpg", matched: false },
    { src: "https://i.pinimg.com/736x/fe/20/4b/fe204b4c467f7a6de8e5dfa0b09d4dc4.jpg", matched: false },
    { src: "https://i.pinimg.com/736x/5f/40/40/5f40409450536545a87d37ae05995e7a.jpg", matched: false },
    { src: "https://i.pinimg.com/736x/77/1d/c9/771dc9ef3a4cbce6ce9fa082a5638fff.jpg", matched: false },
    { src: "https://i.pinimg.com/736x/9d/d6/a1/9dd6a123c87058f4cb74beb2d469fe8c.jpg", matched: false },
    { src: "https://i.pinimg.com/474x/78/73/07/78730784e6335107f0af5cd57b40cf59.jpg", matched: false },
    { src: "https://i.pinimg.com/736x/45/41/a0/4541a043a542932865723279e22bc386.jpg", matched: false },
    { src: "https://i.pinimg.com/736x/9f/47/8f/9f478ff1a9cb9055074bb54cdb5b737f.jpg", matched: false },
    { src: "https://i.pinimg.com/736x/1c/42/74/1c4274915940a6ea9f1aac8af8abe620.jpg", matched: false },
    { src: "https://i.pinimg.com/736x/d4/3f/52/d43f52c8e06b5df544ce5c994de080e0.jpg", matched: false },
    { src: "https://i.pinimg.com/736x/fb/47/9a/fb479ac43c5c5cef89188d1cc42e326d.jpg", matched: false },
    { src: "https://i.pinimg.com/736x/c0/76/e2/c076e2310fe431d34a82a721d1af5f5e.jpg", matched: false },

  ],
  level3: [
    { src: "https://i.pinimg.com/474x/e1/ff/9c/e1ff9cda54eabdd7c2aa6c3b081b17fb.jpg", matched: false },
    { src: "https://i.pinimg.com/474x/dc/fd/29/dcfd29a21c5a8918b798dd3dc2cc58b4.jpg", matched: false },
    { src: "https://i.pinimg.com/474x/18/6b/17/186b17914b95923cc3f506a911ac0637.jpg", matched: false },
    { src: "https://i.pinimg.com/736x/9a/0f/f5/9a0ff59e45dfecc0f6cfcb749c4cc804.jpg", matched: false },
    { src: "https://i.pinimg.com/736x/52/18/e3/5218e302f10f5f5c0fa4eec4cd590af7.jpg", matched: false },
    { src: "https://i.pinimg.com/736x/8a/09/91/8a0991cbb23e42b76bd1cdc09f15c887.jpg", matched: false },
    { src: "https://i.pinimg.com/736x/cc/7b/c4/cc7bc4f39f9fda5bbce30dc985a6a698.jpg", matched: false },
    { src: "https://i.pinimg.com/736x/4e/88/34/4e8834e62b3d9aba9d67b8806c267ccd.jpg", matched: false },
    { src: "https://i.pinimg.com/736x/2d/36/d9/2d36d9d7e326003b6372fa9e951426ab.jpg", matched: false },
    { src: "https://i.pinimg.com/736x/4b/9e/6b/4b9e6b5facb5309b9ae1a0e961f162e8.jpg", matched: false },
    { src: "https://i.pinimg.com/736x/b0/14/99/b01499d36d33491aedcb970aa17e8984.jpg", matched: false },
    { src: "https://i.pinimg.com/736x/76/f4/a5/76f4a5cd4a6652e381fb135008327ce1.jpg", matched: false },
    { src: "https://i.pinimg.com/736x/a4/dd/b9/a4ddb945aa71896dd4cc9bd19660edb6.jpg", matched: false },
    { src: "https://i.pinimg.com/736x/4b/79/bc/4b79bc6b4dfe9be3892dbcac58c049e2.jpg", matched: false },
    { src: "https://i.pinimg.com/736x/c5/65/1b/c5651b4057b2fdbe01786ef1de4e5b41.jpg", matched: false },

  ],
};

const GameBoard = () => {
  const [level, setLevel] = useState(1);
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [timeLeft, setTimeLeft] = useState(90); // 90 seconds for each level
  const [gameOver, setGameOver] = useState(false);
  const [showModal, setShowModal] = useState(false); // To toggle modal visibility
  const [modalMessage, setModalMessage] = useState("");

  useEffect(() => {
    // Set cards for the current level
    const shuffledCards = [...levelCards[`level${level}`], ...levelCards[`level${level}`]]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setCards(shuffledCards);
    setFlipped([]);
    setMatched([]);
    setTimeLeft(90);
    setGameOver(false);
  }, [level]);

  useEffect(() => {
    // Countdown timer
    if (timeLeft > 0 && !gameOver) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
    if (timeLeft === 0) {
      setModalMessage("Time's up! You failed to complete the level.");
      setGameOver(true);
      setShowModal(true);
    }
  }, [timeLeft, gameOver]);

  const handleCardClick = (index) => {
    if (gameOver) return; // Prevent flipping cards if the game is over
    if (flipped.length < 2 && !flipped.includes(index) && !matched.includes(index)) {
      setFlipped([...flipped, index]);
    }
  };


  useEffect(() => {
    if (flipped.length === 2) {
      const [first, second] = flipped;
      if (cards[first].src === cards[second].src) {
        setMatched([...matched, first, second]);
      }
      setTimeout(() => setFlipped([]), 500);
    }
  }, [flipped, cards]);

  useEffect(() => {
    if (matched.length === cards.length && cards.length > 0) {
      if (level < 3) {
        setTimeout(() => {
          setMatched([]); // Clear matches before advancing
          setFlipped([]); // Clear flipped cards
          setTimeLeft(90); // Reset timer for the next level
          setLevel((prevLevel) => prevLevel + 1); // Move to the next level
        }, 1000);
      } else {
        setTimeout(() => {
          setModalMessage("Congratulations! You completed all levels!");
          setShowModal(true); // Show modal on success
          resetGame(); // Reset the game after showing the message
        }, 1000);
      }
    }
  }, [matched, cards.length, level]);

  const resetGame = () => {
    setLevel(1);
    setTimeLeft(90);
    setMatched([]);
    setFlipped([]);
    setGameOver(false);
    setShowModal(false); 
  };


  return (
    <div>
      <h1>Memory Card Game</h1>
      <span className="showLevel">Level: {level}</span>
      <h3>Time Left: {timeLeft}s</h3>

      <div className="board">
        {cards.map((card, index) => (
          <Card
            key={card.id}
            card={card}
            isFlipped={flipped.includes(index) || matched.includes(index)}
            onClick={() => handleCardClick(index)}
          />
        ))}
      </div>

      {/* Modal for game messages */}
      {showModal && (
        <Modal >
          <p>{modalMessage}</p>
          <button onClick={resetGame}>Play Again</button>
        </Modal>
      )}
    </div>
  );
};

export default GameBoard;

