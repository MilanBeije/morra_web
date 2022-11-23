import React from "react";
import { Game } from "morra_components";
import { useNavigate } from "react-router-dom";
import PAGES from "../router/pages";

const WebGame = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate(PAGES.login);
  };
  return (
    <div>
      <Game callback={goToLogin} />
    </div>
  );
};

export default WebGame;
