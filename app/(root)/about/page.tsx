import AboutUs from '@/sections/AboutUs';
import CoreValues from '@/sections/CoreValues';
import NewsLetter from '@/sections/NewsLetter';
import Stats from '@/sections/Stats';
import Team from '@/sections/Team';
import Blogs from '@/sections/Blogs';

const About = () => {
  return (
    <>
      <AboutUs />
      <Stats type="dark" />
      <CoreValues />
      <Team />
      <NewsLetter />
      <Blogs />
    </>
  );
};

export default About;
