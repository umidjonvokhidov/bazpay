import Companies from '@/sections/Companies';
import FAQs from '@/sections/FAQs';
import HomePageHero from '@/sections/HomePageHero';
import Investing from '@/sections/Investing';
import LatestBlogPosts from '@/sections/LatestBlogPosts';
import NewsLetter from '@/sections/NewsLetter';
import OurFeatures from '@/sections/OurFeatures';
import PricingV2 from '@/sections/PricingV2';
import Security from '@/sections/Security';
import TIandPO from '@/sections/TIandPO';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
};

const Home = async () => {
  return (
    <>
      <HomePageHero />
      <Companies />
      <TIandPO />
      <Security />
      <OurFeatures />
      <Investing />
      <PricingV2 />
      <FAQs />
      <NewsLetter />
      <LatestBlogPosts />
    </>
  );
};

export default Home;
