'use client';

import MobileApp from '@/sections/MobileApp';
import { useParams } from 'next/navigation';

const BlogDetails = () => {
  const { id } = useParams();

  return (
    <>
      <section>Blog ID: {id}</section>
      <MobileApp />
    </>
  );
};

export default BlogDetails;
