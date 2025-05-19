import Button from '@/components/Button';
import Image from 'next/image';

const HomePageHero = () => {
  return (
    <section className="container-spacing-main container-main">
      <div className="container-main container">
        <div className="flex w-full items-center justify-between gap-x-5 max-xl:flex-col max-xl:gap-y-5">
          <h1 className="w-[750px] max-xl:text-center max-md:w-auto">
            Simplify your money game with{' '}
            <span className="text-primary-800">BazPay!</span>
          </h1>
          <div className="flex flex-col items-start justify-center gap-y-10 max-xl:items-center">
            <p className="w-[500px] max-xl:text-center max-sm:w-auto">
              Check out our all-in-one solution for easy transactions, quick
              money transfers, and total financial control!
            </p>
            <div className="flex flex-row items-center justify-start gap-x-6 max-sm:flex-col max-sm:gap-y-6">
              <Button buttonType="secondary">
                <Image
                  src="/assets/icons/apple.svg"
                  width={24}
                  height={24}
                  alt="apple"
                />
                <span>Download for IOS</span>
              </Button>
              <Button buttonType="primary">
                <Image
                  src="/assets/icons/google.svg"
                  width={24}
                  height={24}
                  alt="google"
                />
                <span>Download for Android</span>
              </Button>
            </div>
          </div>
        </div>
        <Image
          src="/assets/images/homepage-hero.png"
          alt="hero-image"
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto w-full"
        />
      </div>
    </section>
  );
};

export default HomePageHero;
