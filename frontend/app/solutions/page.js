import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SolutionsHero from './components/SolutionsHero';
import SolutionsOverview from './components/SolutionsOverview';
import SolutionsFeatures from './components/SolutionsFeatures';
import SolutionsCTA from './components/SolutionsCTA';

export default function SolutionsPage() {
  return (
    <>
      <Header />
      <SolutionsHero />
      <SolutionsOverview />
      <SolutionsFeatures />
      <SolutionsCTA />
      <Footer />
    </>
  );
}
