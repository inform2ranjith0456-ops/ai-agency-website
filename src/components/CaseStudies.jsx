import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const CASE_STUDIES = [
  {
    client: 'NexaFreight Global',
    service: 'Autonomous Operations Agent',
    title: 'Automated Document Processing & Logistics Dispatch',
    summary: 'Automated high-volume PDF customs validation and carrier coordination, eliminating manual document processing.',
    metrics: [
      { label: 'Hours Saved Monthly', value: '4,200 hrs' },
      { label: 'Autonomous Accuracy', value: '99.7%' },
      { label: 'Turnaround Time', value: '45 seconds' }
    ]
  },
  {
    client: 'Kallisto Health Networks',
    service: 'Intelligent AI Web Portal',
    title: 'Adaptive Patient Intake & Dynamic Web Interface',
    summary: 'Replaced multi-step registration forms with a conversational, dynamic portal that adapts in real time to patient symptoms.',
    metrics: [
      { label: 'Intake Conversion', value: '+3.4x' },
      { label: 'Form Completion Time', value: '-65%' },
      { label: 'Data Accuracy', value: '99.9%' }
    ]
  },
  {
    client: 'Vektor E-Commerce',
    service: 'AI Sales Chatbot',
    title: '24/7 Conversational AI Shopping Assistant',
    summary: 'Integrated an interactive AI assistant that queries inventory in real time, answers product questions, and guides checkout.',
    metrics: [
      { label: 'Cart Conversion', value: '+38%' },
      { label: 'Incremental Sales', value: '$1.8M' },
      { label: 'Support Resolution', value: '82%' }
    ]
  }
];

export default function CaseStudies({ onOpenContact }) {
  return (
    <section id="cases" className="py-20 relative border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs uppercase tracking-wider text-accent-cyan font-semibold">
              Client Results
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-ink-primary tracking-tight">
              Real results delivered for growing businesses.
            </h2>
          </div>
          <p className="text-sm text-ink-secondary max-w-md leading-relaxed">
            Here is how our AI websites, agents, and chatbots create measurable efficiency and revenue for our clients.
          </p>
        </div>

        {/* Case Studies */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CASE_STUDIES.map((study, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl glass-panel-elevated border border-border hover:border-accent-cyan/40 transition-all flex flex-col justify-between space-y-6"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-ink-primary font-semibold">{study.client}</span>
                  <span className="text-accent-cyan text-[11px] px-2 py-0.5 rounded-full bg-accent-cyan/10">
                    {study.service}
                  </span>
                </div>

                <h3 className="text-base font-bold text-ink-primary leading-snug">
                  {study.title}
                </h3>

                <p className="text-xs text-ink-secondary leading-relaxed">
                  {study.summary}
                </p>
              </div>

              {/* Metrics */}
              <div className="pt-4 border-t border-border grid grid-cols-3 gap-2 text-center">
                {study.metrics.map((metric, i) => (
                  <div key={i} className="space-y-1">
                    <div className="text-base font-bold text-ink-primary">
                      {metric.value}
                    </div>
                    <div className="text-[10px] text-ink-secondary leading-tight">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
