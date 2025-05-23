import FAQs from '@/sections/FAQs';
import LatestBlogPosts from '@/sections/LatestBlogPosts';
import LatestPosts from '@/sections/LatestPosts';
import MobileApp from '@/sections/MobileApp';
import PricingPlans from '@/sections/PricingPlans';
import PricingV1 from '@/sections/PricingV1';

const Blog = () => {
  return (
    <>
      <LatestBlogPosts />
      <MobileApp />
      <LatestPosts />
      <FAQs />
      <PricingV1 />
      <PricingPlans />
      <MobileApp />
    </>
  );
};

export default Blog;
