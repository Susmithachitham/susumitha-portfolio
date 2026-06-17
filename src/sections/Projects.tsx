import { useRef } from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiChevronLeft, FiChevronRight, FiShoppingCart, FiGlobe, FiMessageCircle, FiBookOpen, FiSend, FiGift, FiFileText } from 'react-icons/fi';
import { projects } from '../data/portfolio';
import SectionTitle from '../components/SectionTitle';

const iconMap: Record<string, React.ElementType> = {
  FiShoppingCart,
  FiGlobe,
  FiMessageCircle,
  FiBookOpen,
  FiSend,
  FiGift,
  FiFileText,
};

function ProjectIcon({ name }: { name: string }) {
  const Icon = iconMap[name];
  return Icon ? <Icon className="text-3xl text-primary" /> : null;
}

export default function Projects() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const amount = 340;
    scrollRef.current.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionTitle title="Projects" subtitle="Some of my recent work" />

      <div className="relative">
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full glass-card flex items-center justify-center text-primary cursor-pointer hidden sm:flex hover:bg-primary/20 transition-colors"
          aria-label="Previous projects"
        >
          <FiChevronLeft size={20} />
        </button>

        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full glass-card flex items-center justify-center text-primary cursor-pointer hidden sm:flex hover:bg-primary/20 transition-colors"
          aria-label="Next projects"
        >
          <FiChevronRight size={20} />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth hide-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="min-w-[300px] sm:min-w-[340px] snap-start"
            >
              <div className="glass-card rounded-xl p-6 h-full flex flex-col transition-all duration-300 group hover-glow">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <ProjectIcon name={project.icon} />
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted text-sm mb-4 flex-1 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-xs font-medium"
                      style={{
                        background: 'rgba(0,229,255,0.08)',
                        border: '1px solid rgba(0,229,255,0.15)',
                        color: '#00E5FF',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                    style={{
                      background: 'rgba(0,229,255,0.1)',
                      border: '1px solid rgba(0,229,255,0.2)',
                      color: '#00E5FF',
                    }}
                  >
                    <FiGithub /> GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                    style={{
                      background: 'linear-gradient(135deg, rgba(0,229,255,0.2), rgba(138,43,226,0.2))',
                      border: '1px solid rgba(0,229,255,0.2)',
                      color: '#F8FAFC',
                    }}
                  >
                    <FiExternalLink /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
