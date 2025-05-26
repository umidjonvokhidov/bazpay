import Image from 'next/image';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

const BlogPost = ({ blog, index }: { blog: PostProps; index: number }) => {
  return (
    <div
      className={twMerge(
        'flex flex-col gap-6',
        index === 0 ? 'row-span-3 max-lg:row-span-1' : 'border-b border-grey-300'
      )}
    >
      {index === 0 && blog.image !== '' && (
        <Image
          src={blog.image}
          alt={blog.title}
          width={0}
          height={0}
          sizes="100vw"
          className="h-full w-full rounded-3xl object-cover"
        />
      )}
      <div className="flex flex-col gap-y-2">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            {blog.tags.map((tag: string, index: number) => (
              <p
                key={index}
                className="border-grey-200 text-grey-600 rounded-4xl border px-4 py-1 text-base leading-6"
              >
                {tag}
              </p>
            ))}
          </div>
          <Link href={blog.path} className="flex items-center gap-2">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.25568 13.5189L0.696023 11.9507L10.1477 2.48198H2.90341L2.92045 0.325727H13.8722V11.286H11.6989L11.7159 4.04164L2.25568 13.5189Z"
                fill="#6BC33F"
              />
            </svg>
          </Link>
        </div>
        <h4 className="font-semibold max-w-[480px]">{blog.title}</h4>
      </div>
    </div>
  );
};

export default BlogPost;
