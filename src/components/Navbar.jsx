import { useState } from "react";
import { Link } from "react-router-dom";
import { Home, User, Briefcase, Mail, FileDown } from "lucide-react";
import { useSriLankaTime } from '../hooks/useSriLankaTime';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { timeTheme } = useSriLankaTime();

  // Time-based navbar styling
  const getNavbarColors = () => {
    switch(timeTheme) {
      case 'dawn': return {
        bg: 'bg-[#2D1B4E]/90',
        border: 'border-[#FF6B6B]/20',
        backdrop: 'backdrop-blur-xl'
      };
      case 'morning': return {
        bg: 'bg-[#1E3A5F]/90',
        border: 'border-[#87CEEB]/20',
        backdrop: 'backdrop-blur-xl'
      };
      case 'afternoon': return {
        bg: 'bg-[#1E293B]/90',
        border: 'border-[#3B82F6]/20',
        backdrop: 'backdrop-blur-xl'
      };
      case 'dusk': return {
        bg: 'bg-[#3D2645]/90',
        border: 'border-[#FF4500]/20',
        backdrop: 'backdrop-blur-xl'
      };
      case 'evening': return {
        bg: 'bg-[#1A1F35]/90',
        border: 'border-[#4B0082]/20',
        backdrop: 'backdrop-blur-xl'
      };
      case 'night':
      default: return {
        bg: 'bg-[#0F172A]/90',
        border: 'border-[#1E3A8A]/20',
        backdrop: 'backdrop-blur-xl'
      };
    }
  };

  const navbarColors = getNavbarColors();

  const navItems = [
    { 
      label: "Home", 
      to: "/",
      icon: <Home className="w-6 h-6" />
    },
    { 
      label: "About", 
      to: "/about",
      icon: <User className="w-6 h-6" />
    },
    { 
      label: "Projects", 
      to: "/projects",
      icon: <Briefcase className="w-6 h-6" />
    },
    { 
      label: "Contact", 
      to: "/contact",
      icon: <Mail className="w-6 h-6" />
    },
  ];

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Backdrop Overlay - Dims the page when menu is open */}
      <div
        className={`md:hidden fixed inset-0 bg-black/50 z-30 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Glass Morphism Floating Navbar */}
      <nav className="fixed top-6 right-6 md:left-1/2 md:-translate-x-1/2 md:right-auto z-50 w-auto md:w-auto">
        <div className="relative">
          {/* Glassmorphism Container */}
          <div className="bg-[#1E293B]/40 rounded-full px-4 md:px-8 py-3 md:py-4 shadow-2xl border border-white/10 hover:border-white/20 transition-all duration-500 ease-out">
            <div className="flex items-center justify-center gap-2">
              {/* Navigation Links - Center */}
              <ul className="hidden md:flex items-center gap-0">
                {navItems.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <Link
                      to={item.to}
                      className="relative flex items-center gap-2 px-4 py-2.5 text-[#E2E8F0] font-medium text-sm tracking-wide transition-all duration-500 ease-out hover:text-white group rounded-full overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center gap-2.5 whitespace-nowrap">
                        <span className="transition-transform duration-500 ease-out group-hover:scale-110">
                          {item.icon}
                        </span>
                        <span className="inline-block max-w-0 overflow-hidden group-hover:max-w-[100px] transition-all duration-500 ease-out opacity-0 group-hover:opacity-100">
                          {item.label}
                        </span>
                      </span>
                      <span className="absolute inset-0 bg-gradient-to-r from-[#3B82F6]/20 to-[#10B981]/20 rounded-full scale-0 group-hover:scale-100 transition-all duration-500 ease-out"></span>
                    </Link>
                    {index < navItems.length - 1 && (
                      <div className="w-px h-8 bg-white/10 mx-1"></div>
                    )}
                  </li>
                ))}
              </ul>

              {/* Divider */}
              <div className="hidden md:block w-px h-8 bg-gradient-to-b from-transparent via-white/20 to-transparent mx-2"></div>

              {/* Download CV Button - Desktop */}
              <a
                href="/CV.pdf"
                download="Eshan_Hasitha_CV.pdf"
                className="hidden md:flex relative items-center gap-2 px-5 py-2.5 text-white font-semibold text-sm tracking-wide transition-all duration-500 ease-out hover:text-white group rounded-full overflow-hidden flex-shrink-0 bg-gradient-to-r from-[#10B981]/10 to-[#059669]/10 border border-[#10B981]/30"
              >
                <span className="relative z-10 flex items-center gap-2.5 whitespace-nowrap">
                  <span className="transition-transform duration-500 ease-out group-hover:scale-110 group-hover:rotate-12">
                    <FileDown className="w-6 h-6" />
                  </span>
                  <span className="inline-block max-w-0 overflow-hidden group-hover:max-w-[100px] transition-all duration-500 ease-out opacity-0 group-hover:opacity-100">
                    Resume
                  </span>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#10B981]/30 to-[#059669]/30 rounded-full scale-0 group-hover:scale-100 transition-all duration-500 ease-out"></span>
              </a>

              {/* Mobile Menu Button - Only visible on mobile */}
              <button
                className="md:hidden flex flex-col gap-1 w-7 h-7 justify-center items-center z-50 relative flex-shrink-0 group"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
                aria-expanded={isOpen}
              >
                <span
                  className={`w-4 h-0.5 bg-white rounded-full transition-all duration-300 ease-in-out ${
                    isOpen ? "rotate-45 translate-y-1.5 w-4" : "w-4 group-hover:w-5"
                  }`}
                ></span>
                <span
                  className={`w-4 h-0.5 bg-white rounded-full transition-all duration-300 ease-in-out ${
                    isOpen ? "opacity-0 scale-0" : "opacity-100 scale-100 group-hover:w-3"
                  }`}
                ></span>
                <span
                  className={`w-4 h-0.5 bg-white rounded-full transition-all duration-300 ease-in-out ${
                    isOpen ? "-rotate-45 -translate-y-1.5 w-4" : "w-4 group-hover:w-5"
                  }`}
                ></span>
              </button>
            </div>
          </div>

          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#3B82F6]/20 via-[#2563EB]/20 to-[#10B981]/20 rounded-full blur-xl -z-10 opacity-50 transition-opacity duration-500 hover:opacity-70"></div>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden fixed top-20 right-6 w-[85vw] max-w-xs z-40 transform transition-all duration-300 ease-in-out ${
          isOpen 
            ? "opacity-100 translate-y-0 scale-100 visible" 
            : "opacity-0 -translate-y-4 scale-95 invisible"
        }`}
        style={{
          transformOrigin: 'top right'
        }}
      >
        <div className="relative">
          {/* Glass Morphism Container - Same as Navbar */}
          <div className="bg-[#1E293B]/80 rounded-3xl shadow-2xl border border-white/10 hover:border-white/20 transition-all duration-300 ease-out overflow-hidden">
            <ul className="p-3 space-y-1">
              {navItems.map((item, index) => (
                <li 
                  key={index}
                  className={`transform transition-all duration-300 ease-out ${
                    isOpen 
                      ? 'translate-x-0 opacity-100' 
                      : 'translate-x-4 opacity-0'
                  }`}
                  style={{
                    transitionDelay: isOpen ? `${index * 50}ms` : '0ms'
                  }}
                >
                  <Link
                    to={item.to}
                    onClick={handleNavClick}
                    className="flex items-center gap-3 px-5 py-3.5 text-[#E2E8F0] font-medium text-sm rounded-2xl transition-all duration-300 ease-out hover:bg-gradient-to-r hover:from-[#3B82F6]/20 hover:to-[#10B981]/20 hover:text-white hover:pl-7 hover:shadow-lg active:scale-95"
                  >
                    <span className="transition-transform duration-300 ease-out group-hover:scale-110">
                      {item.icon}
                    </span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
              <li
                className={`transform transition-all duration-300 ease-out ${
                  isOpen 
                    ? 'translate-x-0 opacity-100' 
                    : 'translate-x-4 opacity-0'
                }`}
                style={{
                  transitionDelay: isOpen ? `${navItems.length * 50}ms` : '0ms'
                }}
              >
                <a
                  href="/CV.pdf"
                  download="Eshan_Hasitha_CV.pdf"
                  onClick={handleNavClick}
                  className="flex items-center gap-3 px-5 py-3.5 text-[#E2E8F0] font-medium text-sm rounded-2xl transition-all duration-300 ease-out hover:bg-gradient-to-r hover:from-[#10B981]/20 hover:to-[#059669]/20 hover:text-white hover:pl-7 hover:shadow-lg active:scale-95"
                >
                  <span className="transition-transform duration-300 ease-out group-hover:scale-110">
                    <FileDown className="w-6 h-6" />
                  </span>
                  <span>Resume</span>
                </a>
              </li>
            </ul>
          </div>
          {/* Glow Effect for Mobile Menu */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#3B82F6]/20 via-[#2563EB]/20 to-[#10B981]/20 rounded-3xl blur-xl -z-10 opacity-60 transition-opacity duration-300"></div>
        </div>
      </div>
    </>
  );
};

export default NavBar