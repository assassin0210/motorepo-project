#!/bin/bash

echo "🧹 Cleaning project (like Vercel CI)..."
rm -rf node_modules
rm -rf package-lock.json
rm -rf packages/*/dist
rm -rf packages/*/node_modules

echo "📦 Installing dependencies..."
npm install

echo "🏗️ Building all packages (simulating Vercel build)..."
npm run build:all

if [ $? -eq 0 ]; then
  echo "✅ Build successful!"
else
  echo "❌ Build failed."
  exit 1
fi
