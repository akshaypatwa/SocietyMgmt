import { BusinessRule } from '@servicenow/sdk/core';

export const flagOverdueBill = BusinessRule({
    $id: Now.ID['flag_overdue_bill_br'],
    name: 'Flag Overdue Maintenance Bill',
    table: 'x_society_maintenance_bill',
    when: 'before',
    action: ['insert', 'update'],
    order: 100,
    active: true,
    description:
        'Automatically ticks the Overdue checkbox when a bill is saved with a due date in the past and is still unpaid.',
    script: `(function executeRule(current, previous) {
    var dueDate = current.due_date;
    var status = current.status + '';
    var overdue = false;
    if (!dueDate.nil() && status !== 'paid') {
        var today = new GlideDate();
        if (dueDate.getGlideObject().compareTo(today) < 0) {
            overdue = true;
        }
    }
    current.is_overdue = overdue;
})(current, previous);`,
});
