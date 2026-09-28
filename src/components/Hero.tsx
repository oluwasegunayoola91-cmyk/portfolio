import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import type { Variants } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onExploreWork: () => void;
  onStartProject: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWork, onStartProject }) => {
  const prefersReducedMotion = useReducedMotion();
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  // Subtle parallax on mouse move
  useEffect(() => {
    if (prefersReducedMotion) return;
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX - innerWidth / 2) / 60;
      const y = (e.clientY - innerHeight / 2) / 60;
      setMouseOffset({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [prefersReducedMotion]);

  // Coordinated slide up + fade-in animation variants
  const wordVariants: Variants = {
    hidden: { y: '105%', opacity: 0 },
    visible: (customDelay: number) => ({
      y: '0%',
      opacity: 1,
      transition: {
        duration: 0.85,
        delay: customDelay,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    }),
  };

  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    }),
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-20 px-4 sm:px-6 overflow-hidden"
    >
      {/* Glassmorphic Background Architecture & Atmospheric Lighting */}
      {/* Primary Electric / Cobalt Blue Ambient Light Orb */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[850px] h-[400px] sm:h-[500px] rounded-full pointer-events-none blur-[110px] sm:blur-[140px] opacity-45"
        style={{
          background: 'radial-gradient(circle, rgba(37, 99, 235, 0.35) 0%, rgba(59, 130, 246, 0.22) 35%, rgba(6, 182, 212, 0.12) 60%, transparent 75%)',
        }}
      />

      {/* Secondary Cyan-Blue Edge Glow Accent */}
      <div
        className="absolute top-12 -left-20 sm:left-10 w-[450px] sm:w-[550px] h-[380px] rounded-full pointer-events-none blur-[120px] opacity-35"
        style={{
          background: 'radial-gradient(circle, rgba(14, 165, 233, 0.3) 0%, rgba(30, 64, 175, 0.18) 50%, transparent 75%)',
        }}
      />

      {/* Electric Lime Accent Light (Balanced with Blue) */}
      <div
        className="absolute bottom-10 right-10 sm:right-1/4 w-[420px] h-[340px] rounded-full pointer-events-none blur-[120px] opacity-25"
        style={{
          background: 'radial-gradient(circle, rgba(210, 255, 58, 0.2) 0%, rgba(16, 185, 129, 0.1) 45%, transparent 70%)',
        }}
      />

      {/* Floating Glassmorphic Ambient Panels */}
      <div
        className="absolute inset-x-4 sm:inset-x-8 md:inset-x-14 top-20 bottom-12 rounded-3xl border border-white/[0.08] pointer-events-none -z-0"
        style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.035) 0%, rgba(18, 18, 24, 0.45) 50%, rgba(255, 255, 255, 0.015) 100%)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          boxShadow: '0 30px 80px -20px rgba(0, 0, 0, 0.6), inset 0 1px 1px 0 rgba(255, 255, 255, 0.12), inset 0 -1px 1px 0 rgba(0, 0, 0, 0.4)',
        }}
      >
        {/* Subtle glass reflection highlight */}
        <div className="absolute top-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-white/25 to-transparent" />
      </div>

      {/* Subtle floating technical telemetry lines / decorative markers */}
      <div className="absolute top-24 left-10 hidden lg:flex flex-col gap-1 text-[11px] font-mono text-zinc-400 tracking-wider z-10">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D2FF3A] shadow-[0_0_8px_#D2FF3A]" />
          <span className="text-zinc-300 font-semibold">VIBE CODER</span>
        </div>
        <span className="text-zinc-500">AI-ASSISTED ARCHITECTURE</span>
      </div>

      <div className="absolute top-24 right-10 hidden lg:flex flex-col items-end gap-1 text-[11px] font-mono text-zinc-400 tracking-wider z-10">
        <span className="text-zinc-300 font-semibold">CONCEPT → PRODUCTION</span>
        <span className="text-zinc-500">RAPID PRODUCT EXECUTION</span>
      </div>

      {/* Decorative vertical guide lines */}
      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-full max-w-6xl pointer-events-none border-x border-white/[0.04] hidden sm:block z-0" />

      <div className="max-w-5xl mx-auto w-full relative z-10 text-center flex flex-col items-center">
        {/* CEO Identity & Status Badge with Frosted Glassmorphism */}
        <motion.div
          custom={0.1}
          initial="hidden"
          animate="visible"
          variants={fadeUpVariants}
          className="inline-flex items-center gap-3 pl-2 pr-4 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.07] backdrop-blur-xl border border-white/15 text-xs font-mono tracking-wider text-zinc-300 mb-8 sm:mb-10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] transition-colors group cursor-default"
        >
          {/* Circular CEO Avatar */}
          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-[#D2FF3A]/60 shadow-[0_0_10px_rgba(210,255,58,0.3)] shrink-0 bg-zinc-800">
            <img
              src={PERSONAL_INFO.avatar}
              alt="Francis Oluwasegun, Founder & CEO"
              className="w-full h-full object-cover object-top"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D2FF3A] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D2FF3A]" />
            </span>
            <span className="font-semibold text-white tracking-widest text-[11px] sm:text-xs">
              {PERSONAL_INFO.status}
            </span>
            <span className="text-zinc-600 hidden sm:inline">/</span>
            <span className="text-zinc-400 hidden sm:inline text-[11px]">{PERSONAL_INFO.statusPeriod}</span>
          </div>
        </motion.div>

        {/* Centerpiece Typographic Wordmark */}
        <div
          className="w-full flex flex-col items-center select-none"
          style={{
            transform: prefersReducedMotion
              ? 'none'
              : `translate3d(${mouseOffset.x}px, ${mouseOffset.y}px, 0)`,
            transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          {/* Line 1: FRANCIS */}
          <div className="overflow-hidden py-1">
            <motion.h1
              custom={0.2}
              initial="hidden"
              animate="visible"
              variants={wordVariants}
              className="font-display text-[2.5rem] sm:text-[4rem] md:text-[5.15rem] lg:text-[6.5rem] font-bold tracking-[-0.03em] text-white leading-[0.92] uppercase"
            >
              FRANCIS
            </motion.h1>
          </div>

          {/* Line 2: OLUWASEGUN */}
          <div className="overflow-hidden py-1">
            <motion.h1
              custom={0.35}
              initial="hidden"
              animate="visible"
              variants={wordVariants}
              className="font-display text-[2.5rem] sm:text-[4rem] md:text-[5.15rem] lg:text-[6.5rem] font-bold tracking-[-0.03em] text-zinc-200 leading-[0.92] uppercase"
            >
              OLUWASEGUN
            </motion.h1>
          </div>

          {/* Line 3: BUILDS. (Electric Lime Accent) */}
          <div className="overflow-hidden py-1">
            <motion.h1
              custom={0.5}
              initial="hidden"
              animate="visible"
              variants={wordVariants}
              className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[7.25rem] font-extrabold tracking-[-0.035em] text-[#D2FF3A] leading-[0.92] uppercase drop-shadow-[0_10px_35px_rgba(210,255,58,0.2)]"
            >
              BUILDS.
            </motion.h1>
          </div>
        </div>

        {/* Core Tagline */}
        <motion.p
          custom={0.65}
          initial="hidden"
          animate="visible"
          variants={fadeUpVariants}
          className="mt-8 sm:mt-10 text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight text-white max-w-2xl text-balance"
        >
          {PERSONAL_INFO.coreStatement}
        </motion.p>

        {/* Supporting Bio */}
        <motion.p
          custom={0.75}
          initial="hidden"
          animate="visible"
          variants={fadeUpVariants}
          className="mt-4 sm:mt-5 text-sm sm:text-base text-zinc-400 max-w-xl leading-relaxed text-balance"
        >
          {PERSONAL_INFO.heroBio}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          custom={0.88}
          initial="hidden"
          animate="visible"
          variants={fadeUpVariants}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          {/* Primary CTA */}
          <button
            onClick={onStartProject}
            className="w-full sm:w-auto group relative px-8 py-4 rounded-xl font-display font-bold text-xs sm:text-sm tracking-wider uppercase bg-[#D2FF3A] text-black hover:bg-[#bef720] transition-all duration-200 shadow-[0_0_30px_rgba(210,255,58,0.25)] hover:shadow-[0_0_40px_rgba(210,255,58,0.4)] flex items-center justify-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D2FF3A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090c]"
          >
            <span>LET'S BUILD SOMETHING</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          {/* Secondary CTA with frosted glassmorphism */}
          <button
            onClick={onExploreWork}
            className="w-full sm:w-auto px-7 py-4 rounded-xl font-display font-bold text-xs sm:text-sm tracking-wider uppercase text-zinc-200 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] backdrop-blur-xl border border-white/15 hover:border-white/30 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D2FF3A]"
          >
            <span>VIEW MY WORK</span>
            <span className="text-[#D2FF3A]">→</span>
          </button>
        </motion.div>

        {/* Quick capability ticker badges - Clean unboxed text with typographic separators */}
        <motion.div
          custom={1.0}
          initial="hidden"
          animate="visible"
          variants={fadeUpVariants}
          className="mt-14 pt-8 border-t border-white/[0.07] w-full max-w-3xl flex flex-wrap items-center justify-center gap-y-2 gap-x-4 sm:gap-x-6 text-xs text-zinc-500 font-mono"
        >
          <span className="text-zinc-300">Fast 48h Prototyping</span>
          <span aria-hidden="true" className="text-zinc-700">·</span>
          <span>Websites</span>
          <span aria-hidden="true" className="text-zinc-700">·</span>
          <span className="text-zinc-300">AI-Powered Products</span>
          <span aria-hidden="true" className="text-zinc-700">·</span>
          <span>Creative Experiences</span>
          <span aria-hidden="true" className="text-zinc-700">·</span>
          <span className="text-[#D2FF3A]">Zero AI Slop</span>
        </motion.div>
      </div>

      {/* Decorative Bottom subtle gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
};
