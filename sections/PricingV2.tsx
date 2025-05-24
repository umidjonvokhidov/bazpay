'use client';

import PricingCardV2 from '@/components/PricingCardV2';
import { pricingCardsV2 } from '@/constants';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

const PricingV2 = () => {
  const [pricingPlan, setPricingPlan] = useState<'monthly' | 'annually'>(
    'monthly'
  );

  return (
    <section className="container-main container-spacing-main">
      <div className="flex-col-center container gap-y-20">
        <div className="flex-col-center gap-y-12">
          <div className="flex-col-center gap-y-8">
            <div className="flex-col-center gap-y-3">
              <div className="bg-background text-grey-600 rounded-3xl border border-[#ECFFCD] px-4 py-1.5 text-sm leading-[20px] font-medium">
                Pricing
              </div>
              <h1 className="h-1_5 text-center">
                Plans that fit{' '}
                <span className="text-primary-800">your scale</span>
              </h1>
            </div>
            <p className="text-grey-600 text-center">
              Simple, transparent pricing that grows with you. Try any plan free
              for 30 days.
            </p>
          </div>
          <div className="border-grey-100 bg-background flex items-center justify-center gap-2 rounded-3xl p-3 max-sm:flex-col">
            <div
              onClick={() => setPricingPlan('monthly')}
              className={twMerge(
                'cursor-pointer rounded-3xl px-4 py-2.5 text-base leading-6',
                pricingPlan === 'monthly'
                  ? 'bg-grey-800 text-white'
                  : 'text-grey-800 bg-transparent'
              )}
            >
              Monthly billing
            </div>
            <div
              onClick={() => setPricingPlan('annually')}
              className={twMerge(
                'flex cursor-pointer items-center gap-x-1 rounded-3xl px-4 py-2.5 text-base leading-6',
                pricingPlan === 'annually'
                  ? 'bg-grey-800 text-white'
                  : 'text-grey-800 bg-transparent'
              )}
            >
              <span>Annual billing</span>
              <span className="border-grey-100 text-grey-800 rounded-full border bg-[#FAFAFA] px-2.5 py-0.5">
                Save 20%
              </span>
            </div>
          </div>
        </div>
        <div className="bg-primary-200 flex w-full items-stretch max-md:flex-col rounded-3xl px-6 py-8 max-lg:px-4 max-lg:py-6">
          {pricingCardsV2.map((pricingCard: PricingCardProps) => (
            <PricingCardV2
              key={pricingCard.plan}
              pricingCard={pricingCard}
              pricingPlan={pricingPlan}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingV2;
