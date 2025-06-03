'use client';
import Button from '@/components/Button';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useState } from 'react';

const PricingDetail = ({ pricingCard }: { pricingCard: PricingCardProps }) => {
  const [pricingPlan, setPricingPlan] = useState<'' | 'Monthly' | 'Annually'>(
    ''
  );
  return (
    <section className="container-main container-spacing-main">
      <div className="container flex flex-row items-start justify-between gap-20 max-lg:flex-col-reverse">
        <div className="flex flex-col items-start gap-y-16">
          <div className="flex flex-col gap-y-4">
            {' '}
            <h4 className="text-[56px] leading-tight font-bold max-lg:text-4xl max-lg:leading-[48px]">
              {pricingCard?.plan}
            </h4>
            <p>This plan grants you access to exclusive features</p>
            <ul className="flex list-disc flex-col gap-y-4 pl-6">
              {pricingCard?.features.map((feature: string, index: number) => (
                <li key={index} className="ml-2">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-y-8">
            <h6 className="text-grey-600 text-3xl leading-[38px]">
              Inclusive plans
            </h6>
            <div
              className="flex flex-col items-start gap-y-6"
              dangerouslySetInnerHTML={
                pricingCard?.inclusive
                  ? { __html: pricingCard?.inclusive }
                  : undefined
              }
            ></div>
          </div>
        </div>
        <div className="shadow-3xl flex min-w-[400px] flex-col gap-y-6 rounded-2xl bg-white px-10 py-12 max-lg:w-full max-lg:min-w-auto">
          <div className="flex w-full flex-col items-start gap-y-6">
            <div className="flex flex-col items-start gap-y-4">
              <p>Get Your Plan Today</p>
              <h2>
                ${' '}
                {pricingPlan !== 'Annually'
                  ? pricingCard?.pricePerMonth.toFixed(2)
                  : pricingCard?.pricePerMonth &&
                    (pricingCard?.pricePerMonth * 12 * 0.8).toFixed(2)}{' '}
                USD
              </h2>
              <div className="flex flex-col items-start gap-y-3">
                <p className="font-bold">{pricingPlan}</p>
                <p className="text-base leading-6">
                  or ${' '}
                  {pricingPlan === 'Annually'
                    ? pricingCard?.pricePerMonth.toFixed(2)
                    : pricingCard?.pricePerMonth &&
                      (pricingCard?.pricePerMonth * 12 * 0.8).toFixed(2)}{' '}
                  USD {pricingPlan !== 'Annually' ? 'yearly' : 'monthly'}
                </p>
              </div>
            </div>
            <Select
              value={pricingPlan}
              onValueChange={(e: string) =>
                setPricingPlan(e as '' | 'Monthly' | 'Annually')
              }
            >
              <SelectTrigger className="h-[52px] w-full rounded-none border-b border-none">
                <SelectValue placeholder="Select Plan Duration" />
              </SelectTrigger>
              <SelectContent className="rounded-sm">
                <SelectItem value="Annually" className="rounded-sm">
                  Annually
                </SelectItem>
                <SelectItem value="Monthly" className="rounded-sm">
                  Monthly
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button buttonType="secondary">Add to Cart</Button>
        </div>
      </div>
    </section>
  );
};

export default PricingDetail;
