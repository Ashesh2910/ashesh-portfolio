import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Freelance from './components/Freelance';
import Experience from './components/Experience';
import Contact from './components/Contact'; // Imported Contact
import Footer from './components/Footer';
import StarsCanvas from './components/canvas/Stars';

function App() {
  return (
    <BrowserRouter>
      {/* overflow-x-hidden is critical for mobile to prevent horizontal scrolling from animations */}
      <div className="relative z-0 bg-primary overflow-x-hidden w-full">
        {/* Global Stars Background */}
        <div className="fixed inset-0 z-[-1]">
          <StarsCanvas />
        </div>

        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>

        <About />
        <Experience />
        <Skills />
        <Projects />
        <Freelance /> {/* Added Freelance Section */}
        <Contact /> {/* Added Contact Section */}

        <div className="relative z-0">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
