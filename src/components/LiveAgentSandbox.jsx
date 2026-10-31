import React, { useState, useEffect } from 'react';
import { Play, RotateCcw, CheckCircle, Cpu, Terminal } from 'lucide-react';

const AGENT_PRESETS = [
  {
    id: 'support-agent',
    name: 'Customer Support Copilot',
    role: 'Automates inquiries, policy lookups & refunds',
    userQuery: 'Customer #4829 requested an expedited refund for damaged shipment #SH-9012. Verify policy and execute.',
    executionSteps: [
      { step: 1, type: 'thought', content: 'Checking order records and verifying 14-day warranty policy in database.' },
      { step: 2, type: 'tool', tool: 'db_query("SELECT status, delivered_at, value FROM shipments WHERE id=\'SH-9012\'")', result: '{ delivered: "3 days ago", amount: "$384.50", eligible: true }' },
      { step: 3, type: 'tool', tool: 'stripe_refund_issue({ orderId: "SH-9012", amount: 384.50 })', result: '{ status: "success", refund_id: "re_8912x" }' },
      { step: 4, type: 'output', content: 'Refund of $384.50 processed successfully. Support ticket resolved and email confirmation sent to customer.' }
    ]
  },
  {
    id: 'ops-agent',
    name: 'Operations Dispatch Agent',
    role: 'Monitors alerts & coordinates workflows',
    userQuery: 'Temperature anomaly detected on shipment #C-109 in transit. Reroute cold-storage unit.',
    executionSteps: [
      { step: 1, type: 'thought', content: 'Evaluating temperature telemetry and locating nearest certified cold facility.' },
      { step: 2, type: 'tool', tool: 'telemetry_check({ unitId: "C-109" })', result: '{ temp: "8.2°C", threshold: "4.0°C", alert: true }' },
      { step: 3, type: 'tool', tool: 'dispatch_partner_request({ radius_miles: 20 })', result: '{ partner: "Sierra Logistics", eta: "22 mins" }' },
      { step: 4, type: 'output', content: 'Emergency dispatch confirmed. Replacement refrigerated unit assigned with 22-min arrival window.' }
    ]
  },
  {
    id: 'website-agent',
    name: 'Dynamic Web Personalizer',
    role: 'Adapts UI in real time based on user intent',
    userQuery: 'Visitor arrived from Enterprise Healthcare search campaign. Adjust page layout.',
    executionSteps: [
      { step: 1, type: 'thought', content: 'Identifying industry context as healthcare enterprise. Configuring compliance highlights.' },
      { step: 2, type: 'tool', tool: 'load_industry_assets({ sector: "healthcare" })', result: '{ badge: "HIPAA Compliant", case_study: "Hospital Network" }' },
      { step: 3, type: 'output', content: 'Homepage tailored instantly with relevant healthcare case studies and security badges in 16ms.' }
    ]
  }
];

export default function LiveAgentSandbox() {
  const [selectedAgent, setSelectedAgent] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(-1);
  const [completedSteps, setCompletedSteps] = useState([]);

  const currentAgent = AGENT_PRESETS[selectedAgent];

  const handleRunSimulation = () => {
    setIsRunning(true);
    setCompletedSteps([]);
    setCurrentStepIndex(0);
  };

  const handleReset = () => {
    setIsRunning(false);
    setCurrentStepIndex(-1);
    setCompletedSteps([]);
  };

  useEffect(() => {
    if (!isRunning || currentStepIndex < 0) return;

    if (currentStepIndex < currentAgent.executionSteps.length) {
      const timer = setTimeout(() => {
        setCompletedSteps((prev) => [...prev, currentAgent.executionSteps[currentStepIndex]]);
        setCurrentStepIndex((prev) => prev + 1);
      }, 600);

      return () => clearTimeout(timer);
    } else {
      setIsRunning(false);
    }
  }, [isRunning, currentStepIndex, currentAgent]);

  return (
    <section id="agents" className="py-20 relative border-t border-border bg-surface/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs uppercase tracking-wider text-accent-cyan font-semibold">
            Interactive Agent Demo
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-ink-primary">
            See how our autonomous agents work in real-time.
          </h2>
          <p className="text-sm text-ink-secondary">
            Select an agent below and run the simulation to see step-by-step reasoning and tool execution.
          </p>
        </div>

        {/* Card */}
        <div className="rounded-2xl glass-panel-elevated border border-border overflow-hidden shadow-xl">
          
          {/* Top Bar */}
          <div className="flex flex-wrap items-center justify-between border-b border-border bg-surface-elevated/70 p-3 sm:p-4 gap-2">
            <div className="flex items-center gap-1.5 sm:gap-2">
              {AGENT_PRESETS.map((agent, idx) => (
                <button
                  key={agent.id}
                  onClick={() => {
                    setSelectedAgent(idx);
                    handleReset();
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    selectedAgent === idx
                      ? 'bg-accent-cyan/15 text-accent-cyan border border-accent-cyan/30'
                      : 'text-ink-secondary hover:text-ink-primary hover:bg-surface'
                  }`}
                >
                  {agent.name}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleReset}
                disabled={isRunning || completedSteps.length === 0}
                className="p-2 rounded-lg bg-surface border border-border text-ink-secondary hover:text-ink-primary disabled:opacity-40"
                title="Reset simulation"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={handleRunSimulation}
                disabled={isRunning}
                className="px-4 py-2 rounded-xl bg-accent-cyan hover:bg-cyan-400 text-black font-semibold text-xs flex items-center gap-1.5 transition-colors disabled:opacity-50"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>{isRunning ? 'Running...' : 'Run Simulation'}</span>
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-border">
            
            {/* Left Prompt Info */}
            <div className="lg:col-span-5 p-6 space-y-4 bg-surface/30">
              <div className="space-y-1">
                <span className="text-xs text-accent-cyan font-semibold">Active Agent</span>
                <h4 className="text-lg font-bold text-ink-primary">{currentAgent.name}</h4>
                <p className="text-xs text-ink-secondary">{currentAgent.role}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-background/70 border border-border space-y-1">
                <span className="text-xs text-ink-muted font-medium block">Incoming Trigger:</span>
                <p className="text-xs text-ink-primary leading-relaxed">
                  "{currentAgent.userQuery}"
                </p>
              </div>

              <div className="space-y-1.5 text-xs text-ink-secondary">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Schema-validated output</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Direct tool execution</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Continuous activity logging</span>
                </div>
              </div>
            </div>

            {/* Right Execution Stream */}
            <div className="lg:col-span-7 p-6 bg-black/40 text-xs space-y-3 min-h-[340px] flex flex-col justify-between">
              
              <div className="space-y-2.5 overflow-y-auto max-h-[300px] pr-2">
                {completedSteps.length === 0 && !isRunning && (
                  <div className="py-12 text-center text-ink-muted space-y-1">
                    <p className="text-ink-secondary font-medium">Ready to simulate task execution.</p>
                    <p className="text-xs">Click "Run Simulation" above to watch the agent in action.</p>
                  </div>
                )}

                {completedSteps.map((stepItem, idx) => (
                  <div key={idx} className="space-y-1">
                    {stepItem.type === 'thought' && (
                      <div className="p-2.5 rounded-lg bg-surface border-l-2 border-accent-cyan text-ink-secondary">
                        <span className="text-accent-cyan font-semibold block text-[11px] mb-0.5">Reasoning:</span>
                        {stepItem.content}
                      </div>
                    )}

                    {stepItem.type === 'tool' && (
                      <div className="p-2.5 rounded-lg bg-surface border border-border space-y-1">
                        <span className="text-xs text-accent-cyan font-semibold block">Tool Executed:</span>
                        <div className="text-white text-xs bg-black/60 p-2 rounded border border-white/5 font-mono">
                          {stepItem.tool}
                        </div>
                        <div className="text-ink-muted text-xs">Result: {stepItem.result}</div>
                      </div>
                    )}

                    {stepItem.type === 'output' && (
                      <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 space-y-1">
                        <div className="flex items-center gap-1.5 font-bold text-xs text-emerald-400">
                          <CheckCircle className="w-4 h-4" />
                          <span>Task Completed Successfully</span>
                        </div>
                        <p className="text-xs text-ink-primary leading-relaxed">
                          {stepItem.content}
                        </p>
                      </div>
                    )}
                  </div>
                ))}

                {isRunning && (
                  <div className="flex items-center gap-2 text-accent-cyan text-xs py-2">
                    <span className="w-2 h-2 rounded-full bg-accent-cyan animate-ping" />
                    <span>Processing next action...</span>
                  </div>
                )}
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-ink-muted">
                <span>Direct API connection</span>
                <span>Latency: 18ms</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
