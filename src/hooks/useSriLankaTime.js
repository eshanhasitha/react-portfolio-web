 import { useEffect, useState, useMemo } from 'react';

export const useSriLankaTime = () => {
  const [timeTheme, setTimeTheme] = useState('night');
  const [eventTheme, setEventTheme] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const updateTheme = () => {
      // Get Sri Lanka time (UTC+5:30)
      const now = new Date();
      const sriLankaTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Colombo' }));
      const hours = sriLankaTime.getHours();
      const month = sriLankaTime.getMonth();
      const date = sriLankaTime.getDate();

      setCurrentTime(sriLankaTime);

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

  const greeting = useMemo(() => {
    const hours = currentTime.getHours();
    if (hours >= 5 && hours < 12) return 'Good Morning';
    if (hours >= 12 && hours < 17) return 'Good Afternoon';
    if (hours >= 17 && hours < 22) return 'Good Evening';
    return 'Good Night';
  }, [currentTime]);

  const eventMessage = useMemo(() => {
    if (eventTheme === 'newYear') return '🎉 Happy New Year!';
    if (eventTheme === 'sinhalaNewYear') return '🎊 සුභ අලුත් අවුරුද්දක්!';
    if (eventTheme === 'independenceDay') return '🇱🇰 Happy Independence Day!';
    if (eventTheme === 'christmas') return '🎄 Merry Christmas!';
    if (eventTheme === 'vesak') return '🏮 Vesak Poya බුදු ජයන්ති!';
    return null;
  }, [eventTheme]);

  return {
    timeTheme,
    eventTheme,
    currentTime,
    greeting,
    eventMessage
  };
};
