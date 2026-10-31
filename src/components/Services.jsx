import React, { useState } from 'react';
import { Globe, Bot, MessageSquare, Database, ArrowRight, Check } from 'lucide-react';

const SERVICES = [
  {
    id: 'ai-websites',
    icon: Globe,
    title: 'Custom AI Websites',
    tagline: 'Dynamic web applications tailored to your business.',
    summary: 'We build modern web applications featuring personalized user journeys, intelligent search, and AI-driven interactive interfaces.',
    deliverables: [
      'Next.js & React modern architectures',
      'Context-aware user interfaces',
      'Semantic search & recommendations',
      'SEO and sub-second loading performance'
    ],
    timeline: '3 - 5 Weeks'
  },
  {
    id: 'ai-agents',
    icon: Bot,
    title: 'Autonomous AI Agents',
    tagline: 'Automated multi-step workflows that run 24/7.',
    summary: 'Custom digital agents that connect to your business tools (CRMs, databases, APIs) to perform multi-step tasks autonomously with built-in safety checks.',
    deliverables: [
      'Multi-agent workflow orchestration',
      'API integrations (Stripe, HubSpot, SQL)',
      'Human approval checkpoints for critical tasks',
      'Continuous audit logs and error recovery'
    ],
    timeline: '4 - 6 Weeks'
  },
  {
    id: 'ai-chatbots',
    icon: MessageSquare,
    title: 'Intelligent AI Chatbots',
    tagline: 'Conversational copilots grounded in your company data.',
    summary: 'Smart customer service and internal support bots trained specifically on your product documentation, answering inquiries accurately with citations.',
    deliverables: [
      'Custom knowledge-base retrieval (RAG)',
      'Zero-hallucination guardrails',
      'Omnichannel support (Web, WhatsApp, Slack)',
      'Seamless live-agent handover'
    ],
    timeline: '2 - 4 Weeks'
  },
  {
    id: 'rag-finetuning',
    icon: Database,
    title: 'Private Data & Model Tuning',
    tagline: 'Secure AI models hosted within your private infrastructure.',
    summary: 'Deploy private open-weights models and custom vector search systems to ensure complete data security and enterprise compliance.',
    deliverables: [
      'Private vector search indexing',
      'Automated data ingestion pipelines',
      'Zero data-sharing with public models',
      'Full compliance with enterprise standards'
    ],
    timeline: '4 - 6 Weeks'
  }
];

export default function Services({ onOpenContact }) {
  const [activeTab, setActiveTab] = useState(0);
  const current = SERVICES[activeTab];
  const Icon = current.icon;

  return (
    <section id="services" className="py-20 relative border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs uppercase tracking-wider text-accent-cyan font-semibold">
              Our Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-ink-primary tracking-tight">
              Tailored AI solutions built for real business operations.
            </h2>
          </div>
          <p className="text-sm text-ink-secondary max-w-md leading-relaxed">
            From customer-facing AI websites to back-office autonomous workflows, we deliver reliable and production-ready systems.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {SERVICES.map((service, index) => {
            const ServiceIcon = service.icon;
            const isSelected = activeTab === index;
            return (
              <button
                key={service.id}
                onClick={() => setActiveTab(index)}
                className={`p-4 rounded-xl text-left transition-all border ${
                  isSelected
                    ? 'bg-surface-elevated border-accent-cyan/50 shadow-md'
                    : 'bg-surface/50 hover:bg-surface border-border'
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className={`p-2 rounded-lg border ${
                    isSelected
                      ? 'bg-accent-cyan/10 border-accent-cyan/30 text-accent-cyan'
                      : 'bg-white/5 border-border text-ink-secondary'
                  }`}>
                    <ServiceIcon className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-semibold text-ink-primary">
                    {service.title}
                  </h3>
                </div>
                <p className="text-xs text-ink-secondary line-clamp-2">
                  {service.tagline}
                </p>
              </button>
            );
          })}
        </div>

        {/* Selected Service Detail */}
        <div className="p-8 rounded-2xl glass-panel-elevated border border-border grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-5">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan text-xs font-medium">
                {current.title}
              </span>
              <span className="text-xs text-ink-muted">
                Typical timeline: {current.timeline}
              </span>
            </div>

            <p className="text-base text-ink-secondary leading-relaxed">
              {current.summary}
            </p>

            <div className="space-y-2.5 pt-1">
              <div className="text-xs uppercase tracking-wider text-ink-primary font-semibold">
                What We Deliver:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {current.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-ink-secondary">
                    <Check className="w-4 h-4 text-accent-cyan shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-3">
              <button
                onClick={onOpenContact}
                className="px-5 py-2.5 rounded-xl bg-ink-primary hover:bg-white text-black font-semibold text-xs transition-colors flex items-center gap-2"
              >
                <span>Request a Quote for {current.title}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-4 p-6 rounded-xl bg-surface border border-border space-y-3 text-xs">
            <div className="font-semibold text-ink-primary pb-2 border-b border-border">
              Deployment Highlights
            </div>
            <div className="flex justify-between py-1 border-b border-white/5">
              <span className="text-ink-muted">Turnaround</span>
              <span className="text-ink-primary font-medium">{current.timeline}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-white/5">
              <span className="text-ink-muted">Integration</span>
              <span className="text-ink-primary font-medium">Custom API & Database</span>
            </div>
            <div className="flex justify-between py-1 border-b border-white/5">
              <span className="text-ink-muted">Ownership</span>
              <span className="text-emerald-400 font-medium">100% Client Code & IP</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
