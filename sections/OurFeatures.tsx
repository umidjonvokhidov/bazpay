import Button from '@/components/Button';
import Image from 'next/image';

const OurFeatures = () => {
  return (
    <section className="container-main container-spacing-main">
      <div className="flex-col-center bg-primary-200 container gap-y-20 rounded-3xl px-10 py-12">
        <div className="flex w-full items-center justify-between gap-4 max-lg:flex-col">
          <h1 className="text-grey-800 h-1_5">Our features</h1>
          <p className="w-[506px] max-lg:w-full max-lg:text-center">
            Explore the powerful tools MezPay offers to simplify and enhance
            your financial experience.
          </p>
        </div>
        <div className="flex-col-center w-full gap-y-16">
          <div className="flex-col-center w-full gap-8">
            <div className="grid w-full grid-cols-5 justify-stretch gap-8  max-lg:flex max-lg:flex-col">
              <div className="white-card flex items-center gap-8 max-md:flex-col">
                <div className="col-span-3 flex flex-col items-start gap-y-6 max-md:items-center">
                  <h6 className="max-md:text-center">Real-time sync</h6>
                  <p className="max-md:text-center">
                    Instantly sync your transactions and balances across all
                    devices. Always stay updated with your latest financial
                    data.
                  </p>
                </div>
                <Image
                  src="/assets/images/real-time-sync-chart.png"
                  width={238}
                  height={230}
                  alt="realtime sync chart"
                />
              </div>
              <div className="white-card col-span-2 flex w-full flex-col items-start gap-8 max-lg:flex-row max-md:flex-col">
                <div className="flex flex-col gap-y-4">
                  <h6 className="max-md:text-center">AI Budget Tools</h6>
                  <p className="max-md:text-center">
                    Track your spending and savings with our AI tools for
                    personalized insights.
                  </p>
                </div>
                <Image
                  src="/assets/images/ai-budget-tools-chart.png"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-auto w-full"
                  alt="ai budget tools chart"
                />
              </div>
            </div>
            <div className="grid w-full grid-cols-2 gap-8 max-lg:grid-cols-1">
              <div className="white-card flex-col-center relative col-span-1 gap-y-[60px] overflow-x-hidden pb-[260px]">
                <div className="flex flex-col items-center justify-start gap-y-4">
                  <h6 className="max-md:text-center">Built-in integrations</h6>
                  <p className="w-[400px] text-center max-md:w-full">
                    Manage all your bank accounts in one dashboard for easier
                    finances.
                  </p>
                </div>
                <Image
                  src="/assets/images/integrations.svg"
                  width={796}
                  height={152}
                  className="absolute bottom-[60px] left-1/2 h-auto min-w-[796px] max-md:min-w-[600px] -translate-x-1/2"
                  alt="ai budget tools chart"
                />
              </div>
              <div className="white-card flex-col-center col-span-1 gap-y-[60px] max-md:gap-y-7">
                <Image
                  src="/assets/images/qr-code-scan.png"
                  width={373}
                  height={180}
                  sizes="100vw"
                  className=""
                  alt="qr code scan"
                />
                <div className="flex flex-col items-center justify-start gap-y-4">
                  <h6 className="max-md:text-center">Payment Solutions</h6>
                  <p className="w-[400px] text-center max-md:w-full">
                    Easily connect globally. MezPay supports 100+ countries with
                    multi-currency options.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-6 max-md:gap-4 max-sm:flex-col items-center">
            <Button href="/contact" buttonType="secondary">
              Contact Us
            </Button>
            <Button href="/pricing" buttonType="primary">
              Pricing
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurFeatures;
