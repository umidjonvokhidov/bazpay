## Guide: Tables

Use the provided `Table` components to compose semantic tables with consistent styling.

### Example
```tsx
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableCaption,
} from "@/components/ui/table";

export default function InvoiceTable() {
  return (
    <Table>
      <TableCaption>Recent invoices</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">INV-1001</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>Credit Card</TableCell>
          <TableCell className="text-right">$250.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">INV-1002</TableCell>
          <TableCell>Pending</TableCell>
          <TableCell>ACH</TableCell>
          <TableCell className="text-right">$540.00</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
```
