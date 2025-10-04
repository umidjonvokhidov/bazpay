## Sections

Composable page sections under `sections/`.

- **HomePageHero**: `sections/HomePageHero.tsx`
- **NewsLetter**: `sections/NewsLetter.tsx`
- **PricingV2**: `sections/PricingV2.tsx`
- **PricingPlans**: `sections/PricingPlans.tsx`
- **FAQs**: `sections/FAQs.tsx`
- And more: `AboutUs`, `Blogs`, `Companies`, `CoreValues`, `Investing`, `LatestBlogPosts`, `MobileApp`, `OurFeatures`, `PayoutAndTransitions`, `PricingDetail`, `Security`, `SecurityV2`, `Stats`, `Team`, `TIandPO`.

### Usage
```tsx
import HomePageHero from "@/sections/HomePageHero";
import PricingV2 from "@/sections/PricingV2";

export default function Page() {
  return (
    <main>
      <HomePageHero />
      <PricingV2 />
    </main>
  );
}
```
