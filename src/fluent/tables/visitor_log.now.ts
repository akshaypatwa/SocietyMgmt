import {
    ChoiceColumn,
    DateTimeColumn,
    ReferenceColumn,
    StringColumn,
    Table,
} from '@servicenow/sdk/core';

export const x_society_visitor_log = Table({
    name: 'x_society_visitor_log',
    label: 'Visitor Log',
    display: 'visitor_name',
    autoNumber: {
        prefix: 'VL',
        number: 1000,
        numberOfDigits: 7,
    },
    schema: {
        flat: ReferenceColumn({
            label: 'Flat',
            mandatory: true,
            referenceTable: 'x_society_flat' as any,
        }),
        visitor_name: StringColumn({
            label: 'Visitor Name',
            mandatory: true,
            maxLength: 100,
        }),
        visitor_phone: StringColumn({
            label: 'Visitor Phone',
            maxLength: 15,
        }),
        visitor_vehicle: StringColumn({
            label: 'Vehicle Number',
            maxLength: 20,
        }),
        purpose: ChoiceColumn({
            label: 'Purpose',
            choices: {
                delivery: { label: 'Delivery' },
                guest: { label: 'Guest' },
                service: { label: 'Service / Repair' },
                cab: { label: 'Cab / Taxi' },
                other: { label: 'Other' },
            },
        }),
        check_in: DateTimeColumn({
            label: 'Check In',
            mandatory: true,
        }),
        check_out: DateTimeColumn({
            label: 'Check Out',
        }),
        entry_by: ReferenceColumn({
            label: 'Entry By',
            referenceTable: 'sys_user',
        }),
        id_proof_type: ChoiceColumn({
            label: 'ID Proof Type',
            choices: {
                aadhaar: { label: 'Aadhaar' },
                pan: { label: 'PAN' },
                driving_license: { label: 'Driving License' },
                passport: { label: 'Passport' },
                voter_id: { label: 'Voter ID' },
                other: { label: 'Other' },
            },
        }),
        remarks: StringColumn({
            label: 'Remarks',
            maxLength: 300,
        }),
    },
});
