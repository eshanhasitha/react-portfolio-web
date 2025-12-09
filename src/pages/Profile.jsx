import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSriLankaTime } from '../hooks/useSriLankaTime';

const user = {
  name: 'Eshan Hasitha',
  imageUrl: 'https://avatars.githubusercontent.com/u/181459091?s=400&u=6ba444a46d0ac4751acd8c50ada2155a3fb7149d&v=4',
  imageAlt: 'Eshan',
  size: 200,
};

const Profile = () => {
  const typedTextRef = useRef(null);
  const { greeting, eventMessage } = useSriLankaTime();

  useEffect(() => {
    const strings = [
      greeting,
      `I'm ${user.name}`,
      "Full-Stack Developer",
      "UI/UX Enthusiast",
      "Problem Solver",
      "Tech Explorer"
    ];

    let currentStringIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let typingSpeed = 80;

    const type = () => {
      const currentString = strings[currentStringIndex];
      // Clamp index to valid range
      if (currentCharIndex < 0) currentCharIndex = 0;
      if (currentCharIndex > currentString.length) currentCharIndex = currentString.length;
      
      if (isDeleting) {
        if (currentCharIndex > 0) {
          typedTextRef.current.textContent = currentString.substring(0, currentCharIndex - 1);
        } else {
          typedTextRef.current.textContent = '';
        }
        currentCharIndex--;
        typingSpeed = 50;
      } else {
        if (currentCharIndex <= currentString.length) {
          typedTextRef.current.textContent = currentString.substring(0, currentCharIndex + 1);
        }
        currentCharIndex++;
        typingSpeed = 80;
      }

      if (!isDeleting && currentCharIndex === currentString.length) {
        isDeleting = true;
        typingSpeed = 2000;
      } else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentStringIndex = (currentStringIndex + 1) % strings.length;
        typingSpeed = 500;
      }

      setTimeout(type, typingSpeed);
    };

    type();
  }, [greeting]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 pt-24 sm:pt-28 pb-16 sm:pb-20" id="profile">
      {/* Event Banner */}
      {eventMessage && (
        <div className="absolute top-24 left-1/2 -translate-x-1/2 px-6 py-3 bg-gradient-to-r from-[#3B82F6]/20 to-[#10B981]/20 rounded-full border border-white/20 text-white text-sm sm:text-base font-semibold animate-pulse shadow-lg z-50">
          {eventMessage}
        </div>
      )}
      <div className="relative mt-4 sm:mt-6 md:mt-8 mb-6 sm:mb-8">
        <div className="absolute inset-0 bg-gradient-to-r from-[#3B82F6] via-[#10B981] to-[#3B82F6] rounded-full blur-xl opacity-50 animate-pulse"></div>
        <div className="relative p-1.5 bg-gradient-to-r from-[#3B82F6] to-[#10B981] rounded-full shadow-2xl">
          <img
            src={user.imageUrl}
            alt={user.imageAlt}
            loading="eager"
            decoding="sync"
            width="200"
            height="200"
            className="rounded-full w-48 h-48 lg:w-64 lg:h-64 object-cover border-2 border-[#1E293B]"
            style={{
              width: user.size,
              height: user.size,
            }}
          />
        </div>
      </div>

      <div className="w-full max-w-4xl px-4">
        <h1 className="text-center text-4xl md:text-6xl lg:text-7xl font-bold text-[#F1F5F9] min-h-[100px] lg:min-h-[150px] flex items-center justify-center">
          <span 
            ref={typedTextRef}
            className="bg-gradient-to-r from-[#3B82F6] to-[#10B981] bg-clip-text text-transparent typing-text"
          ></span>
          <span className="animate-blink ml-2 text-[#3B82F6]">|</span>
        </h1>

      </div>


      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 mt-8 sm:mt-10 md:mt-12 w-full max-w-md px-4">
        <Link
          to="/contact"
          className="group w-full sm:w-auto relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#3B82F6] to-[#2563EB] text-white font-bold text-base sm:text-lg rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#3B82F6]/50 hover:scale-105 active:scale-95 overflow-hidden text-center"
        >
          <span className="relative z-10">Get In Touch</span>
          <div className="absolute inset-0 bg-gradient-to-r from-[#2563EB] to-[#3B82F6] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </Link>
        
        <Link
          to="/projects"
          className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-[#4A90E2] text-[#4A90E2] font-bold text-base sm:text-lg rounded-full transition-all duration-300 hover:bg-[#3B82F6]/10 hover:scale-105 active:scale-95 text-center"
        >
          View Projects
        </Link>
      </div>

      {/* Social Links */}
      <div className="flex items-center justify-center gap-4 sm:gap-6 mt-6 sm:mt-8 mb-6 sm:mb-8">
        <a
          href="https://github.com/eshanhasitha"
          target="_blank"
          rel="noreferrer"
          className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-[#1E293B]/60 rounded-full border border-white/10 transition-all duration-500 hover:border-[#3B82F6] hover:shadow-lg hover:shadow-[#3B82F6]/50 hover:scale-110 active:scale-95"
        >
          <img
            src="https://skillicons.dev/icons?i=github"
            alt="GitHub"
            loading="lazy"
            decoding="async"
            width="28"
            height="28"
            className="w-6 h-6 sm:w-7 sm:h-7 transition-transform duration-500 group-hover:rotate-12"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#3B82F6]/20 to-[#10B981]/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </a>

        <a
          href="https://www.linkedin.com/in/eshanhasitha"
          target="_blank"
          rel="noreferrer"
          className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-[#1E293B]/60 rounded-full border border-white/10 transition-all duration-500 hover:border-[#0A66C2] hover:shadow-lg hover:shadow-[#0A66C2]/50 hover:scale-110 active:scale-95"
        >
          <img
            src="https://skillicons.dev/icons?i=linkedin"
            alt="LinkedIn"
            className="w-6 h-6 sm:w-7 sm:h-7 transition-transform duration-500 group-hover:rotate-12"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A66C2]/20 to-[#0077B5]/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </a>

        <a
          href="https://discord.com/users/eshanhasitha"
          target="_blank"
          rel="noreferrer"
          className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-[#1E293B]/60 rounded-full border border-white/10 transition-all duration-500 hover:border-[#5865F2] hover:shadow-lg hover:shadow-[#5865F2]/50 hover:scale-110 active:scale-95"
        >
          <img
            src="https://skillicons.dev/icons?i=discord"
            alt="Discord"
            className="w-6 h-6 sm:w-7 sm:h-7 transition-transform duration-500 group-hover:rotate-12"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#5865F2]/20 to-[#7289DA]/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </a>
      </div>

      <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 w-full max-w-3xl px-4">
        <div className="text-center">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#3B82F6] to-[#10B981] bg-clip-text text-transparent">2+</h3>
          <p className="text-[#94A3B8] text-xs sm:text-sm md:text-base mt-1 sm:mt-2">Years Experience</p>
        </div>
        <div className="text-center">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#3B82F6] to-[#10B981] bg-clip-text text-transparent">2+</h3>
          <p className="text-[#94A3B8] text-xs sm:text-sm md:text-base mt-1 sm:mt-2">Projects Done</p>
        </div>
        <div className="text-center">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#3B82F6] to-[#10B981] bg-clip-text text-transparent">24/7</h3>
          <p className="text-[#94A3B8] text-xs sm:text-sm md:text-base mt-1 sm:mt-2">Available</p>
        </div>
      </div>

      <style>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s infinite;
        }
        .typing-text {
          line-height: 1.2;
          padding-bottom: 4px;
        }
      `}</style>
    </div>
  );
};

export default Profile;