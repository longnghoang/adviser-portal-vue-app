<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { LogOut } from 'lucide-vue-next';
import { useAppStore } from '@/stores';

const props = withDefaults(
  defineProps<{
    isCollapsed?: boolean;
  }>(),
  {
    isCollapsed: false,
  }
);

const appStore = useAppStore();
const { currentPersona } = storeToRefs(appStore);
const { switchPersona } = appStore;
</script>

<template>
  <div class="shrink-0 p-3" style="border-top: 1px solid rgba(255, 255, 255, 0.055)">
    <div
      :class="[
        'group flex cursor-pointer items-center gap-3 rounded-xl p-2.5 transition-all duration-200 hover:bg-white/10',
        props.isCollapsed ? 'justify-center p-2' : 'border border-white/[0.06] bg-white/[0.04]',
      ]"
      :title="
        props.isCollapsed
          ? `${currentPersona.name} (${currentPersona.title}) - Click to switch`
          : undefined
      "
      @click="switchPersona"
    >
      <!-- Avatar with status dot -->
      <div class="relative shrink-0">
        <div
          class="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 text-xs font-bold text-white shadow-inner"
        >
          {{ currentPersona.initials || currentPersona.name.charAt(0) }}
        </div>
      </div>

      <!-- User info when expanded -->
      <div v-if="!props.isCollapsed" class="min-w-0 flex-1">
        <p class="truncate text-[12px] font-bold leading-tight text-white">
          {{ currentPersona.name }}
        </p>
        <p class="mt-0.5 truncate text-[10px] text-[#C4B0D8]/50">
          {{ currentPersona.title }}
        </p>
      </div>

      <!-- Switch Persona button when expanded -->
      <button
        v-if="!props.isCollapsed"
        type="button"
        class="rounded-md p-1 text-[#C4B0D8]/40 transition-colors hover:bg-white/10 hover:text-white"
        title="Switch Persona"
        @click.stop="switchPersona"
      >
        <LogOut class="h-3.5 w-3.5" />
      </button>
    </div>
  </div>
</template>
