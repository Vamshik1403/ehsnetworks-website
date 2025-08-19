import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import WorkplacesHero from './components/WorkplacesHero';
import WorkplacesOverview from './components/WorkplacesOverview';
import WorkplacesServices from './components/WorkplacesServices';
import WorkplacesSolutions from './components/WorkplacesSolutions';
import WorkplacesBenefits from './components/WorkplacesBenefits';
import WorkplacesCTA from './components/WorkplacesCTA';

export default function WorkplacesPage() {
  return (
    <>
      <Header />
      <WorkplacesHero />
      <WorkplacesOverview />
      <WorkplacesServices />
      <WorkplacesSolutions />
      <WorkplacesBenefits />
      <WorkplacesCTA />
      <Footer />
    </>
  );
}
