import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Linkedin, Github, MessageCircle } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contato" className="py-16 px-6 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        
        {/* Chamada para Ação (CTA) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-6 tracking-tighter">
            Vamos transformar sua ideia em <span className="text-magnate-gold">realidade digital?</span>
          </h2>
          
          <a 
  href="https://api.whatsapp.com/send?phone=5511963126954" 
  target="_blank" 
  rel="noopener noreferrer" 
  aria-label="WhatsApp" 
  title="WhatsApp"
  className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-[0_10px_20px_rgba(37,211,102,0.2)]"
>
  <MessageCircle size={20} fill="white" />
  MEU WHATSAPP
</a>
        </motion.div>

        {/* Redes Sociais */}
        <div className="flex gap-8 mb-10">
          {[
            { icon: <Linkedin size={22} />, href: "https://www.linkedin.com/in/nicholas10souza/", label: "LinkedIn" },
            { icon: <Github size={22} />, href: "https://github.com/nicholas10souza", label: "Github" },
           {/* { icon: <Instagram size={22} />, href: "https://www.instagram.com/nicholas_souzadev/", label: "Instagram" }  */}
          ].map((social, index) => (
            <a 
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-magnate-gold transition-colors duration-300"
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Copyright & Branding */}
        <div className="border-t border-white/5 w-full pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs tracking-widest uppercase">
            © {currentYear} <span className="text-white font-medium">Nicholas.Dev</span> — Todos os direitos reservados.
          </p>
          <p className="text-gray-600 text-[10px] tracking-[0.2em] uppercase">
            Desenvolvido com <span className="text-magnate-gold">React & Framer Motion</span>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;