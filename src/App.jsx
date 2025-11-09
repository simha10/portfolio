import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GoogleGeminiEffectDemo from './components/ui/google-gemini-effect-demo';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 relative">
      <div className="fixed inset-0 z-0">
        <GoogleGeminiEffectDemo />
      </div>
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;