import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Stacks', href: '#stacks' },
    { name: 'Projetos', href: '#projetos' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-md border-b border-magnate-gold/20 py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo Nicholas.Dev */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <div className="w-8 h-8 border-2 border-magnate-gold flex items-center justify-center font-bold text-white">
            N
          </div>
          <span className="text-white font-bold tracking-tighter text-lg hidden sm:inline">
            Nicholas<span className="text-magnate-gold">.Dev</span>
          </span>
        </motion.div>

        {/* Links de Navegação */}
        <nav className="flex items-center gap-6 md:gap-10">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-[10px] uppercase tracking-[0.2em] text-white/60 hover:text-magnate-gold transition-colors font-medium"
            >
              {link.name}
            </motion.a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;