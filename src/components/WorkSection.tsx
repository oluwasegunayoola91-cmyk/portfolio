import React, { useState } from 'react';
import { ArrowUpRight, Sparkles, Layers } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project, ProjectCategory } from '../types/portfolio';

interface WorkSectionProps {
  onSelectProject: (project: Project) => void;
}

export const WorkSection: React.FC<WorkSectionProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all');

  const filterTabs = [
    { label: 'All Projects', value: 'all' as ProjectCategory, count: PROJECTS.length },
    {
      label: 'AI Products',
      value: 'ai-products' as ProjectCategory,
      count: PROJECTS.filter((p) => p.category === 'ai-products').length,
    },
    {
      label: 'Websites',
      value: 'websites' as ProjectCategory,
      count: PROJECTS.filter((p) => p.category === 'websites').length,
    },
    {
      label: 'Creative Builds',
      value: 'creative' as ProjectCategory,
      count: PROJECTS.filter((p) => p.category === 'creative').length,
    },
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="work" className="relative py-28 px-4 sm:px-6 scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 border-b border-white/[0.08] pb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#D2FF3A] uppercase tracking-wider mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D2FF3A]" />
              <span>Selected Portfolio</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white uppercase">
              THINGS I'VE BUILT<span className="text-[#D2FF3A]">.</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-400 max-w-xl">
              A selection of websites, AI tools, experiments, and digital products built from ideas
              into working experiences.
            </p>
          </div>

          {/* Interactive Filter Control (Segmented buttons) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#141418] border border-white/10 rounded-xl self-start md:self-end">
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab.value;
              return (
                <button
                  key={tab.value}
                  onClick={() => setActiveFilter(tab.value)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium tracking-wide transition-all cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-[#22222a] text-white shadow-sm font-semibold'
                      : 'text-zinc-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span className="ml-1.5 text-[10px] text-zinc-500 font-mono">({tab.count})</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group relative bg-[#111116] border border-white/10 hover:border-[#D2FF3A]/50 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_15px_40px_rgba(210,255,58,0.1)] cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Project Image Frame */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#16161c] border-b border-white/[0.08]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  {/* Subtle hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111116] via-transparent to-transparent opacity-60 pointer-events-none" />

                  {/* Clean unboxed category & index overlay */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs font-mono">
                    <span className="px-2.5 py-1 rounded bg-[#09090c]/80 backdrop-blur-md text-zinc-300 border border-white/10">
                      {project.categoryLabel}
                    </span>
                    <span className="text-zinc-400 font-mono bg-[#09090c]/80 px-2 py-0.5 rounded border border-white/10">
                      0{idx + 1}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 space-y-4">
                  {/* Project Title & Arrow */}
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white group-hover:text-[#D2FF3A] transition-colors uppercase">
                      {project.title}
                    </h3>
                    <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-black group-hover:bg-[#D2FF3A] group-hover:border-[#D2FF3A] transition-all duration-300 shrink-0">
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>

                  <p className="text-sm text-zinc-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlight Metric */}
                  <div className="pt-1">
                    <span className="text-xs font-mono text-[#D2FF3A] bg-[#D2FF3A]/10 px-2.5 py-1 rounded border border-[#D2FF3A]/20">
                      ★ {project.highlight}
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Footer: Stack list - Clean unboxed text with typographic dots */}
              <div className="px-6 sm:px-7 pb-6 pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs text-zinc-500 font-mono">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  {project.tags.slice(0, 3).map((tag, tIdx) => (
                    <span key={tIdx} className="text-zinc-400">
                      {tag}
                      {tIdx < 2 && tIdx < project.tags.length - 1 && (
                        <span aria-hidden="true" className="ml-2 text-zinc-700">·</span>
                      )}
                    </span>
                  ))}
                </div>
                <span className="text-zinc-400 group-hover:text-white font-semibold transition-colors flex items-center gap-1">
                  <span>View Project</span>
                  <span>→</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
