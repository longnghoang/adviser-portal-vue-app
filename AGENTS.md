# Project Overview: Adviser Portal Vue App

`AGENTS.md` provides architectural context, tech stack specifications, coding standards, formatting conventions, and operational workflows for AI agents and human developers collaborating on this codebase.

---

## 1. Project Overview

The **Adviser Portal Vue App** is a modern, high-performance web application tailored for financial advisers. It features a responsive workspace designed to manage clients, track portfolios and investments, process switches and redemptions, generate financial reports, and access advisory resources.

### Key Capabilities & Layout
- **App Shell & Layout**: Flexible application layout (`AppLayout.vue`) featuring a collapsible left sidebar (`AppSidebar.vue`) with smooth transitions and persistent state.
- **Persona Switcher**: Dynamic adviser persona switching (`PersonaSwitcher.vue`) backed by a Pinia store, supporting role simulation (e.g., Senior Adviser vs. Associate Adviser).
- **Core Views**:
  - **Dashboard** (`/`): Executive overview and component showcase (`ShowcaseDemo.vue`).
  - **Clients** (`/clients`): Client portfolio and account directory.
  - **Investments** (`/investments`): Asset breakdown and market holdings.
  - **Switches & Redemptions** (`/switches`): Fund switching and transaction management.
  - **Reports** (`/reports`): Financial reporting, audits, and performance tracking.
  - **Resources** (`/resources`): Compliance, knowledge base, and advisory collateral.

---

## 2. Tech Stack & Frameworks

| Layer / Domain | Technology | Version | Purpose / Notes |
| :--- | :--- | :--- | :--- |
| **Framework** | [Vue 3](https://vuejs.org/) | `^3.5.40` | Composition API exclusively with `<script setup lang="ts">` |
| **Language** | [TypeScript](https://www.typescriptlang.org/) | `~6.0.0` | Strict type checking via `@vue/tsconfig` |
| **Build Tool & Dev Server** | [Vite](https://vite.dev/) | `^8.1.5` | Lightning-fast HMR, configured with `@vitejs/plugin-vue` and `@tailwindcss/vite` (port 9001) |
| **State Management** | [Pinia](https://pinia.vuejs.org/) | `^4.0.2` | Centralized state management using Composition API setup stores |
| **Routing** | [Vue Router](https://router.vuejs.org/) | `^5.2.0` | Client-side SPA routing with history mode and route lazy loading |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) | `^4.3.3` | Utility-first styling with `@theme inline` design tokens & `tw-animate-css` |
| **UI Primitives** | [shadcn-vue](https://shadcn-vue.com/) & [Reka UI](https://reka-ui.com/) | `^2.8.2` / `^2.10.4` | Accessible, headless primitives (buttons, cards, badges) styled with Tailwind CSS |
| **Utility Libraries** | [VueUse](https://vueuse.org/), `clsx`, `tailwind-merge` | `^14.4.0` | Composition utilities and class merging via `cn()` helper |
| **Iconography** | [Google Material Symbols](https://fonts.google.com/icons) | `^0.47.0` | Material symbols via `<MaterialSymbol />` wrapper component |
| **Unit Testing** | [Vitest](https://vitest.dev/) & [@vue/test-utils](https://test-utils.vuejs.org/) | `^4.1.10` / `^2.4.11` | Vite-native unit and component testing with jsdom |
| **E2E Testing** | [Playwright](https://playwright.dev/) | `^1.61.1` | Cross-browser automated end-to-end integration tests |
| **Linter** | [Oxlint](https://oxc.rs/) & [ESLint](https://eslint.org/) | `~1.74.0` / `^10.7.0` | Dual-tier linting: fast Rust-based Oxlint + comprehensive ESLint flat config |
| **Formatter** | [Oxfmt](https://oxc.rs/) | `^0.59.0` | Ultra-fast Rust-based formatter |
| **Type Checker** | [vue-tsc](https://github.com/vuejs/language-tools) | `^3.3.7` | Command-line type checking for `.vue` SFCs and TypeScript |
| **Package Manager** | [pnpm](https://pnpm.io/) | `10.33.2` | Fast, disk space-efficient package manager |
| **Runtime Target** | [Node.js](https://nodejs.org/) | `^22.18.0 \|\| >=24.12.0` | LTS modern runtime engines |

---

## 3. Directory Structure & Path Aliases

### Directory Layout

```text
adviser-portal-vue-app/
├── .vscode/                 # VS Code workspace settings & recommended extensions
├── e2e/                     # Playwright end-to-end test suites
│   ├── tsconfig.json        # TypeScript configuration for E2E tests
│   └── vue.spec.ts          # Sample E2E tests
├── public/                  # Static assets (favicon, public icons)
├── src/
│   ├── assets/              # Stylesheets and media
│   │   ├── base.css         # Font-family, smooth scrolling, base resets
│   │   └── main.css         # Tailwind v4 imports, @theme design tokens, CSS variables
│   ├── components/          # Reusable Vue components
│   │   ├── __tests__/       # Component unit tests (*.spec.ts)
│   │   ├── layout/          # App shell components (AppLayout, AppSidebar, PersonaSwitcher)
│   │   ├── ui/              # shadcn-vue primitives (badge, button, card)
│   │   ├── MaterialSymbol.vue # Material Symbol icon wrapper component
│   │   └── ShowcaseDemo.vue # Component demonstration showcase
│   ├── lib/                 # Shared utilities
│   │   └── utils.ts         # cn() utility merging clsx and tailwind-merge
│   ├── router/              # Vue Router configuration
│   │   └── index.ts         # Route definitions and code-split view loaders
│   ├── stores/              # Pinia global stores
│   │   ├── app.ts           # Sidebar state and adviser persona management
│   │   └── index.ts         # Store barrel exports
│   ├── types/               # TypeScript type definitions and interfaces
│   │   └── navigation.ts    # Navigation item and persona contracts
│   ├── views/               # Route-level view components
│   │   ├── ClientsView.vue
│   │   ├── DashboardView.vue
│   │   ├── InvestmentsView.vue
│   │   ├── ReportsView.vue
│   │   ├── ResourcesView.vue
│   │   └── SwitchesView.vue
│   ├── App.vue              # Root application component
│   ├── env.d.ts             # Ambient Vite and Vue module type declarations
│   └── main.ts              # Application entry point, styling, and plugin mounts
├── .editorconfig            # Cross-editor formatting specifications
├── .oxfmtrc.json            # Oxfmt code formatter configuration
├── .oxlintrc.json           # Oxlint rules and plugin configurations
├── components.json          # shadcn-vue registry and generator config
├── eslint.config.ts         # Flat ESLint configuration with Vue TS and plugins
├── package.json             # NPM package scripts and dependencies
├── playwright.config.ts     # Playwright test runner settings
├── tsconfig.app.json        # TypeScript config for client application
├── tsconfig.json            # Root TypeScript project references
├── tsconfig.node.json       # TypeScript config for Node/Vite build tooling
├── tsconfig.vitest.json     # TypeScript config for Vitest unit tests
├── vite.config.ts           # Vite build pipeline and dev server config
└── vitest.config.ts         # Vitest configuration extending Vite config
```

### Path Aliases

Aliases configured in `vite.config.ts`, `tsconfig.app.json`, and `components.json`:

- `@/` &rarr; `<project-root>/src/`
- `@/components` &rarr; `<project-root>/src/components/`
- `@/components/ui` &rarr; `<project-root>/src/components/ui/`
- `@/lib` &rarr; `<project-root>/src/lib/`
- `@/lib/utils` &rarr; `<project-root>/src/lib/utils.ts`
- `@/stores` &rarr; `<project-root>/src/stores/`
- `@/types` &rarr; `<project-root>/src/types/`
- `@/views` &rarr; `<project-root>/src/views/`

---

## 4. Development & Operational Commands

All commands should be executed from the project root using `pnpm`:

| Command | Purpose |
| :--- | :--- |
| `pnpm dev` | Starts the Vite development server at `http://localhost:9001` with HMR |
| `pnpm build` | Runs full type check (`vue-tsc`) and builds for production (`dist/`) |
| `pnpm build-only` | Builds production bundle with Vite directly without type checking |
| `pnpm preview` | Serves the local production build preview |
| `pnpm type-check` | Runs `vue-tsc --build` to detect TypeScript and SFC errors |
| `pnpm lint` | Runs the full lint pipeline: Oxlint (`lint:oxlint`) followed by ESLint (`lint:eslint`) |
| `pnpm lint:oxlint` | Runs fast Oxlint check with auto-fix: `oxlint . --fix` |
| `pnpm lint:eslint` | Runs ESLint check with auto-fix and caching: `eslint . --fix --cache` |
| `pnpm format` | Formats all files in `src/` using Oxfmt: `oxfmt src/` |
| `pnpm test:unit` | Executes unit tests with Vitest |
| `pnpm test:e2e` | Executes Playwright end-to-end test suites |

---

## 5. Coding Standards & Architectural Guidelines

### Vue 3 & TypeScript Rules

1. **Single File Components (SFCs)**:
   - Always use `<script setup lang="ts">`. Options API or legacy `defineComponent({ setup() {} })` syntax is forbidden.
   - Use PascalCase for component filenames (e.g., `AppSidebar.vue`, `PersonaSwitcher.vue`, `DashboardView.vue`).
   - Suffix all route page components with `View.vue` and keep them inside `src/views/`.
   - Maintain consistent section order: `<script setup lang="ts">`, `<template>`, `<style>` (when local styles are strictly necessary).

2. **Strict Props & Emits Typing**:
   - Define props using TypeScript interfaces with `defineProps<Props>()`.
   - Assign defaults using `withDefaults()`.
   - Define emits using typed event maps with `defineEmits<Emits>()`.

   ```vue
   <script setup lang="ts">
   import type { HTMLAttributes } from 'vue';

   interface Props {
     label: string;
     variant?: 'default' | 'outline' | 'ghost';
     disabled?: boolean;
     class?: HTMLAttributes['class'];
   }

   const props = withDefaults(defineProps<Props>(), {
     variant: 'default',
     disabled: false,
     class: undefined,
   });

   const emit = defineEmits<{
     (e: 'select', value: string): void;
   }>();
   </script>
   ```

3. **Reactivity & State Management (Pinia)**:
   - Use Pinia Setup Stores (`defineStore('storeId', () => { ... })`) to align with Composition API conventions.
   - Keep state strictly in stores when shared across components or views (e.g., user personas, navigation/sidebar state).
   - Use `storeToRefs()` when destructuring reactive state or getters in components to avoid losing reactivity. Destructure methods/actions directly from the store instance.
   - Prefer `ref()` for primitive and object state, and `computed()` for derived state.

4. **UI Design System with shadcn-vue & Tailwind CSS v4**:
   - UI primitives reside in `src/components/ui/` and are built upon Reka UI (`reka-ui`) and `class-variance-authority` (`cva`).
   - Use the `cn()` helper from `@/lib/utils` to safely merge Tailwind classes and conditional class maps.
   - **Semantic Color Tokens**: Always use semantic design tokens defined in `src/assets/main.css` (`bg-background`, `text-foreground`, `bg-card`, `border-border`, `text-muted-foreground`, `bg-primary`, etc.) instead of hardcoded hex values or raw arbitrary classes.
   - Support dark mode using CSS variables and OKLCH color palettes configured under `:root` and `.dark`.

5. **Icon Conventions**:
   - **Google Material Symbols**: Use the dedicated `<MaterialSymbol />` component (`src/components/MaterialSymbol.vue`) for UI icons:
     ```vue
     <MaterialSymbol name="dashboard" :size="20" variant="outlined" />
     ```

6. **Route Definitions & Code Splitting**:
   - Keep routes in `src/router/index.ts`.
   - Lazy load non-root view components via dynamic imports:
     ```typescript
     {
       path: '/clients',
       name: 'clients',
       component: () => import('@/views/ClientsView.vue'),
     }
     ```

---

## 6. Formatting & Linting Rules

### Formatting Configuration

Code formatting is managed by **Oxfmt** (`.oxfmtrc.json`) and synchronized with `.editorconfig`:

- **Schema**: `oxfmt/configuration_schema.json`
- **Semicolons**: Required (`"semi": true`)
- **Quotes**: Single quotes (`"singleQuote": true`)
- **Indentation**: 2 spaces (`"tabWidth": 2`, `indent_style = space`)
- **Line Length**: 100 characters max (`"printWidth": 100`)
- **Line Endings**: LF (`end_of_line = lf`)
- **Trailing Whitespace**: Automatically trimmed on save (`trim_trailing_whitespace = true`)
- **Final Newline**: Required (`insert_final_newline = true`)

### Linting Architecture & Rules

Linting is executed via a high-speed, two-tiered strategy (`pnpm lint`):

1. **Tier 1: Oxlint (`.oxlintrc.json`)**
   - Extremely fast linting engine written in Rust.
   - Active plugins: `eslint`, `typescript`, `unicorn`, `oxc`, `vue`, `vitest`.
   - Environment: `browser: true`.
   - Categories: `correctness: "error"` enforced across all target files.

2. **Tier 2: ESLint (`eslint.config.ts`)**
   - Configured using the modern Flat Config format with TypeScript helper `defineConfigWithVueTs`.
   - **Vue Rules**: `pluginVue.configs['flat/essential']`.
   - **TypeScript Rules**: `vueTsConfigs.recommended`.
   - **Oxlint Integration**: `pluginOxlint.buildFromOxlintConfigFile('.oxlintrc.json')` disables duplicate rules handled by Oxlint to maximize performance.
   - **Testing Rules**:
     - Vitest plugin (`@vitest/eslint-plugin`) enabled for `src/**/__tests__/*`.
     - Playwright plugin (`eslint-plugin-playwright`) enabled for `e2e/**/*.{test,spec}.{js,ts,jsx,tsx}`.
   - **Component Exceptions**: `vue/multi-word-component-names` is set to `'off'` for `src/components/ui/**/*.vue` to support shadcn-vue naming conventions (`Button.vue`, `Card.vue`, `Badge.vue`).
   - **Prettier Conflict Prevention**: `skipFormatting` (`eslint-config-prettier/flat`) disables any stylistic rules that conflict with the formatter.

---

## 7. Testing Standards

- **Unit Tests (`src/components/__tests__/*.spec.ts`)**:
  - Focus on isolated component rendering, prop propagation, emit triggers, and store state mutations.
  - Use `@vue/test-utils` (`mount`, `shallowMount`) and Vitest assertions (`expect`, `describe`, `it`, `vi`).
- **E2E Tests (`e2e/*.spec.ts`)**:
  - Verify complete critical user journeys, page navigation, persona switching, and responsiveness across Chromium, Firefox, and WebKit using Playwright.
