import React from "react";
import { Login } from "morra_components";
import { useNavigate } from "react-router-dom";
import PAGES from "../router/pages";

const WebLogin = () => {
  const navigate = useNavigate();

  const goToGame = () => {
    navigate(PAGES.game);
  };
  return (
    <div>
      <Login callback={goToGame} />
    </div>
  );
};

export default WebLogin;
