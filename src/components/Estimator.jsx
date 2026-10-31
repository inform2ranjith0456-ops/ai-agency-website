import React, { useState, useMemo } from 'react';
import { ArrowRight, Check } from 'lucide-react';

export default function Estimator({ onBookWithScope }) {
  const [selectedType, setSelectedType] = useState('agent');
  const [scale, setScale] = useState('growth');
  const [includeHumanLoop, setIncludeHumanLoop] = useState(true);
  const [includePrivateVPC, setIncludePrivateVPC] = useState(false);

  // Dynamic estimate calculation
  const estimate = useMemo(() => {
    let base = 6000;
    let weeks = 3;

    if (selectedType === 'website') {
      base = 7500;
      weeks = 4;
    } else if (selectedType === 'agent') {
      base = 8500;
      weeks = 5;
    } else if (selectedType === 'chatbot') {
      base = 5000;
      weeks = 3;
    } else if (selectedType === 'rag') {
      base = 9500;
      weeks = 5;
    }

    if (scale === 'growth') {
      base += 3000;
      weeks += 1;
    } else if (scale === 'enterprise') {
      base += 7000;
      weeks += 2;
    }

    if (includeHumanLoop) base += 1500;
    if (includePrivateVPC) base += 3500;

    const min = Math.round(base * 0.9 / 500) * 500;
    const max = Math.round(base * 1.15 / 500) * 500;

    return { min, max, weeks };
  }, [selectedType, scale, includeHumanLoop, includePrivateVPC]);

  const handleProceed = () => {
    const scopeData = {
      type: selectedType,
      scale,
      addons: {
        humanLoop: includeHumanLoop,
        privateVPC: includePrivateVPC
      },
      estimate: `$${estimate.min.toLocaleString()} - $${estimate.max.toLocaleString()}`,
      timeline: `${estimate.weeks} Weeks`
    };
    onBookWithScope(scopeData);
  };

  return (
    <section id="estimator" className="py-20 relative border-t border-border bg-surface/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-xs uppercase tracking-wider text-accent-cyan font-semibold">
            Project Estimator
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-ink-primary">
            Estimate your project timeline & cost.
          </h2>
          <p className="text-sm text-ink-secondary">
            Select your requirements to see an instant estimate for your custom AI build.
          </p>
        </div>

        {/* Estimator Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls */}
          <div className="lg:col-span-7 space-y-6 p-6 sm:p-8 rounded-2xl glass-panel-elevated border border-border">
            
            {/* Step 1 */}
            <div className="space-y-3">
              <label className="text-xs uppercase tracking-wider text-ink-primary font-semibold block">
                1. Select Solution Type
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  { id: 'website', name: 'AI Website', sub: 'Dynamic, intelligent web app' },
                  { id: 'agent', name: 'Autonomous Agent', sub: 'Automated 24/7 background workflows' },
                  { id: 'chatbot', name: 'AI Chatbot', sub: 'Knowledge-base customer assistant' },
                  { id: 'rag', name: 'Custom RAG Pipeline', sub: 'Private domain data integration' }
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedType(item.id)}
                    className={`p-3.5 rounded-xl text-left border transition-all ${
                      selectedType === item.id
                        ? 'bg-accent-cyan/10 border-accent-cyan text-ink-primary'
                        : 'bg-surface/50 border-border text-ink-secondary hover:border-white/20'
                    }`}
                  >
                    <div className="text-xs font-semibold text-ink-primary">{item.name}</div>
                    <div className="text-[11px] text-ink-muted mt-0.5">{item.sub}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2 */}
            <div className="space-y-3">
              <label className="text-xs uppercase tracking-wider text-ink-primary font-semibold block">
                2. Expected Scale
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { id: 'mvp', name: 'Startup / MVP', sub: 'Standard volume' },
                  { id: 'growth', name: 'Growing Business', sub: 'Medium volume' },
                  { id: 'enterprise', name: 'Enterprise', sub: 'High concurrency' }
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setScale(item.id)}
                    className={`p-3 rounded-xl text-left border transition-all ${
                      scale === item.id
                        ? 'bg-accent-cyan/10 border-accent-cyan text-ink-primary'
                        : 'bg-surface/50 border-border text-ink-secondary hover:border-white/20'
                    }`}
                  >
                    <div className="text-xs font-semibold text-ink-primary">{item.name}</div>
                    <div className="text-[10px] text-ink-muted mt-0.5">{item.sub}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3 */}
            <div className="space-y-3">
              <label className="text-xs uppercase tracking-wider text-ink-primary font-semibold block">
                3. Optional Add-ons
              </label>
              <div className="space-y-2">
                <label className="flex items-center justify-between p-3.5 rounded-xl bg-surface/50 border border-border cursor-pointer hover:border-white/20 transition-colors">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={includeHumanLoop}
                      onChange={(e) => setIncludeHumanLoop(e.target.checked)}
                      className="w-4 h-4 rounded text-accent-cyan focus:ring-0 bg-background border-border"
                    />
                    <div>
                      <div className="text-xs font-medium text-ink-primary">Human Approval Checkpoints</div>
                      <div className="text-[11px] text-ink-muted">Slack/email notification for sensitive tasks</div>
                    </div>
                  </div>
                  <span className="text-xs text-ink-muted">+$1.5k</span>
                </label>

                <label className="flex items-center justify-between p-3.5 rounded-xl bg-surface/50 border border-border cursor-pointer hover:border-white/20 transition-colors">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={includePrivateVPC}
                      onChange={(e) => setIncludePrivateVPC(e.target.checked)}
                      className="w-4 h-4 rounded text-accent-cyan focus:ring-0 bg-background border-border"
                    />
                    <div>
                      <div className="text-xs font-medium text-ink-primary">Private Cloud / On-Premise Hosting</div>
                      <div className="text-[11px] text-ink-muted">Dedicated infrastructure for zero third-party data sharing</div>
                    </div>
                  </div>
                  <span className="text-xs text-ink-muted">+$3.5k</span>
                </label>
              </div>
            </div>

          </div>

          {/* Estimate Display */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl glass-panel-elevated border border-accent-cyan/30 space-y-5 sticky top-28 shadow-xl">
            <span className="text-xs uppercase tracking-wider text-accent-cyan font-semibold block">
              Estimated Investment
            </span>

            <div className="space-y-1">
              <div className="text-3xl font-bold text-ink-primary">
                ${estimate.min.toLocaleString()} - ${estimate.max.toLocaleString()}
              </div>
              <div className="text-xs text-ink-secondary">
                Fixed-price scope. No unexpected hourly overages.
              </div>
            </div>

            <div className="space-y-2 py-3 border-y border-border text-xs">
              <div className="flex justify-between">
                <span className="text-ink-muted">Delivery Timeline</span>
                <span className="text-ink-primary font-medium">{estimate.weeks} Weeks</span>
              </div>
              <div className="flex justify-between">
                <span className="text-ink-muted">Code Ownership</span>
                <span className="text-emerald-400 font-medium">100% Yours</span>
              </div>
              <div className="flex justify-between">
                <span className="text-ink-muted">Warranty</span>
                <span className="text-ink-primary font-medium">30 Days Support Included</span>
              </div>
            </div>

            <button
              onClick={handleProceed}
              className="w-full py-3 rounded-xl bg-ink-primary hover:bg-white text-black font-semibold text-xs transition-all shadow-md flex items-center justify-center gap-2"
            >
              <span>Get Detailed Proposal</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
