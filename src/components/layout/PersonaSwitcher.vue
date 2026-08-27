<script setup lang="ts">
import { ArrowLeftRight } from 'lucide-vue-next';
import { usePersona } from '@/composables/usePersona';

const { currentPersona, switchPersona } = usePersona();
</script>

<template>
  <div class="mt-auto border-t border-white/10 pt-3">
    <div class="flex items-center gap-3 px-1 py-1.5">
      <!-- User Avatar -->
      <div
        class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 text-xs font-bold text-white shadow-inner ring-1 ring-white/20"
      >
        {{ currentPersona.initials || currentPersona.name.charAt(0) }}
      </div>

      <!-- User Info -->
      <div class="min-w-0 flex-1">
        <p class="truncate text-xs font-semibold text-white">
          {{ currentPersona.name }}
        </p>
        <p class="truncate text-[10px] text-white/50">
          {{ currentPersona.role }}
        </p>
      </div>
    </div>

    <!-- Switch Demo User Trigger -->
    <button
      type="button"
      class="mt-1 flex w-full items-center gap-1.5 rounded-lg px-1 py-1 text-[11px] text-white/50 transition-colors hover:bg-white/5 hover:text-white/90"
      title="Switch active demo persona"
      @click="switchPersona"
    >
      <ArrowLeftRight class="h-3 w-3 text-white/40" />
      <span>Switch demo user</span>
    </button>
  </div>
</template>
