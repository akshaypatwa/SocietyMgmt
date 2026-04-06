---
name: society
description: This skill should be used when the user asks to "build the society app", "add a table to society", "deploy the society management system", "create a business rule for society", "work on the ServiceNow society project", or mentions "x_society", "SocietyMgmt", "MaintenanceBillingEngine", "SocietyUtils".
version: 1.0.0
---

# Society Management System — Project Skill

## Project Identity

| Field | Value |
|---|---|
| App name | Society Management System |
| package.json name | `society-management-system` |
| Scope prefix | `x_society` |
| Scope ID | `a1a73560fa7f4020b7ac9a72c9c228d4` |
| SDK version | `@servicenow/sdk@4.5.0` |
| Glide types | `@servicenow/glide@27.0.5` |

All table names, script names, and field names in this app are prefixed with `x_society_`.

---

## SDK Commands

```
npm run build      # Compiles TypeScript → XML. Validates structure. Does NOT touch the instance.
npm run deploy     # build + pushes everything to the instance (now-sdk install).
npm run types      # Fetches type definitions FROM the instance. Run after schema changes on instance.
npm run transform  # Pulls current instance state to local files. ALWAYS commit first — overwrites local.
```

- `build` is safe and local-only. Use it to catch errors before deploying.
- `deploy` is the only command that writes to the instance.
- `transform` is destructive to local files — always `git commit` before running it.
- `types` is read-only against the instance; it only updates `./@types/`.

---

## File Structure Rules

- **Fluent files** (`.now.ts`) define app structure: tables, columns, ACLs, menus, roles.
- Every Fluent file **MUST be exported** from `src/fluent/index.now.ts`.
- If a Fluent file is not exported from `index.now.ts`, it is **silently skipped at deploy time** — no error, no warning.
- When creating any new `.now.ts` file, immediately add its export to `src/fluent/index.now.ts`.

---

## App Context

**Society & Apartment Management System (India-Focused)**
Replaces WhatsApp groups and Excel sheets with a structured ServiceNow application for managing residential societies.

Core tables: `x_society_flat`, `x_society_maintenance_bill`, `x_society_service_request`, `x_society_visitor_log`.
See `references/tables.md` for full table descriptions.

Server automation includes two Business Rules, two Script Includes (`SocietyUtils`, `MaintenanceBillingEngine`), and two Scheduled Jobs.
See `references/server-automation.md` for details.

Roles: `x_society_resident`, `x_society_committee_member`, `x_society_admin`.
See `references/roles.md` for access details.

---

## References

- **[tables.md](references/tables.md)** — Full descriptions of all four core tables and their purpose.
- **[server-automation.md](references/server-automation.md)** — Business Rules, Script Includes, and Scheduled Jobs with trigger conditions and key methods.
- **[roles.md](references/roles.md)** — Role definitions and typical access levels.
