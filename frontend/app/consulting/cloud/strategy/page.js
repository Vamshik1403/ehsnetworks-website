import React from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import CloudStrategyHero from '../../../../frontend/app/consulting/components/CloudStrategyHero';
import CloudStrategyOverview from '../../../../frontend/app/consulting/components/CloudStrategyOverview';
import CloudStrategyAssessment from '../../../../frontend/app/consulting/components/CloudStrategyAssessment';
import CloudStrategyAdvantages from '../../../../frontend/app/consulting/components/CloudStrategyAdvantages';
import CloudStrategyCTA from '../../../../frontend/app/consulting/components/CloudStrategyCTA';
import Partners from '../../../components/Partners';

export default function CloudStrategyPage() {
  return (
    <>
      <Header />
      <CloudStrategyHero />
      <CloudStrategyOverview />
      <CloudStrategyAssessment />
      <CloudStrategyAdvantages />
      <CloudStrategyCTA />
      <Partners />
      <Footer />
    </>
  );
}
