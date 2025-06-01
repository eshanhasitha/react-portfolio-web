import React, { useEffect, useRef } from 'react';
import './Dot.css';

function Dot() {
  const dotRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    let mouseX = 0,
      mouseY = 0;
    let dotX = 0,
      dotY = 0;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      dotX += (mouseX - dotX - 10) * 0.09;
      dotY += (mouseY - dotY - 10) * 0.09;
      if (dot) {
        dot.style.transform = `translate(${dotX}px, ${dotY}px)`;
      }
      requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  });

  return <div className="dot" ref={dotRef}></div>;
}

export default Dot;
