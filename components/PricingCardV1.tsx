import { twMerge } from 'tailwind-merge';
import Button from './Button';
import Image from 'next/image';

const PricingCardV1 = ({ pricingCard }: { pricingCard: PricingCardProps }) => {
  const isBusinessPlan = pricingCard.plan === 'Business plan';

  return (
    <div className="drop-shadow-card flex flex-col rounded-2xl bg-white max-xl:flex-row max-lg:flex-col">
      <div
        className={twMerge(
          'flex-col-center w-full gap-y-8 rounded-2xl p-8 max-xl:w-auto',
          isBusinessPlan ? 'bg-grey-800' : 'bg-grey-600'
        )}
      >
        <div className="flex w-full max-xl:min-w-[300px] max-lg:min-w-auto flex-col items-start gap-y-4">
          {isBusinessPlan ? (
            <div className="flex w-full items-center justify-between">
              <p className="text-grey-50">{pricingCard.plan}</p>
              <div className="bg-primary-800 text-grey-50 rounded-full px-3 py-1">
                Popular
              </div>
            </div>
          ) : (
            <h5 className="text-grey-50 font-normal">{pricingCard.plan}</h5>
          )}
          <div className="flex w-full items-end justify-start gap-x-1">
            <h1 className="h-1_5 text-grey-50 flex items-center">
              {' '}
              <span>$</span>
              <span>{pricingCard.pricePerMonth}</span>
            </h1>
            <p className="text-grey-50 pb-2 text-base leading-6">per month</p>
          </div>
          <h5 className="text-grey-50 text-base leading-6 font-normal">
            {pricingCard.description}
          </h5>
        </div>
        <Button buttonType="secondary" className="h-10 w-full" href={`pricing/${pricingCard.slug}`}>
          Get Started
        </Button>
      </div>
      <div className="flex flex-col gap-6 p-8">
        <div className="flex flex-col items-start">
          <h5 className="font-semibold">FEATURES</h5>
          <h5 className="text-grey-600 max-w-[80%] leading-6 font-normal">
            {pricingCard.plan} grants you access to exclusive features
          </h5>
        </div>
        <div className="flex w-full flex-col gap-y-4">
          {pricingCard.features.map((feature: string, index: number) => (
            <div key={index} className="flex items-center gap-x-3">
              <Image
                src="/assets/icons/check-circle.svg"
                alt="check"
                width={24}
                height={24}
              />
              <h5 className="text-grey-600 max-w-[80%] leading-6 font-normal">
                {feature}
              </h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingCardV1;
