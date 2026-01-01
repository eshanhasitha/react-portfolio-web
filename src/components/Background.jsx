import React, { useEffect, useState, useMemo } from "react";

const Background = ({ count = 40 }) => {
  const [particles, setParticles] = useState([]);
  const [timeTheme, setTimeTheme] = useState('night');

  // Get Sri Lanka time and determine theme
  useEffect(() => {
    const updateTheme = () => {
    
      const now = new Date();
      const sriLankaTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Colombo' }));
      const hours = sriLankaTime.getHours();
      
      if (hours >= 5 && hours < 7) {
        setTimeTheme('dawn'); // Dawn: 5am-7am
      } else if (hours >= 7 && hours < 12) {
        setTimeTheme('morning'); // Morning: 7am-12pm
      } else if (hours >= 12 && hours < 17) {
        setTimeTheme('afternoon'); // Afternoon: 12pm-5pm
      } else if (hours >= 17 && hours < 19) {
        setTimeTheme('dusk'); // Dusk: 5pm-7pm
      } else if (hours >= 19 && hours < 22) {
        setTimeTheme('evening'); // Evening: 7pm-10pm
      } else {
        setTimeTheme('night'); // Night: 10pm-5am
      }
    };

    updateTheme();
    const interval = setInterval(updateTheme, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Generate random particle data
    const items = Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 4 + Math.random() * 6,
      duration: 10 + Math.random() * 10,
      delay: Math.random() * 5,
      opacity: 0.2 + Math.random() * 0.4,
    }));
    setParticles(items);
  }, [count]);

  // Theme colors based purely on time - Memoized for performance
  const themeColors = useMemo(() => {
    // Time-based themes
    switch (timeTheme) {
      case 'dawn':
        return {
          gradient: 'from-[#FF6B6B]/10 via-[#FFA500]/8 to-[#FFD700]/10',
          particles: '#FFB347',
          accent: 'from-[#FF6B6B]/12 to-[#FFA500]/12'
        };
      case 'morning':
        return {
          gradient: 'from-[#87CEEB]/10 via-[#FFD700]/5 to-[#FFA500]/8',
          particles: '#87CEEB',
          accent: 'from-[#87CEEB]/12 to-[#FFD700]/10'
        };
      case 'afternoon':
        return {
          gradient: 'from-[#3B82F6]/10 via-[#60A5FA]/8 to-[#93C5FD]/10',
          particles: '#60A5FA',
          accent: 'from-[#3B82F6]/12 to-[#60A5FA]/12'
        };
      case 'dusk':
        return {
          gradient: 'from-[#FF4500]/10 via-[#FF6347]/8 to-[#FF8C00]/10',
          particles: '#FF6347',
          accent: 'from-[#FF4500]/12 to-[#FF6347]/12'
        };
      case 'evening':
        return {
          gradient: 'from-[#4B0082]/10 via-[#8B008B]/8 to-[#9370DB]/10',
          particles: '#9370DB',
          accent: 'from-[#4B0082]/12 to-[#9370DB]/12'
        };
      case 'night':
      default:
        return {
          gradient: 'from-[#1E3A8A]/10 via-[#312E81]/8 to-[#1E293B]/10',
          particles: '#FFFFFF',
          accent: 'from-[#1E3A8A]/12 to-[#312E81]/12'
        };
    }
  }, [timeTheme]);

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0" style={{ contain: 'layout style paint' }}>
      {/* Animated gradient background */}
      <div 
        className={`absolute inset-0 bg-gradient-to-br ${themeColors.gradient} transition-all duration-[2000ms] ease-in-out`}
      />
      
      {/* Accent gradient overlay */}
      <div 
        className={`absolute inset-0 bg-gradient-to-tr ${themeColors.accent} opacity-30 transition-all duration-[2000ms] ease-in-out`}
      />

      {/* Particles */}
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full transition-colors duration-[2000ms]"
          style={{
            left: `${p.left}%`,
            bottom: `-10px`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity * 0.5,
            backgroundColor: themeColors.particles,
            animation: `floatUp ${p.duration}s linear ${p.delay}s infinite`,
            willChange: "transform"
          }}
        ></span>
      ))}

      <style>{`
        @keyframes floatUp {
          0% {
            transform: translate3d(0, 0, 0) scale(1);
            opacity: 0.4;
          }
          100% {
            transform: translate3d(0, -110vh, 0) scale(0.8);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default React.memo(Background);
