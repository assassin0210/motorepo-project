# 🧱 Monorepo Frontend (Sneakers & Shorts Store)

Микрофронтенд-платформа, собранная с использованием:

- ⚡️ Vite
- ⚛️ React 18
- 🧩 @mantine/core
- 🌐 i18next
- 📦 npm workspaces
- 📁 Монорепозиторий со структурами: platform / shared / shorts-project / sneakers-project

---

## 📁 Структура проекта

| Путь                | Назначение                      |
|---------------------|---------------------------------|
| `packages/platform` | Основной контейнер (host shell) |
| `packages/shared`   | Общий UI-kit и переводы (i18n)  |
| `packages/sneakers-project` | Микрофронтенд: Sneakers-project |
| `packages/shorts-project`   | Микрофронтенд: Shorts-project   |


---

## 🚀 Установка

> 💡 Убедись, что у тебя установлен **Node.js >= 18**

```bash
git clone https://github.com/assassin0210/motorepo-project.git
cd motorepo-project
npm install


🧪 Скрипты запуска
• Платформа (host shell)
npm run dev:platform

• Кроссовки (sneakers-project)
npm run dev:sneakers-project

 • Шорты (ashorts-project)
npm run dev:shorts-project


🛠 Сборка
npm run build:all


📦 Линтинг / форматирование

npm run lint        # Проверка
npm run lint:fix    # С автофиксом
