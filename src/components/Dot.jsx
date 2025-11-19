import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

function Dot() {
  const dotRef = useRef(null);
  const rafRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const dot = dotRef.current;
    let mouseX = 0,
      mouseY = 0;
    let dotX = 0,
      dotY = 0;
    let lastUpdate = 0;

    // Adjust speed based on current page
    const isProfilePage = location.pathname === '/';
    const speed = isProfilePage ? 0.15 : 0.4; // Slower tracking for better performance

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = (timestamp) => {
      // Throttle updates to ~60fps
      if (timestamp - lastUpdate < 16) {
        rafRef.current = requestAnimationFrame(animate);
        return;
      }
      lastUpdate = timestamp;
      
      const dx = mouseX - dotX - 10;
      const dy = mouseY - dotY - 10;
      
      // Only update if movement is significant enough
      if (Math.abs(dx) > 0.1 || Math.abs(dy) > 0.1) {
        dotX += dx * speed;
        dotY += dy * speed;
        
        if (dot) {
          // Use translate3d for better GPU acceleration
          dot.style.transform = `translate3d(${dotX}px, ${dotY}px, 0)`;
        }
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
  }, [location.pathname]);

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