import React from "react";
import { Game } from "morra_components";
import { useNavigate } from "react-router-dom";
import PAGES from "../router/pages";
import Background from "../components/Background";

const WebGame = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate(PAGES.login);
  };
  return (
    <div>
      <Background />
      <div>
        <Game callback={goToLogin} />
      </div>
    </div>
  );
};

export default WebGame;
