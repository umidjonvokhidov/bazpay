## Next.js Route Utilities

### robots
- Source: `app/robots.ts`
- **Signature**: `robots(): MetadataRoute.Robots`
- **Description**: Generates `robots.txt` rules and links the sitemap.
- Uses `process.env.BASE_URL` to compose absolute URLs.

Example `robots.txt` output:
```txt
User-agent: *
Allow: /
Disallow: /cookies
Disallow: /license
Disallow: /privacy-policy
Disallow: /terms-of-services
Sitemap: https://your-domain.com/sitemap.xml
```

### sitemap
- Source: `app/sitemap.ts`
- **Signature**: `sitemap(): Promise<MetadataRoute.Sitemap>`
- **Description**: Builds a sitemap using static routes plus entries derived from `constants/posts` and `constants/pricingCardsV1`.
- Uses `process.env.BASE_URL`.

Example usage: add `BASE_URL` env var in `.env`
```bash
BASE_URL=https://your-domain.com
```
