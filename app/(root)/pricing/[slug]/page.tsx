import NotFound from '@/app/not-found';
import { pricingCardsV1 } from '@/constants';
import MobileApp from '@/sections/MobileApp';
import PricingDetail from '@/sections/PricingDetail';
import { Metadata } from 'next';

import { cache } from 'react';

export async function generateStaticParams() {
  return pricingCardsV1.map((plan) => ({
    slug: plan.slug,
  }));
}

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = params;
  const pricingCard = pricingCardV1(slug);

  return {
    title: pricingCard ? pricingCard.plan : 'Pricing Plan Not Found',
    description: pricingCard
      ? pricingCard.description
      : 'The requested pricing plan does not exist.',
  };
}

const pricingCardV1 = cache((slug: string) => {
  return pricingCardsV1.find((plan) => plan.slug === slug);
});

export default async function PricingDetails({ params }: PageProps) {
  const { slug } = params;
  const pricingCard = pricingCardV1(slug);

  if (!pricingCard) {
    return (
      <NotFound
        title="Pricing Plan Not Found"
        description="The requested pricing plan does not exist."
        href="/pricing"
        hrefTitle="Go back to Pricing"
      />
    );
  }

  return (
    <>
      <PricingDetail pricingCard={pricingCard} />
      <MobileApp />
    </>
  );
}
