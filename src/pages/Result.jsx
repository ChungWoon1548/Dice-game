import React from "react";
import { useLocation, Link } from "react-router-dom";

const Result = () => {
  const location = useLocation();
  const { winner } = location.state || {}; // 게임 컴포넌트에서 보낸 승자 정보를 받습니다.

  return (
    <div>
      {winner ? <h1>{winner}가 이겼습니다!</h1> : <h1>결과가 없습니다.</h1>}
      <Link to="/">홈으로 돌아가기</Link>
    </div>
  );
};

export default Result;
