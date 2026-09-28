import React, { useState } from 'react';
import { Mail, Copy, Check, ArrowRight, Github, Twitter, Linkedin, Send, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  selectedServicePreFill?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ selectedServicePreFill }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    serviceType: selectedServicePreFill || 'Websites',
    timeline: 'Within 2-4 weeks',
    budget: '$2,000 - $5,000',
    description: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync if prefill changes
  React.useEffect(() => {
    if (selectedServicePreFill) {
      setFormData((prev) => ({ ...prev, serviceType: selectedServicePreFill }));
    }
  }, [selectedServicePreFill]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.description) return;

    setIsSubmitting(true);

    try {
      // POST to Netlify forms endpoint when deployed
      const encode = (data: Record<string, string>) => {
        return Object.keys(data)
          .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
          .join('&');
      };

      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'project-inquiry',
          ...formData,
        }),
      });
    } catch {
      // Fallback silently without breaking client experience
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  const handleMailtoDirect = () => {
    const subject = encodeURIComponent(`Project Inquiry: ${formData.serviceType} from ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Francis,\n\nI have an idea I'd like to build.\n\nProject Type: ${formData.serviceType}\nTimeline: ${formData.timeline}\nEstimated Budget: ${formData.budget}\n\nProject Summary:\n${formData.description}\n\nBest,\n${formData.name} (${formData.email})`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative py-28 px-4 sm:px-6 scroll-mt-16 bg-[#09090c]">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#D2FF3A] uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D2FF3A]" />
            <span>Start A Conversation</span>
          </div>

          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white uppercase leading-[0.95]">
            HAVE AN IDEA?<br />
            <span className="text-[#D2FF3A]">LET'S BUILD IT.</span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 max-w-xl mx-auto">
            Got a rough idea, a business concept, or something you've been meaning to build? Tell me
            about it.
          </p>
        </div>

        {/* Two-Column Grid: Form + Direct Contact Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Quick Contact & Status */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#111116] border border-white/10 rounded-2xl p-6 sm:p-7 space-y-6">
              {/* CEO Profile Header */}
              <div className="flex items-center gap-3.5 pb-5 border-b border-white/10">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#D2FF3A]/40 shrink-0 bg-zinc-800 shadow-[0_0_12px_rgba(210,255,58,0.2)]">
                  <img
                    src={PERSONAL_INFO.avatar}
                    alt={PERSONAL_INFO.name}
                    className="w-full h-full object-cover object-top"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h3 className="font-display text-sm font-bold text-white uppercase tracking-wider">
                    {PERSONAL_INFO.name}
                  </h3>
                  <p className="text-xs font-mono text-[#D2FF3A]">
                    Founder & Vibe Coder
                  </p>
                </div>
              </div>

              <div>
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider block mb-1">
                  Direct Inbox
                </span>
                <div className="flex items-center justify-between gap-2 p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-xs sm:text-sm font-mono text-zinc-200 hover:text-[#D2FF3A] truncate transition-colors"
                  >
                    {PERSONAL_INFO.email}
                  </a>

                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white transition-colors cursor-pointer shrink-0"
                    title="Copy Email"
                    aria-label="Copy Email to Clipboard"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-[#D2FF3A]" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
                {copiedEmail && (
                  <span className="text-[11px] font-mono text-[#D2FF3A] mt-1.5 block">
                    ✓ Email copied to clipboard
                  </span>
                )}
              </div>

              {/* Availability Notice */}
              <div className="p-4 rounded-xl bg-[#181820] border border-white/5 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#D2FF3A] animate-pulse" />
                  <span className="text-xs font-semibold text-white font-mono uppercase">
                    Current Availability
                  </span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Taking on select new projects. Responses typically within 12–24 hours with an initial architectural outline and turnaround estimate.
                </p>
              </div>

              {/* Location & Timezone */}
              <div className="space-y-1 text-xs font-mono text-zinc-400 border-t border-white/10 pt-4">
                <div className="flex justify-between">
                  <span className="text-zinc-500">Based in:</span>
                  <span className="text-zinc-300">Lagos, Nigeria (GMT+1)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">Working with:</span>
                  <span className="text-zinc-300">Global clients & remote teams</span>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-2 border-t border-white/10">
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider block mb-3">
                  Find Me Online
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-lg bg-white/5 hover:bg-[#D2FF3A] text-zinc-400 hover:text-black transition-colors"
                    aria-label="GitHub Profile"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-lg bg-white/5 hover:bg-[#D2FF3A] text-zinc-400 hover:text-black transition-colors"
                    aria-label="Twitter Profile"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-lg bg-white/5 hover:bg-[#D2FF3A] text-zinc-400 hover:text-black transition-colors"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Inquiry Builder */}
          <div className="lg:col-span-7 bg-[#111116] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-xl">
            {isSubmitted ? (
              <div className="py-12 text-center space-y-5">
                <div className="w-14 h-14 rounded-full bg-[#D2FF3A]/10 border border-[#D2FF3A]/30 text-[#D2FF3A] flex items-center justify-center mx-auto">
                  <Check className="w-7 h-7" />
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase">
                  Message Received!
                </h3>
                <p className="text-sm text-zinc-300 max-w-md mx-auto leading-relaxed">
                  Thanks for reaching out, <span className="text-white font-medium">{formData.name}</span>.
                  I'll review your project details and get back to you at{' '}
                  <span className="text-[#D2FF3A] font-mono">{formData.email}</span> shortly.
                </p>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={handleMailtoDirect}
                    className="px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#D2FF3A] text-black hover:bg-[#bef720] transition-colors flex items-center gap-2 cursor-pointer"
                  >
                    <span>Also Open in Email App</span>
                    <Mail className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-5 py-2.5 rounded-xl text-xs font-mono uppercase tracking-wider text-zinc-400 hover:text-white transition-colors"
                  >
                    Submit Another Idea
                  </button>
                </div>
              </div>
            ) : (
              <form
                name="project-inquiry"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* Hidden form-name input required for Netlify Forms AJAX */}
                <input type="hidden" name="form-name" value="project-inquiry" />
                <p className="hidden">
                  <label>
                    Don’t fill this out if you're human: <input name="bot-field" />
                  </label>
                </p>

                <div>
                  <h3 className="font-display text-xl font-bold text-white uppercase tracking-tight mb-1">
                    Project Inquiry
                  </h3>
                  <p className="text-xs text-zinc-400">
                    Fill in the basics and let's turn your vision into working software.
                  </p>
                </div>

                {/* Service Type Selection */}
                <div className="space-y-2">
                  <label className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">
                    What are you looking to build?
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {['Websites', 'AI Products', 'Rapid MVP', 'Creative'].map((item) => (
                      <button
                        type="button"
                        key={item}
                        onClick={() => setFormData({ ...formData, serviceType: item })}
                        className={`py-2 px-3 rounded-lg text-xs font-medium tracking-wide transition-all border text-center cursor-pointer ${
                          formData.serviceType.toLowerCase().includes(item.toLowerCase())
                            ? 'bg-[#D2FF3A] text-black border-[#D2FF3A] font-bold'
                            : 'bg-white/[0.02] text-zinc-300 border-white/10 hover:border-white/20'
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Hidden serviceType field so selected pill button value is captured */}
                <input type="hidden" name="serviceType" value={formData.serviceType} />

                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">
                      Your Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="e.g. Alex Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-[#D2FF3A] transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">
                      Your Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-[#D2FF3A] transition-colors"
                    />
                  </div>
                </div>

                {/* Timeline & Budget Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="timeline" className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">
                      Target Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#141418] border border-white/10 text-zinc-200 text-sm focus:outline-none focus:border-[#D2FF3A] transition-colors"
                    >
                      <option>Urgent (Within 48h to 7 days)</option>
                      <option>Within 2-4 weeks</option>
                      <option>Flexible / Exploring</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="budget" className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#141418] border border-white/10 text-zinc-200 text-sm focus:outline-none focus:border-[#D2FF3A] transition-colors"
                    >
                      <option>$1,500 - $3,000 (Sprint / Prototype)</option>
                      <option>$3,000 - $6,000 (Standard Build)</option>
                      <option>$6,000+ (Comprehensive Product)</option>
                      <option>Let's discuss scope first</option>
                    </select>
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-1.5">
                  <label htmlFor="description" className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">
                    Tell me about your idea *
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={4}
                    required
                    placeholder="What problem are you solving? What should this product do? Any rough links or references?"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-[#D2FF3A] transition-colors resize-none"
                  />
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full group px-8 py-4 rounded-xl font-display font-bold text-xs sm:text-sm tracking-wider uppercase bg-[#D2FF3A] text-black hover:bg-[#bef720] transition-all duration-200 shadow-[0_0_30px_rgba(210,255,58,0.2)] hover:shadow-[0_0_40px_rgba(210,255,58,0.35)] flex items-center justify-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D2FF3A]"
                >
                  {isSubmitting ? (
                    <span>Processing...</span>
                  ) : (
                    <>
                      <span>START A PROJECT</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
