import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand & Description */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Bal Aawasiya Vidhyalaya</h2>
            <p className="text-sm leading-relaxed mb-6 text-slate-400">
              Empowering Minds, Shaping Futures in Dhanusha. Providing high-quality education
              in a safe, caring, and stimulating environment.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-blue-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="mailto:info@balaawasiya.edu.np" className="p-2 bg-slate-800 rounded-full hover:bg-blue-600 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="/academics" className="hover:text-blue-400 transition-colors">Academics</Link></li>
              <li><Link to="/admissions" className="hover:text-blue-400 transition-colors">Admissions</Link></li>
              <li><Link to="/facilities" className="hover:text-blue-400 transition-colors">Facilities</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Information</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-blue-500 mt-0.5" />
                <span>Dhanushadham -3, Dhanusha, Nepal</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-blue-500" />
                <span>981-9814934 | +977 970-1849133</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-xs text-slate-500">
          <p>© 2025 Bal Aawasiya Vidhyalaya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;