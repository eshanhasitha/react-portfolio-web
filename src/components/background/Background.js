import React, { useEffect } from "react";
import "./Background.css";

const   Background = () => {
  useEffect(() => {
    const style = document.createElement("style");
    document.head.appendChild(style);
  }, []);

  const generateParticles = () => {
    return Array.from({ length: 30 }, (_, i) => {
      const style = {
        left: `${Math.random() * 100}%`,
        animationDuration: `${10 + Math.random() * 10}s`,
        animationDelay: `${Math.random() * 5}s`,
      };
      return <span key={i} className="particle" style={style} />;
    });
  };

  return <div className="magic-background">{generateParticles()}</div>;
};

export default Background;
