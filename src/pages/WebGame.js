import React from "react";
import { Game } from "morra_components";
import { useNavigate } from "react-router-dom";
import PAGES from "../router/pages";
import Background from "../components/Background";
import SmallBg from "../components/SmallBg";

const WebGame = () => {
  const navigate = useNavigate();

  const goToRanking = () => {
    navigate(PAGES.ranking);
  };
  return (
    <div className="container">
      <Background />
      <div className="gameimg">
        <div className="game">
          <Game navigateToRankingCallback={goToRanking} />
        </div>
      </div>
    </div>
  );
};

export default WebGame;
