## Components

High-level app components under `components/`.

### Button (App)
- Source: `components/Button.tsx`
- Default export: `Button(props: ButtonProps)`
- Props: `ButtonProps` from global types
- Behavior: Renders a premium-styled link/button or standard primary/secondary button with Tailwind classes.

Example:
```tsx
import Button from "@/components/Button";

<Button buttonType="premium" href="#">Get Started</Button>
```

### Navbar
- Source: `components/Navbar.tsx`
- Default export: `Navbar()`
- Depends on: `constants.navItems` and `Button`

Example:
```tsx
import Navbar from "@/components/Navbar";

<Navbar />
```

### Footer
- Source: `components/Footer.tsx`
- Default export: `Footer()`
- Depends on: `footerItems`, `footerLinks`, `Input`, `Button`

Example:
```tsx
import Footer from "@/components/Footer";

<Footer />
```

### BlogCard
- Source: `components/BlogCard.tsx`
- Props: `{ post: BlogPostProps }`

### BlogPost
- Source: `components/BlogPost.tsx`
- Props: `{ blog: BlogPostProps; index: number }`

### LatestBlogPost
- Source: `components/LatestBlogPost.tsx`
- Props: `{ blog: BlogPostProps }`

### CategoryFilter
- Source: `components/CategoryFilter.tsx`
- Props: `{ paramKey: string; options: { label: string; value: string }[] }`

### PricingCardV1
- Source: `components/PricingCardV1.tsx`
- Props: `{ pricingCard: PricingCardProps }`

### PricingCardV2
- Source: `components/PricingCardV2.tsx`
- Props: `{ pricingCard: PricingCardProps; pricingPlan: 'monthly' | 'annually' }`
