import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function CallToAction({ onOpenContact }) {
  return (
    <section className="py-20 relative border-t border-border overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-surface-elevated via-surface to-background border border-border-strong text-center space-y-6 shadow-2xl overflow-hidden">
          
          {/* Subtle lighting glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-accent-cyan/15 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative z-10 space-y-3 max-w-xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/25 text-accent-cyan text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Let’s Build Together</span>
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold text-ink-primary tracking-tight">
              Ready to build custom AI for your business?
            </h2>

            <p className="text-sm text-ink-secondary leading-relaxed">
              Schedule a 30-minute architecture discovery call. We’ll review your systems, explore feasibility, and outline a clear project roadmap.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={onOpenContact}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-ink-primary hover:bg-white text-black font-semibold text-xs tracking-wide transition-all shadow-lg flex items-center justify-center gap-2 group"
            >
              <span>Schedule Architecture Call</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="#estimator"
              className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-surface hover:bg-surface-elevated border border-border text-xs text-ink-secondary hover:text-ink-primary font-medium transition-all"
            >
              Calculate Project Cost
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

