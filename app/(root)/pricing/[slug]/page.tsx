'use client';

import { useParams } from 'next/navigation';

const PricingDetails = () => {
  const { slug } = useParams();

  return <div>Pricing Slug: {slug}</div>;
};

export default PricingDetails;