'use client';

import { useParams } from 'next/navigation';

const BlogDetails = () => {
  const { id } = useParams();

  return <div>Blog ID: {id}</div>;
};

export default BlogDetails;