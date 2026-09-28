import React from 'react';
import { ArrowRight, Zap, Target, Cpu, Sparkles, Check } from 'lucide-react';
import { PERSONAL_INFO, CAPABILITIES } from '../data/portfolioData';

interface AboutSectionProps {
  onStartProject: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onStartProject }) => {
  return (
    <section id="about" className="relative py-28 px-4 sm:px-6 scroll-mt-16 bg-[#0c0c10] border-y border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Human Manifesto */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono text-[#D2FF3A] uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D2FF3A]" />
              <span>About & Ethos</span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white uppercase leading-[0.95]">
              IDEAS FIRST.<br />
              <span className="text-[#D2FF3A]">CODE SECOND.</span>
            </h2>

            {/* CEO Profile Showcase Card */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 p-5 rounded-2xl bg-[#141418] border border-white/10 shadow-lg">
              <div className="relative w-28 h-36 sm:w-32 sm:h-40 rounded-xl overflow-hidden border-2 border-[#D2FF3A]/40 shrink-0 bg-[#16161c] shadow-[0_0_24px_rgba(210,255,58,0.2)] group">
                <img
                  src="https://res.cloudinary.com/bqokwnwq/image/upload/f_auto,q_auto/WhatsApp_Image_2026-09-28_at_11.39.28_AM"
                  alt="Francis Oluwasegun — CEO & Founder"
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              </div>

              <div className="space-y-1.5 text-center sm:text-left">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                  <h3 className="font-display text-lg font-bold text-white uppercase">
                    {PERSONAL_INFO.name}
                  </h3>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#D2FF3A]/10 text-[#D2FF3A] border border-[#D2FF3A]/20">
                    FOUNDER & BUILDER
                  </span>
                </div>
                <p className="text-xs font-mono text-zinc-400">
                  {PERSONAL_INFO.title}
                </p>
                <p className="text-xs text-zinc-300 leading-relaxed pt-1">
                  “I believe shipping real, tactile software beats endless planning meetings every single time.”
                </p>
              </div>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-zinc-300 leading-relaxed pt-2">
              <p className="text-white font-medium text-lg sm:text-xl">
                {PERSONAL_INFO.aboutBio}
              </p>
              <p className="text-zinc-400 text-sm sm:text-base">
                {PERSONAL_INFO.aboutPhilosophy}
              </p>
            </div>

            {/* Guiding Principles */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#141418] border border-white/10 space-y-1">
                <span className="text-xs font-mono text-[#D2FF3A] uppercase tracking-wider block">
                  01. Velocity With Taste
                </span>
                <p className="text-xs text-zinc-400">
                  Moving from mental vision to tactile UI in hours, avoiding the death spiral of weeks-long boilerplate.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#141418] border border-white/10 space-y-1">
                <span className="text-xs font-mono text-[#D2FF3A] uppercase tracking-wider block">
                  02. Real Working Products
                </span>
                <p className="text-xs text-zinc-400">
                  No hollow prototypes or dead mockups. Everything built is designed to function, scale, and deliver value.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onStartProject}
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#D2FF3A] hover:text-white transition-colors cursor-pointer"
              >
                <span>Have a vision you want built? Let's discuss</span>
                <span>→</span>
              </button>
            </div>
          </div>

          {/* Right Column: Visual Capabilities Matrix */}
          <div className="lg:col-span-6 bg-[#111116] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <h3 className="font-display text-lg font-bold text-white uppercase tracking-wider">
                Core Capabilities
              </h3>
              <span className="text-xs font-mono text-zinc-500">
                06 Focus Areas
              </span>
            </div>

            <div className="space-y-4">
              {CAPABILITIES.map((cap, idx) => (
                <div
                  key={idx}
                  className="group p-4 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-white/10 transition-colors"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono text-[#D2FF3A]">0{idx + 1}.</span>
                        <h4 className="text-sm sm:text-base font-semibold text-white group-hover:text-[#D2FF3A] transition-colors">
                          {cap.name}
                        </h4>
                      </div>
                      <p className="text-xs sm:text-sm text-zinc-400 pl-6">
                        {cap.detail}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick trust metrics */}
            <div className="pt-4 border-t border-white/10 grid grid-cols-3 gap-2 text-center font-mono">
              <div>
                <span className="block text-lg sm:text-xl font-bold text-white tabular-nums">48h</span>
                <span className="text-[11px] text-zinc-500 uppercase tracking-tight">MVP Turnaround</span>
              </div>
              <div className="border-x border-white/10">
                <span className="block text-lg sm:text-xl font-bold text-[#D2FF3A] tabular-nums">100%</span>
                <span className="text-[11px] text-zinc-500 uppercase tracking-tight">Custom Coded</span>
              </div>
              <div>
                <span className="block text-lg sm:text-xl font-bold text-white tabular-nums">Zero</span>
                <span className="text-[11px] text-zinc-500 uppercase tracking-tight">Template Slop</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
