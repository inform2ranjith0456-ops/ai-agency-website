import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Services from './components/Services';
import LiveAgentSandbox from './components/LiveAgentSandbox';
import ArchitectureVisualizer from './components/ArchitectureVisualizer';
import CaseStudies from './components/CaseStudies';
import Estimator from './components/Estimator';
import ClientRoadmap from './components/ClientRoadmap';
import FAQ from './components/FAQ';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [prefilledScope, setPrefilledScope] = useState(null);

  const handleBookWithScope = (scopeData) => {
    setPrefilledScope(scopeData);
    setIsContactOpen(true);
  };

  const handleOpenGeneralContact = () => {
    setPrefilledScope(null);
    setIsContactOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-ink-primary relative selection:bg-accent-cyan/20 selection:text-accent-cyan font-sans">
      
      {/* Navigation */}
      <Navbar onOpenContact={handleOpenGeneralContact} />

      {/* Main Sections */}
      <main className="flex-1">
        {/* Hero with Spline 3D Scene */}
        <Hero onOpenContact={handleOpenGeneralContact} />

        {/* Enterprise Tech & Partner Bar */}
        <TrustBar />

        {/* Core Services: AI Websites, Autonomous Agents, Chatbots */}
        <Services onOpenContact={handleOpenGeneralContact} />

        {/* Live Interactive Agent Demo */}
        <LiveAgentSandbox />

        {/* Architecture Pipeline */}
        <ArchitectureVisualizer />

        {/* Client Case Studies */}
        <CaseStudies onOpenContact={handleOpenGeneralContact} />

        {/* Scope & Cost Estimator */}
        <Estimator onBookWithScope={handleBookWithScope} />

        {/* Sprint Roadmap */}
        <ClientRoadmap />

        {/* Frequently Asked Questions */}
        <FAQ />

        {/* Bottom Call to Action */}
        <CallToAction onOpenContact={handleOpenGeneralContact} />
      </main>

      {/* Footer */}
      <Footer onOpenContact={handleOpenGeneralContact} />

      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        prefillScope={prefilledScope}
      />

    </div>
  );
}
