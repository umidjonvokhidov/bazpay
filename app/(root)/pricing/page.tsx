import LatestBlogPosts from '@/sections/LatestBlogPosts';
import MobileApp from '@/sections/MobileApp';
import PricingPlans from '@/sections/PricingPlans';
import PricingV1 from '@/sections/PricingV1';

const Pricing = () => {
  return (
    <>
      <PricingV1 />
      <PricingPlans />
      <MobileApp />
      <LatestBlogPosts />
    </>
  );
};

export default Pricing;
