import React from 'react';
import { motion } from 'framer-motion';
import htmlIcon from '../assets/icons8-html-96.png';
import cssIcon from '../assets/icons8-css-96.png';
import jsIcon from '../assets/icons8-js-96.png';
import reactIcon from '../assets/icons8-react-96.png';
import githubIcon from '../assets/icons8-github-96.png';
import vscodeIcon from '../assets/icons8-visual-studio-code-2019-96.png';
import nicholasImg from '../assets/Nicholas_terno_smoking_borboleta2.png';

const Hero = () => {
  const techs = [
    { name: 'HTML', src: htmlIcon },
    { name: 'CSS', src: cssIcon },
    { name: 'JS', src: jsIcon },
    { name: 'React', src: reactIcon },
    { name: 'Github', src: githubIcon },
    { name: 'VScode', src: vscodeIcon },
  ];

  return (
    <section className="pt-32 pb-16 px-6 bg-black text-center min-h-[70vh] flex flex-col justify-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="mb-8"
      >
        {/* Foto com moldura magnata */}
        <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full border-2 border-magnate-gold p-1 mb-6 shadow-[0_0_20px_rgba(225,193,104,0.2)]">
          <img 
            src={nicholasImg} 
            alt="Nicholas Souza" 
            className="w-full h-full rounded-full object-cover"
          />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tighter text-white">
          Nicholas <span className="text-magnate-gold">Souza</span>
        </h1>
        
        <p className="text-magnate-gold font-medium tracking-[0.3em] uppercase text-xs md:text-sm mb-10">
          Programador • Desenvolvedor Web
        </p>

        {/* Stacks minimalistas abaixo do nome */}
        <div className="flex flex-wrap justify-center gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {techs.map((tech) => (
            <img key={tech.name} src={tech.src} alt={tech.name} className="w-8 h-8 md:w-9 md:h-9 hover:scale-110 transition-transform" />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;