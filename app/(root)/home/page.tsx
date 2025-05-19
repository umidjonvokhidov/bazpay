import Blogs from '@/sections/Blogs';
import HomePageHeroV2 from '@/sections/HomePageHeroV2';
import MobileApp from '@/sections/MobileApp';
import PayoutAndTransitions from '@/sections/PayoutAndTransitions';
import PricingV1 from '@/sections/PricingV1';
import SecurityV2 from '@/sections/SecurityV2';
import Stats from '@/sections/Stats';
import Team from '@/sections/Team';

const Home = () => {
  return (
    <>
      <HomePageHeroV2 />
      <Stats />
      <SecurityV2 />
      <PayoutAndTransitions />
      <Team />
      <PricingV1 />
      <MobileApp />
      <Blogs />
    </>
  );
};

export default Home;
