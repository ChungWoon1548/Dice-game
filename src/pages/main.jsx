import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Main.css";

const Main = () => {
  const [playerCount, setPlayerCount] = useState(2); // 기본적으로 2명의 플레이어
  let navigate = useNavigate();

  const goToGame = () => {
    if (playerCount >= 1 && playerCount <= 6) {
      navigate("/dicegame", { state: { playerCount } }); // 플레이어 수를 상태로 전달
    } else {
      alert("플레이어 수는 1명에서 6명 사이여야 합니다.");
    }
  };

  return (
    <div className="container">
      <h1 className="title">주사위 게임에 오신 것을 환영합니다!</h1>
      <p className="subtitle">게임에 참여할 인원 수를 선택하세요 (최대 6명):</p>
      <input
        type="number"
        value={playerCount}
        onChange={(e) => setPlayerCount(Number(e.target.value))}
        min="1"
        max="6"
        className="input" // 입력란에 스타일 적용
      />
      <button onClick={goToGame} className="button">
        게임 시작
      </button>
    </div>
  );
};

export default Main;
