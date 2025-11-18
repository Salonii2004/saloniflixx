import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* 🔴 Logo */}
        <Link to="/" className="text-2xl font-bold text-white">
          <span className="text-red-500">Saloni</span>Flix
        </Link>

        {/* 🖥️ Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-lg">
          <Link to="/" className="hover:text-red-400 transition">
            Home
          </Link>

          <a href="#projects" className="hover:text-red-400 transition">
            Projects
          </a>

          {/* ⭐ NEW: Research Page Link */}
          <Link to="/research" className="hover:text-red-400 transition">
            Research
          </Link>

          <Link to="/about" className="hover:text-red-400 transition">
            About
          </Link>

          <Link to="/contact" className="hover:text-red-400 transition">
            Contact
          </Link>

          {/* 📄 Resume Button (Desktop) */}
          <a
            href="https://drive.google.com/file/d/1RmRKJLOcHFCk6KaO32rJ3Hf44l1yQTUW/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white px-5 py-2 rounded-full font-semibold transition-all shadow-md"
          >
            Resume
          </a>
        </nav>

        {/* 📱 Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white hover:text-red-400 transition"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* 📱 Mobile Menu Drawer */}
      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-xl text-center py-6 space-y-6">

          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="block text-lg hover:text-red-400 transition"
          >
            Home
          </Link>

          <a
            href="#projects"
            onClick={() => setIsOpen(false)}
            className="block text-lg hover:text-red-400 transition"
          >
            Projects
          </a>

          {/* ⭐ NEW: Research Page Link (Mobile) */}
          <Link
            to="/research"
            onClick={() => setIsOpen(false)}
            className="block text-lg hover:text-red-400 transition"
          >
            Research
          </Link>

          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="block text-lg hover:text-red-400 transition"
          >
            About
          </Link>

          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block text-lg hover:text-red-400 transition"
          >
            Contact
          </Link>

          {/* 📄 Resume Button (Mobile) */}
          <a
            href="https://drive.google.com/file/d/1RmRKJLOcHFCk6KaO32rJ3Hf44l1yQTUW/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-600 hover:bg-red-500 text-white px-6 py-3 rounded-full font-semibold transition-all shadow-md"
            onClick={() => setIsOpen(false)}
          >
            Resume
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
