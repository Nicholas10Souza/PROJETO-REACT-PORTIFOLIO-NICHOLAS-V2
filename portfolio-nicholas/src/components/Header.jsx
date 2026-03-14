import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Stacks', href: '#stacks' },
    { name: 'Projetos', href: '#projetos' },
    { name: 'Quem Sou', href: '#quem-sou' },
    { name: 'Contato', href: '#contato' },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    setIsOpen(false); 

    setTimeout(() => {
      // Se clicar em Home, ele rola para o topo absoluto da página
      if (href === '#home') {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
        return;
      }

      // Para os outros links, busca o ID da seção
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);
      
      if (element) {
        const offset = 80; 
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 300);
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-md border-b border-magnate-gold/20 py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo Nicholas.Dev (Visual da Imagem) */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <div className="w-8 h-8 border-2 border-magnate-gold flex items-center justify-center font-bold text-white shrink-0">
            N
          </div>
          <span className="text-white font-bold tracking-tighter text-lg hidden sm:inline">
            Nicholas<span className="text-magnate-gold">.Dev</span>
          </span>
        </motion.div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-[10px] uppercase tracking-[0.2em] text-white/60 hover:text-magnate-gold transition-colors font-medium cursor-pointer"
            >
              {link.name}
            </motion.a>
          ))}
        </nav>

        {/* Botão Hambúrguer Mobile */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white p-2">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Menu Mobile Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="absolute top-full left-0 w-full bg-black/95 border-b border-magnate-gold/20 flex flex-col items-center py-8 z-40 md:hidden overflow-hidden"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-white/80 hover:text-magnate-gold text-sm py-4 uppercase tracking-[0.2em] font-bold w-full text-center cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;