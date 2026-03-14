import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Projetos', href: '#projetos' },
    { name: 'Quem Sou', href: '#sobre' }, // Verifique se sua seção Sobre tem id="sobre"
    { name: 'Contato', href: '#contato' },
  ];

  const toggleMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
      <nav className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        
        {/* Logo Nicholas.Dev Corrigida */}
        <a href="#home" className="text-2xl font-bold tracking-tighter text-white hover:opacity-80 transition-opacity">
          Nicholas<span className="text-magnate-gold">.Dev</span>
        </a>

        {/* Desktop Menu - Mantendo o visual original */}
        <div className="hidden md:flex items-center gap-10">
          {menuLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-gray-300 hover:text-magnate-gold transition-colors duration-300 text-[11px] uppercase tracking-[0.2em] font-bold"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Botão Hambúrguer */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white p-2">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menu Mobile Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-[73px] left-0 w-full bg-black border-b border-white/10 flex flex-col items-center py-10 z-40 md:hidden"
            >
              {menuLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={toggleMenu}
                  className="text-white hover:text-magnate-gold text-xl font-bold py-4 uppercase tracking-widest"
                >
                  {link.name}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;