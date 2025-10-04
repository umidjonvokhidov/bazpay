## Overview

Welcome to the project’s API and Component Documentation. This site covers all public utilities, UI primitives, app-specific components, data constants, and typed models.

- **UI primitives**: Reusable building blocks under `components/ui` (Button, Input, Select, Table, Accordion, Sheet, Form, Label)
- **App components**: Feature components under `components/`
- **Sections**: Page sections under `sections/`
- **Utilities**: Functions under `lib/`
- **Constants**: Data under `constants/`
- **Types**: Global TypeScript declarations under `types/`

### Navigation
- **Guides**: `docs/guides/quickstart.md`
- **Utilities**: `docs/api/utils.md`
- **Types**: `docs/types/index.md`
- **Constants**: `docs/constants/index.md`
- **UI**: `docs/ui/`
- **Components**: `docs/components/`
- **Sections**: `docs/sections/`

### Import aliases
The codebase uses the alias `@/` to reference the project root (e.g., `@/components/ui/button`).

### Example usage
```tsx
import { Button } from "@/components/ui/button";
import HomePageHero from "@/sections/HomePageHero";

export default function Page() {
  return (
    <main>
      <HomePageHero />
      <Button>Click me</Button>
    </main>
  );
}
```