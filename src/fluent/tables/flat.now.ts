import {
    BooleanColumn,
    ChoiceColumn,
    IntegerColumn,
    StringColumn,
    Table,
} from '@servicenow/sdk/core';

export const x_society_flat = Table({
    name: 'x_society_flat',
    label: 'Flat',
    display: 'flat_number',
    extensible: false,
    schema: {
        flat_number: StringColumn({
            label: 'Flat Number',
            mandatory: true,
            maxLength: 20,
        }),
        block: StringColumn({
            label: 'Block / Tower',
            maxLength: 40,
        }),
        floor: IntegerColumn({
            label: 'Floor',
        }),
        flat_type: ChoiceColumn({
            label: 'Flat Type',
            choices: {
                '1bhk': { label: '1 BHK' },
                '2bhk': { label: '2 BHK' },
                '3bhk': { label: '3 BHK' },
                '4bhk': { label: '4 BHK' },
            },
        }),
        owner_name: StringColumn({
            label: 'Owner Name',
            mandatory: true,
            maxLength: 100,
        }),
        owner_phone: StringColumn({
            label: 'Owner Phone',
            maxLength: 15,
        }),
        owner_email: StringColumn({
            label: 'Owner Email',
            maxLength: 100,
        }),
        tenant_name: StringColumn({
            label: 'Tenant Name',
            maxLength: 100,
        }),
        tenant_phone: StringColumn({
            label: 'Tenant Phone',
            maxLength: 15,
        }),
        occupancy_status: ChoiceColumn({
            label: 'Occupancy Status',
            mandatory: true,
            default: 'owner_occupied',
            choices: {
                owner_occupied: { label: 'Owner Occupied' },
                tenant_occupied: { label: 'Tenant Occupied' },
                vacant: { label: 'Vacant' },
            },
        }),
        area_sqft: IntegerColumn({
            label: 'Area (sq ft)',
        }),
        parking_slot: StringColumn({
            label: 'Parking Slot',
            maxLength: 20,
        }),
        active: BooleanColumn({
            label: 'Active',
            default: 'true',
        }),
    },
});
