import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CybersecurityHero from './components/CybersecurityHero';
import CybersecurityOverview from './components/CybersecurityOverview';
import CybersecurityServices from './components/CybersecurityServices';
import CybersecurityFeatures from './components/CybersecurityFeatures';
import CybersecurityThreats from './components/CybersecurityThreats';
import CybersecuritySolutions from './components/CybersecuritySolutions';
import CybersecurityPartners from './components/CybersecurityPartners';
import CybersecurityCTA from './components/CybersecurityCTA';

export default function CybersecurityPage() {
  return (
    <>
      <Header />
      <CybersecurityHero />
      <CybersecurityOverview />
      <CybersecurityServices />
      <CybersecurityFeatures />
      <CybersecurityThreats />
      <CybersecuritySolutions />
      <CybersecurityPartners />
      <CybersecurityCTA />
      <Footer />
    </>
  );
}
