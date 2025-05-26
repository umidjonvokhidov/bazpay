import LatestBlogPost from '@/components/LatestBlogPost';
import { posts } from '@/constants';

const LatestBlogPosts = () => {
  return (
    <section className="container-main container-spacing-main">
      <div className="flex-col-center container gap-y-20">
        <div className="flex-col-center w-full max-w-[680px] gap-y-8">
          <div className="flex-col-center gap-y-3">
            <div className="bg-background text-grey-600 rounded-3xl border border-[#ECFFCD] px-4 py-1.5 text-sm leading-[20px] font-medium">
              Latest posts
            </div>
            <h1 className="h-1_5 text-center">Latest blog posts</h1>
          </div>
          <p className="text-grey-600 text-center">
            Discover the latest trends, insights, and tips in the world of
            finance and technology with the MezPay Blog.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 max-lg:grid-cols-1">
          {posts.slice(0, 2).map((blog: BlogPostProps, index: number) => (
            <LatestBlogPost blog={blog} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestBlogPosts;
