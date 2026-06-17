import { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import GitHub from './sections/GitHub';
import Certifications from './sections/Certifications';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import ParticleBackground from './components/ParticleBackground';
import CustomCursor from './components/CustomCursor';
import ScrollProgressBar from './components/ScrollProgressBar';
import BackToTop from './components/BackToTop';
import FloatingBlobs from './components/FloatingBlobs';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <ParticleBackground />
      <FloatingBlobs />
      <CustomCursor />
      <ScrollProgressBar />
      <BackToTop />

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <div className="section-divider" />
        <About />
        <div className="section-divider" />
        <Skills />
        <div className="section-divider" />
        <Projects />
        <div className="section-divider" />
        <GitHub />
        <div className="section-divider" />
        <Certifications />
        <div className="section-divider" />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
