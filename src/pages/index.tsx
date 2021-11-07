/* eslint-disable no-octal */
import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import Header from '@/components/header';
import VideoSection from '@/components/video-section';
import ListSection from '@/components/list-section';
import FeatureSection from '@/components/feature-section';
import CasesSection from '@/components/cases-section';
import SocialProof from '@/components/social-proof';
import PricingTable from '@/components/pricing-table';
import Footer from '@/components/footer';

import { hotjar } from 'react-hotjar';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    hotjar.initialize(2688450, 6);
  }, []);

  return (
    <Page>
      <NextSeo title="Use Glasses" description="Conectando visoes" />
      <Header />
      <main>
        <VideoSection />
        <ListSection />
        <CasesSection />
        <SocialProof />
        <PricingTable />
      </main>
      <Footer />
    </Page>
  );
}
