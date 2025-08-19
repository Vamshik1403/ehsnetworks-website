import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AppModernisationHero from './components/AppModernisationHero';
import AppModernisationBenefits from './components/AppModernisationBenefits';
import AppModernisationSolutions from './components/AppModernisationSolutions';
import AppModernisationWhy from './components/AppModernisationWhy';
import AppModernisationPartners from './components/AppModernisationPartners';
import AppModernisationCTA from './components/AppModernisationCTA';

export default function AppModernisationPage() {
  return (
    <>
      <Header />
      <AppModernisationHero />
      <AppModernisationBenefits />
      <AppModernisationSolutions />
      <AppModernisationWhy />
      <AppModernisationPartners />
      <AppModernisationCTA />
      <Footer />
    </>
  );
}
