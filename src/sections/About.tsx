import { motion } from 'framer-motion';
import { FiBook, FiTarget, FiCpu, FiTool } from 'react-icons/fi';
import SectionTitle from '../components/SectionTitle';
import GlassCard from '../components/GlassCard';

const infoCards = [
  { icon: FiBook, title: 'Education', value: 'Third Year BE\nComputer Science Engineering' },
  { icon: FiTarget, title: 'Interests', value: 'Programming, Development, Learning' },
  { icon: FiCpu, title: 'Focus', value: 'AI/ML, Full Stack Development, GenAI' },
  { icon: FiTool, title: 'Tools', value: 'n8n Automation, APIs, Spring Boot' },
];

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionTitle title="About Me" subtitle="Get to know more about me" />

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="relative group">
            <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-primary/30 to-secondary/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div
              className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden neon-border"
              style={{
                background: 'linear-gradient(135deg, rgba(0,229,255,0.1), rgba(138,43,226,0.1))',
              }}
            >
              <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 neon-glow">
                  <span className="text-3xl font-bold text-white">SC</span>
                </div>
                <h3 className="text-xl font-bold text-gradient">Susmitha C</h3>
                <p className="text-muted text-sm mt-2">Aspiring Developer</p>
                <div className="flex gap-2 mt-4">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-2 h-2 rounded-full"
                      style={{ background: i === 2 ? '#00E5FF' : i === 1 ? '#8A2BE2' : '#00BFFF' }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-muted text-base sm:text-lg leading-relaxed mb-8">
            Hello! I'm <span className="text-white font-semibold">Susmitha C</span>, a Third Year 
            Computer Science Engineering student with a strong passion for software development, 
            artificial intelligence, and emerging technologies.
          </p>
          <p className="text-muted text-base sm:text-lg leading-relaxed mb-8">
            I enjoy solving real-world problems through code and continuously learning modern 
            technologies. My interests include Full Stack Development, AI/ML, Deep Learning, 
            Generative AI, Agentic AI, and workflow automation.
          </p>
          <p className="text-muted text-base sm:text-lg leading-relaxed mb-8">
            I am currently exploring Spring Boot, APIs, Machine Learning frameworks, and 
            intelligent systems powered by LLMs and vector databases.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {infoCards.map((card, i) => (
              <GlassCard key={card.title} delay={i * 0.1} className="text-center p-4">
                <card.icon className="text-2xl text-primary mx-auto mb-2" />
                <h4 className="text-sm font-semibold text-white mb-1">{card.title}</h4>
                <p className="text-xs text-muted whitespace-pre-line">{card.value}</p>
              </GlassCard>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
