import React, { useEffect, useState, useMemo } from "react";

const Background = ({ count = 40 }) => {
  const [particles, setParticles] = useState([]);
  const [timeTheme, setTimeTheme] = useState('night');
  const [eventTheme, setEventTheme] = useState(null);

  // Get Sri Lanka time and determine theme
  useEffect(() => {
    const updateTheme = () => {
      // Get Sri Lanka time (UTC+5:30)
      const now = new Date();
      const sriLankaTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Colombo' }));
      const hours = sriLankaTime.getHours();
      const month = sriLankaTime.getMonth();
      const date = sriLankaTime.getDate();

      // Check for special events
      let event = null;
      
      // New Year (January 1)
      if (month === 0 && date === 1) {
        event = 'newYear';
      }
      // Sinhala & Tamil New Year (April 13-14)
      else if (month === 3 && (date === 13 || date === 14)) {
        event = 'sinhalaNewYear';
      }
      // Independence Day (February 4)
      else if (month === 1 && date === 4) {
        event = 'independenceDay';
      }
      // Christmas (December 25)
      else if (month === 11 && date === 25) {
        event = 'christmas';
      }
      // Vesak (May - approximate, usually full moon)
      else if (month === 4 && date >= 15 && date <= 20) {
        event = 'vesak';
      }

      setEventTheme(event);

      // Time-based themes
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
    // Generate random snowflake data
    const glyphs = ['❅', '❆', '❄️'];
    const items = Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 12 + Math.random() * 16,
      duration: 12 + Math.random() * 12,
      delay: Math.random() * 8,
      opacity: 0.35 + Math.random() * 0.4,
      drift: (Math.random() - 0.5) * 40, // gentle horizontal drift
      spin: 180 + Math.random() * 360,
      glyph: glyphs[Math.floor(Math.random() * glyphs.length)]
    }));
    setParticles(items);
  }, [count]);

  // Theme colors based on time and events - Memoized for performance
  const themeColors = useMemo(() => {
    // Event themes override time themes
    if (eventTheme === 'newYear') {
      return {
        gradient: 'from-[#FFD700]/10 via-[#FF6B6B]/8 to-[#4ECDC4]/10',
        particles: '#FFD700',
        accent: 'from-[#FFD700]/15 to-[#FF6B6B]/15'
      };
    }
    if (eventTheme === 'sinhalaNewYear') {
      return {
        gradient: 'from-[#FF6B00]/10 via-[#FFD700]/8 to-[#00A86B]/10',
        particles: '#FFD700',
        accent: 'from-[#FF6B00]/15 to-[#FFD700]/15'
      };
    }
    if (eventTheme === 'independenceDay') {
      return {
        gradient: 'from-[#8B0000]/10 via-[#FFD700]/8 to-[#FF8C00]/10',
        particles: '#FFD700',
        accent: 'from-[#8B0000]/15 to-[#FFD700]/15'
      };
    }
    if (eventTheme === 'christmas') {
      return {
        gradient: 'from-[#C41E3A]/10 via-[#0F8A5F]/8 to-[#FFD700]/10',
        particles: '#FFFFFF',
        accent: 'from-[#C41E3A]/15 to-[#0F8A5F]/15'
      };
    }
    if (eventTheme === 'vesak') {
      return {
        gradient: 'from-[#4B0082]/10 via-[#FF6B6B]/8 to-[#FFD700]/10',
        particles: '#FFD700',
        accent: 'from-[#4B0082]/15 to-[#FFD700]/15'
      };
    }

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
  }, [timeTheme, eventTheme]);

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

      {/* Snowflakes */}
      {particles.map((p) => (
        <span
          key={p.id}
          aria-hidden="true"
          className="absolute select-none transition-colors duration-[2000ms]"
          style={{
            left: `${p.left}%`,
            top: `-10vh`,
            fontSize: `${p.size}px`,
            lineHeight: 1,
            opacity: p.opacity,
            color: themeColors.particles,
            filter: 'drop-shadow(0 0 6px rgba(255,255,255,0.25))',
            animation: `snowFall ${p.duration}s linear ${p.delay}s infinite`,
            willChange: "transform, opacity",
            '--drift': `${p.drift}px`,
            '--spin': `${p.spin}deg`
          }}
        >{p.glyph}</span>
      ))}

      {/* Event indicator */}
      {eventTheme && (
        <div className="absolute top-4 left-4 px-4 py-2 bg-white/10 rounded-full border border-white/20 text-white text-sm font-semibold animate-pulse">
          🎉 {eventTheme === 'newYear' && 'Happy New Year!'}
          {eventTheme === 'sinhalaNewYear' && 'සුභ අලුත් අවුරුද්දක්!'}
          {eventTheme === 'independenceDay' && 'Independence Day 🇱🇰'}
          {eventTheme === 'christmas' && 'Merry Christmas!'}
          {eventTheme === 'vesak' && 'Vesak Poya 🏮'}
        </div>
      )}

      <style>{`
        @keyframes snowFall {
          0% {
            transform: translate3d(0, -10vh, 0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.9;
          }
          100% {
            transform: translate3d(var(--drift, 0px), 110vh, 0) rotate(var(--spin, 360deg));
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default React.memo(Background);
