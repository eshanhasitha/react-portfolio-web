import { useState } from "react";
import { Home, User, Briefcase, Mail, FileDown } from "lucide-react";
import { useSriLankaTime } from '../hooks/useSriLankaTime';
import CV from '../assets/CV.pdf'; // Import CV from assets

const NavBar = ({ onOpenAbout, onOpenProjects, onOpenContact }) => {
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
      href: "#profile",
      icon: <Home className="w-6 h-6" />
    },
    { 
      label: "About", 
      href: "#about-page",
      action: onOpenAbout,
      icon: <User className="w-6 h-6" />
    },
    { 
      label: "Projects", 
      href: "#projects-page",
      action: onOpenProjects,
      icon: <Briefcase className="w-6 h-6" />
    },
    { 
      label: "Contact", 
      href: "#contact-page",
      action: onOpenContact,
      icon: <Mail className="w-6 h-6" />
    },
  ];

  const handleNavClick = (event, item) => {
    if (item?.action) {
      event.preventDefault();
      item.action();
    }

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
          <div className={`${navbarColors.bg} ${navbarColors.border} ${navbarColors.backdrop} rounded-full border px-3 py-3 shadow-2xl transition-all duration-500 ease-out hover:border-white/20 md:px-4`}>
            <div className="flex items-center justify-center">
              {/* Navigation Links - Center */}
              <ul className="hidden items-center md:flex">
                {navItems.map((item, index) => (
                  <li key={index} className="flex h-12 items-center">
                    <a
                      href={item.href}
                      onClick={(event) => handleNavClick(event, item)}
                      aria-label={item.label}
                      title={item.label}
                      className="relative flex h-12 w-14 items-center justify-center rounded-full text-[#E2E8F0] transition-all duration-300 ease-out hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/20"
                    >
                      {item.icon}
                    </a>
                    {index < navItems.length - 1 && (
                      <div className="mx-1 h-8 w-px bg-white/10"></div>
                    )}
                  </li>
                ))}
              </ul>

              {/* Divider */}
              <div className="mx-1 hidden h-8 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent md:block"></div>

              {/* Download CV Button - Desktop */}
              <a
                href={CV}
                download="Eshan_Hasitha_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download resume"
                title="Resume"
                className="relative hidden h-12 w-16 flex-shrink-0 items-center justify-center rounded-full border border-[#10B981]/35 bg-[#10B981]/12 text-white transition-all duration-300 ease-out hover:border-[#10B981]/60 hover:bg-[#10B981]/20 focus:outline-none focus:ring-2 focus:ring-[#10B981]/30 md:flex"
              >
                <FileDown className="h-6 w-6" />
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
                  <a
                    href={item.href}
                    onClick={(event) => handleNavClick(event, item)}
                    className="flex items-center gap-3 px-5 py-3.5 text-[#E2E8F0] font-medium text-sm rounded-2xl transition-all duration-300 ease-out hover:bg-gradient-to-r hover:from-[#3B82F6]/20 hover:to-[#10B981]/20 hover:text-white hover:pl-7 hover:shadow-lg active:scale-95"
                  >
                    <span className="transition-transform duration-300 ease-out group-hover:scale-110">
                      {item.icon}
                    </span>
                    <span>{item.label}</span>
                  </a>
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
                  href={CV}
                  download="Eshan_Hasitha_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
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

export default NavBar;
