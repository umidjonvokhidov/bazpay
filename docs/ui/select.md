## Select

Source: `components/ui/select.tsx`

### Exports
- **Select**
- **SelectTrigger**
- **SelectContent**
- **SelectGroup**
- **SelectItem**
- **SelectLabel**
- **SelectSeparator**
- **SelectScrollUpButton**
- **SelectScrollDownButton**
- **SelectValue**

### Usage
```tsx
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectValue,
} from "@/components/ui/select";

export function Demo() {
  return (
    <Select defaultValue="apple">
      <SelectTrigger>
        <SelectValue placeholder="Choose a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="orange">Orange</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Vegetables</SelectLabel>
          <SelectItem value="carrot">Carrot</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
```
