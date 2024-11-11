import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import React from 'react';

const invoices = [
  {
    invoice: 'INV001',
    paymentStatus: 'Paid',
    totalAmount: '$250.00',
    paymentMethod: 'tx_klskdj872300l',
  },
  {
    invoice: 'INV002',
    paymentStatus: 'Pending',
    totalAmount: '$150.00',
    paymentMethod: 'tx_klskdj872300l',
  },
  {
    invoice: 'INV003',
    paymentStatus: 'Unpaid',
    totalAmount: '$350.00',
    paymentMethod: 'tx_klskdj872300l',
  },
  {
    invoice: 'INV004',
    paymentStatus: 'Paid',
    totalAmount: '$450.00',
    paymentMethod: 'tx_klskdj872300l',
  },
  {
    invoice: 'INV005',
    paymentStatus: 'Paid',
    totalAmount: '$550.00',
    paymentMethod: 'tx_klskdj872300l',
  },
  {
    invoice: 'INV006',
    paymentStatus: 'Pending',
    totalAmount: '$200.00',
    paymentMethod: 'tx_klskdj872300l',
  },
  {
    invoice: 'INV007',
    paymentStatus: 'Unpaid',
    totalAmount: '$300.00',
    paymentMethod: 'tx_klskdj872300l',
  },
];

const WithdrawLog: React.FC = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Log ID</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead className="text-right">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="overflow-y-auto">
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.totalAmount}</TableCell>
            <TableCell className="text-right">
              {invoice.paymentMethod}
            </TableCell>
          </TableRow>
        ))}
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.totalAmount}</TableCell>
            <TableCell className="text-right">
              {invoice.paymentMethod}
            </TableCell>
          </TableRow>
        ))}
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.totalAmount}</TableCell>
            <TableCell className="text-right">
              {invoice.paymentMethod}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default WithdrawLog;