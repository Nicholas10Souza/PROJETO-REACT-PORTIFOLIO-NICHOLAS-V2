import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Globe, Cpu, Zap, Box, Palette } from 'lucide-react'; 

const stacks = [
  { name: "React", icon: Box, level: "Frontend Framework" },
  { name: "Tailwind v4", icon: Palette, level: "Modern Styling" },
  { name: "JavaScript", icon: Code2, level: "ES6+ Logic" },
  { name: "Vite 8", icon: Zap, level: "Fast Build Tool" },
  { name: "HTML5/CSS3", icon: Globe, level: "Structure & Style" },
  { name: "Clean Code", icon: Cpu, level: "Best Practices" },
];

const Stacks = () => {
  return (
    <section id="stacks" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-magnate-gold text-sm font-bold tracking-[0.4em] uppercase mb-2"
          >
            Tech Stack
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-white text-3xl font-bold tracking-tighter"
          >
            Ferramentas de <span className="text-magnate-gold">Front - End</span>
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stacks.map((stack, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group relative p-8 bg-white/5 border border-white/10 overflow-hidden transition-all hover:border-magnate-gold/40"
            >
              {/* Brilho de fundo no Hover */}
              <div className="absolute inset-0 bg-gold-gradient opacity-0 group-hover:opacity-10 transition-opacity" />
              
              <div className="relative z-10">
                <div className="text-magnate-gold mb-4 group-hover:scale-110 transition-transform duration-300">
                  {/* Renderização direta do ícone como um componente */}
                  <stack.icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{stack.name}</h3>
                <p className="text-magnate-muted text-xs uppercase tracking-widest font-medium">
                  {stack.level}
                </p>
              </div>

              {/* Borda lateral dourada animada */}
              <div className="absolute left-0 top-0 h-full w-[2px] bg-magnate-gold scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stacks;
              