'use client';

import MobileApp from '@/sections/MobileApp';
import { useParams } from 'next/navigation';

const PricingDetails = () => {
  const { slug } = useParams();

  return (
    <>
      <section>Pricing Slug: {slug}</section>
      <MobileApp />
    </>
  );
};

export default PricingDetails;
