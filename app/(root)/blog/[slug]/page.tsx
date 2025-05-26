'use client';

import MobileApp from '@/sections/MobileApp';
import { useParams } from 'next/navigation';

const BlogDetails = () => {
  const { slug } = useParams();

  return (
    <>
      <section>Blog Slug: {slug}</section>
      <MobileApp />
    </>
  );
};

export default BlogDetails;
