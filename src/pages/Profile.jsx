import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const user = {
  name: 'Eshan',
  imageUrl: 'https://avatars.githubusercontent.com/u/181459091?s=400&u=6ba444a46d0ac4751acd8c50ada2155a3fb7149d&v=4',
  imageAlt: 'Eshan',
  size: 200,
};

const Profile = () => {
  const typedTextRef = useRef(null);

  useEffect(() => {
    const strings = [
      `I'm ${user.name},`,
      "Currently following IT degree",
      "I've been interest in Full-Stack Development",
      "I love coding and learning new technologies",
      "Welcome to my portfolio!"
    ];

    let currentStringIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let typingSpeed = 60;

    const type = () => {
      const currentString = strings[currentStringIndex];
      
      if (isDeleting) {
        typedTextRef.current.textContent = currentString.substring(0, currentCharIndex - 1);
        currentCharIndex--;
        typingSpeed = 40;
      } else {
        typedTextRef.current.textContent = currentString.substring(0, currentCharIndex + 1);
        currentCharIndex++;
        typingSpeed = 60;
      }

      if (!isDeleting && currentCharIndex === currentString.length) {
        isDeleting = true;
        typingSpeed = 1000;
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
    <div className="flex flex-col items-center gap-5 py-5" id="profile">
      {/* Profile Image with Gradient Border */}
      <div className="mt-12 lg:mt-32 p-0.5 bg-gradient-to-r from-[#DA7C25] to-[#B923E1] rounded-full">
        <img
          src={user.imageUrl}
          alt={user.imageAlt}
          className="rounded-full w-40 h-40 lg:w-52 lg:h-52 object-cover"
          style={{
            width: user.size,
            height: user.size,
          }}
        />
      </div>

      {/* Typing Text */}
      <h1 className="text-center w-11/12 lg:w-3/4 text-3xl lg:text-7xl font-bold text-white min-h-[120px] lg:min-h-[200px] flex items-center justify-center">
        <span 
          ref={typedTextRef}
          className="bg-gradient-to-r from-[#DA7C25] to-[#B923E1] bg-clip-text text-transparent"
        ></span>
        <span className="animate-blink ml-1">|</span>
      </h1>

      {/* Call to Action Button */}
      <div className="flex items-center gap-4 text-lg lg:text-2xl font-bold mb-12">
        <Link
          to="/contact"
          className="px-8 py-4 lg:px-10 lg:py-5 rounded-full bg-gradient-to-r from-[#DA7C25] to-[#B923E1] text-white font-bold text-xl lg:text-2xl transition-all duration-500 hover:scale-105 hover:text-black hover:shadow-lg  cursor-pointer"
        >
          Connect with me!
        </Link>
      </div>

      {/* Custom CSS for cursor animation */}
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