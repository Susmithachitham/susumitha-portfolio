import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

const socials = [
  { icon: FaGithub, href: 'https://github.com/susmithachitham', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/susmithachitham', label: 'LinkedIn' },
  { icon: FaTwitter, href: '#', label: 'Twitter' },
  { icon: FiMail, href: 'mailto:susmithachitham@gmail.com', label: 'Email' },
];

export default function Footer() {
  return (
    <footer className="border-t border-primary/10 py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
        <div className="flex items-center gap-4">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-muted hover:text-primary hover:neon-glow transition-all duration-300 group"
              aria-label={social.label}
            >
              <social.icon className="text-lg group-hover:scale-110 transition-transform" />
            </a>
          ))}
        </div>

        <div className="text-center">
          <p className="text-muted text-sm">
            &copy; {new Date().getFullYear()} Susmitha C. All Rights Reserved.
          </p>
          <p className="text-muted/50 text-xs mt-1">
            Built with React, TypeScript &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
