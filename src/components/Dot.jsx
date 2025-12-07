import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

function Dot() {
  const dotRef = useRef(null);
  const rafRef = useRef(null);
  const location = useLocation();
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isSmallScreen) return;
    const dot = dotRef.current;
    let mouseX = 0,
      mouseY = 0;
    let dotX = 0,
      dotY = 0;

    // Improved smoothness with higher speed
    const speed = 0.2;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      const dx = mouseX - dotX - 10;
      const dy = mouseY - dotY - 10;
      
      // Smooth easing for better visual flow
      dotX += dx * speed;
      dotY += dy * speed;
      
      if (dot) {
        // Use translate3d for better GPU acceleration
        dot.style.transform = `translate3d(${dotX}px, ${dotY}px, 0)`;
      }
      
      rafRef.current = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", handleMouseMove, { passive: true });
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [location.pathname, isSmallScreen]);

  if (isSmallScreen) return null;

  return (
    <div
      ref={dotRef}
      className="fixed w-2 h-2 rounded-full pointer-events-none z-100"
      style={{
        background: "radial-gradient(circle, #ffffff, #add8e6)",
        boxShadow: "0 0 20px 10px rgba(255, 255, 255, 0.3)",
        willChange: "transform",
      }}
    ></div>
  );
}

export default Dot;