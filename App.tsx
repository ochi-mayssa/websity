import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { UXProcesses } from './components/UXProcesses';
import { AIInUX } from './components/AIInUX';
import { UXSEOConnection } from './components/UXSEOConnection';
import { UXPrinciples } from './components/UXPrinciples';
import { ToolsTemplates } from './components/ToolsTemplates';
import { CaseStudies } from './components/CaseStudies';
import { Challenges } from './components/Challenges';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header />
      <Hero />
      <UXProcesses />
      <AIInUX />
      <UXSEOConnection />
      <UXPrinciples />
      <ToolsTemplates />
      <CaseStudies />
      <Challenges />
      <Footer />
    </div>
  );
};

export default App;
