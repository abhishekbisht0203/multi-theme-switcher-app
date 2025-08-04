# 🖌️ Multi-Theme Switcher App

A professional, responsive **Next.js 14** web application featuring **three distinct UI themes**, powered by **TypeScript**, **Tailwind CSS**, and **React Context API**. This app demonstrates advanced theme switching, real-time API integration, and persistent UX customization.

🔗 **Live Demo:** [https://multi-theme-switcher-app-smoky.vercel.app](https://multi-theme-switcher-app-smoky.vercel.app)

---

## 🎯 Objective

Build a React-based app for **Hipster Inc.** that allows users to toggle between **three completely different visual themes**. Each theme changes not just colors, but also structure, fonts, spacing, and layout.

---

## 🌟 Features

- 🌈 **Three Themes**
  - **Theme 1 (Default):** Light, minimal, sans-serif font
  - **Theme 2:** Dark mode with sidebar, serif font
  - **Theme 3:** Colorful, playful card layout using Google Font *Pacifico*
- 🧠 Theme persisted via `localStorage`
- 🔄 Real product data fetched from [FakeStoreAPI](https://fakestoreapi.com/products)
- 📄 Multi-page setup: Home, About, Contact
- 📱 Fully responsive (mobile & desktop)
- 🎨 Subtle transitions between themes
- ⚙️ Built with modern, scalable architecture using **Next.js App Router** and **TypeScript**

---

## 📦 Full List of Dependencies

Below are all dependencies used in this project:

### 🚀 Core Framework & Language

- `next` — React framework for production
- `react` — Core React library
- `react-dom` — React DOM rendering
- `typescript` — Type-safe code

### 🎨 Styling & Fonts

- `tailwindcss` — Utility-first CSS framework
- `postcss` — Required by Tailwind
- `autoprefixer` — Adds vendor prefixes
- `tailwindcss-animate` — Animations for transitions
- `next/font` — Font optimization and loading
- `clsx` — Conditional className utility
- `tailwind-merge` — Intelligent class merging
- `class-variance-authority` — Variant-based styling utility

### 🧩 UI & Icons

- `lucide-react` — Beautiful icon set
- `@radix-ui/react-toast` — Lightweight toast component

### 🔀 Routing & State

- **Next.js App Router** (`app/` directory)
- **React Context API** — For managing and persisting theme state
- `localStorage` — To remember selected theme on reload

---

## 💾 How to Install All Dependencies

To install all necessary packages, run:

```bash
npm install next react react-dom typescript tailwindcss postcss autoprefixer
npm install clsx tailwind-merge class-variance-authority
npm install lucide-react tailwindcss-animate @radix-ui/react-toast

### Clone the Repository
bash

git clone https://github.com/abhishekbisht0203/multi-theme-switcher-app.git
cd multi-theme-switcher-app

###Install Dependencies

bash
npm install

### Run the App Locally
bash
npm run dev