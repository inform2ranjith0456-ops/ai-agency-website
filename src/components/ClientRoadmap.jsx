import React from 'react';
import { Compass, Code2, ShieldAlert, Rocket } from 'lucide-react';

const STEPS = [
  {
    step: '01',
    icon: Compass,
    title: 'Discovery & Blueprint',
    duration: 'Week 1',
    description: 'We audit your data, APIs, and workflows to map out system requirements, architecture, and success metrics.'
  },
  {
    step: '02',
    icon: Code2,
    title: 'Core Development',
    duration: 'Weeks 2 - 3',
    description: 'We build your custom models, vector pipelines, API integrations, and agent workflows in a staging environment.'
  },
  {
    step: '03',
    icon: ShieldAlert,
    title: 'Testing & UI Integration',
    duration: 'Week 4',
    description: 'We implement safety guardrails, connect frontend interfaces, and run automated edge-case evaluations.'
  },
  {
    step: '04',
    icon: Rocket,
    title: 'Production Launch',
    duration: 'Week 5+',
    description: 'We deploy to your cloud infrastructure, hand over 100% of the code repositories, and provide dedicated support.'
  }
];

export default function ClientRoadmap() {
  return (
    <section className="py-20 relative border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-xs uppercase tracking-wider text-accent-cyan font-semibold">
            How We Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-ink-primary">
            From initial concept to production in 4 to 6 weeks.
          </h2>
          <p className="text-sm text-ink-secondary">
            A structured sprint methodology to ensure on-time delivery with zero surprises.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {STEPS.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl glass-panel-elevated border border-border flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-ink-muted">
                      {s.step}
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-surface border border-border text-ink-secondary">
                      {s.duration}
                    </span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-surface border border-white/5 text-accent-cyan w-fit">
                    <Icon className="w-4 h-4" />
                  </div>

                  <h3 className="text-base font-semibold text-ink-primary">
                    {s.title}
                  </h3>

                  <p className="text-xs text-ink-secondary leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
