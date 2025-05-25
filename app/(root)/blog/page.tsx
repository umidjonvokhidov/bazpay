import FAQs from '@/sections/FAQs';
import LatestBlogPosts from '@/sections/LatestBlogPosts';
import LatestPosts from '@/sections/LatestPosts';
import MobileApp from '@/sections/MobileApp';

const Blog = () => {
  return (
    <>
      <LatestBlogPosts />
      <MobileApp />
      <LatestPosts />
      <FAQs />
    </>
  );
};

export default Blog;
