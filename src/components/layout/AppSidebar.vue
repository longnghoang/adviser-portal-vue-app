<script setup lang="ts">
import type { Component } from 'vue';
import { useRoute, RouterLink } from 'vue-router';
import {
  LayoutDashboard,
  Users,
  TrendingUp,
  ArrowLeftRight,
  FileText,
  Library,
  ChevronRight,
  PanelLeftClose,
} from 'lucide-vue-next';
import { useSidebar } from '@/composables/useSidebar';
import PersonaSwitcher from './PersonaSwitcher.vue';

interface NavItem {
  id: string;
  to: string;
  icon: Component;
  label: string;
}

const route = useRoute();
const { isCollapsed, toggleCollapsed } = useSidebar();

const primaryNavItems: NavItem[] = [
  { id: 'dashboard', to: '/', icon: LayoutDashboard, label: 'Dashboard' },
  { id: 'clients', to: '/clients', icon: Users, label: 'Clients' },
  { id: 'investments', to: '/investments', icon: TrendingUp, label: 'Investments' },
  { id: 'transactions', to: '/switches', icon: ArrowLeftRight, label: 'Switches & Redemptions' },
];

const secondaryNavItems: NavItem[] = [
  { id: 'reports', to: '/reports', icon: FileText, label: 'Reports' },
  { id: 'resources', to: '/resources', icon: Library, label: 'Resources' },
];

// function isItemActive(path: string): boolean {
//   if (path === '/') {
//     return route.path === '/';
//   }
//   return route.path.startsWith(path);
// }

const isItemActive = (path: string): boolean => {
  if (path === '/') {
    return route.path === '/';
  }
  return route.path.startsWith(path);
};
</script>

<template>
  <aside
    :class="[
      'sidebar-gradient fixed left-0 top-0 z-40 flex h-screen select-none flex-col transition-all duration-300 ease-in-out',
      isCollapsed ? 'w-[72px]' : 'w-[256px]',
    ]"
    style="border-right: 1px solid rgba(255, 255, 255, 0.055)"
  >
    <!-- Logo area -->
    <div
      :class="[
        'flex h-[66px] shrink-0 items-center',
        isCollapsed ? 'justify-center px-3' : 'justify-between px-4',
      ]"
      style="border-bottom: 1px solid rgba(255, 255, 255, 0.055)"
    >
      <!-- Expanded brand logo (click to collapse sidebar) -->
      <div
        v-if="!isCollapsed"
        class="group flex cursor-pointer items-center gap-3 overflow-hidden transition-opacity hover:opacity-90"
        title="Collapse Sidebar"
        @click="toggleCollapsed"
      >
        <div
          class="flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] shadow-md transition-transform group-hover:scale-105"
          style="
            background: linear-gradient(135deg, #d044cc 0%, #7b2fbe 100%);
            box-shadow:
              0 2px 10px rgba(196, 60, 180, 0.35),
              inset 0 1px 0 rgba(255, 255, 255, 0.18);
          "
        >
          <span class="text-[11px] font-black tracking-tight text-white">GG</span>
        </div>
        <div class="overflow-hidden">
          <p class="truncate text-[13px] font-bold leading-tight tracking-[-0.015em] text-white">
            Goals Getter
          </p>
          <p
            class="truncate text-[9px] font-semibold uppercase tracking-[0.16em] text-[#C4B0D8]/40"
          >
            Adviser Portal
          </p>
        </div>
      </div>

      <!-- Collapsed brand logo trigger (click to expand sidebar) -->
      <div
        v-else
        class="flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-[10px] shadow-md transition-transform hover:scale-105"
        style="
          background: linear-gradient(135deg, #d044cc 0%, #7b2fbe 100%);
          box-shadow:
            0 2px 10px rgba(196, 60, 180, 0.35),
            inset 0 1px 0 rgba(255, 255, 255, 0.18);
        "
        title="Expand Sidebar"
        @click="toggleCollapsed"
      >
        <span class="text-[11px] font-black tracking-tight text-white">GG</span>
      </div>

      <!-- Collapse toggle button -->
      <button
        v-if="!isCollapsed"
        type="button"
        class="flex h-7 w-7 items-center justify-center rounded-lg text-[#C4B0D8]/40 transition-colors hover:bg-white/10 hover:text-white"
        title="Collapse Sidebar"
        @click="toggleCollapsed"
      >
        <PanelLeftClose class="h-4 w-4" />
      </button>
    </div>

    <!-- Main navigation -->
    <div class="scrollbar-none flex-1 space-y-6 overflow-y-auto px-3 py-4">
      <!-- First Section -->
      <div class="space-y-1">
        <RouterLink
          v-for="item in primaryNavItems"
          :key="item.id"
          :to="item.to"
          :class="[
            'group relative flex w-full cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-medium transition-all duration-200',
            isItemActive(item.to) ? 'text-white' : 'text-[#C4B0D8]/55 hover:text-white/90',
            isCollapsed && 'justify-center px-0',
          ]"
        >
          <!-- Active background -->
          <span
            v-if="isItemActive(item.to)"
            class="absolute inset-0 rounded-xl"
            style="
              background: linear-gradient(
                135deg,
                rgba(196, 60, 180, 0.22) 0%,
                rgba(123, 47, 190, 0.16) 100%
              );
              border: 1px solid rgba(196, 60, 180, 0.22);
            "
          />

          <!-- Active left indicator -->
          <span
            v-if="isItemActive(item.to)"
            class="absolute left-0 top-1/2 h-[20px] w-[3px] -translate-y-1/2 rounded-r-full"
            style="
              background: linear-gradient(180deg, #e55cda 0%, #c43cb4 100%);
              box-shadow: 0 0 10px rgba(196, 60, 180, 0.7);
            "
          />

          <!-- Hover highlight -->
          <span
            v-if="!isItemActive(item.to)"
            class="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-150 group-hover:opacity-100"
            style="background: rgba(255, 255, 255, 0.035)"
          />

          <!-- Icon container -->
          <div
            :class="[
              'relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl transition-all',
              isItemActive(item.to) ? 'bg-white/10' : 'group-hover:bg-white/5',
            ]"
          >
            <component
              :is="item.icon"
              :class="[
                'h-[15px] w-[15px] shrink-0 transition-colors',
                isItemActive(item.to)
                  ? 'text-[#e55cda]'
                  : 'text-[#C4B0D8]/45 group-hover:text-[#C4B0D8]/75',
              ]"
            />
          </div>

          <!-- Label -->
          <span
            v-if="!isCollapsed"
            class="relative z-10 flex-1 truncate text-[13px] font-[540] tracking-[-0.01em]"
          >
            {{ item.label }}
          </span>

          <!-- Arrow on hover -->
          <ChevronRight
            v-if="!isCollapsed && !isItemActive(item.to)"
            class="relative z-10 h-3 w-3 shrink-0 opacity-0 transition-opacity group-hover:opacity-35"
          />
        </RouterLink>
      </div>

      <!-- Insights Section -->
      <div class="space-y-1 pt-4">
        <p
          v-if="!isCollapsed"
          class="mb-2 px-3 text-[9px] font-bold uppercase tracking-[0.18em] text-[#C4B0D8]/30"
        >
          Tools
        </p>
        <RouterLink
          v-for="item in secondaryNavItems"
          :key="item.id"
          :to="item.to"
          :class="[
            'group relative flex w-full cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-medium transition-all duration-200',
            isItemActive(item.to) ? 'text-white' : 'text-[#C4B0D8]/55 hover:text-white/90',
            isCollapsed && 'justify-center px-0',
          ]"
        >
          <!-- Active background -->
          <span
            v-if="isItemActive(item.to)"
            class="absolute inset-0 rounded-xl"
            style="
              background: linear-gradient(
                135deg,
                rgba(196, 60, 180, 0.22) 0%,
                rgba(123, 47, 190, 0.16) 100%
              );
              border: 1px solid rgba(196, 60, 180, 0.22);
            "
          />

          <!-- Active left indicator -->
          <span
            v-if="isItemActive(item.to)"
            class="absolute left-0 top-1/2 h-[20px] w-[3px] -translate-y-1/2 rounded-r-full"
            style="
              background: linear-gradient(180deg, #e55cda 0%, #c43cb4 100%);
              box-shadow: 0 0 10px rgba(196, 60, 180, 0.7);
            "
          />

          <!-- Hover highlight -->
          <span
            v-if="!isItemActive(item.to)"
            class="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-150 group-hover:opacity-100"
            style="background: rgba(255, 255, 255, 0.035)"
          />

          <!-- Icon container -->
          <div
            :class="[
              'relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl transition-all',
              isItemActive(item.to) ? 'bg-white/10' : 'group-hover:bg-white/5',
            ]"
          >
            <component
              :is="item.icon"
              :class="[
                'h-[15px] w-[15px] shrink-0 transition-colors',
                isItemActive(item.to)
                  ? 'text-[#e55cda]'
                  : 'text-[#C4B0D8]/45 group-hover:text-[#C4B0D8]/75',
              ]"
            />
          </div>

          <!-- Label -->
          <span
            v-if="!isCollapsed"
            class="relative z-10 flex-1 truncate text-[13px] font-[540] tracking-[-0.01em]"
          >
            {{ item.label }}
          </span>

          <!-- Arrow on hover -->
          <ChevronRight
            v-if="!isCollapsed && !isItemActive(item.to)"
            class="relative z-10 h-3 w-3 shrink-0 opacity-0 transition-opacity group-hover:opacity-35"
          />
        </RouterLink>
      </div>
    </div>
    <!-- User profile & Persona switcher -->
    <PersonaSwitcher :is-collapsed="isCollapsed" />
  </aside>
</template>
