import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!loading) {
      return;
    }

    setProgress(0);

    const interval = setInterval(() => {
      setProgress((prev) => {
        const increment = Math.random() * 12 + 6;
        const nextValue = Math.min(prev + increment, 100);

        if (nextValue >= 100) {
          setLoading(false);
        }

        return nextValue;
      });
    }, 120);

    return () => clearInterval(interval);
  }, [loading]);

  useEffect(() => {
    if (typeof window === "undefined") {
      const fallback = setTimeout(() => setLoading(false), 4000);
      return () => clearTimeout(fallback);
    }

    const handleReady = () => setLoading(false);
    const fallback = setTimeout(handleReady, 4000);

    if (document.readyState === "complete") {
      handleReady();
    } else {
      window.addEventListener("load", handleReady);
    }

    return () => {
      window.removeEventListener("load", handleReady);
      clearTimeout(fallback);
    };
  }, []);

  const displayProgress = Math.min(100, Math.floor(progress));

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-10 bg-[#040816]"
        >
          {/* Glowing background pulse to keep the screen alive */}
          <motion.div
            className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.15),_transparent_45%)]"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative w-full max-w-lg px-10">
            <div className="mb-4 flex items-center justify-between text-xs uppercase tracking-[0.4em] text-blue-200/70">
              <span>Loading</span>
              <span className="text-base tracking-normal text-blue-100">{displayProgress}%</span>
            </div>

            <div
              className="relative h-3 overflow-hidden rounded-full bg-slate-800/70"
              role="progressbar"
              aria-valuenow={displayProgress}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              {/* Progress bar that can bail out early when the app is ready */}
              <motion.div
                className="absolute inset-y-0 left-0 overflow-hidden rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 shadow-[0_0_25px_rgba(14,165,233,0.45)]"
                animate={{ width: `${displayProgress}%` }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <motion.span
                  className="absolute inset-y-0 -left-10 w-24 bg-white/40 blur-2xl"
                  animate={{ x: ["0%", "160%"] }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Preloader;
