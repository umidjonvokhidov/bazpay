import { posts, pricingCardsV1 } from '@/constants';
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${process.env.PUBLIC_URL}/blog/${post.slug}`,
    lastModified: new Date(),
  }));

  const pricingEntries: MetadataRoute.Sitemap = pricingCardsV1.map((card) => ({
    url: `${process.env.PUBLIC_URL}/pricing/${card.slug}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: `${process.env.PUBLIC_URL}/about`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.PUBLIC_URL}/pricing`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.PUBLIC_URL}/contact`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.PUBLIC_URL}/cookies`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.PUBLIC_URL}/features`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.PUBLIC_URL}/home`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.PUBLIC_URL}/license`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.PUBLIC_URL}/privacy-policy`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.PUBLIC_URL}/terms-of-services`,
      lastModified: new Date(),
    },
    ...postEntries,
    ...pricingEntries,
  ];
}
