import React, { useState, useEffect } from "react";
import heroImage from "../images/paradise2.jpg";
import "../App.css";

function Hero() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="hero-div-img">
      <div
        className="hero-div"
        style={{ transform: `translateY(${offsetY}px)` }}
      >
        <h2 className="hero-title">Paradise awaits</h2>
        <button className="hero-button">VISIT</button>
      </div>
    </div>
    // </div>
  );
}

export default Hero;
