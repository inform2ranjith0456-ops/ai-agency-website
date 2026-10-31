import React from 'react';

const PARTNERS = [
  { name: 'Shopify' },
  { name: 'Stripe' },
  { name: 'PostgreSQL' },
  { name: 'AWS Cloud' },
  { name: 'Anthropic' },
  { name: 'OpenAI' }
];

export default function TrustBar() {
  return (
    <section className="py-10 border-y border-border bg-surface/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <span className="text-xs font-medium text-ink-muted shrink-0 text-center sm:text-left">
            Built with modern enterprise infrastructure:
          </span>

          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-6 sm:gap-10 text-ink-secondary text-sm font-semibold tracking-wide">
            {PARTNERS.map((partner) => (
              <span key={partner.name} className="hover:text-ink-primary transition-colors opacity-70 hover:opacity-100">
                {partner.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

