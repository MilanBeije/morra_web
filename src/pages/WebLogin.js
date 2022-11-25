import React from "react";
import { Login } from "morra_components";
import { useNavigate } from "react-router-dom";
import PAGES from "../router/pages";
import "../App.css";

const WebLogin = () => {
  const navigate = useNavigate();

  const goToGame = () => {
    navigate(PAGES.game);
  };
  return (
    <div className="container">
      <div className="">
        <Login callback={goToGame} />
      </div>
    </div>
  );
};

export default WebLogin;
