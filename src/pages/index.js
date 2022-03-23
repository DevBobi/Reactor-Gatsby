import React from 'react';
import CardContainer from '../components/CardContainer';
import ComponentHeader from '../components/CardHeader';
import FeaturedBanner from '../components/FeaturedBanner';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import SvgCharts from '../svg/SvgCharts';
import LabelText from '../components/LabelText';
import customerData from '../data/customer-data';
import Card from '../components/Card';


const Index = () => (
  <Layout>
    <ComponentHeader />
    <FeaturedBanner />
    <CardContainer />
  </Layout>
);

export default Index;
