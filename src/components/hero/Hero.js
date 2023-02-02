import React from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.scss";

function Hero() {
  const navigate = useNavigate();
  return (
    <div className="hero">
      <div className="hero-content center">
        <h2 className="heading">Exclusive Print and artwork</h2>
        <p className="sub-heading">
          Exclusive Art Pieces, for the Exclusive You.
        </p>
        <button
          onClick={() => navigate("/category")}
          className="cta btn-primary"
        >
          Explore more
        </button>
      </div>
    </div>
  );
}

export default Hero;
