import React from 'react';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950 font-inter text-slate-100">
      <Hero />
      <Experience />
      <Skills />
      <Contact />
      <footer className="mx-auto max-w-6xl px-6 py-8 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Million Gossaye Lema • Built with React + Tailwind
      </footer>
    </div>
  );
}

export default App;
