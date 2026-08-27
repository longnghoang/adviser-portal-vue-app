<script setup lang="ts">
import { ref } from 'vue';
import { RouterView } from 'vue-router';
import { Sparkles, Code2, Moon, Sun } from 'lucide-vue-next';
import { Button } from '@/components/ui/button';

const isDark = ref(false);
const count = ref(0);

function toggleTheme() {
  isDark.value = !isDark.value;
  if (isDark.value) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}
</script>

<template>
  <div class="min-h-screen bg-background text-foreground transition-colors duration-300">
    <!-- Header -->
    <header class="border-b border-border bg-card/50 backdrop-blur">
      <div class="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <div class="flex items-center gap-3">
          <div
            class="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground"
          >
            <Code2 class="h-5 w-5" />
          </div>
          <div>
            <h1 class="text-base font-bold sm:text-lg">Adviser Portal</h1>
            <p class="text-xs text-muted-foreground">Vue 3 + TypeScript Starter</p>
          </div>
        </div>

        <div class="flex items-center gap-2">
          <Button title="Toggle theme" variant="outline" size="icon" @click="toggleTheme">
            <Moon v-if="!isDark" class="h-4 w-4" />
            <Sun v-else class="h-4 w-4 text-yellow-400" />
          </Button>
          <Button variant="default" size="sm" @click="count++">
            <Sparkles class="h-4 w-4" />
            <span>Clicks: {{ count }}</span>
          </Button>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main>
      <RouterView />
    </main>
  </div>
</template>
