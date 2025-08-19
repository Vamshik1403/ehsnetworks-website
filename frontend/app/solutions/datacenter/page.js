import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import DataCenterHero from './components/DataCenterHero';
import DataCenterInfrastructure from './components/DataCenterInfrastructure';
import DataCenterServices from './components/DataCenterServices';
import DataCenterSecurity from './components/DataCenterSecurity';
import DataCenterTechnologies from './components/DataCenterTechnologies';
import DataCenterCTA from './components/DataCenterCTA';

export default function DataCenterSolutionsPage() {
  return (
    <>
      <Header />
      <DataCenterHero />
      <DataCenterInfrastructure />
      <DataCenterServices />
      <DataCenterSecurity />
      <DataCenterTechnologies />
      <DataCenterCTA />
      <Footer />
    </>
  );
}
