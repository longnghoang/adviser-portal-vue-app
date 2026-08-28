<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { RouterView } from 'vue-router';
import { useAppStore } from '@/stores';
import AppSidebar from './AppSidebar.vue';

const appStore = useAppStore();
const { isSidebarCollapsed } = storeToRefs(appStore);
</script>

<template>
  <div class="min-h-screen w-full bg-background text-foreground">
    <!-- Left Sidebar -->
    <AppSidebar />

    <!-- Main Content Area with responsive offset -->
    <div
      :class="[
        'flex min-h-screen min-w-0 flex-col overflow-y-auto transition-all duration-300 ease-in-out',
        isSidebarCollapsed ? 'pl-[72px]' : 'pl-[256px]',
      ]"
    >
      <main class="flex-1">
        <RouterView />
      </main>
    </div>
  </div>
</template>
