import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ArrowRight, Mail, Building, User, FileText } from 'lucide-react';

export default function ContactModal({ isOpen, onClose, prefillScope }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: 'AI Website',
    budget: '$10k - $25k',
    details: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (prefillScope) {
      const typeMap = {
        website: 'AI Website',
        agent: 'Autonomous AI Agent',
        chatbot: 'AI Chatbot',
        rag: 'Custom RAG Pipeline'
      };
      setFormData((prev) => ({
        ...prev,
        projectType: typeMap[prefillScope.type] || prev.projectType,
        details: `Configured via Estimator:
Estimated Range: ${prefillScope.estimate}
Timeline: ${prefillScope.timeline}`
      }));
    }
  }, [prefillScope]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg p-6 sm:p-8 rounded-2xl bg-surface-elevated border border-border shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border pb-4">
          <div>
            <h3 className="text-xl font-bold text-ink-primary">
              Start Your AI Project
            </h3>
            <p className="text-xs text-ink-secondary mt-0.5">
              We usually respond within 4 business hours.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-ink-secondary hover:text-ink-primary hover:bg-surface transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSubmitted ? (
          <div className="py-8 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-ink-primary">
              Message Received
            </h4>
            <p className="text-sm text-ink-secondary max-w-sm mx-auto leading-relaxed">
              Thank you! Our engineering team will review your requirements and reach out promptly.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                onClose();
              }}
              className="mt-3 px-5 py-2 rounded-xl bg-ink-primary text-black font-semibold text-xs"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="space-y-1">
                <label className="text-ink-secondary font-medium flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-accent-cyan" />
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Rivera"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-background border border-border focus:border-accent-cyan focus:outline-none text-xs text-ink-primary"
                />
              </div>

              <div className="space-y-1">
                <label className="text-ink-secondary font-medium flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-accent-cyan" />
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-background border border-border focus:border-accent-cyan focus:outline-none text-xs text-ink-primary"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="space-y-1">
                <label className="text-ink-secondary font-medium flex items-center gap-1.5">
                  <Building className="w-3.5 h-3.5 text-accent-cyan" />
                  Company Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Acme Corp"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-background border border-border focus:border-accent-cyan focus:outline-none text-xs text-ink-primary"
                />
              </div>

              <div className="space-y-1">
                <label className="text-ink-secondary font-medium">
                  Service Needed
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-background border border-border focus:border-accent-cyan focus:outline-none text-xs text-ink-primary"
                >
                  <option value="AI Website">AI Website</option>
                  <option value="Autonomous AI Agent">Autonomous AI Agent</option>
                  <option value="AI Chatbot">AI Chatbot</option>
                  <option value="Custom RAG Pipeline">Custom RAG Pipeline</option>
                </select>
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-ink-secondary font-medium flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-accent-cyan" />
                Project Details
              </label>
              <textarea
                rows={3}
                placeholder="Briefly describe what you're looking to build..."
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-background border border-border focus:border-accent-cyan focus:outline-none text-xs text-ink-primary resize-none placeholder:text-ink-muted"
              />
            </div>

            <div className="pt-2 flex items-center justify-between">
              <span className="text-[11px] text-ink-muted">
                100% confidential. NDA available upon request.
              </span>
              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl bg-ink-primary hover:bg-white text-black font-semibold text-xs transition-colors flex items-center gap-1.5"
              >
                <span>Submit Request</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
}
