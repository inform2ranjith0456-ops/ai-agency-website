import React, { useState } from 'react';
import { ShieldCheck, GitBranch } from 'lucide-react';

const STAGES = [
  {
    step: '01',
    title: 'Input & Request Validation',
    sub: 'Rate-limiting, sanitization & authentication',
    description: 'Every request passes through an edge proxy with strict validation and privacy redaction before reaching the AI model.',
    safeguard: 'Protects against prompt injections and malicious inputs.'
  },
  {
    step: '02',
    title: 'Smart Intent Routing',
    sub: 'Directs queries to the optimal pipeline',
    description: 'Classifies incoming tasks to determine whether they need an instant cached answer, a database query, or multi-step reasoning.',
    safeguard: 'Improves response speed and reduces unnecessary model costs.'
  },
  {
    step: '03',
    title: 'Knowledge Retrieval (RAG)',
    sub: 'Grounded in your proprietary business data',
    description: 'Pulls verified information from your documents, product catalogs, and databases so responses are always accurate.',
    safeguard: 'Eliminates hallucinations with verifiable citations.'
  },
  {
    step: '04',
    title: 'Agent Task Execution',
    sub: 'Autonomous tool calling & API coordination',
    description: 'Agents coordinate tasks across external tools (CRMs, payment processors, databases) to fulfill user requests.',
    safeguard: 'Multi-step validation checks each action before execution.'
  },
  {
    step: '05',
    title: 'Human Review Gateways',
    sub: 'Safety fallback for sensitive operations',
    description: 'High-value or critical transactions can be paused automatically for team approval via Slack or email.',
    safeguard: 'Ensures full human oversight on sensitive decisions.'
  },
  {
    step: '06',
    title: 'Action & Audit Logging',
    sub: 'Complete activity trail for security',
    description: 'Every executed action, database change, and system interaction is logged in an encrypted audit trail.',
    safeguard: 'Meets enterprise compliance and security standards.'
  }
];

export default function ArchitectureVisualizer() {
  const [activeStage, setActiveStage] = useState(0);
  const current = STAGES[activeStage];

  return (
    <section id="architecture" className="py-20 relative border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs uppercase tracking-wider text-accent-cyan font-semibold">
              System Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-ink-primary tracking-tight">
              Built for reliability, speed, and enterprise security.
            </h2>
          </div>
          <p className="text-sm text-ink-secondary max-w-md leading-relaxed">
            Our systems use multi-tier validation, smart caching, and human-in-the-loop checkpoints to ensure 99.8% operational uptime.
          </p>
        </div>

        {/* Pipeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
          {STAGES.map((stage, index) => {
            const isSelected = activeStage === index;
            return (
              <button
                key={stage.step}
                onClick={() => setActiveStage(index)}
                className={`p-5 rounded-xl text-left transition-all border ${
                  isSelected
                    ? 'bg-surface-elevated border-accent-cyan/50 shadow-md'
                    : 'bg-surface/50 hover:bg-surface border-border'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-semibold ${isSelected ? 'text-accent-cyan' : 'text-ink-muted'}`}>
                    STAGE {stage.step}
                  </span>
                  {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />}
                </div>

                <h3 className="text-sm font-semibold text-ink-primary mb-1">
                  {stage.title}
                </h3>
                <p className="text-xs text-ink-secondary">
                  {stage.sub}
                </p>
              </button>
            );
          })}
        </div>

        {/* Detail Panel */}
        <div className="p-6 rounded-2xl glass-panel-elevated border border-border flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs text-accent-cyan font-semibold">
              Stage {current.step} — {current.title}
            </span>
            <p className="text-sm text-ink-secondary leading-relaxed">
              {current.description}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-surface border border-border flex items-center gap-3 shrink-0">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
            <div className="text-xs text-ink-secondary">
              <span className="font-semibold text-ink-primary block">Safeguard:</span>
              {current.safeguard}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
