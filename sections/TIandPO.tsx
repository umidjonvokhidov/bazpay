'use client';
import Image from 'next/image';
import CountUp from 'react-countup';

const TIandPO = () => {
  return (
    <section className="container-main container-spacing-main">
      <div className="container-main container">
        <div className="flex flex-col items-center gap-y-4">
          <div className="border-grey-100 bg-background flex items-center gap-x-2 rounded-3xl border px-3 py-2">
            <Image
              src="/assets/icons/zap-fast.svg"
              width={24}
              height={24}
              alt="zap-fast"
            />
            <span className="text-grey-600 text-center text-sm font-medium">
              Total income and payments overview.
            </span>
          </div>
          <h2 className="w-[640px] text-center max-md:w-full">
            Transforming finance - one{' '}
            <span className="text-primary-800">feature</span> at a time
          </h2>
        </div>
        <div className="flex w-full items-stretch justify-center gap-12 max-lg:flex-col">
          <div className="bg-primary-200 group flex flex-col items-center gap-y-8 rounded-2xl p-6">
            <div className="flex flex-col items-center gap-y-4">
              <h5 className="text-center">Current value</h5>
              <h6 className="text-center">
                $
                <CountUp
                  end={23.952}
                  duration={2}
                  decimals={3}
                  enableScrollSpy
                  
                />
                .00
              </h6>
            </div>
            <div className="relative flex flex-row gap-4 max-sm:flex-col">
              <div className="bg-grey-100 flex cursor-pointer items-center rounded-[8px] px-[22px] py-3 shadow transition-shadow hover:shadow-md">
                <Image
                  src="/assets/icons/arrow.svg"
                  width={24}
                  height={24}
                  alt="arrow"
                />
                <p className="font-medium">Transfer</p>
              </div>
              <div className="bg-grey-50 border-grey-100 absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border p-2.5 shadow transition-shadow hover:shadow-md">
                <Image
                  src="/assets/icons/exchange.svg"
                  width={22}
                  height={22}
                  alt="exchange"
                />
              </div>
              <div className="bg-grey-100 flex cursor-pointer items-center rounded-[8px] px-[22px] py-3 shadow transition-shadow hover:shadow-md">
                <Image
                  src="/assets/icons/arrow.svg"
                  width={24}
                  height={24}
                  alt="arrow"
                  className="rotate-180"
                />
                <p className="font-medium">Transfer</p>
              </div>
            </div>
            <div className="bg-grey-50 flex items-center justify-center overflow-hidden rounded-2xl px-[38px] py-[21px]">
              <Image
                src="/assets/images/monthly-revenue.png"
                width={407}
                height={266}
                alt="monthly-revenue"
                className="translate-y-2.5 -rotate-6 transition-transform group-hover:translate-y-0 group-hover:rotate-0"
              />
            </div>
          </div>
          <div className="bg-primary-200 flex-col-center group gap-y-8 rounded-2xl px-8 py-10">
            <div className="bg-grey-50 flex-col-center h-[400px] w-full overflow-hidden rounded-2xl max-md:h-auto">
              <Image
                src="/assets/images/recent-deposits.png"
                width={517}
                height={392}
                alt="recent deposits"
                className="translate-y-16 scale-110 -rotate-6 transition-transform group-hover:translate-y-0 group-hover:rotate-0 max-md:translate-y-0"
              />
            </div>
            <h6 className="max-md: text-center">
              Secure transfers anytime, anywhere
            </h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TIandPO;
