import {
    BooleanColumn,
    ChoiceColumn,
    DateColumn,
    DecimalColumn,
    MultiLineTextColumn,
    ReferenceColumn,
    StringColumn,
    Table,
} from '@servicenow/sdk/core';

export const x_society_maintenance_bill = Table({
    name: 'x_society_maintenance_bill',
    label: 'Maintenance Bill',
    display: 'number',
    autoNumber: {
        prefix: 'BILL',
        number: 1000,
        numberOfDigits: 7,
    },
    schema: {
        flat: ReferenceColumn({
            label: 'Flat',
            mandatory: true,
            referenceTable: 'x_society_flat' as any,
        }),
        month_year: StringColumn({
            label: 'Month / Year',
            mandatory: true,
            maxLength: 7,
            hint: 'Format: YYYY-MM (e.g. 2024-03)',
        }),
        amount: DecimalColumn({
            label: 'Amount (₹)',
            mandatory: true,
            scale: 2,
        }),
        due_date: DateColumn({
            label: 'Due Date',
            mandatory: true,
        }),
        payment_date: DateColumn({
            label: 'Payment Date',
        }),
        payment_mode: ChoiceColumn({
            label: 'Payment Mode',
            choices: {
                cash: { label: 'Cash' },
                upi: { label: 'UPI' },
                bank_transfer: { label: 'Bank Transfer' },
                cheque: { label: 'Cheque' },
            },
        }),
        status: ChoiceColumn({
            label: 'Status',
            mandatory: true,
            default: 'unpaid',
            choices: {
                unpaid: { label: 'Unpaid' },
                paid: { label: 'Paid' },
                overdue: { label: 'Overdue' },
            },
        }),
        is_overdue: BooleanColumn({
            label: 'Overdue',
            default: 'false',
            hint: 'Automatically set when the due date has passed and the bill is still unpaid',
        }),
        notes: MultiLineTextColumn({
            label: 'Notes',
            maxLength: 500,
        }),
    },
});
