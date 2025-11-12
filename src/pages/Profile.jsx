import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const user = {
  name: 'Eshan Hasitha',
  imageUrl: 'https://avatars.githubusercontent.com/u/181459091?s=400&u=6ba444a46d0ac4751acd8c50ada2155a3fb7149d&v=4',
  imageAlt: 'Eshan',
  size: 200,
};

const Profile = () => {
  const typedTextRef = useRef(null);

  useEffect(() => {
    const strings = [
      `Hi, I'm ${user.name}`,
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
      
      if (isDeleting) {
        typedTextRef.current.textContent = currentString.substring(0, currentCharIndex - 1);
        currentCharIndex--;
        typingSpeed = 50;
      } else {
        typedTextRef.current.textContent = currentString.substring(0, currentCharIndex + 1);
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
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-20" id="profile">
      <div className="relative mt-8 mb-8">
        <div className="absolute inset-0 bg-gradient-to-r from-[#3B82F6] via-[#10B981] to-[#3B82F6] rounded-full blur-xl opacity-50 animate-pulse"></div>
        <div className="relative p-1.5 bg-gradient-to-r from-[#3B82F6] to-[#10B981] rounded-full shadow-2xl">
          <img
            src={user.imageUrl}
            alt={user.imageAlt}
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
            className="bg-gradient-to-r from-[#3B82F6] to-[#10B981] bg-clip-text text-transparent"
          ></span>
          <span className="animate-blink ml-2 text-[#3B82F6]">|</span>
        </h1>

      </div>


      <div className="flex flex-col sm:flex-row items-center gap-4 mt-12 mb-8 border-amber-300">
        <Link
          to="/contact"
          className="group  relative px-8 py-4 bg-gradient-to-r from-[#3B82F6] to-[#2563EB] text-white font-bold text-lg rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#3B82F6]/50 hover:scale-105 overflow-hidden"
        >
          <span className="relative z-10">Get In Touch</span>
          <div className="absolute p-4 inset-0 bg-gradient-to-r from-[#2563EB] to-[#3B82F6] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </Link>
        
        <Link
          to="/projects"
          className="px-8 py-4 border-2 border-[#3B82F6] text-[#3B82F6] font-bold text-lg rounded-full transition-all duration-300 hover:bg-[#3B82F6]/10 hover:scale-105"
        >
          View Projects
        </Link>
      </div>

      <div className="grid grid-cols-3 gap-8 mt-16 w-full max-w-3xl px-4">
        <div className="text-center">
          <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#3B82F6] to-[#10B981] bg-clip-text text-transparent">1+</h3>
          <p className="text-[#94A3B8] text-sm md:text-base mt-2">Years Experience</p>
        </div>
        <div className="text-center">
          <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#3B82F6] to-[#10B981] bg-clip-text text-transparent">1+</h3>
          <p className="text-[#94A3B8] text-sm md:text-base mt-2">Projects Done</p>
        </div>
        <div className="text-center">
          <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#3B82F6] to-[#10B981] bg-clip-text text-transparent">24/7</h3>
          <p className="text-[#94A3B8] text-sm md:text-base mt-2">Available</p>
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
      `}</style>
    </div>
  );
};

export default Profile;