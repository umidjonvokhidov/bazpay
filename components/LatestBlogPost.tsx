import Image from 'next/image';
import Link from 'next/link';

const LatestBlogPost = ({ blog }: { blog: BlogPostProps }) => {
  return (
    <div className="flex gap-5 odd:flex-col even:flex-col-reverse max-lg:even:flex-col">
      <Image
        src={blog.image}
        alt={blog.title}
        width={0}
        height={0}
        sizes="100vw"
        className="row-span-2 h-[400px] w-full rounded-2xl bg-white object-cover"
      />
      <div className="border-grey-100 flex flex-col items-start gap-y-6 rounded-2xl border bg-white px-4 py-5">
        <div className="flex flex-col items-start gap-y-2">
          <h5 className="font-semibold">
            {new Date(blog.date).toLocaleDateString('en-GB', {
              day: '2-digit',
              month: 'short',
              year: 'numeric',
            })}
          </h5>
          <Link
            href={`/blog/${blog.slug}`}
            className="flex w-full items-center justify-between"
          >
            <h3>{blog.title}</h3>
            <Image
              src="/assets/icons/arrow-up-right.svg"
              alt="arrow"
              width={24}
              height={24}
              className=""
            />
          </Link>
          <p className="text-base">{blog.description}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {blog.tags.map((tagName: string, index: number) => (
            <div
              className="nth-[1]:text-grey-600 nth-[2]:text-grey-600 nth-[3]:text-primary-800 rounded-full px-2.5 py-0.5 nth-[1]:bg-[#F9F5FF] nth-[2]:bg-[#EEF4FF] nth-[3]:bg-[#FDF2FA]"
              key={index}
            >
              {tagName}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestBlogPost;
