import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Projetos', href: '#projetos' },
    { name: 'Quem Sou', href: '#sobre' },
    { name: 'Contato', href: '#contato' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-white/5">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <a href="#home" className="text-2xl font-bold tracking-tighter text-white">
          Nicholas<span className="text-magnate-gold">.Dev</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {menuLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-gray-300 hover:text-magnate-gold transition-colors duration-300 text-sm uppercase tracking-widest font-medium">
              {link.name}
            </a>
          ))}
        </div>

        {/* Botão Hambúrguer (Só aparece no Mobile) */}
        <button onClick={toggleMenu} className="md:hidden text-gray-300 hover:text-white p-2">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menu Mobile Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: '100vh' }}
              exit={{ opacity: 0, height: 0 }}
              className="absolute top-full left-0 w-full bg-black/95 flex flex-col items-center pt-10 z-40 md:hidden overflow-hidden"
            >
              {menuLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={toggleMenu}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-gray-100 hover:text-magnate-gold text-2xl font-bold py-6 uppercase tracking-wider"
                >
                  {link.name}
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;