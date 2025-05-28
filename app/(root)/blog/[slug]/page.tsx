'use client';

import { posts } from '@/constants';
import MobileApp from '@/sections/MobileApp';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { twMerge } from 'tailwind-merge';

const BlogDetails = () => {
  const { slug } = useParams();
  const blog = posts.find((post) => post.slug === slug);

  return (
    <>
      <section className="container-main container-spacing-main">
        <div className="post-details-container container max-w-5xl">
          {blog && (
            <div className="flex flex-col items-start gap-y-6">
              <div className="flex items-center gap-x-6">
                <p className="">{blog.category}</p>
                <p className="">
                  {blog.date &&
                    new Date(blog.date).toLocaleDateString('en-US', {
                      weekday: 'long',
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                </p>
              </div>
              <h1>{blog.title}</h1>
            </div>
          )}
          <div className="bg-primary-200 my-16 h-[600px] w-full max-w-5xl overflow-hidden rounded-[56px] max-lg:h-[500px] max-md:h-[400px] max-sm:h-[300px]">
            <Image
              src={blog?.image || ''}
              alt={blog?.title || 'Blog Image'}
              width={0}
              height={0}
              sizes="100vw"
              className={twMerge(
                'rounded-[56px]',
                blog?.imageType === 'cover'
                  ? 'h-full w-full object-cover'
                  : 'm-auto mt-16 h-auto w-3/4 object-contain'
              )}
            />
          </div>
          <div
            dangerouslySetInnerHTML={
              blog?.details ? { __html: blog.details } : undefined
            }
          />
        </div>
      </section>
      <MobileApp />
    </>
  );
};

export default BlogDetails;
