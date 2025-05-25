import { coreValues } from '@/constants';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

const CoreValues = () => {
  return (
    <section className="container-main container-spacing-main">
      <div className="flex-col-center container gap-y-20 max-lg:gap-y-12 max-md:gap-y-8">
        <div className="flex-col-center max-w-[660px] gap-y-6">
          <div className="flex-col-center gap-y-4">
            <div className="border-grey-100 text-grey-600 rounded-3xl border bg-white px-4 py-1.5 font-medium">
              Core Values
            </div>
            <h1 className="h-1_5 text-center">
              What drives BazPay our core{' '}
              <span className="text-primary-800">values</span>
            </h1>
          </div>
          <p className="text-grey-600 text-center">
            At MezPay, our values shape everything we do, ensuring we deliver a
            platform that truly transforms how you manage your finances.
          </p>
        </div>
        <div className="grid grid-cols-7 gap-12 max-xl:grid-cols-2 max-md:grid-cols-1">
          {coreValues.map(
            ({ title, icon, description }: CoreValueProps, index: number) => (
              <div
                key={index}
                className={twMerge(
                  'col-span-2 flex flex-col items-start gap-y-6 max-xl:col-span-1'
                )}
              >
                <Image src={icon} alt={title} width={60} height={60} />
                <div className="flex flex-col items-start gap-y-4">
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </div>
            )
          )}
          <div className="bg-grey-800 relative col-span-3 col-start-3 row-span-2 max-sm:h-[400px] row-start-1 overflow-hidden rounded-3xl max-xl:col-span-2 max-xl:h-[456px] max-md:col-span-1">
            <Image
              src="/assets/images/phone-mockup-white.png"
              alt=""
              height={492}
              width={512}
              className="absolute top-[60px] left-1/2 -translate-x-1/2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
