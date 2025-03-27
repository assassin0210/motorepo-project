# 🧱 Monorepo Frontend (Sneakers & Shorts Store)

Microfrontend platform built with:

- ⚡️ Vite
- ⚛️ React 18
- 🧩 @mantine/core
- 🌐 i18next
- 📦 npm workspaces
- 📁 Monorepo structure: platform / shared / shorts-project / sneakers-project

---

## 📁 Project Structure

| Path                         | Description                    |
|------------------------------|--------------------------------|
| `packages/platform`          | Main container (host shell)    |
| `packages/shared`            | Shared UI-kit and i18n         |
| `packages/sneakers-project`  | Microfrontend: Sneakers project|
| `packages/shorts-project`    | Microfrontend: Shorts project  |

---

## 🚀 Installation

> 💡 Make sure you have **Node.js >= 18** installed

```bash
git clone https://github.com/assassin0210/motorepo-project.git
cd motorepo-project
npm install
```
🧪 Dev Scripts
```bash
npm run dev:platform
```
 • Sneakers project
```bash
npm run dev:sneakers-project
```

 • Shorts project
```bash
npm run dev:shorts-project
```

🛠 Build
```bash
npm run build:all
```

📦 Linting / Formatting
```bash
npm run lint        # Lint check
npm run lint:fix    # Auto-fix issues
```
🌍 i18n Support

Based on i18next with JSON translation resources shared via @shared. Language switch is global and works across all microfrontends.

🧪 Features

 • HMR for microfrontends 

 • Shared UI-kit with HMR support

 • i18next type-safety

 • CI/CD (Vercel or other)
