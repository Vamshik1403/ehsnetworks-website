import React from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import CloudMigrationHero from './components/CloudMigrationHero';
import CloudMigrationOverview from './components/CloudMigrationOverview';
import CloudMigrationExpertise from './components/CloudMigrationExpertise';
import CloudMigrationAdvantages from './components/CloudMigrationAdvantages';
import CloudMigrationPartnership from './components/CloudMigrationPartnership';
import CloudMigrationContact from './components/CloudMigrationContact';
import Partners from '../../../components/Partners';

export default function CloudMigrationPage() {
  return (
    <>
      <Header />
      <CloudMigrationHero />
      <CloudMigrationOverview />
      <CloudMigrationExpertise />
      <CloudMigrationAdvantages />
      <CloudMigrationPartnership />
      <CloudMigrationContact />
      <Partners />
      <Footer />
    </>
  );
}
