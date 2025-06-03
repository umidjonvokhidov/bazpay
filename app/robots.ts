import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/cookies',
        '/license',
        '/privacy-policy',
        '/terms-of-services',
      ],
    },
    sitemap: `${process.env.PUBLIC_URL}/sitemap.xml`,
  };
}
