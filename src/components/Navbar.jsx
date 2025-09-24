import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import resumePDF from '../assets/Amara_Manoj_Resume.pdf';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['About', 'Skills', 'Experience', 'Projects', 'Contact'];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-navy/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-accent font-mono text-2xl font-bold">AM</div>
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.toLowerCase()}
              smooth={true}
              duration={500}
              className="text-lightest-slate hover:text-accent cursor-pointer transition-colors duration-300"
            >
              {link}
            </Link>
          ))}
          <a
            href={resumePDF}
            target="_blank"
            rel="noopener noreferrer"
            // CHANGE: Added the 'download' attribute to force a download
            download="Amara_Manoj_Resume.pdf"
            className="border border-accent text-accent px-4 py-2 rounded hover:bg-accent/10 transition-colors duration-300"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;