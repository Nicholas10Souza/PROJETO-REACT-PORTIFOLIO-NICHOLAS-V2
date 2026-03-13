import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stacks from './components/Stacks';
import Projects from './components/Projects';
import About from './components/About';
import Footer from './components/Footer';
import './index.css'; // O arquivo que contém seu tema Nicholas.Dev

function App() {
  return (
    <div className="min-h-screen bg-magnate-bg text-white">
      <Header />
      <main>
        <Hero />
        <Stacks />
        <Projects />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;