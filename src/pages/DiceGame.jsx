import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./DiceGame.css";

const DiceGame = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { playerCount } = location.state || { playerCount: 2 };
  const [playerScores, setPlayerScores] = useState(Array(playerCount).fill(0));
  const [currentScore, setCurrentScore] = useState(0);
  const [activePlayer, setActivePlayer] = useState(0);
  const [dice, setDice] = useState(null);

  useEffect(() => {
    setPlayerScores(Array(playerCount).fill(0));
  }, [playerCount]);

  const newGame = () => {
    // 'New Game' 버튼 로직
    setPlayerScores(Array(playerCount).fill(0));
    setCurrentScore(0);
    setActivePlayer(0);
    setDice(null);
  };

  const rollDice = () => {
    const newDice = Math.floor(Math.random() * 6) + 1;
    setDice(newDice);

    if (newDice < 3) {
      // 주사위가 1 또는 2일 경우, 현재 점수를 잃고 플레이어 전환
      setCurrentScore(0);
      setActivePlayer(
        (prevActivePlayer) => (prevActivePlayer + 1) % playerCount
      );
    } else {
      // 주사위가 3 이상일 경우, 현재 점수에 추가
      setCurrentScore((prevCurrentScore) => prevCurrentScore + newDice);
    }
  };

  const holdScore = () => {
    const newScores = [...playerScores];
    newScores[activePlayer] += currentScore;

    if (newScores[activePlayer] >= 50) {
      // 현재 플레이어의 점수가 50점 이상일 경우, 게임 승리하고 결과 페이지로 이동
      navigate("/result", { state: { winner: `Player ${activePlayer + 1}` } });
    } else {
      // 점수를 홀드하고 다음 플레이어로 전환
      setPlayerScores(newScores);
      setCurrentScore(0);
      setActivePlayer(
        (prevActivePlayer) => (prevActivePlayer + 1) % playerCount
      );
    }
  };

  const renderPlayerPanels = () => {
    return Array.from({ length: playerCount }, (_, i) => (
      <div
        key={i}
        className={`player-panel player-${i + 1} ${
          activePlayer === i ? "active" : ""
        }`}
      >
        <div className="player-name">Player {i + 1}</div>
        <div className="player-score">{playerScores[i]}</div>
        {activePlayer === i && (
          <div className="current-score">CURRENT {currentScore}</div>
        )}
      </div>
    ));
  };

  return (
    <div className="game-container">
      <button onClick={newGame} className="new-game-button button">
        NEW GAME
      </button>
      <div className="player-container">{renderPlayerPanels()}</div>
      <div className="dice-container">
        {dice && (
          <img
            src={`${process.env.PUBLIC_URL}/images/dice${dice}.png`}
            alt={`Dice ${dice}`}
            className="dice-img"
          />
        )}
      </div>
      <div className="controls-container">
        <button onClick={rollDice} className="button">
          ROLL DICE
        </button>
        <button onClick={holdScore} className="button">
          HOLD
        </button>
      </div>
    </div>
  );
};

export default DiceGame;
