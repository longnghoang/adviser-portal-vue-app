<script setup lang="ts">
import { RouterView } from 'vue-router';
import { useSidebar } from '@/composables/useSidebar';
import AppSidebar from './AppSidebar.vue';

const { isCollapsed } = useSidebar();
</script>

<template>
  <div class="min-h-screen w-full bg-background text-foreground">
    <!-- Left Sidebar -->
    <AppSidebar />

    <!-- Main Content Area with responsive offset -->
    <div
      :class="[
        'flex min-h-screen min-w-0 flex-col overflow-y-auto transition-all duration-300 ease-in-out',
        isCollapsed ? 'pl-[72px]' : 'pl-[256px]',
      ]"
    >
      <main class="flex-1">
        <RouterView />
      </main>
    </div>
  </div>
</template>
