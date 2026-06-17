import { motion } from 'framer-motion';
import { FiExternalLink, FiAward } from 'react-icons/fi';
import { certifications } from '../data/portfolio';
import SectionTitle from '../components/SectionTitle';

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionTitle title="Certifications" subtitle="My professional certifications" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, i) => (
          <motion.div
            key={`${cert.title}-${cert.issuer}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="glass-card rounded-xl p-6 group hover-glow transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <FiAward className="text-2xl text-primary" />
            </div>

            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">
              {cert.title}
            </h3>

            <p className="text-primary/70 text-sm mb-1">{cert.issuer}</p>
            <p className="text-muted text-xs mb-4">{cert.date}</p>

            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-white transition-colors group/link"
            >
              View Certificate
              <FiExternalLink className="group-hover/link:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
