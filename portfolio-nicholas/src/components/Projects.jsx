import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Irmãos Encanadores",
    category: "Landing Page • JS",
    image: new URL('../assets/mario.png', import.meta.url).href,
    description: "Site impactante para Mario & Luigi com vídeo de fundo e formulário funcional.",
    link: "https://nicholas10souza.github.io/PROJETO-MARIO-ENCANADOR/"
  },
  {
    title: "Site Transportadora",
    category: "Logística • Institucional",
    image: new URL('../assets/transportadora.png', import.meta.url).href,
    description: "Foco em logística internacional com design responsivo e moderno.",
    link: "https://nicholas10souza.github.io/PROJETO-TRANSPORTADORA/"
  },
  {
    title: "E-commerce Moderno",
    category: "E-commerce • UI/UX",
    image: new URL('../assets/E-commerce.png', import.meta.url).href,
    description: "Plataforma de vendas completa com foco em UI/UX e catálogo de produtos.",
    link: "https://nicholas10souza.github.io/PROJETO-ECOMMERCE/"
  },
  {
    title: "NS Financeira",
    category: "Tailwind • Landing Page",
    image: new URL('../assets/site-desktop-Note.png', import.meta.url).href,
    description: "Desenvolvido com Tailwind CSS, focado em produtos do setor financeiro.",
    link: "https://nicholas10souza.github.io/PROJETO-FINANCEIRA/"
  },
  {
    title: "Portfólio Nicholas v1",
    category: "Legacy • Portfólio",
    image: new URL('../assets/site-desktop-portfolio.png', import.meta.url).href,
    description: "Minha primeira vitrine profissional, construída com HTML, CSS e JS puro.",
    link: "https://nicholas10souza.github.io/PROJETO-PORTFOLIO/"
  }
];

const Projects = () => {
  return (
    <section id="projetos" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-magnate-gold text-sm font-bold tracking-[0.4em] uppercase mb-2"
          >
            Trabalhos Recentes
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-white text-3xl font-bold tracking-tighter"
          >
            Projetos <span className="text-magnate-gold">Selecionados</span>
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-white/5 border border-white/10 overflow-hidden hover:border-magnate-gold/40 transition-all duration-500 rounded-2xl cursor-pointer"
            >
              {/* Container da Imagem */}
              <div className="relative aspect-video overflow-hidden">
                {/* Overlay de cor: Mais escuro por padrão, clareia no toque/hover */}
                <div className="absolute inset-0 bg-black/60 group-hover:bg-transparent group-active:bg-transparent transition-colors duration-500 z-10" />
                
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-active:grayscale-0 group-hover:scale-110 group-active:scale-110 transition-all duration-700"
                />
              </div>

              {/* Conteúdo do Card */}
              <div className="p-6 md:p-8">
                <span className="text-magnate-gold text-[10px] uppercase tracking-widest font-bold">
                  {project.category}
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-white mt-2 mb-4 group-hover:text-magnate-gold transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed line-clamp-2">
                  {project.description}
                </p>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white text-xs font-bold hover:gap-4 transition-all"
                >
                  ACESSAR PROJETO <ExternalLink size={14} className="text-magnate-gold" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;