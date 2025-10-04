## Label

Source: `components/ui/label.tsx`

### Exports
- **Label**: Radix label wrapper

### Props
Extends `React.ComponentProps<typeof LabelPrimitive.Root>`.

### Usage
```tsx
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export function Demo() {
  return (
    <div className="grid gap-2">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" />
    </div>
  );
}
```
