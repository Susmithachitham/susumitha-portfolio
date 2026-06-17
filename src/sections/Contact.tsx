import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiCopy, FiCheck, FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import { FaWhatsapp, FaGithub, FaLinkedin } from 'react-icons/fa';
import { contactInfo } from '../data/portfolio';
import SectionTitle from '../components/SectionTitle';
import GlassCard from '../components/GlassCard';
import { copyToClipboard } from '../utils/helpers';

const iconMap: Record<string, React.ElementType> = {
  FiPhone, FaWhatsapp, FiMail, FaGithub, FaLinkedin, FiMapPin,
};

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const success = await copyToClipboard(text);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary cursor-pointer hover:bg-primary/20 transition-all shrink-0"
      title="Copy to clipboard"
    >
      {copied ? <FiCheck size={14} /> : <FiCopy size={14} />}
    </button>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sending, setSending] = useState(false);
  const [toast, setToast] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      if (typeof window !== 'undefined' && (window as any).emailjs) {
        await (window as any).emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          form,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );
      }
      setToast({ type: 'success', message: 'Message sent successfully!' });
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch {
      setToast({ type: 'error', message: 'Failed to send message. Please try again.' });
    } finally {
      setSending(false);
      setTimeout(() => setToast(null), 4000);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <SectionTitle title="Get In Touch" subtitle="Let's work together" />

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          {contactInfo.map((info, i) => {
            const Icon = iconMap[info.icon];
            return (
              <GlassCard key={info.label} delay={i * 0.05} className="flex items-center gap-4 p-4">
                {Icon && <Icon className="text-xl text-primary shrink-0" />}
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-muted">{info.label}</p>
                  {info.isLink && info.href ? (
                    <a
                      href={info.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-white hover:text-primary transition-colors truncate block"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-sm text-white truncate">{info.value}</p>
                  )}
                </div>
                <CopyButton text={info.value} />
              </GlassCard>
            );
          })}
        </div>

        <GlassCard className="p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm text-muted mb-1.5">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 rounded-lg bg-bg border border-primary/20 text-white text-sm focus:outline-none focus:border-primary transition-colors placeholder:text-muted/50"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-muted mb-1.5">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 rounded-lg bg-bg border border-primary/20 text-white text-sm focus:outline-none focus:border-primary transition-colors placeholder:text-muted/50"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm text-muted mb-1.5">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 rounded-lg bg-bg border border-primary/20 text-white text-sm focus:outline-none focus:border-primary transition-colors placeholder:text-muted/50"
                placeholder="Subject"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm text-muted mb-1.5">Message</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2.5 rounded-lg bg-bg border border-primary/20 text-white text-sm focus:outline-none focus:border-primary transition-colors placeholder:text-muted/50 resize-none"
                placeholder="Your message..."
              />
            </div>

            <motion.button
              type="submit"
              disabled={sending}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 rounded-lg font-medium text-white flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-60 cursor-pointer"
              style={{
                background: 'linear-gradient(135deg, #00E5FF, #8A2BE2)',
                boxShadow: '0 4px 20px rgba(0,229,255,0.3)',
              }}
            >
              {sending ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <FiSend /> Send Message
                </>
              )}
            </motion.button>
          </form>
        </GlassCard>
      </div>

      {toast && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-xl font-medium text-sm"
          style={{
            background: toast.type === 'success'
              ? 'linear-gradient(135deg, rgba(0,229,255,0.2), rgba(0,229,255,0.1))'
              : 'linear-gradient(135deg, rgba(255,0,0,0.2), rgba(255,0,0,0.1))',
            border: `1px solid ${toast.type === 'success' ? 'rgba(0,229,255,0.3)' : 'rgba(255,0,0,0.3)'}`,
            color: toast.type === 'success' ? '#00E5FF' : '#FF4444',
          }}
        >
          {toast.message}
        </motion.div>
      )}
    </section>
  );
}
