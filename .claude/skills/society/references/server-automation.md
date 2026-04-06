# Server-Side Automation Reference

## Business Rules

| Name | Table | Trigger | Purpose |
|---|---|---|---|
| `set-dates` | `x_society_service_request` | Insert / field change | Auto-fills `opened_on` on insert; fills `resolved_on` when state changes to resolved |
| `prevent-double-booking` | `x_society_service_request` | Before insert/update | Aborts the transaction if a facility booking slot is already taken |

---

## Script Includes

| Name | Key Methods | Purpose |
|---|---|---|
| `SocietyUtils` | `isSlotAvailable()`, `getUnpaidBillsByFlat()`, `getOpenRequestsByType()` | Shared utility functions used by BRs and client scripts |
| `MaintenanceBillingEngine` | `generateMonthlyBills()`, `markOverdueBills()` | Encapsulates all billing logic; called by scheduled jobs |

---

## Scheduled Jobs

| Schedule | Action |
|---|---|
| Daily at 1:00 AM | Calls `MaintenanceBillingEngine.markOverdueBills()` — marks unpaid past-due bills as overdue |
| Monthly on the 1st | Calls `MaintenanceBillingEngine.generateMonthlyBills()` — creates bill records for all active flats |
