import  { useState } from "react";
import { Link } from "react-router-dom";

const user = {
  name: "Eshan Hasitha",
  imagePath: "https://res.cloudinary.com/dpztt97x8/image/upload/v1760930434/logo_ozrvet.png",
  imageSize: 60,
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Projects", to: "/projects" },
    { label: "Resume", to: "/resume" },
    { label: "Contact", to: "/contact" },
  ];

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 h-20  content-center bg-[#161513] backdrop-blur-sm shadow-lg z-5">
      <div className="max-w-8xl mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <Link
            to="/"
            className="flex items-center gap-3 group transition-transform duration-300 hover:scale-105"
          >
            <img
              src={user.imagePath}
              alt={`${user.name} logo`}
              className="rounded-full group-hover:brightness-200 transition-all duration-300 shadow-lg"
              style={{ width: user.imageSize, height: user.imageSize }}
            />
            <span className="text-white font-bold text-xl hidden sm:block">
              {user.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.to}
                  className="relative px-4 py-2 text-gray-300  font-bold text-2xl tracking-wide transition-all duration-300 hover:text-white group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-purple-600 transition-all duration-300 group-hover:w-4/5 rounded-full"></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* GitHub Button - Desktop */}
          <div className="hidden md:block">
            <a
              href="https://github.com/eshanhasitha"
              target="_blank"
              rel="noreferrer"
              className="relative flex items-center gap-2 px-5 py-2.5 bg-gray-800 text-white font-semibold text-sm rounded-full overflow-hidden transition-all duration-300 hover:bg-gray-700 hover:scale-105 group"
            >
              <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-[-2px] rounded-full"></div>
              </div>
              <img
                src="https://skillicons.dev/icons?i=github"
                alt="GitHub"
                className="w-5 h-5"
              />
              <span>GitHub</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col gap-1.5 w-8 h-8 justify-center items-center z-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-16 left-0 right-0 bg-gray-900/98 backdrop-blur-md border-t border-gray-800 transition-all duration-300 ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <ul className="px-6 py-4 space-y-1">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.to}
                onClick={handleNavClick}
                className="block px-4 py-3 text-gray-300 font-medium text-base rounded-lg transition-all duration-200 hover:bg-gray-800 hover:text-white hover:pl-6"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="pt-4 border-t border-gray-800">
            <a
              href="https://github.com/eshanhasitha"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-3 bg-gray-800 text-white font-semibold text-base rounded-lg transition-all duration-200 hover:bg-gray-700"
            >
              <img
                src="https://skillicons.dev/icons?i=github"
                alt="GitHub"
                className="w-5 h-5"
              />
              <span>View GitHub</span>
            </a>
          </li>
        </ul>
      </div>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
        .bg-gradient-conic {
          background: conic-gradient(from 0deg, #7c3aed, #ec4899, #f59e0b, #7c3aed);
          filter: blur(8px);
        }
      `}</style>
    </nav>
  );
};

export default NavBar;