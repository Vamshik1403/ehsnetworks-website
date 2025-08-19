import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AIHero from './components/AIHero';
import AICapabilities from './components/AICapabilities';
import AIServices from './components/AIServices';
import AIUseCases from './components/AIUseCases';
import AITechnologies from './components/AITechnologies';
import AICTA from './components/AICTA';

export default function AISolutionsPage() {
  return (
    <>
      <Header />
      <AIHero />
      <AICapabilities />
      <AIServices />
      <AIUseCases />
      <AITechnologies />
      <AICTA />
      <Footer />
    </>
  );
}
