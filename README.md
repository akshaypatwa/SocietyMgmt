<div align="center">

# ⚡ Claude Code × ServiceNow SDK
### AI-Powered App Development for ServiceNow

<br/>

[![Claude Code](https://img.shields.io/badge/Claude_Code-Anthropic-blueviolet?style=for-the-badge&logo=anthropic&logoColor=white)](https://claude.ai/code)
[![ServiceNow](https://img.shields.io/badge/ServiceNow-SDK-00A1E0?style=for-the-badge&logo=servicenow&logoColor=white)](https://developer.servicenow.com)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](LICENSE)

<br/>

> **Build, iterate, and deploy ServiceNow applications at the speed of thought — using Claude Code as your AI pair programmer.**

<br/>

---

</div>

## 📋 Table of Contents

- [Overview](#-overview)
- [Architecture](#-architecture)
- [Prerequisites](#-prerequisites)
- [Quick Setup](#-quick-setup)
- [Step 1 — Claude Code Setup](#step-1--claude-code-setup)
- [Step 2 — ServiceNow SDK Setup](#step-2--servicenow-sdk-setup)
- [Step 3 — Deploy to ServiceNow](#step-3--deploy-to-servicenow)
- [Project Structure](#-project-structure)
- [Usage Examples](#-usage-examples)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)

---

## 🌟 Overview

This repository demonstrates how to leverage **Claude Code** — Anthropic's AI-powered CLI — alongside the **ServiceNow SDK** to rapidly scaffold, develop, and deploy applications directly to your ServiceNow instance.

Whether you're building scoped apps, automating workflows, or creating custom UI components, this workflow lets you iterate in your local environment with full AI assistance and push to ServiceNow in one command.

```
  Your Terminal + Claude Code      ServiceNow SDK            ServiceNow Instance
  ┌──────────────────────────┐    ┌────────────────┐        ┌──────────────────┐
  │  AI-assisted coding       │───▶│  Build & Sync  │───────▶│  Live App Deploy  │
  │  Describe → Claude writes │    │  now-sdk CLI   │        │  Tables, Rules,   │
  │  Review → Approve → Done  │    │  npm run build │        │  Jobs, ACLs, Menus│
  └──────────────────────────┘    └────────────────┘        └──────────────────┘
```

---

## 🏗 Architecture

```
SocietyMgmt/
│
├── 📁 src/
│   └── 📁 fluent/                  # TypeScript (.now.ts) files — define your entire app
│       ├── 📄 index.now.ts         # Barrel file — EVERY file must be exported here
│       ├── 📁 tables/              # Table & column definitions
│       ├── 📁 business-rules/      # Server-side automation on record events
│       ├── 📁 script-includes/     # Reusable server-side utility classes
│       ├── 📁 scheduled-jobs/      # Time-triggered background jobs
│       ├── 📁 acls/                # Role-based security rules
│       └── 📁 navigation/          # App menu & sidebar items
│
├── 📄 now.config.json              # App identity — scope, name, auth alias
├── 📄 package.json                 # Build scripts & dependencies
└── 📄 README.md
```

---

## ✅ Prerequisites

Before getting started, ensure you have the following:

| Requirement | Version | Notes |
|---|---|---|
| **Node.js** | `v18` or higher | Install via NVM — see Step 2.1 |
| **npm** | `v9` or higher | Bundled with Node.js |
| **Git** | Latest | [git-scm.com](https://git-scm.com) |
| **ServiceNow Instance** | Utah / Vancouver / Washington+ | Free PDI at [developer.servicenow.com](https://developer.servicenow.com) |
| **Anthropic Account** | **Paid plan required** | Claude Pro, Teams, or Enterprise — see Step 1.1 |

---

## ⚡ Quick Setup

> 🔗 **Prefer a guided, interactive experience?**
>
> Visit the step-by-step setup wizard at:
>
> ## 👉 [setup-guide-kohl.vercel.app](https://setup-guide-kohl.vercel.app/)
>
> *(The interactive wizard covers every command below with live copy buttons, OS-specific tabs, and inline troubleshooting.)*

---

## Step 1 — Claude Code Setup

<details open>
<summary><strong>🤖 Install & Configure Claude Code</strong></summary>

<br/>

### 1.1 Account Requirement

> ⚠️ **Claude Code requires a paid Anthropic plan.**
> A **free Claude.ai account cannot be used** with Claude Code.
>
> You need one of the following:
> - **Claude Pro** — personal subscription at [claude.ai](https://claude.ai)
> - **Claude for Teams / Enterprise** — for organisations
> - **Anthropic API key** — with billing enabled at [console.anthropic.com](https://console.anthropic.com)
>
> If you don't have a paid plan, sign up at [claude.ai](https://claude.ai) before continuing.

---

### 1.2 Install Claude Code

Claude Code is Anthropic's official CLI that brings AI assistance directly into your terminal.

```bash
# Install Claude Code globally via npm
npm install -g @anthropic-ai/claude-code
```

Verify the installation:

```bash
claude --version
```

---

### 1.3 Authenticate with Anthropic

```bash
# Launch Claude Code — it will prompt for authentication on first run
claude
```

On first launch, Claude Code automatically opens your browser and asks you to log in with your Anthropic account. Once you approve the OAuth grant, a session token is stored locally — you won't need to authenticate again.

> 💡 **Tip:** If the browser window doesn't open, check your terminal output for a manual authentication URL you can open directly.

---

### 1.4 Open Your Project with Claude Code

Navigate to this repository and start a session:

```bash
# Clone the repo (if you haven't already)
git clone https://github.com/akshaypatwa/SocietyMgmt
cd SocietyMgmt

# Launch Claude Code inside the project directory
claude
```

Claude Code reads your project files automatically on startup and is ready to assist.

---

### 1.5 Configure Claude Code Settings (Optional)

Create `.claude/settings.json` in your project root to customise behaviour:

```json
{
  "model": "claude-opus-4-6",
  "autoApprove": ["Read", "Glob", "Grep"]
}
```

</details>

---

## Step 2 — ServiceNow SDK Setup

<details open>
<summary><strong>🛠 Install & Configure the ServiceNow SDK</strong></summary>

<br/>

### 2.1 Install Node.js via NVM

Install Node.js using NVM (Node Version Manager) rather than the direct installer — this avoids OS permission errors and lets you manage Node versions cleanly.

**Mac / Linux:**

```bash
# Install NVM
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

# Restart your terminal, then install and activate Node 18
nvm install 18
nvm use 18
```

**Windows:**

Download and run `nvm-setup.exe` from the [nvm-windows releases page](https://github.com/coreybutler/nvm-windows/releases), then open Command Prompt and run:

```
nvm install 18
nvm use 18
```

---

### 2.2 Install the ServiceNow SDK CLI

```bash
# Install the official ServiceNow SDK globally
npm install -g @servicenow/sdk
```

Verify the installation:

```bash
now-sdk --version
# Expected: 4.4.x or higher
```

> ⚠️ **`now-sdk: command not found` after install?**
> This means npm's global bin folder isn't on your `PATH`. Run `npm config get prefix` to find the path, then add `/bin` to your shell config:
> ```bash
> export PATH="$(npm config get prefix)/bin:$PATH"
> ```
> Then run `source ~/.zshrc` (or `~/.bashrc`) and retry.

---

### 2.3 Authenticate with Your ServiceNow Instance

The SDK stores credentials securely in your OS keychain (macOS Keychain / Windows Credential Manager / Linux Secret Service) — nothing is written to project files.

**Basic Auth** (fastest to set up):

```bash
# Replace <your-instance> with your actual instance subdomain
# e.g., for https://mydev.service-now.com → use: mydev
now-sdk auth --add <your-instance>
```

The SDK will prompt for your username and password interactively.

**OAuth** (recommended for SSO environments):

```bash
# The SDK will prompt you to select OAuth, then open your browser for login
now-sdk auth --add <your-instance>
```

After authenticating, verify the connection was saved:

```bash
now-sdk auth --list
# Expected: dev → https://yourcompany.service-now.com (basic)
```

> 💡 **Using a Personal Developer Instance (PDI)?** Log in to [developer.servicenow.com](https://developer.servicenow.com) to find your instance URL and credentials. Your user must have the **admin** role to deploy apps.

> ⚠️ **Authentication failing?** Common causes: (1) SSO/MFA enforced — use OAuth instead, (2) IP allowlisting — ensure your machine's IP is permitted, (3) PDI is hibernating — log in to developer.servicenow.com and wake it up first.

---

### 2.4 Initialise the Project

```bash
# Run inside your project folder
now-sdk init
```

The SDK will prompt you for three values:

| Prompt | Example Value | Notes |
|---|---|---|
| App name | `Society Management System` | Display name shown in ServiceNow |
| Scope prefix | `x_society` | Namespace — prevents conflicts with other apps |
| Auth alias | `dev` | The alias you registered in Step 2.3 |

---

### 2.5 Install Dependencies

```bash
npm install
```

> Success output: `added 312 packages, and audited 313 packages in 28s`
> Any `npm warn deprecated` lines are safe to ignore — they come from the SDK's own dependencies.

---

### 2.6 Fetch Type Definitions from Your Instance

```bash
npm run types
```

This connects to your instance and downloads TypeScript type declarations for every table, field, and API available to your scope. The compiler uses these to validate your Fluent files — without them, every ServiceNow-specific reference will show as a type error and the build will fail.

> ⏱ Takes **1–3 minutes** on first run. Types are written to a `.types/` folder and should be committed to git so teammates don't need to fetch them individually.

> ⚠️ **Re-run `npm run types` any time you:** add a table directly in the ServiceNow UI, modify existing table columns outside the SDK, or upgrade to a new major SDK version.

</details>

---

## Step 3 — Deploy to ServiceNow

<details open>
<summary><strong>🚀 Build & Push to Your Instance</strong></summary>

<br/>

### 3.1 Develop Locally with Claude Code

Start Claude Code from inside your project folder and describe what you want to build:

```bash
claude
```

Example prompts:

```
Create all four core tables: flat, maintenance_bill, service_request, visitor_log

Add a business rule that auto-sets opened_on on insert and resolved_on when status changes to resolved

Write a Script Include called SocietyUtils with isSlotAvailable() and getUnpaidBillsByFlat() methods

Create scheduled jobs to mark overdue bills daily and generate monthly bills on the 1st
```

Claude Code will read your project context, write the `.now.ts` Fluent files, and add the required exports to `src/fluent/index.now.ts`.

> ⚠️ **The Barrel File Rule:** Every Fluent file you create must be exported from `src/fluent/index.now.ts`. If a file is missing from that export, it will be **silently skipped** at deploy time — no error, just missing from the instance.

---

### 3.2 Build (Compile Only — Nothing Sent to Instance)

Exit Claude Code (`Ctrl+C`), then compile:

```bash
npm run build
```

This compiles your TypeScript Fluent files to ServiceNow XML and checks for errors. It does **not** touch your instance. Always run this before deploying to catch problems early.

> **Success:** `✔ Compiled 4 modules   ✔ No errors found   Build completed in 2.1s`

> **Got an error?** The message includes the exact file and line number. Copy it, paste into Claude Code: *"Fix this build error: [paste error]"* — then build again.

---

### 3.3 Deploy to ServiceNow

```bash
npm run deploy
```

This runs the build, packages everything, authenticates via your stored keychain alias, and uploads to your instance. Your app goes live.

**Successful deploy output:**

```
✔ Table: x_society_flat
✔ Table: x_society_maintenance_bill
✔ Table: x_society_service_request
✔ Table: x_society_visitor_log
✔ BusinessRule: Set Dates on Insert/Resolve
✔ BusinessRule: Prevent Double Booking
✔ ScriptInclude: SocietyUtils
✔ ScriptInclude: MaintenanceBillingEngine
✔ ScheduledJob: Society Mark Overdue Bills
✔ ScheduledJob: Society Generate Monthly Bills
✔ ACL: x_society (8 rules)
✔ AppMenu: Society Management
✔ Deployed successfully in 24.3s
```

---

### 3.4 Verify the Deployment in ServiceNow

Open your instance in a browser and run through these checks:

| Check | Where to Look | What to Confirm |
|---|---|---|
| **App menu** | Left sidebar → type `Society` in the App Navigator filter | **Society Management** menu appears with all items |
| **Tables** | System Definition → Tables → filter by `x_society` | All 4 tables present: `x_society_flat`, `x_society_maintenance_bill`, `x_society_service_request`, `x_society_visitor_log` |
| **Business Rules** | System Definition → Business Rules → filter Name contains `society` | Both rules active: **Set Dates on Insert/Resolve** and **Prevent Double Booking** |
| **Scheduled Jobs** | System Definition → Scheduled Jobs → filter Name contains `Society` | Both jobs active: **Society: Mark Overdue Bills** (daily, 01:00 AM) and **Society: Generate Monthly Bills** (monthly, 1st, 06:00 AM) |
| **ACLs** | Security → Access Control (ACL) → filter Name contains `x_society` | 8 rules covering read, create, write, and delete across all four tables |

---

### 3.5 Other Useful Commands

| Command | What It Does | When to Use |
|---|---|---|
| `npm run build` | Compiles TypeScript to XML, checks for errors | Before every deploy |
| `npm run deploy` | Builds and pushes everything to ServiceNow | When ready to go live |
| `npm run types` | Re-fetches type definitions from instance | When schema was changed directly in the ServiceNow UI |
| `npm run transform` | Pulls current instance state to local files | To import changes made via Studio — **always commit local work first** |

</details>

---

## 🗂 Project Structure

```
SocietyMgmt/
│
├── 📁 .claude/
│   └── 📄 skills/society.md        # Claude Code briefing — loaded every session
│
├── 📁 src/
│   └── 📁 fluent/
│       ├── 📄 index.now.ts          # ⚠️ Barrel file — every file must be exported here
│       │
│       ├── 📁 tables/
│       │   ├── 📄 flat.now.ts                   # Master flat/unit registry
│       │   ├── 📄 maintenance_bill.now.ts        # Monthly billing per flat
│       │   ├── 📄 service_request.now.ts         # Complaints, bookings & notices
│       │   └── 📄 visitor_log.now.ts             # Gate entry log
│       │
│       ├── 📁 business-rules/
│       │   ├── 📄 set-dates.now.ts               # Auto-fills opened_on & resolved_on
│       │   └── 📄 prevent-double-booking.now.ts  # Blocks overlapping facility bookings
│       │
│       ├── 📁 script-includes/
│       │   ├── 📄 SocietyUtils.now.ts            # isSlotAvailable(), getUnpaidBillsByFlat()
│       │   └── 📄 MaintenanceBillingEngine.now.ts # generateMonthlyBills(), markOverdueBills()
│       │
│       ├── 📁 scheduled-jobs/
│       │   ├── 📄 mark-overdue-bills.now.ts      # Daily at 1AM — marks unpaid past-due bills
│       │   └── 📄 generate-monthly-bills.now.ts  # Monthly on 1st — creates bill records
│       │
│       ├── 📁 acls/
│       │   └── 📄 society-acls.now.ts            # Role-based read/write/delete rules
│       │
│       └── 📁 navigation/
│           └── 📄 app-menu.now.ts                # Sidebar menu items
│
├── 📄 now.config.json              # App scope, name & auth alias
├── 📄 package.json                 # npm scripts: build, deploy, types, transform
└── 📄 README.md
```

---

## 💡 Usage Examples

### Build the entire app in one Claude Code session

```bash
# From inside your project directory
claude
```

Example prompts to get started:

```
Create the Society Management app — 4 tables (flat, maintenance_bill,
service_request, visitor_log), 2 business rules, 2 script includes,
2 scheduled jobs, ACLs, and navigation. Scope prefix is x_society.

Add a new complaint category called "pest_control" to the service_request table

Fix this build error: [paste the exact error output from npm run build]

The MaintenanceBillingEngine.generateMonthlyBills() method needs to skip
flats where active = false — update the logic accordingly
```

### Pull instance changes back to local files

```bash
# Always commit your local work before running this
npm run transform
```

### Refresh type definitions after a schema change

```bash
npm run types
```

---

## 🔧 Troubleshooting

<details>
<summary><strong>Claude Code won't start / authentication fails</strong></summary>

- Claude Code requires a **paid Anthropic plan** — free accounts cannot authenticate
- Try running `claude logout` then `claude` again to re-authenticate
- If the browser window doesn't open, look for a manual auth URL in the terminal output
- Check your network or firewall isn't blocking `claude.ai` or `api.anthropic.com`

</details>

<details>
<summary><strong>`now-sdk: command not found` after install</strong></summary>

The npm global bin folder isn't on your `PATH`. Find and add it:

```bash
# Find where npm installs global packages
npm config get prefix

# Add /bin to your shell config (replace the path with your actual output above)
echo 'export PATH="$(npm config get prefix)/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc

# Retry
now-sdk --version
```

</details>

<details>
<summary><strong>`now-sdk auth` fails with 401 Unauthorized</strong></summary>

Common causes:
1. **SSO or MFA enforced** — use OAuth auth type instead of Basic, or ask your admin to create a dedicated service account with basic auth enabled under System Security → Users
2. **IP allowlisting** on the instance — ensure your machine's IP is permitted
3. **PDI is hibernating** — log in to [developer.servicenow.com](https://developer.servicenow.com) and wake it up first, then retry

</details>

<details>
<summary><strong>Deploy succeeds but app doesn't appear in ServiceNow</strong></summary>

- Menus can take up to 30 seconds to appear after a fresh deploy — wait and refresh
- Type `Society` in the App Navigator filter field to search directly
- Check that your user account has the correct role assigned (at minimum: `admin` on a PDI)

</details>

<details>
<summary><strong>Build error: TypeScript type not found</strong></summary>

Your type definitions are stale or missing. Re-fetch them:

```bash
npm run types
```

Then run `npm run build` again.

</details>

<details>
<summary><strong>A file I created isn't showing up after deploy</strong></summary>

You likely forgot to export it from the barrel file. Open `src/fluent/index.now.ts` and add an export for the missing file. Every Fluent file **must** be listed there or it will be silently skipped at deploy time.

</details>

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feat/my-feature`
3. Make your changes with Claude Code's help
4. Commit: `git commit -m "feat: add my feature"`
5. Push: `git push origin feat/my-feature`
6. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

<div align="center">

Built with ❤️ using **Claude Code** × **ServiceNow SDK**

[![Follow on GitHub](https://img.shields.io/github/followers/akshaypatwa?style=social)](https://github.com/akshaypatwa)

</div>
