import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const rafRef = useRef(null);

  useEffect(() => {
    // Cancel any ongoing animation
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }

    const startTime = performance.now();
    const startScroll = window.pageYOffset || document.documentElement.scrollTop;
    const duration = 300; // Faster - 300ms for smooth scroll

    const smoothScrollToTop = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth deceleration
      const easeOut = 1 - Math.pow(1 - progress, 3);
      
      window.scrollTo(0, startScroll * (1 - easeOut));
      
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(smoothScrollToTop);
      }
    };
    
    rafRef.current = requestAnimationFrame(smoothScrollToTop);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [pathname]);

  return null;
};

export default ScrollToTop;
