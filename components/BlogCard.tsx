import { formatDuration } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

const BlogCard = ({ post }: { post: BlogPostProps }) => {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="border-grey-100 flex flex-col overflow-hidden rounded-3xl border bg-white"
    >
      <div className="bg-primary-200 relative h-[300px] w-full overflow-hidden max-xl:h-[200px] max-md:h-[300px]">
        {post.imageType === 'contain' ? (
          <Image
            src={post.image}
            alt={post.title}
            width={0}
            height={0}
            sizes="100vw"
            className="absolute top-5 left-1/2 h-auto w-4/5 -translate-x-1/2"
          />
        ) : (
          <Image
            src={post.image}
            alt={post.title}
            width={0}
            height={0}
            sizes="100vw"
            className="h-full w-full object-cover"
          />
        )}
      </div>
      <div className="flex flex-col gap-4 px-4 py-8">
        <div className="flex items-center justify-start gap-x-4">
          <p className="text-grey-600 border-grey-200 rounded-4xl border px-3.5 py-1 text-base leading-6">
            {post.category}
          </p>
          <p className="text-grey-600 text-base leading-6">
            {formatDuration(post.duration)} read
          </p>
        </div>
        <h4 className="font-semibold">{post.title}</h4>
      </div>
    </Link>
  );
};

export default BlogCard;
