import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer({ onOpenContact }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border bg-background pt-14 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-start">
          
          {/* Brand */}
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-accent-cyan to-accent-violet flex items-center justify-center font-bold text-black text-xs">
                ▲
              </div>
              <span className="font-bold text-lg text-ink-primary tracking-tight">
                AURA
              </span>
            </div>
            
            <p className="text-sm text-ink-secondary leading-relaxed max-w-sm">
              We engineer custom AI websites, autonomous agents, and conversational chatbots for modern businesses looking to scale with reliable AI systems.
            </p>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-primary">
              Services
            </h4>
            <ul className="space-y-2 text-sm text-ink-secondary">
              <li><a href="#services" className="hover:text-accent-cyan transition-colors">AI Websites</a></li>
              <li><a href="#services" className="hover:text-accent-cyan transition-colors">Autonomous Agents</a></li>
              <li><a href="#services" className="hover:text-accent-cyan transition-colors">AI Chatbots</a></li>
              <li><a href="#architecture" className="hover:text-accent-cyan transition-colors">System Architecture</a></li>
            </ul>
          </div>

          {/* Action */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-primary">
              Ready to build?
            </h4>
            <p className="text-sm text-ink-secondary">
              Tell us about your project and we’ll prepare a tailored architecture proposal.
            </p>
            <button
              onClick={onOpenContact}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-ink-primary hover:bg-white text-black text-xs font-semibold transition-all shadow-md"
            >
              Get in Touch
            </button>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ink-muted">
          <div>
            © {new Date().getFullYear()} AURA Studio. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-emerald-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Available for Q4 projects
            </span>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-lg bg-surface border border-border hover:text-ink-primary transition-colors flex items-center gap-1"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
