import React from "react";
import { Ranking } from "morra_components";
import { useNavigate } from "react-router-dom";
import PAGES from "../router/pages";
import "../App.css";

const WebRanking = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate(PAGES.login);
  };
  return (
    <div className="container">
      <div className="login">
        <Ranking callback={goToLogin} />
      </div>
    </div>
  );
};

export default WebRanking;
