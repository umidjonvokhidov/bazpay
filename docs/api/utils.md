## Utilities

### cn
- **Signature**: `cn(...inputs: ClassValue[]): string`
- **Description**: Combines class names using `clsx` and merges Tailwind classes via `tailwind-merge`.

Example:
```tsx
import { cn } from "@/lib/utils";

function Example({ isActive }: { isActive: boolean }) {
  return (
    <div className={cn("px-4 py-2", isActive && "bg-blue-600 text-white")}>Hello</div>
  );
}
```

### formatDuration
- **Signature**: `formatDuration(duration: number): string`
- **Description**: Formats a duration in minutes into human-friendly text like `"1 hr 5 min"` or `"45 min"`.

Example:
```ts
import { formatDuration } from "@/lib/utils";

formatDuration(45); // "45 min"
formatDuration(60); // "1 hr"
formatDuration(75); // "1 hr 15 min"
```
