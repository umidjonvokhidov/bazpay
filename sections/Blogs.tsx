import BlogPost from '@/components/BlogPost';
import Button from '@/components/Button';
import { blogPosts } from '@/constants';

const Blogs = () => {
  return (
    <section className="container-main container-spacing-main">
      <div className="flex-col-center container w-full gap-16">
        <div className="flex w-full items-center justify-between gap-y-6 max-md:flex-col max-md:items-start">
          <div className="flex max-w-[560px] flex-col items-start gap-y-4">
            <div className="border-grey-100 text-grey-600 rounded-3xl border bg-white px-4 py-1.5 font-medium">
              Blog
            </div>
            <h1 className="h-1_5">Our latest News & Resources</h1>
          </div>
          <Button buttonType="secondary" className="h-10 max-md:self-end">
            Browse all articles
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-x-16 gap-y-[35px] max-lg:grid-cols-1">
          {blogPosts.map((post: PostProps, index: number) => (
            <BlogPost blog={post} key={index} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
