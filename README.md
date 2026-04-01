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
  Your IDE + Claude Code          ServiceNow SDK            ServiceNow Instance
  ┌─────────────────────┐        ┌────────────────┐        ┌──────────────────┐
  │  AI-assisted coding  │ ────▶  │  Build & Sync  │ ────▶  │  Live App Deploy  │
  │  Instant suggestions │        │  Local ↔ Cloud │        │  Tables, UI, Flow │
  └─────────────────────┘        └────────────────┘        └──────────────────┘
```

---

## 🏗 Architecture

```
SocietyMgmt/
├── 📁 src/                     # Source files (Claude Code works here)
│   ├── 📁 tables/              # Table definitions & business rules
│   ├── 📁 ui/                  # UI Policies, Actions, Client Scripts
│   ├── 📁 flows/               # Flow Designer definitions
│   └── 📁 scripts/             # Script Includes & utilities
├── 📁 now-ui/                  # Now Experience UI Components
├── 📄 app.config.json          # ServiceNow app manifest
├── 📄 package.json
└── 📄 README.md
```

---

## ✅ Prerequisites

Before getting started, ensure you have the following:

| Requirement | Version | Link |
|---|---|---|
| **Node.js** | `v18` or higher | [nodejs.org](https://nodejs.org) |
| **npm** | `v9` or higher | Bundled with Node.js |
| **Git** | Latest | [git-scm.com](https://git-scm.com) |
| **ServiceNow Instance** | Utah / Vancouver / Washington+ | [developer.servicenow.com](https://developer.servicenow.com) |
| **Anthropic Account** | Free or Pro | [claude.ai](https://claude.ai) |

---

## ⚡ Quick Setup

> 🔗 **Prefer a guided, one-click experience?**
>
> Visit the interactive setup guide at:
>
> ## 👉 `[QUICK SETUP WEBSITE URL — COMING SOON]`
>
> *(Placeholder — replace this with your quick_setup website URL)*
>
> The quick setup wizard walks you through every step below and automatically configures your ServiceNow instance connection.

---

## Step 1 — Claude Code Setup

<details open>
<summary><strong>🤖 Install & Configure Claude Code</strong></summary>

<br/>

### 1.1 Install Claude Code

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

### 1.2 Authenticate with Anthropic

```bash
# Launch Claude Code — it will prompt you to authenticate
claude
```

On first launch, Claude Code will open a browser window. Log in with your **Anthropic / Claude.ai account** to complete OAuth authentication.

> 💡 **Tip:** Claude Code works with both free and Pro plans. Pro users get higher rate limits and access to more powerful models.

---

### 1.3 Open Your Project with Claude Code

Navigate to this repository and start Claude Code:

```bash
# Clone the repo (if you haven't already)
git clone <your-repo-url>
cd SocietyMgmt

# Launch Claude Code in the project directory
claude
```

Claude Code will automatically read your project structure and be ready to assist with ServiceNow development.

---

### 1.4 Configure Claude Code Settings (Optional)

Create or edit `.claude/settings.json` in your project root to customise behaviour:

```json
{
  "model": "claude-opus-4-6",
  "autoApprove": ["Read", "Glob", "Grep"],
  "theme": "dark"
}
```

</details>

---

## Step 2 — ServiceNow SDK Setup

<details open>
<summary><strong>🛠 Install & Configure the ServiceNow SDK</strong></summary>

<br/>

### 2.1 Install the ServiceNow Extension for VS Code (Recommended)

The ServiceNow SDK integrates with VS Code for the best local development experience.

1. Open **VS Code**
2. Go to **Extensions** (`Cmd+Shift+X` / `Ctrl+Shift+X`)
3. Search for **`ServiceNow`**
4. Install **ServiceNow Extension for VS Code** by ServiceNow

---

### 2.2 Install the Now CLI

```bash
# Install the ServiceNow Now CLI globally
npm install -g @servicenow/now-cli
```

Verify the installation:

```bash
snc --version
```

---

### 2.3 Configure Instance Connection

```bash
# Initialize connection to your ServiceNow instance
snc configure profile set

# You will be prompted for:
#   Profile name    → e.g., my-dev-instance
#   Instance URL    → https://<your-instance>.service-now.com
#   Username        → your ServiceNow username
#   Password        → your ServiceNow password (or OAuth token)
```

Test the connection:

```bash
snc configure profile list
```

---

### 2.4 Install Project Dependencies

```bash
# Install all project npm dependencies
npm install
```

---

### 2.5 Scaffold or Open the App

**If starting fresh:**

```bash
# Create a new scoped application scaffold
snc app create --name "SocietyMgmt" --scope "x_<your_prefix>_societymgmt"
```

**If working with this existing repo:**

```bash
# Pull the latest app metadata from your instance
snc app pull --profile my-dev-instance
```

</details>

---

## Step 3 — Deploy to ServiceNow

<details open>
<summary><strong>🚀 Build & Push to Your Instance</strong></summary>

<br/>

### 3.1 Develop Locally with Claude Code

Use Claude Code to build and modify your app. Ask it anything:

```
> Add a new table called "Society Members" with fields for name, email, and membership tier

> Create a business rule that sends an email when a membership expires

> Build a client script that validates the email field format on submit
```

Claude Code will read your project context, write the code, and place files in the correct SDK directories.

---

### 3.2 Validate Before Deploying

```bash
# Lint and validate your app source
npm run lint

# Run any local tests
npm test
```

---

### 3.3 Push Changes to ServiceNow

```bash
# Deploy the application to your connected instance
snc app push --profile my-dev-instance
```

Or push a specific component:

```bash
# Push only a specific file or directory
snc app push --profile my-dev-instance --source src/tables/society_member.json
```

---

### 3.4 Verify Deployment

After a successful push, open your ServiceNow instance and navigate to:

```
🌐  https://<your-instance>.service-now.com/
    → Studio → SocietyMgmt
```

You should see all your changes reflected live in the app.

---

### 3.5 (Optional) Automate with CI/CD

Add this to your `.github/workflows/deploy.yml` to auto-deploy on push to `main`:

```yaml
name: Deploy to ServiceNow

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'

      - name: Install Now CLI
        run: npm install -g @servicenow/now-cli

      - name: Configure Profile
        run: |
          snc configure profile set \
            --name prod \
            --url ${{ secrets.SN_INSTANCE_URL }} \
            --username ${{ secrets.SN_USERNAME }} \
            --password ${{ secrets.SN_PASSWORD }}

      - name: Deploy App
        run: snc app push --profile prod
```

</details>

---

## 🗂 Project Structure

```
SocietyMgmt/
│
├── 📁 .claude/
│   └── settings.json               # Claude Code project settings
│
├── 📁 src/
│   ├── 📁 tables/
│   │   ├── society_member.json     # Member table definition
│   │   └── membership_tier.json    # Tier table definition
│   │
│   ├── 📁 business_rules/
│   │   └── on_member_expire.js     # Expiry notification rule
│   │
│   ├── 📁 client_scripts/
│   │   └── validate_email.js       # Email validation
│   │
│   └── 📁 script_includes/
│       └── SocietyUtils.js         # Shared utility functions
│
├── 📁 now-ui/
│   └── 📁 components/             # Now Experience components
│
├── 📄 app.config.json              # App manifest & metadata
├── 📄 package.json
└── 📄 README.md
```

---

## 💡 Usage Examples

### Ask Claude Code to build a feature

```bash
# Inside your project directory, run:
claude

# Example prompts:
"Create a Flow Designer workflow for new member onboarding"
"Add a UI Action button to send a welcome email from the member form"
"Write a scheduled job that checks for expired memberships daily"
"Generate a dashboard with KPIs for active members by tier"
```

### Sync local changes back from your instance

```bash
snc app pull --profile my-dev-instance
```

### Create a new app version

```bash
snc app version create --profile my-dev-instance --version 1.1.0
```

---

## 🔧 Troubleshooting

<details>
<summary><strong>Claude Code won't authenticate</strong></summary>

- Ensure you have a valid Claude.ai account at [claude.ai](https://claude.ai)
- Try running `claude logout` then `claude` again to re-authenticate
- Check your network/firewall isn't blocking `claude.ai`

</details>

<details>
<summary><strong>`snc` command not found</strong></summary>

```bash
# Ensure global npm bin is in your PATH
export PATH="$(npm bin -g):$PATH"

# Or reinstall
npm install -g @servicenow/now-cli
```

</details>

<details>
<summary><strong>App push fails with 401 Unauthorized</strong></summary>

- Verify your instance credentials: `snc configure profile list`
- Ensure your ServiceNow user has the **admin** or **app_engine_studio_user** role
- Check your instance URL format: `https://yourinstance.service-now.com` (no trailing slash)

</details>

<details>
<summary><strong>Claude Code modifies wrong files</strong></summary>

- Add a `CLAUDE.md` file to your project root with instructions about file conventions
- Use `.claudeignore` to exclude directories (same syntax as `.gitignore`)

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
