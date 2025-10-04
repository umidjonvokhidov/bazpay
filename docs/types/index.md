## Types

These interfaces and types are globally declared in `types/index.d.ts`.

### NavItemProps
- **title**: string
- **path**: string

### ButtonType
- Literal union: `'primary' | 'secondary' | 'premium'`

### ButtonProps
- **buttonType**: `ButtonType`
- **children**: `React.ReactNode`
- **arrowTheme?**: `'white' | 'black'`
- **buttonClassName?**: string
- **href?**: string
- **type?**: `'button' | 'submit' | 'reset'`
- **className?**: string

### PricingCardProps
- **plan**: string
- **slug**: string
- **description**: string
- **inclusive?**: string (HTML string)
- **pricePerMonth**: number
- **features**: string[]

### FAQProps
- **faq**: string
- **answer**: string

### FooterLinkProps
- **title**: string
- **path**: string
- **cms?**: boolean

### FooterCategoryProps
- **category**: string
- **links**: `FooterLinkProps[]`

### TeamMemberProps
- **image**: string
- **fullName**: string
- **job**: string
- **x**: string
- **linkedin**: string

### ImageType
- Literal union: `'cover' | 'contain'`

### FilterType
- Literal union: `'articles' | 'resources' | 'news' | ''`

### BlogPostProps
- **image**: string
- **imageType**: `ImageType`
- **details**: string (HTML string)
- **category**: string
- **slug**: string
- **date**: string (ISO)
- **duration**: number (minutes)
- **title**: string
- **description**: string
- **tags**: string[]
- **filter**: `FilterType`

### StatisticProps
- **title**: string
- **description**: string

### MeasureProps
- **icon**: string
- **title**: string
- **description**: string

### BenefitProps
- **image**: string
- **title**: string
- **description?**: string
- **icon?**: string

### CoreValueProps
- **icon**: string
- **title**: string
- **description**: string

### ComparePlanProps
- **plan**: string
- **slug**: string
- **price**: string
- **features**: string[]

### ComparePlanFeatureProps
- **key**: string
- **label**: string

### PostProps
- **image**: string
- **title**: string
- **path**: string
- **tags**: string[]
