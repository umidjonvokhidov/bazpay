## Accordion

Source: `components/ui/accordion.tsx`

### Exports
- **Accordion**
- **AccordionItem**
- **AccordionTrigger**
- **AccordionContent**

### Usage
```tsx
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export function Demo() {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>Yes. It adheres to WAI-ARIA best practices.</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
```
