## Input

Source: `components/ui/input.tsx`

### Exports
- **Input**: React component wrapping an input element

### Props
Extends `React.ComponentProps<'input'>`.

### Usage
```tsx
import { Input } from "@/components/ui/input";

export function Demo() {
  return (
    <div className="space-y-2">
      <Input placeholder="Email" type="email" />
      <Input placeholder="Password" type="password" aria-invalid />
      <Input placeholder="Disabled" disabled />
    </div>
  );
}
```
