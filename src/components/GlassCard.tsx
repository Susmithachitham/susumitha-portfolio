import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
  delay?: number;
}

export default function GlassCard({ children, className = '', glow = true, delay = 0 }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
      whileHover={{
        y: -8,
        scale: 1.02,
        transition: { duration: 0.3 },
      }}
      className={`glass-card rounded-xl p-6 transition-all duration-300 ${glow ? 'hover-glow' : ''} ${className}`}
    >
      {children}
    </motion.div>
  );
}
