import PricingCardV1 from '@/components/PricingCardV1';
import { pricingCardsV1 } from '@/constants';

const PricingV1 = () => {
  return (
    <section className="container-main px-10 py-24 max-xl:px-8 max-xl:py-20 max-lg:px-6 max-lg:py-16 max-md:px-4 max-md:py-12">
      <div className="bg-primary-200 flex-col-center container gap-y-20 rounded-3xl px-10 py-16 max-xl:px-8 max-xl:py-12 max-lg:px-6 max-lg:py-10 max-md:px-4 max-md:py-8">
        <div className="flex-col-center gap-y-3">
          <div className="bg-background text-grey-600 rounded-3xl border border-[#ECFFCD] px-4 py-1.5 text-sm leading-[20px] font-medium">
            Pricing
          </div>
          <h2 className="w-full max-w-3xl text-center font-medium">
            Give it a shot for free and take charge of
            <span className="text-primary-800"> your finances!</span>
          </h2>
        </div>
        <div className="grid w-full grid-cols-3 gap-8 max-xl:grid-cols-1">
          {pricingCardsV1.map(
            (pricingCard: PricingCardProps, index: number) => (
              <PricingCardV1 pricingCard={pricingCard} key={index} />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default PricingV1;
