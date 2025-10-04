## Button

Source: `components/ui/button.tsx`

### Exports
- **Button**: React component
- **buttonVariants**: Class variance helper for styling

### Props
Extends `React.ComponentProps<'button'>` plus variant props and an optional `asChild` boolean.

- **variant?**: `'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'`
- **size?**: `'default' | 'sm' | 'lg' | 'icon'`
- **asChild?**: boolean

### Usage
```tsx
import { Button } from "@/components/ui/button";

export function Demo() {
  return (
    <div className="flex gap-2">
      <Button>Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="destructive">Delete</Button>
      <Button size="sm">Small</Button>
      <Button size="lg">Large</Button>
      <Button size="icon" aria-label="Close">X</Button>
    </div>
  );
}
```
