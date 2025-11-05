import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // Smooth scroll to projects
  const handleProjectsClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
      }, 400);
    } else {
      document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-lg px-4 py-3 sm:py-4 shadow-lg">
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent"
        >
          Saloni<span className="text-red-500">Flix</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 text-lg font-medium">
          <Link to="/" className="hover:text-red-400 transition">
            Home
          </Link>
          <a href="#projects" onClick={handleProjectsClick} className="hover:text-red-400 transition">
            Projects
          </a>
          <Link to="/about" className="hover:text-red-400 transition">
            About
          </Link>
          <Link to="/contact" className="hover:text-red-400 transition">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden p-2 text-gray-300" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-3 bg-black/90 rounded-xl py-4 space-y-3 text-center"
          >
            <Link onClick={() => setIsOpen(false)} to="/" className="block hover:text-red-400">
              Home
            </Link>
            <a
              href="#projects"
              onClick={(e) => {
                handleProjectsClick(e);
                setIsOpen(false);
              }}
              className="block hover:text-red-400"
            >
              Projects
            </a>
            <Link onClick={() => setIsOpen(false)} to="/about" className="block hover:text-red-400">
              About
            </Link>
            <Link onClick={() => setIsOpen(false)} to="/contact" className="block hover:text-red-400">
              Contact
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
