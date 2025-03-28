## Monorepo Frontend Platform

### 🔗 Repository

[https://github.com/assassin0210/motorepo-project](https://github.com/assassin0210/motorepo-project)

---

### 📦 How to Run the Project

#### 1. Install dependencies (from the root):

```bash
npm install
```

#### 2. Start the platform locally:

```bash
npm run dev:platform
```

Alternatively, via workspace directly:

```bash
npm --workspace @monorepo/platform run dev
```

#### 3. Build all apps (shared + microfrontends + platform):

```bash
npm run build:all
```

---

### 🌍 i18n Setup

- Internationalization is implemented using `i18next` and `react-i18next`
- JSON translation files are located in `shared/locales` (e.g. `locales/en/translation.json`)
- Initialization occurs in `shared/src/i18n/index.ts`:

```ts
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from '../locales/en/translation.json'
import ru from '../locales/ru/translation.json'

i18n
  .use(initReactI18next)
  .init({
    resources: { en: { translation: en }, ru: { translation: ru } },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  })
```

- Components use `useTranslation()` hook:

```tsx
const { t } = useTranslation()
return <h1>{t('some.key')}</h1>
```

---

### ♻️ HMR (Hot Module Replacement)

- HMR is enabled by default via **Vite**.
- Microfrontends (`sneakers`, `shorts`) are developed as separate workspaces.
- Connected to `platform` using `React.lazy` and alias imports:

```tsx
const SneakersProject = React.lazy(() => import('@sneakers-project/App'))
const ShortsProject = React.lazy(() => import('@shorts-project/App'))
```

- Vite tracks changes in these packages thanks to `npm workspaces` and proper aliasing.
- This ensures full hot module replacement during local development.

---

### 🛠 Build Structure

- Each project (`platform`, `sneakers-project`, `shorts-project`, `shared`) is a separate workspace under `packages/`
- Build process:
    - `shared`: compiled using `tsc`
    - `sneakers` / `shorts`: built with Vite
    - `platform`: builds all dependencies and runs `vite build`

---

### 📂 Output

- After `npm run build:all`, the output is in `packages/platform/dist` (used by Vercel or static deployment).

---

Feel free to clone and experiment!

