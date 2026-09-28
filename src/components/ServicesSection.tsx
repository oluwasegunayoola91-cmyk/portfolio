import React from 'react';
import { ArrowUpRight, Globe, Bot, Rocket, Sparkles, CheckCircle2 } from 'lucide-react';
import { SERVICES } from '../data/portfolioData';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'websites':
        return <Globe className="w-5 h-5 text-[#D2FF3A]" />;
      case 'ai-products':
        return <Bot className="w-5 h-5 text-[#D2FF3A]" />;
      case 'rapid-prototypes':
        return <Rocket className="w-5 h-5 text-[#D2FF3A]" />;
      case 'creative-builds':
        return <Sparkles className="w-5 h-5 text-[#D2FF3A]" />;
      default:
        return <Globe className="w-5 h-5 text-[#D2FF3A]" />;
    }
  };

  return (
    <section id="services" className="relative py-28 px-4 sm:px-6 scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-white/[0.08] pb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#D2FF3A] uppercase tracking-wider mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D2FF3A]" />
              <span>What I Offer</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white uppercase leading-[0.95]">
              FROM IDEA<br />
              <span className="text-[#D2FF3A]">TO LAUNCH.</span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-zinc-400 max-w-md">
            Whether you need a high-converting web presence, a custom AI tool, or a 48-hour MVP to
            pitch investors, I handle the engineering and design end-to-end.
          </p>
        </div>

        {/* 4 Clean Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group relative bg-[#111116] border border-white/10 hover:border-[#D2FF3A]/40 rounded-2xl p-7 sm:p-8 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between shadow-lg"
            >
              <div>
                {/* Header: Number, Icon, Title */}
                <div className="flex items-center justify-between border-b border-white/10 pb-5 mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#181820] border border-white/10 flex items-center justify-center">
                      {getServiceIcon(service.id)}
                    </div>
                    <div>
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-[#D2FF3A] transition-colors uppercase">
                        {service.title}
                      </h3>
                      <span className="text-[11px] font-mono text-zinc-500 uppercase">
                        Service {service.number}
                      </span>
                    </div>
                  </div>

                  <span className="text-xs font-mono text-zinc-400 bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
                    {service.turnaround}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-zinc-300 leading-relaxed mb-6 font-normal">
                  {service.description}
                </p>

                {/* Deliverables List */}
                <div className="space-y-2.5 mb-6">
                  <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider block">
                    What's Included:
                  </span>
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-300">
                      <span className="text-[#D2FF3A] font-mono text-xs mt-0.5">•</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action */}
              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-zinc-500 font-mono hidden sm:inline">
                  {service.idealFor}
                </span>

                <button
                  onClick={() => onSelectService(service.title)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider bg-white/5 hover:bg-[#D2FF3A] text-zinc-300 hover:text-black border border-white/10 hover:border-[#D2FF3A] transition-all duration-200 cursor-pointer"
                >
                  <span>Build This</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
