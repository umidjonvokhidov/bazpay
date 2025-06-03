import FAQs from '@/sections/FAQs';
import LatestBlogPosts from '@/sections/LatestBlogPosts';
import LatestPosts from '@/sections/LatestPosts';
import MobileApp from '@/sections/MobileApp';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
};

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
