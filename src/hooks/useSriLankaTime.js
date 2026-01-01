 import { useEffect, useState, useMemo } from 'react';

export const useSriLankaTime = () => {
  const [timeTheme, setTimeTheme] = useState('night');
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const updateTheme = () => {
      // Get Sri Lanka time (UTC+5:30)
      const now = new Date();
      const sriLankaTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Colombo' }));
      const hours = sriLankaTime.getHours();

      setCurrentTime(sriLankaTime);

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

  const greeting = useMemo(() => {
    const hours = currentTime.getHours();
    if (hours >= 5 && hours < 12) return 'Good Morning';
    if (hours >= 12 && hours < 17) return 'Good Afternoon';
    if (hours >= 17 && hours < 22) return 'Good Evening';
    return 'Good Night';
  }, [currentTime]);

  return {
    timeTheme,
    currentTime,
    greeting
  };
};
