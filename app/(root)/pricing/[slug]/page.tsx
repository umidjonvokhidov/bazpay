import NotFound from '@/app/not-found';
import { pricingCardsV1 } from '@/constants';
import MobileApp from '@/sections/MobileApp';
import PricingDetail from '@/sections/PricingDetail';

import { cache } from 'react';

interface PricingCardPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return pricingCardsV1.map((plan) => ({
    slug: plan.slug,
  }));
}

export async function generateMetadata({ params }: PricingCardPageProps) {
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

export default async function PricingDetails({ params }: PricingCardPageProps) {
  const { slug } = await params;
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
