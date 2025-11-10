import { useState } from "react";
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
    { label: "Contact", to: "/contact" },
  ];

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 h-20 content-center bg-[#1E293B]/80 backdrop-blur-md shadow-lg z-50 border-b border-[#475569]/30">
      <div className="max-w-full px-3 mx-auto py-3">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <Link
            to="/"
            className="flex items-center gap-3 group transition-all duration-300 hover:scale-105"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#3B82F6] to-[#10B981] rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img
                src={user.imagePath}
                alt={`${user.name} logo`}
                className="relative rounded-full border-none border-[#3B82F6] transition-all duration-300"
                style={{ width: user.imageSize, height: user.imageSize }}
              />
            </div>
            <span className="text-[#F1F5F9] font-bold text-xl hidden sm:block tracking-wide">
              {user.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-2">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.to}
                  className="relative px-5 py-2 text-[#94A3B8] font-semibold text-2xl tracking-wide transition-all duration-300 hover:text-[#3B82F6] group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-[#3B82F6] to-[#10B981] transition-all duration-300 group-hover:w-4/5 rounded-full"></span>
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
              className="relative flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-[#3B82F6] to-[#2563EB] text-white font-semibold text-sm rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#3B82F6]/50 hover:scale-105 group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#2563EB] to-[#3B82F6] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img
                src="https://skillicons.dev/icons?i=github"
                alt="GitHub"
                className="relative w-5 h-5 z-10"
              />
              <span className="relative z-10">GitHub</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col gap-1.5 w-8 h-8 justify-center items-center z-50 relative"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 bg-[#3B82F6] transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-[#3B82F6] transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-[#3B82F6] transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-20 left-0 right-0 bg-[#1E293B]/98 backdrop-blur-md border-b border-[#475569]/30 transition-all duration-300 ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <ul className="px-6 py-4 space-y-2">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.to}
                onClick={handleNavClick}
                className="block px-4 py-3 text-[#94A3B8] font-medium text-base rounded-lg transition-all duration-200 hover:bg-[#334155] hover:text-[#3B82F6] hover:pl-6"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="pt-4 border-t border-[#475569]/30">
            <a
              href="https://github.com/eshanhasitha"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-[#3B82F6] to-[#2563EB] text-white font-semibold text-base rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-[#3B82F6]/50"
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
    </nav>
  );
};

export default NavBar