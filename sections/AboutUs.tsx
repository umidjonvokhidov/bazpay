import Button from '@/components/Button';
import Image from 'next/image';

const AboutUs = () => {
  return (
    <section className="container-main container-spacing-main">
      <div className="flex-col-center container gap-y-20 max-lg:gap-y-12 max-md:gap-y-8">
        <div className="flex-col-center max-w-[768px] gap-y-8 px-6">
          <div className="flex-col-center gap-y-6">
            <div className="flex-col-center gap-y-4">
              <div className="bg-background text-grey-600 rounded-3xl border border-[#ECFFCD] px-4 py-1.5 text-sm leading-[20px] font-semibold">
                About us
              </div>
              <h1 className="h-1_5 text-center">
                Say hi to the awesome crew at{' '}
                <span className="text-primary-800">BazPay!</span>
              </h1>
            </div>
            <p className="text-grey-600 text-center">
              Welcome to FinTech Solutions, where our core principles guide us
              in creating an innovative platform that revolutionizes your
              financial management experience.
            </p>
          </div>
          <Button buttonType="secondary" href="/contact" className="">
            Contact Us
          </Button>
        </div>
        <Image
          src="/assets/images/about-us-image.jpg"
          alt="about-us-image"
          width={1280}
          height={700}
          sizes="100vw"
          className="h-[800px] w-full rounded-[56px] object-cover object-center max-lg:h-auto"
        />
      </div>
    </section>
  );
};

export default AboutUs;
