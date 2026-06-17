import { motion, useScroll, useSpring } from 'framer-motion';
import { FiArrowUp } from 'react-icons/fi';

export default function BackToTop() {
  const { scrollYProgress } = useScroll();
  const isVisible = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer"
      style={{
        background: 'linear-gradient(135deg, rgba(0,229,255,0.2), rgba(138,43,226,0.2))',
        border: '1px solid rgba(0,229,255,0.3)',
        backdropFilter: 'blur(12px)',
        opacity: isVisible.get() > 0.2 ? 1 : 0,
        pointerEvents: isVisible.get() > 0.2 ? 'auto' : 'none',
      }}
      whileHover={{
        scale: 1.1,
        boxShadow: '0 0 30px rgba(0,229,255,0.4)',
      }}
      whileTap={{ scale: 0.95 }}
    >
      <FiArrowUp className="text-primary text-xl" />
    </motion.button>
  );
}
