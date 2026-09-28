import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onScrollToTop: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollToTop, onNavigate }) => {
  return (
    <footer className="relative bg-[#070709] border-t border-white/10 py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        {/* Left: Brand & Core Mission */}
        <div className="space-y-2">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <span className="font-display text-lg font-extrabold text-white tracking-wider uppercase">
              FRANCIS OLUWASEGUN<span className="text-[#D2FF3A]">.</span>
            </span>
          </div>
          <p className="text-xs text-zinc-500 max-w-sm">
            Vibe coder & AI-assisted developer. Turning ideas into real, polished digital products.
          </p>
        </div>

        {/* Middle: Clean Navigation Links */}
        <nav className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono uppercase tracking-wider text-zinc-400">
          <button
            onClick={() => onNavigate('home')}
            className="hover:text-[#D2FF3A] transition-colors cursor-pointer"
          >
            Home
          </button>
          <button
            onClick={() => onNavigate('work')}
            className="hover:text-[#D2FF3A] transition-colors cursor-pointer"
          >
            Work
          </button>
          <button
            onClick={() => onNavigate('about')}
            className="hover:text-[#D2FF3A] transition-colors cursor-pointer"
          >
            About
          </button>
          <button
            onClick={() => onNavigate('services')}
            className="hover:text-[#D2FF3A] transition-colors cursor-pointer"
          >
            Services
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className="hover:text-[#D2FF3A] transition-colors cursor-pointer"
          >
            Contact
          </button>
        </nav>

        {/* Right: Back to Top & Copyright */}
        <div className="flex flex-col items-center md:items-end gap-3 text-xs font-mono text-zinc-500">
          <button
            onClick={onScrollToTop}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#D2FF3A]" />
          </button>
          <span>© {new Date().getFullYear()} Francis Oluwasegun. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};
