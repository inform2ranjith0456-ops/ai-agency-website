import React, { useEffect, useRef, useState } from 'react';
import { SPLINE_CONFIG } from '../config/splineConfig';

export default function SplineHeroContainer() {
  const containerRef = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const splineUrl = SPLINE_CONFIG.splineSceneUrl;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Erase the 'Built with Spline' watermark from shadowRoot and DOM
    const purgeSplineWatermark = () => {
      const viewer = container.querySelector('spline-viewer');
      if (viewer && viewer.shadowRoot) {
        // 1. Inject hidden style override directly inside Shadow DOM
        if (!viewer.shadowRoot.querySelector('#spline-watermark-override')) {
          const style = document.createElement('style');
          style.id = 'spline-watermark-override';
          style.textContent = `
            #logo,
            a[href*="spline.design"],
            a[href*="spline.com"],
            a,
            .spline-watermark,
            #spline-watermark {
              display: none !important;
              visibility: hidden !important;
              opacity: 0 !important;
              pointer-events: none !important;
              width: 0 !important;
              height: 0 !important;
              position: absolute !important;
              left: -99999px !important;
              top: -99999px !important;
              transform: scale(0) !important;
            }
          `;
          viewer.shadowRoot.appendChild(style);
        }

        // 2. Query and delete the logo node completely
        const logo =
          viewer.shadowRoot.querySelector('#logo') ||
          viewer.shadowRoot.querySelector('a[href*="spline"]') ||
          viewer.shadowRoot.querySelector('a');
        if (logo) {
          logo.style.display = 'none';
          logo.remove();
        }

        // 3. Attach MutationObserver to ShadowRoot to kill any dynamically re-injected logo
        if (!viewer._hasSplineObserver) {
          viewer._hasSplineObserver = true;
          const shadowObserver = new MutationObserver(() => {
            const dynamicLogo =
              viewer.shadowRoot.querySelector('#logo') ||
              viewer.shadowRoot.querySelector('a[href*="spline"]') ||
              viewer.shadowRoot.querySelector('a');
            if (dynamicLogo) {
              dynamicLogo.style.display = 'none';
              dynamicLogo.remove();
            }
          });
          shadowObserver.observe(viewer.shadowRoot, {
            childList: true,
            subtree: true,
          });
        }
      }

      // Also clean any light-DOM leaks if any
      document
        .querySelectorAll('#logo, a[href*="spline.design"], a[href*="spline.com"]')
        .forEach((node) => node.remove());
    };

    // Run immediately and continuously during mount & scene load
    purgeSplineWatermark();
    const interval = setInterval(purgeSplineWatermark, 20);

    const containerObserver = new MutationObserver(() => {
      purgeSplineWatermark();
    });

    containerObserver.observe(container, {
      childList: true,
      subtree: true,
    });

    // Clear interval after 8 seconds
    const timeout = setTimeout(() => {
      clearInterval(interval);
    }, 8000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
      containerObserver.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[460px] sm:h-[520px] lg:h-[600px] flex items-center justify-center overflow-hidden rounded-2xl bg-surface/30 border border-border"
    >
      {/* Background ambient lighting */}
      <div className="absolute w-72 h-72 bg-accent-cyan/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute w-72 h-72 bg-accent-violet/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Loading state */}
      {!loaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 z-10 pointer-events-none">
          <div className="w-7 h-7 border-2 border-accent-cyan/30 border-t-accent-cyan rounded-full animate-spin" />
          <span className="text-xs text-ink-secondary">Loading 3D scene...</span>
        </div>
      )}

      {/* Spline 3D Viewer Element */}
      <spline-viewer
        url={splineUrl}
        onLoad={() => setLoaded(true)}
        style={{
          width: '100%',
          height: '100%',
          outline: 'none',
          display: 'block',
        }}
      />
    </div>
  );
}
