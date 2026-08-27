# Project Overview: Adviser Portal Vue App

`AGENTS.md` provides essential context, architectural patterns, conventions, and operational workflows for AI agents and developers working on this codebase.

---

## 1. Tech Stack & Frameworks

| Layer / Tool             | Technology                                                                      | Version   | Purpose / Notes                                              |
| :----------------------- | :------------------------------------------------------------------------------ | :-------- | :----------------------------------------------------------- |
| **Framework**            | [Vue 3](https://vuejs.org/)                                                     | `^3.5.13` | Composition API with `<script setup lang="ts">`              |
| **Language**             | [TypeScript](https://www.typescriptlang.org/)                                   | `~5.8.3`  | Strict mode enabled (`@vue/tsconfig`)                        |
| **Build Tool & Bundler** | [Vite](https://vite.dev/)                                                       | `^6.3.5`  | Fast HMR & build (`@vitejs/plugin-vue`)                      |
| **Routing**              | [Vue Router](https://router.vuejs.org/)                                         | `^4.6.4`  | SPA routing with lazy-loaded route views                     |
| **UI Components**        | [shadcn-vue](https://shadcn-vue.com/) / [Radix Vue](https://www.radix-vue.com/) | `^1.9.17` | Accessible, unstyled primitives + CVA variants               |
| **Styling**              | [Tailwind CSS](https://tailwindcss.com/)                                        | `^3.4.17` | Utility-first CSS with CSS variables & `tailwindcss-animate` |
| **Icons**                | [Lucide Vue Next](https://lucide.dev/guide/vue/)                                | `^1.0.0`  | Crisp SVG icon components                                    |
| **Linter**               | [ESLint](https://eslint.org/)                                                   | `^9.20.0` | Modern Flat Config (`eslint.config.js`)                      |
| **Formatter**            | [Prettier](https://prettier.io/)                                                | `^3.9.6`  | Integrated with `prettier-plugin-tailwindcss`                |
| **Type Checking**        | [vue-tsc](https://github.com/vuejs/language-tools)                              | `^2.2.8`  | Standalone type checker for Vue SFCs and TS                  |

---

## 2. Directory Structure & Path Aliases

### Directory Layout

```text
adviser-portal-vue-app/
├── .vscode/                 # VS Code workspace settings & recommended formatters
├── public/                  # Static public assets
├── src/
│   ├── assets/              # Static media & svg files
│   ├── components/          # App-level reusable components
│   │   └── ui/              # shadcn-vue base components (button, card, etc.)
│   ├── lib/                 # Core utilities (cn class merge helper, etc.)
│   ├── router/              # Vue Router instance & route definitions
│   ├── views/               # Page-level view components (e.g. HomeView.vue)
│   ├── App.vue              # Root application component & layout shell
│   ├── main.ts              # Application bootstrap & plugin registration
│   ├── style.css            # Global CSS variables, Tailwind directives, theme setup
│   └── vite-env.d.ts        # Vite client ambient types
├── components.json          # shadcn-vue CLI configuration
├── eslint.config.js         # ESLint 9 flat configuration
├── index.html               # Entry HTML template
├── package.json             # Dependencies and project scripts
├── tailwind.config.js       # Tailwind CSS theme & plugin configuration
├── tsconfig.app.json        # TypeScript configuration for application code
└── vite.config.ts           # Vite configuration & server setup
```

### Path Aliases

Configured in `vite.config.ts`, `tsconfig.app.json`, and `components.json`:

- `@/` &rarr; `<project-root>/src/`
- `@/components` &rarr; `<project-root>/src/components/`
- `@/components/ui` &rarr; `<project-root>/src/components/ui/`
- `@/lib` &rarr; `<project-root>/src/lib/`
- `@/lib/utils` &rarr; `<project-root>/src/lib/utils.ts`
- `@/composables` &rarr; `<project-root>/src/composables/` (when added)

---

## 3. Development Commands

Run commands from the project root directory:

```bash
# Start local development server (default port: 9001)
yarn dev
# or: npm run dev

# Run type checks and build for production
yarn build
# or: npm run build

# Preview production build locally
yarn preview
# or: npm run preview

# Lint codebase with ESLint
yarn lint
yarn lint:fix

# Format codebase with Prettier
yarn format
yarn format:check
```

---

## 4. Coding Standards & Architectural Guidelines

### Vue 3 & TypeScript Standards

1. **Single File Components (SFCs)**:
   - Always use `<script setup lang="ts">`.
   - Prefer `<template>` &rarr; `<script setup>` or `<script setup>` &rarr; `<template>` consistently. Do not use Options API.
   - Use PascalCase for component filenames (e.g., `Button.vue`, `HomeView.vue`, `UserProfileCard.vue`).

2. **Typing Props & Emits**:
   - Define props using generic type arguments with `defineProps<Props>()`.
   - Use `withDefaults()` for assigning default prop values.
   - Define custom emits with typed `defineEmits<Emits>()`.

   ```vue
   <script setup lang="ts">
   import type { HTMLAttributes } from 'vue';

   interface Props {
     title: string;
     disabled?: boolean;
     class?: HTMLAttributes['class'];
   }

   const props = withDefaults(defineProps<Props>(), {
     disabled: false,
     class: undefined,
   });
   </script>
   ```

3. **State & Reactivity**:
   - Use `ref()` for primitive values and direct object bindings.
   - Use `computed()` for derived state.
   - Avoid mutating props directly; emit update events or use `defineModel()`.

4. **Component Design with shadcn-vue & Radix Vue**:
   - Wrap primitives with `Radix Vue` when building accessible components.
   - Manage conditional classes and dynamic variants using `class-variance-authority` (`cva`) and the `cn()` utility (`@/lib/utils`).

   ```typescript
   import { type ClassValue, clsx } from 'clsx';
   import { twMerge } from 'tailwind-merge';

   export function cn(...inputs: ClassValue[]) {
     return twMerge(clsx(inputs));
   }
   ```

5. **Routing**:
   - Place full-page components in `src/views/` and suffix them with `View.vue` (e.g., `HomeView.vue`).
   - Define routes in `src/router/index.ts` using dynamic imports (`() => import('@/views/...')`) for code-splitting.

---

## 5. Formatting & Linting Conventions

### Prettier Configuration (`.prettierrc.json`)

- **Quotes**: Single quotes (`singleQuote: true`)
- **Semicolons**: Always include semicolons (`semi: true`)
- **Indentation**: 2 spaces (`tabWidth: 2`)
- **Trailing Commas**: ES5 style (`trailingComma: "es5"`)
- **Print Width**: 100 characters (`printWidth: 100`)
- **Tailwind Plugin**: `prettier-plugin-tailwindcss` sorts utility classes automatically on save.

### ESLint Rules (`eslint.config.js`)

- Flat config with `eslint-plugin-vue` (`flat/recommended`) + `typescript-eslint`.
- `vue/multi-word-component-names` is disabled (`off`) to accommodate standard view and layout names.
- Explicit `any` is warned (`@typescript-eslint/no-explicit-any: warn`). Use specific interface/type definitions whenever possible.
- Formatting conflicts are disabled via `eslint-config-prettier`.

### Theme & Styling Conventions

- The application uses CSS variables defined in `src/style.css` (e.g. `hsl(var(--primary))`, `hsl(var(--background))`, etc.).
- Dark mode is controlled via the `.dark` class applied to `document.documentElement`.
- Always reference semantic Tailwind color tokens (`bg-background`, `text-foreground`, `bg-primary`, `border-border`, etc.) instead of hardcoded hex codes.
