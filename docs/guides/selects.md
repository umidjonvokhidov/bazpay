## Guide: Select

The Select primitive wraps Radix Select. Use `Select`, `SelectTrigger`, `SelectContent`, and `SelectItem`.

### Controlled value
```tsx
'use client'

import * as React from 'react'
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

export default function LanguageSelect() {
  const [value, setValue] = React.useState<string>("ts");

  return (
    <Select value={value} onValueChange={setValue}>
      <SelectTrigger>
        <SelectValue placeholder="Choose language" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="ts">TypeScript</SelectItem>
        <SelectItem value="js">JavaScript</SelectItem>
        <SelectItem value="py">Python</SelectItem>
      </SelectContent>
    </Select>
  );
}
```
