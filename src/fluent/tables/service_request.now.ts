import {
    BooleanColumn,
    ChoiceColumn,
    DateColumn,
    DateTimeColumn,
    DecimalColumn,
    MultiLineTextColumn,
    ReferenceColumn,
    StringColumn,
    Table,
    TimeColumn,
} from '@servicenow/sdk/core';

export const x_society_service_request = Table({
    name: 'x_society_service_request',
    label: 'Service Request',
    display: 'short_description',
    autoNumber: {
        prefix: 'SR',
        number: 1000,
        numberOfDigits: 7,
    },
    schema: {
        // Core fields (all request types)
        flat: ReferenceColumn({
            label: 'Flat',
            mandatory: true,
            referenceTable: 'x_society_flat' as any,
        }),
        requested_by: ReferenceColumn({
            label: 'Requested By',
            referenceTable: 'sys_user',
        }),
        request_type: ChoiceColumn({
            label: 'Request Type',
            mandatory: true,
            choices: {
                complaint: { label: 'Complaint' },
                facility_booking: { label: 'Facility Booking' },
                notice: { label: 'Notice' },
            },
        }),
        short_description: StringColumn({
            label: 'Short Description',
            mandatory: true,
            maxLength: 160,
        }),
        description: MultiLineTextColumn({
            label: 'Description',
            maxLength: 4000,
        }),
        status: ChoiceColumn({
            label: 'Status',
            mandatory: true,
            default: 'open',
            choices: {
                // complaint statuses
                open: { label: 'Open' },
                in_progress: { label: 'In Progress' },
                resolved: { label: 'Resolved' },
                rejected: { label: 'Rejected' },
                // facility booking statuses
                requested: { label: 'Requested' },
                confirmed: { label: 'Confirmed' },
                cancelled: { label: 'Cancelled' },
                // notice statuses
                active: { label: 'Active' },
                expired: { label: 'Expired' },
            },
        }),
        opened_on: DateTimeColumn({
            label: 'Opened On',
            readOnly: true,
        }),
        resolved_on: DateTimeColumn({
            label: 'Resolved On',
            readOnly: true,
        }),

        // Complaint-only fields
        priority: ChoiceColumn({
            label: 'Priority',
            default: 'medium',
            choices: {
                low: { label: 'Low' },
                medium: { label: 'Medium' },
                high: { label: 'High' },
                critical: { label: 'Critical' },
            },
        }),
        category: ChoiceColumn({
            label: 'Category',
            choices: {
                plumbing: { label: 'Plumbing' },
                electrical: { label: 'Electrical' },
                cleaning: { label: 'Cleaning' },
                security: { label: 'Security' },
                lift: { label: 'Lift' },
                other: { label: 'Other' },
            },
        }),
        assigned_to: ReferenceColumn({
            label: 'Assigned To',
            referenceTable: 'sys_user',
        }),
        vendor_name: StringColumn({
            label: 'Vendor Name',
            maxLength: 100,
        }),
        resolution_notes: MultiLineTextColumn({
            label: 'Resolution Notes',
            maxLength: 2000,
        }),

        // Facility booking-only fields
        facility: ChoiceColumn({
            label: 'Facility',
            choices: {
                clubhouse: { label: 'Clubhouse' },
                gym: { label: 'Gym' },
                swimming_pool: { label: 'Swimming Pool' },
                community_hall: { label: 'Community Hall' },
                terrace: { label: 'Terrace' },
            },
        }),
        booking_date: DateColumn({
            label: 'Booking Date',
        }),
        start_time: TimeColumn({
            label: 'Start Time',
        }),
        end_time: TimeColumn({
            label: 'End Time',
        }),
        charges: DecimalColumn({
            label: 'Charges (₹)',
            scale: 2,
        }),

        // Notice-only fields
        pinned: BooleanColumn({
            label: 'Pinned',
            default: 'false',
        }),
        expires_on: DateColumn({
            label: 'Expires On',
        }),
    },
});
