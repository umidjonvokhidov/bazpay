import Blogs from '@/sections/Blogs';
import MobileApp from '@/sections/MobileApp';
import PayoutAndTransitions from '@/sections/PayoutAndTransitions';
import Team from '@/sections/Team';
import TIandPO from '@/sections/TIandPO';

const Features = () => {
  return (
    <>
      <PayoutAndTransitions />
      <TIandPO />
      <Team />
      <MobileApp />
      <Blogs />
    </>
  );
};

export default Features;
