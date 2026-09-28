import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Work', id: 'work' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div
          className={`flex items-center justify-between px-5 py-2.5 rounded-full transition-all duration-300 border ${
            isScrolled
              ? 'bg-[#101014]/90 backdrop-blur-md border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]'
              : 'bg-[#101014]/60 backdrop-blur-sm border-white/[0.07]'
          }`}
        >
          {/* Zone 1: Single text element wordmark + subtle avatar */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 text-left group cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D2FF3A] rounded"
            aria-label="Francis Oluwasegun — Home"
          >
            <div className="w-7 h-7 rounded-full overflow-hidden border border-[#D2FF3A]/50 shrink-0 bg-zinc-800 shadow-[0_0_8px_rgba(210,255,58,0.25)]">
              <img
                src="https://res.cloudinary.com/bqokwnwq/image/upload/f_auto,q_auto/WhatsApp_Image_2026-09-28_at_11.39.28_AM"
                alt="Francis"
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="font-display text-sm tracking-wider font-bold text-white uppercase group-hover:text-[#D2FF3A] transition-colors">
              FRANCIS<span className="text-[#D2FF3A]">.</span>
            </span>
          </button>

          {/* Zone 2: 5 clean text navigation links (Desktop) */}
          <nav
            className="hidden md:flex items-center gap-7 text-xs font-medium tracking-wide uppercase"
            aria-label="Main Navigation"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative py-1 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D2FF3A] rounded ${
                    isActive ? 'text-[#D2FF3A]' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-[#D2FF3A] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary action + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-[#D2FF3A] text-black hover:bg-[#bef720] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D2FF3A] cursor-pointer"
            >
              <span>Let's build</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 rounded-lg text-zinc-300 hover:text-white hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D2FF3A]"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-4 top-20 z-50">
          <div className="bg-[#121217] border border-white/10 rounded-2xl p-6 shadow-2xl backdrop-blur-xl">
            <nav className="flex flex-col gap-4 text-sm font-medium tracking-wide uppercase">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center justify-between py-2 text-left transition-colors border-b border-white/5 ${
                      isActive ? 'text-[#D2FF3A]' : 'text-zinc-300 hover:text-white'
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="text-xs text-zinc-500 font-mono">0{index + 1}</span>
                  </button>
                );
              })}

              <a
                href={PERSONAL_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-3 w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#D2FF3A] text-black hover:bg-[#bef720] transition-colors"
              >
                <span>LET'S BUILD</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};
