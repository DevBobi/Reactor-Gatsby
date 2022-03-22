import React from 'react';
import CardContainer from '../components/CardContainer';
import ComponentHeader from '../components/CardHeader';
import FeaturedBanner from '../components/FeaturedBanner';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import SvgCharts from '../svg/SvgCharts';

const Index = () => (
  <Layout>
    <ComponentHeader />
    <FeaturedBanner />
    <CardContainer />
    <SplitSection
      id="services"
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">Market Analysis</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Our team of enthusiastic marketers will analyse and evaluate how your company stacks
            against the closest competitors
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
  </Layout>
);

export default Index;
