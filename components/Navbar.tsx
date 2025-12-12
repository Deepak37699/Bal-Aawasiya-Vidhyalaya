import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, GraduationCap } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Academics', path: '/academics' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Student Life', path: '/student-life' },
    { name: 'Facilities', path: '/facilities' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 w-full z-50 bg-white shadow-md">
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2 text-xs md:text-sm">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="flex items-center gap-4 mb-1 md:mb-0">
            <span className="flex items-center gap-1">
              <Phone size={14} /> Call: 981-9814934
            </span>
            <span className="hidden md:inline">|</span>
            <span className="flex items-center gap-1">
              WhatsApp: +977 970-1849133
            </span>
          </div>
          <div className="opacity-90">
            Dhanushadham -3, Dhanusha, Nepal
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-blue-900 text-white p-2 rounded-lg group-hover:bg-blue-800 transition-colors">
              <GraduationCap size={32} />
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl md:text-2xl font-bold text-blue-900 leading-tight">
                Bal Aawasiya
              </h1>
              <span className="text-sm font-medium text-slate-600 tracking-wider">
                Vidhyalaya
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-semibold transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'text-blue-700 border-b-2 border-blue-700'
                    : 'text-slate-600 hover:text-blue-900'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/admissions"
              className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-full transition-all shadow-md hover:shadow-lg"
            >
              Apply Now
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-slate-700 hover:text-blue-900 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 shadow-xl absolute w-full left-0">
          <nav className="flex flex-col p-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`py-3 px-4 rounded-md mb-1 font-medium ${
                  isActive(link.path)
                    ? 'bg-blue-50 text-blue-800'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-blue-900'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/admissions"
              className="mt-4 text-center py-3 bg-blue-600 text-white rounded-md font-bold"
              onClick={() => setIsOpen(false)}
            >
              Apply Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;