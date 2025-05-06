export interface NavItemProps {
  title: string;
  path: string;
}

export interface PricingCardProps {
  plan: string;
  description: string;
  pricePerMonth: number;
  features: string[];
}

export interface FAQProps {
  faq: string;
  answer: string;
}

export interface BlogPostProps {
  image: string;
  date: string;
  title: string;
  description: string;
  path: string;
  tags: string[];
}

export interface FooterLinkProps {
  title: string;
  path: string;
}

export interface FooterCategoryProps {
  category: string;
  links: FooterLinkProps[];
}

export interface TeamMemberProps {
  image: string;
  fullName: string;
  job: string;
  x: string;
  linkedin: string;
}

export interface BlogPostV2Props {
  image: string;
  title: string;
  path: string;
  tags: string[];
}

export interface StatisticProps {
  title: string;
  description: string;
}

export interface MeasureProps {
  icon: string;
  title: string;
  description: string;
}

export interface BenefitProps {
  image: string;
  title: string;
  description?: string;
  icon?: string;
}

export interface CoreValueProps {
  icon: string;
  title: string;
  description: string;
}

export interface ComparePlanProps {
  plan: string;
  price: string;
  features: string[];
}

export interface ComparePlanFeatureProps {
  key: string;
  label: string;
}
