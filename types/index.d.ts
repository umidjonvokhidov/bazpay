declare interface NavItemProps {
  title: string;
  path: string;
}

declare type ButtonType = 'primary' | 'secondary' | 'premium';

declare interface ButtonProps {
  buttonType: ButtonType;
  children: React.ReactNode;
  href?: string;
  className?: string;
}

declare interface PricingCardProps {
  plan: string;
  description: string;
  pricePerMonth: number;
  features: string[];
}

declare interface FAQProps {
  faq: string;
  answer: string;
}

declare interface FooterLinkProps {
  title: string;
  path: string;
  cms?: boolean;
}

declare interface FooterCategoryProps {
  category: string;
  links: FooterLinkProps[];
}

declare interface TeamMemberProps {
  image: string;
  fullName: string;
  job: string;
  x: string;
  linkedin: string;
}

type ImageType = 'cover' | 'contain';

type FilterType = 'articles' | 'resources' | 'news' | '';

declare interface BlogPostProps {
  image: string;
  imageType: ImageType;
  details: string;
  category: string;
  slug: string;
  date: string;
  duration: number;
  title: string;
  description: string;
  tags: string[];
  filter: FilterType;
}

declare interface StatisticProps {
  title: string;
  description: string;
}

declare interface MeasureProps {
  icon: string;
  title: string;
  description: string;
}

declare interface BenefitProps {
  image: string;
  title: string;
  description?: string;
  icon?: string;
}

declare interface CoreValueProps {
  icon: string;
  title: string;
  description: string;
}

declare interface ComparePlanProps {
  plan: string;
  price: string;
  features: string[];
}

declare interface ComparePlanFeatureProps {
  key: string;
  label: string;
}

declare interface PostProps {
  image: string;
  title: string;
  path: string;
  tags: string[];
}
