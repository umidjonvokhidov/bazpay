'use client';

import BlogCard from '@/components/BlogCard';
import CategoryFilter from '@/components/CategoryFilter';
import { posts } from '@/constants';
import { useSearchParams } from 'next/navigation';

const LatestPosts = () => {
  const categoryOptions = [
    { label: 'All', value: '' },
    { label: 'Articles', value: 'articles' },
    { label: 'Resources', value: 'resources' },
    { label: 'News', value: 'news' },
  ];

  const searchParams = useSearchParams();
  const selectedFilter = searchParams.get('category') || '';

  const filteredPosts = posts
    .slice(2, -4)
    .filter((post: BlogPostProps) =>
      !selectedFilter ? true : post.filter === selectedFilter
    );

  return (
    <section className="container-main px-20 py-28 max-lg:px-16 max-lg:py-20 max-md:px-8 max-md:py-16 max-sm:px-4 max-sm:py-12">
      <div className="flex-col-center container gap-y-20">
        <div className="flex w-full items-center justify-between max-lg:flex-col max-lg:items-start max-lg:gap-y-8">
          <h2>Latest posts</h2>

          <CategoryFilter paramKey="category" options={categoryOptions} />
        </div>
        <div className="grid w-full grid-cols-3 gap-8 max-xl:gap-4 max-lg:grid-cols-2 max-md:grid-cols-1">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post: BlogPostProps, index: number) => (
              <BlogCard key={index} post={post} />
            ))
          ) : (
            <div className="col-span-full py-12 text-center text-gray-500">
              No posts found for the selected filter.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LatestPosts;
