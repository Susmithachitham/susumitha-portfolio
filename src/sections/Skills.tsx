import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiChevronRight } from 'react-icons/fi';
import { skillCategories } from '../data/portfolio';
import SectionTitle from '../components/SectionTitle';

const iconMap: Record<string, string> = {
  SiJava: '☕', SiPython: '🐍', SiC: '⚙️', SiHtml5: '🌐', SiCss3: '🎨', SiJavascript: '📜',
  SiOracle: '🗄️', SiMysql: '🐬', SiMongodb: '🍃', SiMariaDb: '🗃️',
  SiSpringboot: '🍃', SiPostman: '📮', SiApi: '🔌',
  SiTensorflow: '🧠', SiNumpy: '🔢', SiPandas: '🐼', SiPlotly: '📊', SiScipy: '📐', SiScikitlearn: '🤖', SiKeras: '🧬',
  SiOpenai: '🤖', SiChainlink: '🔗', SiCodeium: '💠', SiWeightsandbiases: '⚖️', SiPinecone: '🌲', SiLangchain: '⛓️',
  SiTypescript: '📘', SiLeetcode: '💻', SiDatabricks: '🏗️', SiLinux: '🐧', SiCisco: '🌍', SiWebtort: '🕸️',
  SiN8n: '⚡', SiRobotframework: '🤖', SiTelegram: '📱',
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const selectedData = skillCategories.find(c => c.title === selectedCategory);

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionTitle title="Skills & Expertise" subtitle="Technologies I work with" />

      <div className="space-y-8">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <div
              className="glass-card rounded-xl p-6 cursor-pointer group transition-all duration-300"
              onClick={() => setSelectedCategory(category.title)}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg sm:text-xl font-bold text-gradient">{category.title}</h3>
                <FiChevronRight className={`text-primary text-xl transition-transform duration-300 ${category.modalContent ? 'group-hover:translate-x-1' : ''}`} />
              </div>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105"
                    style={{
                      background: 'rgba(0,229,255,0.08)',
                      border: '1px solid rgba(0,229,255,0.15)',
                      color: '#94A3B8',
                    }}
                  >
                    <span className="text-base">{iconMap[skill.icon] || '🔹'}</span>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedCategory && selectedData?.modalContent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            onClick={() => setSelectedCategory(null)}
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative glass-card rounded-2xl p-6 sm:p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto neon-border"
            >
              <button
                onClick={() => setSelectedCategory(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary cursor-pointer hover:bg-primary/20 transition-colors"
              >
                <FiX />
              </button>

              <h3 className="text-2xl font-bold text-gradient mb-6">{selectedData.title}</h3>

              {selectedData.modalContent.map((section, i) => (
                <div key={i} className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">{section.title}</h4>
                  <ul className="space-y-2">
                    {section.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-muted text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
