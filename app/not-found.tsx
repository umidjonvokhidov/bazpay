import Button from '@/components/Button';
import Image from 'next/image';

const NotFound = () => {
  return (
    <section className="flex-col-center h-screen w-full">
      <Image
        src="/assets/images/404.png"
        width={500}
        height={238}
        alt="404"
        sizes='100vw'
        className="mx-[95px] my-[112px] max-sm:scale-75"
      />
      <div className="flex-col-center gap-y-6 p-6">
        <div className="flex-col-center gap-y-6">
          <h2 className="text-grey-800 text-6xl leading-[72px] font-semibold">
            Oops !
          </h2>
          <p className='text-center'>Page not found, please try again or go back Home.</p>
        </div>
        <Button href="/" buttonType="secondary">
          Go to home
        </Button>
      </div>
    </section>
  );
};

export default NotFound;
