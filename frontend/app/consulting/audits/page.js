import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AssessmentAuditsHero from '../assessment-audits/components/AssessmentAuditsHero';
import AssessmentAuditsOverview from '../assessment-audits/components/AssessmentAuditsOverview';
import AssessmentAuditsServices from '../assessment-audits/components/AssessmentAuditsServices';
import AssessmentAuditsBenefits from '../assessment-audits/components/AssessmentAuditsBenefits';
import AssessmentAuditsCTA from '../assessment-audits/components/AssessmentAuditsCTA';
import Partners from '../../components/Partners';

export default function AuditsPage() {
  return (
    <>
      <Header />
      <AssessmentAuditsHero />
      <AssessmentAuditsOverview />
      <AssessmentAuditsServices />
      <AssessmentAuditsBenefits />
      <AssessmentAuditsCTA />
      <Partners />
      <Footer />
    </>
  );
}
