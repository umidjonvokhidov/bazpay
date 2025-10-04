## Form

Source: `components/ui/form.tsx`

### Exports
- **Form**: Re-export of `react-hook-form`'s `FormProvider`
- **FormField**: Wrapper around `Controller` providing context
- **useFormField**: Hook to read current field meta and error state
- **FormItem**: Provides field-scoped ids
- **FormLabel**: Label bound to the current field
- **FormControl**: Slot to bind aria attributes and ids
- **FormDescription**: Description text bound to the current field
- **FormMessage**: Error text bound to the current field

### Usage
```tsx
import { useForm } from "react-hook-form";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export function Demo() {
  const form = useForm<{ email: string }>();

  return (
    <Form {...form}>
      <form className="space-y-4">
        <FormField
          name="email"
          control={form.control}
          rules={{ required: "Email is required" }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="you@example.com" {...field} />
              </FormControl>
              <FormDescription>We will not share your email.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
```
