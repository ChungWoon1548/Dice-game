import React from "react";
import { useLocation, Link } from "react-router-dom";
import "./Result.css";

const Result = () => {
  const location = useLocation();
  const { winner } = location.state || {}; // 게임 컴포넌트에서 보낸 승자 정보를 받습니다.

  return (
    <div className="container">
      {" "}
      {/* 스타일을 적용할 컨테이너 div */}
      {winner ? (
        <h1 className="winnerText">{winner}가 이겼습니다!</h1>
      ) : (
        <h1 className="noResultText">결과가 없습니다.</h1>
      )}
      <Link to="/" className="link">
        홈으로 돌아가기
      </Link>{" "}
      {/* 링크에 스타일 적용 */}
    </div>
  );
};

export default Result;
