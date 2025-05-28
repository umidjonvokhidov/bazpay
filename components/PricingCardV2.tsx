import { twMerge } from 'tailwind-merge';
import Button from './Button';

interface PricingCardsV1Props {
  pricingCard: PricingCardProps;
  pricingPlan: 'monthly' | 'annually';
}

const PricingCardV2 = ({ pricingCard, pricingPlan }: PricingCardsV1Props) => {
  const { plan, description, features, pricePerMonth } = pricingCard;
  const isBusinessPlan = plan === 'Business plan';

  return (
    <div
      className={twMerge(
        'flex w-full flex-col rounded-2xl',
        isBusinessPlan ? 'bg-grey-800' : 'bg-transparent'
      )}
    >
      <div className="flex items-center justify-between gap-y-4 p-8 max-lg:flex-col max-lg:items-start max-md:flex-row max-md:items-center max-sm:flex-col max-sm:items-start">
        <div className="flex flex-col items-start gap-y-1">
          <h3 className={isBusinessPlan ? 'text-grey-50' : 'text-grey-600'}>
            {plan}{' '}
            {isBusinessPlan && (
              <span className="text-grey-50 border-border rounded-full border px-2.5 py-0.5">
                Popular
              </span>
            )}
          </h3>
          <p className={isBusinessPlan ? 'text-grey-50' : 'text-grey-600'}>
            {description}
          </p>
        </div>
        <div className="flex items-center gap-x-0.5">
          <svg
            width="13"
            height="23"
            viewBox="0 0 13 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.504 3.75967L5.024 0.519671H7.64L7.16 3.75967H5.504ZM5.024 22.2397L5.504 18.9997H7.16L7.64 22.2397H5.024ZM6.464 19.2637C5.456 19.2637 4.552 19.1597 3.752 18.9517C2.968 18.7437 2.304 18.4397 1.76 18.0397C1.216 17.6237 0.808 17.1117 0.536 16.5037C0.264 15.8797 0.136 15.1597 0.152 14.3437L2.456 13.7437C2.424 14.5437 2.576 15.1997 2.912 15.7117C3.248 16.2237 3.736 16.6077 4.376 16.8637C5.016 17.1037 5.752 17.2237 6.584 17.2237C7.4 17.2237 8.08 17.1277 8.624 16.9357C9.184 16.7277 9.608 16.4557 9.896 16.1197C10.2 15.7677 10.352 15.3677 10.352 14.9197C10.352 14.4077 10.176 13.9997 9.824 13.6957C9.472 13.3917 9 13.1517 8.408 12.9757C7.832 12.7997 7.184 12.6317 6.464 12.4717C5.728 12.3117 5 12.1357 4.28 11.9437C3.576 11.7357 2.928 11.4717 2.336 11.1517C1.76 10.8157 1.296 10.3917 0.944 9.87967C0.592 9.35167 0.416 8.68767 0.416 7.88767C0.416 6.97567 0.648 6.18367 1.112 5.51167C1.592 4.83967 2.264 4.31967 3.128 3.95167C3.992 3.58367 5.024 3.39967 6.224 3.39967C7.408 3.39967 8.448 3.58367 9.344 3.95167C10.256 4.30367 10.968 4.83167 11.48 5.53567C11.992 6.22367 12.256 7.06367 12.272 8.05567L9.896 8.63167C9.912 8.10367 9.832 7.63967 9.656 7.23967C9.48 6.83967 9.224 6.50367 8.888 6.23167C8.568 5.95967 8.176 5.75967 7.712 5.63167C7.264 5.50367 6.76 5.43967 6.2 5.43967C5.528 5.43967 4.944 5.53567 4.448 5.72767C3.952 5.90367 3.568 6.16767 3.296 6.51967C3.024 6.85567 2.888 7.24767 2.888 7.69567C2.888 8.22367 3.08 8.65567 3.464 8.99167C3.864 9.31167 4.384 9.56767 5.024 9.75967C5.68 9.93567 6.384 10.1037 7.136 10.2637C7.808 10.4077 8.48 10.5837 9.152 10.7917C9.824 10.9837 10.432 11.2397 10.976 11.5597C11.536 11.8797 11.984 12.3037 12.32 12.8317C12.656 13.3597 12.824 14.0317 12.824 14.8477C12.824 15.7437 12.584 16.5277 12.104 17.1997C11.624 17.8557 10.912 18.3677 9.968 18.7357C9.024 19.0877 7.856 19.2637 6.464 19.2637Z"
              fill={isBusinessPlan ? '#FAFAFA' : '#535862'}
            />
          </svg>
          <h2 className={isBusinessPlan ? 'text-grey-50' : 'text-grey-600'}>
            {pricingPlan === 'monthly'
              ? pricePerMonth
              : (pricePerMonth * 0.8 * 12).toFixed(0)}{' '}
          </h2>
          <p className={isBusinessPlan ? 'text-grey-50' : 'text-grey-600'}>
            {pricingPlan === 'monthly' ? 'per month' : 'per year'}
          </p>
        </div>
      </div>
      <div
        className={twMerge(
          'flex-col-center gap-6 border-t border-b p-8',
          isBusinessPlan ? 'border-grey-700' : 'border-[#E9EAEB]'
        )}
      >
        <div className="flex w-full flex-col items-start gap-y-1">
          <h5 className={isBusinessPlan ? 'text-grey-50' : 'text-grey-600'}>
            FEATURES
          </h5>
          {isBusinessPlan ? (
            <p
              className={twMerge(
                isBusinessPlan ? 'text-grey-50' : 'text-grey-600',
                'text-base leading-6'
              )}
            >
              Customized solutions for larger organizations.
            </p>
          ) : (
            <p
              className={twMerge(
                isBusinessPlan ? 'text-grey-50' : 'text-grey-600',
                'text-base leading-6'
              )}
            >
              Everything in our{' '}
              <span className="text-primary-800">free plan</span> plus
            </p>
          )}
        </div>
        <div className="grid w-full grid-cols-2 gap-x-8 gap-y-4 max-lg:grid-cols-1">
          {features.map((value: string, index: number) => (
            <div key={index} className="flex items-center gap-3">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 12.7637C0 6.13626 5.37258 0.763672 12 0.763672C18.6274 0.763672 24 6.13626 24 12.7637C24 19.3911 18.6274 24.7637 12 24.7637C5.37258 24.7637 0 19.3911 0 12.7637Z"
                  fill={isBusinessPlan ? '#252B37' : '#FBFEF7'}
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.0964 8.15383L9.93638 15.0638L8.03638 13.0338C7.68638 12.7038 7.13638 12.6838 6.73638 12.9638C6.34638 13.2538 6.23638 13.7638 6.47638 14.1738L8.72638 17.8338C8.94638 18.1738 9.32638 18.3838 9.75638 18.3838C10.1664 18.3838 10.5564 18.1738 10.7764 17.8338C11.1364 17.3638 18.0064 9.17383 18.0064 9.17383C18.9064 8.25383 17.8164 7.44383 17.0964 8.14383V8.15383Z"
                  fill={isBusinessPlan ? '#BCFC6A' : '#181D27'}
                />
              </svg>
              <p
                className={twMerge(
                  isBusinessPlan ? 'text-grey-50' : 'text-grey-600',
                  'text-base leading-6'
                )}
              >
                {value}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="p-8">
        <Button
          href={`pricing/${pricingCard.slug}`}
          buttonType={isBusinessPlan ? 'secondary' : 'primary'}
          className={!isBusinessPlan ? 'border-grey-800 bg-transparent' : ''}
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default PricingCardV2;
