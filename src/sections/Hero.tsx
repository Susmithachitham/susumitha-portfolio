import { motion } from 'framer-motion';
import { FiArrowRight, FiDownload, FiMail } from 'react-icons/fi';
import { useMousePosition } from '../hooks/useMousePosition';
import { useTypingEffect } from '../hooks/useTypingEffect';
import MagneticButton from '../components/MagneticButton';

export default function Hero() {
  const mouse = useMousePosition();
  const { displayText } = useTypingEffect('Aspiring Software Developer | AI/ML Enthusiast', 40, 1000);

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-secondary/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-6"
              style={{
                background: 'linear-gradient(135deg, rgba(0,229,255,0.1), rgba(138,43,226,0.1))',
                border: '1px solid rgba(0,229,255,0.2)',
                color: '#00E5FF',
              }}
            >
              <span className="inline-block w-2 h-2 rounded-full bg-primary mr-2 animate-pulse" />
              WELCOME TO MY PORTFOLIO
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 leading-tight"
            >
              Hi, I'm{' '}
              <span className="text-gradient">Susmitha C</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-lg sm:text-xl text-primary/80 font-medium mb-2 h-8"
            >
              {displayText}
              <span className="animate-pulse">|</span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-lg text-primary/60 font-medium mb-6"
            >
              Full Stack Enthusiast
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-muted text-base sm:text-lg max-w-xl mb-8 leading-relaxed mx-auto lg:mx-0"
            >
              Third Year Computer Science Engineering student passionate about software development, 
              artificial intelligence, machine learning, and building impactful applications. 
              Constantly exploring emerging technologies including GenAI, Agentic AI, automation, 
              and full stack development.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <MagneticButton
                onClick={() => handleScroll('projects')}
                className="bg-gradient-to-r from-primary to-secondary text-white font-semibold shadow-lg shadow-primary/25"
              >
                View Projects <FiArrowRight />
              </MagneticButton>

              <MagneticButton
                onClick={() => handleScroll('contact')}
                className="border border-primary/40 text-primary hover:bg-primary/10"
              >
                <FiMail /> Contact Me
              </MagneticButton>

              <MagneticButton
                href="/resume.pdf"
                className="border border-secondary/40 text-secondary hover:bg-secondary/10"
              >
                <FiDownload /> Resume
              </MagneticButton>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center lg:justify-end relative"
          >
            <div className="relative">
              <motion.div
                className="absolute -inset-8 rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg, #00E5FF, #8A2BE2, #00BFFF, #00E5FF)',
                  mask: 'radial-gradient(circle, transparent 55%, black 56%)',
                  WebkitMask: 'radial-gradient(circle, transparent 55%, black 56%)',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              />

              <motion.div
                className="absolute -inset-4 rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(0,229,255,0.15), transparent 70%)',
                  filter: 'blur(20px)',
                }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              />

              <motion.div
                className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden relative"
                style={{
                  border: '2px solid rgba(0,229,255,0.3)',
                  boxShadow: '0 0 40px rgba(0,229,255,0.2), 0 0 80px rgba(138,43,226,0.1), inset 0 0 40px rgba(0,229,255,0.05)',
                  x: (mouse.x - window.innerWidth / 2) * 0.02,
                  y: (mouse.y - window.innerHeight / 2) * 0.02,
                }}
              >
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <span className="text-6xl sm:text-7xl lg:text-8xl font-bold text-gradient">
                    SC
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-1.5"
        >
          <motion.div className="w-1.5 h-3 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
