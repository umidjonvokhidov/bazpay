import Button from '@/components/Button';
import Image from 'next/image';

const HomePageHeroV2 = () => {
  return (
    <header className="container-main flex-col-center px-20 py-16 max-lg:px-16 max-lg:py-12 max-md:px-10 max-md:py-8">
      <div className="bg-grey-800 container grid min-h-[600px] grid-cols-2 items-center justify-between gap-20 rounded-2xl bg-[url('/assets/images/hero-grid.png'),url('/assets/images/hero-pattern-1.png')] bg-contain bg-center bg-repeat px-10 py-12 max-lg:flex max-lg:flex-col-reverse max-md:gap-16 max-sm:gap-8">
        <div className="flex w-full max-w-[620px] flex-col items-start gap-y-10">
          <div className="flex flex-col items-start gap-y-8">
            <h1 className="text-grey-50 max-md:text-center">
              Check out our travel cards!
            </h1>
            <p className="text-grey-100 max-md:text-center">
              At MezPay, we believe managing your money should be easy, safe,
              and accessible. Our platform combines the best tools for your
              finances.
            </p>
          </div>
          <div className="flex w-full items-center justify-start gap-6 max-md:justify-center max-sm:flex-col max-sm:items-center">
            <Button buttonType="secondary" href="/contact" className='max-sm:w-[80%]'>
              Contact Us
            </Button>
            <Button buttonType="primary" href="/pricing" className='max-sm:w-[80%]'>
              Pricing
            </Button>
          </div>
        </div>
        <Image
          src="/assets/images/cards.png"
          alt="cards"
          width={558}
          sizes="100vw"
          height={500}
          className="-rotate-6 max-lg:w-[70%] max-md:w-full"
        />
      </div>
    </header>
  );
};

export default HomePageHeroV2;
