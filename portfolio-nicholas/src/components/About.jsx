import React from 'react';
import { motion } from 'framer-motion';
import nicholasAboutImg from '../assets/nicholas_terno_smoking.png'; // Ou use uma foto mais formal se tiver

const About = () => {
  return (
    <section id="quem-sou" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Imagem com moldura artística */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden border border-magnate-gold/20 shadow-2xl">
              <img 
                src={nicholasAboutImg} 
                alt="Nicholas Souza" 
                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700 object-cover"
              />
            </div>
            {/* Elemento decorativo atrás */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-magnate-gold/10 rounded-2xl -z-0" />
          </motion.div>

          {/* Texto Estratégico */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-magnate-gold text-sm font-bold tracking-[0.4em] uppercase mb-4">
              Trajetória & Visão
            </h2>
            <h3 className="text-white text-4xl md:text-5xl font-bold mb-8 tracking-tighter">
              Quem <span className="text-magnate-gold">Sou</span>
            </h3>
            
            <div className="space-y-6 text-gray-400 leading-relaxed font-light">
              <p>
  Sou um desenvolvedor apaixonado por tecnologia, com uma base sólida construída em 
  <span className="text-white font-medium"> 21 anos de experiência em logística e produção</span>. 
  Essa bagagem me trouxe uma visão analítica para a área de Tecnologia, com foco total em eficiência no <strong>Front-End</strong>.
</p>

<p>
  Atualmente, uno essa maturidade profissional com o domínio do desenvolvimento de Landing Pages. Como aluno do 
  <span className="text-magnate-gold font-bold"> DevClub</span>, venho me especializando em 
  <span className="text-magnate-gold font-bold"> Front-End e UI/UX</span>. Meu objetivo é criar soluções que não sejam apenas 
  bonitas, mas que transformem Landing Pages em experiências visuais incríveis.
</p>

<p>
  Minhas principais características são a disciplina, a proatividade e a facilidade de aprendizado, 
  sempre buscando aplicar o amor ao visual, desempenho e usabilidade, garantindo uma interação inesquecível para o cliente.
</p>
            </div>

            {/* Badges */}
           <div className="flex flex-wrap md:flex-nowrap gap-x-4 gap-y-3 mt-6 justify-start">
  {['Disciplina', 'Foco em Conversão', 'Front-End & UI/UX', 'Interfaces Criativas'].map((item) => (
    <span 
      key={item} 
      className="px-4 py-1.5 bg-white/5 border border-white/10 text-magnate-gold text-[10px] uppercase tracking-widest rounded-full font-bold shadow-[0_0_15px_rgba(225,193,104,0.1)] whitespace-nowrap"
    >
      {item}
    </span>
  ))}
</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;