import React, { useEffect, useState } from "react";

const Background = ({ count = 40 }) => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate random particle data
    const items = Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100, // random x position
      size: 4 + Math.random() * 6, // 4–10px
      duration: 10 + Math.random() * 10, // 10–20s
      delay: Math.random() * 5, // 0–5s
      opacity: 0.2 + Math.random() * 0.4, // 0.2–0.6
    }));
    setParticles(items);
  }, [count]);

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0 bg-transparent">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full bg-white blur-xs"
          style={{
            left: `${p.left}%`,
            bottom: `-10px`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            animation: `floatUp ${p.duration}s linear ${p.delay}s infinite`,
          }}
        ></span>
      ))}

      {/* Inject the keyframes for animation */}
      <style>{`
        @keyframes floatUp {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0.5;
          }
          100% {
            transform: translateY(-110vh) scale(0.8);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Background;
