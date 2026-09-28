import React, { useEffect } from 'react';
import { X, ExternalLink, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { Project } from '../types/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onInquire: (projectName: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onInquire }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-4xl bg-[#101014] border border-white/15 rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[92vh] flex flex-col my-auto text-left">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#14141a]">
          <div className="flex items-center gap-3 text-xs font-mono text-zinc-400">
            <span className="text-[#D2FF3A] font-semibold uppercase">{project.categoryLabel}</span>
            <span aria-hidden="true">·</span>
            <span>{project.year}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D2FF3A]"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          {/* Main Visual Preview */}
          <div className="relative rounded-xl overflow-hidden border border-white/10 bg-[#0d0d10] aspect-[16/9] shadow-inner group">
            <img
              src={project.image}
              alt={`${project.title} Interface Preview`}
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
              referrerPolicy="no-referrer"
              onError={(e) => {
                // Fallback styled container if image fails
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            {/* Visual overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#101014]/60 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Title & Key Highlight */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div>
              <h2
                id="modal-project-title"
                className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-white uppercase"
              >
                {project.title}
              </h2>
              <p className="text-zinc-300 text-sm sm:text-base mt-1 font-medium">
                {project.subtitle}
              </p>
            </div>

            <div className="sm:text-right shrink-0">
              <span className="inline-block text-xs font-mono px-3 py-1.5 rounded-md bg-[#D2FF3A]/10 text-[#D2FF3A] border border-[#D2FF3A]/20">
                {project.metrics}
              </span>
            </div>
          </div>

          {/* Narrative Overview */}
          <div className="text-zinc-300 text-sm sm:text-base leading-relaxed space-y-4">
            <p>{project.longDescription}</p>
          </div>

          {/* Challenge & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">
                The Problem / Friction
              </span>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#D2FF3A]/[0.02] border border-[#D2FF3A]/15 space-y-2">
              <span className="text-xs font-mono text-[#D2FF3A] uppercase tracking-wider block">
                Execution & Solution
              </span>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Core Feature Highlights */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
              Core Capabilities Shipped
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-[#D2FF3A] shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack List - Clean unboxed text */}
          <div className="pt-4 border-t border-white/10 space-y-2">
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">
              Stack & Technologies
            </span>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-zinc-300 font-mono">
              {project.tags.map((tag, idx) => (
                <React.Fragment key={idx}>
                  <span className="text-white font-medium">{tag}</span>
                  {idx < project.tags.length - 1 && (
                    <span aria-hidden="true" className="text-zinc-600">·</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Action Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-6 py-4 border-t border-white/10 bg-[#14141a]">
          <span className="text-xs text-zinc-400 font-mono">
            {project.liveDemoNote || 'Custom builds tailored to your specific requirements.'}
          </span>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                onInquire(project.title);
              }}
              className="w-full sm:w-auto px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-[#D2FF3A] text-black hover:bg-[#bef720] transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Build Something Similar</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
