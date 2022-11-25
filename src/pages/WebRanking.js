import React from "react";
import { Ranking } from "morra_components";
import { useNavigate } from "react-router-dom";
import PAGES from "../router/pages";
import "../App.css";
import Background from "../components/Background";

const WebRanking = () => {
  const navigate = useNavigate();

  const goToGame = () => {
    navigate(PAGES.game);
  };
  return (
    <div className="container">
      <Background />
      <div className="gameimg">
        <div className="game">
          <Ranking callback={goToGame} />
        </div>
      </div>
    </div>
  );
};

export default WebRanking;
