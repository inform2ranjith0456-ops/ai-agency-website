import React from 'react';
import { ArrowRight } from 'lucide-react';
import SplineHeroContainer from './SplineHeroContainer';

export default function Hero({ onOpenContact }) {
  return (
    <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-blue/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent-cyan/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Clear & Punchy Value Prop */}
          <div className="lg:col-span-6 space-y-7">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-elevated border border-border text-xs text-accent-cyan font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse" />
              <span>Full-Stack AI Engineering Agency</span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold tracking-tight text-ink-primary leading-[1.15]">
                We build custom AI websites, agents, and chatbots for{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-violet">
                  modern businesses.
                </span>
              </h1>
              <p className="text-base sm:text-lg text-ink-secondary max-w-xl leading-relaxed">
                We design and launch production-grade AI solutions—including intelligent web applications, autonomous workflow agents, and smart customer support bots tailored to your operations.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1">
              <button
                onClick={onOpenContact}
                className="px-6 py-3.5 rounded-xl bg-ink-primary hover:bg-white text-black font-semibold text-sm transition-all shadow-lg flex items-center justify-center gap-2 group"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#services"
                className="px-6 py-3.5 rounded-xl bg-surface hover:bg-surface-elevated border border-border text-ink-primary font-medium text-sm transition-all flex items-center justify-center"
              >
                Explore Services
              </a>
            </div>

            {/* Clean Stats */}
            <div className="grid grid-cols-3 gap-6 pt-5 border-t border-border">
              <div>
                <div className="text-2xl font-bold text-ink-primary">40+</div>
                <div className="text-xs text-ink-secondary mt-0.5">Systems Deployed</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent-cyan">99.8%</div>
                <div className="text-xs text-ink-secondary mt-0.5">Accuracy Rate</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-ink-primary">24/7</div>
                <div className="text-xs text-ink-secondary mt-0.5">Autonomous Ops</div>
              </div>
            </div>

          </div>

          {/* Right Column: Clean Spline 3D Scene */}
          <div className="lg:col-span-6 relative">
            <SplineHeroContainer />
          </div>

        </div>
      </div>
    </section>
  );
}
