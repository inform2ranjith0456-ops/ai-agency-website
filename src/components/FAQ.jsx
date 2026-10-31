import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQS = [
  {
    question: 'How quickly can our project go from concept to launch?',
    answer: 'Most projects are completed within 3 to 6 weeks. We work in structured weekly sprints with functional staging demos delivered early so you can test real workflows before production.'
  },
  {
    question: 'Can your AI agents integrate with our existing software?',
    answer: 'Yes. We build custom API connectors for your databases (PostgreSQL, MongoDB, SQL Server), CRMs (Salesforce, HubSpot), communications (Slack, WhatsApp, Zendesk), and payment gateways (Stripe).'
  },
  {
    question: 'How do you prevent AI models from hallucinating?',
    answer: 'We use Retrieval-Augmented Generation (RAG) to ground models strictly in your verified documentation, combined with deterministic schema validation and automated fallback gates that catch errors before output is served.'
  },
  {
    question: 'Who owns the code and intellectual property?',
    answer: 'You do. 100% of the repository code, container scripts, vector indexes, and custom models are transferred to your ownership upon completion. There are no vendor lock-ins or hidden software fees.'
  },
  {
    question: 'Is our proprietary company data secure?',
    answer: 'Yes. We configure systems with zero-data-retention APIs or host open-weights models inside your private cloud (AWS/GCP), ensuring your confidential data is never used to train public models.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 relative border-t border-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs uppercase tracking-wider text-accent-cyan font-semibold">
            Common Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-ink-primary">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-ink-secondary">
            Everything you need to know about partnering with our AI engineering studio.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl glass-panel-elevated border border-border overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 text-sm font-semibold text-ink-primary hover:text-accent-cyan transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-ink-muted shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-accent-cyan' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-ink-secondary leading-relaxed border-t border-white/5 pt-3 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

