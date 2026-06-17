import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface SectionWrapperProps {
  children: React.ReactNode;
  id: string;
  className?: string;
}

export default function SectionWrapper({ children, id, className = '' }: SectionWrapperProps) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.05 });

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto ${className}`}
    >
      {children}
    </motion.section>
  );
}
