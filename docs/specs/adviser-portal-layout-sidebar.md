# Spec: Adviser Portal Layout & Left Sidebar Navigation

## Objective

Implement the global application layout with a responsive, collapsible dark left Sidebar navigation matching the "Goals Getter" Adviser Portal visual design. The main content area will host the active route view via `<RouterView />` (main content styling ignored at this stage as specified).

The sidebar serves as the primary navigation anchor, providing:

1. **Brand Header**: Collapsible toggle on GG logo click, "Goals Getter - Adviser Portal" branding, and `PanelLeftClose` toggle button.
2. **Collapsible State**: Smooth transition between expanded (`w-[256px]`) and compact (`w-[72px]`) modes.
3. **Grouped Navigation Sections**:
   - **``**: Dashboard, Clients, Investments, Switches & Redemptions.
   - **`Tools`**: Reports (icon: `FileText`), Resources (icon: `Library`).
4. **Interactive States**:
   - **Active**: Translucent gradient background, glowing left indicator bar, highlighted icon container (`bg-white/10`, `text-[#e55cda]`), and white text.
   - **Hover**: Subtle hover highlight, text transition to `white/90`, and hover chevron indicator.
5. **Bottom User Profile & Persona Switcher**:
   - Profile card displaying avatar with role-colored status dot (`#C43CB4` for Adviser, `#6366F1` for Admin), name, title, and quick persona switch action (`LogOut` icon).

---

## Tech Stack & Commands

- **Framework:** Vue 3.5+ (Composition API with `<script setup lang="ts">`)
- **Language:** TypeScript 5.8+ (strict mode)
- **Styling:** Tailwind CSS 3.4+ & custom CSS gradients (`.sidebar-gradient`)
- **Icons:** `lucide-vue-next` (`LayoutDashboard`, `Users`, `TrendingUp`, `ArrowLeftRight`, `FileText`, `Library`, `LogOut`, `ChevronRight`, `PanelLeftClose`)
- **Routing:** `vue-router` 4.6+
- **UI Primitives:** `radix-vue` & `class-variance-authority`

### Commands

- **Dev Server:** `npm run dev` (starts on port 9001)
- **Typecheck & Build:** `npm run build`
- **Lint Check:** `npm run lint`
- **Lint Fix:** `npm run lint:fix`
- **Format:** `npm run format`

---

## Project Structure

```text
src/
├── components/
│   ├── layout/
│   │   ├── AppLayout.vue          # Main layout container with dynamic content offset
│   │   ├── AppSidebar.vue         # Left Sidebar navigation component (collapsible)
│   │   └── PersonaSwitcher.vue    # Standalone persona profile component (if needed)
│   └── ui/                        # shadcn-vue primitives (button, card, etc.)
├── composables/
│   ├── usePersona.ts              # Composable for active user persona state
│   └── useSidebar.ts              # Composable for shared sidebar collapsed state
├── router/
│   └── index.ts                   # Vue Router definitions matching sidebar routes
├── types/
│   └── navigation.ts              # Types for nav items, sections, and adviser personas
├── views/
│   ├── ClientsView.vue            # Route views
│   ├── HomeView.vue               # Dashboard view
│   ├── InvestmentsView.vue
│   ├── ReportsView.vue
│   ├── ResourcesView.vue
│   └── SwitchesView.vue
├── App.vue                        # Root entry utilizing AppLayout
└── style.css                      # Theme tokens & sidebar-gradient class
docs/
└── specs/
    └── adviser-portal-layout-sidebar.md # Archived specification
```

---

## Component Architecture & DOM Structure

### 1. `AppLayout.vue`

- Outer container: `min-h-screen w-full bg-background text-foreground`
- Sidebar: Fixed `AppSidebar` (`fixed left-0 top-0 z-40 h-screen`)
- Main container: `flex min-h-screen min-w-0 flex-col overflow-y-auto transition-all duration-300 ease-in-out` with responsive offset padding (`pl-[256px]` expanded, `pl-[72px]` collapsed).

### 2. `AppSidebar.vue`

- Container: `aside` with classes `sidebar-gradient fixed left-0 top-0 z-40 flex h-screen select-none flex-col transition-all duration-300 ease-in-out` (`w-[256px]` expanded, `w-[72px]` collapsed), `border-r: 1px solid rgba(255, 255, 255, 0.055)`.

#### A. Header / Brand Logo (`h-[66px] flex items-center border-b border-white/[0.055]`)

- **Logo Action**: Clicking the GG logo toggles collapse/expand of the sidebar (does not navigate).
- **Expanded**:
  - Logo badge: `w-8 h-8 rounded-[10px]` with `linear-gradient(135deg, #d044cc 0%, #7B2FBE 100%)`, shadow, text `GG`.
  - Brand Titles: "Goals Getter" (`text-[13px] font-bold text-white`) + "Adviser Portal" (`text-[9px] font-semibold text-[#C4B0D8]/40 uppercase tracking-[0.16em]`).
  - Collapse Button: `PanelLeftClose` icon button.
- **Collapsed**: Centered GG logo badge acting as expand trigger.

#### B. Nav Link List (Organized into Sections)

- **Section 1 (`Menu`)**:
  1. `Dashboard` (`/`) — Icon: `LayoutDashboard`
  2. `Clients` (`/clients`) — Icon: `Users`
  3. `Investments` (`/investments`) — Icon: `TrendingUp`
  4. `Switches & Redemptions` (`/switches`) — Icon: `ArrowLeftRight`
- **Section Divider**: Top border separator `border-top: 1px solid rgba(255, 255, 255, 0.055)` with `pt-4`.
- **Section 2 (`Insights`)**:
  1. `Reports` (`/reports`) — Icon: `FileText`
  2. `Resources` (`/resources`) — Icon: `Library`

#### C. Nav Item Styling & States:

- **Active State**:
  - Text: `text-white font-[540]`
  - Background: `linear-gradient(135deg, rgba(196, 60, 180, 0.22) 0%, rgba(123, 47, 190, 0.16) 100%)` with `1px solid rgba(196, 60, 180, 0.22)`.
  - Left Indicator: `absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-[20px] rounded-r-full` with gradient `linear-gradient(180deg, #e55cda 0%, #c43cb4 100%)` and `box-shadow: 0 0 10px rgba(196, 60, 180, 0.7)`.
  - Icon Container: `bg-white/10` with `text-[#e55cda]`.
- **Hover / Inactive State**:
  - Text: `text-[#C4B0D8]/55 hover:text-white/90`.
  - Background: Translucent hover fill `rgba(255, 255, 255, 0.035)`.
  - Icon Container: `group-hover:bg-white/5` with `text-[#C4B0D8]/45 group-hover:text-[#C4B0D8]/75`.
  - Hover Arrow: `ChevronRight` fading in (`opacity-0 group-hover:opacity-35`).

#### D. Bottom Persona / User Profile Card

- Container: `p-3 shrink-0` with `border-top: 1px solid rgba(255, 255, 255, 0.055)`.
- Card: `rounded-xl p-2.5 flex items-center gap-3 transition-all duration-200 cursor-pointer hover:bg-white/10` (`justify-center p-2` when collapsed).
- Avatar: Rounded avatar image with role-colored border and status dot indicator (`#C43CB4` for Adviser, `#6366F1` for Admin).
- User info (expanded): Name (`text-[12px] font-bold text-white`), role title (`text-[10px] text-[#C4B0D8]/50`).
- Switch Action: `LogOut` icon button (`title="Switch Persona"`).

---

## Testing Strategy

- **Type Checking:** Run `vue-tsc -b` to verify prop types, route bindings, and interfaces.
- **Linting & Formatting:** ESLint 9 (`npm run lint`) and Prettier (`npm run format:check`).
- **Visual & Interactive Validation:**
  - Verify collapsible width transition and logo click collapse/expand toggle.
  - Verify active route glowing indicator, gradient background, and icon colors.
  - Verify separator line between Menu and Insights sections.
  - Verify corrected `FileText` and `Library` icons for Reports and Resources.
  - Verify persona profile details and switch action.

---

## Boundaries

### Always

- Use `<script setup lang="ts">` and strict TypeScript typing for all props and data contracts.
- Maintain seamless transition styling with Tailwind utility classes and CSS variables.
- Keep layout responsive and clean.

### Ask First

- Introducing external layout or store packages.
- Overwriting global design tokens without design approval.

### Never

- Hardcode broken inline styles outside the verified design gradients.
- Break routing or layout responsiveness when toggling sidebar states.

---

## Confirmed Requirements & Decisions

- **Navigation Items**:
  - **Menu**: Dashboard (`/`), Clients (`/clients`), Investments (`/investments`), Switches & Redemptions (`/switches`)
  - **Insights**: Reports (`/reports` - `FileText`), Resources (`/resources` - `Library`)
- **Separator**: 1px translucent top border on Insights section.
- **Logo Behavior**: Clicking GG logo toggles collapse/expand without triggering route navigation.
- **Collapsible Support**: Fully supported with synchronized main content offset in `AppLayout.vue`.
- **Persona Switcher**: Quick toggle between demo adviser personas with role-colored status indicator.
