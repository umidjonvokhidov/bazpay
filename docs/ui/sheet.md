## Sheet

Source: `components/ui/sheet.tsx`

### Exports
- **Sheet**
- **SheetTrigger**
- **SheetClose**
- **SheetContent**
- **SheetHeader**
- **SheetFooter**
- **SheetTitle**
- **SheetDescription**

### Usage
```tsx
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";

export function Demo() {
  return (
    <Sheet>
      <SheetTrigger>Open</SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
          <SheetDescription>Select an option below</SheetDescription>
        </SheetHeader>
        <div className="p-4">Content...</div>
        <SheetFooter>
          <button className="ml-auto">Close</button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
```
