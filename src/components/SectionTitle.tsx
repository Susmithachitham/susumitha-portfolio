import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
        <span className="text-gradient">{title}</span>
      </h2>
      {subtitle && (
        <p className="text-muted text-lg max-w-2xl mx-auto">{subtitle}</p>
      )}
      <div className="w-24 h-1 mx-auto mt-6 rounded-full bg-gradient-to-r from-primary to-secondary" />
    </motion.div>
  );
}
